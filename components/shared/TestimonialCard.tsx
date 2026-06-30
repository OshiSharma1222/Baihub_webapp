import { Star } from "lucide-react";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <blockquote className="flex h-[210px] w-[280px] shrink-0 flex-col rounded-2xl border border-brand-primary/15 bg-white p-5 shadow-[0_10px_40px_-20px_rgba(17,24,39,0.4)] sm:w-[300px]">
      <p className="line-clamp-3 flex-1 text-sm leading-relaxed text-brand-foreground">
        {quote}
      </p>

      <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className="size-3.5 fill-brand-primary text-brand-primary"
            aria-hidden="true"
          />
        ))}
      </div>

      <footer className="mt-3 flex items-center gap-2.5 border-t border-border/70 pt-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand-primary/20 text-xs font-bold text-brand-foreground">
          {initials}
        </span>
        <cite className="not-italic">
          <span className="block text-sm font-semibold text-brand-foreground">{author}</span>
          <span className="text-xs text-brand-muted">{role}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
