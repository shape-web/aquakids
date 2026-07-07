"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroSurface } from "@/components/ocean/HeroSurface";
import { trustPoints } from "@/data/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-10 pt-24 md:px-8 md:pb-12 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <HeroSurface />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="max-w-xl text-left lg:max-w-2xl">
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
            <p className="mt-5 max-w-[34rem] text-lg leading-relaxed text-ocean-deep/85 md:text-xl">
              Spielerische Schwimmkurse für Kinder – mit Geduld, Erfahrung und
              ganz viel Spaß am Wasser.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <ul className="hero-trust-list mt-7">
              {trustPoints.map((point, index) => (
                <li key={point.title} className="hero-trust-item">
                  <span
                    className={`hero-trust-bubble hero-trust-bubble--${index}`}
                    aria-hidden="true"
                  >
                    <span className="hero-trust-bubble-float">
                      <span className="hero-trust-check">✓</span>
                    </span>
                  </span>
                  <span className="hero-trust-copy">
                    <span className="hero-trust-title">{point.title}</span>
                    <span className="hero-trust-detail">{point.description}</span>
                  </span>
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
