import type { MetadataRoute } from "next";

// Falls back to the domain already used sitewide in mailto links
// (hello@technogurukul.com) if a deployment env var isn't set.
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://technogurukul.com";

// Only the real, content-bearing TechnoGurukul routes — deliberately
// excludes the unused Eduan-template demo routes still present in
// src/app (home-2..10, course, event, gallery, price, sign-in, etc.),
// since listing those would misrepresent them as real indexable pages.
const routes = [
  "",
  "/programs",
  "/about",
  "/how-we-teach",
  "/curriculum",
  "/career-paths",
  "/trainer",
  "/admissions",
  "/faq",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
