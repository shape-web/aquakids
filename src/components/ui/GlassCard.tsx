import type { ElementType, ReactNode } from "react";
import { BubbleCard } from "./BubbleCard";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/** @deprecated Use BubbleCard */
export function GlassCard(props: GlassCardProps) {
  return <BubbleCard {...props} />;
}
