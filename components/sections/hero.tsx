"use client";

import Image from "next/image";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronDown, Phone, UtensilsCrossed } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { EmberParticles } from "@/components/effects/ember-particles";
import { SmokeOverlay } from "@/components/effects/smoke-overlay";
import { IMG } from "@/data/images";
import { SITE } from "@/constants/site";
import { telHref } from "@/lib/utils";
import { useIsDesktop } from "@/hooks/use-media-query";

export function Hero() {
  const isDesktop = useIsDesktop();

  // Mouse parallax for the background image.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const px = useSpring(mx, { stiffness: 60, damping: 20 });
  const py = useSpring(my, { stiffness: 60, damping: 20 });

  // Scroll parallax: image drifts up & fades as you scroll.
  const { scrollYProgress } = useScroll();
  const imgY = useTransform(scrollYProgress, [0, 0.4], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 0.4], ["0%", "40%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0.4]);

  const handleMouse = (e: React.MouseEvent) => {
    if (!isDesktop) return;
    const { innerWidth, innerHeight } = window;
    mx.set((e.clientX / innerWidth - 0.5) * 30);
    my.set((e.clientY / innerHeight - 0.5) * 30);
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouse}
      className="relative flex h-[100svh] min-h-[640px] w-full items-center justify-center overflow-hidden"
    >
      {/* Background image with mouse + scroll parallax */}
      <motion.div
        className="absolute inset-0 scale-110"
        style={{ x: px, y: py, willChange: "transform" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ y: imgY, willChange: "transform" }}
        >
          <Image
            src={IMG.heroBbq}
            alt="Sizzling charcoal BBQ platter at Mirchi 360"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Cinematic overlays */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-bg"
        style={{ opacity: overlayOpacity }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_25%,rgba(15,15,15,0.85))]" />
      <SmokeOverlay />
      <EmberParticles count={16} />

      {/* Content */}
      <motion.div
        style={{ y: contentY }}
        className="container-px relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-accent"
        >
          <span className="size-1.5 animate-pulse rounded-full bg-secondary" />
          Authentic Hyderabadi BBQ · {SITE.branchesCount}+ Branches
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-balance font-heading text-5xl font-bold leading-[1.05] text-white drop-shadow-2xl sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Where Every Bite <br className="hidden sm:block" />
          <span className="text-fire">Sparks Flavor</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-6 max-w-xl text-base text-white/80 sm:text-lg md:text-xl"
        >
          Premium BBQ &middot; Fast Food &middot; Family Dining
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <Magnetic>
            <Button asChild size="lg">
              <a href={telHref(SITE.primaryPhone)}>
                <Phone /> Order Now
              </a>
            </Button>
          </Magnetic>
          <Magnetic>
            <Button asChild size="lg" variant="outline">
              <a href="#menu">
                <UtensilsCrossed /> View Menu
              </a>
            </Button>
          </Magnetic>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown className="size-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
