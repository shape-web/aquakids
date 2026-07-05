"use client";

import { useRef, useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

type Piece = {
  id: string;
  loose: { x: number; y: number; rotate: number; scale: number };
};

const PIECES: Piece[] = [
  { id: "nav", loose: { x: -32, y: -28, rotate: -8, scale: 0.9 } },
  { id: "text", loose: { x: 48, y: -20, rotate: 6, scale: 0.88 } },
  { id: "image", loose: { x: 36, y: 40, rotate: 5, scale: 0.9 } },
  { id: "card", loose: { x: -40, y: 44, rotate: -6, scale: 0.86 } },
  { id: "button", loose: { x: 20, y: 64, rotate: 3, scale: 0.85 } },
];

type ShapeAssemblyProps = {
  scroll?: MotionValue<number>;
};

export function ShapeAssembly({ scroll }: ShapeAssemblyProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [autoProgress, setAutoProgress] = useState(0.22);

  const fallbackScroll = useMotionValue(0);
  const activeScroll = scroll ?? fallbackScroll;
  const scrollAssembly = useTransform(activeScroll, [0, 0.45], [0, 1]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 22 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 22 });
  const parallaxX = useTransform(springX, [-1, 1], [-6, 6]);
  const parallaxY = useTransform(springY, [-1, 1], [-4, 4]);

  const [progress, setProgress] = useState(0.22);

  useEffect(() => {
    if (prefersReducedMotion) {
      setAutoProgress(1);
      setProgress(1);
      return;
    }
    const start = performance.now();
    const duration = 1600;
    let frame: number;
    const tick = (now: number) => {
      const t = 0.22 + Math.min((now - start) / duration, 1) * 0.55;
      setAutoProgress(Math.min(t, 0.77));
      if ((now - start) / duration < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const update = (scrollVal: number) => {
      setProgress(Math.max(autoProgress, scrollVal));
    };
    update(scrollAssembly.get());
    return scrollAssembly.on("change", update);
  }, [scrollAssembly, autoProgress, prefersReducedMotion]);

  useEffect(() => {
    if (!scroll && !prefersReducedMotion) {
      setProgress((p) => Math.max(p, autoProgress));
    }
  }, [autoProgress, scroll, prefersReducedMotion]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || prefersReducedMotion) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  if (prefersReducedMotion) {
    return <AssemblyEndState />;
  }

  const assemblyT = Math.min(progress / 0.48, 1);
  const productOpacity = Math.max(0, Math.min((progress - 0.32) / 0.2, 1));
  const looseOpacity = 1 - productOpacity * 0.92;

  const phaseLabel =
    productOpacity > 0.65 ? "Product" : assemblyT > 0.35 ? "Interface" : "Idea";

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full max-w-xl select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      aria-hidden="true"
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-[0.35]"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, rgba(232,222,208,0.5) 0%, transparent 70%)",
        }}
      />

      <motion.div
        className="absolute inset-[4%]"
        style={{ x: parallaxX, y: parallaxY }}
      >
        {/* Loose UI elements */}
        <div className="absolute inset-0" style={{ opacity: looseOpacity }}>
          <FloatingPiece piece={PIECES[0]} t={assemblyT} className="absolute left-[5%] top-[8%] w-[44%]">
            <div className="flex h-9 items-center gap-2 rounded-lg border border-rule/80 bg-ivory px-3 shadow-sm">
              <span className="h-1.5 w-6 rounded-full bg-champagne/50" />
              <span className="h-1.5 w-4 rounded-full bg-beige" />
              <span className="h-1.5 w-4 rounded-full bg-beige" />
            </div>
          </FloatingPiece>

          <FloatingPiece piece={PIECES[1]} t={assemblyT} className="absolute right-[6%] top-[12%] w-[34%]">
            <div className="rounded-lg border border-rule/80 bg-ivory p-3 shadow-sm">
              <div className="h-2 w-12 rounded bg-champagne/35" />
              <div className="mt-2 h-1.5 w-full rounded bg-beige" />
              <div className="mt-1.5 h-1.5 w-3/4 rounded bg-beige/80" />
            </div>
          </FloatingPiece>

          <FloatingPiece piece={PIECES[2]} t={assemblyT} className="absolute right-[8%] top-[40%] w-[38%]">
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-rule/80 bg-beige/50 shadow-sm">
              <div className="h-full w-full bg-gradient-to-br from-beige to-ivory" />
            </div>
          </FloatingPiece>

          <FloatingPiece piece={PIECES[3]} t={assemblyT} className="absolute left-[8%] top-[42%] w-[32%]">
            <div className="rounded-lg border border-rule/80 bg-ivory p-2 shadow-sm">
              <div className="aspect-square rounded-md bg-beige/60" />
            </div>
          </FloatingPiece>

          <FloatingPiece piece={PIECES[4]} t={assemblyT} className="absolute bottom-[12%] left-[30%] w-[34%]">
            <div className="h-8 rounded-full bg-forest/90 shadow-sm" />
          </FloatingPiece>
        </div>

        {/* Assembled product */}
        <motion.div
          className="absolute inset-0 flex flex-col overflow-hidden rounded-xl border border-rule/60 bg-ivory shadow-[0_32px_64px_-16px_rgba(16,35,29,0.12)]"
          style={{ opacity: productOpacity }}
        >
          <div className="flex h-9 shrink-0 items-center gap-2 border-b border-rule/80 bg-beige/40 px-4">
            <span className="h-2 w-2 rounded-full bg-sage/30" />
            <span className="h-2 w-2 rounded-full bg-sage/20" />
            <span className="h-2 w-2 rounded-full bg-champagne/40" />
            <span className="ml-1 text-[10px] text-muted">shape.app</span>
          </div>
          <div className="flex min-h-0 flex-1">
            <div className="w-[26%] border-r border-rule/60 bg-beige/25 p-3">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="mb-2 h-2 rounded-md bg-sage/15"
                  style={{ width: `${92 - i * 10}%` }}
                />
              ))}
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-4">
              <div className="h-2.5 w-20 rounded-md bg-champagne/30" />
              <div className="grid flex-1 grid-cols-2 gap-2.5">
                <div className="rounded-lg bg-beige/50" />
                <div className="rounded-lg border border-rule/50 bg-ivory" />
              </div>
              <div className="h-7 w-24 rounded-full bg-forest" />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.p
        className="label absolute -bottom-8 left-0 text-champagne"
        animate={{ opacity: 0.7 + productOpacity * 0.3 }}
      >
        {phaseLabel}
      </motion.p>
    </div>
  );
}

function FloatingPiece({
  piece,
  t,
  className,
  children,
}: {
  piece: Piece;
  t: number;
  className: string;
  children: React.ReactNode;
}) {
  const x = lerp(piece.loose.x, 0, t);
  const y = lerp(piece.loose.y, 0, t);
  const rotate = lerp(piece.loose.rotate, 0, t);
  const scale = lerp(piece.loose.scale, 1, t);

  return (
    <motion.div
      className={className}
      animate={{ x: `${x}%`, y: `${y}%`, rotate, scale }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.min(Math.max(t, 0), 1);
}

function AssemblyEndState() {
  return (
    <div className="relative aspect-[4/3] w-full max-w-xl overflow-hidden rounded-xl border border-rule/60 bg-ivory shadow-lg">
      <div className="flex h-9 items-center border-b border-rule/80 bg-beige/40 px-4">
        <span className="text-[10px] text-muted">shape.app</span>
      </div>
      <div className="grid grid-cols-2 gap-3 p-4">
        <div className="aspect-[4/3] rounded-lg bg-beige/50" />
        <div className="aspect-[4/3] rounded-lg border border-rule/50 bg-ivory" />
      </div>
    </div>
  );
}
