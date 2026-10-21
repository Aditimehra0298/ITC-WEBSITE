(() => {
  const mount = document.getElementById("site-header-mount");
  const isSub = Boolean(mount);
  const prefix = isSub ? "../" : "";
  const active = mount?.dataset.active || "home";

  const services = [
    ["electrical", "Electrical"],
    ["electro-medical", "Electro-Medical"],
    ["laboratory", "Laboratory/Indicating"],
    ["environmental", "Environmental/IP"],
    ["mechanical", "Mechanical/Chemical"],
    ["calibration", "Calibration"],
    ["electronic", "Electronic"],
    ["photometry", "Photometry"],
    ["emc", "EMC"],
    ["packaging", "Packaging"],
    ["software", "Software"],
    ["information-security", "Information Security"],
  ];

  function subLinks(slug, label) {
    const base = `${prefix}pages/${slug}.html`;
    return `
      <ul class="sub-menu">
        <li><a href="${base}">${label} Overview</a></li>
        <li><a href="${base}#standards">Standards</a></li>
        <li><a href="${base}#process">Test Process</a></li>
        <li><a href="${prefix}index.html#quote">Request a Quote</a></li>
      </ul>`;
  }

  const serviceItems = services
    .map(([slug, label]) => {
      const cls = active === slug ? " is-active" : "";
      return `
        <li class="has-sub">
          <a class="nav-link${cls}" href="${prefix}pages/${slug}.html">${label} <span class="caret" aria-hidden="true">▾</span></a>
          ${subLinks(slug, label)}
        </li>`;
    })
    .join("");

  const header = `
  <header class="site-header">
    <div class="header-top">
      <div class="header-top-inner">
        <div class="header-contacts">
          <a class="contact-link" href="tel:+919316473033">
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" fill="currentColor"/></svg>
            </span>
            <span>+91 93164 73033</span>
          </a>
          <a class="contact-link" href="mailto:info@itcindia.org">
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zm8 6.5L4.8 7.6h14.4L12 12.5zm0 1.4 7.5-5.2v8.3H4.5V8.7L12 13.9z" fill="currentColor"/></svg>
            </span>
            <span>info@itcindia.org</span>
          </a>
          <span class="contact-link contact-location">
            <span class="contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none"><path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11z" stroke="currentColor" stroke-width="1.7"/><circle cx="12" cy="10" r="2.2" fill="currentColor"/></svg>
            </span>
            <span>Gurugram, India</span>
          </span>
        </div>
        <div class="header-top-actions">
          <form class="search-bar" role="search" action="#" method="get">
            <input type="search" name="q" placeholder="Search..." aria-label="Search" />
            <button type="submit" aria-label="Search">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="M20 20l-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
          </form>
          <a class="btn btn-primary btn-quote" href="${prefix}index.html#quote">Get a Quote <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
    <div class="header-main">
      <div class="header-main-inner">
        <a class="brand" href="${prefix}index.html" aria-label="ITC India Home">
          <img src="${prefix}assets/logo.png" alt="ITC India" class="brand-logo" />
          <span class="brand-tagline">Institute of Testing &amp; Certification India Pvt. Ltd.</span>
        </a>
        <button class="menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <nav class="main-nav" aria-label="Primary">
          <ul class="nav-list">
            <li><a class="nav-link${active === "home" ? " is-active" : ""}" href="${prefix}index.html">Home</a></li>
            <li class="has-sub">
              <a class="nav-link${active === "about" ? " is-active" : ""}" href="${prefix}pages/about.html">About Us <span class="caret" aria-hidden="true">▾</span></a>
              <ul class="sub-menu">
                <li><a href="${prefix}pages/about.html">Company Overview</a></li>
                <li><a href="${prefix}pages/about.html#accreditation">Accreditation</a></li>
                <li><a href="${prefix}pages/about.html#facilities">Facilities</a></li>
                <li><a href="${prefix}pages/about.html#why">Why Choose ITC</a></li>
              </ul>
            </li>
            ${serviceItems}
          </ul>
        </nav>
      </div>
    </div>
  </header>`;

  if (mount) {
    mount.outerHTML = header;
  }
})();
