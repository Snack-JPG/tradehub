"""Accreditation badge bar based on trade_type."""

ACCRED_MAP = {
    "Gas Safe": "🔥 Gas Safe Registered",
    "Gas Safe Registered": "🔥 Gas Safe Registered",
    "NICEIC": "⚡ NICEIC Approved",
    "NICEIC Approved Contractor": "⚡ NICEIC Approved",
    "CIPHE": "🔧 CIPHE Member",
    "TrustMark": "✅ TrustMark Approved",
    "WaterSafe": "💧 WaterSafe Approved",
    "Checkatrade": "✅ Checkatrade Listed",
    "Which? Trusted Trader": "🏆 Which? Trusted Trader",
    "DBS Checked": "🛡️ DBS Checked",
    "CRB Checked": "🛡️ CRB Checked",
    "Fully Insured": "🛡️ Fully Insured",
}

def css():
    return """
    .accred-bar { max-width: 960px; margin: 0 auto; padding: 0 24px 32px; }
    .accred-list { display: flex; flex-wrap: wrap; gap: 12px; }
    .accred-badge {
      display: flex; align-items: center; gap: 8px;
      padding: 10px 20px; background: var(--accent-light); border-radius: 100px;
      font-size: 0.85rem; font-weight: 600; color: var(--dark);
    }
    """

def render(trade, theme, config=None):
    accreds = trade.get("accreditations", [])
    if not accreds:
        return ""
    badges = ""
    for a in accreds:
        label = ACCRED_MAP.get(a, f"✓ {a}")
        badges += f'<span class="accred-badge">{label}</span>\n'
    return f"""
  <section class="accred-bar">
    <div class="accred-list">{badges}</div>
  </section>"""
