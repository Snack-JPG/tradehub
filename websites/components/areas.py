"""Area tags — bold pills with accent outline."""

def css():
    return """
    .areas-tags { display: flex; flex-wrap: wrap; gap: 10px; }
    .area-tag {
      padding: 10px 24px; border: 2px solid var(--accent); border-radius: var(--radius);
      font-size: 0.9rem; font-weight: 700; color: var(--charcoal); background: white;
      text-transform: uppercase; letter-spacing: 0.03em;
    }
    """

def render(trade, theme, config=None):
    tags = ""
    for a in trade.get("areas_served", []):
        tags += f'<span class="area-tag">{a}</span>\n'
    if not tags:
        return ""
    return f"""
  <section class="section" style="padding-top:0">
    <div class="section-label">Where we work</div>
    <h2>Areas Covered</h2>
    <div class="areas-tags">{tags}</div>
  </section>"""
