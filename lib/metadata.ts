import type { Metadata } from "next";
import { profile } from "@/lib/data/portfolio";

export const siteUrl = "https://zaynababdussalam.com";

export const siteDescription = `${profile.title} at ${profile.firm}. Certified Arbitrator & Mediator based in ${profile.locationShort}.`;

export const ogImage = {
  url: profile.image,
  width: 640,
  height: 640,
  alt: `${profile.name}, Associate Lawyer`,
  type: "image/jpeg",
} as const;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.shortName} | Lawyer Portfolio`,
    template: `%s | ${profile.shortName}`,
  },
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${profile.shortName} | Lawyer Portfolio`,
    description: siteDescription,
    type: "website",
    url: siteUrl,
    siteName: profile.shortName,
    locale: "en_GB",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} | Lawyer Portfolio`,
    description: siteDescription,
    images: [profile.image],
  },
};

export function createPageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: `/${string}` | "/";
}): Metadata {
  const canonical = path === "/" ? siteUrl : `${siteUrl}${path}`;
  const pageTitle =
    path === "/" ? `${profile.shortName} | Lawyer Portfolio` : `${title} | ${profile.shortName}`;

  return {
    title: path === "/" ? { absolute: pageTitle } : title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageTitle,
      description,
      url: canonical,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [profile.image],
    },
  };
}
