import { Mail, Phone } from "lucide-react";
import { profile } from "@/lib/data/portfolio";

export function ContactBar() {
  return (
    <div className="border-b border-cream/10 bg-charcoal text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-xs sm:px-6 lg:px-8">
        <p className="hidden text-cream/70 sm:block">
          {profile.locationShort}
        </p>
        <div className="flex w-full items-center justify-end gap-5 sm:w-auto">
          <a
            href={profile.phoneHref}
            className="inline-flex items-center gap-1.5 text-cream/90 transition-colors duration-300 ease-premium hover:text-gold"
          >
            <Phone className="size-3.5" strokeWidth={1.5} aria-hidden />
            <span>{profile.phone}</span>
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 text-cream/90 transition-colors duration-300 ease-premium hover:text-gold"
          >
            <Mail className="size-3.5" strokeWidth={1.5} aria-hidden />
            <span className="hidden sm:inline">{profile.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}
