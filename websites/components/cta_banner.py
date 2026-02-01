"""Full-width dark CTA section. Urgent and confident."""

def css():
    return """
    .cta-section {
      background: var(--dark); padding: 80px 24px; text-align: center;
    }
    .cta-section h2 {
      font-family: 'Bebas Neue', sans-serif; font-size: 3rem;
      max-width: 600px; margin: 0 auto; line-height: 1.1;
      color: white; text-transform: uppercase; letter-spacing: 0.03em;
    }
    .cta-section p { color: rgba(255,255,255,0.6); margin-top: 12px; font-size: 1.05rem; }
    .cta-btn {
      display: inline-flex; align-items: center; gap: 8px; margin-top: 32px;
      background: var(--accent); color: white; padding: 18px 48px;
      border-radius: var(--radius); font-weight: 700; font-size: 1.1rem;
      transition: all 0.2s; text-transform: uppercase; letter-spacing: 0.05em;
    }
    .cta-btn:hover { opacity: 0.9; transform: translateY(-2px); }
    .cta-number { margin-top: 16px; font-size: 0.85rem; color: rgba(255,255,255,0.4); }
    @media (max-width: 640px) { .cta-section h2 { font-size: 2.2rem; } }
    """

def render(trade, theme, config=None):
    phone = trade.get("phone", "")
    phone_clean = phone.replace(" ", "").replace("-", "")
    cta_btn = ""
    if phone:
        cta_btn = f'<a href="tel:{phone_clean}" class="cta-btn">Call {phone}</a><p class="cta-number">or text if you prefer</p>'
    return f"""
  <section class="cta-section">
    <h2>Ready to Get Started?</h2>
    <p>Give us a call or drop a text. No obligation, just a chat.</p>
    {cta_btn}
  </section>"""
