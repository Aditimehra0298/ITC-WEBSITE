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
  iec60335Trust,
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
      {/* Hero: white text left → soft fade → appliances image right */}
      <section className="std-hero std-hero--fade">
        <div className="std-hero-media">
          <Image
            src="/std/hero.jpg"
            alt="Household electrical appliances"
            fill
            priority
            sizes="(max-width:900px) 100vw, 55vw"
          />
        </div>
        <div className="std-hero-shade" aria-hidden="true" />
        <div className="std-hero-panel">
          <nav className="std-crumbs std-crumbs--dark" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/#section-1">Testing Services</Link>
            <span aria-hidden="true">/</span>
            <Link href="/electrical">Electrical Testing</Link>
            <span aria-hidden="true">/</span>
            <span className="std-crumb-current">IEC 60335-1</span>
          </nav>
          <p className="std-eyebrow std-eyebrow--blue">Household Electrical Appliance Testing</p>
          <h1>IEC 60335-1 / IS 302-1 AND BS EN 60335-1</h1>
          <p className="std-hero-lead std-hero-lead--dark">
            Safety testing for household and similar electrical appliances under normal operating and
            fault conditions.
          </p>
          <div className="std-hero-actions">
            <Link className="btn btn-primary" href="/quote">
              Get a Quote <span aria-hidden="true">→</span>
            </Link>
            <a className="btn btn-outline-navy" href="mailto:info@itcindia.org">
              Talk to the Experts
            </a>
          </div>
        </div>
      </section>

      <section className="std-trust">
        <div className="std-wrap std-trust-grid">
          {iec60335Trust.map((item) => (
            <div key={item.t} className="std-trust-item">
              <span className="std-trust-ico">
                <Icon d={item.d} />
              </span>
              <div>
                <strong>{item.t}</strong>
                <span className="std-trust-sub">{item.s}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="std-body">
        <div className="std-wrap std-layout">
          <div className="std-main">
            <p className="std-kicker">Overview</p>
            <h2>IEC 60335-1 Safety Testing</h2>
            <p>
              IEC 60335-1 Safety Testing India is used to evaluate the safety of household and similar
              electrical appliances under normal operating and fault conditions.
            </p>
            <p>
              At ITC India, we provide IEC 60335-1 Safety Testing India services for manufacturers,
              importers, and product developers. Our testing services help electrical appliances comply
              with international and Indian safety requirements.
            </p>
            <p>
              IEC 60335-1 specifies general safety requirements for household and similar electrical
              appliances. Additionally, IS 302-1 and BS EN 60335-1 are aligned standards used for
              compliance in India and European markets.
            </p>

            {/* Callout — document icon + copy + world map graphic */}
            <aside className="std-callout">
              <span className="std-callout-ico" aria-hidden="true">
                <Icon d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5" />
              </span>
              <div className="std-callout-copy">
                <strong>Adopted in India as IS 302-1 (Part 1)</strong>
                <p>Harmonised with IEC 60335-1 and recognised for global market access.</p>
              </div>
              <div className="std-callout-map">
                <Image
                  src="/std/world-map.png"
                  alt="Global market access"
                  width={160}
                  height={100}
                  className="std-callout-map-img"
                />
              </div>
            </aside>

            <p className="std-kicker">Standards</p>
            <h2>IS 302-1 and BS EN 60335-1 Testing</h2>
            <p>
              IS 302-1 is the Indian standard harmonised with IEC 60335-1 for electrical appliance safety
              evaluation. BS EN 60335-1 is the European adoption of IEC 60335-1 used for household
              appliance safety compliance in European markets.
            </p>

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
            <p>
              IEC 60335-1 Safety Testing India applies to a wide range of household and commercial
              electrical appliances, including:
            </p>
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
              <Image
                src="/std/products-banner.png"
                alt="Kitchen and household appliances"
                fill
                sizes="960px"
              />
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
                      <span>{item.label}</span>
                      <span className="std-side-arrow" aria-hidden="true">
                        ›
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="std-quote-box">
              <Image
                src="/std/quote-person.png"
                alt=""
                fill
                sizes="400px"
                className="std-quote-bg"
              />
              <div className="std-quote-body">
                <h3>Need This Testing? Get a Quote Today!</h3>
                <p>Ensure your products meet international safety requirements with ITC India.</p>
                <Link className="btn btn-primary" href="/quote">
                  Get a Quote <span aria-hidden="true">→</span>
                </Link>
                <a className="std-phone" href="tel:+919316473033">
                  +91 93164 73033
                </a>
                <a className="std-phone" href="tel:+919882382261">
                  +91 98823 82261
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
            <p className="std-params-note">
              Additionally, testing helps identify safety risks before product launch and certification.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities: text LEFT, lab image RIGHT */}
      <section className="std-cap">
        <div className="std-wrap std-cap-grid">
          <div>
            <h2>Testing Capabilities at ITC India</h2>
            <p>ITC India provides:</p>
            <ul>
              {iec60335Capabilities.map((item) => (
                <li key={item}>
                  <span aria-hidden="true">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <p>
              Our laboratory infrastructure supports testing for domestic, commercial, and industrial
              electrical products.
            </p>
          </div>
          <div className="std-cap-media">
            <Image src="/std/cap-lab.jpg" alt="ITC India laboratory capabilities" fill sizes="640px" />
          </div>
        </div>
      </section>

      <section className="std-apps">
        <div className="std-wrap">
          <h2>Applications</h2>
          <p className="std-apps-lead">Safety testing is applicable for:</p>
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

      <section className="std-cta std-cta--wide">
        <Image src="/std/cta-pcb.png" alt="" fill sizes="100vw" className="std-cta-bg" priority={false} />
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
