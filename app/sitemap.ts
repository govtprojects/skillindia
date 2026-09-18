import type { MetadataRoute } from "next";
import { schemes } from "./components/data";
import { getSiteUrl } from "../lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
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
      url: new URL(path, siteUrl).toString(),
      lastModified,
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.7,
    })),
    ...Object.keys(schemes).map((slug) => ({
      url: new URL(`/schemes/${slug}`, siteUrl).toString(),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
