"""Services as icon cards in a responsive grid. Bold dark borders, accent hover."""

def css():
    return """
    .svc-grid-list {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;
    }
    .svc-grid-item {
      display: flex; align-items: center; gap: 12px;
      padding: 18px 22px; background: white; border: 2px solid #e0e0e0;
      border-radius: var(--radius); font-weight: 600; font-size: 0.9rem;
      transition: all 0.2s; color: var(--charcoal);
    }
    .svc-grid-item:hover { border-color: var(--accent); box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
    .svc-grid-icon { font-size: 1.3rem; flex-shrink: 0; }
    @media (max-width: 640px) { .svc-grid-list { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 380px) { .svc-grid-list { grid-template-columns: 1fr; } }
    """

def render(trade, theme, config=None):
    from .base import get_icon
    items = ""
    for s in trade.get("services", []):
        icon = get_icon(s)
        items += f'<div class="svc-grid-item"><span class="svc-grid-icon">{icon}</span> {s}</div>\n'
    return f"""
  <section class="section">
    <div class="section-label">What we do</div>
    <h2>Services</h2>
    <div class="svc-grid-list">
      {items}
    </div>
  </section>"""
