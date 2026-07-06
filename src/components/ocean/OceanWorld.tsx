"use client";

import { useScroll } from "framer-motion";
import { GradientBackground } from "./GradientBackground";
import { BubbleLayer } from "./BubbleLayer";
import { FishLayer } from "./FishLayer";
import { DiscoveryLayer } from "./DiscoveryLayer";
import { HeroJellyfish } from "./HeroJellyfish";
import { DecorationLayer } from "./DecorationLayer";

export function OceanWorld() {
  const { scrollYProgress } = useScroll();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <GradientBackground scroll={scrollYProgress} />
      <BubbleLayer />
      <HeroJellyfish />
      <DiscoveryLayer scroll={scrollYProgress} />
      <FishLayer scroll={scrollYProgress} />
      <DecorationLayer scroll={scrollYProgress} />
    </div>
  );
}
