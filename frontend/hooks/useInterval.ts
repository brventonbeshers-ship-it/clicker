import { useEffect, useRef } from "react";

export function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);
  savedCallback.current = callback;

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// interval: 1775827087275

// interval: 1775870305728

// interval: 1775919088826

// interval: 1775931912100

// interval: 1775965432393

// interval: 1776061662685

// interval: 1776082619093

// interval: 1776114572139

// interval: 1776142359865

// interval: 1776169356407

// interval: 1776184745000

// interval: 1776246408065

// interval: 1776268368495

// interval: 1776313977593

// interval: 1776329632042

// interval: 1776371366272

// interval: 1776399685227

// interval: 1776430473918

// interval: 1776457897710

// interval: 1776477674329

// interval: 1776491671704

// interval: 1776516324806

// interval: 1776547719280

// interval: 1776583209282

// interval: 1776617187297

// interval: 1776642316024

// interval: 1776670283521

// interval: 1776699588474

// interval: 1776779016472

// interval: 1776815399041

// interval: 1776860924144

// interval: 1776874362979

// interval: 1776887806477

// interval: 1776936824141

// interval: 1776960414381

// interval: 1777022921420

// interval: 1777035351132

// interval: 1777060219461
