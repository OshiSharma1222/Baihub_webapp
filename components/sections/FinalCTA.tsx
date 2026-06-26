import { ButtonAnchor } from "@/components/ui/button-link";
import { getBookUrl } from "@/lib/book";

export function FinalCTA() {
  return (
    <section className="section-padding bg-gradient-to-br from-brand-primary/20 via-brand-surface to-white">
      <div className="section-container">
        <div className="mx-auto max-w-3xl rounded-3xl border border-brand-primary/30 bg-white px-6 py-12 text-center shadow-sm sm:px-12">
          <h2 className="text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Find Your Perfect Helper Today
          </h2>
          <p className="mt-4 text-lg text-brand-muted">
            Let us match you with verified, trained help. Stress-free.
          </p>
          <ButtonAnchor
            size="lg"
            href={getBookUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 h-12 bg-brand-primary px-8 text-base font-semibold text-black hover:bg-brand-primary/90"
          >
            Book Now
          </ButtonAnchor>
          <p className="mt-4 text-sm font-medium text-brand-muted">
            Verified · Trained · Replaceable in 48h
          </p>
        </div>
      </div>
    </section>
  );
}
