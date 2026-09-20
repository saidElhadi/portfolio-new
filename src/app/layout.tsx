import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { resumeData } from "../data/resume";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = new URL(resumeData.personal.portfolio);
const title = `${resumeData.personal.name} | Full-Stack Developer & AI Researcher`;
const description =
  "Portfolio of Said Elhadi, a full-stack developer and published AI researcher in Shenzhen working on Next.js, React, computer vision, Wi-Fi sensing, and machine learning systems.";

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: title,
    template: `%s | ${resumeData.personal.name}`,
  },
  description,
  applicationName: `${resumeData.personal.name} Portfolio`,
  authors: [{ name: resumeData.personal.name, url: siteUrl }],
  creator: resumeData.personal.name,
  publisher: resumeData.personal.name,
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Said Elhadi",
    "Said Elhadi portfolio",
    "full-stack developer Shenzhen",
    "AI researcher",
    "machine learning engineer",
    "Next.js developer",
    "React developer",
    "Wi-Fi sensing research",
    "computer vision developer",
    "GitHub Said Elhadi",
    "Instagram super.sa1d",
  ],
  openGraph: {
    type: "profile",
    url: "/",
    title,
    description,
    siteName: `${resumeData.personal.name} Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@SaidElhadi8662",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
