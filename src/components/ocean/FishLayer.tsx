"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { OCEAN_FISH } from "./oceanConfig";

type FishLayerProps = {
  scroll: MotionValue<number>;
};

export function FishLayer({ scroll }: FishLayerProps) {
  const layerY = useTransform(scroll, [0, 1], [0, 120]);
  const opacity = useTransform(scroll, [0, 0.15, 0.85, 1], [0.3, 1, 1, 0.5]);

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-[3]"
      style={{ y: layerY, opacity }}
      aria-hidden="true"
    >
      {OCEAN_FISH.map((fish) => (
        <div
          key={fish.src}
          className={`absolute ${fish.reverse ? "ocean-fish-reverse" : "ocean-fish"}`}
          style={
            {
              top: fish.top,
              left: fish.left,
              "--fish-duration": `${fish.duration}s`,
              "--fish-delay": `${fish.delay}s`,
              opacity: 0.5 + fish.depth * 0.5,
            } as CSSProperties
          }
        >
          <Image
            src={fish.src}
            alt=""
            width={fish.width}
            height={fish.width}
            className="h-auto w-auto"
            style={{ width: fish.width * (0.7 + fish.depth * 0.3), height: "auto" }}
          />
        </div>
      ))}

      {/* Dolphin — scroll highlight, not looping */}
      <DolphinMoment scroll={scroll} />
    </motion.div>
  );
}

function DolphinMoment({ scroll }: { scroll: MotionValue<number> }) {
  const opacity = useTransform(scroll, [0.2, 0.26, 0.68, 0.78], [0, 1, 1, 0]);
  const x = useTransform(scroll, [0.2, 0.78], ["-115%", "115%"]);
  const y = useTransform(scroll, [0.2, 0.35, 0.55, 0.78], [24, -14, 10, 22]);
  const rotate = useTransform(scroll, [0.2, 0.45, 0.78], [-6, 2, 5]);

  return (
    <motion.div
      className="absolute left-1/2 top-[40%] z-10 -translate-x-1/2"
      style={{ opacity, x, y, rotate }}
    >
      <Image
        src="/ocean/animals/dolphin.svg"
        alt=""
        width={160}
        height={160}
        className="h-auto w-32 md:w-40"
      />
    </motion.div>
  );
}
