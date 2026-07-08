import { memo } from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
}

function SkeletonComponent({ className }: SkeletonProps) {
  return (
    <div
      className={cn("skeleton rounded-xl", className)}
      aria-hidden="true"
    />
  );
}

export const Skeleton = memo(SkeletonComponent);
