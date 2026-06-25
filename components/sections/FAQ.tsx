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
    <section className="section-padding bg-brand-surface">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Clear answers to help you book with confidence.
          </p>
        </div>

        <Accordion className="mx-auto mt-12 max-w-3xl">
          {siteConfig.faq.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="text-left text-base font-semibold text-brand-foreground hover:no-underline">
                <h3 className="text-base font-semibold">{item.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-brand-muted">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
