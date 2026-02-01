"""Hero C: Split layout — text left, accent stat block right. Bold trade feel."""

def css():
    return """
    .hero-c {
      background: var(--dark);
      position: relative; overflow: hidden;
    }
    .hero-c::before {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(160deg, rgba(0,0,0,0.3) 0%, transparent 50%);
      pointer-events: none;
    }
    .hero-c-inner {
      max-width: 960px; margin: 0 auto; padding: 72px 24px 56px;
      display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center;
      position: relative; z-index: 1;
    }
    .hero-c-text {}
    .hero-c-badge {
      display: inline-block; font-size: 0.8rem; font-weight: 700;
      text-transform: uppercase; letter-spacing: 0.15em;
      color: var(--dark); background: var(--accent);
      padding: 8px 20px; border-radius: var(--radius); margin-bottom: 20px;
    }
    .hero-c h1 {
      font-family: 'Bebas Neue', sans-serif; font-size: 3.4rem;
      line-height: 1.05; color: white; text-transform: uppercase; letter-spacing: 0.02em;
    }
    .hero-c-desc { margin-top: 16px; font-size: 1.05rem; color: rgba(255,255,255,0.65); line-height: 1.7; }
    .hero-c-actions { display: flex; gap: 12px; margin-top: 32px; flex-wrap: wrap; }
    .hero-c-accent {
      background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
      border-radius: var(--radius); padding: 48px;
      display: flex; flex-direction: column; gap: 24px; align-items: center; justify-content: center;
      min-height: 320px; position: relative; overflow: hidden;
    }
    .hero-c-stat-card {
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1);
      border-radius: var(--radius); padding: 20px 28px;
      text-align: center; z-index: 1; width: 100%;
    }
    .hero-c-stat-card .stat-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 2.4rem;
      color: var(--accent); line-height: 1;
    }
    .hero-c-stat-card .stat-label {
      font-size: 0.78rem; color: rgba(255,255,255,0.45);
      text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-top: 4px;
    }
    @media (max-width: 640px) {
      .hero-c-inner { grid-template-columns: 1fr; gap: 32px; padding: 56px 24px 48px; }
      .hero-c h1 { font-size: 2.6rem; }
      .hero-c-accent { min-height: 180px; padding: 32px; flex-direction: row; flex-wrap: wrap; }
    }
    """

def render(trade, theme, config=None):
    config = config or {}
    from .base import get_trade_label
    trade_label = get_trade_label(trade["trade_type"])
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")
    headline = config.get("hero_headline") or f"Quality {trade_label} services in {trade['area']}."
    subtitle = config.get("hero_subtitle") or trade.get("description", "")

    phone_btns = ""
    if phone:
        phone_btns = f"""
      <a href="tel:{phone_clean}" class="btn-primary">Get a Quote</a>
      <a href="tel:{phone_clean}" class="btn-secondary">Call {phone}</a>"""

    stat_cards = ""
    if trade.get("rating", 0) > 0:
        stat_cards += f'<div class="hero-c-stat-card"><div class="stat-num">{trade["rating"]}★</div><div class="stat-label">Google Rating</div></div>'
    if trade.get("review_count", 0) > 0:
        stat_cards += f'<div class="hero-c-stat-card"><div class="stat-num">{trade["review_count"]}</div><div class="stat-label">Reviews</div></div>'

    return f"""
  <section class="hero-c">
    <div class="hero-c-inner">
      <div class="hero-c-text">
        <div class="hero-c-badge">Local {trade_label.title()} · {trade['area']}</div>
        <h1>{headline}</h1>
        <p class="hero-c-desc">{subtitle}</p>
        <div class="hero-c-actions">{phone_btns}</div>
      </div>
      <div class="hero-c-accent">
        {stat_cards}
      </div>
    </div>
  </section>"""
