import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "weekly" | "monthly" | "daily";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries: SitemapEntry[] = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/shop", changefreq: "daily", priority: "0.9" },
          { path: "/seller", changefreq: "weekly", priority: "0.7" },
          { path: "/product/acoustics-x1", changefreq: "weekly", priority: "0.6" },
          { path: "/product/lumina-orb", changefreq: "weekly", priority: "0.6" },
          { path: "/product/solid-slate", changefreq: "weekly", priority: "0.6" },
          { path: "/product/chrono-ti", changefreq: "weekly", priority: "0.6" },
          { path: "/product/dark-pour", changefreq: "weekly", priority: "0.6" },
          { path: "/product/fluid-chair", changefreq: "weekly", priority: "0.6" },
        ];

        const urls = entries.map(
          (e) =>
            `  <url><loc>${BASE_URL}${e.path}</loc><changefreq>${e.changefreq}</changefreq><priority>${e.priority}</priority></url>`,
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
