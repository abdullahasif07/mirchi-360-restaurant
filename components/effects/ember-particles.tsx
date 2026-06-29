"use client";

import { useMemo } from "react";
import { useMounted } from "@/hooks/use-mounted";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

interface Ember {
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
}

/**
 * Floating ember / spice particles rising from the bottom.
 * Rendered only after mount to avoid hydration mismatches, and skipped
 * entirely when the user prefers reduced motion.
 */
export function EmberParticles({
  count = 26,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const mounted = useMounted();
  const reduced = usePrefersReducedMotion();

  // Deterministic pseudo-random keeps the render pure (no Math.random in
  // render) and gives stable, varied particles without SSR/CSR mismatch.
  const embers = useMemo<Ember[]>(() => {
    const rand = (seed: number) => {
      const x = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
      return x - Math.floor(x);
    };
    return Array.from({ length: count }, (_, i) => ({
      left: rand(i + 1) * 100,
      size: 2 + rand(i + 2) * 5,
      duration: 6 + rand(i + 3) * 9,
      delay: rand(i + 4) * 8,
      drift: (rand(i + 5) - 0.5) * 120,
      opacity: 0.3 + rand(i + 6) * 0.6,
    }));
  }, [count]);

  if (!mounted || reduced) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      {embers.map((e, i) => (
        <span
          key={i}
          className="absolute bottom-0 rounded-full"
          style={{
            left: `${e.left}%`,
            width: e.size,
            height: e.size,
            opacity: e.opacity,
            background:
              "radial-gradient(circle, #ffd27a 0%, #ff6b00 55%, transparent 70%)",
            boxShadow: "0 0 8px 1px rgba(255,107,0,0.6)",
            animation: `ember-rise ${e.duration}s linear ${e.delay}s infinite`,
            ["--drift" as string]: `${e.drift}px`,
          }}
        />
      ))}
    </div>
  );
}
