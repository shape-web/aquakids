import { cn } from "@/lib/utils";
import type { WhyUsIcon } from "@/data/site";
import type { CSSProperties } from "react";
import { TrustIcon } from "./TrustIcon";

const BUBBLE_VARIANT_CLASS = [
  "trust-bubble--0",
  "trust-bubble--1",
  "trust-bubble--2",
  "trust-bubble--3",
  "trust-bubble--4",
  "trust-bubble--5",
] as const;

type TrustPointProps = {
  title: string;
  description: string;
  icon: WhyUsIcon;
  bubbleVariant?: number;
  floatDuration?: number;
  floatDelay?: number;
  className?: string;
};

export function TrustPoint({
  title,
  description,
  icon,
  bubbleVariant = 0,
  floatDuration = 11,
  floatDelay = 0,
  className,
}: TrustPointProps) {
  const variantClass =
    BUBBLE_VARIANT_CLASS[bubbleVariant % BUBBLE_VARIANT_CLASS.length] ??
    BUBBLE_VARIANT_CLASS[0];

  return (
    <article className={cn("trust-point", className)}>
      <div className="trust-point-inner">
        <div
          className="trust-point-icon-float"
          style={
            {
              "--trust-float-duration": `${floatDuration}s`,
              "--trust-float-delay": `${floatDelay}s`,
            } as CSSProperties
          }
        >
          <div className={cn("trust-point-icon", variantClass)} aria-hidden="true">
            <TrustIcon name={icon} />
          </div>
        </div>
        <div className="trust-point-copy">
          <h3 className="trust-point-title">{title}</h3>
          <p className="trust-point-text">{description}</p>
        </div>
      </div>
    </article>
  );
}
