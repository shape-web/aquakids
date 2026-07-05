"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  const lineProgress = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="border-t border-rule py-24 md:py-32"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <SectionHeading
            label="Prozess"
            title="Vom ersten Entwurf zum Launch"
            description="Idee → Konzept → Design → Entwicklung → Launch → Betreuung"
          />
        </FadeIn>

        <div className="relative">
          <div className="absolute bottom-0 left-4 top-0 hidden w-px md:left-5 md:block" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-top bg-gradient-to-b from-champagne/60 via-champagne/30 to-transparent"
              style={{ scaleY: prefersReducedMotion ? 1 : lineProgress }}
            />
          </div>

          <ol className="relative space-y-0">
            {processSteps.map((step, i) => (
              <ProcessStepRow
                key={step.id}
                step={step}
                index={i}
                total={processSteps.length}
                lineProgress={lineProgress}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function ProcessStepRow({
  step,
  index,
  total,
  lineProgress,
}: {
  step: (typeof processSteps)[number];
  index: number;
  total: number;
  lineProgress: MotionValue<number>;
}) {
  const prefersReducedMotion = useReducedMotion();
  const threshold = (index + 0.4) / total;

  const stepOpacity = useTransform(lineProgress, (v) =>
    prefersReducedMotion ? 1 : v >= threshold - 0.06 ? 1 : 0.25
  );

  return (
    <motion.li
      className="grid gap-4 border-b border-rule/80 py-8 md:grid-cols-12 md:gap-8 md:py-10"
      style={{ opacity: stepOpacity }}
    >
      <div className="flex items-center gap-4 md:col-span-2 md:pl-2">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-beige/60 text-xs font-medium text-champagne">
          {step.number}
        </span>
      </div>
      <div className="md:col-span-4">
        <h3 className="text-lg font-medium text-forest md:text-xl">{step.title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted md:col-span-6 md:text-base">
        {step.description}
      </p>
    </motion.li>
  );
}
