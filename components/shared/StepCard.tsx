import {
  ClipboardList,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  clipboard: ClipboardList,
  users: Users,
  shield: Shield,
};

type StepCardProps = {
  number: number;
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
};

export function StepCard({
  number,
  title,
  description,
  icon,
  isLast = false,
}: StepCardProps) {
  const Icon = iconMap[icon] ?? ClipboardList;

  return (
    <div className="relative flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
      <div className="relative flex flex-col items-center lg:flex-row lg:items-start lg:gap-4">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-brand-primary text-lg font-bold text-black shadow-sm">
          {number}
        </div>
        {!isLast && (
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-14 hidden h-px w-full -translate-x-1/2 bg-brand-secondary/20 lg:block lg:left-14 lg:top-7 lg:h-0.5 lg:w-[calc(100%-3.5rem)] lg:translate-x-0"
          />
        )}
      </div>
      <div className="mt-4 flex size-12 items-center justify-center rounded-xl bg-brand-secondary/10 text-brand-secondary">
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-brand-foreground">{title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-brand-muted">
        {description}
      </p>
    </div>
  );
}
