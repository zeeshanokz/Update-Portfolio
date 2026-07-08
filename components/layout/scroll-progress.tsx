"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/use-scroll-progress";

function ScrollProgressComponent() {
  const progress = useScrollProgress();

  return (
    <div
      className="fixed top-0 right-0 left-0 z-[60] h-[3px] bg-muted"
      aria-hidden="true"
    >
      <motion.div
        className="h-full bg-gradient-to-r from-primary to-accent"
        style={{ width: `${progress}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}

export const ScrollProgress = memo(ScrollProgressComponent);
