export const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services", children: ["MEP Design", "Cost Estimation", "CAD Drafting Solution"] },
  { label: "Our Trades", href: "/our-trades" },
  { label: "Contact Us", href: "/contact-us" }
];

export const services = [
  { title: "MEP Design", text: "Coordinated mechanical, electrical and plumbing design support for construction projects.", icon: "01" },
  { title: "Cost Estimation", text: "Reliable project cost estimates and quantity takeoffs that help contractors bid with confidence.", icon: "02" },
  { title: "CAD Drafting Solution", text: "Professional CAD drafting and conversion support for accurate, organized project documentation.", icon: "03" }
];

export const trades = [
  ["Mechanical (HVAC)", "Construction-Estimating-Services-2.webp"],
  ["Electrical", "electrical-2.png"],
  ["Plumbing", "Construction-Estimating-Services-4.webp"],
  ["Architecture", "about-estimators.png"],
  ["Structural", "METAL-1.png"]
];
