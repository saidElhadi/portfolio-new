import type { MetadataRoute } from "next";
import { resumeData } from "../data/resume";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: resumeData.personal.portfolio,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${resumeData.personal.portfolio}/Said_Elhadi_Resume_CV.pdf`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}