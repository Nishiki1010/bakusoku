import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "bakusoku — AIで作ったアプリ、買い取ります"
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
          AIで作ったアプリ、
          <br />
          買い取ります。
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
          査定無料 / 5万〜50万円以上 / BuyApp.ai提携
        </div>
        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 18,
            color: "#999",
          }}
        >
          <span>Claude Code</span>
          <span>Cursor</span>
          <span>Manus</span>
          <span>v0</span>
          <span>Bolt</span>
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
