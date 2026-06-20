import { ImageResponse } from "next/og";

export const alt = "Career Reboot | 休職中のロードマップ診断";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#1f365c",
          padding: "80px 90px",
          position: "relative",
        }}
      >
        {/* Subtle top-right accent circle */}
        <div
          style={{
            position: "absolute",
            top: -160,
            right: -160,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "rgba(96, 165, 250, 0.12)",
            display: "flex",
          }}
        />
        {/* Subtle bottom-left accent circle */}
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "rgba(56, 130, 246, 0.1)",
            display: "flex",
          }}
        />

        {/* Brand wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: "auto",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#60a5fa",
              display: "flex",
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#93c5fd",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
            }}
          >
            Career Reboot
          </span>
        </div>

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "rgba(96, 165, 250, 0.15)",
              border: "1px solid rgba(96, 165, 250, 0.4)",
              borderRadius: 100,
              padding: "8px 22px",
              width: "fit-content",
            }}
          >
            <span
              style={{
                fontSize: 20,
                color: "#93c5fd",
                fontWeight: 500,
                letterSpacing: "0.04em",
              }}
            >
              休職中のロードマップ診断
            </span>
          </div>

          {/* Headline */}
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.25,
              letterSpacing: "-0.01em",
              display: "flex",
              flexDirection: "column",
              gap: 4,
            }}
          >
            <span>5分で現在地を診断し、</span>
            <span
              style={{
                color: "#60a5fa",
              }}
            >
              あなたに合った
            </span>
            <span>次の一歩を提案します</span>
          </div>

          {/* Divider */}
          <div
            style={{
              width: 60,
              height: 3,
              background: "#3b82f6",
              borderRadius: 2,
              display: "flex",
            }}
          />

          {/* Sub text */}
          <span
            style={{
              fontSize: 26,
              color: "#94a3b8",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}
          >
            休職・回復・再始動の現在地を5フェーズで可視化
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
