import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ocean-floor/90 py-12 text-white/70">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-lg font-bold text-white">{siteConfig.name}</p>
            <p className="mt-1 text-sm">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm">Kinderschwimmschule</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-10 border-t border-white/10 pt-6 text-xs text-white/40">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </div>
    </footer>
  );
}
