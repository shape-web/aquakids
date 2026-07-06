"use client";

import Image from "next/image";
import { teamMembers } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Team() {
  return (
    <section
      id="team"
      className="relative z-10 px-6 py-20 md:px-8 md:py-28"
      aria-labelledby="team-heading"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            label="Team"
            title="Menschen, denen Sie vertrauen können"
            description="Erfahrene Trainer mit Herz für Kinder – das ist unser Versprechen."
            depth="deep"
          />
        </FadeIn>

        <StaggerContainer className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {teamMembers.map((member) => (
            <StaggerItem key={member.name}>
              <BubbleCard className="text-center">
                <div className="bubble-avatar">
                  <div className="bubble-avatar-inner">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                      sizes="112px"
                    />
                  </div>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-tight text-ocean-deep">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm font-semibold text-on-glass-accent">
                  {member.role}
                </p>
                <p className="text-body-muted-deep mt-3 text-sm leading-relaxed md:text-[0.9375rem]">
                  {member.bio}
                </p>
              </BubbleCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
