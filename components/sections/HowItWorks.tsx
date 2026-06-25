"use client";

import { motion } from "framer-motion";
import { StepCard } from "@/components/shared/StepCard";
import { siteConfig } from "@/lib/config/site.config";
import { fadeUpVariants, getMotionTransition, usePrefersReducedMotion } from "@/lib/motion";

export function HowItWorks() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section id="how-it-works" className="section-padding bg-brand-surface">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Three simple steps to trusted help at home.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          variants={fadeUpVariants}
          className="mt-14 flex flex-col gap-12 lg:flex-row lg:gap-8"
        >
          {siteConfig.steps.map((step, index) => (
            <StepCard
              key={step.number}
              {...step}
              isLast={index === siteConfig.steps.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
