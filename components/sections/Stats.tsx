"use client";

import { motion } from "framer-motion";
import { StatCounter } from "@/components/shared/StatCounter";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { siteConfig } from "@/lib/config/site.config";
import { fadeUpVariants, getMotionTransition, usePrefersReducedMotion } from "@/lib/motion";

export function Stats() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section className="section-padding bg-brand-secondary text-white">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          variants={fadeUpVariants}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="[&_*]:text-white [&_.text-brand-muted]:text-white/80">
              <StatCounter {...stat} />
            </div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...transition, delay: reducedMotion ? 0 : 0.1 }}
          variants={fadeUpVariants}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {siteConfig.testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.author} {...testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
