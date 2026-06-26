"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { StatCounter } from "@/components/shared/StatCounter";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { siteConfig } from "@/lib/config/site.config";
import { fadeUpVariants, getMotionTransition, usePrefersReducedMotion } from "@/lib/motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export function WhyBaiHub() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section id="why-baihub">
      {/* Feature cards */}
      <div className="relative overflow-hidden bg-brand-surface section-padding">
        {/* Decorative background accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full bg-brand-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-brand-secondary/10 blur-3xl"
        />

        <div className="section-container relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
            className="mx-auto max-w-2xl text-center"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/30 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground shadow-sm">
              <Sparkles className="size-3.5 text-brand-secondary" />
              The BaiHub Promise
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl lg:text-[2.75rem]">
              Trust, built into every step
            </h2>
            <p className="mt-4 text-lg text-brand-muted">
              You are letting someone into your home. We make sure they have earned it.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
            className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {siteConfig.features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </motion.div>

          {/* Subscription banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.5, delay: 0.2 }}
            className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-primary to-brand-primary/80 px-6 py-5 text-center shadow-lg"
          >
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.08)_1px,transparent_0)] [background-size:18px_18px]"
            />
            <p className="relative text-base font-bold text-black sm:text-lg">
              {siteConfig.subscriptionBanner}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats + testimonials — yellow band */}
      <div className="relative overflow-hidden bg-brand-primary section-padding">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.06)_1px,transparent_0)] [background-size:26px_26px]"
        />
        <div className="section-container relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            transition={transition}
            variants={fadeUpVariants}
            className="grid gap-y-10 divide-black/10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:divide-x"
          >
            {siteConfig.stats.map((stat) => (
              <div key={stat.label} className="px-2">
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
      </div>
    </section>
  );
}
