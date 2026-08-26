import type { Metadata } from "next";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { profile } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Experience",
  description: `Professional experience of ${profile.shortName} across energy, corporate advisory, and dispute resolution.`,
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Experience"
          title="Practice shaped by high-stakes energy and commercial work"
          description="From regulatory opinions for international operators to multi-billion naira disputes, a record of careful drafting and decisive advocacy."
        />
      </ScrollReveal>
      <ExperienceTimeline />
    </div>
  );
}
