import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Find Trusted Tradespeople";
  const subtitle = searchParams.get("subtitle") || "West Midlands";
  const type = searchParams.get("type") || "default";
  const count = searchParams.get("count") || "";
  const rating = searchParams.get("rating") || "";

  const accentColor = type === "emergency" ? "#dc2626" : "#d97706";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0f172a",
          padding: "60px",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 48,
              fontWeight: 900,
              color: "white",
            }}
          >
            Trade<span style={{ color: "#16a34a" }}>Hub</span>
          </div>
          {count && (
            <div
              style={{
                display: "flex",
                backgroundColor: accentColor,
                color: "white",
                padding: "8px 20px",
                borderRadius: 24,
                fontSize: 24,
                fontWeight: 700,
              }}
            >
              {count} listings
            </div>
          )}
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              color: "white",
              lineHeight: 1.1,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              color: "#94a3b8",
            }}
          >
            {subtitle}
          </div>
          {rating && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div style={{ display: "flex", fontSize: 28, color: "#fbbf24" }}>
                {"★".repeat(Math.round(parseFloat(rating)))}
              </div>
              <div style={{ display: "flex", fontSize: 28, color: "#94a3b8" }}>
                {rating}/5
              </div>
            </div>
          )}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", fontSize: 24, color: "#64748b" }}>
            tradehub.directory
          </div>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            {["Vetted", "Insured", "Reviewed"].map((badge) => (
              <div
                key={badge}
                style={{
                  display: "flex",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  color: "#94a3b8",
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                ✓ {badge}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
