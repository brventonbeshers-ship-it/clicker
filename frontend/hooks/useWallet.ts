import { useState, useCallback } from "react";
import { connectWallet } from "@/lib/stacks";

export function useWallet() {
  const [address, setAddress] = useState<string | null>(null);

  const connect = useCallback(() => {
    connectWallet(({ stacks }) => setAddress(stacks));
  }, []);

  const disconnect = useCallback(() => {
    setAddress(null);
  }, []);

  return { address, connected: !!address, connect, disconnect };
}

// wallet: 1775826934221

// wallet: 1775870163943
