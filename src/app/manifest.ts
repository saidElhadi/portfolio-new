import type { MetadataRoute } from "next";
import { resumeData } from "../data/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${resumeData.personal.name} Portfolio`,
    short_name: resumeData.personal.name,
    description:
      "Full-stack developer and AI researcher portfolio for Said Elhadi.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#e9e7e1",
    theme_color: "#bd482f",
    categories: ["portfolio", "technology", "developer"],
  };
}