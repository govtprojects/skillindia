import type { MetadataRoute } from "next";
import { schemes } from "./components/data";

const siteUrl = "https://www.t2tskillfoundation.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    "",
    "/about",
    "/about/introduction",
    "/about/what-we-do",
    "/about/our-team",
    "/our-work",
    "/our-work/training",
    "/our-work/placements",
    "/our-work/success-stories",
    "/our-work/achievements",
    "/student-corner",
    "/student-corner/schemes",
    "/student-corner/training-centers",
    "/schemes",
    "/training-centers",
    "/donation",
    "/contact",
    "/bal-vidyalaya",
    "/bal-vidyalaya/our-priority",
    "/bal-vidyalaya/what-we-offer",
    "/bal-vidyalaya/contact",
  ];

  return [
    ...staticRoutes.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...Object.keys(schemes).map((slug) => ({
      url: `${siteUrl}/schemes/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
