export type NavLeaf = {
  label: string;
  href: string;
};

export type NavChild = {
  label: string;
  href: string;
  children?: NavLeaf[];
};

export type NavMenuItem = {
  label: string;
  href: string;
  slug?: string;
  children?: NavChild[];
};

const q = (hash: string) => `/electrical#${hash}`;
const std = (slug: string) => `/electrical/${slug}`;

/** Full header mega-menu matching ITC India legacy navigation */
export const mainNav: NavMenuItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/#credentials",
    children: [
      { label: "Our Credentials", href: "/#credentials" },
      { label: "Why Choose Us", href: "/#why" },
      { label: "Facilities", href: "/#facilities" },
      { label: "Get a Quote", href: "/quote" },
    ],
  },
  {
    label: "Electrical",
    href: "/electrical",
    slug: "electrical",
    children: [
      {
        label: "Household Appliances",
        href: q("household-appliances"),
        children: [
          { label: "IEC 60335-1 / IS 302-1 and BS EN 60335-1", href: std("iec-60335-1") },
          { label: "IEC 60335-2-3 Electric Irons Safety Testing", href: std("iec-60335-2-3") },
          { label: "IEC 60335-2-3 / IS 302-2-3 Electric Iron Testing", href: std("iec-60335-2-3") },
          { label: "IEC 60335-2-5 Safety of Electric Dishwashers", href: q("iec-60335-2-5") },
          { label: "IEC 60335-2-7 Washing Machine Safety Testing", href: q("iec-60335-2-7") },
          { label: "IEC 60335-2-7 Domestic Washing Machine Testing", href: q("iec-60335-2-7-dom") },
          { label: "IEC 60335-2-8 Electric Shaver Safety Testing", href: q("iec-60335-2-8") },
          { label: "IEC 60335-2-9 Electrical Cooking Appliances Testing", href: q("iec-60335-2-9") },
          { label: "IEC 60335-2-12 Warming Plate Testing India", href: q("iec-60335-2-12") },
          { label: "IEC 60335-2-14 Electrical Kitchen Machine Testing", href: q("iec-60335-2-14") },
          { label: "IEC 60335-2-23", href: q("iec-60335-2-23") },
          { label: "IEC 60335-2-24", href: q("iec-60335-2-24") },
          { label: "IEC 60335-2-24 Refrigerators, Freezers, Ice Maker Testing", href: q("iec-60335-2-24-ref") },
          { label: "IS 7872 Testing — Deep Freezers", href: q("is-7872") },
          { label: "IEC 60335-2-11 Particular Requirements for Tumble Dryers", href: q("iec-60335-2-11") },
          { label: "Safety Standard as per IEC 60335-2-8", href: q("iec-60335-2-8-std") },
          { label: "IEC 60335-2-76 Safety of Electric Fence Energizers", href: q("iec-60335-2-76") },
          { label: "IEC 60335-2-89 Commercial Refrigerating Appliances", href: q("iec-60335-2-89") },
        ],
      },
      { label: "AC DC Rectifier Testing", href: q("ac-dc-rectifier") },
      { label: "ATEX Testing", href: q("atex") },
      {
        label: "Cable Gland Testing",
        href: q("cable-gland"),
        children: [
          { label: "IEC 62444 Cable Gland Testing", href: q("iec-62444") },
          { label: "BS EN 50262 Salt & Sulphur Dioxide Atmospheres", href: q("bs-en-50262") },
        ],
      },
      { label: "Cable Tray Testing", href: q("cable-tray") },
      { label: "Flexible Conduit Testing IEC 61386-23", href: q("iec-61386-23") },
      { label: "ASTM D999 — Vibration Testing of Shipping Containers", href: q("astm-d999") },
      { label: "Earthing Enhancing Testing IEC 62561-7:2018", href: q("iec-62561-7") },
      { label: "Motor Torque and Speed Testing", href: q("motor-torque") },
      { label: "Endurance Test as per IEC 60947-1", href: q("iec-60947-1") },
      { label: "PIR (Passive Infrared Sensor) Testing", href: q("pir") },
      { label: "High Voltage & Short Circuit Test Facility for MCC and Fuse", href: q("hv-sc") },
      { label: "IEC 62208 Empty Enclosures for LV Switchgear Assemblies", href: q("iec-62208") },
      { label: "GRP Electrical Enclosure Testing", href: q("grp-enclosure") },
      { label: "Infrared Heater Testing", href: q("infrared-heater") },
      { label: "G-Mark Certification", href: q("g-mark") },
      { label: "Machinery Equipment Testing", href: q("machinery") },
      {
        label: "Battery Testing",
        href: q("battery"),
        children: [
          { label: "Sodium Ion Cell / Battery Testing", href: q("sodium-ion") },
          { label: "UN 38.3 Lithium-Ion Batteries Transportation Testing", href: q("un-38-3") },
        ],
      },
      { label: "Photovoltaic Modules Testing", href: q("photovoltaic") },
      { label: "Testing for Lighting Products", href: "/photometry" },
      { label: "Solar Fence Energizer Testing", href: q("solar-fence") },
      {
        label: "Fire Resistance Testing",
        href: q("fire-resistance"),
        children: [
          { label: "Flame Testing on Cable: IEC 60332-1-2 & IEC 60332-1-1", href: q("iec-60332") },
          { label: "Flammability Test on Conveyor Belt EN ISO 340", href: q("en-iso-340") },
        ],
      },
    ],
  },
  {
    label: "Electro-Medical",
    href: "/electro-medical",
    slug: "electro-medical",
    children: [
      { label: "IEC 60601-1 Safety Testing", href: "/electro-medical" },
      { label: "IEC 60601-1-2 EMC for Medical", href: "/electro-medical" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Laboratory/Indicating",
    href: "/laboratory",
    slug: "laboratory",
    children: [
      { label: "Laboratory Instruments", href: "/laboratory" },
      { label: "Indicating Devices", href: "/laboratory" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Environmental/IP",
    href: "/environmental",
    slug: "environmental",
    children: [
      { label: "IP Rating Tests (IEC 60529)", href: "/environmental" },
      { label: "Climate & Durability", href: "/environmental" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Mechanical/Chemical",
    href: "/mechanical",
    slug: "mechanical",
    children: [
      { label: "Mechanical Strength", href: "/mechanical" },
      { label: "Chemical Evaluation", href: "/mechanical" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Calibration",
    href: "/calibration",
    slug: "calibration",
    children: [
      { label: "Instrument Calibration", href: "/calibration" },
      { label: "Traceability Certificates", href: "/calibration" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Electronic",
    href: "/electronic",
    slug: "electronic",
    children: [
      { label: "Electronic Product Safety", href: "/electronic" },
      { label: "Functional & Reliability", href: "/electronic" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Photometry",
    href: "/photometry",
    slug: "photometry",
    children: [
      { label: "LM-79 / LM-80 Testing", href: "/photometry" },
      { label: "Luminaire Safety IEC 60598", href: "/photometry" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "EMC",
    href: "/emc",
    slug: "emc",
    children: [
      { label: "Emissions Testing", href: "/emc" },
      { label: "Immunity Testing", href: "/emc" },
      { label: "CISPR / IEC Support", href: "/emc" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
];

/** Split around centered logo (A–Z style) */
export const leftNav: NavMenuItem[] = mainNav.filter((item) =>
  ["Calibration", "Electrical", "Electro-Medical", "Electronic", "EMC", "Environmental/IP"].includes(
    item.label,
  ),
);

export const rightNav: NavMenuItem[] = [
  ...mainNav.filter((item) =>
    ["Laboratory/Indicating", "Mechanical/Chemical", "Photometry"].includes(item.label),
  ),
  {
    label: "Packaging",
    href: "/packaging",
    slug: "packaging",
    children: [
      { label: "Packaging Overview", href: "/packaging" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Software",
    href: "/software",
    slug: "software",
    children: [
      { label: "Software Overview", href: "/software" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
  {
    label: "Info Security",
    href: "/information-security",
    slug: "information-security",
    children: [
      { label: "Security Overview", href: "/information-security" },
      { label: "Request Quote", href: "/quote" },
    ],
  },
];

