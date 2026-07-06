"use client";

import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

/**
 * Seamless tile period (viewBox width).
 * y(0) === y(400) with matching outgoing/incoming tangents for gap-free repeat.
 */
const WAVE_PATH = "M0,50 C100,20 300,80 400,50 L400,120 L0,120 Z";

type SurfaceWavesProps = {
  className?: string;
};

type WaveTileProps = {
  fill: string;
  className?: string;
};

function WaveTile({ fill, className }: WaveTileProps) {
  return (
    <svg
      viewBox="0 0 400 120"
      preserveAspectRatio="none"
      className={cn("block h-full w-[100vw] shrink-0", className)}
      aria-hidden="true"
    >
      <path fill={fill} d={WAVE_PATH} />
    </svg>
  );
}

type WaveTrackProps = {
  fill: string;
  heightClass: string;
  duration: number;
  className?: string;
};

function WaveTrack({ fill, heightClass, duration, className }: WaveTrackProps) {
  return (
    <div className={cn("absolute left-0 w-full overflow-hidden", heightClass, className)}>
      <div
        className="ocean-wave-track flex w-[200vw]"
        style={{ "--wave-duration": `${duration}s` } as CSSProperties}
      >
        <WaveTile fill={fill} />
        <WaveTile fill={fill} />
      </div>
    </div>
  );
}

export function SurfaceWaves({ className }: SurfaceWavesProps) {
  return (
    <div
      className={cn("pointer-events-none absolute inset-x-0 top-0 w-full", className)}
      aria-hidden="true"
    >
      <WaveTrack
        fill="rgba(255,255,255,0.4)"
        heightClass="h-16 md:h-20"
        duration={18}
        className="top-20 md:top-24"
      />
      <WaveTrack
        fill="rgba(255,255,255,0.25)"
        heightClass="h-12 md:h-16"
        duration={24}
        className="top-28 opacity-80 md:top-32"
      />
      <WaveTrack
        fill="rgba(255,255,255,0.18)"
        heightClass="h-10 md:h-14"
        duration={30}
        className="top-36 opacity-60 md:top-40"
      />
    </div>
  );
}
