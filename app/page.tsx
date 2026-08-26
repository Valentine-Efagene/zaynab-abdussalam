import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Highlights } from "@/components/home/Highlights";
import { HomeContact } from "@/components/home/HomeContact";
import { HomePublications } from "@/components/home/HomePublications";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { createPageMetadata, siteDescription } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Home",
  description: siteDescription,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Highlights />
      <PracticeAreas />
      <HomePublications />
      <HomeContact />
    </>
  );
}
