"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border-subtle bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <a
          href="#"
          className="group flex items-center gap-2 text-sm font-medium tracking-tight text-foreground"
          aria-label={`${siteConfig.name} — Startseite`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md border border-border bg-surface text-xs font-mono text-accent transition-colors group-hover:border-accent/40">
            SH
          </span>
          <span className="hidden sm:inline">{siteConfig.name}</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-accent px-5 py-2 text-sm font-medium text-background transition-all hover:bg-accent/90"
          >
            Kontakt
          </a>
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Schließen" : "Menü"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-all duration-300",
                menuOpen && "translate-y-2 rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 bg-foreground transition-all duration-300",
                menuOpen && "-translate-y-2 -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-2 bg-background/95 backdrop-blur-xl md:hidden"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-full px-6 py-3 text-lg text-muted transition-colors hover:text-foreground"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.06 }}
              className="mt-4 rounded-full bg-accent px-8 py-3 text-lg font-medium text-background"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
