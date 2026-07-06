"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const JELLY_DURATION_S = 20;

export function HeroJellyfish() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  if (prefersReducedMotion) {
    return (
      <div
        className="pointer-events-none absolute left-[75%] top-[12%] z-[2] -translate-x-1/2 opacity-40 md:top-[14%]"
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

  if (!visible) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none absolute left-[75%] top-[11%] z-[2] -translate-x-1/2 md:top-[13%]"
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.82, x: "-50%", y: 0 }}
      animate={{
        opacity: [0, 0.68, 0.72, 0.5, 0],
        scale: [0.82, 1.14, 1.1, 0.92, 0.72],
        x: ["-50%", "calc(-50% - 24px)", "calc(-50% - 64px)", "calc(-50% - 112px)", "calc(-50% - 156px)"],
        y: [0, 14, 36, 64, 92],
      }}
      transition={{
        duration: JELLY_DURATION_S,
        times: [0, 0.12, 0.32, 0.72, 1],
        ease: "easeInOut",
      }}
      onAnimationComplete={() => setVisible(false)}
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
