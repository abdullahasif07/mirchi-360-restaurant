"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import type { Dish } from "@/types";
import { Badge } from "@/components/ui/badge";
import { TiltCard } from "./tilt-card";
import { formatPrice, telHref } from "@/lib/utils";
import { SITE } from "@/constants/site";
import { cn } from "@/lib/utils";

/**
 * Premium dish card: large image with zoom-on-hover, fire glow, a subtle
 * rising "steam" wisp, tags and a starting price with a click-to-call CTA.
 */
export function DishCard({
  dish,
  className,
  priority = false,
}: {
  dish: Dish;
  className?: string;
  priority?: boolean;
}) {
  return (
    <TiltCard className={cn("group h-full", className)}>
      <div className="relative h-full overflow-hidden rounded-[var(--radius-xl2)] border border-white/8 bg-card transition-all duration-500 group-hover:border-secondary/40 group-hover:shadow-[0_30px_60px_-20px_rgba(255,107,0,0.45)]">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={dish.image}
            alt={dish.title}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />

          {/* Steam wisps on hover */}
          <div className="pointer-events-none absolute inset-x-0 bottom-1/3 flex justify-center gap-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="h-16 w-1 rounded-full bg-white/30 blur-md"
                animate={{ y: [-4, -28], opacity: [0, 0.5, 0] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  delay: i * 0.4,
                  ease: "easeOut",
                }}
              />
            ))}
          </div>

          {/* Tags */}
          {dish.tags && dish.tags.length > 0 && (
            <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
              {dish.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>

        {/* Body */}
        <div className="flex flex-col p-5" style={{ transform: "translateZ(40px)" }}>
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-heading text-xl font-semibold text-ink">
              {dish.title}
            </h3>
            {dish.price != null && (
              <span className="shrink-0 text-right">
                <span className="block text-[10px] uppercase tracking-wider text-ink-muted">
                  from
                </span>
                <span className="font-heading text-lg font-bold text-fire">
                  {formatPrice(dish.price)}
                </span>
              </span>
            )}
          </div>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-muted">
            {dish.description}
          </p>

          <a
            href={telHref(SITE.primaryPhone)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors hover:text-accent"
          >
            <Phone className="size-4" />
            Call to order
          </a>
        </div>
      </div>
    </TiltCard>
  );
}
