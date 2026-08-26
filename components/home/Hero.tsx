import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LawBackground } from "@/components/LawBackground";
import { profile } from "@/lib/data/portfolio";

export function Hero() {
  return (
    <LawBackground
      image="/images/law/general-bg.png"
      overlayClassName="law-overlay-hero"
      imagePosition="65% center"
      className="border-b border-cream/10"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="animate-rise mb-5 inline-flex rounded-full border border-gold/30 bg-cream/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            Lawyer · Lagos, Nigeria
          </p>
          <h1 className="animate-rise-delay-1 font-heading text-4xl font-medium leading-[1.1] tracking-tight text-cream sm:text-5xl lg:text-[3.35rem]">
            {profile.name}
          </h1>
          <p className="animate-rise-delay-2 mt-4 text-lg text-gold sm:text-xl">
            {profile.title}
          </p>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg">
            Certified Arbitrator &amp; Mediator and Insolvency Practitioner,
            advising on dispute resolution, corporate, and energy matters with a
            business-focused approach.
          </p>
          <div className="animate-rise-delay-3 mt-8">
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
          </div>
        </div>

        <div className="animate-rise order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="rounded-[2rem] border border-cream/20 bg-cream/10 p-2 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.55)] backdrop-blur-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[calc(2rem-0.5rem)] bg-charcoal">
              <Image
                src={profile.image}
                alt="Zaynab Omobolanle Abdussalam, Associate Lawyer"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 420px"
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </LawBackground>
  );
}
