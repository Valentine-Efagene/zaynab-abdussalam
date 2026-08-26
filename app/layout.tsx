import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Geist_Mono } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import { profile } from "@/lib/data/portfolio";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaynababdussalam.com"),
  title: {
    default: `${profile.shortName} | Lawyer Portfolio`,
    template: `%s | ${profile.shortName}`,
  },
  description: profile.bio,
  openGraph: {
    title: `${profile.shortName} | Lawyer Portfolio`,
    description: `${profile.title} at ${profile.firm}. Certified Arbitrator & Mediator.`,
    type: "website",
    images: [{ url: profile.image }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
