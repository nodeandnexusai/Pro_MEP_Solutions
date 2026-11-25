import Image from "next/image";
import Link from "next/link";

const serviceCards = [
  {
    title: "MEP Design & Engineering",
    image: "/images/Construction-Estimating-Services-2.webp",
    imageAlt: "Construction professionals coordinating building systems",
    icon: "⚙",
    description:
      "Mechanical, Electrical & Plumbing design for residential, commercial, and industrial projects.",
    tags: ["HVAC", "Electrical", "Plumbing"],
    href: "/services/mep-design",
  },
  {
    title: "Cost Estimation & Quantity Takeoffs",
    image: "/images/Professional-Construction-Cost-Estimators-9.webp",
    imageAlt: "Contractors reviewing construction drawings and estimates",
    icon: "▦",
    description:
      "Accurate quantity takeoffs and detailed cost estimates to plan your project with confidence.",
    tags: ["BOQs", "Material Takeoffs", "Cost Analysis"],
    href: "/services/cost-estimation",
  },
  {
    title: "CAD Drafting & Documentation",
    image:
      "/images/Engineer-and-Contractor-Collaborating-on-Construction-Estimate.webp",
    imageAlt: "Engineers coordinating construction drawings",
    icon: "⌖",
    description:
      "High-quality 2D/3D drawings with construction documentation.",
    tags: ["AutoCAD", "Shop Drawings", "As-Builts"],
    href: "/services/cad-drafting",
  },
];

const additionalServices: [string, string, string][] = [
  ["▥", "Project Coordination & Support", "/services/mep-design"],
  ["▤", "Design Modifications & Revisions", "/services/cad-drafting"],
  ["▧", "Permit-Ready Drawings", "/services/cad-drafting"],
  ["◉", "Technical Consulting", "/contact"],
];

const assurances: [string, string, string][] = [
  ["◉", "High Accuracy", "& Quality"],
  ["◷", "On-Time", "Delivery"],
  ["⌁", "Cost-Effective", "Solutions"],
  ["♧", "Experienced", "Team"],
  ["◇", "Client Satisfaction", "Our Priority"],
];

export default function ServicesShowcase({
  placement = "page",
}: {
  placement?: "page" | "home";
}) {
  const Heading = placement === "home" ? "h2" : "h1";

  return (
    <section
      className={`services-showcase${placement === "home" ? " services-showcase-home" : ""}`}
    >
      <div className="container-wide">
        <header className="services-showcase-header">
          <p className="eyebrow">
            Comprehensive Engineering &amp; Construction Support — Under One
            Roof
          </p>
          <Heading>
            Our <span>Services</span>
          </Heading>
          <p className="services-showcase-intro">
            We deliver accurate design, reliable estimation, and professional
            documentation to help you build smarter, faster, and more
            efficiently.
          </p>
        </header>

        <div className="services-showcase-grid">
          {serviceCards.map((service) => (
            <article className="service-showcase-card" key={service.title}>
              <Link href={service.href} className="service-showcase-image">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  width={640}
                  height={360}
                />
              </Link>
              <div className="service-showcase-icon" aria-hidden="true">
                {service.icon}
              </div>
              <div className="service-showcase-content">
                <h2>
                  <Link href={service.href}>{service.title}</Link>
                </h2>
                <p>{service.description}</p>
                <div className="service-showcase-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>
                      <i aria-hidden="true">●</i>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}

          <aside className="additional-services">
            <h2>Additional Services</h2>
            <div>
              {additionalServices.map(([icon, title, href]) => (
                <Link href={href} key={title}>
                  <span aria-hidden="true">{icon}</span>
                  <strong>{title}</strong>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <div className="services-assurance">
        <div className="container-wide services-assurance-inner">
          {assurances.map(([icon, title, subtitle]) => (
            <div key={title}>
              <span aria-hidden="true">{icon}</span>
              <p>
                {title}
                <br />
                {subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
