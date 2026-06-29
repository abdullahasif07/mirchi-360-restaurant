import Image from "next/image";
import { cn } from "@/lib/utils";

/** Official Mirchi 360° logo (circular badge). Lives in /public/brand. */
export const LOGO_SRC = "/brand/mirchi-logo.png";

/**
 * Brand lockup: the official circular logo badge paired with the wordmark.
 * The badge is self-contained; the wordmark keeps the name legible at small
 * sizes. Pass `showTagline` for the footer variant.
 */
export function Logo({
  className,
  showTagline = false,
  priority = false,
}: {
  className?: string;
  showTagline?: boolean;
  priority?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <Image
        src={LOGO_SRC}
        alt="Mirchi 360° logo"
        width={48}
        height={48}
        priority={priority}
        className="size-11 shrink-0 object-contain drop-shadow-[0_4px_14px_rgba(255,107,0,0.3)]"
      />
      <span className="flex flex-col leading-none">
        <span className="font-heading text-xl font-bold tracking-tight text-ink">
          Mirchi <span className="text-fire">360°</span>
        </span>
        {showTagline && (
          <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-ink-muted">
            Charcoal BBQ &amp; Grill
          </span>
        )}
      </span>
    </span>
  );
}
