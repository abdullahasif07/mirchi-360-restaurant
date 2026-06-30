"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useIsDesktop } from "@/hooks/use-media-query";

/**
 * A warm glow that follows the cursor on desktop. Purely decorative.
 */
export function CursorGlow() {
  const isDesktop = useIsDesktop();
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 250, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 250, damping: 30, mass: 0.4 });

  useEffect(() => {
    if (!isDesktop) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [isDesktop, x, y]);

  if (!isDesktop) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[60] hidden lg:block"
      style={{
        x: sx,
        y: sy,
        translateX: "-50%",
        translateY: "-50%",
        willChange: "transform",
      }}
    >
      <div
        className="h-[340px] w-[340px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.10), rgba(249,168,38,0.05) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}
