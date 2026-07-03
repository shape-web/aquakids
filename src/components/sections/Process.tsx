"use client";

import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Process() {
  return (
    <section
      id="process"
      className="py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <SectionHeading
            label="Process"
            title="So arbeite ich"
            description="Ein klarer, transparenter Ablauf — von der ersten Idee bis zum erfolgreichen Launch."
          />
        </FadeIn>

        <StaggerContainer className="relative">
          {/* Timeline line */}
          <div
            className="absolute left-[19px] top-0 hidden h-full w-px bg-gradient-to-b from-accent/40 via-border to-transparent md:left-1/2 md:block md:-translate-x-px"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8 md:gap-12">
            {processSteps.map((step, index) => (
              <StaggerItem key={step.id}>
                <div
                  className={`relative flex flex-col gap-4 md:flex-row md:items-center md:gap-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Center dot */}
                  <div
                    className="absolute left-0 top-1 hidden h-10 w-10 items-center justify-center md:left-1/2 md:flex md:-translate-x-1/2"
                    aria-hidden="true"
                  >
                    <div className="h-3 w-3 rounded-full border-2 border-accent bg-background shadow-[0_0_12px_var(--color-accent-glow)]" />
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div className="rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/20 md:p-7">
                      <span className="font-mono text-xs text-accent">
                        {step.number}
                      </span>
                      <h3 className="mt-2 text-lg font-semibold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Mobile number */}
                  <div
                    className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface font-mono text-xs text-accent md:hidden"
                    aria-hidden="true"
                  >
                    {step.number}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
