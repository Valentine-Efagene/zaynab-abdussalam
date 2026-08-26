import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LawBackground } from "@/components/LawBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/lib/data/portfolio";

export function HomeContact() {
  return (
    <LawBackground
      image="/images/law/general-bg.png"
      overlayClassName="law-overlay-footer"
      imagePosition="65% center"
      className="border-t border-cream/10 text-cream"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <ScrollReveal>
          <p className="mb-4 inline-flex rounded-full border border-gold/30 bg-cream/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            Contact
          </p>
          <h2 className="font-heading text-3xl font-medium tracking-tight text-cream sm:text-4xl">
            Available for legal opportunities and collaboration
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Reach out by email or phone, or connect on LinkedIn to discuss energy,
            corporate, and dispute resolution mandates.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/contact" />}
              className="group h-11 rounded-full bg-gold px-6 text-charcoal hover:bg-gold/90"
            >
              Get in Touch
              <span className="ml-2 inline-flex size-7 items-center justify-center rounded-full bg-charcoal/10 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <ArrowUpRight
                  className="size-3.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            </Button>
            <a
              href={`mailto:${profile.email}`}
              className="text-sm text-cream/80 transition-colors duration-300 ease-premium hover:text-gold"
            >
              {profile.email}
            </a>
          </div>
        </ScrollReveal>
      </div>
    </LawBackground>
  );
}
