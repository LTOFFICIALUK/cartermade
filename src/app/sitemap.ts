import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/work", "/approach", "/about", "/contact", "/privacy", "/cookies"];

  return paths.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" || path === "/work" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/work" || path === "/contact" ? 0.9 : 0.6,
  }));
}
