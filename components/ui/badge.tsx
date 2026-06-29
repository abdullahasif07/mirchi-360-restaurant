import * as React from "react";
import { cn } from "@/lib/utils";

const styles: Record<string, string> = {
  spicy: "bg-primary/15 text-primary border-primary/30",
  bestseller: "bg-accent/15 text-accent border-accent/30",
  new: "bg-secondary/15 text-secondary border-secondary/30",
  chef: "bg-white/10 text-white border-white/20",
  family: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
};

const labels: Record<string, string> = {
  spicy: "Spicy",
  bestseller: "Bestseller",
  new: "New",
  chef: "Chef's Pick",
  family: "Family Size",
};

export function Badge({
  tag,
  className,
}: {
  tag: keyof typeof styles;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm",
        styles[tag],
        className,
      )}
    >
      {labels[tag] ?? tag}
    </span>
  );
}
