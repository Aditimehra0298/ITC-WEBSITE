"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { leftNav, rightNav, type NavMenuItem } from "@/lib/nav";

const headerNav: NavMenuItem[] = [...leftNav, ...rightNav];

function NavGroup({
  items,
  active,
  open,
}: {
  items: NavMenuItem[];
  active: string;
  open: boolean;
}) {
  const [flyout, setFlyout] = useState<string | null>(null);

  return (
    <nav className={`main-nav main-nav--primary${open ? " is-open" : ""}`} aria-label="Primary">
      <ul className="nav-list">
        {items.map((item) => {
          const hasMega = Boolean(item.children?.length);
          const slug = item.slug || item.href.replace(/^\//, "");
          return (
            <li
              className={`has-sub${hasMega ? " has-mega" : ""}`}
              key={item.label}
              onMouseLeave={() => setFlyout(null)}
            >
              <Link
                className={`nav-link${active === slug ? " is-active" : ""}`}
                href={item.href}
              >
                {item.label}{" "}
                {hasMega ? (
                  <span className="caret" aria-hidden="true">
                    ▾
                  </span>
                ) : null}
              </Link>

              {hasMega ? (
                <ul className={`sub-menu${item.slug === "electrical" ? " mega-menu" : ""}`}>
                  {item.children!.map((child) => {
                    const hasFlyout = Boolean(child.children?.length);
                    const isOpen = flyout === child.label;
                    return (
                      <li
                        key={child.label}
                        className={`mega-item${hasFlyout ? " has-flyout" : ""}${isOpen ? " is-open" : ""}`}
                        onMouseEnter={() => setFlyout(hasFlyout ? child.label : null)}
                      >
                        <Link href={child.href}>
                          <span>{child.label}</span>
                          {hasFlyout ? (
                            <span className="mega-arrow" aria-hidden="true">
                              ›
                            </span>
                          ) : null}
                        </Link>
                        {hasFlyout ? (
                          <ul className="flyout-menu">
                            {child.children!.map((sub) => (
                              <li key={sub.label}>
                                <Link href={sub.href}>{sub.label}</Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const active = pathname.replace(/^\//, "") || "";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header site-header--cinema">
      <div className="header-top">
        <div className="header-top-inner">
          <div className="header-contacts">
            <a className="contact-link" href="tel:+919316473033">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>+91 93164 73033</span>
            </a>
            <a className="contact-link" href="mailto:info@itcindia.org">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm8 6.5L4.8 7.6h14.4L12 12.5zm0 1.4 7.5-5.2v8.3H4.5V8.7L12 13.9z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>info@itcindia.org</span>
            </a>
            <span className="contact-link contact-location">
              <span className="contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle cx="12" cy="10" r="2.2" fill="currentColor" />
                </svg>
              </span>
              <span>Mohali, Punjab</span>
            </span>
          </div>

          <p className="header-company">Institute of Testing &amp; Certification India Pvt. Ltd.</p>

          <div className="header-top-actions">
            <form
              className="search-bar"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input type="search" name="q" placeholder="Search..." aria-label="Search" />
              <button type="submit" aria-label="Search">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M20 20l-3.5-3.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </form>
            <Link className="btn btn-quote btn-quote--silver" href="/quote">
              Get a Quote <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="header-main-inner">
          <button
            className={`menu-toggle${menuOpen ? " is-open" : ""}`}
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <Link className="brand" href="/" aria-label="ITC India Home">
            <Image
              src="/logo-cinema.png"
              alt="ITC India"
              className="brand-logo brand-logo--cinema"
              width={280}
              height={92}
              priority
            />
          </Link>

          <NavGroup items={headerNav} active={active} open={menuOpen} />
        </div>
      </div>
    </header>
  );
}
