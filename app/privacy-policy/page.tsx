import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "BaiHub privacy policy — how we handle your personal information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        <div className="section-container mx-auto max-w-3xl prose prose-neutral">
          <h1 className="text-4xl font-bold text-brand-foreground">Privacy Policy</h1>
          <p className="mt-6 text-brand-muted">
            This page will contain BaiHub&apos;s full privacy policy. We are
            committed to protecting your personal information and handling data
            responsibly.
          </p>
          <p className="mt-4 text-brand-muted">
            For privacy-related questions, please contact us at hello@baihub.co.in.
          </p>
        </div>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
