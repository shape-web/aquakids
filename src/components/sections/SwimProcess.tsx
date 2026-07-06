"use client";

import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function SwimProcess() {
  return (
    <section
      id="ablauf"
      className="relative z-10 px-6 py-20 md:px-8 md:py-28"
      aria-labelledby="ablauf-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            label="Ablauf"
            title="So einfach geht's"
            description="Vom ersten Kontakt bis zum Schwimmabzeichen – klar und unkompliziert."
            depth="mid"
          />
        </FadeIn>

        <StaggerContainer className="relative">
          <div
            className="absolute left-4 top-0 hidden h-full w-px bg-white/25 md:left-1/2 md:block"
            aria-hidden="true"
          />
          <div className="space-y-6 md:space-y-8">
            {processSteps.map((step, i) => (
              <StaggerItem key={step.number}>
                <div
                  className={cn(
                    "flex flex-col gap-4 md:flex-row md:items-center",
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  <div className="flex-1">
                    <BubbleCard
                      className={cn(
                        "h-full",
                        i % 2 === 0 ? "md:mr-12 md:text-right" : "md:ml-12"
                      )}
                    >
                      <span className="text-sm font-semibold uppercase tracking-[0.14em] text-accent-mid">
                        {step.number}
                      </span>
                      <h3 className="mt-1 text-xl font-bold tracking-tight text-ocean-deep">
                        {step.title}
                      </h3>
                      <p className="text-body-muted-deep mt-2 text-sm leading-relaxed md:text-[0.9375rem]">
                        {step.description}
                      </p>
                    </BubbleCard>
                  </div>
                  <div
                    className="bubble-step relative z-10 mx-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-ocean-deep"
                    aria-hidden="true"
                  >
                    {step.number.replace("0", "")}
                  </div>
                  <div className="hidden flex-1 md:block" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
