import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer className="bg-brand-ink text-white">
    <div className="container-wide grid gap-12 py-16 md:grid-cols-4">
      <div><h3 className="mb-5 text-sm tracking-wider text-white">CONTACT INFO</h3><p className="text-sm leading-7 text-slate-300">info@promepsolution.com</p><p className="mt-3 text-sm leading-7 text-slate-300">80 Broad Street, 5th Floor<br />New York, NY 10004</p><a className="mt-3 block text-sm text-slate-300" href="tel:+17185543366">(718) 554-3366</a></div>
      <div><h3 className="mb-5 text-sm tracking-wider text-white">GENERAL CONTRACTOR</h3><div className="flex flex-col gap-3 text-sm text-slate-300"><Link href="/services">Commercial Estimating</Link><Link href="/services">Residential Estimating</Link><Link href="/services">Industrial Estimating</Link><Link href="/trades">Concrete Estimating</Link><Link href="/trades">Electrical Estimating</Link></div></div>
      <div><h3 className="mb-5 text-sm tracking-wider text-white">SUB CONTRACTORS</h3><div className="flex flex-col gap-3 text-sm text-slate-300"><Link href="/trades">Drywall Takeoff</Link><Link href="/trades">Mechanical Estimating</Link><Link href="/trades">Plumbing Estimating</Link><Link href="/trades">Metal Takeoffs</Link><Link href="/trades">Painting Estimating</Link></div></div>
      <div><h3 className="mb-5 text-sm tracking-wider text-white">QUICK LINKS</h3><div className="flex flex-col gap-3 text-sm text-slate-300"><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/trades">Our Trades</Link><Link href="/contact">Contact Us</Link></div></div>
    </div>
    <div className="border-t border-white/10 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} Pro MEP Solution. All rights reserved.</div>
  </footer>;
}
