"use client";

import { capabilities } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-y border-border-subtle bg-surface/50 py-24 md:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <SectionHeading
            label="Capabilities"
            title="Was ich umsetze"
            description="Von der ersten Idee bis zum Launch — modular, skalierbar und auf deine Anforderungen zugeschnitten."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => (
            <StaggerItem key={cap.id}>
              <div className="group h-full rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:border-accent/25 hover:bg-surface md:p-7">
                <span
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-surface-elevated text-lg text-accent transition-colors group-hover:border-accent/30"
                  aria-hidden="true"
                >
                  {cap.icon}
                </span>
                <h3 className="text-base font-semibold text-foreground md:text-lg">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {cap.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
