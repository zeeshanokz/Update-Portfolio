import { memo, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 shadow-lg shadow-primary/20",
  secondary:
    "glass text-foreground hover:bg-muted/80",
  ghost: "text-foreground hover:bg-muted/60",
  outline:
    "border border-border text-foreground hover:bg-muted/40 hover:border-primary/40",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-sm",
  lg: "px-8 py-3 text-base",
};

function ButtonComponent({
  className,
  variant = "primary",
  size = "md",
  isLoading,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "focus-ring inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span
          className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          aria-hidden="true"
        />
      )}
      {children}
    </button>
  );
}

export const Button = memo(ButtonComponent);
