import PageHero from "@/components/layout/PageHero";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "Cost Estimation",
  description:
    "Construction cost estimation and quantity takeoff services for contractors, builders, and developers.",
};

const services = [
  "Electrical quantity takeoffs and cost estimates.",
  "Mechanical and HVAC quantity takeoffs.",
  "Plumbing quantity takeoffs and estimates.",
  "Complete MEP cost estimation.",
  "Material and equipment takeoffs.",
  "Labor and material cost breakdowns.",
  "Construction BOQs (Bill of Quantities).",
  "Detailed Excel-based estimation reports.",
  "PDF and CAD drawing-based quantity takeoffs.",
];

export default function CostEstimation() {
  return (
    <main>
      <PageHero
        title="Cost Estimation"
        intro="Construction Cost Estimation & Quantity Takeoffs"
      />
      <section className="container-wide py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="text-lg leading-8 text-slate-600 md:text-xl">
            We help contractors, builders, and developers make informed
            financial decisions through accurate quantity takeoffs and detailed
            cost estimation.
          </p>
          <h2 className="mt-10 text-4xl leading-tight md:text-5xl">
            Our services include:
          </h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service, index) => (
              <li
                key={service}
                className="flex gap-4 border border-slate-200 p-5 text-lg leading-7 text-slate-600 transition hover:border-brand-gold hover:shadow-soft"
              >
                <span className="shrink-0 font-bold text-brand-gold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg leading-8 text-slate-600 md:text-xl">
            Our goal is to help clients understand project costs, minimize
            material wastage, prepare competitive bids, and improve budget
            planning.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
