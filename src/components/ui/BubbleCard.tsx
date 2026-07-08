import type { ElementType, HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type BubbleCardProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  padding?: "default" | "none";
} & Omit<HTMLAttributes<HTMLElement>, "className">;

export function BubbleCard({
  children,
  className,
  as: Tag = "div",
  padding = "default",
  ...rest
}: BubbleCardProps) {
  return (
    <Tag
      className={cn(
        "bubble-card",
        padding === "none" && "bubble-card--no-padding",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
