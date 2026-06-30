"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config/site.config";
import { usePrefersReducedMotion } from "@/lib/motion";

export function AreasWeServe() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="areas-we-serve"
      className="relative overflow-hidden section-padding bg-gradient-to-b from-white via-brand-primary/8 to-brand-primary/20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 size-64 rounded-full bg-brand-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-brand-primary/20 blur-3xl"
      />

      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="max-w-3xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            {siteConfig.areasSection.headline}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-brand-muted sm:text-lg">
            {siteConfig.areasSection.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.55, delay: 0.1 }}
          className="mt-10 rounded-3xl border border-brand-primary/25 bg-white/90 p-4 shadow-[0_8px_40px_-16px_rgba(243,199,7,0.45)] backdrop-blur-sm sm:p-6"
        >
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {siteConfig.areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={
                reducedMotion
                  ? { duration: 0 }
                  : { duration: 0.4, delay: index * 0.04 }
              }
            >
              <article
                id={area.id}
                className="h-full flex justify-between flex-col scroll-mt-24 rounded-xl border border-brand-primary/15 bg-gradient-to-br from-white to-brand-primary/10 px-4 py-4 transition-all hover:border-brand-secondary hover:shadow-sm sm:px-5 sm:py-5"
              >
                <p className="text-sm min-h-[44px] font-semibold leading-snug text-brand-foreground sm:text-base">
                  {area.name}
                </p>
                <p className="mt-2 text-xs text-brand-muted sm:text-sm">
                  {area.experts}+ experts
                </p>
                <p className="mt-1 text-xs font-medium text-brand-secondary sm:text-sm">
                  ~{area.etaMinutes} min
                </p>
              </article>
            </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
