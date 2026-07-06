"use client";

import { motion } from "framer-motion";
import {
  SHAPE_LOGO_ANIMATED_VIEWBOX,
  shapeLogoAnimatedPaths,
} from "./shapeLogoAnimatedPaths";
import {
  SHAPE_LOGO_INTRO_EASE,
  SHAPE_LOGO_INTRO_TIMING,
  SHAPE_LOGO_LETTER_DELAYS,
} from "./shapeLogoIntroTiming";

const LETTER_SEQUENCE = [
  { id: "letter-s", group: false as const, ...shapeLogoAnimatedPaths.letterS },
  { id: "letter-h", group: false as const, ...shapeLogoAnimatedPaths.letterH },
  { id: "letter-a", group: false as const, ...shapeLogoAnimatedPaths.letterA },
  { id: "letter-p", group: true as const, ...shapeLogoAnimatedPaths.letterP },
  { id: "letter-e", group: false as const, ...shapeLogoAnimatedPaths.letterE },
] as const;

const SUBTITLE = {
  id: "subtitle",
  ...shapeLogoAnimatedPaths.subtitle,
} as const;

const letterTransition = (delay: number) => ({
  delay,
  duration: SHAPE_LOGO_INTRO_TIMING.LETTER_DURATION,
  ease: SHAPE_LOGO_INTRO_EASE,
});

const subtitleTransition = {
  delay: SHAPE_LOGO_INTRO_TIMING.SUBTITLE_DELAY,
  duration: SHAPE_LOGO_INTRO_TIMING.SUBTITLE_DURATION,
  ease: SHAPE_LOGO_INTRO_EASE,
};

type ShapeLogoIntroProps = {
  className?: string;
  playIntro: boolean;
};

export function ShapeLogoIntro({ className, playIntro }: ShapeLogoIntroProps) {
  return (
    <svg
      viewBox={SHAPE_LOGO_ANIMATED_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="shape — Digitale Architektur"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <g id="shape_logo_primary">
        {LETTER_SEQUENCE.map((letter, index) =>
          letter.group ? (
            <AnimatedLetterGroup
              key={letter.id}
              id={letter.id}
              d={letter.d}
              fill={letter.fill}
              delay={SHAPE_LOGO_LETTER_DELAYS[index]}
              playIntro={playIntro}
            />
          ) : (
            <AnimatedLetterPath
              key={letter.id}
              id={letter.id}
              d={letter.d}
              fill={letter.fill}
              delay={SHAPE_LOGO_LETTER_DELAYS[index]}
              playIntro={playIntro}
            />
          )
        )}

        <AnimatedLetterPath
          id={SUBTITLE.id}
          d={SUBTITLE.d}
          fill={SUBTITLE.fill}
          delay={SHAPE_LOGO_INTRO_TIMING.SUBTITLE_DELAY}
          playIntro={playIntro}
          variant="subtitle"
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
  playIntro: boolean;
  variant?: "letter" | "subtitle";
};

function AnimatedLetterPath({
  id,
  d,
  fill,
  delay,
  playIntro,
  variant = "letter",
}: AnimatedLetterProps) {
  if (!playIntro) {
    return <path id={id} d={d} fill={fill} />;
  }

  const isSubtitle = variant === "subtitle";

  return (
    <motion.path
      id={id}
      d={d}
      fill={fill}
      initial={
        isSubtitle
          ? { opacity: 0, y: 8, filter: "blur(6px)" }
          : { opacity: 0, y: 14, scale: 0.92, filter: "blur(10px)" }
      }
      animate={
        isSubtitle
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      transition={isSubtitle ? subtitleTransition : letterTransition(delay)}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    />
  );
}

function AnimatedLetterGroup({
  id,
  d,
  fill,
  delay,
  playIntro,
}: Omit<AnimatedLetterProps, "variant">) {
  if (!playIntro) {
    return (
      <g id={id}>
        <path id="Subtract" d={d} fill={fill} />
      </g>
    );
  }

  return (
    <motion.g
      id={id}
      initial={{ opacity: 0, y: 14, scale: 0.92, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={letterTransition(delay)}
      style={{ transformOrigin: "center", transformBox: "fill-box" }}
    >
      <path id="Subtract" d={d} fill={fill} />
    </motion.g>
  );
}
