"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        scrolled && "px-3 pt-2 md:px-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between transition-all duration-400",
          scrolled
            ? "header-glass rounded-xl px-4 py-2.5 md:px-6"
            : "px-5 py-3 md:px-8"
        )}
      >
        <a
          href="#"
          className="flex items-baseline gap-2"
          aria-label={`${siteConfig.name} — Startseite`}
        >
          <span className="text-base font-bold tracking-tight text-ocean-deep md:text-[1.05rem]">
            {siteConfig.name}
          </span>
          <span className="hidden text-[0.65rem] font-semibold uppercase tracking-widest text-turquoise sm:inline">
            {siteConfig.tagline}
          </span>
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-1.5 text-[0.8125rem] font-medium text-ocean-deep/75 transition-colors hover:bg-white/40 hover:text-ocean-deep"
            >
              {link.label}
            </a>
          ))}
          <Button href="#kontakt" className="ml-2 !px-4 !py-2 !text-xs">
            Anmelden
          </Button>
        </nav>

        <button
          className={cn(
            "flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-lg lg:hidden",
            scrolled && "bg-white/30"
          )}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span
            className={cn(
              "block h-0.5 w-4 rounded-full bg-ocean-deep transition-all",
              menuOpen && "translate-y-[4.5px] rotate-45"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-4 rounded-full bg-ocean-deep transition-all",
              menuOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block h-0.5 w-4 rounded-full bg-ocean-deep transition-all",
              menuOpen && "-translate-y-[4.5px] -rotate-45"
            )}
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="header-glass mx-3 mt-2 rounded-xl px-3 py-3 lg:hidden"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-ocean-deep"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="#kontakt" className="mt-2 w-full !py-2.5 !text-sm">
              Anmelden
            </Button>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
