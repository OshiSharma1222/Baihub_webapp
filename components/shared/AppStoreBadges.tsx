import Link from "next/link";
import { siteConfig } from "@/lib/config/site.config";

export function AppStoreBadges({ className = "" }: { className?: string }) {
  const badges = [
    {
      href: siteConfig.appStores.googlePlay,
      src: "/images/google-play-badge.png",
      alt: "Get it on Google Play",
      label: "Get BaiHub on Google Play",
      width: 646,
      height: 250,
      imgClass: "h-[58px] w-auto object-contain sm:h-[64px]",
    },
    {
      href: siteConfig.appStores.appStore,
      src: "/images/app-store-badge.svg",
      alt: "Download on the App Store",
      label: "Download BaiHub on the App Store",
      width: 120,
      height: 40,
      imgClass: "h-[40px] w-auto object-contain sm:h-[44px]",
    },
  ];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {badges.map((badge) => (
        <Link
          key={badge.alt}
          href={badge.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={badge.label}
          className="inline-flex shrink-0 transition-transform hover:scale-[1.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            className={badge.imgClass}
          />
        </Link>
      ))}
    </div>
  );
}
