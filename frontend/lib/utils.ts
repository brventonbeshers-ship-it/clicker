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

// utils: 1776371489685

// fmt: 1776399793718

// utils: 1776399798081

// fmt: 1776430361602

// fmt: 1776457893523

// utils: 1776457932167

// utils: 1776477666838

// fmt: 1776477899790

// fmt: 1776491662953

// utils: 1776491798473

// fmt: 1776516349810

// fmt: 1776547651956

// utils: 1776547793323

// utils: 1776583342615

// utils: 1776617221157

// fmt: 1776617283100

// utils: 1776642455677

// fmt: 1776642466188

// utils: 1776670345334

// fmt: 1776670360300

// fmt: 1776677272912

// utils: 1776677278153

// utils: 1776699438720

// fmt: 1776699496734

// fmt: 1776749569907

// utils: 1776749736637

// fmt: 1776779003684

// utils: 1776779126768

// utils: 1776802338857

// fmt: 1776802605072

// utils: 1776815552634

// fmt: 1776815588160

// utils: 1776832188593
