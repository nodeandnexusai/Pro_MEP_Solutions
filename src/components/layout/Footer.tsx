import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer className="site-footer relative overflow-hidden">
    <div className="container-wide relative z-10 grid gap-8 py-10 sm:grid-cols-2 md:grid-cols-5 md:gap-6">
      <div>
        <Link href="/" aria-label="Pro MEP Solution home" className="mb-4 block w-fit">
          <Image src="/images/pro-mep-logo.png" alt="Pro MEP Solution" width={190} height={124} className="footer-logo" />
        </Link>
        <h3 className="mb-3 text-xs font-bold tracking-wider text-brand-burgundy">CONTACT INFO</h3>
        <p className="text-xs leading-6 text-slate-300">info@promepsolution.com</p>
        <p className="mt-2 text-xs leading-6 text-slate-300">80 Broad Street, 5th Floor<br />New York, NY 10004</p>
        <a className="mt-2 block text-xs text-slate-300" href="tel:+17185543366">(718) 554-3366</a>
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold tracking-wider text-brand-burgundy">GENERAL CONTRACTOR</h3>
        <div className="flex flex-col gap-2 text-xs leading-5 text-slate-700"><Link href="/services">Commercial Estimating</Link><Link href="/services">Residential Estimating</Link><Link href="/services">Industrial Estimating</Link><Link href="/trades">Concrete Estimating</Link><Link href="/trades">Electrical Estimating</Link></div>
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold tracking-wider text-brand-burgundy">SUBCONTRACTORS</h3>
        <div className="flex flex-col gap-2 text-xs leading-5 text-slate-700"><Link href="/trades">Drywall Takeoff</Link><Link href="/trades">Mechanical Estimating</Link><Link href="/trades">Plumbing Estimating</Link><Link href="/trades">Metal Takeoffs</Link><Link href="/trades">Painting Estimating</Link></div>
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold tracking-wider text-brand-burgundy">ARCHITECTS</h3>
        <div className="flex flex-col gap-2 text-xs leading-5 text-slate-700"><Link href="/services/mep-design">Design Support</Link><Link href="/services/cad-drafting">CAD Drafting</Link><Link href="/services/cad-drafting">Permit-Ready Drawings</Link><Link href="/services">Technical Consulting</Link></div>
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold tracking-wider text-brand-burgundy">QUICK LINKS</h3>
        <div className="flex flex-col gap-2 text-xs leading-5 text-slate-700"><Link href="/">Home</Link><Link href="/about">About Us</Link><Link href="/services">Services</Link><Link href="/trades">Our Projects</Link><Link href="/contact">Contact Us</Link></div>
      </div>
    </div>
    <div className="relative z-10 border-t border-brand-burgundy/20 py-5 text-center text-xs text-slate-600">© {new Date().getFullYear()} Pro MEP Solution. All rights reserved.</div>
  </footer>;
}
