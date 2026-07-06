"use client";

import { whyUsItems } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function WhyUs() {
  return (
    <section
      id="warum-wir"
      className="relative z-10 px-6 py-20 md:px-8 md:py-28"
      aria-labelledby="warum-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            label="Warum wir"
            title="Vertrauen, das man spürt"
            description="Eltern vertrauen uns ihre Kinder an – das nehmen wir sehr ernst."
            depth="mid"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {whyUsItems.map((item) => (
            <StaggerItem key={item.title}>
              <BubbleCard className="h-full">
                <h3 className="text-lg font-bold tracking-tight text-ocean-deep md:text-xl">
                  {item.title}
                </h3>
                <p className="text-body-muted-deep mt-3 text-sm leading-relaxed md:text-[0.9375rem]">
                  {item.description}
                </p>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
