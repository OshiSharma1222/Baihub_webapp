"use client";

import { useReducedMotion } from "framer-motion";

export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export function getMotionTransition(reducedMotion: boolean, duration = 0.5) {
  return reducedMotion ? { duration: 0 } : { duration, ease: "easeOut" as const };
}
