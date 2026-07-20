"use client";

import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { HeroSurface } from "@/components/ocean/HeroSurface";
import { PoolInfoBuoy } from "@/components/ui/PoolInfoBuoy";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 flex min-h-[100svh] flex-col justify-center overflow-hidden px-6 pb-10 pt-24 md:px-8 md:pb-12 md:pt-28"
      aria-labelledby="hero-heading"
    >
      <HeroSurface />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="hero-pool-info" aria-label="Aktuelle Pool-Infos">
          <FadeIn delay={0.35}>
            <PoolInfoBuoy />
          </FadeIn>
        </div>

        <div className="max-w-xl text-left lg:max-w-2xl">
          <FadeIn>
            <h1
              id="hero-heading"
              className="display-brand text-ocean-deep"
            >
              {siteConfig.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="display-hero mt-4 text-ocean-deep md:mt-5">
              Dein Kind. Sicher im Wasser.{" "}
              <span className="text-accent-surface">Mit richtig viel Spaß.</span>
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mt-5 max-w-[28rem] text-lg leading-relaxed text-ocean-deep/85 md:mt-6 md:text-xl">
              Spielerische Schwimmkurse in kleinen Gruppen — mit Geduld und
              Sicherheit.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-9 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <Button href="#kurse">Kurs finden</Button>
              <Button href="#warum-wir" variant="ghost" className="!px-4 !py-2.5 text-sm">
                Mehr erfahren
              </Button>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
