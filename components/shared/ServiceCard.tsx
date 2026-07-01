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
      {/* Photo — native 4:3 so the full image shows without cropping */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl bg-brand-primary/5">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
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
        <div className="mt-4 flex justify-end sm:justify-center">
          <ButtonAnchor
            href={getBookUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 bg-black px-5 text-sm font-semibold text-white hover:bg-black/90"
          >
            Book this helper
          </ButtonAnchor>
        </div>
      </div>
    </article>
  );
}
