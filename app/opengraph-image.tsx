import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Muhammad Zeeshan - Frontend Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #030712 0%, #1e1b4b 50%, #030712 100%)",
          color: "white",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            background: "linear-gradient(135deg, #818cf8, #a78bfa)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Muhammad Zeeshan
        </div>
        <div style={{ fontSize: 32, marginTop: 16, color: "#94a3b8" }}>
          Frontend Developer
        </div>
        <div style={{ fontSize: 20, marginTop: 32, color: "#64748b" }}>
          React · Next.js · TypeScript
        </div>
      </div>
    ),
    { ...size },
  );
}
