import {
  Baby,
  Heart,
  Home,
  Users,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ButtonAnchor } from "@/components/ui/button-link";
import type { ServiceWhatsAppKey } from "@/lib/config/site.config";
import { getServiceWhatsAppUrl } from "@/lib/whatsapp";

const iconMap: Record<string, LucideIcon> = {
  baby: Baby,
  heart: Heart,
  home: Home,
  users: Users,
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
  whatsappKey: ServiceWhatsAppKey;
};

export function ServiceCard({
  title,
  description,
  icon,
  whatsappKey,
}: ServiceCardProps) {
  const Icon = iconMap[icon] ?? Users;

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-primary/15 text-brand-secondary">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-xl font-semibold text-brand-foreground">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-muted">
        {description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Badge variant="outline" className="rounded-full">
          Part-time
        </Badge>
        <Badge variant="outline" className="rounded-full">
          Full-time
        </Badge>
      </div>
      <ButtonAnchor
        variant="link"
        href={getServiceWhatsAppUrl(whatsappKey)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 h-auto justify-start px-0 text-brand-secondary"
      >
        Book this helper
      </ButtonAnchor>
    </article>
  );
}
