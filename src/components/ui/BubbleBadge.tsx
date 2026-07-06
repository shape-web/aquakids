import { cn } from "@/lib/utils";

type BubbleBadgeProps = {
  label: string;
  value: string;
  className?: string;
};

export function BubbleBadge({ label, value, className }: BubbleBadgeProps) {
  return (
    <div className={cn("bubble-badge", className)}>
      <span className="bubble-badge-label">{label}</span>
      <span className="bubble-badge-value">{value}</span>
    </div>
  );
}
