import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { publications } from "@/lib/data/portfolio";

interface PublicationGridProps {
  limit?: number;
}

export function PublicationGrid({ limit }: PublicationGridProps) {
  const items = limit ? publications.slice(0, limit) : publications;

  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((pub, index) => {
        const hasUrl = Boolean(pub.url && !pub.url.endsWith("g="));
        const card = (
          <div className="surface-bezel h-full transition-colors duration-500 ease-premium group-hover:border-bronze/30">
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
                  {hasUrl ? "Read on Lexology" : "Link forthcoming"}
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
                {card}
              </Link>
            ) : (
              <div className="group h-full">{card}</div>
            )}
          </ScrollReveal>
        );
      })}
    </div>
  );
}
