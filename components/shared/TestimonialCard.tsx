type TestimonialCardProps = {
  quote: string;
  author: string;
  location: string;
};

export function TestimonialCard({ quote, author, location }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm">
      <p className="flex-1 text-base leading-relaxed text-brand-foreground">
        &ldquo;{quote}&rdquo;
      </p>
      <footer className="mt-4 border-t border-border pt-4">
        <cite className="not-italic">
          <span className="font-semibold text-brand-foreground">{author}</span>
          <span className="text-brand-muted"> · {location}</span>
        </cite>
      </footer>
    </blockquote>
  );
}
