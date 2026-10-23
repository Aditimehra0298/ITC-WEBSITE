import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="sf-brand">
          <Link href="/" className="sf-logo-link" aria-label="ITC India Home">
            <Image
              src="/logo.png"
              alt="ITC India — Institute of Testing & Certification India Pvt. Ltd."
              className="sf-logo"
              width={200}
              height={68}
            />
          </Link>
          <p className="sf-tagline">Institute of Testing &amp; Certification India Pvt. Ltd.</p>
          <p>
            Thank you for visiting our website. For testing and certification queries, send your
            requirements with product technical details and we will share testing charges.
          </p>
          <Link className="sf-cta" href="/quote">
            Inquiry for Testing &amp; Certification <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#credentials">Credentials</Link>
            </li>
            <li>
              <Link href="/#section-1">Services</Link>
            </li>
            <li>
              <Link href="/quote">Get a Quote</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3>Services</h3>
          <ul>
            <li>
              <Link href="/electrical">Electrical Testing</Link>
            </li>
            <li>
              <Link href="/photometry">Photometry / LED</Link>
            </li>
            <li>
              <Link href="/emc">EMC / EMI</Link>
            </li>
            <li>
              <Link href="/electro-medical">Electro-Medical</Link>
            </li>
          </ul>
        </div>

        <div className="sf-contact">
          <h3>Contact Us</h3>
          <p className="sf-company">ITC India Pvt Ltd.</p>
          <p>
            Plot No. 146, JLPL Industrial Area,
            <br />
            Sector 82, Mohali, Punjab, 160062
          </p>
          <p>
            <a href="tel:+919316473033">Tel: 09316473033</a>
          </p>
          <p>
            <a href="mailto:info@itcindia.org">info@itcindia.org</a>
          </p>

          <form className="sf-subscribe" action="mailto:info@itcindia.org" method="post" encType="text/plain">
            <label htmlFor="sf-email">Subscribe</label>
            <div className="sf-subscribe-row">
              <input id="sf-email" name="email" type="email" placeholder="Email Address" required />
              <button type="submit">Join</button>
            </div>
          </form>
        </div>
      </div>

      <div className="site-footer-bottom">
        <div className="site-footer-bottom-inner">
          <p>© {new Date().getFullYear()} ITC India Pvt Ltd. All rights reserved.</p>
          <p className="sf-acred">ISO/IEC 17025 · NABL Accredited Testing Laboratory</p>
        </div>
      </div>
    </footer>
  );
}
