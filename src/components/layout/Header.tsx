"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "border-b border-rule bg-ivory/95" : "bg-ivory/60"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-8">
        <a href="#" className="block shrink-0" aria-label="shape — Startseite">
          <Image
            src="/shape_logo_primary.svg"
            alt="shape — Digitale Architektur"
            width={120}
            height={45}
            className="h-7 w-auto md:h-8"
            priority
          />
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Hauptnavigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-sm px-4 py-2 text-sm text-muted transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-3 rounded-sm bg-forest px-5 py-2 text-sm font-medium text-ivory transition-colors hover:bg-forest-dark"
          >
            Kontakt
          </a>
        </nav>

        <button
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-sm border border-rule md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={menuOpen}
        >
          <span className="sr-only">{menuOpen ? "Schließen" : "Menü"}</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-px w-5 bg-forest transition-all duration-300",
                menuOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-forest transition-all duration-300",
                menuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px w-5 bg-forest transition-all duration-300",
                menuOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-1 bg-ivory md:hidden"
            aria-label="Mobile Navigation"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-3 text-lg text-muted transition-colors hover:text-forest"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="mt-4 rounded-sm bg-forest px-8 py-3 text-lg font-medium text-ivory"
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
