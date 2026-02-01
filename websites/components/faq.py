"""FAQ accordion using details/summary. Bold accent markers."""

FAQS_BY_TRADE = {
    "plumbers": [
        ("How quickly can you respond to emergencies?", "We aim to respond to emergency plumbing calls within the hour. For non-urgent work, we'll arrange a convenient time that suits your schedule."),
        ("Do you provide free quotes?", "Yes, we provide free, no-obligation quotes for all plumbing work. Just give us a call and describe the issue — we'll give you an honest price upfront."),
        ("Are you Gas Safe registered?", "If gas work is required, we only use Gas Safe registered engineers. Your safety is our top priority."),
        ("What areas do you cover?", "We cover {area} and surrounding areas. Give us a call to check if we cover your location."),
        ("Do you charge a call-out fee?", "We don't charge hidden fees. Our pricing is transparent and agreed before any work begins."),
    ],
    "gas-engineers": [
        ("Are you Gas Safe registered?", "Yes, we are fully Gas Safe registered. You can verify our registration number on the Gas Safe Register website."),
        ("How often should I get my boiler serviced?", "We recommend an annual boiler service to keep your system running safely and efficiently, and to maintain your manufacturer warranty."),
        ("Do you offer emergency call-outs?", "Yes, we provide emergency call-outs for gas leaks, boiler breakdowns, and heating failures. Call us anytime."),
        ("How much does a new boiler cost?", "Boiler costs vary depending on the type and size needed. We offer free quotes and can discuss finance options to spread the cost."),
        ("What areas do you cover?", "We cover {area} and surrounding areas. Contact us to confirm coverage for your postcode."),
    ],
    "electricians": [
        ("Are you a qualified electrician?", "Yes, we are fully qualified and insured. We hold all the necessary certifications for domestic and commercial electrical work."),
        ("Do you offer emergency electrical services?", "Yes, we provide emergency call-outs for power outages, sparking sockets, tripped fuse boards, and other urgent electrical issues."),
        ("How much does a rewire cost?", "Rewiring costs depend on the size of your property. We offer free surveys and quotes so you know exactly what to expect."),
        ("Do you issue electrical certificates?", "Yes, we provide all required certificates including EICRs, minor works certificates, and Part P building regulation certificates."),
        ("What areas do you cover?", "We cover {area} and the surrounding region. Contact us to confirm."),
    ],
    "locksmiths": [
        ("How quickly can you get to me?", "We aim for a 15-30 minute response time across our coverage area. We're available 24/7 for emergency lockouts."),
        ("Will you damage my door?", "We use non-destructive entry techniques wherever possible. In most lockout situations, we can gain entry without damaging your lock or door."),
        ("Do you provide a receipt and guarantee?", "Yes, all our work comes with a receipt and guarantee. We only fit quality locks from trusted brands."),
        ("How much does it cost to change a lock?", "Lock change prices depend on the type of lock required. We'll give you a clear price before starting any work."),
        ("Are you available at night and weekends?", "Yes, we operate 24/7, 365 days a year — including nights, weekends, and bank holidays."),
    ],
    "roofers": [
        ("Do you offer free roof inspections?", "Yes, we provide free inspections and honest assessments of your roof condition, with a no-obligation quote for any work needed."),
        ("How long does a new roof last?", "A quality new roof typically lasts 40-60 years depending on the materials used. We only use premium materials."),
        ("Can you repair a leak quickly?", "Yes, we offer emergency roof repair services and aim to stop leaks as quickly as possible to prevent further damage."),
        ("Do you work on flat roofs?", "Yes, we handle all types of roofing including flat roofs, pitched roofs, tile, slate, and felt."),
        ("What areas do you cover?", "We cover {area} and surrounding areas. Give us a call to check."),
    ],
    "fencing": [
        ("How long does it take to install a fence?", "Most domestic fencing jobs are completed within 1-2 days. Larger projects may take longer — we'll confirm the timeline in your quote."),
        ("Do you remove old fencing?", "Yes, we can remove and dispose of your old fencing as part of the job."),
        ("What type of fence is best for my garden?", "It depends on your needs — we'll advise on the best option for privacy, security, and aesthetics during our free consultation."),
        ("Do you supply the materials?", "Yes, we supply all materials. We use quality timber and fittings built to last."),
        ("What areas do you cover?", "We cover {area} and surrounding areas. Contact us for a free quote."),
    ],
    "builders": [
        ("Do you handle planning permission?", "We can advise on planning requirements and help manage the application process for your project."),
        ("How long does an extension take?", "A typical single-storey extension takes 8-12 weeks. We'll provide a detailed timeline in your quote."),
        ("Do you provide a written quote?", "Yes, all our quotes are detailed, written, and fixed — no hidden costs or surprises."),
        ("Are you insured?", "Yes, we carry full public liability insurance and employer's liability insurance for your peace of mind."),
        ("What areas do you cover?", "We cover {area} and surrounding areas. Get in touch to discuss your project."),
    ],
    "landscapers": [
        ("Do you offer free consultations?", "Yes, we provide free garden consultations where we'll discuss your ideas, assess the space, and provide a detailed quote."),
        ("How long does a landscaping project take?", "Timelines vary by project size. A typical patio or fencing job takes 2-5 days. Larger garden transformations may take 1-2 weeks."),
        ("Do you provide aftercare advice?", "Yes, we'll give you maintenance tips to keep your garden looking its best long after we've finished."),
        ("Can you work during winter?", "Yes, we work year-round. Hard landscaping like paving and fencing can be done in most weather conditions."),
        ("What areas do you cover?", "We cover {area} and the surrounding area. Give us a call to confirm."),
    ],
    "handymen": [
        ("What kind of jobs do you handle?", "We handle a wide range of jobs including furniture assembly, shelving, TV mounting, minor plumbing and electrics, painting, and general repairs."),
        ("Do you charge by the hour?", "We offer both hourly and fixed-price rates depending on the job. We'll agree the price before starting."),
        ("Can you bring materials?", "Yes, we can pick up materials for you or work with materials you've already purchased."),
        ("Is there a minimum charge?", "We have a small minimum charge to cover travel and setup. We'll always be upfront about costs."),
        ("What areas do you cover?", "We cover {area} and surrounding areas. Contact us to check."),
    ],
    "painters": [
        ("Do you offer free quotes?", "Yes, we provide free, no-obligation quotes. We'll visit your property to assess the work and give you an accurate price."),
        ("How long does it take to paint a room?", "A standard room typically takes 1-2 days including preparation, priming, and two coats."),
        ("Do you move furniture?", "Yes, we'll carefully move and cover furniture before starting work, and put everything back when we're done."),
        ("Do you supply the paint?", "We can supply quality paints or work with paint you've chosen yourself — whichever you prefer."),
        ("What areas do you cover?", "We cover {area} and surrounding areas. Get in touch for a free quote."),
    ],
}

def css():
    return """
    .faq-list { display: flex; flex-direction: column; gap: 8px; }
    .faq-list details {
      border: 2px solid #e0e0e0; border-radius: var(--radius);
      overflow: hidden; background: white; transition: all 0.2s;
    }
    .faq-list details[open] { border-color: var(--accent); }
    .faq-list summary {
      padding: 20px 24px; font-weight: 700; font-size: 0.95rem;
      cursor: pointer; list-style: none; display: flex;
      justify-content: space-between; align-items: center;
      color: var(--charcoal);
    }
    .faq-list summary::-webkit-details-marker { display: none; }
    .faq-list summary::after { content: '+'; font-size: 1.4rem; font-weight: 700; color: var(--accent); transition: transform 0.2s; }
    .faq-list details[open] summary::after { content: '−'; }
    .faq-answer { padding: 0 24px 20px; font-size: 0.9rem; line-height: 1.7; color: var(--stone); }
    """

def render(trade, theme, config=None):
    config = config or {}
    custom_faqs = config.get("custom_faq")
    area = trade.get("area", "your area")

    if custom_faqs:
        faqs = custom_faqs
    else:
        trade_type = trade.get("trade_type", "")
        faqs = FAQS_BY_TRADE.get(trade_type, FAQS_BY_TRADE.get("handymen", []))

    items = ""
    for faq_item in faqs:
        if isinstance(faq_item, dict):
            q, a = faq_item.get("q", ""), faq_item.get("a", "")
        else:
            q, a = faq_item
        q_fmt = q.replace("{area}", area)
        a_fmt = a.replace("{area}", area)
        items += f"""<details>
        <summary>{q_fmt}</summary>
        <div class="faq-answer">{a_fmt}</div>
      </details>\n"""

    return f"""
  <section class="section">
    <div class="section-label">Common questions</div>
    <h2>Frequently Asked Questions</h2>
    <div class="faq-list">{items}</div>
  </section>"""
