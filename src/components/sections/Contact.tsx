"use client";

import { useEffect, useState } from "react";
import { siteConfig, courseOptions } from "@/data/site";
import { COURSE_INTEREST_EVENT } from "@/lib/courseInterest";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BubbleCard } from "@/components/ui/BubbleCard";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [course, setCourse] = useState<string>(courseOptions[0]);

  useEffect(() => {
    const handleCourseInterest = (event: Event) => {
      const value = (event as CustomEvent<string>).detail;
      if (value && courseOptions.includes(value as (typeof courseOptions)[number])) {
        setCourse(value);
      }
    };

    window.addEventListener(COURSE_INTEREST_EVENT, handleCourseInterest);
    return () =>
      window.removeEventListener(COURSE_INTEREST_EVENT, handleCourseInterest);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="kontakt"
      className="relative z-10 px-6 pb-32 pt-20 md:px-8 md:pb-40 md:pt-28"
      aria-labelledby="kontakt-heading"
    >
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <SectionHeading
            label="Kontakt"
            title="Tauchen Sie ein"
            description="Wir freuen uns auf Ihre Nachricht. Gemeinsam finden wir den passenden Kurs."
            depth="deep"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <BubbleCard>
            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-4xl" aria-hidden="true">
                  🐬
                </p>
                <p className="mt-4 text-lg font-bold tracking-tight text-ocean-deep">
                  Vielen Dank!
                </p>
                <p className="text-body-muted-deep mt-2 text-sm">
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ocean-deep">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="bubble-input"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ocean-deep">
                    E-Mail
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bubble-input"
                    placeholder="ihre@email.de"
                  />
                </div>
                <div>
                  <label htmlFor="age" className="mb-1.5 block text-sm font-medium text-ocean-deep">
                    Alter Kind
                  </label>
                  <input
                    id="age"
                    name="age"
                    type="text"
                    className="bubble-input"
                    placeholder="z.B. 4 Jahre"
                  />
                </div>
                <div>
                  <label htmlFor="course" className="mb-1.5 block text-sm font-medium text-ocean-deep">
                    Kursinteresse
                  </label>
                  <select
                    id="course"
                    name="course"
                    className="bubble-input"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                  >
                    {courseOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ocean-deep">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="bubble-input resize-none"
                    placeholder="Ihre Nachricht…"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Nachricht senden
                </Button>
                <p className="text-body-muted-deep text-center text-xs">
                  Oder direkt:{" "}
                  <a href={`mailto:${siteConfig.email}`} className="text-turquoise hover:underline">
                    {siteConfig.email}
                  </a>
                </p>
              </form>
            )}
          </BubbleCard>
        </FadeIn>
      </div>
    </section>
  );
}
