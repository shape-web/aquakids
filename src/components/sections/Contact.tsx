"use client";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-16 text-center md:px-16 md:py-20">
            {/* Background glow */}
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 100%, var(--color-accent-glow), transparent)",
              }}
            />

            <div className="relative z-10">
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                Kontakt
              </p>
              <h2
                id="contact-heading"
                className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl"
              >
                Projekt im Kopf?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-base text-muted md:text-lg">
                Lass uns darüber sprechen. Schreib mir eine Mail — ich melde
                mich zeitnah zurück.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  href={`mailto:${siteConfig.email}`}
                  variant="primary"
                  className="text-base"
                >
                  {siteConfig.email}
                </Button>
              </div>

              {/* Placeholder for future contact form */}
              <p className="mt-8 font-mono text-[11px] text-muted/60">
                Kontaktformular folgt in Kürze
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
