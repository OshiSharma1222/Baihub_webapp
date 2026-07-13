import Image from "next/image";
import { cn } from "@/lib/utils";

type BaiHubLogoProps = {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
};

const LOGO_WIDTH = 920;
const LOGO_HEIGHT = 360;

export function BaiHubLogo({
  variant = "dark",
  className,
  priority = false,
}: BaiHubLogoProps) {
  const src =
    variant === "light"
      ? "/images/baihub-logo-white.png"
      : "/images/baihub-logo.png";

  return (
    <Image
      src={src}
      alt="BaiHub, Reliable Household Help, On Time. Every Time."
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      priority={priority}
      unoptimized
      className={cn("h-auto w-[7.5rem] sm:w-[8.5rem] lg:w-[9.5rem]", className)}
    />
  );
}
