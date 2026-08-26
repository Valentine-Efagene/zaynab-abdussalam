import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data/portfolio";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(204,189,153,0.35),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(125,101,43,0.08),_transparent_50%)]"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-28">
        <div className="order-2 lg:order-1">
          <p className="animate-rise mb-5 inline-flex rounded-full border border-bronze/20 bg-secondary/70 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-bronze">
            Lawyer · Lagos, Nigeria
          </p>
          <h1 className="animate-rise-delay-1 font-heading text-4xl font-medium leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-[3.35rem]">
            {profile.name}
          </h1>
          <p className="animate-rise-delay-2 mt-4 text-lg text-bronze sm:text-xl">
            {profile.title}
          </p>
          <p className="animate-rise-delay-2 mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Certified Arbitrator &amp; Mediator and Insolvency Practitioner,
            advising on energy, corporate, and dispute resolution matters with a
            business-focused approach.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap gap-3">
            <Button
              size="lg"
              nativeButton={false}
              render={<Link href="/contact" />}
              className="group h-11 rounded-full bg-charcoal px-6 text-cream hover:bg-charcoal/90"
            >
              Get in Touch
              <span className="ml-2 inline-flex size-7 items-center justify-center rounded-full bg-cream/15 transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<a href={profile.cvPath} download />}
              className="h-11 rounded-full border-border bg-card/50 px-6"
            >
              <Download className="size-4" strokeWidth={1.5} />
              Download CV
            </Button>
          </div>
        </div>

        <div className="animate-rise order-1 mx-auto w-full max-w-md lg:order-2 lg:mx-0 lg:max-w-none">
          <div className="rounded-[2rem] border border-border/80 bg-secondary/40 p-2 shadow-[0_30px_80px_-40px_rgba(33,30,23,0.45)]">
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
    </section>
  );
}
