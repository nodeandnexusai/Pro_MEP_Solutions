import Image from "next/image";
import Link from "next/link";

const contractorLinks = [
  ["Commercial MEP Design & Estimating", "/services"],
  ["Residential MEP Design & Estimating", "/services"],
  ["Industrial MEP Design & Estimating", "/services"],
  ["AutoCAD Drafting", "/services/cad-drafting"],
];

const subcontractorLinks = [
  ["Shop Drawings", "/services/cad-drafting"],
  ["Quantity Takeoffs", "/services/cost-estimation"],
  ["Material Takeoffs", "/services/cost-estimation"],
  ["Cost Estimation", "/services/cost-estimation"],
  ["MEP Coordination", "/services/mep-design"],
];

const architectLinks = [
  ["Design Support", "/services/mep-design"],
  ["CAD Drafting", "/services/cad-drafting"],
  ["Permit-Ready Drawings", "/services/cad-drafting"],
  ["Technical Consulting", "/services"],
];

function ServiceColumn({
  title,
  icon,
  links,
}: {
  title: string;
  icon: string;
  links: string[][];
}) {
  return (
    <div className="footer-column">
      <h3 className="footer-title-pill">
        <span className="footer-title-icon" aria-hidden="true">{icon}</span>
        {title}
      </h3>
      <div className="footer-service-links">
        {links.map(([label, href]) => (
          <Link href={href} key={label}>
            <span aria-hidden="true">✓</span>
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}

const quickLinks = [
  ["⌂", "Home", "/"],
  ["ⓘ", "About Us", "/about"],
  ["⚙", "Services", "/services"],
  ["▰", "Our Projects", "/trades"],
  ["✉", "Contact Us", "/contact"],
];

export default function Footer() {
  return (
    <footer className="site-footer relative overflow-hidden">
      <div className="container-wide relative z-10 grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-[1.05fr_1.2fr_1.15fr_1.05fr_.8fr] md:gap-6">
        <div className="footer-contact">
          <Link href="/" aria-label="Pro MEP Solution home" className="mb-4 block w-fit">
            <Image
              src="/images/pro-mep-logo.png"
              alt="Pro MEP Solution"
              width={190}
              height={124}
              className="footer-logo"
            />
          </Link>
          <h3 className="footer-title-pill">
            <span className="footer-title-icon" aria-hidden="true">i</span>
            CONTACT INFO
          </h3>
          <div className="footer-contact-links">
            <a href="mailto:info@promepsolution.com"><span aria-hidden="true">✉</span>info@promepsolution.com</a>
            <p><span aria-hidden="true">⌖</span>80 Broad Street, 5th Floor<br />New York, NY 10004</p>
            <a href="tel:+17185543366"><span aria-hidden="true">☎</span>(718) 554-3366</a>
          </div>
        </div>

        <ServiceColumn title="GENERAL CONTRACTORS" icon="▦" links={contractorLinks} />
        <ServiceColumn title="SUBCONTRACTORS" icon="⚒" links={subcontractorLinks} />
        <ServiceColumn title="FOR ARCHITECTS" icon="⌖" links={architectLinks} />

        <div className="footer-column">
          <h3 className="footer-title-pill">
            <span className="footer-title-icon" aria-hidden="true">↗</span>
            QUICK LINKS
          </h3>
          <div className="footer-quick-links">
            {quickLinks.map(([icon, label, href]) => (
              <Link href={href} key={label}>
                <span aria-hidden="true">{icon}</span>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="relative z-10 border-t border-brand-burgundy/20 py-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} Pro MEP Solution. All rights reserved.
      </div>
    </footer>
  );
}
