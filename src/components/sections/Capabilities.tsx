"use client";

import { useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { capabilities } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const TECH_DETAILS: Record<string, string[]> = {
  websites: ["Landing Pages", "CMS", "SEO", "Performance"],
  "web-apps": ["Dashboards", "Auth", "APIs", "React"],
  pwa: ["Offline", "Installable", "Push", "Mobile"],
  "ui-ux": ["Design Systems", "Prototyping", "Figma", "A11y"],
  ai: ["LLM APIs", "Automation", "Chat UI", "Workflows"],
};

const UI_PREVIEWS: Record<string, ReactNode> = {
  websites: (
    <div className="space-y-1.5">
      <div className="h-2 w-full rounded bg-champagne/30" />
      <div className="grid grid-cols-2 gap-1">
        <div className="aspect-[3/2] rounded bg-beige/80" />
        <div className="aspect-[3/2] rounded bg-beige/50" />
      </div>
    </div>
  ),
  "web-apps": (
    <div className="flex gap-1.5">
      <div className="w-1/3 space-y-1">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-1 rounded bg-sage/25" />
        ))}
      </div>
      <div className="flex-1 rounded bg-beige/60" />
    </div>
  ),
  pwa: (
    <div className="flex items-center justify-center rounded-lg bg-beige/50 py-3">
      <div className="h-8 w-8 rounded-xl border-2 border-champagne/40" />
    </div>
  ),
  "ui-ux": (
    <div className="space-y-1">
      <div className="flex gap-1">
        <div className="h-3 w-3 rounded-full bg-champagne/40" />
        <div className="h-3 w-8 rounded bg-beige" />
      </div>
      <div className="h-6 rounded-md border border-rule bg-ivory" />
    </div>
  ),
  ai: (
    <div className="rounded-lg bg-beige/40 p-2">
      <div className="h-1.5 w-3/4 rounded bg-sage/30" />
      <div className="mt-1.5 h-4 rounded bg-ivory" />
    </div>
  ),
};

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="border-t border-rule bg-beige/15 py-24 md:py-32"
      aria-labelledby="capabilities-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <SectionHeading
            label="Leistungen"
            title="Produktbausteine"
            description="UI-Komponenten und Systeme — kombiniert zu vollständigen digitalen Produkten."
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
  const [open, setOpen] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const details = TECH_DETAILS[capability.id] ?? [];
  const preview = UI_PREVIEWS[capability.id];

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border border-rule/80 bg-ivory"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
    >
      <div className="border-b border-rule/60 bg-beige/25 p-4">
        {preview}
      </div>

      <div className="p-5 md:p-6">
        <span className="label text-champagne">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="mt-3 text-lg font-medium text-forest">{capability.title}</h3>

        <AnimatePresence mode="wait">
          {!open ? (
            <motion.p
              key="short"
              className="mt-2 text-sm leading-relaxed text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {capability.description}
            </motion.p>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {capability.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {details.map((d) => (
                  <span
                    key={d}
                    className="rounded-full bg-beige/60 px-2.5 py-1 text-[11px] text-forest"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
