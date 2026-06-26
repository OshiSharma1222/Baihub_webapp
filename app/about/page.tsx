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
            BaiHub is a placement and matching service for longer-term, high-trust
            home roles. We connect families with verified Babysitters, Japa Maids,
            Housemaids, and Helpers - available part-time or full-time.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-brand-muted">
            Every helper is ID and police verified, trained, and backed by our
            48-hour replacement guarantee and 7-day support.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonAnchor
              href={getBookUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-primary font-semibold text-black hover:bg-brand-primary/90"
            >
              Book a Helper Now
            </ButtonAnchor>
            <ButtonLink variant="outline" href="/support">
              Contact Support
            </ButtonLink>
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
