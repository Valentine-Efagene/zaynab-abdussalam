import type { Metadata } from "next";
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
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Writing"
          title="Thought leadership across energy and commercial law"
        />
      </ScrollReveal>
      <PublicationList />
    </div>
  );
}
