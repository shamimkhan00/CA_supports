'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const services = [
  { label: 'Company Registration', href: '/services/company-registration' },
  { label: 'GST Registration', href: '/services/gst-registration' },
  { label: 'Income Tax Return', href: '/services/income-tax-return' },
  { label: 'Trademark Registration', href: '/services/trademark-registration' },
  { label: 'MSME / Udyam Registration', href: '/services/msme-udyam' },
  { label: 'ROC Compliance', href: '/services/roc-compliance' },
  { label: 'Accounting Services', href: '/services/accounting-services' },
  { label: 'FSSAI Food License', href: '/services/fssai-food-license' },
  { label: 'TDS Return Filing', href: '/services/tds-return-filing' },
  { label: 'Payroll Services', href: '/services/payroll-services' },
  { label: 'GST Return Filing', href: '/services/gst-return-filing' }
  // { label: 'Import Export Code', href: '/services' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servDropdown, setServDropdown] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[var(--navy)] text-white text-sm py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <span className="text-gray-300">Professional CA & CS Services Across India</span>
          <div className="flex items-center gap-6">
            <a href="tel:+911234567890" className="flex items-center gap-2 hover:text-[var(--gold)] transition-colors">
              <Phone size={14} /> +91 98765 43210
            </a>
            <a href="mailto:info@caweb.in" className="hover:text-[var(--gold)] transition-colors">info@caweb.in</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg bg-white' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center">
              <span className="text-[var(--gold)] font-bold text-lg font-display">CA</span>
            </div>
            <div>
              <div className="font-display font-bold text-[var(--navy)] text-lg leading-tight">CA Support India</div>
              <div className="text-[10px] text-[var(--muted)] tracking-widest uppercase">Financial Excellence</div>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/" className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors">Home</Link>

            <div className="relative" onMouseEnter={() => setServDropdown(true)} onMouseLeave={() => setServDropdown(false)}>
              <button className="flex items-center gap-1 text-[var(--navy)] hover:text-[var(--gold)] transition-colors">
                Services <ChevronDown size={14} className={`transition-transform ${servDropdown ? 'rotate-180' : ''}`} />
              </button>
              {servDropdown && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fadeInUp">
                  {services.map(s => (
                    <Link key={s.label} href={s.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[var(--gold-pale)] hover:text-[var(--navy)] transition-colors">
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors">About Us</Link>
            <Link href="/contact" className="text-[var(--navy)] hover:text-[var(--gold)] transition-colors">Contact</Link>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/contact"
              className="px-5 py-2.5 rounded-lg bg-[var(--navy)] text-white text-sm font-medium hover:bg-[var(--navy-light)] transition-colors">
              Book Consultation
            </Link>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-[var(--navy)]" onClick={() => setOpen(!open)}>
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3 animate-fadeInUp">
            <Link href="/" className="block py-2 text-[var(--navy)] font-medium" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/services" className="block py-2 text-[var(--navy)] font-medium" onClick={() => setOpen(false)}>Services</Link>
            <Link href="/about" className="block py-2 text-[var(--navy)] font-medium" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/contact" className="block py-2 text-[var(--navy)] font-medium" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/contact"
              className="block mt-2 px-5 py-2.5 rounded-lg bg-[var(--navy)] text-white text-sm font-medium text-center"
              onClick={() => setOpen(false)}>
              Book Consultation
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
