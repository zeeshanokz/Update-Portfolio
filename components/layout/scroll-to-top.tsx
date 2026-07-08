"use client";

import { memo, useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

function ScrollToTopComponent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="focus-ring glass fixed right-6 bottom-6 z-50 flex size-12 items-center justify-center rounded-full shadow-lg transition-colors hover:bg-primary/10"
          aria-label="Scroll to top"
        >
          <ArrowUp className="size-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export const ScrollToTop = memo(ScrollToTopComponent);
