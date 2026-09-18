/** Canonical production URL — must match the domain Google indexes (www or non-www). */
const DEFAULT_SITE_URL = "https://www.t2tskillfoundation.org";

export const siteName = "T2T Skill Foundation";

export const siteDescription =
  "Vocational skill development, inclusive training and career opportunities by T2T Skill Foundation.";

export function getSiteUrl(): URL {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) {
    return new URL(explicit.endsWith("/") ? explicit : `${explicit}/`);
  }
  if (process.env.VERCEL_URL) {
    return new URL(`https://${process.env.VERCEL_URL}/`);
  }
  return new URL(DEFAULT_SITE_URL.endsWith("/") ? DEFAULT_SITE_URL : `${DEFAULT_SITE_URL}/`);
}
