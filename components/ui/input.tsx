import { memo, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

function InputComponent({ label, error, className, id, ...props }: InputProps) {
  const inputId = id ?? label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <label htmlFor={inputId} className="block text-sm font-medium">
        {label}
      </label>
      <input
        id={inputId}
        className={cn(
          "focus-ring w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm transition-colors placeholder:text-muted-foreground focus:border-primary/50",
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

export const Input = memo(InputComponent);
