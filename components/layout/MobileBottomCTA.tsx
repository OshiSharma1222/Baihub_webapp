import { ButtonAnchor } from "@/components/ui/button-link";
import { getDefaultWhatsAppUrl } from "@/lib/whatsapp";

export function MobileBottomCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white/95 p-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <ButtonAnchor
        size="lg"
        href={getDefaultWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="h-12 w-full bg-brand-primary text-base font-semibold text-black hover:bg-brand-primary/90"
      >
        Book a Helper Now
      </ButtonAnchor>
    </div>
  );
}
