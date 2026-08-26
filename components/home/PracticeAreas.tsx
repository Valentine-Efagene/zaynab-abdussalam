import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { practiceAreas } from "@/lib/data/portfolio";

export function PracticeAreas() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Practice"
          title="Focused counsel across energy, corporate, and disputes"
          description="Clear, practical advice grounded in regulatory fluency and commercial awareness."
        />
      </ScrollReveal>
      <div className="grid gap-5 sm:grid-cols-2">
        {practiceAreas.map((area, index) => (
          <ScrollReveal key={area.title} delay={index * 80}>
            <div className="h-full rounded-[1.75rem] border border-border/70 bg-secondary/30 p-1.5">
              <Card className="h-full rounded-[calc(1.75rem-0.375rem)] border-border/50 bg-card shadow-none">
                <CardHeader>
                  <CardTitle className="font-heading text-xl font-medium">
                    {area.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
