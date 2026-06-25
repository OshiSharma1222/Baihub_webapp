"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";

type StatCounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export function StatCounter({ value, suffix = "", label }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const reducedMotion = usePrefersReducedMotion();
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    if (!isInView || reducedMotion) return;

    const duration = 1500;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(Math.round(value * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, reducedMotion, value]);

  const displayValue = reducedMotion ? value : animatedValue;

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold tracking-tight text-brand-foreground sm:text-5xl">
        {displayValue.toLocaleString("en-IN")}
        {suffix}
      </div>
      <p className="mt-2 text-sm font-medium text-brand-muted sm:text-base">{label}</p>
    </div>
  );
}
