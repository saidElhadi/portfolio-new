import type { MetadataRoute } from "next";
import { resumeData } from "../data/resume";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${resumeData.personal.portfolio}/sitemap.xml`,
    host: resumeData.personal.portfolio,
  };
}