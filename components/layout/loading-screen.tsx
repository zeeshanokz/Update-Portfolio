"use client";

import { memo, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2 } from "lucide-react";

function LoadingScreenComponent() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          role="status"
          aria-label="Loading"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Code2 className="size-12 text-primary" aria-hidden="true" />
          </motion.div>

          <div className="w-48 overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-1 rounded-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            {Math.min(Math.round(progress), 100)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export const LoadingScreen = memo(LoadingScreenComponent);
