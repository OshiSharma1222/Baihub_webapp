import { Quote } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  location: string;
};

export function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <blockquote className="relative flex h-full flex-col rounded-3xl bg-white p-7 shadow-[0_10px_40px_-20px_rgba(17,24,39,0.4)] transition-transform duration-300 hover:-translate-y-1">
      <Quote
        className="absolute right-6 top-6 size-8 text-brand-primary/30"
        aria-hidden="true"
      />
      <p className="relative flex-1 text-base leading-relaxed text-brand-foreground">
        {quote}
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-primary/20 text-sm font-bold text-brand-foreground">
          {initials}
        </span>
        <cite className="not-italic">
          <span className="block font-semibold text-brand-foreground">{author}</span>
          <span className="text-sm text-brand-muted">{location}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
