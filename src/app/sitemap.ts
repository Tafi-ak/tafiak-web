import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://tafiak.com";

  const routes = [
    "",
    "/now",
    "/tafiak",
    "/blog",
    "/olympiad",
    "/program",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-11-24"),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
