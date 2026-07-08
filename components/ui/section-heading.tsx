import { memo } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

function SectionHeadingComponent({
  label,
  title,
  description,
  className,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 space-y-4",
        align === "center" && "mx-auto max-w-2xl text-center",
        className,
      )}
    >
      <span className="text-sm font-semibold uppercase tracking-widest text-primary">
        {label}
      </span>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export const SectionHeading = memo(SectionHeadingComponent);
