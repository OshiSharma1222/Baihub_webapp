import type { Metadata } from "next";
import { siteConfig } from "@/lib/config/site.config";

const defaultTitle = "BaiHub - Trusted Domestic Help in Minutes";
const defaultDescription =
  "Verified Babysitters, Japa Maids, Housemaids and Helpers - Part-time or Full-time with ease";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: defaultDescription,
  keywords: [
    "domestic help",
    "maid service",
    "babysitter",
    "japa maid",
    "house help",
    "verified helpers",
    "nanny",
    "India",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: defaultTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: siteConfig.siteUrl,
  },
};

export function createPageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteConfig.siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
    },
    twitter: {
      title,
      description,
    },
  };
}

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    description: defaultDescription,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    sameAs: siteConfig.socialLinks.map((link) => link.href),
  };
}

export function getServiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Domestic Help Placement",
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
    description: defaultDescription,
    areaServed: "India",
    serviceType: siteConfig.services.map((service) => service.title),
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
