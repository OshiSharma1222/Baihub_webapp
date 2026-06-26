"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
  index: number;
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export function FeatureCard({ title, description, index }: FeatureCardProps) {
  const reducedMotion = usePrefersReducedMotion();
  const accentSecondary = index % 2 === 1;
  const number = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      variants={cardVariants}
      transition={
        reducedMotion
          ? { duration: 0 }
          : { duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }
      }
      whileHover={reducedMotion ? undefined : { y: -6 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-white p-7 shadow-[0_2px_20px_-12px_rgba(17,24,39,0.25)] transition-shadow duration-300 hover:shadow-[0_20px_50px_-20px_rgba(17,24,39,0.35)]"
    >
      {/* Accent glow blob */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute -left-10 -top-10 size-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100",
          accentSecondary ? "bg-brand-secondary/20" : "bg-brand-primary/30"
        )}
      />

      {/* Large step number — highlights on hover */}
      <span
        aria-hidden="true"
        className={cn(
          "pointer-events-none select-none text-6xl font-bold leading-none tracking-tighter transition-all duration-300 sm:text-7xl",
          accentSecondary
            ? "text-brand-secondary/15 group-hover:scale-110 group-hover:text-brand-secondary"
            : "text-brand-primary/25 group-hover:scale-110 group-hover:text-brand-primary"
        )}
      >
        {number}
      </span>

      <h3 className="relative mt-4 text-lg font-bold tracking-tight text-brand-foreground">
        {title}
      </h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
        {description}
      </p>

      {/* Bottom accent bar grows on hover */}
      <div
        aria-hidden="true"
        className={cn(
          "relative mt-6 h-1 w-10 origin-left rounded-full transition-all duration-300 group-hover:w-full",
          accentSecondary ? "bg-brand-secondary" : "bg-brand-primary"
        )}
      />
    </motion.article>
  );
}
