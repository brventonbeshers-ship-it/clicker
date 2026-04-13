interface WalletButtonProps {
  connected: boolean;
  address?: string;
  onConnect: () => void;
}

function shorten(addr: string) {
  return addr.slice(0, 5) + "..." + addr.slice(-4);
}

export function WalletButton({ connected, address, onConnect }: WalletButtonProps) {
  return (
    <button
      onClick={onConnect}
      className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
        connected
          ? "glass-card text-[#00f0ff] border-[#00f0ff]/20"
          : "bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] text-black hover:opacity-90"
      }`}
    >
      {connected && address ? shorten(address) : "Connect Wallet"}
    </button>
  );
}

// walletBtn: 1775870168131

// a11y: 1775870265490

// a11y: 1775918968841

// walletBtn: 1775919108928

// a11y: 1775931966284

// walletBtn: 1775932066487

// a11y: 1775965453373

// walletBtn: 1775965487384

// walletBtn: 1776061445818

// a11y: 1776061537242

// a11y: 1776082509636
