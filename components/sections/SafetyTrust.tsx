"use client";

import {
  IdCard,
  Lock,
  MessageCircle,
  Search,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/config/site.config";
import { fadeUpVariants, getMotionTransition, usePrefersReducedMotion } from "@/lib/motion";

const iconMap: Record<string, LucideIcon> = {
  "id-card": IdCard,
  shield: Shield,
  search: Search,
  "message-circle": MessageCircle,
  lock: Lock,
};

export function SafetyTrust() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Safety &amp; Trust
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Because your home, children, and newborns deserve the highest care.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          variants={fadeUpVariants}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.safetyItems.map((item) => {
            const Icon = iconMap[item.icon] ?? Shield;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-border bg-brand-surface/50 p-6"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-brand-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                  {item.description}
                </p>
              </article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
