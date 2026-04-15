import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "bakusoku — 「作って終わり」を、終わりにする。"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            fontSize: 18,
            fontWeight: 500,
            color: "#999",
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            marginBottom: 24,
          }}
        >
          Builder Challenge
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "#000",
            marginBottom: 24,
            letterSpacing: "0.05em",
          }}
        >
          bakusoku
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 900,
            color: "#000",
            textAlign: "center",
            lineHeight: 1.3,
            marginBottom: 32,
          }}
        >
          「作って終わり」を、
          <br />
          終わりにする。
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#666",
            textAlign: "center",
            lineHeight: 1.6,
            marginBottom: 40,
          }}
        >
          フィードバック / 買い取り / 仕事
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 16,
            color: "#aaa",
          }}
        >
          キャナルAI — Team Energy Group
        </div>
      </div>
    ),
    { ...size }
  )
}
