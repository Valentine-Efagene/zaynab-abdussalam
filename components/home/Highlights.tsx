import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ScrollReveal";
import { highlights } from "@/lib/data/portfolio";

export function Highlights() {
  return (
    <section className="border-y border-border/60 bg-charcoal">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
            <p className="max-w-xs font-heading text-2xl text-cream">
              Distinctions that define the practice
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <Badge
                  key={item.label}
                  variant="secondary"
                  className="rounded-full border border-gold/30 bg-cream/10 px-4 py-2 text-sm font-normal text-cream"
                >
                  <span className="font-medium">{item.label}</span>
                  <span className="mx-2 text-cream/40">·</span>
                  <span className="text-cream/70">{item.detail}</span>
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
