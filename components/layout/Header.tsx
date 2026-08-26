"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks, profile } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";
import { MobileNav } from "./MobileNav";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-cream/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="font-heading text-lg tracking-tight text-charcoal transition-opacity duration-300 ease-premium hover:opacity-80"
        >
          {profile.shortName}
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ease-premium",
                  active
                    ? "bg-secondary text-charcoal"
                    : "text-muted-foreground hover:bg-secondary/60 hover:text-charcoal",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
