"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { ButtonAnchor } from "@/components/ui/button-link";
import { siteConfig } from "@/lib/config/site.config";
import { fadeUpVariants, getMotionTransition, usePrefersReducedMotion } from "@/lib/motion";
import { getBookUrl } from "@/lib/book";
import { cn } from "@/lib/utils";

export function Pricing() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section id="pricing" className="section-padding bg-brand-surface">
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Honest rates with subscription savings up to 20%.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={transition}
          variants={fadeUpVariants}
          className="mt-12 grid gap-6 lg:grid-cols-2"
        >
          {siteConfig.pricing.map((plan) => (
            <article
              key={plan.id}
              className={cn(
                "flex flex-col rounded-2xl border bg-white p-8 shadow-sm",
                plan.featured
                  ? "border-brand-secondary ring-2 ring-brand-secondary/20"
                  : "border-border"
              )}
            >
              {plan.featured && (
                <span className="mb-4 inline-flex w-fit rounded-full bg-brand-secondary px-3 py-1 text-xs font-semibold text-white">
                  Most popular
                </span>
              )}
              <h3 className="text-2xl font-bold text-brand-foreground">{plan.title}</h3>
              <p className="mt-2 text-brand-muted">{plan.description}</p>
              <div className="mt-6">
                <p className="text-3xl font-bold text-brand-foreground">{plan.priceLabel}</p>
                <p className="mt-1 text-sm text-brand-muted">{plan.priceNote}</p>
              </div>
              <ul className="mt-6 flex-1 space-y-3">
                {plan.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-brand-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-brand-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </motion.div>

        <div className="mt-10 text-center">
          <p className="mb-4 text-sm text-brand-muted">
            {siteConfig.subscriptionBanner}
          </p>
          <ButtonAnchor
            size="lg"
            href={getBookUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 bg-brand-primary px-8 font-semibold text-black hover:bg-brand-primary/90"
          >
            Get a custom quote
          </ButtonAnchor>
        </div>
      </div>
    </section>
  );
}
