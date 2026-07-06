"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { motion, useTransform, type MotionValue } from "framer-motion";
import { OCEAN_JELLYFISH, OCEAN_OCTOPUS } from "./oceanConfig";

type DiscoveryLayerProps = {
  scroll: MotionValue<number>;
};

export function DiscoveryLayer({ scroll }: DiscoveryLayerProps) {
  const jellyOpacity = useTransform(scroll, [0, 0.08, 0.2, 0.35], [0.05, 0.35, 0.65, 0.55]);
  const octopusOpacity = useTransform(scroll, [0.48, 0.62, 0.88], [0, 0.75, 0.9]);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {/* Jellyfish — Hero → Kurse transition, always drifting via CSS */}
      <motion.div className="absolute inset-0 z-[2]" style={{ opacity: jellyOpacity }}>
        {OCEAN_JELLYFISH.map((jelly) => (
          <div
            key={jelly.id}
            className="ocean-jellyfish absolute"
            style={
              {
                top: jelly.top,
                left: jelly.left,
                "--jelly-duration": `${jelly.duration}s`,
                "--jelly-delay": `${jelly.delay}s`,
                opacity: jelly.opacity,
              } as CSSProperties
            }
          >
            <Image
              src={jelly.src}
              alt=""
              width={jelly.width}
              height={jelly.width}
              className="h-auto"
              style={{ width: jelly.width, height: "auto" }}
            />
          </div>
        ))}
      </motion.div>

      {/* Octopus — lower discovery near seafloor plants */}
      <motion.div className="absolute inset-0 z-[5]" style={{ opacity: octopusOpacity }}>
        {OCEAN_OCTOPUS.map((creature) => (
          <div
            key={creature.id}
            className="ocean-octopus absolute"
            style={
              {
                bottom: creature.bottom,
                left: creature.left,
                "--octopus-duration": `${creature.duration}s`,
                "--octopus-delay": `${creature.delay}s`,
              } as CSSProperties
            }
          >
            <Image
              src={creature.src}
              alt=""
              width={creature.width}
              height={creature.width}
              className="h-auto"
              style={{ width: creature.width, height: "auto" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
