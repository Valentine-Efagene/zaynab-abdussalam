import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3, Geist_Mono } from "next/font/google";
import { PersonJsonLd } from "@/components/seo/PersonJsonLd";
import { SiteShell } from "@/components/layout/SiteShell";
import { siteMetadata } from "@/lib/metadata";
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

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${sourceSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <PersonJsonLd />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
