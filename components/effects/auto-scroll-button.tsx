"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play, Video } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Auto-scroll helper for screen recordings / demos.
 *
 * Press play to glide the page from the current position to the bottom at a
 * constant, slow speed (great for capturing the whole site on video). It
 * drives the active Lenis instance when present (so it stays buttery smooth),
 * and falls back to native scrolling otherwise.
 *
 * Tip: to only show this while recording, render it conditionally on a URL
 * flag (e.g. `?record`) — see usage note in the layout.
 */

const SPEEDS = [
  { label: "Slow", pps: 40 },
  { label: "Medium", pps: 85 },
  { label: "Fast", pps: 150 },
] as const;

export function AutoScrollButton() {
  const [playing, setPlaying] = useState(false);
  const [speedIndex, setSpeedIndex] = useState(0);

  const rafRef = useRef(0);
  const lastTsRef = useRef(0);
  const ppsRef = useRef<number>(SPEEDS[0].pps);

  // Keep the live speed in a ref so changes apply mid-scroll.
  useEffect(() => {
    ppsRef.current = SPEEDS[speedIndex].pps;
  }, [speedIndex]);

  const maxScroll = () =>
    document.documentElement.scrollHeight - window.innerHeight;

  const currentY = () =>
    typeof window.__lenis?.scroll === "number"
      ? window.__lenis.scroll
      : window.scrollY;

  const scrollToY = (y: number) => {
    const lenis = window.__lenis;
    if (lenis) lenis.scrollTo(y, { immediate: true, force: true });
    else window.scrollTo(0, y);
  };

  const stop = () => {
    cancelAnimationFrame(rafRef.current);
    setPlaying(false);
  };

  const start = () => {
    // If we're already at the bottom, jump back to the top first.
    if (currentY() >= maxScroll() - 4) scrollToY(0);

    lastTsRef.current = performance.now();
    const step = (now: number) => {
      const dt = Math.min(0.05, (now - lastTsRef.current) / 1000);
      lastTsRef.current = now;

      const max = maxScroll();
      const next = currentY() + ppsRef.current * dt;

      if (next >= max) {
        scrollToY(max);
        stop();
        return;
      }
      scrollToY(next);
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    setPlaying(true);
  };

  const toggle = () => (playing ? stop() : start());

  // Clean up the RAF loop on unmount.
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="glass-strong fixed bottom-24 left-4 z-50 flex items-center gap-1 rounded-full border border-white/10 p-1.5 shadow-xl lg:bottom-6 lg:left-6"
      role="group"
      aria-label="Auto-scroll controls for recording"
    >
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause auto-scroll" : "Start auto-scroll"}
        aria-pressed={playing}
        className={cn(
          "grid size-10 place-items-center rounded-full transition-colors",
          playing
            ? "bg-fire-animated text-white"
            : "bg-secondary/15 text-secondary hover:bg-secondary hover:text-black",
        )}
      >
        {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
      </button>

      <button
        type="button"
        onClick={() => setSpeedIndex((i) => (i + 1) % SPEEDS.length)}
        aria-label={`Auto-scroll speed: ${SPEEDS[speedIndex].label}. Click to change.`}
        className="rounded-full px-3 py-1.5 text-xs font-semibold text-ink-muted transition-colors hover:text-ink"
      >
        {SPEEDS[speedIndex].label}
      </button>

      <span
        className="hidden items-center gap-1 pr-2 text-[10px] uppercase tracking-wider text-ink-muted sm:flex"
        aria-hidden
      >
        <Video className="size-3" /> Rec
      </span>
    </motion.div>
  );
}
