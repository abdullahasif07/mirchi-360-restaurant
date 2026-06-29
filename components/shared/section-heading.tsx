"use client";

import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  /** Optional highlighted word(s) rendered in the fire gradient. */
  highlight?: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

/** Reusable section header with eyebrow, title and optional subtitle. */
export function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-secondary">
            <span className="h-px w-8 bg-secondary/60" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-4 text-balance text-4xl font-bold leading-[1.1] text-ink md:text-5xl lg:text-6xl">
          {title}{" "}
          {highlight && <span className="text-fire">{highlight}</span>}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="mt-5 text-base leading-relaxed text-ink-muted md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
