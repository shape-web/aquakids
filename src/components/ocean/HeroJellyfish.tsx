"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function HeroJellyfish() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="pointer-events-none absolute right-[6%] top-[12%] z-[2] opacity-40 md:right-[10%] md:top-[14%]"
        aria-hidden="true"
      >
        <Image
          src="/ocean/animals/jellyfish.svg"
          alt=""
          width={68}
          height={68}
          className="h-auto w-14 md:w-16"
        />
      </div>
    );
  }

  return (
    <motion.div
      className="pointer-events-none absolute right-[5%] top-[11%] z-[2] md:right-[9%] md:top-[13%]"
      aria-hidden="true"
      initial={{ opacity: 0, x: 28, y: 0 }}
      animate={{
        opacity: [0, 0.72, 0.55, 0.3],
        x: [28, 10, -16, -38],
        y: [0, -10, 5, -3],
      }}
      transition={{
        duration: 14,
        times: [0, 0.14, 0.58, 1],
        ease: "easeInOut",
      }}
    >
      <Image
        src="/ocean/animals/jellyfish.svg"
        alt=""
        width={72}
        height={72}
        className="h-auto w-[3.75rem] drop-shadow-[0_8px_20px_rgba(10,61,98,0.12)] md:w-[4.25rem]"
        priority
      />
    </motion.div>
  );
}
