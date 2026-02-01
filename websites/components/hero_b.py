"""Hero B: Centered headline, subtitle, single prominent CTA. Bold trade feel."""

def css():
    return """
    .hero-b {
      background: var(--dark);
      position: relative; overflow: hidden;
    }
    .hero-b::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at center top, rgba(255,255,255,0.04) 0%, transparent 70%);
      pointer-events: none;
    }
    .hero-b-inner {
      max-width: 960px; margin: 0 auto; padding: 88px 24px 72px; text-align: center;
      position: relative; z-index: 1;
    }
    .hero-b-badge {
      display: inline-block; font-size: 0.8rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.15em;
      color: var(--dark); background: var(--accent);
      padding: 8px 20px; border-radius: var(--radius); margin-bottom: 24px;
    }
    .hero-b h1 {
      font-family: 'Bebas Neue', sans-serif; font-size: 4rem;
      line-height: 1.05; max-width: 750px; margin: 0 auto; color: white;
      text-transform: uppercase; letter-spacing: 0.02em;
    }
    .hero-b-sub {
      margin-top: 20px; font-size: 1.15rem; color: rgba(255,255,255,0.65);
      line-height: 1.7; max-width: 520px; margin-left: auto; margin-right: auto;
    }
    .hero-b-cta { margin-top: 40px; }
    .hero-b-cta .btn-primary { padding: 18px 48px; font-size: 1.1rem; }
    .hero-b-stats {
      display: flex; justify-content: center; gap: 56px; margin-top: 48px;
      padding-top: 40px; border-top: 1px solid rgba(255,255,255,0.1);
    }
    .hero-b-stats .stat-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 2.4rem;
      color: var(--accent); line-height: 1;
    }
    .hero-b-stats .stat-label {
      font-size: 0.78rem; color: rgba(255,255,255,0.45);
      text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-top: 4px;
    }
    @media (max-width: 640px) {
      .hero-b h1 { font-size: 2.8rem; }
      .hero-b-inner { padding: 64px 24px 56px; }
      .hero-b-stats { gap: 24px; flex-wrap: wrap; }
    }
    """

def render(trade, theme, config=None):
    config = config or {}
    from .base import get_trade_label
    trade_label = get_trade_label(trade["trade_type"])
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")
    headline = config.get("hero_headline") or f"Professional {trade_label} services in {trade['area']}."
    subtitle = config.get("hero_subtitle") or trade.get("description", "")
    emergency = trade.get("emergency", False)
    badge_text = "24/7 Emergency Service" if emergency else f"Trusted {trade_label.title()} in {trade['area']}"

    stats_html = ""
    if trade.get("rating", 0) > 0 or trade.get("review_count", 0) > 0:
        stats_items = ""
        if trade.get("rating", 0) > 0:
            stats_items += f'<div><div class="stat-num">{trade["rating"]}★</div><div class="stat-label">Rating</div></div>'
        if trade.get("review_count", 0) > 0:
            stats_items += f'<div><div class="stat-num">{trade["review_count"]}</div><div class="stat-label">Reviews</div></div>'
        if emergency:
            stats_items += '<div><div class="stat-num">24/7</div><div class="stat-label">Available</div></div>'
        stats_html = f'<div class="hero-b-stats">{stats_items}</div>'

    cta = ""
    if phone:
        cta = f'<div class="hero-b-cta"><a href="tel:{phone_clean}" class="btn-primary">📞 Call {phone}</a></div>'

    return f"""
  <section class="hero-b">
    <div class="hero-b-inner">
      <div class="hero-b-badge">{badge_text}</div>
      <h1>{headline}</h1>
      <p class="hero-b-sub">{subtitle}</p>
      {cta}
      {stats_html}
    </div>
  </section>"""
