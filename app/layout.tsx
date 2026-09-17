import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.t2tskillfoundation.org";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "T2T Skill Foundation | Skill Development & Training",
  description: "Vocational skill development, inclusive training and career opportunities by T2T Skill Foundation.",
  manifest: `${siteUrl}/site.webmanifest`,
  icons: {
    icon: [
      { url: `${siteUrl}/favicon.ico`, sizes: "48x48" },
      { url: `${siteUrl}/favicon-48.png`, type: "image/png", sizes: "48x48" },
      { url: `${siteUrl}/favicon-96.png`, type: "image/png", sizes: "96x96" },
      { url: `${siteUrl}/favicon-192.png`, type: "image/png", sizes: "192x192" },
      { url: `${siteUrl}/icon.png`, type: "image/png", sizes: "512x512" },
    ],
    shortcut: `${siteUrl}/favicon.ico`,
    apple: [{ url: `${siteUrl}/favicon-192.png`, type: "image/png", sizes: "192x192" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
