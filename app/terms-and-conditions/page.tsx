import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms and Conditions",
  description: "BaiHub terms and conditions for using our domestic help placement service.",
  path: "/terms-and-conditions",
});

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        <div className="section-container mx-auto max-w-3xl">
          <h1 className="text-4xl font-bold text-brand-foreground">
            Terms &amp; Conditions
          </h1>
          <p className="mt-6 text-brand-muted">
            This page will contain BaiHub&apos;s full terms and conditions for
            bookings, placements, replacements, and payments.
          </p>
          <p className="mt-4 text-brand-muted">
            For questions about our terms, please contact hello@baihub.co.in.
          </p>
        </div>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
