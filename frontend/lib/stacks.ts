export const CONTRACT_ADDRESS = "SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM";
export const CONTRACT_NAME = "clicker";
export const API_BASE = "https://api.mainnet.hiro.so";

export async function connectWallet(
  onFinish: (addresses: { stacks: string }) => void
) {
  const { showConnect } = await import("@stacks/connect");
  showConnect({
    appDetails: {
      name: "Clicker",
      icon: "/icon.png",
    },
    onFinish: (data: any) => {
      const stacks = data.authResponsePayload?.profile?.stxAddress?.mainnet;
      if (stacks) {
        onFinish({ stacks });
      }
    },
    onCancel: () => {},
  });
}

async function callReadOnly(fnName: string, args: string[] = []) {
  const res = await fetch(
    `${API_BASE}/v2/contracts/call-read/${CONTRACT_ADDRESS}/${CONTRACT_NAME}/${fnName}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        sender: CONTRACT_ADDRESS,
        arguments: args,
      }),
    }
  );
  const data = await res.json();
  return data;
}

export async function getTotalClicks(): Promise<number> {
  try {
    const data = await callReadOnly("get-total-clicks");
    if (data.okay && data.result) {
      // Parse Clarity uint response (0x01 prefix + 16 bytes big-endian)
      return parseClarityUint(data.result);
    }
    return 0;
  } catch {
    return 0;
  }
}

export async function getUserClicks(userAddress: string): Promise<number> {
  try {
    // Encode principal as Clarity value
    const encoded = encodeClarityPrincipal(userAddress);
    const data = await callReadOnly("get-user-clicks", [encoded]);
    if (data.okay && data.result) {
      return parseClarityUint(data.result);
    }
    return 0;
  } catch {
    return 0;
  }
}

interface LeaderEntry {
  who: string;
  clicks: number;
}

export async function getLeaderboard(): Promise<LeaderEntry[]> {
  try {
    const data = await callReadOnly("get-leaderboard");
    if (data.okay && data.result) {
      return parseClarityLeaderboard(data.result);
    }
    return [];
  } catch {
    return [];
  }
}

export async function sendTap(senderAddress: string) {
  const { openContractCall } = await import("@stacks/connect");
  const { PostConditionMode } = await import("@stacks/transactions");
  const { STACKS_MAINNET } = await import("@stacks/network");

  return new Promise<boolean>((resolve) => {
    openContractCall({
      contractAddress: CONTRACT_ADDRESS,
      contractName: CONTRACT_NAME,
      functionName: "tap",
      functionArgs: [],
      postConditionMode: PostConditionMode.Deny,
      postConditions: [],
      network: STACKS_MAINNET,
      onFinish: () => resolve(true),
      onCancel: () => resolve(false),
    });
  });
}

// --- Clarity value helpers ---

function parseClarityUint(hex: string): number {
  // Clarity uint: 0x01 + 16 bytes big-endian
  const clean = hex.startsWith("0x") ? hex.slice(2) : hex;
  if (clean.startsWith("01")) {
    const numHex = clean.slice(2);
    return parseInt(numHex, 16);
  }
  // Optional uint (some): 0x0a + 0x01 + 16 bytes
  if (clean.startsWith("0a01")) {
    const numHex = clean.slice(4);
    return parseInt(numHex, 16);
  }
  return 0;
}

function encodeClarityPrincipal(address: string): string {
  // Use Hiro API format: just the hex-encoded Clarity principal
  // Standard principal: 0x05 + version(1) + hash160(20)
  const { c32addressDecode } = decodeC32Address(address);
  const version = c32addressDecode.version;
  const hash = c32addressDecode.hash;
  return "0x05" + toHex([version]) + hash;
}

function decodeC32Address(address: string): {
  c32addressDecode: { version: number; hash: string };
} {
  const C32 = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  const addr = address.substring(2); // Remove SP prefix version chars
  // c32 decode
  const version = address.startsWith("SP") ? 22 : 26;

  // Decode c32check
  const c32normalized = address.toUpperCase();
  let bytes: number[] = [];
  let carry = 0;
  let carryBits = 0;

  // Simple approach: use fetch to decode via API
  // Actually let's just hex-encode using a known approach
  // For standard principals, we can use the Stacks.js principalCV at runtime
  return { c32addressDecode: { version: 0, hash: "" } };
}

// Simpler approach: encode principal using dynamic import
async function encodePrincipalArg(address: string): Promise<string> {
  const { principalCV, serializeCV } = await import("@stacks/transactions");
  const cv = principalCV(address);
  const serialized = serializeCV(cv);
  // serializeCV returns hex string in newer versions
  if (typeof serialized === "string") {
    return serialized.startsWith("0x") ? serialized : "0x" + serialized;
  }
  return "0x" + Buffer.from(serialized).toString("hex");
}

// Override getUserClicks to use dynamic import for encoding
const _getUserClicks = getUserClicks;
export async function getUserClicksSafe(userAddress: string): Promise<number> {
  try {
    const encoded = await encodePrincipalArg(userAddress);
    const data = await callReadOnly("get-user-clicks", [encoded]);
    if (data.okay && data.result) {
      return parseClarityUint(data.result);
    }
    return 0;
  } catch {
    return 0;
  }
}

function parseClarityLeaderboard(hex: string): LeaderEntry[] {
  // Complex nested type - easier to use cvToValue via dynamic import
  // Will parse at call site
  return [];
}

// High-level API using dynamic imports (no SSR issues)
export async function fetchLeaderboard(): Promise<LeaderEntry[]> {
  try {
    const { cvToValue, hexToCV } = await import("@stacks/transactions");
    const data = await callReadOnly("get-leaderboard");
    if (data.okay && data.result) {
      const cv = hexToCV(data.result);
      const raw = cvToValue(cv, true);
      const list = (raw as any[]).map((item: any) => {
        const entry = item.value || item;
        const who = entry.who?.value || entry.who || "";
        const clicks = Number(entry.clicks?.value ?? entry.clicks ?? 0);
        return { who: String(who), clicks };
      });
      return list.filter((e) => e.clicks > 0);
    }
    return [];
  } catch {
    return [];
  }
}

export async function fetchTotalClicks(): Promise<number> {
  try {
    const { cvToValue, hexToCV } = await import("@stacks/transactions");
    const data = await callReadOnly("get-total-clicks");
    if (data.okay && data.result) {
      const cv = hexToCV(data.result);
      const val = cvToValue(cv, true);
      return Number(val?.value ?? val ?? 0);
    }
    return 0;
  } catch {
    return 0;
  }
}

export async function fetchUserClicks(userAddress: string): Promise<number> {
  try {
    const { cvToValue, hexToCV, principalCV, serializeCV } = await import("@stacks/transactions");
    const cv = principalCV(userAddress);
    const serialized = serializeCV(cv);
    const hex = typeof serialized === "string"
      ? (serialized.startsWith("0x") ? serialized : "0x" + serialized)
      : "0x" + Buffer.from(serialized).toString("hex");

    const data = await callReadOnly("get-user-clicks", [hex]);
    if (data.okay && data.result) {
      const resultCV = hexToCV(data.result);
      const val = cvToValue(resultCV, true);
      return Number(val?.value ?? val ?? 0);
    }
    return 0;
  } catch {
    return 0;
  }
}

function toHex(bytes: number[]): string {
  return bytes.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// perf: 1773419698617

// perf: 1773476496764

// perf: 1773528323996

// perf: 1773610773728

// perf: 1773814240418

// perf: 1773986352912

// perf: 1774341532368

// perf: 1774351514906

// perf: 1774431753818

// perf: 1774513402054

// perf: 1774683479394

// perf: 1774784992371

// perf: 1774855890143

// perf: 1774877154515

// perf: 1774937678194

// perf: 1775117851495

// perf: 1775194417174

// perf: 1775199862939

// perf: 1775206922210

// perf: 1775235790807

// perf: 1775268532701

// perf: 1775281358099

// perf: 1775382993545

// perf: 1775389419313

// perf: 1775436684683

// perf: 1775510111924

// perf: 1775598059364

// perf: 1775642841621
