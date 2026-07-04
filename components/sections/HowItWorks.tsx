"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/lib/motion";
import { siteConfig } from "@/lib/config/site.config";

const appScreens = [
  {
    src: "/images/app-screen-1.png",
    alt: "BaiHub app home screen with services and bookings",
    step: siteConfig.steps[0],
    aspectClass: "aspect-[458/1024]",
    imageClass: "object-contain object-top",
    quality: 90,
  },
  {
    src: "/images/app-screen-2.png",
    alt: "BaiHub app, get matched with verified helpers",
    step: siteConfig.steps[1],
    aspectClass: "aspect-[9/19]",
    imageClass: "object-cover object-top",
    quality: 75,
  },
  {
    src: "/images/app-screen-3.jpg",
    alt: "BaiHub app, book and pay securely",
    step: siteConfig.steps[2],
    aspectClass: "aspect-[9/19]",
    imageClass: "object-cover object-top",
    quality: 75,
  },
] as const;

const phoneVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const labelVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const PHONE_WIDTH = "w-[80%] sm:w-[220px] lg:w-[240px]";

export function HowItWorks() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-gradient-to-b from-brand-primary/10 via-brand-primary/5 to-white py-10 sm:section-padding"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={reducedMotion ? { duration: 0 } : { duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
            How It Works
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-brand-foreground sm:mt-3 sm:text-4xl">
            Book trusted help in 3 simple steps
          </h2>
          <p className="mt-3 text-base text-brand-muted sm:mt-4 sm:text-lg">
            Three simple steps to trusted help at home.
          </p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 items-start gap-5 sm:mt-16 sm:grid-cols-3 sm:gap-3 lg:gap-5">
          {appScreens.map((screen, index) => (
            <div key={screen.step.number} className="flex flex-col items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={phoneVariants}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : {
                        duration: 0.6,
                        delay: index * 0.15,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }
                }
                className={`relative overflow-hidden rounded-[2rem] shadow-2xl shadow-black/10 ${PHONE_WIDTH}`}
              >
                <div className={`relative w-full bg-white ${screen.aspectClass}`}>
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    quality={screen.quality}
                    sizes="(max-width: 640px) 80vw, 240px"
                    className={screen.imageClass}
                  />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={labelVariants}
                transition={
                  reducedMotion
                    ? { duration: 0 }
                    : { duration: 0.4, delay: 0.25 + index * 0.12 }
                }
                className="mt-3 max-w-[240px] text-center sm:mt-6"
              >
                <div className="mx-auto mb-2 flex size-8 items-center justify-center rounded-full bg-brand-primary text-sm font-bold text-black">
                  {screen.step.number}
                </div>
                <p className="text-sm font-semibold text-brand-foreground sm:text-base">
                  {screen.step.title}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-brand-muted sm:text-sm">
                  {screen.step.description}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
