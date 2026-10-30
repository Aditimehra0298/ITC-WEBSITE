import Image from "next/image";
import Link from "next/link";
import {
  ironApplications,
  ironCapabilities,
  ironParams,
  ironProducts,
  ironReferences,
  ironRelated,
  ironSidebar,
  ironTrust,
  ironWhy,
} from "@/lib/iec60335-2-3";

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Photo({
  src,
  alt,
  wide,
  side,
}: {
  src: string;
  alt: string;
  wide?: boolean;
  side?: boolean;
}) {
  const cls = ["std-photo", wide ? "std-photo--wide" : "", side ? "std-photo--side" : ""]
    .filter(Boolean)
    .join(" ");
  return (
    <div className={cls}>
      <Image src={src} alt={alt} fill sizes={wide ? "(max-width:900px) 100vw, 720px" : "360px"} />
    </div>
  );
}

export default function Iec6033523Page() {
  return (
    <main className="std-page">
      <section className="std-hero std-hero--fade std-hero--iron">
        <div className="std-hero-media">
          <Image
            src="/std/iron/01_Three_Steam_Irons.png"
            alt="Three steam irons for IEC 60335-2-3 safety testing"
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
            <Link href="/electrical">Electrical Safety Testing</Link>
            <span aria-hidden="true">/</span>
            <span className="std-crumb-current">IEC 60335-2-3 Electric Irons Safety Testing</span>
          </nav>
          <p className="std-eyebrow std-eyebrow--blue">Electrical Safety Testing</p>
          <h1>IEC 60335-2-3 ELECTRIC IRONS SAFETY TESTING</h1>
          <p className="std-hero-lead std-hero-lead--dark">
            Safety testing for electric irons and similar household electrical appliances as per IEC
            60335-2-3 and IS 302-2-3.
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
      </section>

      <section className="std-trust">
        <div className="std-wrap std-trust-grid">
          {ironTrust.map((item) => (
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
            <h2>IEC 60335-2-3 Safety Testing</h2>
            <p>
              IEC 60335-2-3 is the international safety standard for electric irons. It sets particular
              requirements used together with IEC 60335-1 to evaluate electrical, thermal, mechanical and
              fire-related hazards before products enter the market.
            </p>
            <p>
              At ITC India, we provide IEC 60335-2-3 Electric Irons Safety Testing for manufacturers,
              importers and product developers. Our testing helps electric irons and similar appliances
              comply with international and Indian safety requirements.
            </p>
            <p>
              The standard covers construction, insulation, performance, marking and labelling
              requirements so products released to market meet strict safety expectations for household
              and similar use.
            </p>

            <aside className="std-callout">
              <span className="std-callout-ico" aria-hidden="true">
                <Icon d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5" />
              </span>
              <div className="std-callout-copy">
                <strong>Global safety compliance for electric irons</strong>
                <p>
                  Ensure your electric irons and household appliances meet global safety standards with
                  ITC India.
                </p>
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

            <p className="std-kicker">Indian Standard</p>
            <h2>IS 302-2-3 Safety Testing</h2>
            <div className="std-eval-row">
              <div>
                <p>
                  IS 302-2-3 is the Indian standard aligned with IEC 60335-2-3 for electric iron safety
                  evaluation. It is used with the applicable general requirements of IS 302 (Part 1) /
                  IEC 60335-1.
                </p>
                <p>
                  Together, these standards help manufacturers demonstrate compliance for domestic and
                  export markets, covering dry irons, steam irons and related ironing appliances.
                </p>
              </div>
              <Photo
                src="/std/iron/02_Ironing_in_Action.png"
                alt="Ironing in action — IS 302-2-3 testing"
                side
              />
            </div>

            <h2>Products Covered Under IEC 60335-2-3</h2>
            <div className="std-eval-row">
              <div className="std-eval-box">
                <ul className="std-eval-list std-eval-list--2">
                  {ironProducts.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Photo
                src="/std/iron/07_Upright_Steam_Iron.png"
                alt="Products covered under IEC 60335-2-3"
                side
              />
            </div>

            <h2>Safety Testing Parameters</h2>
            <div className="std-param-cards">
              {ironParams.map((item) => (
                <div key={item.title} className="std-param-card">
                  <span className="std-param-ico">
                    <Icon d={item.icon} />
                  </span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
            <Photo
              src="/std/iron/03_Steam_Iron_Soleplate.png"
              alt="Steam iron soleplate safety testing"
              wide
            />

            <h2>Testing Capabilities at ITC India</h2>
            <div className="std-eval-row">
              <div>
                <p>ITC India provides:</p>
                <ul className="std-why">
                  {ironCapabilities.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Photo
                src="/std/iron/05_Filling_Steam_Iron.png"
                alt="Filling steam iron — testing capabilities"
                side
              />
            </div>
            <Photo
              src="/std/iron/06_Steam_Iron_on_Fabric.png"
              alt="Steam iron on fabric during evaluation"
              wide
            />

            <div className="std-apps-pair">
              <div>
                <h2>Applications</h2>
                <ul className="std-why">
                  {ironApplications.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Why Choose ITC India</h2>
                <ul className="std-why">
                  {ironWhy.map((item) => (
                    <li key={item}>
                      <span aria-hidden="true">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Photo src="/std/iron/04_Folded_Laundry.png" alt="Folded laundry and steam iron" />
            </div>

            <div className="std-info-inline">
              <div>
                <h3>Related Testing Services</h3>
                <ul>
                  {ironRelated.map((item) => (
                    <li key={item.label}>
                      <Link href={item.href}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Reference Links</h3>
                <ul>
                  {ironReferences.map((item) => (
                    <li key={item.label}>
                      <a href={item.href} target="_blank" rel="noreferrer">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <aside className="std-side">
            <div className="std-side-box">
              <h3>Other Testing Services</h3>
              <ul>
                {ironSidebar.map((item) => (
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
                <p>Ensure your electric irons meet international safety requirements with ITC India.</p>
                <Link className="btn btn-primary" href="/quote">
                  Get a Quote <span aria-hidden="true">→</span>
                </Link>
                <a className="std-phone" href="tel:+919316473033">
                  +91 93164 73033
                </a>
                <a className="std-phone" href="mailto:info@itcindia.org">
                  info@itcindia.org
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="std-cta std-cta--soft">
        <div className="std-wrap std-cta-inner">
          <div className="std-cta-soft-copy">
            <span className="std-callout-ico" aria-hidden="true">
              <Icon d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5zM14 3v5h5" />
            </span>
            <div>
              <h2>Get a Quote for IEC 60335-2-3 Safety Testing India</h2>
              <p className="std-cta-lead">
                Share product details and we will respond with scope, timeline and charges.
              </p>
            </div>
          </div>
          <div className="std-cta-actions">
            <Link className="btn btn-primary" href="/quote">
              Get a Quote <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
