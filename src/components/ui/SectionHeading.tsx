import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-2xl",
        className
      )}
    >
      {label && (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
