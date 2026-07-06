"use client";

import { locationInfo } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { BubbleBadge } from "@/components/ui/BubbleBadge";
import { FadeIn } from "@/components/ui/FadeIn";

export function Location() {
  const details = [
    { label: "Schwimmbad", value: locationInfo.name },
    { label: "Adresse", value: locationInfo.address },
    { label: "Parken", value: locationInfo.parking },
    { label: "Treffpunkt", value: locationInfo.meeting },
    { label: "Kurszeiten", value: locationInfo.hours },
  ];

  return (
    <section
      id="standort"
      className="relative z-10 px-6 py-20 md:px-8 md:py-28"
      aria-labelledby="standort-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            label="Standort"
            title="Hier finden Sie uns"
            description="Zentral in Kiel gelegen, gut erreichbar – mit allem, was Familien brauchen."
            depth="deep"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <BubbleCard className="max-w-2xl">
            <div className="flex flex-wrap gap-3">
              {details.map((item) => (
                <BubbleBadge
                  key={item.label}
                  label={item.label}
                  value={item.value}
                  className="min-w-[9rem] flex-1"
                />
              ))}
            </div>
          </BubbleCard>
        </FadeIn>
      </div>
    </section>
  );
}
