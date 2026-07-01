import { MessageCircle, Headset } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { siteConfig } from "@/lib/config/site.config";
import { createPageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata = createPageMetadata({
  title: "Support",
  description:
    "Need help? The BaiHub support team is available 7 days a week for booking help, replacements, and questions.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-primary/15 via-brand-primary/5 to-white section-padding">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-brand-primary/25 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-brand-primary/15 blur-3xl"
          />

          <div className="section-container relative">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-secondary">
                Support, 7 A.M. to 10 P.M.
              </p>
              <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight text-brand-foreground sm:text-6xl lg:text-7xl">
                We&apos;re here to help.
              </h1>
              <p className="mt-6 text-lg text-brand-muted">
                Need help? Our support team is available 7 days a week for
                booking, replacements, and any questions.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center rounded-3xl border border-border bg-white/90 p-8 text-center shadow-sm backdrop-blur-sm">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-primary/20">
                  <MessageCircle
                    className="size-6 text-brand-foreground"
                    strokeWidth={2.25}
                  />
                </div>
                <h2 className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-muted">
                  Customer Support
                </h2>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="mt-2 text-lg font-semibold text-brand-secondary hover:underline"
                >
                  {siteConfig.contact.email}
                </a>
                <p className="mt-2 text-sm text-brand-muted">
                  Or chat with us on{" "}
                  <a
                    href={buildWhatsAppUrl(siteConfig.whatsapp.defaultMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-brand-secondary hover:underline"
                  >
                    WhatsApp
                  </a>
                  .
                </p>
              </div>

              <div className="flex flex-col items-center rounded-3xl border border-border bg-white/90 p-8 text-center shadow-sm backdrop-blur-sm">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-brand-primary/20">
                  <Headset
                    className="size-6 text-brand-foreground"
                    strokeWidth={2.25}
                  />
                </div>
                <h2 className="mt-5 text-xs font-bold uppercase tracking-wider text-brand-muted">
                  BaiHub Professional Support
                </h2>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="mt-2 text-lg font-semibold text-brand-secondary hover:underline"
                >
                  {siteConfig.contact.phone}
                </a>
                <p className="mt-2 text-sm text-brand-muted">
                  Available 7 days a week, 7 A.M. to 10 P.M.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileBottomCTA />
    </>
  );
}
