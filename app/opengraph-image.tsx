import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Mohammad Kaif — Developer Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #1a0533 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              color: "#a855f6",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            Mohammad Kaif
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#e2e8f0",
              margin: 0,
              textAlign: "center",
              maxWidth: "800px",
            }}
          >
            CS Student &bull; Developer &bull; Problem Solver
          </p>
          <p
            style={{
              fontSize: "20px",
              color: "#94a3b8",
              margin: 0,
            }}
          >
            new-portfolio-tan-seven.vercel.app
          </p>
        </div>
      </div>
    ),
    { ...size }
  );
}
