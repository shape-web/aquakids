"use client";

import type { CSSProperties } from "react";

const STREAM_BUBBLES = [
  { size: 6, offsetX: -6, top: "6%", delay: 0, duration: 16 },
  { size: 9, offsetX: 8, top: "18%", delay: 2.4, duration: 19 },
  { size: 5, offsetX: -10, top: "32%", delay: 1.1, duration: 14 },
  { size: 11, offsetX: 5, top: "46%", delay: 3.8, duration: 21 },
  { size: 7, offsetX: -4, top: "58%", delay: 0.6, duration: 17 },
  { size: 8, offsetX: 10, top: "72%", delay: 2.9, duration: 18 },
  { size: 6, offsetX: -8, top: "84%", delay: 4.2, duration: 15 },
  { size: 10, offsetX: 3, top: "94%", delay: 1.7, duration: 20 },
] as const;

export function CourseWaterStream() {
  return (
    <div className="course-water-stream" aria-hidden="true">
      <svg
        className="course-water-stream-path"
        viewBox="0 0 120 1000"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="course-current-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="12%" stopColor="rgba(214, 247, 255, 0.55)" />
            <stop offset="88%" stopColor="rgba(214, 247, 255, 0.55)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </linearGradient>
          <filter id="course-current-glow" x="-50%" y="-5%" width="200%" height="110%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>
        <path
          d="M60 0 C78 140 38 260 62 400 S42 620 58 760 S76 900 60 1000"
          fill="none"
          stroke="url(#course-current-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          opacity="0.14"
          filter="url(#course-current-glow)"
        />
        <path
          d="M60 0 C72 180 48 320 60 460 S50 680 60 820 S68 940 60 1000"
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.12"
        />
      </svg>

      {STREAM_BUBBLES.map((bubble, index) => (
        <span
          key={index}
          className="course-stream-bubble"
          style={
            {
              top: bubble.top,
              width: bubble.size,
              height: bubble.size,
              "--stream-offset-x": `${bubble.offsetX}px`,
              "--stream-bubble-delay": `${bubble.delay}s`,
              "--stream-bubble-duration": `${bubble.duration}s`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
