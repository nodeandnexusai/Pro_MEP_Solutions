import Link from "next/link";
import PageHero from "@/components/layout/PageHero";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Pro MEP Solution, a professional engineering and drafting service provider specializing in MEP design, cost estimation, quantity takeoffs, and CAD drafting.",
};

export default function About() {
  return (
    <main className="about-page">
      <PageHero
        title="About Us"
        intro="Delivering Reliable Engineering, Design & Construction Solutions"
        className="about-page-hero"
      />
      <section className="container-wide py-16 md:py-20">
        <div className="max-w-4xl">
          <p className="text-justify text-lg leading-8 text-slate-600 md:text-xl">
            We are a professional engineering and drafting service provider
            specializing in <strong>MEP Design, Construction Cost Estimation,
            Quantity Takeoffs, and CAD Drafting Services</strong>. We help
            architects, contractors, developers, engineering consultants, and
            construction professionals turn their project requirements into
            accurate, coordinated, and practical design solutions.
          </p>
          <p className="mt-4 text-justify text-lg leading-8 text-slate-600 md:text-xl">
            With extensive experience in the construction and engineering
            industry, we focus on delivering technically sound drawings,
            detailed estimates, and high-quality documentation that support
            efficient project planning, coordination, and execution.
          </p>
          <p className="mt-4 text-justify text-lg leading-8 text-slate-600 md:text-xl">
            Our approach combines engineering expertise, attention to detail, and
            a strong understanding of construction practices to deliver
            solutions that meet project requirements, applicable codes, and
            industry standards.
          </p>
        </div>
      </section>
      <section className="bg-brand-cream py-14 md:py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-4xl border-y border-brand-gold/40 py-8 text-center md:py-10">
            <h2 className="text-5xl leading-tight md:text-6xl">Our Mission</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 md:text-xl">
              Our mission is to provide dependable engineering, estimation, and
              drafting solutions that help construction professionals save time,
              control costs, improve design coordination, and execute projects
              with confidence.
            </p>
          </div>
        </div>
      </section>
      <section className="container-wide mb-16 overflow-hidden rounded-[28px] bg-brand-burgundy px-7 py-9 text-white shadow-soft md:mb-20 md:flex md:items-center md:justify-between md:px-12 md:py-10">
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-tight md:text-5xl">
            Let&apos;s Work Together
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-200">
            Whether you need a complete MEP design package, detailed
            construction cost estimation, or professional CAD drafting, we are
            ready to support your next project.
          </p>
          <p className="mt-3 text-lg leading-8 text-slate-200">
            From engineering design to quantity takeoffs and construction
            documentation, we bring your project requirements together through
            one reliable service partner.
          </p>
        </div>
        <Link
          href="/contact"
          className="mt-6 inline-block shrink-0 bg-brand-gold px-6 py-3 text-sm font-bold text-brand-ink transition hover:bg-white md:ml-10 md:mt-0"
        >
          CONTACT US →
        </Link>
      </section>
    </main>
  );
}
