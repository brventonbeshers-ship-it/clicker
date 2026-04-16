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

// utils: 1775827013804

// utils: 1775870302547

// fmt: 1775870314254

// fmt: 1775918841910

// utils: 1775918975211

// utils: 1775932003132

// utils: 1775965382605

// fmt: 1775965513533

// utils: 1776061520461

// fmt: 1776061680478

// utils: 1776082364838

// fmt: 1776082671527

// utils: 1776114561606

// fmt: 1776114765578

// utils: 1776142252475

// fmt: 1776142417637

// fmt: 1776169466329

// utils: 1776169549969

// fmt: 1776184676956

// utils: 1776184798100

// utils: 1776213791260

// fmt: 1776246518417

// utils: 1776246526780

// utils: 1776255115952

// utils: 1776268229256

// fmt: 1776268480224

// utils: 1776314246330

// fmt: 1776329816773

// utils: 1776329835725

// utils: 1776348145616

// fmt: 1776371425212
