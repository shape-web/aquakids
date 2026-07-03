import { siteConfig, navLinks } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 md:flex-row md:px-8">
        <div className="flex items-center gap-2 text-sm text-muted">
          <span className="flex h-6 w-6 items-center justify-center rounded border border-border font-mono text-[10px] text-accent">
            SH
          </span>
          <span>
            © {year} {siteConfig.name}
          </span>
        </div>

        <nav className="flex flex-wrap justify-center gap-4" aria-label="Footer Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
