// Utility helpers

export function shortenAddress(addr: string): string {
  if (!addr || addr.length < 10) return addr || "---";
  return addr.slice(0, 5) + "..." + addr.slice(-4);
}

export function formatNumber(n: number): string {
  return n.toLocaleString();
}

export function formatCompact(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toString();
}

// fmt: 1775826997092
