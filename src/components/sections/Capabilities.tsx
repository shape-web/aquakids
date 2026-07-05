"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { capabilities } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-rule bg-beige/20 py-24 md:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <SectionHeading
            label="Leistungen"
            title="Bausteine digitaler Systeme"
            description="Jedes Modul ist ein präzise konstruiertes Bauteil — kombinierbar zu vollständigen digitalen Produkten."
          />
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, i) => (
            <ModuleBlock key={cap.id} capability={cap} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ModuleBlock({
  capability,
  index,
}: {
  capability: (typeof capabilities)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      className="relative border border-rule bg-ivory p-6 md:p-8"
      style={prefersReducedMotion ? {} : { y, opacity }}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="label text-champagne">
        {String(index + 1).padStart(2, "0")}
      </span>
      <h3 className="mt-4 text-lg font-medium text-forest md:text-xl">
        {capability.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
        {capability.description}
      </p>
      <div
        className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full"
        aria-hidden="true"
      />
    </motion.div>
  );
}
