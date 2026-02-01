/**
 * Safe atomic save for trades.json
 * Prevents corruption when dev server is reading file
 */

const fs = require('fs').promises;
const path = require('path');

async function saveTradesAtomic(trades, filePath = './site/data/trades.json') {
  const absolutePath = path.resolve(filePath);
  const tempFile = `${absolutePath}.tmp`;
  const backupFile = `${absolutePath}.backup`;

  try {
    // 1. Write to temporary file
    await fs.writeFile(
      tempFile,
      JSON.stringify(trades, null, 2),
      'utf-8'
    );

    // 2. Validate it's valid JSON
    const testRead = await fs.readFile(tempFile, 'utf-8');
    JSON.parse(testRead); // Throws if invalid
    console.log(`✓ Validated JSON (${trades.length} trades)`);

    // 3. Create backup of current file
    try {
      await fs.copyFile(absolutePath, backupFile);
      console.log(`✓ Backup created`);
    } catch (err) {
      // File might not exist yet, that's ok
    }

    // 4. Atomic rename (this is instant and safe)
    await fs.rename(tempFile, absolutePath);
    console.log(`✓ Saved ${trades.length} trades atomically`);

    return true;
  } catch (error) {
    console.error('❌ Error saving trades:', error.message);

    // Clean up temp file if it exists
    try {
      await fs.unlink(tempFile);
    } catch {}

    throw error;
  }
}

// Usage in your scraper:
async function example() {
  const existingTrades = require('./site/data/trades.json');

  // Your scraping logic here
  const newTrade = {
    name: "ABC Plumbing",
    slug: "abc-plumbing",
    // ... rest of fields
  };

  // Add new trade
  const updatedTrades = [...existingTrades, newTrade];

  // Save atomically (safe even if dev server is running)
  await saveTradesAtomic(updatedTrades);
}

module.exports = { saveTradesAtomic };
