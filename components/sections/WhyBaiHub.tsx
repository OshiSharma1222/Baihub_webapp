"use client";

import { motion } from "framer-motion";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { siteConfig } from "@/lib/config/site.config";
import { fadeUpVariants, getMotionTransition, usePrefersReducedMotion } from "@/lib/motion";

export function WhyBaiHub() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section id="why-baihub" className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Why BaiHub?
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Peace of mind built into every placement.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          variants={fadeUpVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </motion.div>

        <div className="mt-10 rounded-2xl bg-brand-primary/15 px-6 py-4 text-center">
          <p className="text-base font-semibold text-brand-foreground sm:text-lg">
            {siteConfig.subscriptionBanner}
          </p>
        </div>
      </div>
    </section>
  );
}
