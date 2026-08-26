import type { Metadata } from "next";
import { LawBackground } from "@/components/LawBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PublicationList } from "@/components/publications/PublicationList";
import { profile } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Publications",
  description: `Publications and research by ${profile.shortName} on energy, commercial, and public law.`,
};

export default function PublicationsPage() {
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
              eyebrow="Writing"
              title="Thought leadership across energy and commercial law"
              className="mb-0 law-section-heading"
            />
          </ScrollReveal>
        </div>
      </LawBackground>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <PublicationList />
      </div>
    </>
  );
}
