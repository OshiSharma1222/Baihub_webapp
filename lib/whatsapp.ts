import { siteConfig } from "@/lib/config/site.config";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp.phone}?text=${encodeURIComponent(message)}`;
}

export function getDefaultWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.whatsapp.defaultMessage);
}

export function getServiceWhatsAppUrl(
  serviceKey: keyof typeof siteConfig.whatsapp.serviceMessages
): string {
  return buildWhatsAppUrl(siteConfig.whatsapp.serviceMessages[serviceKey]);
}

export function getPricingWhatsAppUrl(): string {
  return buildWhatsAppUrl(siteConfig.whatsapp.pricingMessage);
}

export function buildEnquiryWhatsAppUrl(data: {
  name: string;
  role: string;
  city: string;
  hours: string;
}): string {
  const message = siteConfig.whatsapp.enquiryTemplate
    .replace("{name}", data.name)
    .replace("{role}", data.role)
    .replace("{city}", data.city)
    .replace("{hours}", data.hours);

  return buildWhatsAppUrl(message);
}
