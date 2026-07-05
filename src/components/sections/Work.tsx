"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
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
            description="Digitale Produkte — konzipiert, gestaltet und entwickelt."
          />
        </FadeIn>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCase key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCase({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [20, -6]);

  return (
    <motion.article
      ref={ref}
      className="group"
      initial={prefersReducedMotion ? {} : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay: index * 0.04, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="label text-champagne">{project.number}</span>
          <h3 className="display-md mt-2 text-forest">{project.title}</h3>
          <p className="mt-2 text-sm text-sage">{project.category}</p>
        </div>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-muted transition-colors hover:text-champagne"
        >
          Live ansehen ↗
        </a>
      </div>

      <motion.div
        className="relative overflow-hidden rounded-xl bg-beige/30 p-2 shadow-[0_24px_48px_-20px_rgba(16,35,29,0.15)] md:p-3"
        style={{ y: prefersReducedMotion ? 0 : imageY }}
        whileHover={prefersReducedMotion ? {} : { y: -4 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="overflow-hidden rounded-lg bg-ivory">
          {project.previewImage && (
            <Image
              src={project.previewImage}
              alt={`${project.title} — Projektvorschau`}
              width={1400}
              height={875}
              className="aspect-[16/10] w-full object-cover object-top"
              sizes="(max-width: 768px) 100vw, 1152px"
            />
          )}
        </div>
      </motion.div>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-rule bg-ivory px-3 py-1 text-xs text-forest"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
