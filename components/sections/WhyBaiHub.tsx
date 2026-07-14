"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  MessageCircle,
  RefreshCw,
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

  const fade = (delay = 0) =>
    reducedMotion
      ? { duration: 0 }
      : { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <section
      id="why-baihub"
      className="relative overflow-hidden section-padding bg-white"
    >
      {/* soft ambient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-8 size-72 rounded-full bg-brand-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-brand-primary/5 blur-3xl"
      />

      <div className="section-container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={fade()}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-primary/30 bg-brand-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-foreground">
            {siteConfig.whyBaiHub.eyebrow}
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {siteConfig.whyBaiHub.trustCard.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-muted sm:text-lg">
            {siteConfig.whyBaiHub.trustCard.description}
          </p>
        </motion.div>

        {/* Stats — separate cards on mobile, unified strip on desktop */}
        <div className="mx-auto mt-12 max-w-4xl rounded-3xl bg-brand-surface/60 p-3 sm:bg-transparent sm:p-0">
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={fade(0.05)}
            className="grid grid-cols-2 gap-3 sm:overflow-hidden sm:rounded-3xl sm:border sm:border-brand-primary/25 sm:bg-gradient-to-br sm:from-brand-primary/15 sm:via-brand-primary/5 sm:to-white sm:shadow-[0_20px_60px_-30px_rgba(243,199,7,0.6)] sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-brand-primary/20"
          >
            {siteConfig.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={fade(0.1 + index * 0.08)}
                className="flex flex-col items-center rounded-2xl border border-border/80 bg-white px-3 py-6 text-center shadow-sm sm:rounded-none sm:border-0 sm:bg-transparent sm:px-4 sm:py-9 sm:shadow-none"
              >
                <dt className="order-2 mt-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-muted sm:text-sm">
                  {stat.label}
                </dt>
                <dd className="order-1 text-3xl font-extrabold tracking-tight text-brand-foreground sm:bg-gradient-to-br sm:from-brand-foreground sm:to-brand-foreground/70 sm:bg-clip-text sm:text-4xl sm:text-transparent">
                  {formatStatValue(stat.value, stat.suffix)}
                </dd>
              </motion.div>
            ))}
          </motion.dl>
        </div>

        {/* Feature cards */}
        <div className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.features.map((feature, index) => {
            const Icon = featureIcons[feature.icon] ?? ShieldCheck;

            return (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={fade(index * 0.08)}
                className="group relative flex flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-primary/50 hover:shadow-[0_18px_44px_-24px_rgba(17,24,39,0.35)] sm:border-border/70 sm:shadow-none"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-foreground transition-colors duration-300 group-hover:bg-brand-primary group-hover:text-black">
                  <Icon className="size-5" strokeWidth={2.25} />
                </div>
                <h3 className="mt-5 text-base font-bold tracking-tight text-brand-foreground">
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
    </section>
  );
}
