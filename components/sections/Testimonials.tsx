"use client";

import { motion } from "framer-motion";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { siteConfig } from "@/lib/config/site.config";
import { usePrefersReducedMotion } from "@/lib/motion";

export function Testimonials() {
  const reducedMotion = usePrefersReducedMotion();
  const testimonials = siteConfig.testimonials;

  const half = Math.ceil(testimonials.length / 2);
  const rowOne = testimonials.slice(0, half);
  const rowTwo = testimonials.slice(half);

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden section-padding bg-gradient-to-b from-brand-primary/20 via-brand-primary/5 to-white"
    >
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            {siteConfig.testimonialsSection.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            {siteConfig.testimonialsSection.headline}
          </h2>
        </motion.div>
      </div>

      <div className="relative mt-12 space-y-5">
        <MarqueeRow items={rowOne} reduceMotion={reducedMotion} />
        <MarqueeRow items={rowTwo} reduceMotion={reducedMotion} reverse />

        {/* Edge fade masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-brand-primary/15 to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent sm:w-28" />
      </div>
    </section>
  );
}

function MarqueeRow({
  items,
  reduceMotion,
  reverse = false,
}: {
  items: (typeof siteConfig.testimonials)[number][];
  reduceMotion: boolean;
  reverse?: boolean;
}) {
  const duplicated = [...items, ...items];

  return (
    <div className="marquee-row group flex overflow-hidden">
      <div
        className={
          reduceMotion
            ? "flex gap-5 px-2.5"
            : `flex w-max gap-5 px-2.5 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`
        }
        style={{ ["--marquee-duration" as string]: "55s" }}
      >
        {duplicated.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.author}-${index}`}
            quote={testimonial.quote}
            author={testimonial.author}
            role={testimonial.role}
          />
        ))}
      </div>
    </div>
  );
}
