import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle, FileText, Clock, ArrowRight, Building2, AlertCircle } from 'lucide-react';
import { BreadcrumbSchema } from '@/lib/jsonld';
import { BASE_URL, defaultOpenGraph, defaultTwitter } from '@/lib/seo';

/* ─── SEO Metadata ─────────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'Company Registration Online India – Private Limited, LLP, OPC | CA Support India',
  description:
    'Register your company online in India starting at ₹7,999. Private Limited Company, LLP, OPC & Partnership registration in 7–12 days. Expert CA assistance, complete MCA filing. Pan-India service.',
  keywords: [
    'company registration India',
    'private limited company registration',
    'register company online India',
    'LLP registration India',
    'OPC registration',
    'startup registration India',
    'MCA company registration',
    'how to register a company in India',
    'company registration cost India',
    'pvt ltd company registration',
    'company registration documents India',
  ],
  alternates: { canonical: `${BASE_URL}/services/company-registration` },
  openGraph: {
    ...defaultOpenGraph,
    title: 'Company Registration Online India – ₹7,999 | CA Support India',
    description:
      'Register your Private Limited Company, LLP or OPC in 7–12 days starting at ₹7,999. Expert CAs handle everything — DSC, DIN, MCA filing.',
    url: `${BASE_URL}/services/company-registration`,
  },
  twitter: {
    ...defaultTwitter,
    title: 'Company Registration Online India | CA Support India',
    description: 'Private Limited, LLP, OPC registration in 7–12 days from ₹7,999. Expert CAs. Pan-India.',
  },
};

/* ─── Structured Data ──────────────────────────────────────── */
function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'Company Registration in India',
        description:
          'Online company registration service for Private Limited Company, LLP, OPC and Partnership firms in India. Includes DSC, DIN, name approval, and MCA SPICe+ filing.',
        provider: { '@id': `${BASE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'India' },
        offers: {
          '@type': 'Offer',
          price: '7999',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${BASE_URL}/services/company-registration`,
        },
        serviceType: 'Company Registration',
        termsOfService: `${BASE_URL}/terms`,
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'How long does company registration take in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Company registration through CA Support India takes 7–12 working days. This includes DSC/DIN (1–2 days), name approval via RUN/SPICe+ (2–4 days), and certificate of incorporation (3–5 days).',
            },
          },
          {
            '@type': 'Question',
            name: 'What is the minimum capital required to register a Private Limited Company?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'There is no minimum paid-up capital requirement to register a Private Limited Company in India after the Companies Act 2013 amendment. You can start with as low as ₹1,000.',
            },
          },
          {
            '@type': 'Question',
            name: 'How many directors are required for a Private Limited Company?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A Private Limited Company requires a minimum of 2 directors and can have a maximum of 15 directors. At least one director must be a resident of India.',
            },
          },
          {
            '@type': 'Question',
            name: 'What documents are needed for company registration in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You need PAN card, Aadhaar card, passport-size photograph, and address proof (bank statement/utility bill) for each director. For registered office: utility bill + NOC from owner or rent agreement.',
            },
          },
          {
            '@type': 'Question',
            name: 'Can a foreign national register a company in India?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes. Foreign nationals can be directors or shareholders in an Indian Private Limited Company. They need a valid passport and address proof. At least one Indian resident director is mandatory.',
            },
          },
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: BASE_URL },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${BASE_URL}/services` },
          { '@type': 'ListItem', position: 3, name: 'Company Registration', item: `${BASE_URL}/services/company-registration` },
        ],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/* ─── Page Data ────────────────────────────────────────────── */
const companyTypes = [
  {
    name: 'Private Limited Company',
    tag: 'Most Popular',
    price: '₹7,999',
    ideal: 'Startups, funded businesses, growing teams',
    perks: ['Separate legal entity', 'Easy to raise funding', 'Limited liability', 'Up to 200 shareholders'],
  },
  {
    name: 'Limited Liability Partnership',
    tag: 'Flexible',
    price: '₹6,999',
    ideal: 'Professional firms, consultancies, small businesses',
    perks: ['Partners have limited liability', 'No audit if turnover < ₹40L', 'Flexible profit sharing', 'Lower compliance'],
  },
  {
    name: 'One Person Company',
    tag: 'Solo Founder',
    price: '₹5,999',
    ideal: 'Solo entrepreneurs, freelancers going formal',
    perks: ['Single owner, full control', 'Limited liability protection', 'Separate legal identity', 'Easy to convert to Pvt Ltd'],
  },
  {
    name: 'Partnership Firm',
    tag: 'Simple',
    price: '₹3,999',
    ideal: 'Small local businesses, family businesses',
    perks: ['Simple to form', 'Minimal compliance', 'Flexible management', 'Easy profit sharing'],
  },
];

const documents = [
  {
    heading: 'For Each Director / Shareholder',
    items: [
      'PAN Card (mandatory)',
      'Aadhaar Card',
      'Passport-size photograph (white background)',
      'Bank statement or utility bill (address proof, not older than 2 months)',
      'Passport — only if foreign national',
    ],
  },
  {
    heading: 'For Registered Office Address',
    items: [
      'Electricity bill / water bill / gas bill (not older than 2 months)',
      'NOC (No Objection Certificate) from property owner',
      'Rent agreement — if rented premises',
    ],
  },
];

const steps = [
  {
    num: '01',
    title: 'Submit Documents',
    desc: 'Share scanned copies of required documents via our secure portal or WhatsApp. Takes under 10 minutes.',
  },
  {
    num: '02',
    title: 'DSC & DIN',
    desc: 'Our CA applies for Digital Signature Certificate (DSC) and Director Identification Number (DIN) for all directors.',
    time: '1–2 days',
  },
  {
    num: '03',
    title: 'Name Approval',
    desc: 'We file your preferred company name(s) with MCA via RUN (Reserve Unique Name) for approval.',
    time: '2–4 days',
  },
  {
    num: '04',
    title: 'SPICe+ Filing',
    desc: 'We prepare and file the SPICe+ form with MoA, AoA, and all incorporation documents with Registrar of Companies.',
    time: '3–5 days',
  },
  {
    num: '05',
    title: 'Certificate of Incorporation',
    desc: 'ROC issues the Certificate of Incorporation with your CIN. Your company is now legally registered!',
    time: 'Day 7–12',
  },
];

const benefits = [
  'Separate legal identity — company can own property, enter contracts, and sue/be sued independently',
  'Limited liability — personal assets of directors are protected from business debts',
  'Easier to raise funding from angel investors, VCs, and banks',
  'Professional credibility — clients and vendors trust registered companies more',
  'Perpetual succession — company continues even if directors/shareholders change',
  'Employee stock options (ESOPs) to attract top talent',
  'Tax advantages — corporate tax rates lower than personal income tax at higher slabs',
  'Easy to open a current bank account and accept payments',
];

const faqs = [
  {
    q: 'How long does company registration take in India?',
    a: 'Through CA Support India, it takes 7–12 working days. DSC/DIN takes 1–2 days, name approval 2–4 days, and the Certificate of Incorporation 3–5 days after SPICe+ filing.',
  },
  {
    q: 'What is the minimum capital required to register a Private Limited Company?',
    a: 'There is no minimum paid-up capital requirement after the Companies Act 2013 amendment. You can start with as low as ₹1,000 — though ₹1 lakh authorised capital is typical.',
  },
  {
    q: 'How many directors are required for a Pvt Ltd Company?',
    a: 'Minimum 2 directors, maximum 15. At least one director must be an Indian resident (present in India for 182+ days in the previous calendar year).',
  },
  {
    q: 'Can a foreign national register a company in India?',
    a: 'Yes. Foreign nationals can be directors or shareholders. A valid passport and overseas address proof are needed. At least one Indian resident director is mandatory.',
  },
  {
    q: 'What is the difference between a Pvt Ltd Company and an LLP?',
    a: 'A Pvt Ltd Company is better for fundraising, hiring, and scaling. An LLP has lower compliance costs and no mandatory audit below ₹40 lakh turnover — better for professional services firms.',
  },
  {
    q: 'Is GST registration required after company incorporation?',
    a: 'GST registration is mandatory if your turnover exceeds ₹20 lakh (₹10 lakh for special category states), or if you do inter-state sales, or sell on e-commerce platforms — regardless of turnover.',
  },
];

const relatedServices = [
  { title: 'GST Registration', href: '/services/gst-registration', price: '₹1,499' },
  { title: 'Trademark Registration', href: '/services/trademark-registration', price: '₹6,999' },
  { title: 'MSME / Udyam Registration', href: '/services/msme-registration', price: '₹999' },
  { title: 'ROC Annual Compliance', href: '/services', price: '₹4,999' },
];

/* ─── Page Component ───────────────────────────────────────── */
export default function CompanyRegistrationPage() {
  return (
    <>
      <ServiceSchema />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <header className="bg-[var(--navy)] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)', backgroundSize: '36px 36px' }}
        />
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/services" className="hover:text-[var(--gold)] transition-colors">Services</Link>
            <span aria-hidden="true">/</span>
            <span className="text-gray-200">Company Registration</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 mb-5">
                <Building2 size={14} className="text-[var(--gold)]" />
                <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Company Registration</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
                Register Your Company<br />
                <span className="shimmer-text">Online in India</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Start your business journey the right way. Our expert CAs handle every step — from DSC and DIN to MCA filing — and deliver your Certificate of Incorporation in 7–12 days.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--gold)] text-[var(--navy)] font-semibold hover:bg-[var(--gold-light)] transition-colors">
                  Get Started <ArrowRight size={16} />
                </Link>
                <a href="tel:+919876543210"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
                  Call an Expert
                </a>
              </div>
            </div>

            {/* Price card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Starting at</p>
                  <p className="font-display text-5xl font-bold text-[var(--gold)]">₹7,999</p>
                  <p className="text-gray-400 text-sm mt-1">all-inclusive, no hidden charges</p>
                </div>
                <div className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-green-500/30">
                  7–12 Days
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  'DSC (Digital Signature Certificate)',
                  'DIN for all directors',
                  'Company name approval (MCA)',
                  'SPICe+ incorporation filing',
                  'MoA & AoA drafting',
                  'Certificate of Incorporation',
                  'PAN & TAN of company',
                  'Post-registration guidance',
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-gray-300 text-sm">
                    <CheckCircle size={15} className="text-[var(--gold)] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="block text-center py-3 bg-[var(--gold)] text-[var(--navy)] rounded-xl font-semibold hover:bg-[var(--gold-light)] transition-colors">
                Start Registration
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* ── Company Types ─────────────────────────────────── */}
        <section className="py-20 bg-[var(--cream)]" aria-labelledby="types-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="types-heading" className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
                Choose the Right Structure
              </h2>
              <p className="text-[var(--muted)] max-w-2xl mx-auto">
                Not sure which type to register? Our CAs guide you to the best structure for your goals, team size, and funding plans.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyTypes.map((type) => (
                <div key={type.name}
                  className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider bg-[var(--gold-pale)] text-[var(--gold)] px-2.5 py-1 rounded-full mb-4">
                    {type.tag}
                  </span>
                  <h3 className="font-display font-bold text-[var(--navy)] text-base mb-1 leading-snug">{type.name}</h3>
                  <p className="text-[var(--gold)] font-bold text-lg mb-2">{type.price}</p>
                  <p className="text-[var(--muted)] text-xs mb-4 leading-relaxed">{type.ideal}</p>
                  <ul className="space-y-2">
                    {type.perks.map(perk => (
                      <li key={perk} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle size={12} className="text-green-500 flex-shrink-0 mt-0.5" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Documents Required ────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="docs-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
                <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Checklist</span>
              </div>
              <h2 id="docs-heading" className="font-display text-3xl font-bold text-[var(--navy)] mb-4 gold-line">
                Documents Required
              </h2>
              <p className="text-[var(--muted)] mb-8 leading-relaxed">
                Keep these ready as scanned copies (PDF or JPG). Our team verifies them before filing to avoid any ROC rejections.
              </p>
              <div className="space-y-8">
                {documents.map((section) => (
                  <div key={section.heading}>
                    <h3 className="font-semibold text-[var(--navy)] mb-3 flex items-center gap-2">
                      <FileText size={16} className="text-[var(--gold)]" aria-hidden="true" />
                      {section.heading}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.items.map(item => (
                        <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                          <CheckCircle size={15} className="text-green-500 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Alert box */}
            <div className="space-y-6">
              <div className="bg-[var(--gold-pale)] border border-[var(--gold)]/30 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertCircle size={20} className="text-[var(--gold)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <h4 className="font-semibold text-[var(--navy)] mb-2">Documents must be self-attested</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      All identity and address proof documents should be self-attested (signed by the director). Foreign nationals must get documents notarised and apostilled.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[var(--navy)] rounded-2xl p-6 text-white">
                <h4 className="font-display font-semibold text-lg mb-2 text-[var(--gold)]">Free Document Review</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Not sure if your documents are valid? Share them with our CA and we'll review for free before you pay anything.
                </p>
                <Link href="/contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold)] hover:underline">
                  Get Free Review <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ───────────────────────────────────────── */}
        <section className="py-20 bg-[var(--cream)]" aria-labelledby="process-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
                <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">How It Works</span>
              </div>
              <h2 id="process-heading" className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
                Step-by-Step Registration Process
              </h2>
              <p className="text-[var(--muted)] max-w-xl mx-auto">
                We handle everything. You just provide documents and relax — your CA keeps you updated at every stage.
              </p>
            </div>
            <div className="relative">
              <div className="hidden lg:block absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {steps.map((step) => (
                  <div key={step.num} className="text-center group">
                    <div className="w-20 h-20 rounded-full bg-[var(--gold-pale)] border-2 border-[var(--gold)] flex items-center justify-center mx-auto mb-5 group-hover:bg-[var(--navy)] transition-colors duration-300">
                      <span className="font-display font-bold text-2xl text-[var(--gold)]">{step.num}</span>
                    </div>
                    <h3 className="font-display font-semibold text-[var(--navy)] mb-2">{step.title}</h3>
                    <p className="text-[var(--muted)] text-xs leading-relaxed mb-2">{step.desc}</p>
                    {step.time && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[var(--gold)] bg-[var(--gold-pale)] px-2 py-1 rounded-full">
                        <Clock size={10} aria-hidden="true" /> {step.time}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Benefits ──────────────────────────────────────── */}
        <section className="py-20 bg-white" aria-labelledby="benefits-heading">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="benefits-heading" className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
                Why Register Your Company?
              </h2>
              <p className="text-[var(--muted)] max-w-xl mx-auto">
                A registered company isn't just a legal formality — it's the foundation of a serious, scalable business.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3 p-4 bg-[var(--cream)] rounded-xl border border-gray-100">
                  <CheckCircle size={18} className="text-[var(--gold)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-gray-700 leading-relaxed">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────────────── */}
        <section className="py-20 bg-[var(--cream)]" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 id="faq-heading" className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[var(--muted)]">Everything you need to know about company registration in India.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((item, i) => (
                <details key={i} className="group bg-white rounded-xl border border-gray-100 overflow-hidden">
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

        {/* ── Related Services ──────────────────────────────── */}
        <section className="py-16 bg-white" aria-labelledby="related-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="related-heading" className="font-display text-2xl font-bold text-[var(--navy)] mb-8 text-center">
              You May Also Need
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {relatedServices.map((s) => (
                <Link key={s.title} href={s.href}
                  className="group bg-[var(--cream)] rounded-xl p-5 border border-gray-100 hover:shadow-md hover:border-[var(--gold)]/30 transition-all text-center">
                  <p className="font-semibold text-[var(--navy)] text-sm mb-1 group-hover:text-[var(--gold)] transition-colors">{s.title}</p>
                  <p className="text-[var(--gold)] font-bold text-base">{s.price}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ────────────────────────────────────── */}
        <section className="py-16 bg-[var(--navy)]" aria-labelledby="cta-heading">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 id="cta-heading" className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Register Your Company?
            </h2>
            <p className="text-gray-300 mb-8">
              Talk to a CA for free — no commitment, no spam. Get your company incorporated in as little as 7 working days.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact"
                className="flex items-center gap-2 px-8 py-4 bg-[var(--gold)] text-[var(--navy)] rounded-xl font-semibold hover:bg-[var(--gold-light)] transition-colors">
                Start Registration — ₹7,999 <ArrowRight size={16} />
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 border border-white/20 text-white rounded-xl font-medium hover:bg-white/10 transition-colors">
                Chat on WhatsApp
              </a>
            </div>
            <p className="text-gray-500 text-sm mt-4">₹7,999 all-inclusive · No hidden charges · Free consultation</p>
          </div>
        </section>
      </main>
    </>
  );
}