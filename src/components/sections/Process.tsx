"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { processSteps } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const planOpacity = useTransform(scrollYProgress, [0, 0.3], [0.3, 1]);
  const lineScale = useTransform(scrollYProgress, [0.1, 0.7], [0, 1]);

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
            title="Vom Konzeptplan zum Produkt"
            description="Idee, Struktur, Design, Entwicklung — ein durchgängiger Planungsprozess."
          />
        </FadeIn>

        <div className="relative">
          <motion.div
            className="arch-grid pointer-events-none absolute inset-0 rounded-sm border border-rule opacity-50"
            style={{ opacity: prefersReducedMotion ? 0.5 : planOpacity }}
            aria-hidden="true"
          />

          <motion.div
            className="absolute left-6 top-0 hidden h-full w-px origin-top bg-champagne/40 md:left-8 md:block"
            style={{ scaleY: prefersReducedMotion ? 1 : lineScale }}
            aria-hidden="true"
          />

          <ol className="relative space-y-0">
            {processSteps.map((step, i) => (
              <ProcessStepRow key={step.id} step={step} index={i} />
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
}: {
  step: (typeof processSteps)[number];
  index: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.li
      className="grid gap-4 border-b border-rule py-8 md:grid-cols-12 md:gap-8 md:py-10"
      initial={prefersReducedMotion ? {} : { opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex items-baseline gap-4 md:col-span-3">
        <span className="label text-champagne">{step.number}</span>
        <span className="hidden h-px flex-1 bg-rule md:block" aria-hidden="true" />
      </div>
      <div className="md:col-span-4">
        <h3 className="text-lg font-medium text-forest md:text-xl">{step.title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-muted md:col-span-5 md:text-base">
        {step.description}
      </p>
    </motion.li>
  );
}
