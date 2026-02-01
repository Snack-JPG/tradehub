#!/usr/bin/env node

/**
 * Generate test analytics data for demonstration
 * Run with: node generate-test-analytics.js
 */

const fs = require('fs');
const path = require('path');

// Configuration
const ANALYTICS_DIR = path.join(__dirname, 'site', 'data', 'analytics');
const NUM_DAYS = 30;
const SITE_ID = 'test-site';

// Event types and their relative frequencies
const eventTypes = {
  page_view: 0.6,      // Most common
  phone_tap: 0.15,     // Lead event
  whatsapp_tap: 0.08,  // Lead event
  form_submit: 0.02,   // Lead event (rare)
  email_tap: 0.05,     // Lead event
  directions_tap: 0.1, // Non-lead
};

const sources = ['tradehub', 'organic', 'direct', 'social', 'referral'];
const devices = ['mobile', 'desktop', 'tablet'];
const deviceWeights = [0.7, 0.25, 0.05]; // Mobile-heavy
const uaClasses = ['ios', 'android', 'windows', 'mac', 'other'];

function randomChoice(arr, weights) {
  if (!weights) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  const random = Math.random();
  let cumulative = 0;
  for (let i = 0; i < arr.length; i++) {
    cumulative += weights[i];
    if (random < cumulative) {
      return arr[i];
    }
  }
  return arr[arr.length - 1];
}

function randomEvent() {
  const random = Math.random();
  let cumulative = 0;
  for (const [event, weight] of Object.entries(eventTypes)) {
    cumulative += weight;
    if (random < cumulative) {
      return event;
    }
  }
  return 'page_view';
}

function generateEventsForDay(date, count) {
  const events = [];
  const dayStart = date.getTime() / 1000;
  const dayEnd = dayStart + 86400; // 24 hours

  for (let i = 0; i < count; i++) {
    const ts = Math.floor(dayStart + Math.random() * (dayEnd - dayStart));
    const event = {
      site_id: SITE_ID,
      event: randomEvent(),
      ts: ts,
      ref: Math.random() > 0.3 ? 'tradehub.directory' : '',
      src: randomChoice(sources),
      device: randomChoice(devices, deviceWeights),
      path: '/',
      ua_class: randomChoice(uaClasses),
      id: `${ts}-${Math.random().toString(36).substr(2, 9)}`,
      created_at: new Date(ts * 1000).toISOString(),
    };
    events.push(event);
  }

  return events.sort((a, b) => a.ts - b.ts);
}

function main() {
  // Ensure analytics directory exists
  if (!fs.existsSync(ANALYTICS_DIR)) {
    fs.mkdirSync(ANALYTICS_DIR, { recursive: true });
    console.log(`✓ Created ${ANALYTICS_DIR}`);
  }

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const monthStr = String(month).padStart(2, '0');

  const fileName = `${SITE_ID}-${year}-${monthStr}.jsonl`;
  const filePath = path.join(ANALYTICS_DIR, fileName);

  console.log(`\n🔄 Generating test analytics data...\n`);
  console.log(`Site ID: ${SITE_ID}`);
  console.log(`Period: ${monthStr}/${year}`);
  console.log(`Days: ${NUM_DAYS}`);
  console.log(`Output: ${filePath}\n`);

  const lines = [];
  let totalEvents = 0;

  // Generate events for the past N days
  for (let i = NUM_DAYS - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);
    date.setHours(0, 0, 0, 0);

    // More events on recent days (growth trend)
    const baseEventsPerDay = 20;
    const growthFactor = 1 + (NUM_DAYS - i) / NUM_DAYS * 0.5;
    const eventsForDay = Math.floor(baseEventsPerDay * growthFactor);

    const events = generateEventsForDay(date, eventsForDay);
    totalEvents += events.length;

    console.log(`  ${date.toISOString().split('T')[0]}: ${events.length} events`);

    for (const event of events) {
      lines.push(JSON.stringify(event));
    }
  }

  // Write to file
  fs.writeFileSync(filePath, lines.join('\n') + '\n', 'utf-8');

  console.log(`\n✅ Generated ${totalEvents} events!`);
  console.log(`\n📊 View analytics at:`);
  console.log(`   https://tradehub.directory/dashboard/${SITE_ID}`);
  console.log(`\n🔐 Admin dashboard:`);
  console.log(`   https://tradehub.directory/admin/analytics?password=tradehub2026`);
  console.log(`\n🧪 Test page:`);
  console.log(`   https://tradehub.directory/analytics-test.html`);
}

main();
