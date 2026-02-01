"""Simple contact form styled to match the theme."""

def css():
    return """
    .contact-form { max-width: 480px; }
    .contact-form .form-group { margin-bottom: 16px; }
    .contact-form label { display: block; font-size: 0.85rem; font-weight: 600; margin-bottom: 6px; }
    .contact-form input, .contact-form textarea {
      width: 100%; padding: 12px 16px; border: 1px solid var(--border);
      border-radius: var(--radius); font-family: inherit; font-size: 0.9rem;
      transition: border-color 0.2s; background: white;
    }
    .contact-form input:focus, .contact-form textarea:focus {
      outline: none; border-color: var(--accent);
    }
    .contact-form textarea { min-height: 120px; resize: vertical; }
    .contact-form .btn-primary { width: 100%; justify-content: center; margin-top: 8px; }
    """

def render(trade, theme, config=None):
    phone = trade.get("phone", "")
    email = trade.get("email", "")
    mailto = email or f"info@{trade['slug']}.co.uk"

    return f"""
  <section class="section">
    <div class="section-label">Get in touch</div>
    <h2>Contact Us</h2>
    <form class="contact-form" action="mailto:{mailto}" method="post" enctype="text/plain">
      <div class="form-group">
        <label for="cf-name">Your Name</label>
        <input type="text" id="cf-name" name="name" placeholder="John Smith" required>
      </div>
      <div class="form-group">
        <label for="cf-phone">Phone Number</label>
        <input type="tel" id="cf-phone" name="phone" placeholder="07XXX XXXXXX" required>
      </div>
      <div class="form-group">
        <label for="cf-msg">Message</label>
        <textarea id="cf-msg" name="message" placeholder="Describe what you need help with..."></textarea>
      </div>
      <button type="submit" class="btn-primary">Send Message</button>
    </form>
  </section>"""
