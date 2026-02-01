"""Hero A: Big headline left-aligned, stats on right, CTA buttons. Bold trade feel."""

def css():
    return """
    .hero-a {
      background: var(--dark);
      position: relative;
      overflow: hidden;
    }
    .hero-a::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(0,0,0,0.4) 0%, transparent 60%);
      pointer-events: none;
    }
    .hero-a-inner {
      max-width: 960px; margin: 0 auto; padding: 80px 24px 64px;
      position: relative; z-index: 1;
    }
    .hero-a-badge {
      display: inline-block; font-size: 0.8rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.15em;
      color: var(--dark); background: var(--accent);
      padding: 8px 20px; border-radius: var(--radius); margin-bottom: 24px;
    }
    .hero-a h1 {
      font-family: 'Bebas Neue', sans-serif; font-size: 4.2rem;
      line-height: 1.05; max-width: 650px; color: white;
      text-transform: uppercase; letter-spacing: 0.02em;
    }
    .hero-a-desc {
      margin-top: 20px; font-size: 1.1rem; color: rgba(255,255,255,0.7);
      line-height: 1.7; max-width: 500px;
    }
    .hero-a-stats { display: flex; gap: 40px; margin-top: 36px; }
    .hero-a-stats .stat-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 2.8rem;
      color: var(--accent); line-height: 1;
    }
    .hero-a-stats .stat-label {
      font-size: 0.8rem; color: rgba(255,255,255,0.5);
      text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-top: 4px;
    }
    .hero-a-actions { display: flex; gap: 12px; margin-top: 40px; flex-wrap: wrap; }
    .hero-a-phone {
      margin-top: 24px; font-size: 1.1rem; color: rgba(255,255,255,0.6);
    }
    .hero-a-phone a { color: white; font-weight: 700; }
    @media (max-width: 640px) {
      .hero-a h1 { font-size: 2.8rem; }
      .hero-a-inner { padding: 56px 24px 48px; }
      .hero-a-stats { gap: 24px; }
      .hero-a-stats .stat-num { font-size: 2rem; }
    }
    """

def render(trade, theme, config=None):
    config = config or {}
    from .base import get_trade_label
    trade_label = get_trade_label(trade["trade_type"])
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")
    headline = config.get("hero_headline") or f"Your trusted {trade_label} in {trade['area']}."
    subtitle = config.get("hero_subtitle") or trade.get("description", "")

    stats_html = ""
    if trade.get("rating", 0) > 0:
        stats_html += f'<div><div class="stat-num">{trade["rating"]}★</div><div class="stat-label">Google Rating</div></div>'
    if trade.get("review_count", 0) > 0:
        stats_html += f'<div><div class="stat-num">{trade["review_count"]}</div><div class="stat-label">Reviews</div></div>'

    phone_btns = ""
    phone_line = ""
    if phone:
        phone_btns = f"""
      <a href="tel:{phone_clean}" class="btn-primary">Call Now</a>
      <a href="sms:{phone_clean}" class="btn-secondary">Text Me Instead</a>"""
        phone_line = f'<p class="hero-a-phone">Or call direct: <a href="tel:{phone_clean}">{phone}</a></p>'

    return f"""
  <section class="hero-a">
    <div class="hero-a-inner">
      <div class="hero-a-badge">Trusted Local {trade_label.title()}</div>
      <h1>{headline}</h1>
      <p class="hero-a-desc">{subtitle}</p>
      <div class="hero-a-stats">{stats_html}</div>
      <div class="hero-a-actions">{phone_btns}</div>
      {phone_line}
    </div>
  </section>"""
