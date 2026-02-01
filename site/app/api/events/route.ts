import { NextRequest, NextResponse } from 'next/server';
import { storeEvent, validateSiteId, type AnalyticsEvent } from '@/lib/analytics';

// Rate limiting: simple in-memory store (for MVP)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100; // events per minute per site
const RATE_WINDOW = 60 * 1000; // 1 minute

function checkRateLimit(siteId: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(siteId);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(siteId, {
      count: 1,
      resetTime: now + RATE_WINDOW,
    });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let event: AnalyticsEvent;

    try {
      event = await request.json();
    } catch {
      return NextResponse.json(
        { error: 'Invalid JSON' },
        { status: 400 }
      );
    }

    // Validate required fields
    if (!event.site_id || !event.event || !event.ts) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate event type
    const validEvents = [
      'page_view',
      'phone_tap',
      'whatsapp_tap',
      'form_submit',
      'email_tap',
      'directions_tap',
      'directory_click_website',
      'directory_click_phone',
      'directory_click_whatsapp',
      'directory_view_profile',
    ];

    if (!validEvents.includes(event.event)) {
      return NextResponse.json(
        { error: 'Invalid event type' },
        { status: 400 }
      );
    }

    // Validate site_id exists (skip for MVP to avoid slowdown)
    // const isValidSite = await validateSiteId(event.site_id);
    // if (!isValidSite) {
    //   return NextResponse.json(
    //     { error: 'Invalid site_id' },
    //     { status: 400 }
    //   );
    // }

    // Check rate limit
    if (!checkRateLimit(event.site_id)) {
      return NextResponse.json(
        { error: 'Rate limit exceeded' },
        { status: 429 }
      );
    }

    // Store the event
    await storeEvent(event);

    return NextResponse.json(
      { success: true },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        },
      }
    );
  } catch (error) {
    console.error('Error storing event:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Enable CORS for all origins (tracking snippet runs on client domains)
export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
