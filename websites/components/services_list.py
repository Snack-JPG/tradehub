"""Services as a detailed list with descriptions."""

SERVICE_DESCRIPTIONS = {
    "extensions": "Full home extensions designed and built to your specifications.",
    "home extensions": "Full home extensions designed and built to your specifications.",
    "kitchen extensions": "Open-plan kitchen extensions to transform your living space.",
    "loft conversions": "Convert unused loft space into a beautiful new room.",
    "renovations": "Complete property renovations from start to finish.",
    "barn conversions": "Specialist barn and outbuilding conversions.",
    "garage conversions": "Transform your garage into usable living space.",
    "general building": "All aspects of general building and construction work.",
    "new builds": "New build construction from foundations to finishing.",
    "construction": "Professional construction services for all project sizes.",
    "boiler installation": "New boiler installations with manufacturer warranties.",
    "boiler repair": "Fast diagnosis and repair of all boiler makes and models.",
    "boiler servicing": "Annual boiler servicing to keep your system running efficiently.",
    "central heating": "Full central heating system installation and upgrades.",
    "gas safety checks": "Landlord gas safety certificates and domestic checks.",
    "emergency plumbing": "Rapid response for plumbing emergencies, day or night.",
    "bathroom fitting": "Complete bathroom design, supply and installation.",
    "general plumbing": "All domestic plumbing repairs and installations.",
}

def css():
    return """
    .svc-list { display: flex; flex-direction: column; gap: 16px; }
    .svc-list-item {
      display: flex; gap: 16px; padding: 24px;
      background: white; border: 1px solid var(--border); border-radius: var(--radius);
      transition: border-color 0.2s;
    }
    .svc-list-item:hover { border-color: var(--accent); }
    .svc-list-icon { font-size: 1.4rem; flex-shrink: 0; margin-top: 2px; }
    .svc-list-name { font-weight: 600; font-size: 0.95rem; }
    .svc-list-desc { font-size: 0.85rem; color: var(--stone); margin-top: 4px; line-height: 1.5; }
    """

def render(trade, theme, config=None):
    from .base import get_icon, get_trade_label
    items = ""
    for s in trade.get("services", []):
        icon = get_icon(s)
        desc = SERVICE_DESCRIPTIONS.get(s.lower(), f"Professional {s.lower()} services in {trade['area']}.")
        items += f"""<div class="svc-list-item">
        <span class="svc-list-icon">{icon}</span>
        <div><div class="svc-list-name">{s}</div><div class="svc-list-desc">{desc}</div></div>
      </div>\n"""
    return f"""
  <section class="section">
    <div class="section-label">What we do</div>
    <h2>Services</h2>
    <div class="svc-list">
      {items}
    </div>
  </section>"""
