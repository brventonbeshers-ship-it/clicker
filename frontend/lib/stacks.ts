import {
  createTapCall,
  getLeaderboard as getClickerLeaderboard,
  getTotalClicks as getClickerTotalClicks,
  getUserClicks as getClickerUserClicks,
} from "clicker-stacks-sdk";

export const CONTRACT_ADDRESS = "SP1Q7YR67R6WGP28NXDJD1WZ11REPAAXRJJ3V6RKM";
export const CONTRACT_NAME = "clicker";
export const API_BASE = "https://api.mainnet.hiro.so";

const CLICKER_CONFIG = {
  contractAddress: CONTRACT_ADDRESS,
  contractName: CONTRACT_NAME,
  apiBase: API_BASE,
};

export type { LeaderEntry } from "clicker-stacks-sdk";

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

export const getTotalClicks = () => getClickerTotalClicks(CLICKER_CONFIG);

export const getUserClicks = (userAddress: string) =>
  getClickerUserClicks(userAddress, CLICKER_CONFIG);

export const getLeaderboard = () => getClickerLeaderboard(CLICKER_CONFIG);

export const fetchTotalClicks = getTotalClicks;
export const fetchUserClicks = getUserClicks;
export const fetchLeaderboard = getLeaderboard;

export async function sendTap(_senderAddress: string) {
  const { openContractCall } = await import("@stacks/connect");
  const args = createTapCall(CLICKER_CONFIG);

  return new Promise<boolean>((resolve) => {
    openContractCall({
      ...args,
      onFinish: () => resolve(true),
      onCancel: () => resolve(false),
    });
  });
}

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

// perf: 1775694944854

// perf: 1775709741246

// perf: 1775751025235

// perf: 1775795613842

// retry: 1775827101017

// perf: 1775870222604

// retry: 1775870307910

// retry: 1775918981601

// retry: 1775931908911

// perf: 1775931920634

// perf: 1775965393195

// retry: 1775965558828

// perf: 1776061517114

// retry: 1776061534893

// retry: 1776082462746

// perf: 1776082564424
