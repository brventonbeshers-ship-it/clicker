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

// wallet: 1775931927993

// wallet: 1775965447984

// wallet: 1776061589516

// wallet: 1776082425405

// wallet: 1776114843873

// wallet: 1776142558384

// wallet: 1776184669383

// wallet: 1776214020967

// wallet: 1776246355940

// wallet: 1776254880337

// wallet: 1776268284020

// wallet: 1776329827339

// wallet: 1776348128567

// wallet: 1776371478122

// wallet: 1776399852389

// wallet: 1776430541725

// wallet: 1776458128428

// wallet: 1776477828921

// wallet: 1776491849255

// wallet: 1776516414410
