"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";

type GradientBackgroundProps = {
  scroll: MotionValue<number>;
};

export function GradientBackground({ scroll }: GradientBackgroundProps) {
  const background = useTransform(
    scroll,
    [0, 0.35, 0.65, 1],
    [
      "linear-gradient(180deg, #b8e8ff 0%, #7dd3fc 35%, #38bdf8 70%, #0ea5e9 100%)",
      "linear-gradient(180deg, #7dd3fc 0%, #2ec4b6 40%, #1a8fb0 75%, #0a3d62 100%)",
      "linear-gradient(180deg, #38bdf8 0%, #1a8fb0 30%, #0a3d62 70%, #062a45 100%)",
      "linear-gradient(180deg, #1a8fb0 0%, #0a3d62 40%, #062a45 80%, #041e33 100%)",
    ]
  );

  return (
    <motion.div
      className="absolute inset-0"
      style={{ background }}
      aria-hidden="true"
    />
  );
}
