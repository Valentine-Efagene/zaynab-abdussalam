import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
  headingLevel?: 1 | 2;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
  headingLevel = 2,
}: SectionHeadingProps) {
  const HeadingTag = headingLevel === 1 ? "h1" : "h2";

  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-bronze/25 bg-secondary px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-charcoal/85">
          {eyebrow}
        </span>
      ) : null}
      <HeadingTag className="font-heading text-3xl font-medium tracking-tight text-charcoal sm:text-4xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
