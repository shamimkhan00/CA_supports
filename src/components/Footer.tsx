import Link from 'next/link';
import { Phone, Mail, MapPin, Share2, ExternalLink, ArrowRight, MessageCircle } from 'lucide-react';

const services = [
  'Company Registration', 'GST Registration', 'Income Tax Return',
  'Trademark Registration', 'MSME Registration', 'Import Export Code',
  'TDS Return', 'FSSAI Food License',
];

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">
      {/* CTA Strip */}
      <div className="bg-[var(--gold)] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl font-bold text-[var(--navy)]">Ready to get started?</h3>
            <p className="text-[var(--navy-light)] mt-1">Talk to a CA expert today — free 30-minute consultation.</p>
          </div>
          <Link href="/contact"
            className="flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white rounded-lg font-medium hover:bg-[var(--navy-light)] transition-colors whitespace-nowrap">
            Book Free Consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-[var(--gold)] flex items-center justify-center">
              <span className="text-[var(--navy)] font-bold text-lg font-display">CA</span>
            </div>
            <div className="font-display font-bold text-xl">CA Support India</div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            India's trusted platform connecting clients with certified Chartered Accountants and Company Secretaries for all financial & compliance needs.
          </p>
          {/* <div className="flex gap-3">
            {[Share2, MessageCircle, ExternalLink].map((Icon, i) => (
              <a key={i} href="#"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] flex items-center justify-center transition-all">
                <Icon size={15} />
              </a>
            ))}
          </div> */}
        </div>

        {/* Services */}
        {/* <div>
          <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s}>
                <Link href="/services" className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-70 flex-shrink-0"></span>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}

        {/* Quick links */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Services', 'Contact', 'Privacy Policy', 'Terms and Conditions'].map(l => (
              <li key={l}>
                <Link href={`/${l.toLowerCase().replace(/\s+/g, '-')}`} className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-70 flex-shrink-0"></span>
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-4">
            {/* <li className="flex gap-3 text-sm text-gray-400">
              <MapPin size={16} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <span>1 Moti Sil Street, Kolkata, West Bengal 700013, India</span>
            </li> */}
            <li>
              <a href="tel:+919876543210" className="flex gap-3 text-sm text-gray-400 hover:text-[var(--gold)] transition-colors">
                <Phone size={16} className="text-[var(--gold)] flex-shrink-0" />
                +91 91233 29927
              </a>
            </li>
            <li>
              <a href="mailto:admin.ca.supports@gmail.com" className="flex gap-3 text-sm text-gray-400 hover:text-[var(--gold)] transition-colors">
                <Mail size={16} className="text-[var(--gold)] flex-shrink-0" />
                admin.ca.supports@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
            <p className="text-xs text-gray-400 mb-2 font-medium uppercase tracking-wide">Working Hours</p>
            <p className="text-sm text-white">Mon–Sat: 9:00 AM – 7:00 PM</p>
            <p className="text-sm text-gray-400">Sunday: Closed</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-400">
          <p>© 2024 CA Support India Pvt. Ltd. All rights reserved.</p>
          <p>Designed for financial excellence · India</p>
        </div>
      </div>
    </footer>
  );
}
