"use client";

import { SurfaceWaves } from "./SurfaceWaves";

export function HeroSurface() {
  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[45vh] overflow-hidden"
      aria-hidden="true"
    >
      {/* Sun shimmer on water */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-white/50 via-white/15 to-transparent" />

      {/* Light rays — surface only */}
      <div
        className="absolute left-[20%] top-0 h-full w-28 -skew-x-12 bg-gradient-to-b from-white/35 to-transparent"
        style={{ animation: "ray-shimmer 9s ease-in-out infinite" }}
      />
      <div
        className="absolute left-[55%] top-0 h-3/4 w-20 -skew-x-6 bg-gradient-to-b from-white/25 to-transparent"
        style={{ animation: "ray-shimmer 11s ease-in-out infinite 2s" }}
      />

      {/* Caustic shimmer */}
      <div
        className="absolute inset-x-0 top-16 h-24 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 30% 50%, rgba(255,255,255,0.5) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 70% 60%, rgba(255,255,255,0.35) 0%, transparent 70%)",
          animation: "ray-shimmer 14s ease-in-out infinite 1s",
        }}
      />

      <SurfaceWaves />
    </div>
  );
}
