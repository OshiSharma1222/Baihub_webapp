import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config/site.config";

export function AppStoreBadges({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link
        href={siteConfig.appStores.googlePlay}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get BaiHub on Google Play"
        className="transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
      >
        <Image
          src="/images/google-play-badge.svg"
          alt="Get it on Google Play"
          width={160}
          height={48}
          className="h-12 w-auto"
        />
      </Link>
      <Link
        href={siteConfig.appStores.appStore}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download BaiHub on the App Store"
        className="transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
      >
        <Image
          src="/images/app-store-badge.svg"
          alt="Download on the App Store"
          width={160}
          height={48}
          className="h-12 w-auto"
        />
      </Link>
    </div>
  );
}
