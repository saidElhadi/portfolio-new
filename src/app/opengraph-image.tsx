import { ImageResponse } from "next/og";
import { resumeData } from "../data/resume";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#e9e7e1",
          color: "#222522",
          padding: "64px",
          border: "24px solid #bd482f",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 8, color: "#bd482f" }}>
          FULL-STACK DEVELOPER / AI RESEARCHER
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 118, lineHeight: 0.9, fontWeight: 700 }}>
            {resumeData.personal.name}
          </div>
          <div style={{ maxWidth: 880, fontSize: 34, lineHeight: 1.25 }}>
            Next.js, machine learning, computer vision, and Wi-Fi sensing research from Shenzhen.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28 }}>
          <span>github.com/saidElhadi</span>
          <span>instagram.com/super.sa1d</span>
        </div>
      </div>
    ),
    size,
  );
}