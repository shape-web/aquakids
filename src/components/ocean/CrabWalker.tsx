"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { OCEAN_CRAB } from "./oceanConfig";

export function CrabWalker() {
  const prefersReducedMotion = useReducedMotion();
  const progress = useMotionValue(0);
  const left = useTransform(progress, [0, 1], ["104%", "-18%"]);
  const opacity = useTransform(progress, [0, 0.04, 1], [0, 1, 1]);

  useEffect(() => {
    const update = () => {
      const team = document.getElementById("team");
      if (!team) return;

      const vh = window.innerHeight;
      const start = team.offsetTop - vh * 0.35;
      const end = document.documentElement.scrollHeight - vh * 1.1;
      const range = Math.max(end - start, 1);
      const value = (window.scrollY - start) / range;

      progress.set(Math.min(1, Math.max(0, value)));
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [progress]);

  if (prefersReducedMotion) {
    return null;
  }

  return (
    <motion.div
      className="pointer-events-none absolute bottom-0 z-[6]"
      style={{
        left,
        opacity,
      }}
      aria-hidden="true"
    >
      <div className="ocean-crab-walk">
        <Image
          src={OCEAN_CRAB.src}
          alt=""
          width={OCEAN_CRAB.width}
          height={OCEAN_CRAB.width}
          className="h-auto"
          style={{ width: OCEAN_CRAB.width, height: "auto" }}
        />
      </div>
    </motion.div>
  );
}
