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

// walletBtn: 1776371356559

// a11y: 1776371526481

// a11y: 1776399693602

// walletBtn: 1776399741247

// walletBtn: 1776430470735

// walletBtn: 1776457888156

// a11y: 1776457984088

// walletBtn: 1776477609541

// walletBtn: 1776491715091

// a11y: 1776491775986

// walletBtn: 1776547661703

// a11y: 1776547714035

// a11y: 1776583218792

// walletBtn: 1776583268047

// a11y: 1776617092643

// walletBtn: 1776617176538

// a11y: 1776642266049

// walletBtn: 1776642510869

// walletBtn: 1776670158802

// a11y: 1776670221977

// a11y: 1776677344585
