"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { EmberParticles } from "./ember-particles";
import { LOGO_SRC } from "@/components/brand/logo";

/**
 * Cinematic intro: glowing charcoal grill, rising embers + smoke, and the
 * Mirchi 360 logo revealing gradually before fading into the homepage.
 *
 * Shows once per session (sessionStorage) so repeat navigation is instant.
 */
export function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("m360_intro");
    if (seen) return;

    setVisible(true);
    document.documentElement.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("m360_intro", "1");
      document.documentElement.style.overflow = "";
    }, 2600);

    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-bg texture-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          role="status"
          aria-label="Loading Mirchi 360"
        >
          <EmberParticles count={32} />

          {/* Glowing charcoal grill */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid size-32 place-items-center"
            >
              {/* pulsing ember glow */}
              <motion.span
                className="absolute inset-0 rounded-full blur-2xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,107,0,0.7), transparent 70%)",
                }}
                animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.15, 0.9] }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
              <Image
                src={LOGO_SRC}
                alt="Mirchi 360° logo"
                width={128}
                height={128}
                priority
                className="relative size-28 object-contain drop-shadow-[0_6px_24px_rgba(255,107,0,0.45)]"
              />

              {/* charcoal grill bars */}
              <div className="absolute -bottom-6 flex gap-1.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="h-1.5 w-6 rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0.4, 1, 0.4] }}
                    transition={{
                      duration: 1.4,
                      repeat: Infinity,
                      delay: i * 0.12,
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Tagline reveal */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="mt-12 text-center"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-ink-muted">
                Where Every Bite Sparks Flavor
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
