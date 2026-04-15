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
