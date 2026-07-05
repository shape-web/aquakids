"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShapeLogoIntro } from "@/components/shape/ShapeLogoIntro";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] overflow-hidden pt-24 pb-16 md:pt-28 md:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-8 lg:gap-20">
        <HeroContent prefersReducedMotion={Boolean(prefersReducedMotion)} />

        <div className="flex items-center justify-center md:justify-end">
          <ShapeLogoIntro className="h-auto w-full max-w-[min(100%,20rem)] lg:max-w-[24rem]" />
        </div>
      </div>
    </section>
  );
}

function HeroContent({ prefersReducedMotion }: { prefersReducedMotion: boolean }) {
  return (
    <div>
      <motion.h1
        id="hero-heading"
        className="display-hero text-forest"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.05, ease: EASE }}
      >
        Digitale Räume.
        <br />
        <span className="text-champagne">Geformt aus Ideen.</span>
      </motion.h1>

      <motion.p
        className="mt-6 max-w-md text-base leading-relaxed text-muted md:mt-8 md:text-lg"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.25, ease: EASE }}
      >
        Creative Developer für Websites, Web Apps und digitale Produkte —
        Design, Struktur und Code aus einer Hand.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.45, ease: EASE }}
      >
        <Button href="#work">Projekte ansehen</Button>
        <Button href="#contact" variant="secondary">
          Projekt starten
        </Button>
      </motion.div>
    </div>
  );
}
