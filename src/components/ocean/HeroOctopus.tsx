"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const OCTOPUS_PATH = {
  opacity: [0, 0.82, 1, 1, 1, 0.55, 0],
  scale: [0.78, 1.35, 1.62, 1.68, 1.64, 1.05, 0.42],
  x: [88, 56, 40, 34, 36, -72, -210],
  y: [18, 4, -10, 6, -5, 14, 32],
  rotate: [12, 5, -6, 4, -3, -11, -20],
} as const;

export function HeroOctopus() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="pointer-events-none absolute right-[8%] top-[32%] z-[3] opacity-35 md:right-[12%] md:top-[30%]"
        aria-hidden="true"
      >
        <Image
          src="/ocean/animals/octopus.svg"
          alt=""
          width={88}
          height={88}
          className="h-auto w-16 md:w-[4.5rem]"
        />
      </div>
    );
  }

  return (
    <motion.div
      className="pointer-events-none absolute right-[6%] top-[28%] z-[3] md:right-[10%] md:top-[26%]"
      aria-hidden="true"
      initial={{
        opacity: OCTOPUS_PATH.opacity[0],
        scale: OCTOPUS_PATH.scale[0],
        x: OCTOPUS_PATH.x[0],
        y: OCTOPUS_PATH.y[0],
        rotate: OCTOPUS_PATH.rotate[0],
      }}
      animate={{
        opacity: [...OCTOPUS_PATH.opacity],
        scale: [...OCTOPUS_PATH.scale],
        x: [...OCTOPUS_PATH.x],
        y: [...OCTOPUS_PATH.y],
        rotate: [...OCTOPUS_PATH.rotate],
      }}
      transition={{
        duration: 5.8,
        times: [0, 0.1, 0.24, 0.38, 0.46, 0.72, 1],
        ease: "easeInOut",
      }}
    >
      <div className="hero-octopus-drift">
        <Image
          src="/ocean/animals/octopus.svg"
          alt=""
          width={120}
          height={120}
          className="h-auto w-[4.75rem] drop-shadow-[0_12px_28px_rgba(10,61,98,0.18)] md:w-[5.5rem]"
          priority
        />
      </div>
    </motion.div>
  );
}
