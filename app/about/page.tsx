import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { ButtonAnchor, ButtonLink } from "@/components/ui/button-link";
import { createPageMetadata } from "@/lib/seo";
import { getBookUrl } from "@/lib/book";

export const metadata = createPageMetadata({
  title: "About BaiHub",
  description:
    "Learn about BaiHub — connecting Indian families with verified, trained domestic help.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        <div className="section-container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-foreground">About BaiHub</h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">
          BaiHub India is redefining how Bengaluru households access domestic help. We connect families with verified, trained, and identity-checked part-time and live-in helpers - bringing structure, reliability, and professionalism to a deeply unorganised segment.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">
          With our hub-home model, where helpers stay nearby, we ensure a 30-day uninterrupted, on-time service guarantee, solving the industry's biggest pain point: inconsistency.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">
          Through simple slot-based booking and a wide range of services - cleaning, cooking, babysitting, laundry, gardening, and more - BaiHub is building the city's most dependable ecosystem for modern, hotel-grade household services.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonAnchor
              href={getBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black font-semibold text-white hover:bg-black/90"
            >
              Book a Helper Now
            </ButtonAnchor>

          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
