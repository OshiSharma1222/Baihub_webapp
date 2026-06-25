import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { EnquiryForm } from "@/components/shared/EnquiryForm";
import { siteConfig } from "@/lib/config/site.config";
import { createPageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Support",
  description: "Get help from the BaiHub team — live chat support 7 days a week.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <Header />
      <main id="main" className="section-padding">
        <div className="section-container">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-brand-foreground">Support</h1>
            <p className="mt-4 text-lg text-brand-muted">
              Our team is here 7 days a week for booking help, replacements, and
              questions.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:items-start">
            <div className="rounded-2xl border border-border bg-brand-surface/50 p-6">
              <h2 className="text-xl font-semibold text-brand-foreground">Contact us</h2>
              <ul className="mt-4 space-y-3 text-sm text-brand-muted">
                <li>
                  WhatsApp:{" "}
                  <a
                    href={buildWhatsAppUrl(siteConfig.whatsapp.defaultMessage)}
                    className="font-medium text-brand-secondary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="font-medium text-brand-secondary hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
              </ul>
            </div>
            <EnquiryForm />
          </div>
        </div>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
