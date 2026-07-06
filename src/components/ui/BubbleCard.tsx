import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BubbleCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  padding?: "default" | "none";
};

export function BubbleCard({
  children,
  className,
  as: Tag = "div",
  padding = "default",
}: BubbleCardProps) {
  return (
    <Tag
      className={cn(
        "bubble-card",
        padding === "none" && "bubble-card--no-padding",
        className
      )}
    >
      {children}
    </Tag>
  );
}
