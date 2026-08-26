import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HomeExperience() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Practice shaped by high-stakes energy and commercial work"
            description="From regulatory opinions for international operators to multi-billion naira disputes — a record of careful drafting and decisive advocacy."
          />
        </ScrollReveal>
        <ExperienceTimeline />
        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<Link href="/experience" />}
              className="group h-11 rounded-full border-border bg-card px-6 text-charcoal hover:bg-secondary/60"
            >
              View Full Experience
              <span className="ml-2 inline-flex size-7 items-center justify-center rounded-full bg-secondary transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px">
                <ArrowUpRight
                  className="size-3.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
