"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Work() {
  return (
    <section
      id="work"
      className="border-t border-rule py-24 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <h2 id="work-heading" className="sr-only">
          Ausgewählte Arbeiten
        </h2>
        <FadeIn>
          <SectionHeading
            label="Selected Projects"
            title="Ausgewählte Arbeiten"
            description="Digitale Projekte — konzipiert, gestaltet und entwickelt wie architektonische Entwürfe."
          />
        </FadeIn>

        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.08}>
              <ProjectCase project={project} reversed={index % 2 === 1} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCase({
  project,
  reversed,
}: {
  project: (typeof projects)[number];
  reversed: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <article className="group">
      <div
        className={`grid items-center gap-8 md:grid-cols-12 md:gap-12 ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        <div className={`md:col-span-5 ${reversed ? "md:[direction:ltr]" : ""}`}>
          <p className="label text-champagne">{project.number}</p>
          <h3 className="display-md mt-3 text-forest">
            {project.title}
          </h3>
          <p className="label mt-4 text-sage">{project.category}</p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-sm border border-rule bg-beige/40 px-3 py-1 text-xs text-forest"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-forest transition-colors hover:text-champagne"
          >
            Projekt ansehen
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <motion.div
          className={`relative overflow-hidden rounded-sm border border-rule bg-beige/30 md:col-span-7 ${
            reversed ? "md:[direction:ltr]" : ""
          }`}
          whileHover={prefersReducedMotion ? {} : { y: -4 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {project.previewImage && (
            <Image
              src={project.previewImage}
              alt={`Screenshot: ${project.title}`}
              width={1200}
              height={750}
              className="aspect-[16/10] w-full object-cover object-top"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
          )}
          <div
            className="pointer-events-none absolute inset-0 border border-forest/5"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </article>
  );
}
