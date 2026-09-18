import { getSiteUrl, siteName } from "../../lib/site-config";

export function SiteJsonLd() {
  const siteUrl = getSiteUrl();
  const logoUrl = new URL("/icon.png", siteUrl).toString();

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl.origin,
    logo: logoUrl,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
