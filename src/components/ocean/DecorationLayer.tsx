"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { OCEAN_FLOOR, OCEAN_SEAWEED } from "./oceanConfig";

type DecorationLayerProps = {
  scroll: MotionValue<number>;
};

export function DecorationLayer({ scroll }: DecorationLayerProps) {
  const floorOpacity = useTransform(scroll, [0.5, 0.75, 1], [0, 0.8, 1]);
  const seaweedOpacity = useTransform(scroll, [0.4, 0.7], [0, 1]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[4]" aria-hidden="true">
      {/* Seaweed */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[45vh]"
        style={{ opacity: seaweedOpacity }}
      >
        {OCEAN_SEAWEED.map((plant) => (
          <div
            key={plant.src}
            className="ocean-seaweed absolute bottom-0"
            style={
              {
                left: plant.left,
                "--sway-duration": `${5 + plant.delay}s`,
                "--sway-delay": `${plant.delay}s`,
              } as CSSProperties
            }
          >
            <Image
              src={plant.src}
              alt=""
              width={plant.width}
              height={plant.width * 2}
              className="h-auto"
              style={{ width: plant.width, height: "auto" }}
            />
          </div>
        ))}
      </motion.div>

      {/* Floor decorations */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{ opacity: floorOpacity }}
      >
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ocean-floor/80 to-transparent" />
        {OCEAN_FLOOR.map((item) => (
          <div
            key={item.src}
            className="absolute"
            style={{ left: item.left, bottom: item.bottom }}
          >
            <Image
              src={item.src}
              alt=""
              width={item.width}
              height={item.width}
              className="h-auto"
              style={{ width: item.width, height: "auto" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
