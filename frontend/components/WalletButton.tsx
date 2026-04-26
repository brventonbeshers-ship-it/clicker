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

// walletBtn: 1776677499441

// a11y: 1776699280502

// walletBtn: 1776699434481

// a11y: 1776749672387

// walletBtn: 1776749684137

// a11y: 1776778957904

// walletBtn: 1776778999434

// a11y: 1776802387307

// walletBtn: 1776802431095

// walletBtn: 1776815540885

// a11y: 1776815594653

// a11y: 1776832162548

// walletBtn: 1776832422451

// a11y: 1776861029408

// walletBtn: 1776861089209

// a11y: 1776874357454

// walletBtn: 1776874368226

// a11y: 1776887615209

// walletBtn: 1776887752008

// walletBtn: 1776937077431

// a11y: 1776960176624

// walletBtn: 1776960185136

// walletBtn: 1776999502584

// a11y: 1776999597139

// walletBtn: 1777022928892

// a11y: 1777023017942

// a11y: 1777035157344

// walletBtn: 1777035372395

// walletBtn: 1777060228936

// a11y: 1777060403876

// a11y: 1777064391260

// walletBtn: 1777064723125

// a11y: 1777101320916

// walletBtn: 1777101461420

// walletBtn: 1777117088847

// a11y: 1777117423383

// a11y: 1777167164776

// a11y: 1777182135182
