import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { publications, researchWorks } from "@/lib/data/portfolio";

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
        <div className="grid gap-5 md:grid-cols-2">
          {publications.map((pub, index) => {
            const hasUrl = Boolean(pub.url && !pub.url.endsWith("g="));
            const CardInner = (
              <div className="h-full rounded-[1.75rem] border border-border/70 bg-secondary/30 p-1.5 transition-colors duration-500 ease-premium group-hover:border-bronze/40">
                <Card className="surface-card h-full">
                  <CardHeader className="gap-3">
                    <div className="flex items-center justify-between gap-3">
                      <Badge
                        variant="secondary"
                        className="rounded-full bg-secondary text-bronze"
                      >
                        {pub.source} · {pub.year}
                      </Badge>
                      {hasUrl ? (
                        <span className="inline-flex size-8 items-center justify-center rounded-full bg-secondary text-charcoal transition-transform duration-500 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-px">
                          <ArrowUpRight
                            className="size-4"
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </span>
                      ) : null}
                    </div>
                    <CardTitle className="font-heading text-lg font-medium leading-snug">
                      {pub.title}
                    </CardTitle>
                    <CardDescription>
                      {hasUrl
                        ? "Read on Lexology"
                        : "Link forthcoming"}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            );

            return (
              <ScrollReveal key={pub.title} delay={index * 70}>
                {hasUrl ? (
                  <Link
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    {CardInner}
                  </Link>
                ) : (
                  <div className="group h-full">{CardInner}</div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <section>
        <ScrollReveal>
          <SectionHeading
            eyebrow="Research"
            title="Selected research works"
            description="Academic and professional research spanning land law, foreign judgments, and energy markets."
          />
        </ScrollReveal>
        <div className="rounded-[1.75rem] border border-border/70 bg-secondary/30 p-1.5">
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
