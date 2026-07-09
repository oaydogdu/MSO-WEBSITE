import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";

const baseUrl = "https://msonet.org";

const staticRoutes = [
  "",
  "/hizmetlerimiz",
  "/sektorler",
  "/hakkimizda",
  "/ekibimiz",
  "/miras-vizyon",
  "/yayinlarimiz",
  "/iletisim",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const articleEntries = articles.map((article) => ({
    url: `${baseUrl}/yayinlarimiz/${article.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...articleEntries];
}
