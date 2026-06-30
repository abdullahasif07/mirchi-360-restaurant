"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { REVIEWS } from "@/data/reviews";
import { usePrefersReducedMotion } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";

export function Reviews() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const reduced = usePrefersReducedMotion();
  const count = REVIEWS.length;

  const paginate = useCallback(
    (dir: number) => {
      setDirection(dir);
      setIndex((prev) => (prev + dir + count) % count);
    },
    [count],
  );

  // Auto-advance unless the user prefers reduced motion.
  useEffect(() => {
    if (reduced) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate, reduced]);

  const review = REVIEWS[index];

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Loved by Guests"
          title="What People"
          highlight="Say"
          subtitle="Real warmth, real flavour. Here's what our guests share after a meal at Mirchi 360°."
        />

        <div className="relative mt-14">
          <div className="relative min-h-[420px] sm:min-h-[340px]">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={review.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="glass absolute inset-0 grid gap-6 rounded-[var(--radius-xl2)] p-7 sm:grid-cols-[1fr_220px] sm:p-10"
              >
                <div className="flex flex-col justify-center">
                  <Quote className="size-9 text-secondary/40" />
                  <div className="mt-3 flex gap-1 text-accent">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 font-heading text-xl leading-relaxed text-ink sm:text-2xl">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <div className="mt-6 flex items-center gap-3">
                    <div className="relative size-12 overflow-hidden rounded-full ring-2 ring-secondary/40">
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-ink">{review.name}</p>
                      <p className="text-sm text-ink-muted">{review.location}</p>
                    </div>
                  </div>
                </div>

                {review.photo && (
                  <div className="relative hidden overflow-hidden rounded-2xl sm:block">
                    <Image
                      src={review.photo}
                      alt={`Dish enjoyed by ${review.name}`}
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={() => paginate(-1)}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-ink transition-colors hover:border-secondary hover:text-secondary"
            >
              <ChevronLeft className="size-5" />
            </button>

            <div className="flex gap-2">
              {REVIEWS.map((r, i) => (
                <button
                  key={r.id}
                  type="button"
                  aria-label={`Go to review ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    i === index
                      ? "w-8 bg-fire-animated"
                      : "w-2 bg-white/20 hover:bg-white/40",
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next review"
              onClick={() => paginate(1)}
              className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 text-ink transition-colors hover:border-secondary hover:text-secondary"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
