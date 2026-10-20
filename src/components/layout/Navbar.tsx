"use client";

import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  return (
    <header className="site-header absolute left-0 right-0 top-0 z-50 min-h-[73px] bg-white">
      <div className="navbar-inner mx-auto flex h-full w-[calc(100%-40px)] max-w-[1166px] items-center justify-between gap-8">
        <Link href="/" aria-label="Pro MEP Solution home" className="shrink-0">
          <span className="brand-wordmark"><span>PRO MEP</span><strong>SOLUTION</strong></span>
        </Link>
        <nav className="hidden h-full items-center gap-[24px] xl:flex" aria-label="Main navigation">
          {navItems.map((item) => item.children ? (
            <div className="relative" key={item.label}>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex h-full items-center gap-1 border-b-2 border-brand-ink pt-px font-poppins text-[14px] font-medium text-brand-ink transition hover:text-brand-burgundy">
                {item.label}<span aria-hidden="true" className="text-[11px]">⌄</span>
              </button>
              {servicesOpen && <div className="absolute left-0 top-8 w-56 rounded-sm border border-slate-100 bg-white p-3 shadow-soft">
                {item.children.map((child) => <Link key={child} href="/services" onClick={() => setServicesOpen(false)} className="block px-3 py-2 text-sm hover:bg-brand-cream hover:text-brand-burgundy">{child}</Link>)}
              </div>}
            </div>
          ) : <Link key={item.label} href={item.href} className={`flex h-full items-center border-b-2 pt-px font-poppins text-[14px] font-medium transition hover:text-brand-burgundy ${item.label === "Home" ? "border-brand-ink text-brand-ink" : "border-transparent text-brand-burgundy"}`}>{item.label}</Link>)}
          <Link href="/contact-us" className="ml-[-2px] flex h-[42px] w-[120px] items-center justify-center bg-brand-burgundy font-poppins text-[12px] font-bold text-white transition hover:bg-[#7b1a1e]">GET A QUOTE</Link>
        </nav>
        <div className="flex items-center gap-5 xl:hidden">
          <a href="tel:+18888590222" className="hidden text-right text-[10px] font-semibold leading-4 text-brand-ink sm:block">TOLL FREE<br /><span className="text-brand-burgundy">1-888-859-0222</span></a>
          <button className="text-2xl" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? "×" : "☰"}</button>
        </div>
      </div>
      {open && <div className="border-t border-slate-100 bg-white px-5 py-5 xl:hidden">
        <nav className="container-wide flex flex-col gap-4" aria-label="Mobile navigation">
          {navItems.map((item) => item.children ? (
            <div key={item.label} className="mobile-nav-group">
              <button type="button" onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen} className="mobile-nav-toggle">{item.label}<span aria-hidden="true">{servicesOpen ? "−" : "+"}</span></button>
              {servicesOpen && <div className="mobile-nav-children">{item.children.map((child) => <Link key={child} href="/services" onClick={() => setOpen(false)}>{child}</Link>)}</div>}
            </div>
          ) : <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="mobile-nav-link">{item.label}</Link>)}
          <div className="mobile-nav-actions"><a href="tel:+18888590222">CALL NOW</a><Link href="/contact-us" onClick={() => setOpen(false)}>GET A QUOTE</Link></div>
        </nav>
      </div>}
    </header>
  );
}
