"use client";

import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <section
      id="contact"
      className="bg-forest-dark py-24 md:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <FadeIn>
          <p className="label text-champagne">Kontakt</p>
          <h2
            id="contact-heading"
            className="display-lg mt-4 max-w-2xl text-ivory"
          >
            Der nächste Entwurf beginnt hier.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/60 md:text-lg">
            Aus Konzept wird Struktur. Erzählen Sie mir von Ihrem Projekt —
            ich melde mich persönlich.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button
              href={`mailto:${siteConfig.email}`}
              className="bg-champagne text-forest-dark hover:bg-champagne/90"
            >
              {siteConfig.email}
            </Button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-ivory/50 transition-colors hover:text-champagne"
            >
              Oder direkt schreiben →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
