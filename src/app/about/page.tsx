import type { Metadata } from 'next';
import { CheckCircle, Award, Users, Target } from 'lucide-react';
import Link from 'next/link';
import { BreadcrumbSchema } from '@/lib/jsonld';
import { BASE_URL, defaultOpenGraph, defaultTwitter, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'About CA on Web – India\'s Trusted CA & CS Platform Since 2009',
  description:
    'Learn about CA on Web — founded in 2009, 50+ certified CAs & CSs, 10,000+ clients across India. Our mission is to make professional CA services accessible, affordable, and technology-driven for every Indian.',
  keywords: [
    'about CA on web', 'CA on web company', 'chartered accountant firm India',
    'best CA firm online India', 'trusted CA services India', 'ICAI registered CA',
  ],
  alternates: { canonical: `${BASE_URL}/about` },
  openGraph: {
    ...defaultOpenGraph,
    title: 'About CA on Web – India\'s Trusted CA & CS Platform Since 2009',
    description: 'Founded 2009. 50+ certified CAs & CSs. 10,000+ clients. Making professional CA services accessible across all of India.',
    url: `${BASE_URL}/about`,
  },
  twitter: {
    ...defaultTwitter,
    title: 'About CA on Web | Trusted Since 2009',
    description: '50+ certified CAs & CSs. 10,000+ clients. Pan-India CA services.',
  },
};

const team = [
  { name: 'CA Anand Sharma', role: 'Founder & Managing Director', exp: '20+ years', spec: 'Corporate Tax & Restructuring', initials: 'AS' },
  { name: 'CA Priya Mehta', role: 'Partner – Audit & Assurance', exp: '15+ years', spec: 'Statutory Audit & IFRS', initials: 'PM' },
  { name: 'CS Rohit Verma', role: 'Partner – Corporate Law', exp: '12+ years', spec: 'Company Law & Secretarial', initials: 'RV' },
  { name: 'CA Neha Singh', role: 'Head – GST Practice', exp: '10+ years', spec: 'GST Advisory & Litigation', initials: 'NS' },
];

const values = [
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest professional standards in every client engagement.' },
  { icon: Users, title: 'Client-First', desc: 'Your financial success is our mission. We deliver actionable solutions, not just advice.' },
  { icon: Target, title: 'Precision', desc: 'Zero tolerance for error. Every filing, every document — done right the first time.' },
  { icon: CheckCircle, title: 'Integrity', desc: 'Transparent pricing, honest counsel, and full compliance with professional ethics.' },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about' }]} />

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Header */}
        <header className="bg-[var(--navy)] py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-200">About Us</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              About CA on Web
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              India's most trusted online platform for Chartered Accountant and Company Secretary services — making compliance simple since 2009.
            </p>
          </div>
        </header>

        {/* Mission */}
        <section className="py-16 bg-white" aria-labelledby="our-story-heading">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
                <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Our Story</span>
              </div>
              <h2 id="our-story-heading" className="font-display text-3xl font-bold text-[var(--navy)] mb-6 gold-line">
                Built to Make CA Services Accessible to Every Indian
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-4">
                CA on Web was founded in 2009 with a simple yet powerful belief: every individual and business in India — whether in a metro or a tier-3 town — deserves access to qualified, affordable, and technology-driven CA and legal services.
              </p>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                Lengthy phone calls, sky-high hourly fees, and opacity in billing were the norm. We set out to change that. Today, with over 10,000 satisfied clients and thousands of successful filings across 28 states, we are India's go-to platform for financial compliance done right.
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--navy)] text-white rounded-lg font-medium hover:bg-[var(--navy-light)] transition-colors">
                Work With Us →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '2009', label: 'Founded' },
                { value: '10,000+', label: 'Clients Served' },
                { value: '50+', label: 'Expert CAs & CSs' },
                { value: '28', label: 'States Covered' },
              ].map(s => (
                <div key={s.label} className="bg-[var(--cream)] rounded-2xl p-6 text-center border border-gray-100">
                  <div className="font-display text-3xl font-bold text-[var(--gold)] mb-1">{s.value}</div>
                  <div className="text-[var(--muted)] text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 bg-[var(--cream)]" aria-labelledby="values-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="values-heading" className="font-display text-3xl font-bold text-[var(--navy)] text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 text-center hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-full bg-[var(--gold-pale)] flex items-center justify-center mx-auto mb-4" aria-hidden="true">
                    <Icon size={24} className="text-[var(--gold)]" />
                  </div>
                  <h3 className="font-display font-semibold text-[var(--navy)] text-lg mb-2">{title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 bg-white" aria-labelledby="team-heading">
          <div className="max-w-7xl mx-auto px-6">
            <h2 id="team-heading" className="font-display text-3xl font-bold text-[var(--navy)] text-center mb-12">
              Meet Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {team.map(m => (
                <div key={m.name} className="bg-[var(--cream)] rounded-2xl p-6 border border-gray-100 text-center" itemScope itemType="https://schema.org/Person">
                  <div className="w-16 h-16 rounded-full bg-[var(--navy)] flex items-center justify-center mx-auto mb-4 text-[var(--gold)] font-display font-bold text-xl" aria-hidden="true">
                    {m.initials}
                  </div>
                  <h3 className="font-semibold text-[var(--navy)] mb-1" itemProp="name">{m.name}</h3>
                  <p className="text-[var(--gold)] text-xs font-medium mb-2" itemProp="jobTitle">{m.role}</p>
                  <p className="text-[var(--muted)] text-xs">{m.exp} · <span itemProp="knowsAbout">{m.spec}</span></p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
