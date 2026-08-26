"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { experience } from "@/lib/data/portfolio";

export function ExperienceTimeline() {
  return (
    <div className="relative space-y-10">
      <div
        aria-hidden
        className="absolute top-3 bottom-3 left-[0.7rem] hidden w-px bg-border md:block"
      />
      {experience.map((role, index) => {
        const isCurrent = index === 0;
        return (
          <ScrollReveal key={role.firm} delay={index * 60}>
            <article className="relative md:pl-12">
              <span
                aria-hidden
                className="absolute top-6 left-0 hidden size-3 rounded-full border-2 border-bronze bg-cream md:block"
              />
              <div className="surface-bezel h-full">
                <Card className="surface-card">
                  <CardHeader className="gap-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="rounded-full bg-secondary text-bronze"
                      >
                        {role.period}
                      </Badge>
                      {isCurrent ? (
                        <Badge className="rounded-full bg-charcoal text-cream">
                          Current
                        </Badge>
                      ) : null}
                    </div>
                    <CardTitle className="font-heading text-2xl font-medium">
                      {role.role}
                    </CardTitle>
                    <CardDescription className="text-base text-charcoal/80">
                      {role.firm} · {role.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isCurrent ? (
                      <Accordion
                        multiple
                        defaultValue={[role.teams[0]?.name ?? ""]}
                        className="w-full"
                      >
                        {role.teams.map((team) => (
                          <AccordionItem key={team.name} value={team.name}>
                            <AccordionTrigger className="font-heading text-base hover:no-underline">
                              {team.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              <ul className="space-y-3 pb-2 text-sm leading-relaxed text-muted-foreground">
                                {team.highlights.map((point) => (
                                  <li key={point} className="flex gap-2.5">
                                    <span
                                      className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                                      aria-hidden="true"
                                    />
                                    <span>{point}</span>
                                  </li>
                                ))}
                              </ul>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    ) : (
                      <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                        {role.teams[0]?.highlights.map((point) => (
                          <li key={point} className="flex gap-2.5">
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              </div>
            </article>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
