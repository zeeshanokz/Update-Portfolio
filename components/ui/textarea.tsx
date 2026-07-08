import { memo, type TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

function TextareaComponent({
  label,
  error,
  className,
  id,
  ...props
}: TextareaProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium">
        {label}
      </label>
      <textarea
        id={inputId}
        className={cn(
          "focus-ring min-h-[140px] w-full resize-y rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary/50",
          error && "border-red-500/50",
          className,
        )}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : undefined}
        {...props}
      />
      {error && (
        <p id={`${inputId}-error`} className="text-sm text-red-500" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export const Textarea = memo(TextareaComponent);
