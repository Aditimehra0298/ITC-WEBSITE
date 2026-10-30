export type NavItem = {
  slug: string;
  label: string;
};

export const leftNav: NavItem[] = [
  { slug: "calibration", label: "Calibration" },
  { slug: "electrical", label: "Electrical" },
  { slug: "electro-medical", label: "Electro-Medical" },
  { slug: "electronic", label: "Electronic" },
  { slug: "emc", label: "EMC" },
  { slug: "environmental", label: "Environmental/IP" },
];

export const rightNav: NavItem[] = [
  { slug: "information-security", label: "Information Security" },
  { slug: "laboratory", label: "Laboratory/Indicating" },
  { slug: "mechanical", label: "Mechanical/Chemical" },
  { slug: "packaging", label: "Packaging" },
  { slug: "photometry", label: "Photometry" },
  { slug: "software", label: "Software" },
];

export const allServices = [...leftNav, ...rightNav];

export const serviceCopy: Record<
  string,
  { title: string; eyebrow: string; desc: string; meta?: string }
> = {
  calibration: {
    title: "Calibration You Can Measure Confidence In",
    eyebrow: "Calibration Services",
    desc: "Calibration services supporting measurement confidence and quality systems.",
    meta: "Traceability | Certificates | Quality Systems",
  },
  electrical: {
    title: "Safety & Performance for Electrical Products",
    eyebrow: "Electrical Safety Testing",
    desc: "Comprehensive electrical safety and performance testing against applicable national and international standards.",
    meta: "IEC 60335 | IEC 62368-1 | IEC 60598-1",
  },
  "electro-medical": {
    title: "Testing Technology That Supports Healthcare",
    eyebrow: "Electro-Medical Equipment Testing",
    desc: "Electrical safety and performance testing for medical electrical equipment and related systems.",
    meta: "IEC 60601-1 | IEC 60601-1-2",
  },
  electronic: {
    title: "Reliability Testing for Electronic Products",
    eyebrow: "Electronic Testing",
    desc: "Testing for electronic products to support safety, reliability and market access.",
  },
  emc: {
    title: "Engineered for Electromagnetic Compatibility",
    eyebrow: "EMC / EMI Testing",
    desc: "Electromagnetic emissions and immunity testing for reliable operation and regulatory compliance.",
    meta: "CISPR 11 | CISPR 32 | IEC 61000 Series",
  },
  environmental: {
    title: "Tested for Every Environment",
    eyebrow: "Environmental / IP Testing",
    desc: "Evaluate product durability and protection against dust, water, temperature and environmental conditions.",
    meta: "IEC 60529 | IEC 60068 | IEC 62262",
  },
  "information-security": {
    title: "Security Focused Assessment Support",
    eyebrow: "Information Security",
    desc: "Information security focused assessment support for products and systems needing trustworthy operation.",
  },
  laboratory: {
    title: "Accurate Testing for Laboratory Instruments",
    eyebrow: "Laboratory / Indicating",
    desc: "Support for laboratory and indicating instruments used across industrial and research applications.",
  },
  mechanical: {
    title: "Material Strength and Chemical Evaluation",
    eyebrow: "Mechanical / Chemical",
    desc: "Mechanical and chemical evaluation to verify material performance, durability and compliance.",
  },
  packaging: {
    title: "Protect Product Integrity in Transit",
    eyebrow: "Packaging Testing",
    desc: "Packaging evaluation to protect product integrity through handling, storage and transport.",
  },
  photometry: {
    title: "Illuminating Quality Through Precision",
    eyebrow: "LED & Photometric Testing",
    desc: "Accurate testing of LED products and luminaires for electrical safety, light output and performance.",
    meta: "IEC 60598 | LM-79 | LM-80 | TM-21",
  },
  software: {
    title: "Software Evaluation for Product Confidence",
    eyebrow: "Software",
    desc: "Software-related evaluation support aligned to product compliance and quality requirements.",
  },
};

export type HeroSlide = {
  image: string;
  eyebrow: string;
  titleHtml: string;
  desc: string;
  meta?: string;
  primaryHref: string;
  secondaryHref: string;
  secondaryLabel: string;
  stats?: { value: string; label: string }[];
  /** Pre-composited art (left fade + trails) — lighter overlay */
  artReady?: boolean;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/hero-precision.png",
    eyebrow: "NABL ACCREDITED  ·  ISO/IEC 17025",
    titleHtml:
      '<span class="title-line">PRECISION</span><br /><span class="title-accent">TESTING</span>',
    desc: "Reliable laboratory testing for electrical, electronic, medical, lighting and industrial products — trusted worldwide.",
    primaryHref: "/quote",
    secondaryHref: "#credentials",
    secondaryLabel: "Explore Capabilities",
    artReady: true,
  },
  {
    image: "/hero-safety.png",
    eyebrow: "ELECTRICAL SAFETY",
    titleHtml:
      '<span class="title-line">SAFETY</span><br /><span class="title-accent">TESTED</span>',
    desc: "Comprehensive electrical safety testing against national and international standards.",
    meta: "IEC 60335  ·  IEC 62368-1  ·  IEC 60598-1",
    primaryHref: "/quote",
    secondaryHref: "/electrical",
    secondaryLabel: "Explore Electrical Testing",
    artReady: true,
  },
  {
    image: "/hero-photometry.png",
    eyebrow: "LED & PHOTOMETRY",
    titleHtml:
      '<span class="title-line">LIGHT</span><br /><span class="title-accent">MEASURED</span>',
    desc: "Accurate testing of LED products and luminaires for safety, output and performance.",
    meta: "IEC 60598  ·  LM-79  ·  LM-80  ·  TM-21",
    primaryHref: "/quote",
    secondaryHref: "/photometry",
    secondaryLabel: "Explore Lighting Testing",
    artReady: true,
  },
  {
    image: "/hero-environmental.png",
    eyebrow: "ENVIRONMENTAL & IP",
    titleHtml:
      '<span class="title-line">BUILT FOR</span><br /><span class="title-accent">EVERY CLIMATE</span>',
    desc: "Durability and protection testing against dust, water, temperature and harsh environments.",
    meta: "IEC 60529  ·  IEC 60068  ·  IEC 62262",
    primaryHref: "/quote",
    secondaryHref: "/environmental",
    secondaryLabel: "Explore Environmental Testing",
    artReady: true,
  },
  {
    image: "/hero-emc.png",
    eyebrow: "EMC / EMI",
    titleHtml:
      '<span class="title-line">SIGNAL</span><br /><span class="title-accent">INTEGRITY</span>',
    desc: "Emissions and immunity testing for reliable operation and regulatory compliance.",
    meta: "CISPR 11  ·  CISPR 32  ·  IEC 61000",
    primaryHref: "/quote",
    secondaryHref: "/emc",
    secondaryLabel: "Explore EMC Testing",
    artReady: true,
  },
  {
    image: "/hero-medical.png",
    eyebrow: "ELECTRO-MEDICAL",
    titleHtml:
      '<span class="title-line">CARE</span><br /><span class="title-accent">ASSURED</span>',
    desc: "Electrical safety and performance testing for medical electrical equipment.",
    meta: "IEC 60601-1  ·  IEC 60601-1-2",
    primaryHref: "/quote",
    secondaryHref: "/electro-medical",
    secondaryLabel: "Explore Medical Testing",
    artReady: true,
  },
];

export type ShowcaseService = {
  num: string;
  name: string;
  title: string;
  desc: string;
  checks: string[];
  href: string;
  img: string;
};

export const showcaseServices: Record<string, ShowcaseService> = {
  electrical: {
    num: "01",
    name: "Electrical Testing",
    title: "Safety & Performance for Electrical Products",
    desc: "Comprehensive electrical safety and performance testing against applicable national and international standards.",
    checks: ["Safety Testing", "Performance Testing", "Standards Compliance", "Detailed Test Reports"],
    href: "/electrical",
    img: "/hero-4.png",
  },
  "electro-medical": {
    num: "02",
    name: "Electro-Medical Testing",
    title: "Testing Technology That Supports Healthcare",
    desc: "Electrical safety and performance testing for medical electrical equipment and related systems.",
    checks: ["IEC 60601 Safety", "EMC for Medical", "Performance Checks", "Compliance Support"],
    href: "/electro-medical",
    img: "/hero-2.png",
  },
  laboratory: {
    num: "03",
    name: "Laboratory / Indicating",
    title: "Accurate Testing for Laboratory Instruments",
    desc: "Support for laboratory and indicating instruments used across industrial and research applications.",
    checks: ["Indicating Devices", "Measurement Confidence", "Quality Checks", "Clear Reporting"],
    href: "/laboratory",
    img: "/hero-2.png",
  },
  environmental: {
    num: "04",
    name: "Environmental / IP Testing",
    title: "Tested for Every Environment",
    desc: "Evaluate product durability and protection against dust, water, temperature and environmental conditions.",
    checks: ["IP Rating Tests", "Climate Exposure", "Durability Checks", "Condition Reports"],
    href: "/environmental",
    img: "/hero-1.png",
  },
  mechanical: {
    num: "05",
    name: "Mechanical / Chemical",
    title: "Material Strength and Chemical Evaluation",
    desc: "Mechanical and chemical evaluation to verify material performance, durability and compliance.",
    checks: ["Mechanical Strength", "Material Checks", "Chemical Screening", "Reliability Insights"],
    href: "/mechanical",
    img: "/hero-3.png",
  },
  calibration: {
    num: "06",
    name: "Calibration",
    title: "Calibration You Can Measure Confidence In",
    desc: "Calibration services supporting measurement confidence and quality systems.",
    checks: ["Instrument Calibration", "Traceability", "Certificate Support", "Quality Systems"],
    href: "/calibration",
    img: "/hero-3.png",
  },
  electronic: {
    num: "07",
    name: "Electronic Testing",
    title: "Reliability Testing for Electronic Products",
    desc: "Testing for electronic products to support safety, reliability and market access.",
    checks: ["Product Safety", "Functional Checks", "Component Validation", "Market Readiness"],
    href: "/electronic",
    img: "/hero-4.png",
  },
  photometry: {
    num: "08",
    name: "Photometry / LED",
    title: "Illuminating Quality Through Precision",
    desc: "Accurate testing of LED products and luminaires for electrical safety, light output and performance.",
    checks: ["LM-79 / LM-80", "Luminaire Safety", "Light Performance", "Photometric Reports"],
    href: "/photometry",
    img: "/hero-3.png",
  },
  emc: {
    num: "09",
    name: "EMC / EMI Testing",
    title: "Engineered for Electromagnetic Compatibility",
    desc: "Electromagnetic emissions and immunity testing for reliable operation and regulatory compliance.",
    checks: ["Emissions Testing", "Immunity Testing", "CISPR / IEC Support", "Compliance Guidance"],
    href: "/emc",
    img: "/hero-1.png",
  },
  packaging: {
    num: "10",
    name: "Packaging Testing",
    title: "Protect Product Integrity in Transit",
    desc: "Packaging evaluation to protect product integrity through handling, storage and transport.",
    checks: ["Transit Simulation", "Material Strength", "Drop & Shock", "Pack Validation"],
    href: "/packaging",
    img: "/hero-2.png",
  },
  software: {
    num: "11",
    name: "Software",
    title: "Software Evaluation for Product Confidence",
    desc: "Software-related evaluation support aligned to product compliance and quality requirements.",
    checks: ["Functional Review", "Risk Insights", "Process Support", "Documentation Aid"],
    href: "/software",
    img: "/hero-1.png",
  },
  "information-security": {
    num: "12",
    name: "Information Security",
    title: "Security Focused Assessment Support",
    desc: "Information security focused assessment support for products and systems needing trustworthy operation.",
    checks: ["Security Controls", "Risk Assessment", "Process Review", "Improvement Guidance"],
    href: "/information-security",
    img: "/hero-4.png",
  },
};

export const showcaseMenu: { key: string; label: string; icon: string }[] = [
  {
    key: "electrical",
    label: "Electrical Testing",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 10-14h-7l0-6z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>',
  },
  {
    key: "electro-medical",
    label: "Electro-Medical Testing",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/></svg>',
  },
  {
    key: "laboratory",
    label: "Laboratory / Indicating",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 3v7L5 18a3 3 0 0 0 2.7 4h8.6A3 3 0 0 0 19 18l-4-8V3" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 3h8" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  },
  {
    key: "environmental",
    label: "Environmental / IP Testing",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 3a6 6 0 0 1 6 6c0 4-6 12-6 12S6 13 6 9a6 6 0 0 1 6-6z" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="9" r="2" stroke="currentColor" stroke-width="1.5"/></svg>',
  },
  {
    key: "mechanical",
    label: "Mechanical / Chemical",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" stroke-width="1.6"/><path d="M12 3.5v2M12 18.5v2M3.5 12h2M18.5 12h2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  },
  {
    key: "calibration",
    label: "Calibration",
    icon: '<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.6"/><path d="M12 8v4l2.5 2.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>',
  },
  {
    key: "electronic",
    label: "Electronic Testing",
    icon: '<svg viewBox="0 0 24 24" fill="none"><rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 18v2M16 18v2M9 10h6M9 13h4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>',
  },
  {
    key: "photometry",
    label: "Photometry / LED",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M9 18h6M10 21h4M12 3a5 5 0 0 1 3 9c-.8.6-1.3 1.5-1.5 2.5h-3C10.3 13.5 9.8 12.6 9 12a5 5 0 0 1 3-9z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg>',
  },
  {
    key: "emc",
    label: "EMC / EMI Testing",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h2M17 12h2M8.5 8.5l1.4 1.4M14.1 14.1l1.4 1.4M8.5 15.5l1.4-1.4M14.1 9.9l1.4-1.4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="12" cy="12" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg>',
  },
  {
    key: "packaging",
    label: "Packaging Testing",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M4 8l8-4 8 4v9l-8 4-8-4V8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 12v9M4 8l8 4 8-4" stroke="currentColor" stroke-width="1.6"/></svg>',
  },
  {
    key: "software",
    label: "Software",
    icon: '<svg viewBox="0 0 24 24" fill="none"><path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  },
  {
    key: "information-security",
    label: "Information Security",
    icon: '<svg viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M8 10V7a4 4 0 0 1 8 0v3" stroke="currentColor" stroke-width="1.6"/></svg>',
  },
];

