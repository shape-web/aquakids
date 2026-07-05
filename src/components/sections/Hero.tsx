"use client";

import { useRef } from "react";
import { motion, useScroll, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShapeAssembly } from "@/components/shape/ShapeAssembly";
import { ShapeLogoReveal } from "@/components/shape/ShapeLogoReveal";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  if (prefersReducedMotion) {
    return (
      <section
        id="hero"
        className="relative min-h-[100svh] overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24"
        aria-labelledby="hero-heading"
      >
        <HeroContent />
        <div className="relative mx-auto mt-12 max-w-6xl px-6 md:px-8">
          <ShapeAssembly />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative h-[130vh] md:h-[150vh]"
      aria-labelledby="hero-heading"
    >
      <div className="sticky top-0 flex min-h-[100svh] flex-col justify-center overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20">
        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8 lg:gap-20">
          <HeroContent />
          <ShapeAssembly scroll={scrollYProgress} />
        </div>
      </div>
    </section>
  );
}

function HeroContent() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div>
      <ShapeLogoReveal className="mb-6 h-auto w-full max-w-[min(100%,18rem)] md:mb-8 md:max-w-[20rem]" />

      <motion.h1
        id="hero-heading"
        className="display-hero text-forest"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
      >
        Digitale Räume.
        <br />
        <span className="text-champagne">Geformt aus Ideen.</span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-md text-base leading-relaxed text-muted md:mt-8 md:text-lg"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
      >
        Creative Developer für Websites, Web Apps und digitale Produkte —
        Design, Struktur und Code aus einer Hand.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
      >
        <Button href="#work">Projekte ansehen</Button>
        <Button href="#contact" variant="secondary">
          Projekt starten
        </Button>
      </motion.div>
    </div>
  );
}
