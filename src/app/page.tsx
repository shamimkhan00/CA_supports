import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import StatsBanner from '@/components/StatsBanner';
import Testimonials from '@/components/Testimonials';
import Link from 'next/link';
import { ArrowRight, UserCheck, Headphones, Lock } from 'lucide-react';
import { HomeFAQSchema, ReviewsSchema } from '@/lib/jsonld';
import { BASE_URL, defaultOpenGraph, defaultTwitter, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'CA Support India | Fast & Reliable CA Services for Growing Businesses – Company Registration, GST, ITR',
  description:
    "India's most trusted CA consultation platform. Register a company in 7 days, file GST returns, ITR, trademark registration & more. 10,000+ happy clients. Expert CAs & CSs. Pan-India, 100% online.",
  keywords: [
    'CA online India', 'company registration online', 'GST registration', 'income tax return',
    'chartered accountant online', 'trademark registration', 'MSME registration', 'CA consultation',
    'online CA services India', 'private limited company registration', 'ITR filing online',
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    ...defaultOpenGraph,
    title: `${SITE_NAME} | Fast & Reliable CA Services for Growing Businesses`,
    description:
      "India's most trusted CA platform. Register a company in 7 days, GST, ITR, trademark & compliance. 10,000+ clients.",
    url: BASE_URL,
    type: 'website',
  },
  twitter: {
    ...defaultTwitter,
    title: `${SITE_NAME} | Fast & Reliable CA Services for Growing Businesses`,
    description: 'Company registration, GST, ITR, trademark. Expert CAs. 10,000+ clients. Pan-India.',
  },
};

const faqItems = [
  {
    q: 'How do I register a company online in India?',
    a: 'CA Support India registers your Private Limited Company, LLP, or OPC completely online in 7–12 working days. Our CAs handle DSC, DIN, name approval (MCA), and SPICe+ filing — you just provide documents.',
  },
  {
    q: 'What documents are needed for GST registration?',
    a: 'You need PAN card, Aadhaar, bank account details, business address proof, and a photograph. CA Support India guides you through the entire GST registration process online.',
  },
  {
    q: 'Can NRIs use CA Support India for ITR filing?',
    a: 'Yes. CA Support India specialises in NRI ITR filing including income from India, DTAA benefits, and FEMA compliance. Our experts ensure maximum refunds and full compliance.',
  },
  {
    q: 'How much does trademark registration cost in India?',
    a: 'CA Support India offers trademark registration starting at ₹6,999 (professional fee + government fee). This covers trademark search, application filing, and handling of any examination reports.',
  },
  {
    q: 'Is CA Support India available across all Indian states?',
    a: 'Yes — CA Support India serves clients across all 28 states and 8 union territories of India. All services are 100% online with no physical visit required.',
  },
];

export default function Home() {
  return (
    <>
      <HomeFAQSchema />
      <ReviewsSchema />

      <Hero />
      <StatsBanner />
      <Services />
      <HowItWorks />

      {/* Why Choose Us */}
      <section className="py-20 bg-white" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
              <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Why Us</span>
            </div>
            <h2 id="why-us-heading" className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-6 gold-line">
              The CA Support India Difference
            </h2>
            <p className="text-[var(--muted)] leading-relaxed mb-8">
              We combine the expertise of seasoned Chartered Accountants with modern technology to deliver financial and legal services that are faster, more affordable, and more transparent than traditional CA firms.
            </p>
            <div className="space-y-6">
              {[
                { icon: UserCheck, title: 'Verified Experts Only', desc: 'Every CA and CS on our platform is ICAI/ICSI certified and background-verified for your peace of mind.' },
                { icon: Headphones, title: 'Dedicated Support', desc: 'A dedicated relationship manager handles your account end-to-end, with real-time status updates via WhatsApp.' },
                { icon: Lock, title: 'Secure & Confidential', desc: 'Your financial data is encrypted and never shared with third parties. We are ISO 27001 compliant.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[var(--gold-pale)] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                    <Icon size={20} className="text-[var(--gold)]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--navy)] mb-1">{title}</h3>
                    <p className="text-[var(--muted)] text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="bg-[var(--navy)] rounded-2xl p-8 text-white">
            <h3 className="font-display text-xl font-bold mb-6 text-[var(--gold)]">Get a Free Quote</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-300 mb-1 block" htmlFor="home-name">Full Name</label>
                <input id="home-name" type="text" placeholder="Your full name"
                  className="w-full bg-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-[var(--gold)]" />
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-1 block" htmlFor="home-phone">Mobile Number</label>
                <input id="home-phone" type="tel" placeholder="+91 XXXXX XXXXX"
                  className="w-full bg-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-400 border border-white/10 focus:outline-none focus:border-[var(--gold)]" />
              </div>
              <div>
                <label className="text-sm text-gray-300 mb-1 block" htmlFor="home-service">Service Required</label>
                <select id="home-service"
                  className="w-full bg-white/10 rounded-lg px-4 py-3 text-sm text-gray-300 border border-white/10 focus:outline-none focus:border-[var(--gold)]">
                  <option value="">Select a service</option>
                  <option>Company Registration</option>
                  <option>GST Services</option>
                  <option>Income Tax Return</option>
                  <option>Trademark Registration</option>
                  <option>MSME Registration</option>
                  <option>Other</option>
                </select>
              </div>
              <Link href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--gold)] text-[var(--navy)] rounded-lg font-semibold hover:bg-[var(--gold-light)] transition-colors mt-2">
                Request Callback <ArrowRight size={16} />
              </Link>
              <p className="text-gray-500 text-xs text-center">100% Free · No spam · Quick response</p>
            </div>
          </div> */}
          <div className="bg-[var(--navy)] rounded-2xl p-8 text-white">
            <h3 className="font-display text-xl font-bold mb-4 text-[var(--gold)]">
              Free Consultation
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Need help with GST, Income Tax, Company Registration, Trademark, MSME, or
              other compliance services? Get expert guidance from our team.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-[var(--gold)]">✓</span>
                <span className="text-sm text-gray-300">
                  Free initial consultation
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[var(--gold)]">✓</span>
                <span className="text-sm text-gray-300">
                  Quick response within 24 hours
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[var(--gold)]">✓</span>
                <span className="text-sm text-gray-300">
                  Professional CA assistance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[var(--gold)]">✓</span>
                <span className="text-sm text-gray-300">
                  Transparent pricing
                </span>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-4 mb-4">
              <p className="text-xs text-gray-400 mb-1">WhatsApp Consultation</p>
              <p className="font-semibold text-lg">+91 91233 29927</p>
            </div>

            <div className="space-y-3">
              <a
                href="https://wa.me/919123329927"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-green-600 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Chat on WhatsApp
              </a>

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[var(--gold)] text-[var(--navy)] rounded-lg font-semibold hover:bg-[var(--gold-light)] transition-colors"
              >
                Contact Us
              </Link>
            </div>

            <p className="text-gray-500 text-xs text-center mt-4">
              No obligation • Free consultation • Confidential discussion
            </p>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ Section — boosts long-tail SEO & FAQ rich results */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
              <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">FAQ</span>
            </div>
            <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)]">
              Frequently Asked Questions
            </h2>
            <p className="text-[var(--muted)] mt-3">Everything you need to know about our CA services.</p>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i}
                className="group bg-[var(--cream)] rounded-xl border border-gray-100 overflow-hidden">
                <summary className="flex items-center justify-between px-6 py-4 cursor-pointer font-semibold text-[var(--navy)] list-none gap-4">
                  <span>{item.q}</span>
                  <span className="text-[var(--gold)] text-xl font-light flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                </summary>
                <div className="px-6 pb-5 text-[var(--muted)] text-sm leading-relaxed border-t border-gray-100 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Partners strip */}
      {/* <section className="py-12 bg-[var(--cream)] border-t border-gray-100" aria-label="Regulatory bodies we work with">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--muted)] mb-8">Registered with & Recognised by</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['Ministry of Corporate Affairs', 'FSSAI', 'MSME India', 'DGFT India', 'ICAI', 'GST Council'].map(p => (
              <span key={p} className="text-gray-400 font-display font-semibold text-sm">{p}</span>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}
