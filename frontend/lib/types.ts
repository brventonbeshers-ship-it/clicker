// Shared types

export interface LeaderEntry {
  who: string;
  clicks: number;
}

export interface WalletState {
  address: string | null;
  connected: boolean;
}

export interface GameStats {
  totalClicks: number;
  userClicks: number;
  leaderboard: LeaderEntry[];
}

// types: 1773419612352
