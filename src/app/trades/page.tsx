import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import CTA from "@/components/sections/CTA";
import { trades } from "@/lib/site";
export const metadata = { title: "Our Trades" };
export default function Trades() { return <main><PageHero title="Every trade. One trusted team." intro="We cater to every aspect of a perfect estimate, from concrete and masonry to electrical, mechanical, and finishes." /><section className="container-wide grid gap-6 py-24 sm:grid-cols-2 lg:grid-cols-3">{trades.map(([title, image]) => <article key={title} className="group relative overflow-hidden bg-brand-ink"><Image src={`/images/${image}`} alt={title} width={600} height={450} className="h-72 w-full object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-60" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-brand-ink p-7 pt-20"><h2 className="text-2xl text-white">{title}</h2><p className="mt-2 text-sm text-slate-300">Accurate takeoffs and estimates</p></div></article>)}</section><CTA /></main> }
