export const iec60335Sidebar = [
  { label: "Household Electrical Appliances", href: "/electrical/iec-60335-1", active: true },
  { label: "AC DC Rectifier Testing", href: "/electrical#ac-dc-rectifier" },
  { label: "ATEX Testing", href: "/electrical#atex" },
  { label: "Cable Gland Testing", href: "/electrical#cable-gland" },
  { label: "Cable Tray Testing", href: "/electrical#cable-tray" },
  { label: "Flexible Conduit Testing", href: "/electrical#iec-61386-23" },
  { label: "Battery Testing", href: "/electrical#battery" },
  { label: "Photovoltaic Modules Testing", href: "/electrical#photovoltaic" },
  { label: "Fire Resistance Testing", href: "/electrical#fire-resistance" },
  { label: "Machinery Equipment Testing", href: "/electrical#machinery" },
  { label: "G-Mark Certification", href: "/electrical#g-mark" },
  { label: "Infrared Heater Testing", href: "/electrical#infrared-heater" },
];

export const iec60335Evaluate = [
  "Electrical safety",
  "Mechanical safety",
  "Protection against electric shock",
  "Insulation performance",
  "Moisture resistance",
  "Thermal / heat resistance",
  "Abnormal operation",
  "Fault conditions",
];

export const iec60335Products = [
  { title: "Kitchen appliances", image: "/std/microwave.jpg" },
  { title: "Home appliances", image: "/std/wash.jpg" },
  { title: "Electrical cooking equipment", image: "/std/household-official.jpg" },
  { title: "Heating appliances", image: "/std/ac.jpg" },
  { title: "Small domestic appliances", image: "/std/vacuum.jpg" },
  { title: "Electro-mechanical appliances", image: "/industry-electronics.jpg" },
];

export const iec60335Params = [
  { title: "Leakage current testing", icon: "M4 12h16M12 4v16" },
  { title: "Insulation resistance testing", icon: "M12 3l7 4v5c0 4-3 7-7 9-4-2-7-5-7-9V7l7-4z" },
  { title: "Electric strength testing", icon: "M13 2L4 14h7l-1 8 10-14h-7z" },
  { title: "Temperature rise monitoring", icon: "M12 3v10M9 14a3 3 0 1 0 6 0" },
  { title: "Mechanical endurance testing", icon: "M4 16l4-8 4 5 3-4 5 7H4z" },
  { title: "Protection against heat & fire", icon: "M12 3l7 3v5c0 4.6-2.9 8-7 9.2C7.9 19 5 15.6 5 11V6l7-3z" },
  { title: "Stability and physical testing", icon: "M4 19h16M7 19V9l5-5 5 5v10" },
  { title: "Grounding and continuity testing", icon: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM3 12h18" },
];

export const iec60335Capabilities = [
  "Electrical appliance safety testing to IEC 60335-1 / IS 302 (Part 1) / BS EN 60335-1",
  "Compliance evaluation with applicable Part 2 product standards",
  "Detailed appliance construction and safety assessment",
  "Technical report analysis for certification and market access",
  "Product safety related test services for household equipment",
  "EMC / EMI testing support for modern electronic appliances",
];

export const iec60335Applications = [
  { title: "Household electrical appliances", icon: "M4 8h16v10H4zM8 18v2M16 18v2" },
  { title: "Kitchen equipment", icon: "M8 4v8M12 4v8M16 4v8M6 14h12v6H6z" },
  { title: "Small food processing", icon: "M12 3v8M9 14a3 3 0 0 0 6 0" },
  { title: "Commercial appliances", icon: "M4 10h16v8H4zM8 10V8a4 4 0 0 1 8 0v2" },
  { title: "Industrial electrical equipment", icon: "M5 18h14M7 18V9l5-4 5 4v9" },
  { title: "Portable heating appliances", icon: "M12 3v10M9 14a3 3 0 1 0 6 0" },
];

export const iec60335Related = [
  { label: "Electrical Safety Testing", href: "/electrical" },
  { label: "Household Equipment Testing", href: "/electrical" },
  { label: "Electro-Medical Testing", href: "/electro-medical" },
  { label: "EMC / EMI Testing", href: "/emc" },
  { label: "Environmental / IP Testing", href: "/environmental" },
  { label: "Battery Testing", href: "/electrical#battery" },
];

export const iec60335References = [
  { label: "www.itcindia.org", href: "https://www.itcindia.org" },
  { label: "IEC 60335 series", href: "https://www.iec.ch" },
  { label: "BIS / IS standards", href: "https://www.bis.gov.in" },
  { label: "NABL accreditation", href: "https://nabl-india.org" },
];

export const iec60335Why = [
  "Advanced laboratory facility",
  "Specialized team for IEC / IS / BS EN standards",
  "Reliable and accurate test results",
  "Comprehensive technical support",
  "Fast turnaround times",
];

export const iec60335Sections = [
  {
    title: "Protection Against Electric Shock",
    text: "Protection against electric shock is one of the most important areas of appliance safety. Testing and inspection can evaluate accessibility of live parts, insulation systems, protective earthing, supply connections, electrical separation and other construction measures intended to prevent users from contacting hazardous voltages.",
  },
  {
    title: "Power Input, Heating and Temperature Rise",
    text: "Electrical appliances contain motors, heaters, transformers, electronic circuits and other components that can generate heat during operation. Heating tests assess temperatures at critical locations under specified operating conditions. Measurements can include motor windings, internal wiring, terminals, insulation systems, handles and accessible surfaces. The objective is to verify that temperature rise does not create a burn, fire or insulation-deterioration hazard.",
  },
  {
    title: "Leakage Current and Electric Strength Testing",
    text: "Electrical insulation must remain effective during normal operation and after applicable conditioning. Leakage-current testing evaluates whether current accessible to the user remains within specified limits. Electric-strength testing assesses whether insulation can withstand the required test voltage without flashover or breakdown. These tests are important for both Class I and Class II appliances.",
  },
  {
    title: "Moisture Resistance",
    text: "Many household appliances operate in kitchens, bathrooms or other locations where water, humidity and spills can occur. IEC 60335-1 includes requirements intended to ensure that foreseeable moisture exposure does not reduce insulation or create an electric-shock hazard. Product-specific standards can add additional requirements for appliances that routinely use water.",
  },
  {
    title: "Abnormal Operation",
    text: "An appliance must remain acceptably safe not only during normal operation but also under specified abnormal conditions. Testing may simulate stalled motors, restricted ventilation, control failures, abnormal loading or other foreseeable fault conditions depending on the appliance. The purpose is to identify whether a fault can cause dangerous overheating, fire, electric shock or another unacceptable hazard.",
  },
  {
    title: "Mechanical Strength and Stability",
    text: "Electrical safety also depends on the mechanical integrity of the appliance. Tests may evaluate enclosures, handles, controls, covers and other accessible components for mechanical strength. Stability requirements help reduce the risk of appliances overturning during normal use.",
  },
];
