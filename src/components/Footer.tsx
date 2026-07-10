import Link from 'next/link';
import { Phone, Mail, MapPin, Share2, ExternalLink, ArrowRight, MessageCircle } from 'lucide-react';
import Image from 'next/image';

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
            {/* <div className="w-10 h-10 rounded-lg bg-[var(--gold)] flex items-center justify-center">
              <span className="text-[var(--navy)] font-bold text-lg font-display">CA</span>
            </div> */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="CA Support India Logo"
                  width={36}
                  height={36}
                  priority
                  className="object-contain"
                />
              </div>

            </Link>
            <div className="font-display font-bold text-xl">CA Support India</div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            India's trusted platform connecting clients with certified Chartered Accountants and Company Secretaries for all financial & compliance needs.
          </p>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/casupportindia?igsh=Zjl2MmZuNXo2OTBt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] flex items-center justify-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/share/1BJuqxqDpA/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] flex items-center justify-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/casupportindia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on LinkedIn"
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[var(--gold)] hover:text-[var(--navy)] flex items-center justify-center transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"></path>
              </svg>
            </a>
          </div>
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
            {['Home', 'About Us', 'Services', 'Contact', 'Privacy Policy', 'Terms and Conditions'].map((l) => {
              const slug =
                l === 'Home'
                  ? ''
                  : l === 'About Us'
                    ? 'about'
                    : l.toLowerCase().replace(/\s+/g, '-');

              return (
                <li key={l}>
                  <Link
                    href={slug ? `/${slug}` : '/'}
                    className="text-gray-400 hover:text-[var(--gold)] text-sm transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-[var(--gold)] opacity-70 flex-shrink-0"></span>
                    {l}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 text-sm text-gray-400">
              <MapPin size={16} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
              <span>1 Moti Sil Street, Kolkata, West Bengal 700013, India</span>
            </li>
            <li>
              <a href="tel:+919876543210" className="flex gap-3 text-sm text-gray-400 hover:text-[var(--gold)] transition-colors">
                <Phone size={16} className="text-[var(--gold)] flex-shrink-0" />
                +91 91233 29927
              </a>
            </li>
            <li>
              <a href="mailto:contact@casupportindia.in" className="flex gap-3 text-sm text-gray-400 hover:text-[var(--gold)] transition-colors">
                <Mail size={16} className="text-[var(--gold)] flex-shrink-0" />
                contact@casupportindia.in
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
