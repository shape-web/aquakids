"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { HeroBackground } from "./HeroBackground";

const headlineWords = ["Ideen", "werden", "greifbar."];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-8">
        <div className="max-w-3xl">
          <motion.p
            className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Digital Products &amp; Web Development
          </motion.p>

          <h1
            id="hero-heading"
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                className="mr-[0.25em] inline-block last:mr-0"
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.4 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word === "greifbar." ? (
                  <span className="bg-gradient-to-r from-accent to-accent-secondary bg-clip-text text-transparent">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Websites, Landingpages und Progressive Web Apps — klar gestaltet,
            technisch sauber umgesetzt. Für Unternehmen, die online überzeugen
            wollen.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Button href="#work" variant="primary">
              Portfolio ansehen
              <span aria-hidden="true">↓</span>
            </Button>
            <Button href="#contact" variant="secondary">
              Kontakt aufnehmen
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          aria-hidden="true"
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-muted"
            animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-px bg-gradient-to-b from-accent/60 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
