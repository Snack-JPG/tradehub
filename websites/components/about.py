"""About section with personal bio. Warm light bg for contrast."""

def css():
    return """
    .about-section { background: var(--warm); padding: 72px 0; }
    .about-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; }
    .about-inner h2 {
      font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem;
      text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px;
      line-height: 1.1;
    }
    .about-content { max-width: 640px; }
    .about-content p { font-size: 0.95rem; line-height: 1.8; color: var(--stone); margin-top: 16px; }
    .about-accreds { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
    .about-accred {
      padding: 8px 18px; background: white; border: 2px solid #e0e0e0;
      border-radius: var(--radius); font-size: 0.82rem; font-weight: 700;
      color: var(--charcoal); text-transform: uppercase; letter-spacing: 0.03em;
    }
    """

def render(trade, theme, config=None):
    from .base import get_trade_label
    config = config or {}
    custom = config.get("custom_about", {})
    name = trade["name"]
    desc = custom.get("text", trade.get("description", ""))
    heading = custom.get("heading", f"About {name}")
    accreds = trade.get("accreditations", [])
    trade_label = get_trade_label(trade["trade_type"])

    accreds_html = ""
    if accreds:
        accreds_html = '<div class="about-accreds">'
        for a in accreds:
            accreds_html += f'<span class="about-accred">✓ {a}</span>'
        accreds_html += '</div>'

    return f"""
  <section class="about-section">
    <div class="about-inner">
      <div class="section-label">Who we are</div>
      <h2>{heading}</h2>
      <div class="about-content">
        <p>{desc}</p>
      </div>
      {accreds_html}
    </div>
  </section>"""
