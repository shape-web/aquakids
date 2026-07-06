"use client";

import { useState } from "react";
import { faqItems } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative z-10 px-6 py-20 md:px-8 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            label="FAQ"
            title="Häufige Fragen"
            description="Alles, was Eltern wissen möchten – kurz und klar beantwortet."
            depth="deep"
          />
        </FadeIn>

        <StaggerContainer className="space-y-4">
          {faqItems.map((item, i) => (
            <StaggerItem key={item.question}>
              <BubbleCard padding="none" className="overflow-hidden">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-8 md:py-6"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-semibold tracking-tight text-ocean-deep">
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      "shrink-0 text-on-glass-accent transition-transform duration-300",
                      openIndex === i && "rotate-45"
                    )}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    openIndex === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-body-muted-deep px-6 pb-5 text-sm leading-relaxed md:px-8 md:pb-6 md:text-[0.9375rem]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
