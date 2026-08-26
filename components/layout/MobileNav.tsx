"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, profile } from "@/lib/data/portfolio";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-border bg-card/60 md:hidden"
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-5" strokeWidth={1.5} />
      </SheetTrigger>
      <SheetContent side="right" className="w-[min(100%,20rem)] bg-cream">
        <SheetHeader>
          <SheetTitle className="font-heading text-left text-xl">
            {profile.shortName}
          </SheetTitle>
        </SheetHeader>
        <nav className="mt-8 flex flex-col gap-1 px-2" aria-label="Mobile">
          {navLinks.map((link, index) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-base transition-all duration-500 ease-premium",
                  active
                    ? "bg-secondary font-medium text-charcoal"
                    : "text-muted-foreground hover:bg-secondary/50 hover:text-charcoal",
                )}
                style={{ transitionDelay: `${index * 40}ms` }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
