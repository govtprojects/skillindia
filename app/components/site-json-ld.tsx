const siteUrl = "https://www.t2tskillfoundation.org";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "T2T Skill Foundation",
  url: siteUrl,
  logo: `${siteUrl}/favicon-192.png`,
};

export function SiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
    />
  );
}
