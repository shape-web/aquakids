export const OCEAN_FISH = [
  { src: "/ocean/animals/fish-01.svg", width: 72, depth: 0.2, top: "28%", left: "8%", reverse: false, duration: 16, delay: 0 },
  { src: "/ocean/animals/fish-02.svg", width: 56, depth: 0.35, top: "38%", left: "72%", reverse: true, duration: 18, delay: 2 },
  { src: "/ocean/animals/fish-04.svg", width: 64, depth: 0.45, top: "48%", left: "15%", reverse: false, duration: 20, delay: 4 },
  { src: "/ocean/animals/fish-06.svg", width: 48, depth: 0.55, top: "55%", left: "80%", reverse: true, duration: 15, delay: 1 },
  { src: "/ocean/animals/fish-08.svg", width: 40, depth: 0.65, top: "62%", left: "45%", reverse: false, duration: 22, delay: 6 },
] as const;

export const OCEAN_JELLYFISH = [
  {
    id: "jelly-2",
    src: "/ocean/animals/jellyfish.svg",
    width: 52,
    top: "22%",
    left: "62%",
    duration: 22,
    delay: 4,
    opacity: 0.45,
  },
] as const;

export const OCEAN_OCTOPUS = [
  {
    id: "octopus-1",
    src: "/ocean/animals/octopus.svg",
    width: 72,
    bottom: "13%",
    left: "24%",
    duration: 9,
    delay: 1,
  },
] as const;

export const OCEAN_SEAWEED = [
  { src: "/ocean/plants/seaweed-01.svg", width: 80, left: "3%", delay: 0 },
  { src: "/ocean/plants/seaweed-02.svg", width: 100, left: "12%", delay: 1 },
  { src: "/ocean/plants/seaweed-03.svg", width: 70, left: "25%", delay: 0.5 },
  { src: "/ocean/plants/seaweed-04.svg", width: 90, left: "68%", delay: 1.5 },
  { src: "/ocean/plants/seaweed-05.svg", width: 110, left: "78%", delay: 0.8 },
  { src: "/ocean/plants/seaweed-06.svg", width: 75, left: "88%", delay: 2 },
] as const;

export const OCEAN_FLOOR = [
  { src: "/ocean/animals/starfish.svg", width: 56, left: "18%", bottom: "8%" },
  { src: "/ocean/animals/shell-01.svg", width: 48, left: "35%", bottom: "5%" },
  { src: "/ocean/animals/shell-02.svg", width: 44, left: "55%", bottom: "6%" },
  { src: "/ocean/animals/snail.svg", width: 40, left: "72%", bottom: "7%" },
  { src: "/ocean/animals/crab-01.svg", width: 64, left: "82%", bottom: "4%" },
] as const;

export const BUBBLE_CONFIG = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: 6 + (i % 5) * 4,
  left: `${(i * 17 + 5) % 95}%`,
  bottom: `${-10 - (i % 4) * 8}%`,
  duration: 10 + (i % 6) * 2,
  delay: i * 1.2,
  opacity: 0.25 + (i % 3) * 0.15,
  drift: (i % 2 === 0 ? 1 : -1) * (10 + (i % 4) * 8),
}));
