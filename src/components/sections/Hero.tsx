"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroSurface } from "@/components/ocean/HeroSurface";
import { trustPoints } from "@/data/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-16 pt-24 md:px-8 md:pb-20 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <HeroSurface />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-xl lg:max-w-2xl">
          <FadeIn>
            <p className="section-label section-label-surface">Kinderschwimmschule</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 id="hero-heading" className="display-hero mt-3 text-ocean-deep">
              Schwimmen lernen mit{" "}
              <span className="text-accent-surface">Freude</span> und Sicherheit
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 text-lg leading-relaxed text-ocean-deep/85 md:text-xl">
              Spielerische Schwimmkurse für Kinder – mit Geduld, Erfahrung und
              ganz viel Spaß am Wasser.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="mt-7 grid gap-2.5 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li key={point} className="trust-pill">
                  <span className="trust-pill-check" aria-hidden="true">
                    ✓
                  </span>
                  <span className="trust-pill-text">{point}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#kurse">Kurs finden</Button>
              <Button href="#warum-wir" variant="secondary">
                Mehr erfahren
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
