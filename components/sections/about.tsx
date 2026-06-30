"use client";

import Image from "next/image";
import {
  Bike,
  ChefHat,
  Flame,
  Leaf,
  Moon,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Reveal, StaggerGroup, staggerItem } from "@/components/shared/reveal";
import { SectionHeading } from "@/components/shared/section-heading";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { motion } from "framer-motion";
import { ABOUT_FEATURES, STATS } from "@/data/about";
import { IMG } from "@/data/images";
import { SITE } from "@/constants/site";

const ICONS: Record<string, LucideIcon> = {
  Flame,
  ChefHat,
  Leaf,
  Users,
  Moon,
  Bike,
};

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden texture-charcoal">
      <div className="container-px mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Imagery */}
        <Reveal direction="right" className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-xl2)] shadow-2xl">
            <Image
              src={IMG.aboutMain}
              alt="Charcoal grill flames at Mirchi 360"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Floating secondary image */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="glass absolute -bottom-8 -right-4 hidden w-48 overflow-hidden rounded-3xl p-2 sm:block lg:-right-10 lg:w-56"
          >
            <div className="relative aspect-square overflow-hidden rounded-2xl">
              <Image
                src={IMG.aboutSecondary}
                alt="Mixed BBQ platter"
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Years badge */}
          <div className="glass glow-ember absolute -left-4 top-8 rounded-2xl px-5 py-3 text-center lg:-left-8">
            <span className="block font-heading text-3xl font-bold text-fire">
              {SITE.yearsServing}+
            </span>
            <span className="text-[10px] uppercase tracking-widest text-ink-muted">
              Years of flavour
            </span>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Our Story"
            title="A Taste of"
            highlight="Authentic Pakistan"
            subtitle="Born from a love of real charcoal BBQ and time-honoured Hyderabadi recipes, Mirchi 360° brings the soul of Pakistani cuisine to the table. From sizzling tikkas to slow-cooked handi biryani, every dish is crafted with premium ingredients, fresh-ground masalas, and the warmth of family dining."
          />

          <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2">
            {ABOUT_FEATURES.map((feature) => {
              const Icon = ICONS[feature.icon] ?? Flame;
              return (
                <motion.div
                  key={feature.title}
                  variants={staggerItem}
                  className="group flex gap-4 rounded-2xl border border-white/5 bg-card/60 p-4 transition-colors hover:border-secondary/30"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-black">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-semibold text-ink">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </div>

      {/* Animated stats */}
      <div className="container-px mx-auto mt-20 max-w-7xl">
        <div className="glass grid grid-cols-2 gap-6 rounded-[var(--radius-xl2)] p-8 md:grid-cols-4 md:p-10">
          {STATS.map((stat) => (
            <Reveal key={stat.label} className="text-center">
              <div className="font-heading text-4xl font-bold text-fire md:text-5xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-wider text-ink-muted md:text-sm">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
