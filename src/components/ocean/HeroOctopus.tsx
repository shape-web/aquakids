"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const DURATION_S = 5.8;
const SECOND_APPEARANCE_MS = 15_000;
const RECURRING_GAP_MS = 20_000;
const ANIM_MS = DURATION_S * 1000;

const OCTOPUS_PATH = {
  opacity: [0, 0.82, 1, 1, 1, 0.55, 0],
  scale: [0.78, 1.35, 1.62, 1.68, 1.64, 1.05, 0.42],
  x: [88, 56, 40, 34, 36, -72, -210],
  y: [18, 4, -10, 6, -5, 14, 32],
  rotate: [12, 5, -6, 4, -3, -11, -20],
};

const OCTOPUS_PATH_REVERSED = {
  opacity: [...OCTOPUS_PATH.opacity].reverse(),
  scale: [...OCTOPUS_PATH.scale].reverse(),
  x: [...OCTOPUS_PATH.x].reverse(),
  y: [...OCTOPUS_PATH.y].reverse(),
  rotate: [...OCTOPUS_PATH.rotate].reverse(),
};

const OCTOPUS_TRANSITION = {
  duration: DURATION_S,
  times: [0, 0.1, 0.24, 0.38, 0.46, 0.72, 1],
  ease: "easeInOut" as const,
};

type Side = "left" | "right";

type Appearance = {
  runId: number;
  side: Side;
  reversed: boolean;
};

function randomSide(): Side {
  return Math.random() < 0.5 ? "left" : "right";
}

function getPath(side: Side, reversed: boolean) {
  const base = reversed ? OCTOPUS_PATH_REVERSED : OCTOPUS_PATH;

  if (side === "right") {
    return base;
  }

  return {
    opacity: [...base.opacity],
    scale: [...base.scale],
    x: base.x.map((value) => -value),
    y: [...base.y],
    rotate: base.rotate.map((value) => -value),
  };
}

function sidePosition(side: Side) {
  return side === "right"
    ? "right-[6%] top-[28%] md:right-[10%] md:top-[26%]"
    : "left-[6%] top-[28%] md:left-[10%] md:top-[26%]";
}

export function HeroOctopus() {
  const prefersReducedMotion = useReducedMotion();
  const runCounter = useRef(0);
  const [appearance, setAppearance] = useState<Appearance>({
    runId: 0,
    side: "right",
    reversed: false,
  });
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (prefersReducedMotion) return;

    let cancelled = false;
    const timeouts: number[] = [];

    const schedule = (delayMs: number, fn: () => void) => {
      const id = window.setTimeout(() => {
        if (!cancelled) fn();
      }, delayMs);
      timeouts.push(id);
    };

    const play = (side: Side, reversed: boolean) => {
      runCounter.current += 1;
      setAppearance({
        runId: runCounter.current,
        side,
        reversed,
      });
      setVisible(true);
    };

    const scheduleRecurring = () => {
      schedule(ANIM_MS + RECURRING_GAP_MS, () => {
        play(randomSide(), false);
        scheduleRecurring();
      });
    };

    schedule(SECOND_APPEARANCE_MS, () => {
      play("right", true);
      scheduleRecurring();
    });

    return () => {
      cancelled = true;
      timeouts.forEach((id) => window.clearTimeout(id));
    };
  }, [prefersReducedMotion]);

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

  if (!visible) {
    return null;
  }

  const path = getPath(appearance.side, appearance.reversed);

  return (
    <motion.div
      key={appearance.runId}
      className={`pointer-events-none absolute z-[3] ${sidePosition(appearance.side)}`}
      aria-hidden="true"
      initial={{
        opacity: path.opacity[0],
        scale: path.scale[0],
        x: path.x[0],
        y: path.y[0],
        rotate: path.rotate[0],
      }}
      animate={{
        opacity: [...path.opacity],
        scale: [...path.scale],
        x: [...path.x],
        y: [...path.y],
        rotate: [...path.rotate],
      }}
      transition={OCTOPUS_TRANSITION}
      onAnimationComplete={() => setVisible(false)}
    >
      <div className="hero-octopus-drift">
        <Image
          src="/ocean/animals/octopus.svg"
          alt=""
          width={120}
          height={120}
          className="h-auto w-[4.75rem] drop-shadow-[0_12px_28px_rgba(10,61,98,0.18)] md:w-[5.5rem]"
          priority={appearance.runId === 0}
        />
      </div>
    </motion.div>
  );
}
