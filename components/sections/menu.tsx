"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  Beef,
  ChevronDown,
  CookingPot,
  CupSoda,
  Flame,
  IceCream,
  Sandwich,
  Soup,
  Tags,
  Users,
  Utensils,
  Wheat,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/shared/reveal";
import { Badge } from "@/components/ui/badge";
import { MENU_CATEGORIES, dishesByCategory } from "@/data/menu";
import { formatPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Flame,
  CookingPot,
  Soup,
  Utensils,
  Sandwich,
  Beef,
  Wheat,
  Users,
  Tags,
  IceCream,
  CupSoda,
};

export function Menu() {
  const [openId, setOpenId] = useState<string>(MENU_CATEGORIES[0].id);

  return (
    <section id="menu" className="section-pad relative overflow-hidden bg-bg-soft">
      <div className="container-px mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Explore the Menu"
          title="Crafted by"
          highlight="Category"
          subtitle="From charcoal BBQ to clay-pot handis and loaded fast food — tap a category to explore. Call your nearest branch to order for dine-in, takeaway or delivery."
        />

        <div className="mt-14 space-y-3">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = ICONS[cat.icon] ?? Flame;
            const items = dishesByCategory(cat.id);
            const isOpen = openId === cat.id;

            return (
              <Reveal key={cat.id}>
                <div
                  className={cn(
                    "overflow-hidden rounded-3xl border transition-colors",
                    isOpen
                      ? "border-secondary/40 bg-card"
                      : "border-white/8 bg-card/50 hover:border-white/20",
                  )}
                >
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? "" : cat.id)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center gap-4 p-5 text-left"
                  >
                    <span
                      className={cn(
                        "grid size-12 shrink-0 place-items-center rounded-2xl transition-all",
                        isOpen
                          ? "bg-fire-animated text-white"
                          : "bg-secondary/10 text-secondary",
                      )}
                    >
                      <Icon className="size-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block font-heading text-xl font-semibold text-ink">
                        {cat.title}
                      </span>
                      <span className="text-sm text-ink-muted">
                        {cat.description} · {items.length} items
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-ink-muted"
                    >
                      <ChevronDown className="size-5" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="grid gap-3 border-t border-white/5 p-5 sm:grid-cols-2">
                          {items.map((dish) => (
                            <div
                              key={dish.id}
                              className="group flex gap-4 rounded-2xl p-2 transition-colors hover:bg-white/5"
                            >
                              <div className="relative size-20 shrink-0 overflow-hidden rounded-xl">
                                <Image
                                  src={dish.image}
                                  alt={dish.title}
                                  fill
                                  sizes="80px"
                                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                              </div>
                              <div className="flex flex-1 flex-col">
                                <div className="flex items-baseline justify-between gap-2">
                                  <h4 className="font-semibold text-ink">
                                    {dish.title}
                                  </h4>
                                  {dish.price != null && (
                                    <span className="font-heading font-bold text-accent">
                                      {formatPrice(dish.price)}
                                    </span>
                                  )}
                                </div>
                                <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-ink-muted">
                                  {dish.description}
                                </p>
                                {dish.tags && dish.tags.length > 0 && (
                                  <div className="mt-1.5 flex gap-1.5">
                                    {dish.tags.slice(0, 2).map((t) => (
                                      <Badge key={t} tag={t} />
                                    ))}
                                  </div>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-muted">
          {/* PLACEHOLDER: prices are indicative and vary by branch. Confirm with your local Mirchi 360. */}
          Prices are indicative and may vary by branch.
        </p>
      </div>
    </section>
  );
}
