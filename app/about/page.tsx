import type { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { LawBackground } from "@/components/LawBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { createPageMetadata } from "@/lib/metadata";
import {
  associations,
  awards,
  education,
  leadership,
  profile,
} from "@/lib/data/portfolio";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description: `About ${profile.shortName} — education, awards, certifications, and leadership.`,
  path: "/about",
});

export default function AboutPage() {
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
              eyebrow="About"
              title="A first-class advocate with a commercial instinct"
              description={profile.bio}
              headingLevel={1}
              className="mb-0 law-section-heading"
            />
          </ScrollReveal>
        </div>
      </LawBackground>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ScrollReveal>
          <div className="mb-20 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <div className="surface-bezel mx-auto w-full max-w-sm">
              <div className="relative aspect-square overflow-hidden rounded-[calc(1.75rem-0.375rem)]">
                <Image
                  src={profile.image}
                  alt="Zaynab Omobolanle Abdussalam, Associate Lawyer"
                  fill
                  sizes="320px"
                  className="object-cover object-top"
                />
              </div>
            </div>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                Currently an Associate on the Energy and Natural Resources team
                at <span className="text-charcoal">{profile.firm}</span>, Zaynab
                brings first-class academic credentials and hands-on experience
                across upstream, midstream, and corporate mandates.
              </p>
              <p>
                She is a Member of the Institute of Chartered Mediators and
                Conciliators and BRIPAN, combining dispute resolution skill with
                insolvency and restructuring awareness for complex commercial
                matters.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <section className="mb-20">
          <ScrollReveal>
            <SectionHeading eyebrow="Education" title="Academic foundation" />
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-2">
            {education.map((item, index) => (
              <ScrollReveal key={item.institution} delay={index * 80}>
                <div className="surface-bezel h-full">
                <Card className="surface-card h-full">
                    <CardHeader>
                      <Badge
                        variant="secondary"
                        className="mb-2 w-fit rounded-full bg-secondary text-bronze"
                      >
                        {item.period}
                      </Badge>
                      <CardTitle className="font-heading text-xl font-medium">
                        {item.institution}
                      </CardTitle>
                      <CardDescription className="text-base text-charcoal/80">
                        {item.qualification}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm text-muted-foreground">
                      <p className="font-medium text-bronze">{item.honors}</p>
                      {"thesis" in item && item.thesis ? (
                        <p>{item.thesis}</p>
                      ) : null}
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Recognition"
              title="Awards & distinctions"
            />
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <ScrollReveal
                key={`${award.title}-${award.year}`}
                delay={index * 50}
              >
                <div className="surface-bezel h-full rounded-2xl">
                  <Card className="surface-card h-full rounded-[calc(1rem-0.125rem)]">
                    <CardHeader className="pb-3">
                      {award.year ? (
                        <p className="text-[10px] uppercase tracking-[0.18em] text-bronze">
                          {award.year}
                        </p>
                      ) : null}
                      <CardTitle className="font-heading text-lg font-medium leading-snug">
                        {award.title}
                      </CardTitle>
                    </CardHeader>
                    {"detail" in award && award.detail ? (
                      <CardContent>
                        <p className="text-sm text-muted-foreground">
                          {award.detail}
                        </p>
                      </CardContent>
                    ) : null}
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Memberships"
              title="Professional associations"
            />
          </ScrollReveal>
          <div className="surface-bezel">
            <Card className="surface-card">
              <CardContent className="grid gap-0 p-6 sm:grid-cols-2 sm:p-8">
                {associations.map((item, index) => (
                  <div key={item}>
                    <p className="py-3 text-sm leading-relaxed text-charcoal/90 sm:text-base">
                      {item}
                    </p>
                    {index < associations.length - 1 ? (
                      <Separator className="sm:hidden" />
                    ) : null}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <ScrollReveal>
            <SectionHeading
              eyebrow="Leadership"
              title="Service beyond the desk"
            />
          </ScrollReveal>
          <div className="grid gap-5 md:grid-cols-3">
            {leadership.map((item, index) => (
              <ScrollReveal key={item.role + item.org} delay={index * 80}>
                <div className="surface-bezel h-full">
                <Card className="surface-card h-full">
                    <CardHeader>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-bronze">
                        {item.period}
                      </p>
                      <CardTitle className="font-heading text-xl font-medium">
                        {item.role}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {item.org}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {item.highlights.map((point) => (
                          <li key={point} className="flex gap-2">
                            <span
                              className="mt-2 size-1 shrink-0 rounded-full bg-gold"
                              aria-hidden="true"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
