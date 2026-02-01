"""
Work gallery — responsive image grid with lightbox.
Images stored in: websites/<slug>/gallery/
Supports captions via config or filename convention (e.g. "kitchen-rewire.jpg" → "Kitchen Rewire").
"""

import os
from pathlib import Path


def css():
    return """
    .gallery-grid {
      display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
      gap: 12px;
    }
    .gallery-item {
      position: relative; border-radius: var(--radius); overflow: hidden;
      cursor: pointer; aspect-ratio: 4/3; background: #1a1a1a;
    }
    .gallery-item img {
      width: 100%; height: 100%; object-fit: cover;
      transition: transform 0.3s ease;
    }
    .gallery-item:hover img { transform: scale(1.05); }
    .gallery-caption {
      position: absolute; bottom: 0; left: 0; right: 0;
      padding: 8px 12px; background: linear-gradient(transparent, rgba(0,0,0,0.7));
      color: white; font-size: 0.8rem; font-weight: 500;
    }
    /* Lightbox */
    .lightbox-overlay {
      display: none; position: fixed; inset: 0; z-index: 9999;
      background: rgba(0,0,0,0.92); align-items: center; justify-content: center;
      cursor: zoom-out;
    }
    .lightbox-overlay.active { display: flex; }
    .lightbox-overlay img {
      max-width: 90vw; max-height: 85vh; object-fit: contain;
      border-radius: 8px;
    }
    .lightbox-caption {
      position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
      color: white; font-size: 0.95rem; font-weight: 500;
      background: rgba(0,0,0,0.5); padding: 8px 20px; border-radius: 20px;
    }
    .lightbox-close {
      position: fixed; top: 20px; right: 24px;
      color: white; font-size: 2rem; cursor: pointer; z-index: 10000;
      background: none; border: none; line-height: 1;
    }
    .lightbox-nav {
      position: fixed; top: 50%; transform: translateY(-50%);
      color: white; font-size: 2.5rem; cursor: pointer; z-index: 10000;
      background: rgba(255,255,255,0.1); border: none; border-radius: 50%;
      width: 48px; height: 48px; display: flex; align-items: center; justify-content: center;
      transition: background 0.2s;
    }
    .lightbox-nav:hover { background: rgba(255,255,255,0.25); }
    .lightbox-prev { left: 16px; }
    .lightbox-next { right: 16px; }
    @media (max-width: 640px) {
      .gallery-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
      .lightbox-nav { display: none; }
    }
    """


def js():
    return """
<script>
(function(){
  const overlay = document.getElementById('galleryLightbox');
  if (!overlay) return;
  const img = overlay.querySelector('img');
  const cap = overlay.querySelector('.lightbox-caption');
  const items = document.querySelectorAll('.gallery-item');
  let current = 0;

  function show(i) {
    current = i;
    const el = items[i];
    img.src = el.querySelector('img').src;
    const c = el.querySelector('.gallery-caption');
    cap.textContent = c ? c.textContent : '';
    cap.style.display = c ? 'block' : 'none';
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function hide() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  function nav(dir) {
    current = (current + dir + items.length) % items.length;
    show(current);
  }

  items.forEach((el, i) => el.addEventListener('click', () => show(i)));
  overlay.addEventListener('click', e => { if (e.target === overlay) hide(); });
  overlay.querySelector('.lightbox-close').addEventListener('click', hide);
  overlay.querySelector('.lightbox-prev').addEventListener('click', e => { e.stopPropagation(); nav(-1); });
  overlay.querySelector('.lightbox-next').addEventListener('click', e => { e.stopPropagation(); nav(1); });
  document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('active')) return;
    if (e.key === 'Escape') hide();
    if (e.key === 'ArrowLeft') nav(-1);
    if (e.key === 'ArrowRight') nav(1);
  });
})();
</script>
"""


def _caption_from_filename(filename):
    """Convert 'kitchen-rewire.jpg' → 'Kitchen Rewire'."""
    name = Path(filename).stem
    return name.replace('-', ' ').replace('_', ' ').title()


def render(trade, theme, config=None):
    """Render gallery. Images come from gallery/ dir or config['gallery_images']."""
    slug = trade.get("slug", "")
    gallery_dir = Path(__file__).parent.parent / slug / "gallery"

    # Get images from config override or scan directory
    images = []
    if config and config.get("gallery_images"):
        images = config["gallery_images"]  # [{"src": "gallery/foo.jpg", "caption": "..."}]
    elif gallery_dir.exists():
        exts = {'.jpg', '.jpeg', '.png', '.webp', '.gif'}
        for f in sorted(gallery_dir.iterdir()):
            if f.suffix.lower() in exts:
                images.append({
                    "src": f"gallery/{f.name}",
                    "caption": _caption_from_filename(f.name)
                })

    if not images:
        return ""  # No images, no section

    items_html = ""
    for img in images:
        cap = img.get("caption", "")
        cap_html = f'<div class="gallery-caption">{cap}</div>' if cap else ""
        items_html += f"""
      <div class="gallery-item">
        <img src="{img['src']}" alt="{cap}" loading="lazy">
        {cap_html}
      </div>"""

    return f"""
  <section class="section">
    <div class="section-label">Our work</div>
    <h2>Gallery</h2>
    <div class="gallery-grid">{items_html}
    </div>
  </section>

  <div id="galleryLightbox" class="lightbox-overlay">
    <button class="lightbox-close">&times;</button>
    <button class="lightbox-nav lightbox-prev">&#8249;</button>
    <img src="" alt="">
    <button class="lightbox-nav lightbox-next">&#8250;</button>
    <div class="lightbox-caption"></div>
  </div>
"""
