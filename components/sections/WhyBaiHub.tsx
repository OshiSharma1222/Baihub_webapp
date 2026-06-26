"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MessageCircle,
  RefreshCw,
  Shield,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { siteConfig } from "@/lib/config/site.config";
import { usePrefersReducedMotion } from "@/lib/motion";

const featureIcons: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  "refresh-cw": RefreshCw,
  "message-circle": MessageCircle,
};

function formatStatValue(value: number, suffix: string) {
  return `${value.toLocaleString("en-IN")}${suffix}`;
}

export function WhyBaiHub() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section id="why-baihub" className="section-padding bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            {siteConfig.whyBaiHub.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl lg:text-[2.75rem]">
            {siteConfig.whyBaiHub.headline}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={reducedMotion ? { duration: 0 } : { duration: 0.55 }}
            className="flex flex-col rounded-3xl bg-brand-primary p-8 text-black shadow-lg sm:p-10"
          >
            <div className="flex size-12 items-center justify-center rounded-2xl bg-black/10">
              <Shield className="size-6 text-black" strokeWidth={2.25} />
            </div>

            <h3 className="mt-6 text-2xl font-bold tracking-tight sm:text-3xl">
              {siteConfig.whyBaiHub.trustCard.title}
            </h3>
            <p className="mt-3 max-w-md text-base leading-relaxed text-black/75">
              {siteConfig.whyBaiHub.trustCard.description}
            </p>

            <div className="mt-8 grid flex-1 grid-cols-2 gap-3 sm:gap-4">
              {siteConfig.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl bg-black/10 px-4 py-5 sm:px-5 sm:py-6"
                >
                  <p className="text-2xl font-bold tracking-tight sm:text-3xl">
                    {formatStatValue(stat.value, stat.suffix)}
                  </p>
                  <p className="mt-1 text-sm font-medium text-black/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {siteConfig.features.map((feature, index) => {
              const Icon = featureIcons[feature.icon] ?? ShieldCheck;

              return (
                <motion.article
                  key={feature.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { duration: 0.5, delay: index * 0.08 }
                  }
                  className="flex flex-col rounded-3xl border border-border/70 bg-white p-6 shadow-[0_2px_20px_-12px_rgba(17,24,39,0.2)] sm:p-7"
                >
                  <div className="flex size-11 items-center justify-center rounded-xl bg-brand-primary/20">
                    <Icon className="size-5 text-brand-foreground" strokeWidth={2.25} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-brand-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
                    {feature.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
