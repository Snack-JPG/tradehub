"""Numbered steps: how it works. Dark section with accent step numbers."""

DEFAULT_STEPS = [
    ("Get in touch", "Give us a call or drop a text — no pressure, just a friendly chat about what you need."),
    ("Book a time", "We'll find a time that works for you, usually within a day or two."),
    ("Get a quote", "We'll assess the job and give you an honest, upfront quote — no hidden fees."),
    ("Problem sorted", "We'll get the work done properly, leave everything tidy, and make sure you're happy."),
]

def css():
    return """
    .hiw-section { background: var(--dark); padding: 72px 0; }
    .hiw-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; }
    .hiw-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; }
    .hiw-step {
      padding: 28px; background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: var(--radius);
    }
    .hiw-num {
      font-family: 'Bebas Neue', sans-serif; font-size: 3rem;
      color: var(--accent); line-height: 1; margin-bottom: 16px;
    }
    .hiw-title { font-weight: 700; font-size: 1rem; margin-bottom: 8px; color: white; }
    .hiw-desc { font-size: 0.88rem; color: rgba(255,255,255,0.55); line-height: 1.6; }
    @media (max-width: 640px) { .hiw-grid { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 380px) { .hiw-grid { grid-template-columns: 1fr; } }
    """

def render(trade, theme, config=None):
    config = config or {}
    raw_steps = config.get("custom_how_it_works") or DEFAULT_STEPS
    if isinstance(raw_steps, dict):
        raw_steps = raw_steps.get("steps", [])
    steps = []
    for s in raw_steps:
        if isinstance(s, dict):
            steps.append((s.get("title", ""), s.get("desc", "")))
        else:
            steps.append(s)
    items = ""
    for i, (title, desc) in enumerate(steps, 1):
        items += f"""<div class="hiw-step">
        <div class="hiw-num">0{i}</div>
        <div class="hiw-title">{title}</div>
        <div class="hiw-desc">{desc}</div>
      </div>\n"""
    return f"""
  <section class="hiw-section">
    <div class="hiw-inner">
      <div class="section-label" style="color:var(--accent);">Simple process</div>
      <h2 style="font-family:'Bebas Neue',sans-serif;font-size:2.5rem;text-transform:uppercase;letter-spacing:0.04em;color:white;margin-bottom:32px;">How It Works</h2>
      <div class="hiw-grid">
        {items}
      </div>
    </div>
  </section>"""
