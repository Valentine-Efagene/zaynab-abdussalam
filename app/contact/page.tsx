import type { Metadata } from "next";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LawBackground } from "@/components/LawBackground";
import { SectionHeading } from "@/components/SectionHeading";
import { ScrollReveal } from "@/components/ScrollReveal";
import { profile } from "@/lib/data/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.shortName} — email, phone, and LinkedIn.`,
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
    <>
      <LawBackground
        image="/images/law/general-bg.png"
        overlayClassName="law-overlay-section"
        className="border-b border-border/40"
      >
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Available for legal opportunities and collaboration"
              description="Reach out directly by email or phone, or connect on LinkedIn."
              className="mb-0 law-section-heading"
            />
          </ScrollReveal>
        </div>
      </LawBackground>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <ScrollReveal>
          <div className="surface-bezel">
            <Card className="surface-card">
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
                    <div className="flex h-full gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-4 transition-colors duration-500 ease-premium hover:border-bronze/35 hover:bg-secondary/60">
                      <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-bronze">
                        <Icon
                          className="size-4"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
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
      </div>
    </>
  );
}
