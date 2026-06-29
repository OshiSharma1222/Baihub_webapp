import { CircleHelp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/config/site.config";
import { getFaqJsonLd } from "@/lib/seo";

export function FAQ() {
  const faqJsonLd = getFaqJsonLd();

  return (
    <section
      id="faq"
      className="relative overflow-hidden section-padding bg-gradient-to-b from-white via-brand-primary/8 to-brand-primary/20"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Yellow dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] [background-size:24px_24px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-0 size-64 rounded-full bg-brand-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-0 size-64 rounded-full bg-brand-primary/20 blur-3xl"
      />

      <div className="section-container relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-primary/40 bg-white/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-foreground shadow-sm backdrop-blur-sm">
            <CircleHelp className="size-3.5 text-brand-secondary" />
            Got Questions?
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Clear answers to help you book with confidence.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl border border-brand-primary/25 bg-white/90 p-2 shadow-[0_8px_40px_-16px_rgba(243,199,7,0.45)] backdrop-blur-sm sm:p-4">
          <Accordion className="divide-y divide-brand-primary/10">
            {siteConfig.faq.map((item, index) => (
              <AccordionItem
                key={item.question}
                value={`faq-${index}`}
                className="border-none px-4 transition-colors hover:bg-brand-primary/5 data-open:bg-brand-primary/8 sm:px-6"
              >
                <AccordionTrigger className="gap-4 py-5 text-left text-base font-semibold text-brand-foreground hover:no-underline [&[data-panel-open]]:text-brand-foreground">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 shrink-0 text-sm font-semibold tabular-nums text-brand-muted">
                      {index + 1}.
                    </span>
                    <h3 className="text-base font-semibold">{item.question}</h3>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 pl-7 text-sm leading-relaxed text-brand-muted sm:pl-8">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
