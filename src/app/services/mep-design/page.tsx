import PageHero from "@/components/layout/PageHero";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "MEP Design",
  description:
    "Comprehensive mechanical, electrical, and plumbing design services for residential, commercial, and industrial projects.",
};

const services = [
  {
    title: "Electrical Design",
    text: "Lighting layouts, power distribution, load calculations, panel schedules, single-line diagrams, circuiting, and electrical plans.",
  },
  {
    title: "Mechanical Design",
    text: "HVAC layouts, heating and cooling load calculations, equipment selection, ductwork layouts, ventilation, and exhaust systems.",
  },
  {
    title: "Plumbing Design",
    text: "Domestic water supply, sanitary drainage, venting systems, plumbing layouts, and equipment connections.",
  },
  {
    title: "Fire Protection Coordination",
    text: "Fire protection drawing coordination and related design documentation.",
  },
  {
    title: "Energy & Lighting Analysis",
    text: "Lighting calculations, illumination layouts, and DIALux/AGi32 reports.",
  },
  {
    title: "Permit & Construction Drawings",
    text: "Detailed MEP drawing packages prepared to support permit applications, construction, and project coordination.",
  },
];

export default function MepDesign() {
  return (
    <main>
      <PageHero
        title="MEP Design"
        intro="Comprehensive Mechanical, Electrical, and Plumbing design services for residential, commercial, and industrial projects."
      />
      <section className="container-wide py-16 md:py-20">
        <div className="mb-10 max-w-3xl">
          <h2 className="text-4xl leading-tight md:text-5xl">
            Our services include:
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-brand-gold hover:shadow-soft"
            >
              <span className="text-3xl text-brand-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-2xl">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{service.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </main>
  );
}
