"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 30);
      mouseY.set(y * 20);
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-border-subtle) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 20%, transparent 75%)",
        }}
      />

      {/* Glow orbs */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: prefersReducedMotion ? 0 : springX,
          y: prefersReducedMotion ? 0 : springY,
          background:
            "radial-gradient(circle, var(--color-accent-glow) 0%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute right-1/4 top-1/2 h-[300px] w-[300px] rounded-full opacity-40"
        style={{
          x: prefersReducedMotion ? 0 : springX,
          y: prefersReducedMotion ? 0 : springY,
          background:
            "radial-gradient(circle, #7c6fff30 0%, transparent 70%)",
        }}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Abstract shapes */}
      <motion.div
        className="absolute left-[15%] top-[20%] h-24 w-24 rounded-2xl border border-accent/20 bg-accent/5"
        style={{ rotate: 12 }}
        animate={prefersReducedMotion ? {} : { rotate: [12, 18, 12], y: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[20%] top-[30%] h-16 w-16 rounded-full border border-accent-secondary/20"
        animate={prefersReducedMotion ? {} : { y: [0, 12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute bottom-[25%] left-[30%] h-3 w-3 rounded-full bg-accent/60"
        animate={prefersReducedMotion ? {} : { opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[35%] right-[25%] h-2 w-2 rounded-full bg-accent-secondary/60"
        animate={prefersReducedMotion ? {} : { opacity: [0.3, 0.9, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
}
