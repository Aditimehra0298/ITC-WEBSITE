(() => {
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dotsWrap = document.querySelector(".hero-dots");
  const prevBtn = document.querySelector(".hero-prev");
  const nextBtn = document.querySelector(".hero-next");
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  const navLinks = document.querySelectorAll(".nav-link");

  menuToggle?.addEventListener("click", () => {
    const open = mainNav?.classList.toggle("is-open");
    menuToggle.classList.toggle("is-open", Boolean(open));
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  document.querySelectorAll(".has-sub > .nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.matchMedia("(max-width: 1024px)").matches) {
        const parent = link.parentElement;
        if (parent && !parent.classList.contains("is-open")) {
          e.preventDefault();
          document.querySelectorAll(".has-sub.is-open").forEach((el) => {
            if (el !== parent) el.classList.remove("is-open");
          });
          parent.classList.add("is-open");
        }
      }
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (link.parentElement?.classList.contains("has-sub") && window.matchMedia("(max-width: 1024px)").matches) {
        return;
      }
      mainNav?.classList.remove("is-open");
      menuToggle?.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });

  document.querySelector(".search-bar")?.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  document.querySelector(".quote-form")?.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you. Your quote request has been noted. Please email info@itcindia.org for fastest response.");
  });

  /* Section 1 service panel switcher */
  const services = {
    electrical: {
      num: "01",
      name: "Electrical Testing",
      title: "Safety & Performance for Electrical Products",
      desc: "Comprehensive electrical safety and performance testing against applicable national and international standards.",
      checks: ["Safety Testing", "Performance Testing", "Standards Compliance", "Detailed Test Reports"],
      href: "pages/electrical.html",
      img: "assets/hero-4.png",
    },
    "electro-medical": {
      num: "02",
      name: "Electro-Medical Testing",
      title: "Testing Technology That Supports Healthcare",
      desc: "Electrical safety and performance testing for medical electrical equipment and related systems.",
      checks: ["IEC 60601 Safety", "EMC for Medical", "Performance Checks", "Compliance Support"],
      href: "pages/electro-medical.html",
      img: "assets/hero-2.png",
    },
    laboratory: {
      num: "03",
      name: "Laboratory / Indicating",
      title: "Accurate Testing for Laboratory Instruments",
      desc: "Support for laboratory and indicating instruments used across industrial and research applications.",
      checks: ["Indicating Devices", "Measurement Confidence", "Quality Checks", "Clear Reporting"],
      href: "pages/laboratory.html",
      img: "assets/hero-2.png",
    },
    environmental: {
      num: "04",
      name: "Environmental / IP Testing",
      title: "Tested for Every Environment",
      desc: "Evaluate product durability and protection against dust, water, temperature and environmental conditions.",
      checks: ["IP Rating Tests", "Climate Exposure", "Durability Checks", "Condition Reports"],
      href: "pages/environmental.html",
      img: "assets/hero-1.png",
    },
    mechanical: {
      num: "05",
      name: "Mechanical / Chemical",
      title: "Material Strength and Chemical Evaluation",
      desc: "Mechanical and chemical evaluation to verify material performance, durability and compliance.",
      checks: ["Mechanical Strength", "Material Checks", "Chemical Screening", "Reliability Insights"],
      href: "pages/mechanical.html",
      img: "assets/hero-3.png",
    },
    calibration: {
      num: "06",
      name: "Calibration",
      title: "Calibration You Can Measure Confidence In",
      desc: "Calibration services supporting measurement confidence and quality systems.",
      checks: ["Instrument Calibration", "Traceability", "Certificate Support", "Quality Systems"],
      href: "pages/calibration.html",
      img: "assets/hero-3.png",
    },
    electronic: {
      num: "07",
      name: "Electronic Testing",
      title: "Reliability Testing for Electronic Products",
      desc: "Testing for electronic products to support safety, reliability and market access.",
      checks: ["Product Safety", "Functional Checks", "Component Validation", "Market Readiness"],
      href: "pages/electronic.html",
      img: "assets/hero-4.png",
    },
    photometry: {
      num: "08",
      name: "Photometry / LED",
      title: "Illuminating Quality Through Precision",
      desc: "Accurate testing of LED products and luminaires for electrical safety, light output and performance.",
      checks: ["LM-79 / LM-80", "Luminaire Safety", "Light Performance", "Photometric Reports"],
      href: "pages/photometry.html",
      img: "assets/hero-3.png",
    },
    emc: {
      num: "09",
      name: "EMC / EMI Testing",
      title: "Engineered for Electromagnetic Compatibility",
      desc: "Electromagnetic emissions and immunity testing for reliable operation and regulatory compliance.",
      checks: ["Emissions Testing", "Immunity Testing", "CISPR / IEC Support", "Compliance Guidance"],
      href: "pages/emc.html",
      img: "assets/hero-1.png",
    },
    packaging: {
      num: "10",
      name: "Packaging Testing",
      title: "Protect Product Integrity in Transit",
      desc: "Packaging evaluation to protect product integrity through handling, storage and transport.",
      checks: ["Transit Simulation", "Material Strength", "Drop & Shock", "Pack Validation"],
      href: "pages/packaging.html",
      img: "assets/hero-2.png",
    },
    software: {
      num: "11",
      name: "Software",
      title: "Software Evaluation for Product Confidence",
      desc: "Software-related evaluation support aligned to product compliance and quality requirements.",
      checks: ["Functional Review", "Risk Insights", "Process Support", "Documentation Aid"],
      href: "pages/software.html",
      img: "assets/hero-1.png",
    },
    "information-security": {
      num: "12",
      name: "Information Security",
      title: "Security Focused Assessment Support",
      desc: "Information security focused assessment support for products and systems needing trustworthy operation.",
      checks: ["Security Controls", "Risk Assessment", "Process Review", "Improvement Guidance"],
      href: "pages/information-security.html",
      img: "assets/hero-4.png",
    },
  };

  const soItems = Array.from(document.querySelectorAll(".so-item"));
  const soImg = document.getElementById("so-panel-img");
  const soKicker = document.getElementById("so-kicker");
  const soTitle = document.getElementById("so-title");
  const soDesc = document.getElementById("so-desc");
  const soChecks = document.getElementById("so-checks");
  const soExplore = document.getElementById("so-explore");

  function renderService(key) {
    const data = services[key];
    if (!data) return;
    soItems.forEach((btn) => {
      const active = btn.dataset.service === key;
      btn.classList.toggle("is-active", active);
      const chev = btn.querySelector(".so-chev");
      if (chev) chev.textContent = active ? "→" : "›";
    });
    if (soImg) soImg.src = data.img;
    if (soKicker) soKicker.textContent = `${data.num} —— ${data.name}`;
    if (soTitle) soTitle.textContent = data.title;
    if (soDesc) soDesc.textContent = data.desc;
    if (soExplore) {
      soExplore.href = data.href;
      soExplore.innerHTML = `Explore ${data.name} <span aria-hidden="true">→</span>`;
    }
    if (soChecks) {
      soChecks.innerHTML = data.checks.map((c) => `<li>${c}</li>`).join("");
    }
  }

  soItems.forEach((btn) => {
    btn.addEventListener("click", () => renderService(btn.dataset.service));
  });

  if (!slides.length || !dotsWrap) return;

  let index = 0;
  let timer = null;
  const INTERVAL = 6500;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "hero-dot" + (i === 0 ? " is-active" : "");
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => goTo(i, true));
    dotsWrap.appendChild(dot);
  });

  const dots = Array.from(dotsWrap.querySelectorAll(".hero-dot"));

  function goTo(next, userTriggered = false) {
    if (next === index) return;
    slides[index].classList.remove("is-active");
    slides[next].classList.add("is-active");
    dots[index]?.classList.remove("is-active");
    dots[next]?.classList.add("is-active");
    index = next;
    if (userTriggered) restart();
  }

  function next() {
    goTo((index + 1) % slides.length);
  }

  function prev() {
    goTo((index - 1 + slides.length) % slides.length, true);
  }

  function start() {
    stop();
    timer = window.setInterval(next, INTERVAL);
  }

  function stop() {
    if (timer) {
      window.clearInterval(timer);
      timer = null;
    }
  }

  function restart() {
    start();
  }

  prevBtn?.addEventListener("click", () => {
    prev();
    restart();
  });

  nextBtn?.addEventListener("click", () => {
    next();
    restart();
  });

  const hero = document.querySelector(".hero");
  hero?.addEventListener("mouseenter", stop);
  hero?.addEventListener("mouseleave", start);

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
      next();
      restart();
    }
    if (e.key === "ArrowLeft") {
      prev();
      restart();
    }
  });

  start();
})();
