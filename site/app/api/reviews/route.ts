import { NextRequest, NextResponse } from "next/server";
import { getTradeBySlug } from "@/lib/trades";
import fs from "fs";
import path from "path";

const REVIEWS_PATH = path.join(process.cwd(), "data", "reviews.json");

// Simple in-memory rate limiting
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 3600000 }); // 1 hour
    return false;
  }
  entry.count++;
  return entry.count > 3;
}

function generateId(): string {
  const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  let id = "r_";
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many reviews submitted. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { slug, author, rating, text } = body;

    // Validate slug
    if (!slug || !getTradeBySlug(slug)) {
      return NextResponse.json(
        { error: "Tradesperson not found." },
        { status: 400 }
      );
    }

    // Validate rating
    const ratingNum = Number(rating);
    if (!ratingNum || ratingNum < 1 || ratingNum > 5 || !Number.isInteger(ratingNum)) {
      return NextResponse.json(
        { error: "Rating must be between 1 and 5." },
        { status: 400 }
      );
    }

    // Validate author
    if (!author || typeof author !== "string" || author.trim().length < 1 || author.trim().length > 50) {
      return NextResponse.json(
        { error: "Please enter your name (max 50 characters)." },
        { status: 400 }
      );
    }

    // Validate text
    if (!text || typeof text !== "string" || text.trim().length < 20 || text.trim().length > 500) {
      return NextResponse.json(
        { error: "Review must be between 20 and 500 characters." },
        { status: 400 }
      );
    }

    // Basic spam check
    if (/https?:\/\//i.test(text)) {
      return NextResponse.json(
        { error: "Reviews cannot contain links." },
        { status: 400 }
      );
    }

    // Read existing reviews
    let reviews: Record<string, any[]> = {};
    try {
      const data = fs.readFileSync(REVIEWS_PATH, "utf-8");
      reviews = JSON.parse(data);
    } catch {
      reviews = {};
    }

    // Create review
    const review = {
      id: generateId(),
      author: author.trim(),
      rating: ratingNum,
      text: text.trim(),
      date: new Date().toISOString().split("T")[0],
      source: "tradehub" as const,
      approved: true,
    };

    // Append
    if (!reviews[slug]) {
      reviews[slug] = [];
    }
    reviews[slug].push(review);

    // Write
    fs.writeFileSync(REVIEWS_PATH, JSON.stringify(reviews, null, 2));

    return NextResponse.json({ success: true, review });
  } catch (error) {
    console.error("Review submission error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
