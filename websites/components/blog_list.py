"""Shows 3 blog post cards with titles and snippets."""

import sys, os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

def css():
    return """
    .blog-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; }
    .blog-card {
      background: white; border: 1px solid var(--border); border-radius: var(--radius);
      padding: 24px; transition: border-color 0.2s;
    }
    .blog-card:hover { border-color: var(--accent); }
    .blog-card-label { font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--accent); }
    .blog-card h3 { font-family: 'Bebas Neue', sans-serif; font-size: 1.1rem; margin-top: 8px; line-height: 1.3; }
    .blog-card p { font-size: 0.85rem; color: var(--stone); margin-top: 8px; line-height: 1.6; }
    .blog-card-link { display: inline-block; margin-top: 12px; font-size: 0.85rem; font-weight: 600; color: var(--accent); }
    """

def render(trade, theme, config=None):
    from blog_generator import get_blog_titles
    area = trade.get("area", "")
    trade_type = trade.get("trade_type", "")
    titles = get_blog_titles(trade_type, area)[:3]
    if not titles:
        return ""

    cards = ""
    for title, slug in titles:
        snippet = f"Read our guide: {title}"
        cards += f"""<a href="blog/{slug}.html" class="blog-card">
        <div class="blog-card-label">Blog</div>
        <h3>{title}</h3>
        <p>{snippet}</p>
        <span class="blog-card-link">Read more →</span>
      </a>\n"""

    return f"""
  <section class="section">
    <div class="section-label">Helpful guides</div>
    <h2>From Our Blog</h2>
    <div class="blog-grid">{cards}</div>
  </section>"""
