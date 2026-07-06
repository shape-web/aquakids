"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import type { ReactNode } from "react";

type ParallaxLayerProps = {
  scroll: MotionValue<number>;
  depth: number;
  children: ReactNode;
  className?: string;
};

export function ParallaxLayer({
  scroll,
  depth,
  children,
  className,
}: ParallaxLayerProps) {
  const y = useTransform(scroll, [0, 1], [0, depth * 100]);

  return (
    <motion.div className={className} style={{ y }}>
      {children}
    </motion.div>
  );
}
