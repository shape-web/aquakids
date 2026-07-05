"use client";

import { useLayoutEffect, useRef } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { useMounted } from "@/lib/useMounted";
import {
  SHAPE_LOGO_ANIMATED_VIEWBOX,
  shapeLogoAnimatedPaths,
} from "./shapeLogoAnimatedPaths";

const EASE = [0.22, 1, 0.36, 1] as const;
const LETTER_DURATION = 0.36;

const LETTER_SEQUENCE = [
  { id: "letter-s", delay: 0, group: false as const, ...shapeLogoAnimatedPaths.letterS },
  { id: "letter-h", delay: 0.22, group: false as const, ...shapeLogoAnimatedPaths.letterH },
  { id: "letter-a", delay: 0.44, group: false as const, ...shapeLogoAnimatedPaths.letterA },
  { id: "letter-p", delay: 0.66, group: true as const, ...shapeLogoAnimatedPaths.letterP },
  { id: "letter-e", delay: 0.88, group: false as const, ...shapeLogoAnimatedPaths.letterE },
] as const;

const SUBTITLE = {
  id: "subtitle",
  delay: 1.15,
  duration: 0.45,
  ...shapeLogoAnimatedPaths.subtitle,
} as const;

type ShapeLogoIntroProps = {
  className?: string;
};

export function ShapeLogoIntro({ className }: ShapeLogoIntroProps) {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();
  const skipIntro = !mounted || Boolean(prefersReducedMotion);

  return (
    <svg
      viewBox={SHAPE_LOGO_ANIMATED_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="shape — Digitale Architektur"
      role="img"
    >
      <g id="shape_logo_primary">
        {LETTER_SEQUENCE.map((letter) =>
          letter.group ? (
            <AnimatedLetterGroup
              key={letter.id}
              id={letter.id}
              d={letter.d}
              fill={letter.fill}
              delay={letter.delay}
              skipIntro={skipIntro}
            />
          ) : (
            <AnimatedLetterPath
              key={letter.id}
              id={letter.id}
              d={letter.d}
              fill={letter.fill}
              delay={letter.delay}
              skipIntro={skipIntro}
            />
          )
        )}

        <AnimatedLetterPath
          id={SUBTITLE.id}
          d={SUBTITLE.d}
          fill={SUBTITLE.fill}
          delay={SUBTITLE.delay}
          duration={SUBTITLE.duration}
          skipIntro={skipIntro}
          subtle
        />
      </g>
    </svg>
  );
}

type AnimatedLetterProps = {
  id: string;
  d: string;
  fill: string;
  delay: number;
  skipIntro: boolean;
  duration?: number;
  subtle?: boolean;
};

function AnimatedLetterPath({
  id,
  d,
  fill,
  delay,
  skipIntro,
  duration = LETTER_DURATION,
  subtle = false,
}: AnimatedLetterProps) {
  const ref = useRef<SVGPathElement>(null);
  const lift = subtle ? 3 : 5;

  useLayoutEffect(() => {
    const node = ref.current;
    if (skipIntro || !node) return;

    const controls = animate(
      node,
      { opacity: [0, 1], y: [lift, 0] },
      { delay, duration, ease: EASE }
    );
    return () => controls.stop();
  }, [delay, duration, lift, skipIntro]);

  return (
    <path
      ref={ref}
      id={id}
      d={d}
      fill={fill}
      style={{
        opacity: skipIntro ? 1 : 0,
        transform: skipIntro ? undefined : `translateY(${lift}px)`,
      }}
    />
  );
}

function AnimatedLetterGroup({
  id,
  d,
  fill,
  delay,
  skipIntro,
}: Omit<AnimatedLetterProps, "subtle" | "duration">) {
  const ref = useRef<SVGGElement>(null);
  const lift = 5;

  useLayoutEffect(() => {
    const node = ref.current;
    if (skipIntro || !node) return;

    const controls = animate(
      node,
      { opacity: [0, 1], y: [lift, 0] },
      { delay, duration: LETTER_DURATION, ease: EASE }
    );
    return () => controls.stop();
  }, [delay, lift, skipIntro]);

  return (
    <g
      ref={ref}
      id={id}
      style={{
        opacity: skipIntro ? 1 : 0,
        transform: skipIntro ? undefined : `translateY(${lift}px)`,
      }}
    >
      <path id="Subtract" d={d} fill={fill} />
    </g>
  );
}
