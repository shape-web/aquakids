"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { whyUsItems } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TrustPoint } from "@/components/ui/TrustPoint";
import { FadeIn } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

const FLOAT_MOTION = [
  { floatDuration: 11, floatDelay: 0 },
  { floatDuration: 12.5, floatDelay: 1.2 },
  { floatDuration: 10.5, floatDelay: 0.5 },
  { floatDuration: 12, floatDelay: 1.8 },
  { floatDuration: 11.5, floatDelay: 0.9 },
  { floatDuration: 13, floatDelay: 2.1 },
] as const;

const STORY_ALIGN = ["left", "right", "left", "right", "left", "right"] as const;

const STORY_DECO = [
  { src: "/ocean/animals/dolphin.svg", width: 88, className: "trust-story-deco--dolphin" },
  { src: "/ocean/animals/fish-06.svg", width: 56, className: "trust-story-deco--fish" },
  { src: "/ocean/animals/octopus.svg", width: 52, className: "trust-story-deco--octopus" },
  { src: "/ocean/animals/fish-04.svg", width: 52, className: "trust-story-deco--fish-b" },
  { src: "/ocean/animals/dolphin.svg", width: 72, className: "trust-story-deco--dolphin-b" },
  null,
] as const;

function TrustReveal({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function WhyUs() {
  return (
    <section
      id="warum-wir"
      className="relative z-10 px-6 py-24 md:px-8 md:py-32 lg:py-36"
      aria-labelledby="warum-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn duration={0.9}>
          <SectionHeading
            label="Warum wir"
            title="Warum vertrauen Eltern AquaKids?"
            description="Weil jedes Kind im eigenen Tempo wachsen darf – mit Menschen, die zuhören, Geduld haben und Sicherheit geben."
            depth="mid"
          />
        </FadeIn>

        <div
          className="trust-story-stack mt-6 md:mt-8"
          aria-label="Unsere Vertrauensversprechen"
        >
          {whyUsItems.map((item, index) => {
            const motion = FLOAT_MOTION[index];
            const align = STORY_ALIGN[index] ?? "left";
            const deco = STORY_DECO[index];

            return (
              <div
                key={item.title}
                className={cn(
                  "trust-story-segment",
                  align === "left"
                    ? "trust-story-segment--left"
                    : "trust-story-segment--right"
                )}
              >
                {deco && (
                  <div className={cn("trust-story-deco hidden md:block", deco.className)} aria-hidden="true">
                    <Image
                      src={deco.src}
                      alt=""
                      width={deco.width}
                      height={deco.width}
                      className="trust-story-deco-img h-auto"
                    />
                  </div>
                )}

                <TrustReveal>
                  <div
                    className={cn(
                      "trust-story-row",
                      align === "left"
                        ? "trust-story-row--left"
                        : "trust-story-row--right"
                    )}
                  >
                    <TrustPoint
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      floatDuration={motion?.floatDuration ?? 11}
                      floatDelay={motion?.floatDelay ?? 0}
                    />
                  </div>
                </TrustReveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
