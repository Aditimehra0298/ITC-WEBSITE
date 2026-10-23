import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    label: "Electrical Testing",
    desc: "Safety and performance testing for electrical products and equipment.",
    href: "/electrical",
    icon: "M13 2L4 14h7l-1 8 10-14h-7z",
  },
  {
    label: "Electro-Medical Testing",
    desc: "IEC 60601 safety and performance checks for medical equipment.",
    href: "/electro-medical",
    icon: "M12 5v14M5 12h14",
  },
  {
    label: "Laboratory / Industry",
    desc: "Evaluation support for laboratory and indicating instruments.",
    href: "/laboratory",
    icon: "M9 3v7L5 18a3 3 0 0 0 2.7 4h8.6A3 3 0 0 0 19 18l-4-8V3M8 3h8",
  },
  {
    label: "Environmental / IP Testing",
    desc: "IP, climate and durability testing for harsh environments.",
    href: "/environmental",
    icon: "M12 3a6 6 0 0 1 6 6c0 4-6 12-6 12S6 13 6 9a6 6 0 0 1 6-6z",
  },
  {
    label: "Mechanical / Chemical",
    desc: "Material strength, durability and chemical evaluation.",
    href: "/mechanical",
    icon: "M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zM12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2",
  },
  {
    label: "Calibration",
    desc: "Traceable calibration for measurement confidence.",
    href: "/calibration",
    icon: "M12 8v4l2.5 2.5M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z",
  },
  {
    label: "Electronic Testing",
    desc: "Reliability and functional testing for electronic products.",
    href: "/electronic",
    icon: "M4 6h16v12H4zM8 18v2M16 18v2M9 10h6M9 13h4",
  },
  {
    label: "Photometry / LED",
    desc: "Light output, safety and performance testing for LEDs.",
    href: "/photometry",
    icon: "M9 18h6M10 21h4M12 3a5 5 0 0 1 3 9c-.8.6-1.3 1.5-1.5 2.5h-3C10.3 13.5 9.8 12.6 9 12a5 5 0 0 1 3-9z",
  },
];

const industries = [
  { title: "Consumer Electronics", image: "/industry-electronics.jpg", href: "/electronic" },
  { title: "Home Appliances", image: "/industry-appliances.jpg", href: "/electrical" },
  { title: "Industrial Equipment", image: "/industry-industrial.jpg", href: "/mechanical" },
  { title: "Medical Devices", image: "/industry-medical.jpg", href: "/electro-medical" },
  { title: "Lighting & LED", image: "/industry-lighting.jpg", href: "/photometry" },
  { title: "Construction Products", image: "/industry-construction.jpg", href: "/packaging" },
];

const processSteps = [
  { num: "01", title: "Enquiry", desc: "Share your requirements" },
  { num: "02", title: "Quotation", desc: "Receive a detailed proposal" },
  { num: "03", title: "Sample Submission", desc: "Send samples to our lab" },
  { num: "04", title: "Testing", desc: "As per applicable standards" },
  { num: "05", title: "Report Delivery", desc: "Get accurate and reliable reports" },
];

const whyCards = [
  { title: "Accredited Laboratory", text: "NABL accredited testing facility", icon: "M12 3l2.1 4.3 4.7.7-3.4 3.3.8 4.7L12 14.8 7.8 16l.8-4.7L5.2 8l4.7-.7L12 3z" },
  { title: "Global Standards", text: "Testing as per IEC, IS, EN", icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3.8 12h16.4M12 3.8c2.2 2.3 3.4 5.1 3.4 8.2S14.2 18 12 20.2C9.8 18 8.6 15.1 8.6 12S9.8 6.1 12 3.8z" },
  { title: "Expert Professionals", text: "Experienced technical team", icon: "M9 9a2.4 2.4 0 1 0 0-4.8A2.4 2.4 0 0 0 9 9zM16 9.5a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2zM4 18.2c.6-2.3 2.5-3.6 5-3.6s4.4 1.3 5 3.6M13.4 14c1.4-.3 2.9 0 4.1.9.8.6 1.4 1.6 1.7 3.1" },
  { title: "Comprehensive Services", text: "Wide range of testing solutions", icon: "M4 7h16v10H4zM8 17v2M16 17v2" },
  { title: "Reliable & Accurate", text: "Traceable and dependable results", icon: "M12 3l7 3v5c0 4.6-2.9 8-7 9.2C7.9 19 5 15.6 5 11V6l7-3zM9.2 11.8l1.9 1.9 3.8-3.9" },
  { title: "Customer Focused", text: "Dedicated support at every step", icon: "M4 6h16v10H8l-4 4V6z" },
];

const insights = [
  {
    date: "12 Oct 2026",
    title: "Importance of Electrical Safety Testing",
    image: "/insight-electrical.jpg",
    href: "/electrical",
  },
  {
    date: "05 Oct 2026",
    title: "Why Photometric Testing Matters for LEDs",
    image: "/insight-led.jpg",
    href: "/photometry",
  },
  {
    date: "28 Sep 2026",
    title: "EMC Compliance for Market Access",
    image: "/insight-emc.jpg",
    href: "/emc",
  },
];

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomeExtraSections() {
  return (
    <>
      {/* Services grid */}
      <section className="hx-section hx-services">
        <div className="hx-inner hx-inner--wide">
          <header className="hx-head hx-head--center">
            <p className="hx-eyebrow hx-eyebrow--lined">
              <span>Our Testing Services</span>
            </p>
            <h2 className="hx-title">Wide Range of Testing Solutions</h2>
            <p className="hx-text hx-text--center">
              End-to-end testing for products across electrical, electronic, mechanical, medical,
              lighting, environmental and industrial sectors.
            </p>
          </header>
          <div className="hx-service-grid">
            {serviceCards.map((item) => (
              <Link key={item.label} href={item.href} className="hx-service-card">
                <span className="hx-service-ico">
                  <Icon d={item.icon} />
                </span>
                <strong>{item.label}</strong>
                <span className="hx-service-desc">{item.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="hx-section hx-facilities">
        <div className="hx-inner hx-inner--wide">
          <div className="hx-facilities-grid">
            <div className="hx-facilities-copy">
              <p className="hx-eyebrow">Inside ITC India</p>
              <h2 className="hx-title">State-of-the-Art Testing Facilities</h2>
              <p className="hx-text">
                Equipped with advanced instruments and operated by experienced professionals, our
                laboratory ensures accurate, reliable and efficient testing services for a wide range of
                products.
              </p>
              <Link className="btn btn-primary" href="/quote">
                Take a Virtual Tour <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hx-facilities-media">
              <Image
                src="/facility-lab.jpg"
                alt="ITC India testing laboratory"
                fill
                sizes="(max-width:900px) 100vw, 60vw"
              />
              <div className="hx-play">
                <span className="hx-play-btn" aria-hidden="true">
                  ▶
                </span>
                <span>Watch Our Facility Video</span>
              </div>
            </div>
          </div>

          <div className="hx-facility-feats">
            <div className="hx-feat">
              <span className="hx-feat-ico" aria-hidden="true">
                <Icon d="M4 10l8-6 8 6v9a1 1 0 0 1-1 1h-5v-5H10v5H5a1 1 0 0 1-1-1v-9zM12 12.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z" />
              </span>
              <div>
                <strong>Advanced Infrastructure</strong>
                <span>Modern equipment and controlled test environments.</span>
              </div>
            </div>
            <div className="hx-feat">
              <span className="hx-feat-ico" aria-hidden="true">
                <Icon d="M9 9a2.4 2.4 0 1 0 0-4.8A2.4 2.4 0 0 0 9 9zM16 9.5a2.1 2.1 0 1 0 0-4.2 2.1 2.1 0 0 0 0 4.2zM4 18.2c.6-2.3 2.5-3.6 5-3.6s4.4 1.3 5 3.6M13.4 14c1.4-.3 2.9 0 4.1.9.8.6 1.4 1.6 1.7 3.1" />
              </span>
              <div>
                <strong>Experienced Team</strong>
                <span>Skilled and certified technical professionals.</span>
              </div>
            </div>
            <div className="hx-feat">
              <span className="hx-feat-ico" aria-hidden="true">
                <Icon d="M7 4h8l2 2v14H7V4zM12 3l7 3v5c0 4.6-2.9 8-7 9.2C7.9 19 5 15.6 5 11V6l7-3zM9.2 11.8l1.9 1.9 3.8-3.9" />
              </span>
              <div>
                <strong>Reliable Processes</strong>
                <span>Documented methods and quality controls.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="hx-section hx-industries">
        <div className="hx-inner hx-inner--wide">
          <div className="hx-head hx-head--industries">
            <p className="hx-eyebrow">Industries We Serve</p>
            <div className="hx-industries-title-row">
              <h2 className="hx-title">Enabling Compliance Across Industries</h2>
              <Link className="hx-link" href="/quote">
                View All Industries <span aria-hidden="true">→</span>
              </Link>
            </div>
            <p className="hx-text hx-text--industries">
              We support manufacturers, importers and brands across a wide range of industries.
            </p>
          </div>
          <div className="hx-industry-grid">
            {industries.map((item) => (
              <Link key={item.title} href={item.href} className="hx-industry-card">
                <div className="hx-industry-media">
                  <Image src={item.image} alt={item.title} fill sizes="(max-width:900px) 50vw, 16vw" />
                </div>
                <div className="hx-industry-label">
                  <strong>{item.title}</strong>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process header */}
      <section className="hx-process-intro">
        <div className="hx-inner hx-inner--wide">
          <div className="hx-head hx-head--light">
            <div>
              <p className="hx-eyebrow hx-eyebrow--light">Our Testing Process</p>
              <h2 className="hx-title hx-title--light">From Enquiry to Report</h2>
              <p className="hx-process-sub">
                A simple and transparent process to get your products tested.
              </p>
            </div>
            <Link className="btn btn-primary" href="/quote">
              Get Started <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Process steps on PCB — next band */}
      <section className="hx-process">
        <div className="hx-inner hx-inner--wide">
          <ol className="hx-steps">
            {processSteps.map((step, index) => (
              <li key={step.num}>
                <div className="hx-step-track">
                  {index > 0 ? <span className="hx-step-line" aria-hidden="true" /> : null}
                  <span className="hx-step-num">{step.num}</span>
                  {index < processSteps.length - 1 ? (
                    <span className="hx-step-line hx-step-line--after" aria-hidden="true" />
                  ) : null}
                </div>
                <strong>{step.title}</strong>
                <p>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why choose us */}
      <section className="hx-section hx-why">
        <div className="hx-inner hx-inner--wide hx-why-grid">
          <div className="hx-why-copy">
            <p className="hx-eyebrow">Why Choose ITC India</p>
            <h2 className="hx-title">More Than Just Testing</h2>
            <p className="hx-text">
              ITC India combines accreditation, technical depth and responsive support to help products
              reach markets with confidence.
            </p>
            <Link className="btn btn-primary" href="/quote">
              About Us <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hx-why-cards">
            {whyCards.map((card) => (
              <article key={card.title} className="hx-why-card">
                <span className="hx-why-ico">
                  <Icon d={card.icon} />
                </span>
                <div>
                  <strong>{card.title}</strong>
                  <p>{card.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Insights */}
      <section className="hx-section hx-insights">
        <div className="hx-inner">
          <div className="hx-head">
            <div>
              <p className="hx-eyebrow">Knowledge Hub</p>
              <h2 className="hx-title">News, Articles &amp; Updates</h2>
            </div>
            <Link className="hx-link" href="/quote">
              View All Articles <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="hx-insight-grid">
            {insights.map((item) => (
              <article key={item.title} className="hx-insight-card">
                <div className="hx-insight-media">
                  <Image src={item.image} alt="" fill sizes="160px" />
                </div>
                <div>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <Link href={item.href}>
                    Read More <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hx-cta">
        <Image src="/cta-circuit.jpg" alt="" fill sizes="100vw" className="hx-cta-bg" />
        <div className="hx-inner hx-cta-inner">
          <h2>Let&apos;s Build a Safer, More Compliant World Together</h2>
          <div className="hx-cta-actions">
            <Link className="btn btn-primary" href="/quote">
              Get a Quote <span aria-hidden="true">→</span>
            </Link>
            <a className="btn btn-ghost-light" href="mailto:info@itcindia.org">
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
