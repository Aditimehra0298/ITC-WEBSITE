"""Sync inner page headers to match screenshot split nav."""
from pathlib import Path
import re

ROOT = Path(r"d:\ITC WEBSITE\pages")

LEFT = [
    ("calibration", "Calibration"),
    ("electrical", "Electrical"),
    ("electro-medical", "Electro-Medical"),
    ("electronic", "Electronic"),
    ("emc", "EMC"),
    ("environmental", "Environmental/IP"),
]

RIGHT = [
    ("information-security", "Information Security"),
    ("laboratory", "Laboratory/Indicating"),
    ("mechanical", "Mechanical/Chemical"),
    ("packaging", "Packaging"),
    ("photometry", "Photometry"),
    ("software", "Software"),
]


def items(services, active_slug: str) -> str:
    out = []
    for slug, label in services:
        active = " is-active" if slug == active_slug else ""
        out.append(
            f"""<li class="has-sub">
              <a class="nav-link{active}" href="{slug}.html">{label} <span class="caret" aria-hidden="true">▾</span></a>
              <ul class="sub-menu">
                <li><a href="{slug}.html">Overview</a></li>
                <li><a href="quote.html">Request Quote</a></li>
              </ul>
            </li>"""
        )
    return "\n".join(out)


def header_html(active_slug: str) -> str:
    return f"""  <header class="site-header">
    <div class="header-top">
      <div class="header-top-inner">
        <div class="header-contacts">
          <a class="contact-link" href="tel:+919316473033"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" fill="currentColor"/></svg></span><span>+91 93164 73033</span></a>
          <a class="contact-link" href="mailto:info@itcindia.org"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm8 6.5L4.8 7.6h14.4L12 12.5zm0 1.4 7.5-5.2v8.3H4.5V8.7L12 13.9z" fill="currentColor"/></svg></span><span>info@itcindia.org</span></a>
          <span class="contact-link contact-location"><span class="contact-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.2" fill="currentColor"/></svg></span><span>Gurugram, India</span></span>
        </div>
        <p class="header-company">Institute of Testing &amp; Certification India Pvt. Ltd.</p>
        <div class="header-top-actions">
          <form class="search-bar" role="search" action="#" method="get"><input type="search" name="q" placeholder="Search..." aria-label="Search" /><button type="submit" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></form>
          <a class="btn btn-primary btn-quote" href="quote.html">Get a Quote <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-main-inner">
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
        <nav class="main-nav main-nav--left" aria-label="Primary left">
          <ul class="nav-list">
{items(LEFT, active_slug)}
          </ul>
        </nav>
        <a class="brand" href="../index.html" aria-label="ITC India Home">
          <img src="../assets/logo.png" alt="ITC India" class="brand-logo" />
        </a>
        <nav class="main-nav main-nav--right" aria-label="Primary right">
          <ul class="nav-list">
{items(RIGHT, active_slug)}
          </ul>
        </nav>
      </div>
    </div>
  </header>"""


def main():
    for path in sorted(ROOT.glob("*.html")):
        text = path.read_text(encoding="utf-8")
        slug = path.stem
        active = "" if slug in ("about", "quote") else slug
        updated, n = re.subn(
            r"<header class=\"site-header\">.*?</header>",
            header_html(active),
            text,
            count=1,
            flags=re.S,
        )
        if n:
            updated = re.sub(
                r'href="\.\./css/styles\.css[^"]*"',
                'href="../css/styles.css?v=14"',
                updated,
                count=1,
            )
            path.write_text(updated, encoding="utf-8")
            print("updated", path.name)
        else:
            print("SKIP", path.name)


if __name__ == "__main__":
    main()
