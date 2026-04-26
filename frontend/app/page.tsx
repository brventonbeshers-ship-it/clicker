"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  connectWallet,
  fetchTotalClicks,
  fetchUserClicks,
  fetchLeaderboard,
  sendTap,
} from "@/lib/stacks";

function shortenAddress(addr: string) {
  return addr.slice(0, 5) + "..." + addr.slice(-4);
}

function formatNumber(n: number) {
  return n.toLocaleString();
}

interface FloatingNum {
  id: number;
  x: number;
  y: number;
}

interface LeaderEntry {
  who: string;
  clicks: number;
}

export default function Home() {
  const [address, setAddress] = useState<string | null>(null);
  const [myClicks, setMyClicks] = useState(0);
  const [globalClicks, setGlobalClicks] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderEntry[]>([]);
  const [pressing, setPressing] = useState(false);
  const [rings, setRings] = useState<number[]>([]);
  const [floats, setFloats] = useState<FloatingNum[]>([]);
  const btnRef = useRef<HTMLButtonElement>(null);
  const idRef = useRef(0);

  // Load data
  const loadData = useCallback(async () => {
    const [total, lb] = await Promise.all([fetchTotalClicks(), fetchLeaderboard()]);
    setGlobalClicks(total);
    setLeaderboard(lb);
  }, []);

  useEffect(() => {
    loadData();
    const interval = setInterval(loadData, 15000);
    return () => clearInterval(interval);
  }, [loadData]);

  // Load user clicks when address changes
  useEffect(() => {
    if (address) {
      fetchUserClicks(address).then(setMyClicks);
    }
  }, [address]);

  const handleConnect = () => {
    connectWallet(({ stacks }) => {
      setAddress(stacks);
    });
  };

  const handleTap = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!address) return;

      // Optimistic UI
      setMyClicks((c) => c + 1);
      setGlobalClicks((c) => c + 1);

      // Animations
      setPressing(true);
      setTimeout(() => setPressing(false), 150);

      const ringId = ++idRef.current;
      setRings((r) => [...r, ringId]);
      setTimeout(() => setRings((r) => r.filter((id) => id !== ringId)), 600);

      const rect = btnRef.current?.getBoundingClientRect();
      if (rect) {
        const floatId = ++idRef.current;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setFloats((f) => [...f, { id: floatId, x, y }]);
        setTimeout(() => setFloats((f) => f.filter((fl) => fl.id !== floatId)), 800);
      }

      // Send transaction
      sendTap(address).then((success) => {
        if (success) {
          setTimeout(loadData, 5000);
        } else {
          // Revert optimistic update
          setMyClicks((c) => c - 1);
          setGlobalClicks((c) => c - 1);
        }
      });
    },
    [address, loadData]
  );

  const connected = !!address;

  // Pad leaderboard to 10
  const displayLeaderboard: LeaderEntry[] = [...leaderboard];
  while (displayLeaderboard.length < 10) {
    displayLeaderboard.push({ who: "-", clicks: 0 });
  }

  return (
    <main className="min-h-screen flex flex-col items-center relative grid-bg">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.12)_0%,rgba(0,240,255,0.04)_40%,transparent_70%)]" />
        <div className="absolute bottom-[0%] right-[0%] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.12)_0%,rgba(139,92,246,0.04)_40%,transparent_70%)]" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.06)_0%,transparent_60%)]" style={{ animation: "pulse-glow 6s infinite ease-in-out" }} />

        {/* Floating particles */}
        <div className="particle" style={{ left: "10%", bottom: "0%", animationDelay: "0s" }} />
        <div className="particle" style={{ left: "20%", bottom: "5%", animationDelay: "1.5s" }} />
        <div className="particle" style={{ left: "35%", bottom: "0%", animationDelay: "3s" }} />
        <div className="particle-purple particle" style={{ left: "55%", bottom: "10%", animationDelay: "0.5s" }} />
        <div className="particle" style={{ left: "70%", bottom: "0%", animationDelay: "2s" }} />
        <div className="particle-purple particle" style={{ left: "85%", bottom: "5%", animationDelay: "4s" }} />
        <div className="particle" style={{ left: "45%", bottom: "0%", animationDelay: "5s" }} />
        <div className="particle-purple particle" style={{ left: "15%", bottom: "8%", animationDelay: "6s" }} />
        <div className="particle" style={{ left: "60%", bottom: "0%", animationDelay: "2.5s" }} />
        <div className="particle-purple particle" style={{ left: "90%", bottom: "3%", animationDelay: "3.5s" }} />
        <div className="particle" style={{ left: "5%", bottom: "0%", animationDelay: "7s" }} />
        <div className="particle" style={{ left: "75%", bottom: "0%", animationDelay: "1s" }} />
      </div>

      {/* Header */}
      <header className="w-full max-w-6xl mx-auto flex items-center justify-between px-6 py-5 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00f0ff] to-[#8b5cf6] flex items-center justify-center text-sm font-bold text-black">
            C
          </div>
          <span className="text-lg font-semibold tracking-tight">
            <span className="text-[#00f0ff]">C</span>
            <span className="text-[#00d4ff]">l</span>
            <span className="text-[#2bb8ff]">i</span>
            <span className="text-[#559cff]">c</span>
            <span className="text-[#7b80ff]">k</span>
            <span className="text-[#8b5cf6]">e</span>
            <span className="text-[#a855f7]">r</span>
          </span>
        </div>

        <button
          onClick={handleConnect}
          className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
            connected
              ? "glass-card text-[#00f0ff] border-[#00f0ff]/20"
              : "bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] text-black hover:opacity-90"
          }`}
        >
          {connected ? shortenAddress(address!) : "Connect Wallet"}
        </button>
      </header>

      {/* Global counter */}
      <div className="mt-6 text-center relative z-10">
        <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1">
          Global Taps
        </p>
        <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">
          {formatNumber(globalClicks)}
        </p>
      </div>

      {/* Main content: Clicker LEFT + Leaderboard RIGHT */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center lg:items-center justify-center gap-12 lg:gap-20 my-8 relative z-10">

        {/* Left side: TAP button + your taps */}
        <div className="flex flex-col items-center">
          <div className="relative">
            {/* Orbiting dots */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="orbit-dot" />
              <div className="orbit-dot-2" />
            </div>

            {/* Glow behind button */}
            <div className="tap-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

            {/* Ring effects */}
            {rings.map((id) => (
              <div
                key={id}
                className="tap-ring absolute inset-0 rounded-full border-2 border-[#00f0ff]/40"
              />
            ))}

            {/* Floating +1 numbers */}
            {floats.map((f) => (
              <div
                key={f.id}
                className="float-number absolute text-[#00f0ff] font-bold text-xl"
                style={{ left: f.x, top: f.y }}
              >
                +1
              </div>
            ))}

            {/* The button */}
            <button
              ref={btnRef}
              onClick={handleTap}
              disabled={!connected}
              className={`relative w-48 h-48 md:w-60 md:h-60 rounded-full cursor-pointer
                bg-gradient-to-br from-[#00f0ff]/10 to-[#8b5cf6]/10
                border-2 border-[#00f0ff]/30
                flex items-center justify-center
                transition-all duration-100 select-none
                shadow-[0_0_60px_rgba(0,240,255,0.1),inset_0_0_60px_rgba(0,240,255,0.05)]
                ${connected ? "hover:border-[#00f0ff]/60 hover:shadow-[0_0_80px_rgba(0,240,255,0.25),inset_0_0_60px_rgba(0,240,255,0.08)] active:scale-95" : "opacity-40 cursor-not-allowed"}
                ${pressing ? "tap-btn-press" : ""}
              `}
            >
              <span className="text-3xl md:text-4xl font-black tracking-wider bg-gradient-to-r from-[#00f0ff] to-[#8b5cf6] bg-clip-text text-transparent">
                TAP
              </span>
            </button>
          </div>

          {/* My clicks counter */}
          {connected && (
            <div className="text-center mt-8">
              <p className="text-xs uppercase tracking-[0.2em] text-white/30 mb-1">
                Your Taps
              </p>
              <p className="text-3xl font-bold text-white/90">
                {formatNumber(myClicks)}
              </p>
            </div>
          )}

          {!connected && (
            <p className="text-white/20 text-sm mt-6">Connect wallet to start tapping</p>
          )}
        </div>

        {/* Right side: Leaderboard */}
        <div className="w-full max-w-sm lg:w-[360px]">
          <div className="glass-card p-6">
            <h2 className="text-sm uppercase tracking-[0.2em] text-white/30 mb-5 text-center">
              Leaderboard
            </h2>

            <div className="space-y-1.5">
              {displayLeaderboard.map((entry, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between py-2.5 px-3 rounded-xl transition-colors ${
                    i === 0 && entry.clicks > 0
                      ? "bg-gradient-to-r from-[#ffd700]/5 to-transparent border border-[#ffd700]/10"
                      : i === 1 && entry.clicks > 0
                      ? "bg-gradient-to-r from-[#c0c0c0]/5 to-transparent border border-[#c0c0c0]/10"
                      : i === 2 && entry.clicks > 0
                      ? "bg-gradient-to-r from-[#cd7f32]/5 to-transparent border border-[#cd7f32]/10"
                      : "border border-transparent"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 text-sm font-bold ${
                        i === 0
                          ? "text-[#ffd700]"
                          : i === 1
                          ? "text-[#c0c0c0]"
                          : i === 2
                          ? "text-[#cd7f32]"
                          : "text-white/20"
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="text-sm font-mono text-white/60">
                      {entry.who === "-" ? "---" : shortenAddress(entry.who)}
                    </span>
                  </div>
                  <span
                    className={`text-sm font-semibold ${
                      i === 0 && entry.clicks > 0
                        ? "text-[#ffd700]/80"
                        : i === 1 && entry.clicks > 0
                        ? "text-[#c0c0c0]/80"
                        : i === 2 && entry.clicks > 0
                        ? "text-[#cd7f32]/80"
                        : "text-white/60"
                    }`}
                  >
                    {entry.clicks > 0 ? formatNumber(entry.clicks) : "-"}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// ui: 1773475554484

// ui: 1773527801943

// ui: 1773610998503

// ui: 1773672293678

// ui: 1773986262662

// ui: 1774341031612

// ui: 1774352624251

// ui: 1774431069362

// ui: 1774513914047

// ui: 1774610543628

// ui: 1774683342857

// ui: 1774784228898

// ui: 1774854621601

// ui: 1774878116373

// ui: 1774936965730

// ui: 1775116947574

// ui: 1775194390004

// ui: 1775199678698

// ui: 1775207424048

// ui: 1775236021231

// ui: 1775268448976

// ui: 1775282288766

// ui: 1775382988188

// ui: 1775389377441

// ui: 1775436553194

// ui: 1775510292000

// ui: 1775597789935

// ui: 1775642745219

// ui: 1775694959587

// ui: 1775709734898

// ui: 1775750947282

// ui: 1775795453453

// ui: 1775826955470

// perf: 1775827015984

// perf: 1775870074018

// ui: 1775870119544

// a11y: 1775870348931

// a11y: 1775918796384

// ui: 1775918798582

// a11y: 1775931954750

// perf: 1775932025030

// a11y: 1775965498956

// ui: 1775965551431

// perf: 1775965572578

// ui: 1776061463413

// perf: 1776061508366

// a11y: 1776061672786

// perf: 1776082413830

// ui: 1776082467904

// a11y: 1776082470075

// a11y: 1776114642013

// perf: 1776114710783

// perf: 1776142362046

// a11y: 1776142421830

// ui: 1776142466934

// a11y: 1776169229513

// ui: 1776169534145

// a11y: 1776184790595

// ui: 1776184839078

// perf: 1776184841256

// a11y: 1776213793448

// ui: 1776213814376

// perf: 1776213929198

// ui: 1776246287762

// a11y: 1776246297343

// perf: 1776246299518

// ui: 1776255019322

// a11y: 1776255056871

// perf: 1776255240769

// ui: 1776268321344

// perf: 1776268324528

// a11y: 1776268427336

// perf: 1776314015704

// a11y: 1776314112865

// ui: 1776314242135

// perf: 1776329616287

// ui: 1776329758942

// a11y: 1776329830532

// perf: 1776348065338

// ui: 1776348330469

// perf: 1776371361908

// a11y: 1776371484502

// ui: 1776371504458

// ui: 1776399622260

// a11y: 1776399635058

// perf: 1776399842831

// ui: 1776430266378

// a11y: 1776430270555

// perf: 1776430600721

// ui: 1776457936339

// a11y: 1776458021733

// perf: 1776458169015

// a11y: 1776477753341

// ui: 1776477811716

// perf: 1776477836405

// perf: 1776491665209

// a11y: 1776491673961

// ui: 1776491827716

// perf: 1776516316314

// a11y: 1776516354040

// ui: 1776516409088

// a11y: 1776547732293

// ui: 1776547768633

// perf: 1776547780362

// perf: 1776583179600

// ui: 1776583304695

// a11y: 1776583367409

// perf: 1776617174295

// a11y: 1776617272341

// ui: 1776617333998

// ui: 1776642502104

// ui: 1776670151306

// a11y: 1776670239946

// perf: 1776670352819

// perf: 1776677330634

// a11y: 1776677449500

// ui: 1776677516440

// ui: 1776699429251

// a11y: 1776699442979

// perf: 1776699484026

// perf: 1776749516572

// ui: 1776749669126

// ui: 1776779005944

// perf: 1776779119257

// a11y: 1776779164128

// ui: 1776802336580

// a11y: 1776802395817

// perf: 1776802497381

// perf: 1776815385284

// a11y: 1776815406678

// ui: 1776815545130

// ui: 1776832311725

// perf: 1776832385227

// a11y: 1776832397967

// ui: 1776860873429

// a11y: 1776860972589

// perf: 1776860991566

// ui: 1776874300585

// perf: 1776874318832

// a11y: 1776874459933

// perf: 1776887602455

// a11y: 1776887664141

// ui: 1776887674874

// ui: 1776936770305

// a11y: 1776936845337

// perf: 1776936848575

// ui: 1776960193629

// perf: 1776960338244

// a11y: 1776960409135

// a11y: 1776999633371

// ui: 1776999647118

// perf: 1777022819061

// ui: 1777022822314

// a11y: 1777023051730

// a11y: 1777035111732

// ui: 1777035345897

// a11y: 1777060233181

// ui: 1777060287558

// perf: 1777060310035

// ui: 1777064482887

// a11y: 1777064656366

// perf: 1777101229139

// a11y: 1777101419577

// ui: 1777101474430

// a11y: 1777117208685

// a11y: 1777167075223
