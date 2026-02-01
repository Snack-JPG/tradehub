import { NextRequest, NextResponse } from "next/server";
import { getTradeBySlug } from "@/lib/trades";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const trade = getTradeBySlug(params.slug);
  if (!trade) {
    return NextResponse.json(null, { status: 404 });
  }
  return NextResponse.json({
    name: trade.name,
    slug: trade.slug,
    rating: trade.rating,
    review_count: trade.review_count,
    trade_type: trade.trade_type,
    area: trade.area,
    google_maps_url: (trade as any).google_maps_url || "",
  });
}
