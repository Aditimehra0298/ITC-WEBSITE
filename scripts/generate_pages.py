from pathlib import Path

pages = [
    (
        "about",
        "About Us",
        "Company overview, accreditation and laboratory infrastructure at ITC India.",
        [
            ("Overview", "ITC India is an ISO/IEC 17025 testing laboratory delivering independent, accurate and internationally accepted test reports."),
            ("Accreditation", "Our quality system and technical competence are aligned to NABL / ISO/IEC 17025 requirements."),
            ("Infrastructure", "Modern laboratory facilities support electrical, medical, lighting, environmental and industrial testing."),
        ],
    ),
    (
        "electrical",
        "Electrical Safety Testing",
        "Comprehensive electrical safety testing against applicable national and international standards.",
        [
            ("Overview", "We evaluate products and equipment for electrical safety to support market access and compliance."),
            ("Standards", "Typical standards include IEC 60335, IEC 62368-1 and IEC 60598-1 (as applicable to product scope)."),
        ],
    ),
    (
        "electro-medical",
        "Electro-Medical Equipment Testing",
        "Electrical safety and performance testing for medical electrical equipment and related systems.",
        [
            ("Overview", "Testing support for medical electrical equipment with focus on safety and essential performance."),
            ("Standards", "Applicable standards include IEC 60601-1, IEC 60601-1-2 and relevant IEC 60601-2 particulars."),
        ],
    ),
    (
        "laboratory",
        "Laboratory / Indicating Instruments",
        "Testing solutions for laboratory and indicating measuring instruments.",
        [
            ("Overview", "Support for laboratory and indicating equipment verification aligned to applicable product requirements."),
        ],
    ),
    (
        "environmental",
        "Environmental & IP Testing",
        "Evaluate durability and protection against dust, water, temperature and environmental conditions.",
        [
            ("Overview", "Environmental and ingress protection testing for product reliability in real-world conditions."),
            ("Climate", "Temperature, humidity and related climatic evaluations as per applicable IEC 60068 methods."),
            ("IP Testing", "IP code evaluation against IEC 60529 where within laboratory capability and scope."),
        ],
    ),
    (
        "mechanical",
        "Mechanical / Chemical Testing",
        "Mechanical and chemical evaluation support for industrial and consumer products.",
        [
            ("Overview", "Mechanical and chemical assessments to support durability, materials and product quality requirements."),
        ],
    ),
    (
        "calibration",
        "Calibration Services",
        "Calibration support for instruments and measuring systems.",
        [
            ("Overview", "Calibration services help maintain measurement confidence and process control."),
        ],
    ),
    (
        "electronic",
        "Electronic Product Testing",
        "Testing support for electronic products and assemblies.",
        [
            ("Overview", "Electronic product evaluation for safety, function and compliance readiness."),
        ],
    ),
    (
        "photometry",
        "LED & Photometric Testing",
        "Accurate testing of LED products and luminaires for safety, light output and performance.",
        [
            ("Overview", "Photometric and LED product testing for performance and compliance support."),
            ("Standards", "Relevant methods may include IEC 60598, LM-79, LM-80 and TM-21 as applicable."),
        ],
    ),
    (
        "emc",
        "EMC / EMI Testing",
        "Electromagnetic emissions and immunity testing for regulatory compliance.",
        [
            ("Overview", "EMC testing supports reliable operation and market compliance for electronic products."),
            ("Standards", "Common references include CISPR 11, CISPR 32 and IEC 61000 series."),
        ],
    ),
    (
        "packaging",
        "Packaging Testing",
        "Packaging evaluation to support product protection and transport readiness.",
        [
            ("Overview", "Packaging tests help verify protection during handling, storage and shipment."),
        ],
    ),
    (
        "software",
        "Software Testing",
        "Software quality and validation support for regulated and industrial applications.",
        [
            ("Overview", "Software testing services focused on reliability, quality and documentation support."),
        ],
    ),
    (
        "information-security",
        "Information Security",
        "Information security assessment and related compliance support.",
        [
            ("Overview", "Information security services to strengthen controls, risk management and compliance readiness."),
        ],
    ),
    (
        "quote",
        "Request a Quote",
        "Share your product and testing requirements — our team will respond with next steps.",
        [
            ("How it works", "Tell us the product category, applicable standards and target markets. We will review feasibility against our scope and get back to you."),
        ],
    ),
]

nav_items = [
    ("Home", "../index.html", False),
    ("About Us", "about.html", True),
    ("Electrical", "electrical.html", True),
    ("Electro-Medical", "electro-medical.html", True),
    ("Laboratory/Indicating", "laboratory.html", True),
    ("Environmental/IP", "environmental.html", True),
    ("Mechanical/Chemical", "mechanical.html", True),
    ("Calibration", "calibration.html", True),
    ("Electronic", "electronic.html", True),
    ("Photometry", "photometry.html", True),
    ("EMC", "emc.html", True),
    ("Packaging", "packaging.html", True),
    ("Software", "software.html", True),
    ("Information Security", "information-security.html", True),
]

sid_map = {
    "Overview": "",
    "Accreditation": ' id="accreditation"',
    "Infrastructure": ' id="infrastructure"',
    "Standards": ' id="standards"',
    "Climate": ' id="climate"',
    "IP Testing": ' id="ip-testing"',
    "How it works": "",
}


def nav_html(active_file: str) -> str:
    parts = ['<ul class="nav-list">']
    for label, href, has_sub in nav_items:
        active_cls = " is-active" if active_file == href else ""
        if not has_sub:
            parts.append(f'<li><a class="nav-link{active_cls}" href="{href}">{label}</a></li>')
        else:
            parts.append(
                f"""<li class="has-sub">
              <a class="nav-link{active_cls}" href="{href}">{label}</a>
              <ul class="sub-menu">
                <li><a href="{href}">Overview</a></li>
                <li><a href="quote.html">Request Quote</a></li>
              </ul>
            </li>"""
            )
    parts.append("</ul>")
    return "\n".join(parts)


def build_header(active_file: str) -> str:
    return f"""  <header class="site-header">
    <div class="header-top">
      <div class="header-top-inner">
        <div class="header-contacts">
          <a class="contact-link" href="tel:+919316473033"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" fill="currentColor"/></svg></span><span>+91 93164 73033</span></a>
          <a class="contact-link" href="mailto:info@itcindia.org"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm8 6.5L4.8 7.6h14.4L12 12.5zm0 1.4 7.5-5.2v8.3H4.5V8.7L12 13.9z" fill="currentColor"/></svg></span><span>info@itcindia.org</span></a>
          <span class="contact-link contact-location"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.2" fill="currentColor"/></svg></span><span>Gurugram, India</span></span>
        </div>
        <div class="header-top-actions">
          <form class="search-bar" role="search" action="#" method="get"><input type="search" name="q" placeholder="Search..." aria-label="Search" /><button type="submit" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></form>
          <a class="btn btn-primary btn-quote" href="quote.html">Get a Quote <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-main-inner">
        <a class="brand" href="../index.html" aria-label="ITC India Home">
          <img src="../assets/logo.png" alt="ITC India" class="brand-logo" />
          <span class="brand-tagline">Institute of Testing &amp; Certification India Pvt. Ltd.</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
        <nav class="main-nav" aria-label="Primary">
          {nav_html(active_file)}
        </nav>
      </div>
    </div>
  </header>"""


out = Path(r"d:\ITC WEBSITE\pages")
out.mkdir(parents=True, exist_ok=True)

for slug, title, intro, sections in pages:
    blocks = []
    for h, p in sections:
        sid = sid_map.get(h, "")
        blocks.append(f'<section class="page-block"{sid}><h2>{h}</h2><p>{p}</p></section>')
    body = "\n".join(blocks)
    quote_box = ""
    if slug == "quote":
        quote_box = """
        <form class="quote-form" action="#" method="post">
          <div class="form-grid">
            <label>Name<input type="text" name="name" required /></label>
            <label>Company<input type="text" name="company" /></label>
            <label>Email<input type="email" name="email" required /></label>
            <label>Phone<input type="tel" name="phone" /></label>
            <label class="full">Testing Requirement<textarea name="message" rows="5" required placeholder="Product type, standards, target market..."></textarea></label>
          </div>
          <button class="btn btn-primary" type="submit">Submit Request</button>
        </form>"""

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>{title} | ITC India</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Outfit:wght@500;600;700;800&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/styles.css" />
</head>
<body>
{build_header(slug + ".html")}
  <main class="page-main">
    <section class="page-hero">
      <div class="page-hero-inner">
        <p class="page-eyebrow">ITC India</p>
        <h1>{title}</h1>
        <p class="page-intro">{intro}</p>
        <div class="page-actions">
          <a class="btn btn-primary" href="quote.html">Get a Quote →</a>
          <a class="btn btn-outline-navy" href="../index.html">Back to Home</a>
        </div>
      </div>
    </section>
    <div class="page-content">
      {body}
      {quote_box}
    </div>
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <p>© ITC India — Institute of Testing &amp; Certification India Pvt. Ltd.</p>
      <p><a href="mailto:info@itcindia.org">info@itcindia.org</a> · +91 93164 73033</p>
    </div>
  </footer>
  <script src="../js/main.js"></script>
</body>
</html>
"""
    (out / f"{slug}.html").write_text(html, encoding="utf-8")
    print("wrote", slug)

print("done")
