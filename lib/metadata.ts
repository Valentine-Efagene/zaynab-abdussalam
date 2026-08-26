import type { Metadata } from "next";
import { profile } from "@/lib/data/portfolio";

const siteUrl = "https://zaynababdussalam.com";

export const ogImage = {
  url: profile.image,
  width: 640,
  height: 640,
  alt: `${profile.name}, Associate Lawyer`,
  type: "image/jpeg",
} as const;

const openGraphDescription = `${profile.title} at ${profile.firm}. Certified Arbitrator & Mediator.`;

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.shortName} | Lawyer Portfolio`,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.bio,
  openGraph: {
    title: `${profile.shortName} | Lawyer Portfolio`,
    description: openGraphDescription,
    type: "website",
    url: siteUrl,
    siteName: profile.shortName,
    locale: "en_GB",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.shortName} | Lawyer Portfolio`,
    description: openGraphDescription,
    images: [profile.image],
  },
};
