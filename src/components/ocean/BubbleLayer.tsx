"use client";

import type { CSSProperties } from "react";
import { BUBBLE_CONFIG } from "./oceanConfig";

export function BubbleLayer() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      {BUBBLE_CONFIG.map((bubble) => (
        <span
          key={bubble.id}
          className="ocean-bubble"
          style={
            {
              width: bubble.size,
              height: bubble.size,
              left: bubble.left,
              bottom: bubble.bottom,
              "--bubble-duration": `${bubble.duration}s`,
              "--bubble-delay": `${bubble.delay}s`,
              "--bubble-opacity": bubble.opacity,
              "--bubble-drift": `${bubble.drift}px`,
              "--bubble-travel": "-110vh",
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
