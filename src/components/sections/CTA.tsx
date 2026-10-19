import Link from "next/link";

export default function CTA() {
  return <section className="container-wide my-20 overflow-hidden rounded-[28px] bg-brand-burgundy px-8 py-12 text-white md:flex md:items-center md:justify-between md:px-16"><div><div className="eyebrow mb-4 text-brand-gold">Let&apos;s build smarter</div><h2 className="max-w-xl text-3xl leading-tight md:text-4xl">Ready to take the guesswork out of your next project?</h2></div><Link href="/contact" className="mt-8 inline-block shrink-0 bg-brand-gold px-7 py-4 text-sm font-bold text-brand-ink transition hover:bg-white md:mt-0">TALK TO AN ESTIMATOR →</Link></section>;
}
