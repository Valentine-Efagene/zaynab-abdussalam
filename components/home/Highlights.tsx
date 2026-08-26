import { LawBackground } from "@/components/LawBackground";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { highlights } from "@/lib/data/portfolio";

export function Highlights() {
  return (
    <LawBackground
      image="/images/law/footer-bg.png"
      overlayClassName="law-overlay-parchment"
      imagePosition="right center"
      imageSize="cover"
      className="border-y border-border/60"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Distinctions"
            title="Distinctions that define the practice"
            className="mb-10 sm:mb-12"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.label} className="surface-bezel h-full">
                <div className="surface-card flex h-full flex-col justify-center bg-background/92 px-5 py-5 backdrop-blur-[1px]">
                  <p className="font-heading text-lg font-medium text-charcoal">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </LawBackground>
  );
}
