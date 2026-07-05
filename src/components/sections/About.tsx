"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const techStack = ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"];

export function About() {
  return (
    <section
      id="about"
      className="border-t border-rule bg-beige/20 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-5">
            <SectionHeading
              label="Studio"
              title="Design und Entwicklung aus einer Hand."
            />
          </FadeIn>

          <FadeIn className="md:col-span-7" delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Ich plane, gestalte und entwickle digitale Produkte mit der Präzision
                eines Architekturstudios — von der ersten Skizze bis zum fertigen System.
              </p>
              <p>
                Kein Agentur-Overhead, keine unnötigen Schichten. Ein direkter
                Ansprechpartner für Konzept, Gestaltung und technische Umsetzung.
              </p>
              <p>
                Der Fokus liegt auf individuellen Weblösungen für Unternehmen,
                Selbstständige und Projekte, die einen hochwertigen digitalen Auftritt suchen.
              </p>
            </div>

            <div className="mt-12">
              <p className="label mb-4 text-champagne">Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm border border-rule bg-ivory px-4 py-2 text-sm text-forest"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
