import { cn } from "@/lib/utils";
import type { WhyUsIcon } from "@/data/site";
import type { CSSProperties } from "react";
import { TrustIcon } from "./TrustIcon";

type TrustPointProps = {
  title: string;
  description: string;
  icon: WhyUsIcon;
  floatDuration?: number;
  floatDelay?: number;
  className?: string;
};

export function TrustPoint({
  title,
  description,
  icon,
  floatDuration = 11,
  floatDelay = 0,
  className,
}: TrustPointProps) {
  return (
    <article className={cn("trust-point", className)}>
      <div className="trust-point-inner">
        <div
          className="trust-point-icon trust-point-icon-float"
          aria-hidden="true"
          style={
            {
              "--trust-float-duration": `${floatDuration}s`,
              "--trust-float-delay": `${floatDelay}s`,
            } as CSSProperties
          }
        >
          <TrustIcon name={icon} />
        </div>
        <div className="trust-point-copy">
          <h3 className="trust-point-title">{title}</h3>
          <p className="trust-point-text">{description}</p>
        </div>
      </div>
    </article>
  );
}
