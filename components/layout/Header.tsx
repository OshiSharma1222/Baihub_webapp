"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/config/site.config";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

function AreasDropdown({ onSelect }: { onSelect?: () => void }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex items-center gap-1 text-sm font-medium text-brand-foreground/80 transition-colors hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
      >
        Areas
        <ChevronDown
          className={cn(
            "size-4 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-[calc(100%+0.75rem)] z-50 min-w-[220px] overflow-hidden rounded-xl border border-border bg-white py-2 shadow-lg">
          {siteConfig.areas.map((area) => (
            <Link
              key={area.id}
              href={`/#${area.id}`}
              onClick={() => {
                setOpen(false);
                onSelect?.();
              }}
              className="block px-4 py-2.5 text-sm text-brand-foreground/80 transition-colors hover:bg-brand-surface hover:text-brand-foreground"
            >
              {area.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileAreasOpen, setMobileAreasOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mainLinks = siteConfig.navLinks.filter(
    (link) => link.label !== "About"
  );
  const aboutLink = siteConfig.navLinks.find((link) => link.label === "About");

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full border-b transition-all duration-300",
          scrolled
            ? "border-border/80 bg-white/90 shadow-sm backdrop-blur-md"
            : "border-transparent bg-white"
        )}
      >
        <div className="section-container flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link href="/" className="shrink-0" aria-label={`${siteConfig.name} home`}>
            <Image
              src="/images/logo.png"
              alt={siteConfig.name}
              width={220}
              height={64}
              className="h-14 w-auto sm:h-16 lg:h-[4.5rem]"
              priority
            />
          </Link>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 lg:ml-auto lg:flex"
          >
            {mainLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-foreground/80 transition-colors hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}
            <AreasDropdown />
            {aboutLink && (
              <Link
                href={aboutLink.href}
                className="text-sm font-medium text-brand-foreground/80 transition-colors hover:text-brand-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-secondary focus-visible:ring-offset-2"
              >
                {aboutLink.label}
              </Link>
            )}
          </nav>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-lg"
                  className="lg:hidden"
                  aria-label="Open menu"
                />
              }
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(100vw-2rem,320px)]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-2">
                {mainLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-brand-foreground transition-colors hover:bg-brand-surface"
                  >
                    {link.label}
                  </Link>
                ))}

                <button
                  type="button"
                  onClick={() => setMobileAreasOpen((value) => !value)}
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-base font-medium text-brand-foreground transition-colors hover:bg-brand-surface"
                  aria-expanded={mobileAreasOpen}
                >
                  Areas
                  <ChevronDown
                    className={cn(
                      "size-4 transition-transform duration-200",
                      mobileAreasOpen && "rotate-180"
                    )}
                  />
                </button>

                {mobileAreasOpen && (
                  <div className="ml-2 flex flex-col gap-1 border-l border-border pl-3">
                    {siteConfig.areas.map((area) => (
                      <Link
                        key={area.id}
                        href={`/#${area.id}`}
                        onClick={() => setOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-brand-foreground/80 transition-colors hover:bg-brand-surface hover:text-brand-foreground"
                      >
                        {area.name}
                      </Link>
                    ))}
                  </div>
                )}

                {aboutLink && (
                  <Link
                    href={aboutLink.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-3 py-3 text-base font-medium text-brand-foreground transition-colors hover:bg-brand-surface"
                  >
                    {aboutLink.label}
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
