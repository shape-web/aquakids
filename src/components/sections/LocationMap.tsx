import { locationInfo } from "@/data/site";
import { Button } from "@/components/ui/Button";

export function LocationMap() {
  return (
    <div className="flex h-full min-h-[17rem] flex-col">
      <div className="relative flex-1 overflow-hidden rounded-[1.25rem] border border-white/40 bg-gradient-to-br from-pool/25 via-pool-light/60 to-white/40">
        <svg
          viewBox="0 0 400 260"
          className="h-full w-full"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="aqua-map-bg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(91,192,235,0.35)" />
              <stop offset="100%" stopColor="rgba(232,247,255,0.55)" />
            </linearGradient>
          </defs>
          <rect width="400" height="260" fill="url(#aqua-map-bg)" />
          {/* Water hint */}
          <ellipse cx="340" cy="210" rx="90" ry="40" fill="rgba(91,192,235,0.18)" />
          {/* Abstract blocks */}
          <rect x="28" y="42" width="88" height="56" rx="10" fill="rgba(255,255,255,0.35)" />
          <rect x="140" y="68" width="72" height="48" rx="8" fill="rgba(255,255,255,0.28)" />
          <rect x="250" y="36" width="96" height="64" rx="10" fill="rgba(255,255,255,0.3)" />
          <rect x="60" y="148" width="110" height="72" rx="12" fill="rgba(255,255,255,0.32)" />
          <rect x="210" y="132" width="130" height="80" rx="12" fill="rgba(255,255,255,0.26)" />
          {/* Roads */}
          <path
            d="M0 118 H400 M72 0 V260 M198 0 V260 M312 0 V260 M0 188 H400"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M0 78 C120 92 220 70 400 86"
            stroke="rgba(0,158,155,0.22)"
            strokeWidth="2"
            fill="none"
          />
          {/* Marker */}
          <g transform="translate(198, 118)">
            <ellipse cx="0" cy="22" rx="14" ry="5" fill="rgba(10,61,98,0.12)" />
            <path
              d="M0 -26 C14 -26 24 -14 24 0 C24 18 0 34 0 34 C0 34 -24 18 -24 0 C-24 -14 -14 -26 0 -26 Z"
              fill="#009e9b"
              stroke="rgba(255,255,255,0.85)"
              strokeWidth="2"
            />
            <circle cx="0" cy="-2" r="7" fill="rgba(255,255,255,0.9)" />
          </g>
        </svg>

        <div className="absolute bottom-3 left-3 rounded-lg bg-white/75 px-3 py-1.5 text-xs font-bold text-ocean-deep backdrop-blur-sm">
          {locationInfo.name}
        </div>
      </div>

      <Button
        href={locationInfo.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        variant="secondary"
        className="mt-4 w-full !py-3"
      >
        Route planen
      </Button>
    </div>
  );
}
