import { cn } from "@/lib/utils";

export type SectionDepth = "surface" | "shallow" | "mid" | "deep";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  depth?: SectionDepth;
};

const labelClass: Record<SectionDepth, string> = {
  surface: "section-label-surface",
  shallow: "section-label-shallow",
  mid: "section-label-mid",
  deep: "section-label-deep",
};

const titleClass: Record<SectionDepth, string> = {
  surface: "text-ocean-deep",
  shallow: "text-ocean-deep",
  mid: "text-ocean-deep",
  deep: "text-headline-deep",
};

const descriptionClass: Record<SectionDepth, string> = {
  surface: "text-body-surface",
  shallow: "text-body-shallow",
  mid: "text-body-mid",
  deep: "text-body-deep-water",
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  depth = "surface",
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-10 md:mb-14", className)}>
      {label && (
        <p className={cn("section-label mb-3", labelClass[depth])}>{label}</p>
      )}
      <h2 className={cn("display-lg", titleClass[depth])}>{title}</h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-relaxed md:text-lg",
            descriptionClass[depth]
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
