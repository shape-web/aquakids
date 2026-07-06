"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { PoolInfoBuoy } from "@/components/ui/PoolInfoBuoy";

export function Aktuelles() {
  return (
    <section
      id="aktuelles"
      className="relative z-10 px-6 py-10 md:px-8 md:py-14"
      aria-label="Aktuelles"
    >
      <div className="mx-auto flex max-w-6xl justify-center">
        <FadeIn>
          <PoolInfoBuoy />
        </FadeIn>
      </div>
    </section>
  );
}
