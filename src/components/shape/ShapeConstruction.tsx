"use client";

import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

export function ShapeConstruction() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="relative aspect-[4/3] w-full max-w-xl rounded-sm border border-rule bg-beige/40"
        aria-hidden="true"
      >
        <div className="absolute inset-4 border border-forest/15" />
        <div className="absolute bottom-8 left-8 right-8 top-16 border border-forest/20 bg-ivory" />
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/3] w-full max-w-xl" aria-hidden="true">
      <svg
        className="h-full w-full"
        viewBox="0 0 480 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Phase 1 — Blueprint lines */}
        <motion.rect
          x="24"
          y="24"
          width="432"
          height="312"
          stroke="#879B82"
          strokeWidth="0.75"
          strokeOpacity={0.4}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease, delay: 0.2 }}
        />
        <motion.line
          x1="24"
          y1="120"
          x2="456"
          y2="120"
          stroke="#879B82"
          strokeWidth="0.5"
          strokeOpacity={0.35}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.5 }}
        />
        <motion.line
          x1="160"
          y1="24"
          x2="160"
          y2="336"
          stroke="#879B82"
          strokeWidth="0.5"
          strokeOpacity={0.35}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.65 }}
        />
        <motion.line
          x1="320"
          y1="24"
          x2="320"
          y2="336"
          stroke="#879B82"
          strokeWidth="0.5"
          strokeOpacity={0.35}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.75 }}
        />

        {/* Phase 2 — Structure modules */}
        <motion.rect
          x="40"
          y="40"
          width="108"
          height="64"
          stroke="#10231D"
          strokeWidth="1"
          strokeOpacity={0.25}
          fill="#E8DED0"
          fillOpacity={0}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, fillOpacity: 0.6 }}
          transition={{ duration: 0.7, ease, delay: 1.0 }}
          style={{ transformOrigin: "94px 72px" }}
        />
        <motion.rect
          x="176"
          y="40"
          width="128"
          height="64"
          stroke="#10231D"
          strokeWidth="1"
          strokeOpacity={0.25}
          fill="#E8DED0"
          fillOpacity={0}
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1, fillOpacity: 0.6 }}
          transition={{ duration: 0.7, ease, delay: 1.15 }}
          style={{ transformOrigin: "240px 72px" }}
        />

        {/* Phase 3 — Main interface surface */}
        <motion.rect
          x="40"
          y="136"
          width="400"
          height="184"
          stroke="#10231D"
          strokeWidth="1"
          strokeOpacity={0.3}
          fill="#F5F0E8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease, delay: 1.4 }}
        />
        <motion.rect
          x="40"
          y="136"
          width="400"
          height="28"
          fill="#E8DED0"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease, delay: 1.7 }}
          style={{ transformOrigin: "40px 150px" }}
        />

        {/* UI components */}
        <motion.rect
          x="56"
          y="180"
          width="96"
          height="8"
          rx="2"
          fill="#B79B78"
          fillOpacity={0.5}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease, delay: 2.0 }}
        />
        <motion.rect
          x="56"
          y="200"
          width="72"
          height="6"
          rx="2"
          fill="#879B82"
          fillOpacity={0.35}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.15 }}
        />
        <motion.rect
          x="56"
          y="214"
          width="80"
          height="6"
          rx="2"
          fill="#879B82"
          fillOpacity={0.25}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.25 }}
        />
        <motion.rect
          x="200"
          y="180"
          width="112"
          height="80"
          rx="3"
          stroke="#10231D"
          strokeWidth="0.75"
          strokeOpacity={0.15}
          fill="#FFFFFF"
          fillOpacity={0.8}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 2.1 }}
          style={{ transformOrigin: "256px 220px" }}
        />
        <motion.rect
          x="328"
          y="180"
          width="96"
          height="80"
          rx="3"
          stroke="#10231D"
          strokeWidth="0.75"
          strokeOpacity={0.15}
          fill="#E8DED0"
          fillOpacity={0.5}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease, delay: 2.25 }}
          style={{ transformOrigin: "376px 220px" }}
        />
        <motion.rect
          x="200"
          y="276"
          width="224"
          height="28"
          rx="14"
          fill="#10231D"
          fillOpacity={0.85}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease, delay: 2.5 }}
        />
      </svg>

      <motion.p
        className="label absolute bottom-0 left-0 text-champagne"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.8 }}
      >
        Blueprint → Structure → Shape
      </motion.p>
    </div>
  );
}
