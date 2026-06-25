"use client";

import { motion } from "framer-motion";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { siteConfig } from "@/lib/config/site.config";
import { fadeUpVariants, getMotionTransition, usePrefersReducedMotion } from "@/lib/motion";

export function Services() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section id="services" className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Who You Can Hire
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Verified helpers for every home need — part-time or full-time.
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
          {siteConfig.services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
