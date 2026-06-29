"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { ButtonAnchor } from "@/components/ui/button-link";
import { AppStoreBadges } from "@/components/shared/AppStoreBadges";
import { siteConfig } from "@/lib/config/site.config";
import {
  fadeUpVariants,
  getMotionTransition,
  usePrefersReducedMotion,
} from "@/lib/motion";
import { getBookUrl } from "@/lib/book";

function StarRating() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-4 fill-brand-primary text-brand-primary"
          />
        ))}
      </div>
      <p className="text-sm text-brand-muted">
        <span className="font-semibold text-brand-foreground">
          {siteConfig.hero.rating.score}
        </span>{" "}
        {siteConfig.hero.rating.label}
      </p>
    </div>
  );
}

export function Hero() {
  const reducedMotion = usePrefersReducedMotion();
  const transition = getMotionTransition(reducedMotion);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-primary/10 via-brand-primary/5 to-white pb-0 pt-6 sm:pt-10 lg:pt-12">
      <div className="section-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
          {/* Left content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={transition}
            className="max-w-xl pb-10 lg:max-w-2xl lg:pb-16"
          >
            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight text-brand-foreground sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              {siteConfig.hero.headline}
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-muted sm:text-xl">
              {siteConfig.hero.subhead}
            </p>

            <ButtonAnchor
              href={getBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              size="lg"
              className="mt-5 h-12 bg-black px-6 text-base font-semibold text-white hover:bg-black/90"
            >
              {siteConfig.hero.localityCta}
              <ArrowRight className="size-4" />
            </ButtonAnchor>

            <AppStoreBadges className="mt-6" />

            <div className="mt-5">
              <StarRating />
            </div>
          </motion.div>

          {/* Right — character illustration */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ ...transition, delay: reducedMotion ? 0 : 0.12 }}
            className="relative mx-auto flex w-full max-w-lg items-center justify-center sm:max-w-xl lg:max-w-none"
          >
            <div className="relative aspect-square w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[720px]">
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-primary/35 via-brand-primary/15 to-brand-primary/5 blur-sm"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-primary/25 to-white/80"
              />

              <div className="absolute inset-0 flex items-center justify-center p-1 sm:p-2">
                <div className="relative h-full w-full">
                  <Image
                    src="/images/hero-character-bg-removed.png"
                    alt="Verified BaiHub domestic helper, trained, friendly, and ready to help"
                    fill
                    priority
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 560px, 720px"
                    className="object-contain object-center drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust features container — Snabbit-style full-width bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        transition={transition}
        className="mt-0 border-t border-brand-primary/20 bg-brand-primary/10"
      >
        <div className="section-container flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-4 sm:gap-x-10 sm:py-5">
          {siteConfig.hero.trustBadges.map((badge) => (
            <div
              key={badge}
              className="flex items-center gap-2 text-sm font-medium text-brand-foreground sm:text-base"
            >
              <CheckCircle2 className="size-4 shrink-0 text-brand-foreground sm:size-5" />
              {badge}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
