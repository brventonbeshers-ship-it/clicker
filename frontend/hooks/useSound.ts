import { useCallback, useRef } from "react";

export function useSound(enabled = true) {
  const audioCtx = useRef<AudioContext | null>(null);

  const playTap = useCallback(() => {
    if (!enabled) return;
    if (!audioCtx.current) {
      audioCtx.current = new AudioContext();
    }
    const ctx = audioCtx.current;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.frequency.value = 800;
    gain.gain.value = 0.1;
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  }, [enabled]);

  return { playTap };
}

// sound: 1775826927851

// sound: 1775870212038

// sound: 1775919046005

// sound: 1775931972642

// sound: 1775965390991

// sound: 1776061666040

// sound: 1776082460573

// sound: 1776114510676

// sound: 1776142298444

// sound: 1776184617458

// sound: 1776246564090

// sound: 1776254889901

// sound: 1776268210473

// sound: 1776313904171

// sound: 1776329749598

// sound: 1776348205540

// sound: 1776371512927

// sound: 1776399846015

// sound: 1776430587972

// sound: 1776458035299

// sound: 1776477813942

// sound: 1776491667464

// sound: 1776516268295

// sound: 1776547843737

// sound: 1776583431169

// sound: 1776617192532

// sound: 1776642441624

// sound: 1776670227224

// sound: 1776677360536

// sound: 1776699487270

// sound: 1776749498059

// sound: 1776779219909

// sound: 1776802559874

// sound: 1776815496787

// sound: 1776832403206

// sound: 1776860982084

// sound: 1776874298336

// sound: 1776887769231

// sound: 1776936793568

// sound: 1776960320011

// sound: 1776999508136

// sound: 1777022907696
