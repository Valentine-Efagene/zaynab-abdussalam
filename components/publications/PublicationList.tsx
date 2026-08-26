import {
  Card,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PublicationGrid } from "@/components/publications/PublicationGrid";
import { researchWorks } from "@/lib/data/portfolio";

export function PublicationList() {
  return (
    <>
      <section className="mb-20">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Lexology"
            title="Published commentary"
            description="Selected articles on energy regulation, constitutional interpretation, and employment law in Nigeria."
          />
        </ScrollReveal>
        <PublicationGrid />
      </section>

      <section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research"
            title="Selected research works"
            description="Academic and professional research spanning land law, foreign judgments, and energy markets."
          />
        </ScrollReveal>
        <div className="surface-bezel">
          <Card className="surface-card">
            <ul className="divide-y divide-border/70">
              {researchWorks.map((work, index) => (
                <ScrollReveal key={work.title} delay={index * 40}>
                  <li className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8 sm:px-8">
                    <p className="font-heading text-base leading-snug text-charcoal sm:text-lg">
                      {work.title}
                    </p>
                    <Badge
                      variant="outline"
                      className="w-fit shrink-0 rounded-full border-border text-bronze"
                    >
                      {work.year}
                    </Badge>
                  </li>
                </ScrollReveal>
              ))}
            </ul>
          </Card>
        </div>
      </section>
    </>
  );
}
