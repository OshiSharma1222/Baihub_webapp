"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonAnchor } from "@/components/ui/button-link";
import { AppStoreBadges } from "@/components/shared/AppStoreBadges";
import { siteConfig } from "@/lib/config/site.config";
import {
  fadeUpVariants,
  getMotionTransition,
  usePrefersReducedMotion,
} from "@/lib/motion";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

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
  const visibleCities = siteConfig.hero.cities.slice(0, 5);

  return (
    <section className="relative overflow-hidden bg-white pb-8 pt-6 sm:pb-12 sm:pt-10 lg:pb-16 lg:pt-12">
      {/* subtle page-wide dot texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.06)_1px,transparent_0)] [background-size:24px_24px]"
      />

      <div className="section-container relative">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16">
          {/* Left — Pronto-style content stack */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={transition}
            className="max-w-xl lg:max-w-2xl"
          >
            {/* Trust strip pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-primary/40 bg-brand-primary/10 px-4 py-1.5 text-sm font-medium text-brand-foreground">
              <span className="size-2 shrink-0 rounded-full bg-brand-secondary" />
              {siteConfig.hero.trustStrip}
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.08] tracking-tight text-brand-foreground sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
              {siteConfig.hero.headline}
            </h1>

            <p className="mt-5 max-w-lg text-lg leading-relaxed text-brand-muted sm:text-xl">
              {siteConfig.hero.subhead}
            </p>

            <ButtonAnchor
              href={getDefaultWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="link"
              className="mt-5 h-auto px-0 text-base font-semibold text-brand-secondary hover:text-brand-secondary/80"
            >
              {siteConfig.hero.localityCta}
              <ArrowRight className="size-4" />
            </ButtonAnchor>

            {/* App store badges — Pronto-style */}
            <AppStoreBadges className="mt-6" />

            <div className="mt-5">
              <StarRating />
            </div>

            {/* Live in cities — Pronto-style pills */}
            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-muted">
                Live in
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {visibleCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-border bg-white px-3.5 py-1.5 text-sm font-medium text-brand-foreground shadow-sm"
                  >
                    {city}
                  </span>
                ))}
                <ButtonAnchor
                  href={getDefaultWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="link"
                  className="h-auto px-1 text-sm font-semibold text-brand-secondary"
                >
                  {siteConfig.hero.moreCitiesLabel}
                  <ArrowRight className="size-3.5" />
                </ButtonAnchor>
              </div>
            </div>

            {/* Trust badges row */}
            <div className="mt-8 flex flex-wrap gap-2 border-t border-border/60 pt-8">
              {siteConfig.hero.trustBadges.map((badge) => (
                <Badge
                  key={badge}
                  variant="secondary"
                  className="rounded-full border border-brand-primary/25 bg-brand-surface px-3 py-1.5 text-xs font-medium text-brand-foreground sm:text-sm"
                >
                  <CheckCircle2 className="mr-1.5 size-3.5 text-brand-secondary" />
                  {badge}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Right — character centered in column, side layout unchanged */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            transition={{ ...transition, delay: reducedMotion ? 0 : 0.12 }}
            className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
          >
            <div className="relative aspect-square w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[520px]">
              {/* Centered soft blob behind character */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-brand-primary/35 via-brand-primary/15 to-brand-secondary/10 blur-sm"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-brand-primary/25 to-white/80"
              />
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 size-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_2px_2px,rgba(33,107,165,0.12)_1.5px,transparent_0)] [background-size:20px_20px]"
              />

              {/* Character — centered in the blob */}
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="relative h-[88%] w-[88%]">
                  <Image
                    src="/images/hero-character.png"
                    alt="Verified BaiHub domestic helper — trained, friendly, and ready to help"
                    fill
                    priority
                    sizes="(max-width: 1024px) 90vw, 520px"
                    className="object-contain object-center drop-shadow-md"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
