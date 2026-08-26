import type { Metadata } from "next";
import { LawBackground } from "@/components/LawBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { createPageMetadata } from "@/lib/metadata";
import { profile } from "@/lib/data/portfolio";

export const metadata: Metadata = createPageMetadata({
  title: "Experience",
  description: `Professional experience of ${profile.shortName} across energy, corporate advisory, and dispute resolution.`,
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <LawBackground
        image="/images/law/general-bg.png"
        overlayClassName="law-overlay-section"
        className="border-b border-border/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Experience"
              title="Practice shaped by high-stakes energy and commercial work"
              description="From regulatory opinions for international operators to multi-billion naira disputes, a record of careful drafting and decisive advocacy."
              headingLevel={1}
              className="mb-0 law-section-heading"
            />
          </ScrollReveal>
        </div>
      </LawBackground>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ExperienceTimeline />
      </div>
    </>
  );
}
