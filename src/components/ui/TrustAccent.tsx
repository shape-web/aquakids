import type { WhyUsIcon } from "@/data/site";

type TrustAccentProps = {
  name: WhyUsIcon;
};

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.4,
  fill: "none",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Fish({
  x,
  y,
  scale = 1,
}: {
  x: number;
  y: number;
  scale?: number;
}) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      <path d="M0 4c2-2.6 5-2.6 7 0-2 2.6-5 2.6-7 0Z" {...stroke} />
      <path d="M7 4l2.4-1.7v3.4L7 4Z" {...stroke} />
      <circle cx="2.2" cy="3.6" r="0.5" fill="currentColor" stroke="none" />
    </g>
  );
}

export function TrustAccent({ name }: TrustAccentProps) {
  switch (name) {
    // Kleine Gruppen → kleine Fischgruppe
    case "groups":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <Fish x={1} y={2} scale={1.05} />
          <Fish x={11} y={9} scale={0.85} />
          <Fish x={3} y={15} scale={0.7} />
        </svg>
      );
    // Betreuung → Herz
    case "care":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 19.5s-6-3.8-6-8.2A3.1 3.1 0 0 1 12 9a3.1 3.1 0 0 1 6 2.3c0 4.4-6 8.2-6 8.2Z"
            {...stroke}
          />
        </svg>
      );
    // Geduld → Schildkröte
    case "patience":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4.5 15a6.8 4.4 0 0 1 13.6 0" {...stroke} />
          <path d="M4.5 15h13.6" {...stroke} />
          <path d="M8 12.5v2.4M11.3 11.7v3.2M14.6 12.5v2.4" {...stroke} />
          <circle cx="20" cy="13.2" r="1.7" {...stroke} />
          <path d="M6.5 15l-1.4 2.1M16 15l1.4 2.1" {...stroke} />
        </svg>
      );
    // Spielen → Seestern
    case "method":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M12 3.5l2.3 5 5.4.5-4.1 3.6 1.2 5.3-4.8-2.8-4.8 2.8 1.2-5.3L4.3 9l5.4-.5z"
            {...stroke}
          />
        </svg>
      );
    // Sicherheit → Rettungsring
    case "safety":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="8.4" {...stroke} />
          <circle cx="12" cy="12" r="3.5" {...stroke} />
          <path d="M12 3.6V7M12 17v3.4M3.6 12H7M17 12h3.4" {...stroke} />
        </svg>
      );
    // Transparenz → Flaschenpost
    case "transparency":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M10.4 4.5h3.2v1.9l1.1 1.6c.2.3.3.7.3 1V18a2 2 0 0 1-2 2h-2.3a2 2 0 0 1-2-2V9c0-.3.1-.7.3-1l1.1-1.6V4.5Z"
            {...stroke}
          />
          <path d="M10 4.5h4" {...stroke} />
          <path d="M9.6 12.4h4.8M10.4 14.8h3.2" {...stroke} />
        </svg>
      );
  }
}
