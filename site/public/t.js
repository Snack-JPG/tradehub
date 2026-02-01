/**
 * TradeHub Analytics - Privacy-first event tracking
 * No cookies, no PII, GDPR-friendly
 * Version: 1.0.0
 */
(function() {
  'use strict';

  // Get site ID from script tag data attribute
  const script = document.currentScript || document.querySelector('script[data-site]');
  const siteId = script && script.getAttribute('data-site');

  if (!siteId) {
    console.warn('[TradeHub Analytics] Missing data-site attribute');
    return;
  }

  const ENDPOINT = 'https://tradehub.directory/api/events';
  const DEBOUNCE_MS = 5000;
  const recentEvents = new Map();

  /**
   * Get device type from user agent
   */
  function getDevice() {
    const ua = navigator.userAgent.toLowerCase();
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return 'tablet';
    }
    if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(navigator.userAgent)) {
      return 'mobile';
    }
    return 'desktop';
  }

  /**
   * Get broad UA class
   */
  function getUaClass() {
    const ua = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(ua)) return 'ios';
    if (/android/.test(ua)) return 'android';
    if (/windows/.test(ua)) return 'windows';
    if (/macintosh|mac os x/.test(ua)) return 'mac';
    return 'other';
  }

  /**
   * Parse referrer to determine traffic source
   */
  function getSource() {
    // Check for UTM params first
    const urlParams = new URLSearchParams(window.location.search);
    const utmSource = urlParams.get('utm_source');
    if (utmSource) return utmSource;

    const ref = document.referrer.toLowerCase();
    if (!ref) return 'direct';

    // Extract domain from referrer
    const refDomain = ref.split('/')[2] || '';

    if (refDomain.includes('tradehub.directory')) return 'tradehub';
    if (refDomain.includes('google') || refDomain.includes('bing') || refDomain.includes('duckduckgo')) return 'organic';
    if (refDomain.includes('facebook') || refDomain.includes('instagram') || refDomain.includes('tiktok') || refDomain.includes('twitter') || refDomain.includes('t.co')) return 'social';
    if (refDomain.includes('google.') && ref.includes('/ads/')) return 'paid';

    return 'referral';
  }

  /**
   * Get referrer domain (stripped)
   */
  function getRefDomain() {
    if (!document.referrer) return '';
    try {
      const url = new URL(document.referrer);
      return url.hostname;
    } catch {
      return '';
    }
  }

  /**
   * Check if event should be debounced
   */
  function shouldDebounce(eventType, path) {
    const key = `${eventType}:${path}`;
    const lastTime = recentEvents.get(key);
    const now = Date.now();

    if (lastTime && (now - lastTime) < DEBOUNCE_MS) {
      return true;
    }

    recentEvents.set(key, now);
    return false;
  }

  /**
   * Send event to TradeHub
   */
  function trackEvent(eventType) {
    const path = window.location.pathname;

    // Debounce duplicate events
    if (shouldDebounce(eventType, path)) return;

    const payload = {
      site_id: siteId,
      event: eventType,
      ts: Math.floor(Date.now() / 1000),
      ref: getRefDomain(),
      src: getSource(),
      device: getDevice(),
      path: path,
      ua_class: getUaClass()
    };

    // Use sendBeacon for reliability (works even when page is unloading)
    if (navigator.sendBeacon) {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      navigator.sendBeacon(ENDPOINT, blob);
    } else {
      // Fallback to fetch with keepalive
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => {
        // Silent fail - don't break the page
      });
    }
  }

  /**
   * Setup event listeners for trackable elements
   */
  function setupTracking() {
    // Track page view on load
    trackEvent('page_view');

    // Use event delegation for better performance
    document.addEventListener('click', function(e) {
      const target = e.target.closest('a, button, form');
      if (!target) return;

      const href = target.getAttribute('href') || '';
      const onclick = target.getAttribute('onclick') || '';

      // Phone tap
      if (href.startsWith('tel:')) {
        trackEvent('phone_tap');
      }
      // WhatsApp tap
      else if (href.includes('wa.me') || href.includes('whatsapp') || onclick.includes('whatsapp')) {
        trackEvent('whatsapp_tap');
      }
      // Email tap
      else if (href.startsWith('mailto:')) {
        trackEvent('email_tap');
      }
      // Directions tap
      else if (href.includes('maps.google') || href.includes('directions') || onclick.includes('maps')) {
        trackEvent('directions_tap');
      }
    }, true); // Use capture phase to catch events early

    // Track form submissions
    document.addEventListener('submit', function(e) {
      if (e.target.tagName === 'FORM') {
        trackEvent('form_submit');
      }
    }, true);
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupTracking);
  } else {
    setupTracking();
  }
})();
