"use client";

import { cn } from "@/lib/utils";

/**
 * Soft drifting smoke layers. Pure CSS blobs with blur — cheap and
 * decorative. Place inside a `relative` container.
 */
export function SmokeOverlay({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute -left-1/4 top-1/4 h-[60vh] w-[60vh] rounded-full blur-[90px]"
        style={{
          background:
            "radial-gradient(circle, rgba(255,107,0,0.14), transparent 65%)",
          animation: "smoke-drift 14s ease-in-out infinite",
        }}
      />
      <div
        className="absolute right-0 top-0 h-[55vh] w-[55vh] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(198,40,40,0.16), transparent 65%)",
          animation: "smoke-drift 18s ease-in-out 2s infinite",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[50vh] w-[70vh] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(249,168,38,0.1), transparent 70%)",
          animation: "smoke-drift 20s ease-in-out 1s infinite",
        }}
      />
    </div>
  );
}
