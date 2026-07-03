import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function About() {
  return (
    <section
      id="about"
      className="border-y border-border-subtle bg-surface/50 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn direction="left">
            <SectionHeading
              label="About"
              title="Sebastian Happe"
              className="mb-0"
            />
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
              <p>
                Ich entwickle digitale Produkte mit Fokus auf klare Gestaltung,
                technische Qualität und saubere Struktur. Mein Ansatz verbindet
                Design-Verständnis mit solider Frontend-Umsetzung — ohne
                unnötige Komplexität.
              </p>
              <p>
                Besonders kleine Unternehmen und Gründer schätze ich als
                Kunden: Menschen, die wissen, was sie brauchen, aber keine
                große Agentur-Infrastruktur wollen. Direkte Kommunikation,
                transparente Prozesse und Ergebnisse, die für sich sprechen.
              </p>
              <p>
                Diese Website ist selbst ein Beispiel für meinen Arbeitsansatz —
                performant, durchdacht und ohne überflüssigen Ballast.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-background px-4 py-1.5 font-mono text-xs text-muted"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
