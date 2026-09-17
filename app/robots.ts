import type { MetadataRoute } from "next";

const siteUrl = "https://www.t2tskillfoundation.org";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
