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

// walletBtn: 1776082572775

// a11y: 1776114554231

// walletBtn: 1776114756192

// a11y: 1776142244104

// walletBtn: 1776142459557

// walletBtn: 1776169266543

// a11y: 1776169359760

// walletBtn: 1776184671568

// a11y: 1776184681131

// walletBtn: 1776213818777

// walletBtn: 1776246348380

// a11y: 1776246504856

// a11y: 1776254937614

// walletBtn: 1776255065422

// walletBtn: 1776268274468

// a11y: 1776268414580

// walletBtn: 1776313973408

// a11y: 1776314027264

// a11y: 1776329625666

// walletBtn: 1776329698805

// walletBtn: 1776348208729

// a11y: 1776348379833
