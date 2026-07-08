export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

export const defaultTransition = {
  duration: 0.5,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export const springTransition = {
  type: "spring" as const,
  stiffness: 300,
  damping: 24,
};
