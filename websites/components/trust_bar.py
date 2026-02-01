"""Trust bar: 3-4 trust indicators in a dark confidence strip."""

DEFAULT_INDICATORS = [
    ("✅", "Vetted & Verified"),
    ("🛡️", "Fully Insured"),
    ("📍", "Local & Reliable"),
    ("⚡", "Quick Response"),
]

EMERGENCY_INDICATORS = [
    ("🚨", "24/7 Emergency"),
    ("⏱️", "30 Min Response"),
    ("🛡️", "Fully Insured"),
    ("📍", "Local Service"),
]

def css():
    return """
    .trust-bar { background: #1e1e1e; padding: 0; }
    .trust-bar-grid {
      max-width: 960px; margin: 0 auto;
      display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 0;
    }
    .trust-item {
      display: flex; align-items: center; gap: 12px;
      padding: 18px 24px;
      font-size: 0.88rem; font-weight: 600; color: white;
      border-right: 1px solid rgba(255,255,255,0.08);
    }
    .trust-item:last-child { border-right: none; }
    .trust-icon { font-size: 1.3rem; flex-shrink: 0; filter: brightness(1.2); }
    @media (max-width: 640px) {
      .trust-bar-grid { grid-template-columns: 1fr 1fr; }
      .trust-item { border-right: none; border-bottom: 1px solid rgba(255,255,255,0.06); padding: 14px 20px; }
    }
    """

def render(trade, theme, config=None):
    indicators = EMERGENCY_INDICATORS if trade.get("emergency") else DEFAULT_INDICATORS
    items = ""
    for icon, label in indicators:
        items += f'<div class="trust-item"><span class="trust-icon">{icon}</span> {label}</div>\n'
    return f"""
  <section class="trust-bar">
    <div class="trust-bar-grid">
      {items}
    </div>
  </section>"""
