"""Static grid of reviews (no carousel)."""

def css():
    return """
    .reviews-grid-section { background: var(--warm); padding: 56px 0; }
    .reviews-grid-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; }
    .reviews-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;
    }
    .rg-card {
      background: white; border-radius: 16px; padding: 24px;
    }
    .rg-stars { color: var(--accent); font-size: 1rem; letter-spacing: 2px; }
    .rg-text { margin-top: 12px; font-size: 0.88rem; line-height: 1.6; }
    .rg-author { margin-top: 16px; font-size: 0.8rem; color: var(--stone-light); font-weight: 500; }
    @media (max-width: 640px) { .reviews-grid { grid-template-columns: 1fr; } }
    """

def render(trade, theme, config=None):
    reviews = [r for r in trade.get("reviews", []) if r.get("rating", 5) >= 5]
    if not reviews:
        reviews = trade.get("reviews", [])
    if not reviews:
        return ""

    months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    cards = ""
    for r in reviews:
        stars = "★" * int(r.get("rating", 5))
        author = r.get("author", "Customer")
        date = r.get("date", "")
        date_display = ""
        if date:
            parts = date.split("-")
            if len(parts) >= 2:
                try:
                    date_display = f"{months[int(parts[1])]} {parts[0]}"
                except (ValueError, IndexError):
                    pass
        cards += f"""<div class="rg-card">
        <div class="rg-stars">{stars}</div>
        <p class="rg-text">"{r.get('text', '')}"</p>
        <p class="rg-author">— {author}{f' · {date_display}' if date_display else ''}</p>
      </div>\n"""

    return f"""
  <section class="reviews-grid-section">
    <div class="reviews-grid-inner">
      <div class="section-label">What people say</div>
      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;text-transform:uppercase;letter-spacing:0.04em;margin-bottom:32px;">Customer Reviews</h2>
      <div class="reviews-grid">{cards}</div>
    </div>
  </section>"""
