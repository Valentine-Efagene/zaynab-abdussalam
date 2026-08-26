import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicationGrid } from "@/components/publications/PublicationGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";

export function HomePublications() {
  return (
    <section className="section-band-light border-b border-border/70">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Publications"
            title="Thought leadership across energy and commercial law"
            description="Selected Lexology commentary on regulation, constitutional interpretation, and employment law in Nigeria."
          />
        </ScrollReveal>
        <PublicationGrid />
        <ScrollReveal>
          <div className="mt-12 flex justify-center">
            <Button
              variant="outline"
              size="lg"
              nativeButton={false}
              render={<Link href="/publications" />}
              className="group h-11 rounded-full border-border bg-background px-6 text-charcoal hover:bg-secondary/60"
            >
              View All Publications
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
