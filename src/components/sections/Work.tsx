"use client";

import { motion, useReducedMotion } from "framer-motion";
import { projects } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

export function Work() {
  return (
    <section
      id="work"
      className="py-24 md:py-32"
      aria-labelledby="work-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <SectionHeading
            label="Selected Work"
            title="Projekte & Designstudien"
            description="Eine Auswahl an Umsetzungen und Konzepten — von funktionalen Web-Apps bis zu visuellen Designstudien."
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-colors duration-300 hover:border-accent/30 md:p-8"
      whileHover={prefersReducedMotion ? {} : { y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Accent line */}
      <div
        className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-muted">
            {project.category}
          </p>
          <h3 className="mt-1 text-xl font-semibold text-foreground md:text-2xl">
            {project.title}
          </h3>
        </div>
        {project.isDesignStudy && (
          <span className="shrink-0 rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-muted">
            Designstudie
          </span>
        )}
      </div>

      <p className="mb-6 flex-1 text-sm leading-relaxed text-muted md:text-base">
        {project.description}
      </p>

      <div className="mb-6 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border-subtle bg-background px-3 py-1 font-mono text-[11px] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <a
        href={project.url}
        className={cn(
          "inline-flex items-center gap-2 text-sm font-medium transition-colors",
          project.isDesignStudy
            ? "text-muted cursor-default pointer-events-none"
            : "text-accent hover:text-accent/80"
        )}
        aria-label={
          project.isDesignStudy
            ? `${project.title} — Designstudie, kein Live-Link`
            : `${project.title} live ansehen`
        }
        tabIndex={project.isDesignStudy ? -1 : undefined}
      >
        {project.isDesignStudy ? "Konzept — kein Live-Link" : "Live ansehen"}
        {!project.isDesignStudy && (
          <span
            className="transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          >
            →
          </span>
        )}
      </a>
    </motion.article>
  );
}
