import {
  GraduationCap,
  MessageCircle,
  RefreshCw,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "shield-check": ShieldCheck,
  "graduation-cap": GraduationCap,
  "refresh-cw": RefreshCw,
  "message-circle": MessageCircle,
};

type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  const Icon = iconMap[icon] ?? ShieldCheck;

  return (
    <article className="rounded-2xl border border-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex size-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-brand-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-brand-muted">{description}</p>
    </article>
  );
}
