import { Badge } from "@/components/ui/badge";
import { LawBackground } from "@/components/LawBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { highlights } from "@/lib/data/portfolio";

export function Highlights() {
  return (
    <LawBackground
      image="/images/law/general-bg.png"
      overlayClassName="law-overlay-section"
      className="border-y border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Distinctions"
            title="Distinctions that define the practice"
            className="mb-10 law-section-heading sm:mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <Badge
                key={item.label}
                variant="secondary"
                className="h-auto justify-start rounded-2xl border border-gold/30 bg-cream/10 px-5 py-4 text-sm font-normal leading-relaxed text-cream"
              >
                <span className="font-medium">{item.label}</span>
                <span className="mx-2 text-cream/40">·</span>
                <span className="text-cream/70">{item.detail}</span>
              </Badge>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </LawBackground>
  );
}
