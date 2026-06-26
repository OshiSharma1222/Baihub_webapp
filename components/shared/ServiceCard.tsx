import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ButtonAnchor } from "@/components/ui/button-link";
import { getBookUrl } from "@/lib/book";

type ServiceCardProps = {
  title: string;
  description: string;
  image: string;
};

export function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Illustration */}
      <div className="relative flex h-48 items-center justify-center bg-brand-primary/5 p-4">
        <Image
          src={image}
          alt={title}
          width={280}
          height={200}
          className="h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-brand-foreground">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
          {description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline" className="rounded-full text-xs">
            Part-time
          </Badge>
          <Badge variant="outline" className="rounded-full text-xs">
            Full-time
          </Badge>
        </div>
        <ButtonAnchor
          variant="link"
          href={getBookUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 h-auto justify-start px-0 text-sm font-semibold text-brand-secondary"
        >
          Book this helper
        </ButtonAnchor>
      </div>
    </article>
  );
}
