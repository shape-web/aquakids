import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  dark?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12 md:mb-16", className)}>
      {label && (
        <p
          className={cn(
            "label mb-4",
            dark ? "text-champagne" : "text-champagne"
          )}
        >
          {label}
        </p>
      )}
      <h2
        className={cn(
          "display-lg",
          dark ? "text-ivory" : "text-forest"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-relaxed md:text-lg",
            dark ? "text-ivory/60" : "text-muted"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
