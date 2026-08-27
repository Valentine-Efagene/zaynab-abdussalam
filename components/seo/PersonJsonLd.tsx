import { profile } from "@/lib/data/portfolio";
import { siteUrl } from "@/lib/metadata";

export function PersonJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title.replace(" · ", ", "),
    worksFor: {
      "@type": "Organization",
      name: profile.firm,
    },
    email: profile.email,
    telephone: profile.phone,
    image: `${siteUrl}${profile.image}`,
    url: siteUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lagos",
      addressCountry: "NG",
    },
    sameAs: [profile.linkedin],
    knowsAbout: [
      "Dispute Resolution",
      "Data Protection",
      "Energy Law",
      "Corporate Law",
      "Regulatory Compliance",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
