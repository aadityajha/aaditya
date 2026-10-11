import type { MetadataRoute } from "next";
import { projects, siteConfig } from "@/lib/site";

const siteUrl = siteConfig.url.replace(/\/+$/, "");

export default function sitemap(): MetadataRoute.Sitemap {
  const fixedRoutes = [
    {
      path: "",
      priority: 1.0,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/about",
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/projects",
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      path: "/contact",
      priority: 0.6,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/privacy-policy",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
    {
      path: "/terms",
      priority: 0.3,
      changeFrequency: "yearly" as const,
    },
  ];

  const staticEntries: MetadataRoute.Sitemap = fixedRoutes.map(
    (route) => ({
      url: `${siteUrl}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    }),
  );

  const projectEntries: MetadataRoute.Sitemap = projects
    .filter((project) => Boolean(project.slug?.trim()))
    .map((project) => ({
      url: `${siteUrl}/projects/${encodeURIComponent(project.slug)}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));

  return [...staticEntries, ...projectEntries];
}