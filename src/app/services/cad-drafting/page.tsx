import PageHero from "@/components/layout/PageHero";
import CTA from "@/components/sections/CTA";

export const metadata = {
  title: "CAD Drafting Solution",
  description:
    "Professional CAD drafting and conversion services for accurate, organized, and editable CAD files.",
};

const services = [
  "AutoCAD 2D drafting.",
  "PDF-to-DWG and image-to-CAD conversion.",
  "Architectural drafting and floor plans.",
  "Electrical, mechanical, and plumbing drafting.",
  "Shop drawings and construction details.",
  "As-built drawings and redline revisions.",
  "Drawing modifications and updates.",
  "CAD cleanup, layering, and formatting.",
  "Coordination drawings and detailed documentation.",
];

export default function CadDrafting() {
  return (
    <main>
      <PageHero
        title="CAD Drafting Solution"
        intro="Professional CAD drafting and conversion services for accurate, organized, and editable CAD files."
      />
      <section className="container-wide py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="text-lg leading-8 text-slate-600 md:text-xl">
            We provide professional CAD drafting and conversion services to
            transform concepts, sketches, PDFs, and existing drawings into
            accurate, organized, and editable CAD files.
          </p>
          <h2 className="mt-10 text-4xl leading-tight md:text-5xl">
            Our drafting services include:
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
            We focus on maintaining drawing accuracy, proper layering,
            dimensions, annotations, and professional presentation.
          </p>
        </div>
      </section>
      <CTA />
    </main>
  );
}
