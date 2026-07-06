"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ShapeLogoIntro } from "@/components/shape/ShapeLogoIntro";
import {
  SHAPE_LOGO_INTRO_EASE,
  SHAPE_LOGO_INTRO_TIMING,
} from "@/components/shape/shapeLogoIntroTiming";
import { useMounted } from "@/lib/useMounted";

const LOGO_CLASS =
  "block aspect-[600/182] h-auto w-full max-w-[min(100%,30rem)] lg:max-w-[36rem]";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const mounted = useMounted();
  const playIntro = mounted && !Boolean(prefersReducedMotion);

  return (
    <section
      id="hero"
      className="relative flex min-h-[92svh] flex-col justify-center overflow-hidden pt-24 pb-10 md:pt-28 md:pb-14"
      aria-labelledby="hero-heading"
    >
      <div className="relative mx-auto mt-8 grid w-full max-w-6xl items-center gap-12 px-6 md:mt-10 md:grid-cols-2 md:gap-16 md:px-8 lg:gap-20">
        <HeroContent key={playIntro ? "intro" : "static"} playIntro={playIntro} />

        <div className="flex w-full items-center justify-center md:justify-end">
          <div className="-translate-y-10 md:-translate-y-[50px] md:translate-x-10">
            <ShapeLogoIntro playIntro={playIntro} className={LOGO_CLASS} />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroContent({ playIntro }: { playIntro: boolean }) {
  const { CONTENT_DELAY, CONTENT_STAGGER } = SHAPE_LOGO_INTRO_TIMING;

  const fadeUp = (delay: number) =>
    playIntro
      ? {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay, duration: 0.7, ease: SHAPE_LOGO_INTRO_EASE },
        }
      : {
          initial: false as const,
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0 },
        };

  return (
    <div>
      <motion.p className="label text-champagne" {...fadeUp(CONTENT_DELAY)}>
        Studio
      </motion.p>

      <div className="mt-4 md:mt-6">
        <motion.h1
          id="hero-heading"
          className="display-hero text-forest"
          {...fadeUp(CONTENT_DELAY + CONTENT_STAGGER)}
        >
          Digitale Räume.
          <br />
          <span className="text-champagne">Geformt aus Ideen.</span>
        </motion.h1>
      </div>

      <motion.p
        className="mt-6 max-w-md text-base leading-relaxed text-muted md:mt-8 md:text-lg"
        {...fadeUp(CONTENT_DELAY + CONTENT_STAGGER * 2)}
      >
        Creative Developer für Websites, Web Apps und digitale Produkte —
        Design, Struktur und Code aus einer Hand.
      </motion.p>

      <motion.div
        className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
        {...fadeUp(CONTENT_DELAY + CONTENT_STAGGER * 3)}
      >
        <Button href="#work">Projekte ansehen</Button>
        <Button href="#contact" variant="secondary">
          Projekt starten
        </Button>
      </motion.div>
    </div>
  );
}
