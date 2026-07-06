"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type LightRaysProps = {
  scroll: MotionValue<number>;
};

export function LightRays({ scroll }: LightRaysProps) {
  const opacity = useTransform(scroll, [0, 0.2, 0.5], [0.7, 0.4, 0]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[60vh]"
      style={{ opacity }}
      aria-hidden="true"
    >
      <div
        className="absolute left-1/4 top-0 h-full w-32 -skew-x-12 bg-gradient-to-b from-white/30 to-transparent"
        style={{ animation: "ray-shimmer 8s ease-in-out infinite" }}
      />
      <div
        className="absolute left-1/2 top-0 h-full w-24 -skew-x-6 bg-gradient-to-b from-white/25 to-transparent"
        style={{ animation: "ray-shimmer 10s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute left-2/3 top-0 h-full w-40 -skew-x-12 bg-gradient-to-b from-white/20 to-transparent"
        style={{ animation: "ray-shimmer 12s ease-in-out infinite 4s" }}
      />
    </motion.div>
  );
}
