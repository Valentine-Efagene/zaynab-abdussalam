import type { Metadata } from "next";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.shortName} — email, phone, LinkedIn, and CV download.`,
};

const contactItems = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    icon: ExternalLink,
    external: true,
  },
  {
    label: "Location",
    value: profile.location,
    href: undefined,
    icon: MapPin,
  },
] as const;

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          eyebrow="Contact"
          title="Available for legal opportunities and collaboration"
          description="Reach out directly by email or phone, or connect on LinkedIn. A full curriculum vitae is available for download."
        />
      </ScrollReveal>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <ScrollReveal>
          <div className="rounded-[1.75rem] border border-border/70 bg-secondary/30 p-1.5">
            <Card className="rounded-[calc(1.75rem-0.375rem)] border-border/50 bg-card shadow-none">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-medium">
                  Direct channels
                </CardTitle>
                <CardDescription className="text-base">
                  Prefer a conversation? Email and phone are the fastest routes.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex h-full gap-3 rounded-2xl border border-border/60 bg-cream/50 p-4 transition-colors duration-500 ease-premium hover:border-bronze/35 hover:bg-cream">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-bronze">
                        <Icon className="size-4" strokeWidth={1.5} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-bronze">
                          {item.label}
                        </p>
                        <p className="mt-1 break-words text-sm font-medium text-charcoal sm:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  if (!item.href) {
                    return <div key={item.label}>{content}</div>;
                  }

                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      {...("external" in item && item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="block"
                    >
                      {content}
                    </a>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="rounded-[1.75rem] border border-border/70 bg-charcoal p-1.5 text-cream">
            <div className="flex h-full flex-col justify-between rounded-[calc(1.75rem-0.375rem)] bg-charcoal px-6 py-8 sm:px-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold">
                  Curriculum Vitae
                </p>
                <h3 className="mt-3 font-heading text-2xl font-medium">
                  Download the full CV
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/70">
                  Includes education, experience, awards, publications, and
                  professional memberships in PDF format.
                </p>
              </div>
              <Button
                size="lg"
                nativeButton={false}
                render={<a href={profile.cvPath} download />}
                className="mt-8 h-11 w-full rounded-full bg-gold text-charcoal hover:bg-gold/90"
              >
                <Download className="size-4" strokeWidth={1.5} />
                Download CV
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
