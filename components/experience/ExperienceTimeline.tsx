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
import { cn } from "@/lib/utils";

export function ExperienceTimeline() {
  return (
    <ol className="space-y-10 md:space-y-12">
      {experience.map((role, index) => {
        const isCurrent = index === 0;
        const isLast = index === experience.length - 1;

        return (
          <ScrollReveal key={`${role.firm}-${role.period}`} delay={index * 60}>
            <li className="grid md:grid-cols-[1.75rem_minmax(0,1fr)] md:items-stretch md:gap-6">
              <div
                aria-hidden
                className="relative hidden md:flex md:justify-center"
              >
                {!isLast ? (
                  <span className="absolute top-[2.375rem] bottom-[-2.5rem] left-1/2 w-px -translate-x-1/2 bg-border md:bottom-[-3rem]" />
                ) : null}
                <span
                  className={cn(
                    "relative z-10 mt-8 size-3 shrink-0 rounded-full border-2 border-bronze bg-cream ring-[3px] ring-background",
                    isCurrent && "size-3.5 border-bronze bg-gold/40",
                  )}
                />
              </div>

              <article className="min-w-0">
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
            </li>
          </ScrollReveal>
        );
      })}
    </ol>
  );
}
