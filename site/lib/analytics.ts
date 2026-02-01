import fs from 'fs/promises';
import path from 'path';

export type EventType =
  | 'page_view'
  | 'phone_tap'
  | 'whatsapp_tap'
  | 'form_submit'
  | 'email_tap'
  | 'directions_tap'
  | 'directory_click_website'
  | 'directory_click_phone'
  | 'directory_click_whatsapp'
  | 'directory_view_profile';

export interface AnalyticsEvent {
  site_id: string;
  event: EventType;
  ts: number;
  ref: string;
  src: string;
  device: 'mobile' | 'desktop' | 'tablet';
  path: string;
  ua_class: string;
}

export interface EventRecord extends AnalyticsEvent {
  id: string;
  created_at: string;
}

export interface MetricsSummary {
  phone_taps: number;
  whatsapp_taps: number;
  form_submits: number;
  email_taps: number;
  directions_taps: number;
  page_views: number;
  total_leads: number;
  directory_clicks_website: number;
  directory_clicks_phone: number;
  directory_clicks_whatsapp: number;
  directory_views_profile: number;
}

export interface SourceBreakdown {
  [source: string]: number;
}

export interface DeviceBreakdown {
  mobile: number;
  desktop: number;
  tablet: number;
}

export interface DailyMetric {
  date: string;
  count: number;
}

// Storage path for events
const EVENTS_DIR = path.join(process.cwd(), 'data', 'analytics');

/**
 * Ensure analytics directory exists
 */
async function ensureAnalyticsDir() {
  try {
    await fs.mkdir(EVENTS_DIR, { recursive: true });
  } catch (error) {
    console.error('Failed to create analytics directory:', error);
  }
}

/**
 * Get events file path for a site and month
 */
function getEventsFilePath(siteId: string, year: number, month: number): string {
  const monthStr = String(month).padStart(2, '0');
  return path.join(EVENTS_DIR, `${siteId}-${year}-${monthStr}.jsonl`);
}

/**
 * Store an analytics event
 */
export async function storeEvent(event: AnalyticsEvent): Promise<void> {
  await ensureAnalyticsDir();

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  const record: EventRecord = {
    ...event,
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    created_at: now.toISOString(),
  };

  const filePath = getEventsFilePath(event.site_id, year, month);
  const line = JSON.stringify(record) + '\n';

  await fs.appendFile(filePath, line, 'utf-8');
}

/**
 * Read events for a site within a date range
 */
export async function getEvents(
  siteId: string,
  startDate: Date,
  endDate: Date
): Promise<EventRecord[]> {
  await ensureAnalyticsDir();

  const events: EventRecord[] = [];
  const startTime = startDate.getTime() / 1000;
  const endTime = endDate.getTime() / 1000;

  // Determine which month files to read
  const monthsToRead: Array<{ year: number; month: number }> = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    monthsToRead.push({
      year: current.getFullYear(),
      month: current.getMonth() + 1,
    });
    current.setMonth(current.getMonth() + 1);
  }

  // Read and parse each month file
  for (const { year, month } of monthsToRead) {
    const filePath = getEventsFilePath(siteId, year, month);

    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const lines = content.trim().split('\n').filter(Boolean);

      for (const line of lines) {
        try {
          const event = JSON.parse(line) as EventRecord;
          if (event.ts >= startTime && event.ts <= endTime) {
            events.push(event);
          }
        } catch {
          // Skip malformed lines
        }
      }
    } catch (error) {
      // File doesn't exist or can't be read - that's fine
      continue;
    }
  }

  return events;
}

/**
 * Get metrics summary for a site
 */
export async function getMetricsSummary(
  siteId: string,
  startDate: Date,
  endDate: Date
): Promise<MetricsSummary> {
  const events = await getEvents(siteId, startDate, endDate);

  const metrics: MetricsSummary = {
    phone_taps: 0,
    whatsapp_taps: 0,
    form_submits: 0,
    email_taps: 0,
    directions_taps: 0,
    page_views: 0,
    total_leads: 0,
    directory_clicks_website: 0,
    directory_clicks_phone: 0,
    directory_clicks_whatsapp: 0,
    directory_views_profile: 0,
  };

  for (const event of events) {
    switch (event.event) {
      case 'phone_tap':
        metrics.phone_taps++;
        metrics.total_leads++;
        break;
      case 'whatsapp_tap':
        metrics.whatsapp_taps++;
        metrics.total_leads++;
        break;
      case 'form_submit':
        metrics.form_submits++;
        metrics.total_leads++;
        break;
      case 'email_tap':
        metrics.email_taps++;
        metrics.total_leads++;
        break;
      case 'directions_tap':
        metrics.directions_taps++;
        break;
      case 'page_view':
        metrics.page_views++;
        break;
      case 'directory_click_website':
        metrics.directory_clicks_website++;
        break;
      case 'directory_click_phone':
        metrics.directory_clicks_phone++;
        metrics.total_leads++;
        break;
      case 'directory_click_whatsapp':
        metrics.directory_clicks_whatsapp++;
        metrics.total_leads++;
        break;
      case 'directory_view_profile':
        metrics.directory_views_profile++;
        break;
    }
  }

  return metrics;
}

/**
 * Get traffic source breakdown
 */
export async function getSourceBreakdown(
  siteId: string,
  startDate: Date,
  endDate: Date
): Promise<SourceBreakdown> {
  const events = await getEvents(siteId, startDate, endDate);
  const sources: SourceBreakdown = {};

  for (const event of events) {
    if (event.event === 'page_view') {
      sources[event.src] = (sources[event.src] || 0) + 1;
    }
  }

  return sources;
}

/**
 * Get device breakdown
 */
export async function getDeviceBreakdown(
  siteId: string,
  startDate: Date,
  endDate: Date
): Promise<DeviceBreakdown> {
  const events = await getEvents(siteId, startDate, endDate);
  const devices: DeviceBreakdown = {
    mobile: 0,
    desktop: 0,
    tablet: 0,
  };

  for (const event of events) {
    if (event.event === 'page_view') {
      devices[event.device]++;
    }
  }

  return devices;
}

/**
 * Get daily lead trend
 */
export async function getDailyLeadTrend(
  siteId: string,
  startDate: Date,
  endDate: Date
): Promise<DailyMetric[]> {
  const events = await getEvents(siteId, startDate, endDate);
  const dailyCount: { [date: string]: number } = {};

  const leadEvents = ['phone_tap', 'whatsapp_tap', 'form_submit', 'email_tap'];

  for (const event of events) {
    if (leadEvents.includes(event.event)) {
      const date = new Date(event.ts * 1000).toISOString().split('T')[0];
      dailyCount[date] = (dailyCount[date] || 0) + 1;
    }
  }

  // Fill in missing days with 0
  const result: DailyMetric[] = [];
  const current = new Date(startDate);
  while (current <= endDate) {
    const dateStr = current.toISOString().split('T')[0];
    result.push({
      date: dateStr,
      count: dailyCount[dateStr] || 0,
    });
    current.setDate(current.getDate() + 1);
  }

  return result;
}

/**
 * Get all sites with analytics data
 */
export async function getAllSitesWithMetrics(
  startDate: Date,
  endDate: Date
): Promise<Array<{ siteId: string; metrics: MetricsSummary }>> {
  await ensureAnalyticsDir();

  try {
    const files = await fs.readdir(EVENTS_DIR);
    const siteIds = new Set<string>();

    // Extract unique site IDs from filenames
    for (const file of files) {
      if (file.endsWith('.jsonl')) {
        const siteId = file.split('-')[0];
        siteIds.add(siteId);
      }
    }

    // Get metrics for each site
    const results = await Promise.all(
      Array.from(siteIds).map(async (siteId) => ({
        siteId,
        metrics: await getMetricsSummary(siteId, startDate, endDate),
      }))
    );

    return results;
  } catch {
    return [];
  }
}

/**
 * Validate site ID exists
 */
export async function validateSiteId(siteId: string): Promise<boolean> {
  try {
    const tradesPath = path.join(process.cwd(), 'data', 'trades.json');
    const content = await fs.readFile(tradesPath, 'utf-8');
    const trades = JSON.parse(content);
    return trades.some((trade: any) => trade.slug === siteId);
  } catch {
    return false;
  }
}

/**
 * Get site info by ID
 */
export async function getSiteInfo(siteId: string): Promise<any> {
  try {
    const tradesPath = path.join(process.cwd(), 'data', 'trades.json');
    const content = await fs.readFile(tradesPath, 'utf-8');
    const trades = JSON.parse(content);
    return trades.find((trade: any) => trade.slug === siteId);
  } catch {
    return null;
  }
}
