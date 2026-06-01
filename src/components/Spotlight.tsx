import { useEffect, useState } from "react";

/**
 * A soft radial glow that tracks the cursor — adds depth to the dark
 * background. Disabled for touch / reduced-motion users.
 */
export default function Spotlight() {
  const [pos, setPos] = useState({ x: -400, y: -400 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);

    const onMove = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (!enabled) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-30 transition-[background] duration-200"
      style={{
        background: `radial-gradient(1000px circle at ${pos.x}px ${pos.y}px, rgba(94,234,212,0.09), rgba(94,234,212,0.03) 35%, transparent 65%)`,
      }}
    />
  );
}
