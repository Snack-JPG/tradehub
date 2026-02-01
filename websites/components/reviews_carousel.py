"""Horizontally scrolling review cards with auto-rotate. Dark section, accent stars."""

def css():
    return """
    .reviews-section { background: var(--warm); padding: 72px 0; overflow: hidden; }
    .reviews-inner { max-width: 960px; margin: 0 auto; padding: 0 24px; }
    .reviews-header {
      display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 32px;
    }
    .reviews-header h2 {
      font-family: 'Bebas Neue', sans-serif; font-size: 2.5rem;
      text-transform: uppercase; letter-spacing: 0.04em; line-height: 1.1;
    }
    .reviews-nav { display: flex; gap: 8px; }
    .reviews-nav button {
      width: 44px; height: 44px; border-radius: var(--radius);
      border: 2px solid var(--border); background: white; cursor: pointer;
      font-size: 1.1rem; color: var(--charcoal); transition: all 0.2s;
      display: flex; align-items: center; justify-content: center;
    }
    .reviews-nav button:hover { border-color: var(--accent); background: var(--accent); color: white; }
    .carousel-track { display: flex; gap: 16px; transition: transform 0.4s ease; }
    .review-card {
      background: white; border-radius: var(--radius); padding: 28px;
      min-width: 280px; max-width: 280px; flex-shrink: 0;
      border: 2px solid #e0e0e0;
    }
    .review-stars { color: var(--accent); font-size: 1.1rem; letter-spacing: 2px; }
    .review-text {
      margin-top: 14px; font-size: 0.9rem; line-height: 1.6;
      display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
      color: var(--charcoal);
    }
    .review-author { margin-top: 16px; font-size: 0.8rem; color: var(--stone); font-weight: 600; }
    .reviews-count { text-align: center; margin-top: 28px; font-size: 0.85rem; color: var(--stone); }
    @media (max-width: 640px) {
      .review-card { min-width: 260px; max-width: 260px; }
      .reviews-header { flex-direction: column; align-items: flex-start; gap: 16px; }
    }
    """

def js():
    return """
    <script>
    (function(){
      const carousel = document.getElementById('carousel');
      if (!carousel) return;
      const cards = carousel.children;
      const totalCards = cards.length;
      if (totalCards === 0) return;
      let currentIndex = 0;
      let autoPlay;
      function goToCard(index) {
        currentIndex = index;
        if (currentIndex >= totalCards) currentIndex = 0;
        if (currentIndex < 0) currentIndex = totalCards - 1;
        const card = cards[currentIndex];
        const offset = card.offsetLeft - 24;
        carousel.style.transform = 'translateX(-' + offset + 'px)';
      }
      window.scrollCarousel = function(d) { goToCard(currentIndex + d); };
      function startAP() { autoPlay = setInterval(function(){ goToCard(currentIndex + 1); }, 3000); }
      function stopAP() { clearInterval(autoPlay); }
      startAP();
      carousel.parentElement.addEventListener('mouseenter', stopAP);
      carousel.parentElement.addEventListener('mouseleave', startAP);
      document.querySelectorAll('.reviews-nav button').forEach(function(btn){
        btn.addEventListener('click', function(){ stopAP(); setTimeout(startAP, 5000); });
      });
      let touchStartX = 0;
      carousel.addEventListener('touchstart', function(e){ touchStartX = e.changedTouches[0].screenX; stopAP(); }, {passive:true});
      carousel.addEventListener('touchend', function(e){
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) window.scrollCarousel(diff > 0 ? 1 : -1);
        setTimeout(startAP, 5000);
      }, {passive:true});
    })();
    </script>"""

def render(trade, theme, config=None):
    five_star = [r for r in trade.get("reviews", []) if r.get("rating", 5) >= 5]
    if not five_star:
        five_star = trade.get("reviews", [])
    if not five_star:
        return ""

    months = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    cards = ""
    for r in five_star:
        stars = "★" * int(r.get("rating", 5))
        text = r.get("text", "")[:180]
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
        cards += f"""<div class="review-card">
          <div class="review-stars">{stars}</div>
          <p class="review-text">"{text}"</p>
          <p class="review-author">— {author}{f' · {date_display}' if date_display else ''}</p>
        </div>\n"""

    return f"""
  <section class="reviews-section">
    <div class="reviews-inner">
      <div class="reviews-header">
        <div>
          <div class="section-label">What people say</div>
          <h2>Customer Reviews</h2>
        </div>
        <div class="reviews-nav">
          <button onclick="scrollCarousel(-1)" aria-label="Previous">←</button>
          <button onclick="scrollCarousel(1)" aria-label="Next">→</button>
        </div>
      </div>
      <div class="carousel-track" id="carousel">
        {cards}
      </div>
      <p class="reviews-count">Selected reviews · {trade.get('review_count', 0)} reviews on Google</p>
    </div>
  </section>"""
