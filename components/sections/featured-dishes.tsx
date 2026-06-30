"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, staggerItem } from "@/components/shared/reveal";
import { DishCard } from "@/components/shared/dish-card";
import { FEATURED_DISHES } from "@/data/menu";

export function FeaturedDishes() {
  // Cap the showcase to a tidy grid; the full list lives in the Menu section.
  const dishes = FEATURED_DISHES.slice(0, 9);

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Signature Selection"
          title="Featured"
          highlight="Dishes"
          subtitle="Hand-picked favourites, flame-grilled and slow-cooked to perfection. Every plate tells a story of smoke, spice and tradition."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dishes.map((dish, i) => (
            <motion.div key={dish.id} variants={staggerItem}>
              <DishCard dish={dish} priority={i < 3} />
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
