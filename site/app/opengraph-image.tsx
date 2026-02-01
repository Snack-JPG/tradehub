import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "TradeHub - Find Trusted Tradespeople in the West Midlands";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
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
          backgroundColor: "#1e293b",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 900,
            color: "white",
            marginBottom: 20,
          }}
        >
          Trade<span style={{ color: "#16a34a" }}>Hub</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 40,
            color: "#cbd5e1",
            textAlign: "center",
          }}
        >
          Find Trusted Tradespeople in the West Midlands
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            gap: 20,
          }}
        >
          {["Plumbers", "Electricians", "Builders", "Roofers"].map((trade) => (
            <div
              key={trade}
              style={{
                display: "flex",
                backgroundColor: "#16a34a",
                color: "white",
                padding: "12px 24px",
                borderRadius: 8,
                fontSize: 24,
                fontWeight: 600,
              }}
            >
              {trade}
            </div>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
