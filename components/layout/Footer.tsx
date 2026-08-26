import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navLinks, profile } from "@/lib/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border/70 bg-charcoal text-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-heading text-2xl tracking-tight">
              {profile.shortName}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-cream/70">
              {profile.title} at {profile.firm}. Certified Arbitrator &amp;
              Mediator and Insolvency Practitioner based in Lagos, Nigeria.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                Navigate
              </p>
              <ul className="space-y-2 text-sm text-cream/80">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors duration-300 ease-premium hover:text-gold"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                Connect
              </p>
              <ul className="space-y-2 text-sm text-cream/80">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="transition-colors duration-300 ease-premium hover:text-gold"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={profile.phoneHref}
                    className="transition-colors duration-300 ease-premium hover:text-gold"
                  >
                    Phone
                  </a>
                </li>
                <li>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors duration-300 ease-premium hover:text-gold"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={profile.cvPath}
                    download
                    className="transition-colors duration-300 ease-premium hover:text-gold"
                  >
                    Download CV
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-cream/15" />
        <p className="text-xs text-cream/50">
          © {year} {profile.shortName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
