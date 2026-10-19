import Link from "next/link";

export default function PageHero({ title, intro }: { title: string; intro: string }) {
  return <section className="bg-brand-ink py-20 text-white md:py-28"><div className="container-wide"><div className="eyebrow mb-5 text-brand-gold">Pro MEP Solution</div><h1 className="max-w-3xl text-5xl leading-tight md:text-7xl">{title}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p><div className="mt-7 text-sm text-slate-400"><Link href="/">Home</Link><span className="mx-3 text-brand-gold">/</span>{title}</div></div></section>;
}
