import type { Metadata } from "next";
import { SiteJsonLd } from "./components/site-json-ld";
import { getSiteUrl, siteDescription, siteName } from "../lib/site-config";
import "./globals.css";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: `${siteName} | Skill Development & Training`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  alternates: {
    canonical: "./",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    url: siteUrl.origin,
    siteName,
    locale: "en_IN",
    title: `${siteName} | Skill Development & Training`,
    description: siteDescription,
  },
  twitter: {
    card: "summary",
    title: `${siteName} | Skill Development & Training`,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        {children}
      </body>
    </html>
  );
}
