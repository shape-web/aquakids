"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { courses } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { BubbleBadge } from "@/components/ui/BubbleBadge";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const COURSE_ALIGN = ["left", "right", "left", "right"] as const;

function CourseReveal({ children }: { children: ReactNode }) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <>{children}</>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Courses() {
  return (
    <section
      id="kurse"
      className="relative z-10 px-6 pb-24 pt-16 md:px-8 md:pb-32 md:pt-20"
      aria-labelledby="kurse-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn duration={0.9}>
          <SectionHeading
            label="Kurse"
            title="Der richtige Kurs für jedes Kind"
            description="Vom ersten Wasserkontakt bis zum sicheren Schwimmer – wir begleiten jeden Schritt."
            depth="shallow"
          />
        </FadeIn>

        <div className="courses-dive-stack mt-8 md:mt-10" aria-label="Unsere Kurse">
          {courses.map((course, index) => {
            const align = COURSE_ALIGN[index] ?? "left";

            return (
              <CourseReveal key={course.id}>
                <div
                  className={cn(
                    "courses-dive-row",
                    align === "left"
                      ? "courses-dive-row--left"
                      : "courses-dive-row--right"
                  )}
                >
                  <BubbleCard as="article" className="course-station-card">
                    <h3 className="course-station-title">{course.title}</h3>

                    <div className="course-station-badges">
                      {course.age && (
                        <BubbleBadge label="Alter" value={course.age} />
                      )}
                      {course.goal && (
                        <BubbleBadge label="Ziel" value={course.goal} />
                      )}
                    </div>

                    <p className="course-station-text">{course.description}</p>
                  </BubbleCard>
                </div>
              </CourseReveal>
            );
          })}
        </div>

        <FadeIn className="mt-14 text-center md:mt-16">
          <Button href="#kontakt">Jetzt anmelden</Button>
        </FadeIn>
      </div>
    </section>
  );
}
