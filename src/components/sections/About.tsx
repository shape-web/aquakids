"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/ui/FadeIn";

const stack = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"];
const flow = ["Idee", "Konzept", "Design", "Entwicklung", "Launch", "Betreuung"];

export function About() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="about"
      className="border-t border-rule bg-beige/15 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-5">
            <p className="label text-champagne">Studio</p>
            <h2 id="about-heading" className="display-lg mt-4 text-forest">
              Design trifft Entwicklung.
            </h2>
            <p className="mt-4 text-sm text-sage">
              Eine Person. Ein Prozess. Ein Produkt.
            </p>
          </FadeIn>

          <FadeIn className="md:col-span-7" delay={0.08}>
            <blockquote className="display-md text-forest">
              Ich verbinde Designverständnis mit technischer Umsetzung.
            </blockquote>

            <div className="mt-6 flex flex-wrap gap-x-2 gap-y-1">
              {flow.map((step, i) => (
                <motion.span
                  key={step}
                  className="flex items-center gap-2"
                  initial={prefersReducedMotion ? {} : { opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4 }}
                >
                  <span className="text-sm text-muted">{step}</span>
                  {i < flow.length - 1 && (
                    <span className="text-champagne/60" aria-hidden="true">
                      ·
                    </span>
                  )}
                </motion.span>
              ))}
            </div>

            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Als Creative Developer gestalte und entwickle ich digitale Produkte
                end-to-end — vom ersten Interface-Entwurf bis zur produktionsreifen
                Web App.
              </p>
              <p>
                Kein Agentur-Setup, keine Übergaben. Sie arbeiten direkt mit der
                Person, die Ihr Produkt konzipiert, designt und coded.
              </p>
            </div>

            <div className="mt-10">
              <p className="label mb-3 text-champagne">Stack</p>
              <div className="flex flex-wrap gap-2">
                {stack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="rounded-full border border-rule bg-ivory px-4 py-1.5 text-sm text-forest"
                    initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.35 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
