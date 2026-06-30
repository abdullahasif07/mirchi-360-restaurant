"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Sparkles, Star } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/shared/magnetic";
import { EmberParticles } from "@/components/effects/ember-particles";
import { CHEF_PICK } from "@/data/menu";
import { SITE } from "@/constants/site";
import { formatPrice, telHref } from "@/lib/utils";

export function ChefsRecommendation() {
  const dish = CHEF_PICK;

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-px mx-auto max-w-6xl">
        <Reveal>
          <div className="group relative overflow-hidden rounded-[var(--radius-xl2)] p-[2px]">
            {/* Animated glowing border */}
            <motion.div
              aria-hidden
              className="absolute inset-[-50%]"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent, #ff6b00, #f9a826, #c62828, transparent)",
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />

            <div className="relative grid items-center gap-0 overflow-hidden rounded-[calc(var(--radius-xl2)-2px)] bg-card md:grid-cols-2">
              <EmberParticles count={10} />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto md:h-full md:min-h-[460px]">
                <Image
                  src={dish.image}
                  alt={dish.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/90 md:bg-gradient-to-l" />
              </div>

              {/* Copy */}
              <div className="relative z-10 p-8 md:p-12">
                <span className="inline-flex items-center gap-2 rounded-full bg-fire-animated px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg">
                  <Sparkles className="size-3.5" />
                  Chef&apos;s Recommendation
                </span>

                <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-ink md:text-5xl">
                  {dish.title}
                </h2>

                <div className="mt-3 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-current" />
                  ))}
                  <span className="ml-2 text-sm text-ink-muted">
                    Most-loved by our guests
                  </span>
                </div>

                <p className="mt-5 max-w-md text-base leading-relaxed text-ink-muted">
                  {dish.description} A true centrepiece — generous, smoky and
                  made for sharing around the table.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-5">
                  {dish.price != null && (
                    <div>
                      <span className="block text-xs uppercase tracking-wider text-ink-muted">
                        Starting from
                      </span>
                      <span className="font-heading text-3xl font-bold text-fire">
                        {formatPrice(dish.price)}
                      </span>
                    </div>
                  )}
                  <Magnetic>
                    <Button asChild size="lg">
                      <a href={telHref(SITE.primaryPhone)}>
                        <Phone /> Order This
                      </a>
                    </Button>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
