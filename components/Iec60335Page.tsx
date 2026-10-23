import Image from "next/image";
import Link from "next/link";
import {
  iec60335Applications,
  iec60335Capabilities,
  iec60335Evaluate,
  iec60335Params,
  iec60335Products,
  iec60335References,
  iec60335Related,
  iec60335Sidebar,
  iec60335Why,
} from "@/lib/iec60335";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Iec60335Page() {
  return (
    <main className="std-page">
      {/* Hero: text left, appliances image right — same as mockup */}
      <section className="std-hero std-hero--split">
        <div className="std-hero-copy">
          <div className="std-hero-copy-inner">
            <nav className="std-crumbs std-crumbs--dark" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/electrical">Electrical Testing</Link>
              <span>/</span>
              <span>IEC 60335-1</span>
            </nav>
            <p className="std-eyebrow std-eyebrow--blue">Household Electrical Appliance Testing</p>
            <h1>IEC 60335-1 / IS 302-1 and BS EN 60335-1</h1>
            <p className="std-hero-lead std-hero-lead--dark">
              Safety testing for household and similar electrical appliances under normal operating and
              fault conditions.
            </p>
            <div className="std-hero-actions">
              <Link className="btn btn-primary" href="/quote">
                Get a Quote <span aria-hidden="true">→</span>
              </Link>
              <a className="btn btn-outline-navy" href="mailto:info@itcindia.org">
                Talk to Our Experts
              </a>
            </div>
          </div>
        </div>
        <div className="std-hero-media">
          <Image
            src="/std/hero.jpg"
            alt="Household electrical appliances"
            fill
            priority
            sizes="(max-width:900px) 100vw, 50vw"
          />
        </div>
      </section>

      <section className="std-trust">
        <div className="std-wrap std-trust-grid">
          {[
            { t: "NABL Accredited", d: "M12 3l7 3v5c0 4.6-2.9 8-7 9.2C7.9 19 5 15.6 5 11V6l7-3zM9.2 11.8l1.9 1.9 3.8-3.9" },
            { t: "Reliable & Accurate", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v4l2.5 2.5" },
            { t: "Global Standards", d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.8 12h16.4M12 3.8c2.2 2.3 3.4 5.1 3.4 8.2S14.2 18 12 20.2" },
            { t: "Expert Technical Team", d: "M9 9a2.4 2.4 0 1 0 0-4.8A2.4 2.4 0 0 0 9 9zM16 9.5a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2zM4 18.2c.6-2.3 2.5-3.6 5-3.6s4.4 1.3 5 3.6" },
          ].map((item) => (
            <div key={item.t} className="std-trust-item">
              <span className="std-trust-ico">
                <Icon d={item.d} />
              </span>
              <strong>{item.t}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="std-body">
        <div className="std-wrap std-layout">
          <div className="std-main">
            <h2>IEC 60335-1 Safety Testing</h2>
            <p>
              ITC India provides IEC 60335-1 safety testing for household and similar electrical
              appliances to help manufacturers evaluate electrical, thermal, mechanical and fire-related
              hazards before certification or market release.
            </p>
            <p>
              IEC 60335-1 establishes the general safety requirements used across the IEC 60335 family of
              appliance standards. The base standard is combined with the applicable product-specific Part
              2 standard for appliances such as washing machines, electric irons, shavers, kitchen
              machines, warming plates, refrigerators and other household products.
            </p>

            <h2>IS 302-1 and BS EN 60335-1 Testing</h2>
            <p>
              In India, IS 302 (Part 1):2024 is aligned with IEC 60335-1:2020. BS EN 60335-1 is the
              European adoption of the same safety family for market access where EN-based conformity is
              required.
            </p>

            {/* Callout — same position as mockup */}
            <aside className="std-callout">
              <span className="std-callout-ico" aria-hidden="true">
                <Icon d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5" />
              </span>
              <div>
                <strong>Adopted in India as IS 302-1 Part 1</strong>
                <p>
                  The Indian National Standard for household and similar electrical appliances — aligned
                  with IEC 60335-1 for domestic and similar use.
                </p>
              </div>
              <span className="std-callout-map" aria-hidden="true">
                <Icon d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.8 12h16.4M12 3.8c2.2 2.3 3.4 5.1 3.4 8.2S14.2 18 12 20.2C9.8 18 8.6 15.1 8.6 12S9.8 6.1 12 3.8z" />
              </span>
            </aside>

            {/* Checklist left + tech photo right — same as mockup */}
            <div className="std-eval-row">
              <div className="std-eval-box">
                <h3>These standards help evaluate:</h3>
                <ul className="std-eval-list">
                  {iec60335Evaluate.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="std-eval-media">
                <Image src="/std/tech-small.jpg" alt="ITC India testing engineer" fill sizes="320px" />
              </div>
            </div>

            {/* Products grid — same position */}
            <h2>Products Covered Under IEC 60335-1</h2>
            <div className="std-products">
              {iec60335Products.map((item) => (
                <article key={item.title} className="std-product">
                  <div className="std-product-media">
                    <Image src={item.image} alt={item.title} fill sizes="280px" />
                  </div>
                  <strong>{item.title}</strong>
                </article>
              ))}
            </div>

            {/* Wide kitchen banner under products — same as mockup */}
            <div className="std-banner">
              <Image src="/std/hero.jpg" alt="Kitchen and household appliances" fill sizes="960px" />
            </div>
          </div>

          {/* Sidebar right — services + quote card with person photo */}
          <aside className="std-side">
            <div className="std-side-box">
              <h3>Other Testing Services</h3>
              <ul>
                {iec60335Sidebar.map((item) => (
                  <li key={item.label}>
                    <Link className={item.active ? "is-active" : undefined} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="std-quote-box">
              <div className="std-quote-photo">
                <Image src="/std/quote-person.jpg" alt="" fill sizes="320px" />
              </div>
              <div className="std-quote-body">
                <h3>Need This Testing? Get a Quote Today!</h3>
                <p>Share product details and we will respond with scope, timeline and charges.</p>
                <Link className="btn btn-primary" href="/quote">
                  Get a Quote <span aria-hidden="true">→</span>
                </Link>
                <a className="std-phone" href="tel:+919316473033">
                  Tel: 09316473033
                </a>
                <a className="std-phone" href="mailto:info@itcindia.org">
                  info@itcindia.org
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Params: lab image LEFT, icons RIGHT */}
      <section className="std-params">
        <div className="std-wrap std-params-grid">
          <div className="std-params-media">
            <Image src="/std/params-lab.jpg" alt="Safety testing laboratory" fill sizes="640px" />
          </div>
          <div>
            <h2>Safety Testing Parameters</h2>
            <div className="std-param-list">
              {iec60335Params.map((item) => (
                <div key={item.title} className="std-param">
                  <span className="std-param-ico">
                    <Icon d={item.icon} />
                  </span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities: text LEFT, lab image RIGHT */}
      <section className="std-cap">
        <div className="std-wrap std-cap-grid">
          <div>
            <h2>Testing Capabilities at ITC India</h2>
            <ul>
              {iec60335Capabilities.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="std-cap-media">
            <Image src="/std/cap-lab.jpg" alt="ITC India laboratory capabilities" fill sizes="640px" />
          </div>
        </div>
      </section>

      <section className="std-apps">
        <div className="std-wrap">
          <h2>Applications</h2>
          <div className="std-apps-grid">
            {iec60335Applications.map((item) => (
              <article key={item.title} className="std-app">
                <span className="std-app-ico">
                  <Icon d={item.icon} />
                </span>
                <strong>{item.title}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="std-info">
        <div className="std-wrap std-info-grid">
          <div>
            <h3>Related Testing Services</h3>
            <ul>
              {iec60335Related.map((item) => (
                <li key={item.label}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Reference Links</h3>
            <ul>
              {iec60335References.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Why Choose ITC India</h3>
            <ul className="std-why">
              {iec60335Why.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="std-cta">
        <Image src="/cta-circuit.jpg" alt="" fill sizes="100vw" className="std-cta-bg" />
        <div className="std-wrap std-cta-inner">
          <div>
            <h2>Ensure Product Safety and Global Compliance</h2>
            <p className="std-cta-lead">
              Get in touch today for reliable appliance safety testing services.
            </p>
          </div>
          <div className="std-cta-actions">
            <Link className="btn btn-primary" href="/quote">
              Get a Quote <span aria-hidden="true">→</span>
            </Link>
            <a className="btn btn-ghost-light" href="mailto:info@itcindia.org">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
