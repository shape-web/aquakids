import Image from "next/image";
import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-ivory py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center md:px-8">
        <div className="flex flex-col gap-3">
          <Image
            src="/shape_logo_primary.svg"
            alt="shape — Digitale Architektur"
            width={100}
            height={38}
            className="h-6 w-auto opacity-80"
          />
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. Digitale Architektur.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
