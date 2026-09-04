import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Igor Santana Advocacia";

  return new ImageResponse(
    (
      <div
        style={{
          background: "#060608",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "80px",
          position: "relative",
        }}
      >
        {/* Gold accent line */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            right: "80px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #c8a44e, transparent)",
          }}
        />

        {/* Scale icon placeholder */}
        <div
          style={{
            fontSize: "72px",
            marginBottom: "24px",
          }}
        >
          ⚖️
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            color: "#f0ece4",
            fontFamily: "serif",
            fontWeight: 700,
            textAlign: "center",
            lineHeight: 1.2,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#c8a44e",
            marginTop: "16px",
            fontFamily: "sans-serif",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Advocacia Trabalhista
        </div>

        {/* Description */}
        <div
          style={{
            fontSize: "20px",
            color: "#9a9590",
            marginTop: "24px",
            fontFamily: "sans-serif",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Defendemos os direitos dos trabalhadores com transparência, ética e excelência.
        </div>

        {/* Bottom accent */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            left: "80px",
            right: "80px",
            height: "2px",
            background: "linear-gradient(90deg, transparent, #c8a44e, transparent)",
          }}
        />
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
