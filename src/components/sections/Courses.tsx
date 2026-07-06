"use client";

import type { CSSProperties } from "react";
import Image from "next/image";
import { courses } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { BubbleBadge } from "@/components/ui/BubbleBadge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

const ICON_DELAYS = [0, 1.4, 0.7, 2.1] as const;

export function Courses() {
  return (
    <section
      id="kurse"
      className="relative z-10 px-6 pb-20 pt-14 md:px-8 md:pb-28 md:pt-16"
      aria-labelledby="kurse-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            label="Kurse"
            title="Der richtige Kurs für jedes Kind"
            description="Vom ersten Wasserkontakt bis zum sicheren Schwimmer – wir begleiten jeden Schritt."
            depth="shallow"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {courses.map((course, i) => (
            <StaggerItem key={course.id}>
              <BubbleCard
                as="article"
                className="group relative flex h-full flex-col"
              >
                <div
                  className="course-icon-float pointer-events-none absolute right-6 -top-6 z-20"
                  style={
                    { "--icon-delay": `${ICON_DELAYS[i]}s` } as CSSProperties
                  }
                  aria-hidden="true"
                >
                  <Image
                    src={course.icon}
                    alt=""
                    width={64}
                    height={64}
                    className="h-14 w-14 drop-shadow-[0_6px_14px_rgba(10,61,98,0.12)] md:h-16 md:w-16"
                  />
                </div>

                <div className="relative z-10 flex flex-1 flex-col pt-2">
                  <h3 className="pr-16 text-xl font-bold tracking-tight text-ocean-deep md:text-[1.35rem]">
                    {course.title}
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {course.age && (
                      <BubbleBadge label="Alter" value={course.age} />
                    )}
                    {course.goal && (
                      <BubbleBadge label="Ziel" value={course.goal} />
                    )}
                  </div>

                  <p className="text-body-muted-deep mt-4 flex-1 text-sm leading-relaxed md:text-[0.9375rem]">
                    {course.description}
                  </p>
                </div>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="mt-12 text-center md:mt-14">
          <Button href="#kontakt">Jetzt anmelden</Button>
        </FadeIn>
      </div>
    </section>
  );
}
