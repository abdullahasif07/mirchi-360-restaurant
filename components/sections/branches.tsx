"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StaggerGroup, staggerItem } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { BRANCHES } from "@/data/branches";
import { mapsHref, telHref, whatsappHref } from "@/lib/utils";
import { cn } from "@/lib/utils";

export function Branches() {
  const cities = useMemo(
    () => ["All", ...Array.from(new Set(BRANCHES.map((b) => b.city)))],
    [],
  );
  const [city, setCity] = useState("All");

  const filtered =
    city === "All" ? BRANCHES : BRANCHES.filter((b) => b.city === city);

  return (
    <section id="branches" className="section-pad relative overflow-hidden bg-bg-soft texture-charcoal">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Find Us"
          title="Our"
          highlight="Branches"
          subtitle="Eleven locations and growing across Pakistan. Find your nearest Mirchi 360° and call ahead for dine-in, takeaway or delivery."
        />

        {/* City filter */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {cities.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCity(c)}
              className={cn(
                "rounded-full px-5 py-2 text-sm font-medium transition-all",
                city === c
                  ? "bg-fire-animated text-white shadow-lg"
                  : "border border-white/10 bg-white/5 text-ink-muted hover:border-white/30 hover:text-ink",
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <StaggerGroup
          key={city}
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {filtered.map((branch) => (
            <motion.article
              key={branch.id}
              variants={staggerItem}
              className="group relative flex flex-col overflow-hidden rounded-[var(--radius-xl2)] border border-white/8 bg-card p-6 transition-all duration-400 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-[0_30px_60px_-25px_rgba(255,107,0,0.5)]"
            >
              {/* glow accent */}
              <span className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-secondary/10 blur-2xl transition-opacity duration-500 group-hover:bg-secondary/20" />

              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  <MapPin className="size-3" /> {branch.city}
                </span>
              </div>

              <h3 className="mt-4 font-heading text-2xl font-bold text-ink">
                {branch.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-muted">
                {branch.address}
              </p>

              <div className="mt-4 flex items-center gap-2 text-sm text-ink-muted">
                <Clock className="size-4 text-secondary" />
                {branch.hours}
              </div>
              <a
                href={telHref(branch.phone)}
                className="mt-2 flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-secondary"
              >
                <Phone className="size-4 text-secondary" />
                {branch.phone}
              </a>

              {/* Actions */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                <Button asChild size="sm" variant="solid" aria-label={`Call ${branch.name}`}>
                  <a href={telHref(branch.phone)}>
                    <Phone /> Call
                  </a>
                </Button>
                <Button asChild size="sm" variant="whatsapp" aria-label={`WhatsApp ${branch.name}`}>
                  <a
                    href={whatsappHref(
                      branch.whatsapp ?? branch.phone,
                      `Hi Mirchi 360 (${branch.name}), I'd like to place an order.`,
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle /> Chat
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" aria-label={`Directions to ${branch.name}`}>
                  <a
                    href={mapsHref(branch.mapQuery)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation /> Map
                  </a>
                </Button>
              </div>
            </motion.article>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
