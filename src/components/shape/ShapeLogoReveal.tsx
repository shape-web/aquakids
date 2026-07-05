"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  SHAPE_LOGO_VIEWBOX,
  SHAPE_TAGLINE_PATH,
  SHAPE_WORDMARK_PATH,
} from "./shapeLogoPaths";

const EASE = [0.22, 1, 0.36, 1] as const;
const VIEWBOX_WIDTH = 600;
const VIEWBOX_HEIGHT = 224;

type ShapeLogoRevealProps = {
  className?: string;
  /** When false, render immediately without intro animation */
  animate?: boolean;
};

export function ShapeLogoReveal({
  className,
  animate = true,
}: ShapeLogoRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const clipId = useId().replace(/:/g, "");
  const wordmarkClipId = `${clipId}-wordmark`;
  const taglineClipId = `${clipId}-tagline`;
  const shouldAnimate = animate && !prefersReducedMotion;

  if (!shouldAnimate) {
    return (
      <svg
        viewBox={SHAPE_LOGO_VIEWBOX}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="shape — Digitale Architektur"
        role="img"
      >
        <path d={SHAPE_WORDMARK_PATH} fill="#10231D" />
        <path d={SHAPE_TAGLINE_PATH} fill="#B79B78" />
      </svg>
    );
  }

  return (
    <svg
      viewBox={SHAPE_LOGO_VIEWBOX}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="shape — Digitale Architektur"
      role="img"
    >
      <defs>
        <clipPath id={wordmarkClipId}>
          <motion.rect
            y={0}
            height={VIEWBOX_HEIGHT}
            initial={{ x: 0, width: 0 }}
            animate={{ x: 0, width: VIEWBOX_WIDTH }}
            transition={{ duration: 0.45, ease: EASE }}
          />
        </clipPath>
        <clipPath id={taglineClipId}>
          <motion.rect
            y={0}
            height={VIEWBOX_HEIGHT}
            initial={{ x: 0, width: 0 }}
            animate={{ x: 0, width: VIEWBOX_WIDTH }}
            transition={{ duration: 0.45, delay: 0.25, ease: EASE }}
          />
        </clipPath>
      </defs>

      <motion.g
        clipPath={`url(#${wordmarkClipId})`}
        initial={{ opacity: 0.92, y: 3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        <path d={SHAPE_WORDMARK_PATH} fill="#10231D" />
      </motion.g>

      <motion.g
        clipPath={`url(#${taglineClipId})`}
        initial={{ opacity: 0.9, y: 2 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.25, ease: EASE }}
      >
        <path d={SHAPE_TAGLINE_PATH} fill="#B79B78" />
      </motion.g>
    </svg>
  );
}
