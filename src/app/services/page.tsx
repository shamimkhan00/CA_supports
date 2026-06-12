import type { Metadata } from 'next';
import { Building2, FileText, Receipt, Tag, Package, Globe, Scale, BarChart3, Shield, CreditCard, Users, Clock } from 'lucide-react';
import Link from 'next/link';
import { ServicesSchema, BreadcrumbSchema } from '@/lib/jsonld';
import { BASE_URL, defaultOpenGraph, defaultTwitter, SITE_NAME } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'CA & CS Services – Company Registration, GST, ITR, Trademark | CA Support India',
  description:
    'Explore all CA and CS services by CA Support India — company registration, GST registration, ITR filing, trademark registration, MSME, ROC compliance, and more. Pan-India, 100% online.',
  keywords: [
    'CA services online India', 'company registration cost India', 'GST registration fee',
    'income tax return filing charges', 'trademark registration fee India', 'MSME registration online',
    'ROC compliance India', 'accounting services India',
    'FSSAI license online', 'TDS return filing', 'payroll services India',
  ],
  alternates: { canonical: `${BASE_URL}/services` },
  openGraph: {
    ...defaultOpenGraph,
    title: 'CA & CS Services – Company Registration, GST, ITR, Trademark | CA Support India',
    description: 'All CA & CS services: company registration ₹7,999, GST ₹1,499, ITR ₹999, trademark ₹6,999 and more. Expert team. Pan-India.',
    url: `${BASE_URL}/services`,
  },
  twitter: {
    ...defaultTwitter,
    title: 'CA & CS Services | CA Support India',
    description: 'Company registration, GST, ITR, trademark, MSME & more. Transparent pricing.',
  },
};

const allServices = [
  { icon: Building2, title: 'Company Registration', price: '₹7,999', time: '7–12 days', desc: 'Register a Private Limited Company, LLP, OPC, or Partnership. Complete MCA documentation, DSC, DIN, and ROC filing included.' },
  { icon: Receipt, title: 'GST Registration', price: '₹1,499', time: '3–5 days', desc: 'Online GST registration with ARN generation, digital signature, and complete compliance guidance for any business type.' },
  { icon: FileText, title: 'Income Tax Return', price: '₹999', time: '1–2 days', desc: 'ITR filing for salaried employees, self-employed, NRIs, HUFs, and companies. Tax computation and e-filing included.' },
  { icon: Tag, title: 'Trademark Registration', price: '₹6,999', time: '15–20 days', desc: 'Brand protection via trademark application under all 45 classes — includes trademark search, filing, and objection handling.' },
  { icon: Package, title: 'MSME / Udyam', price: '₹999', time: '1–2 days', desc: 'Udyam registration for micro, small, and medium enterprises to access subsidies, bank loans, and priority lending.' },
  // { icon: Globe, title: 'Import Export Code', price: '₹2,499', time: '3–5 days', desc: 'IEC registration from DGFT for businesses importing or exporting goods and services from India. Lifetime validity.' },
  { icon: Scale, title: 'ROC Compliance', price: '₹4,999', time: '5–7 days', desc: 'Annual ROC return filing, financial statements, and MCA compliance for Private Limited Companies and LLPs.' },
  { icon: BarChart3, title: 'Accounting Services', price: '₹2,999/mo', time: 'Ongoing', desc: 'Monthly bookkeeping, P&L statement, balance sheet, and MIS reporting — keep your finances organised year-round.' },
  { icon: Shield, title: 'FSSAI Food License', price: '₹3,499', time: '15–30 days', desc: 'State or Central FSSAI registration and license for food manufacturers, traders, and food business operators.' },
  { icon: CreditCard, title: 'TDS Return Filing', price: '₹1,999', time: '2–3 days', desc: 'Quarterly TDS return (Form 24Q/26Q), Form 16/16A generation, and correction statement filing.' },
  { icon: Users, title: 'Payroll Services', price: '₹1,999/mo', time: 'Ongoing', desc: 'End-to-end payroll processing, PF/ESI registration & compliance, payslip generation, and full & final settlement.' },
  { icon: Clock, title: 'GST Return Filing', price: '₹999/mo', time: 'Monthly', desc: 'Monthly GSTR-1, GSTR-3B, and annual GSTR-9 filing with reconciliation and input tax credit optimisation.' },
];

export default function ServicesPage() {
  return (
    <>
      <ServicesSchema />
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Services', href: '/services' }]} />

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Header */}
        <header className="bg-[var(--navy)] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-6">
              <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-gray-200">Services</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              CA & CS Services Online India
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive Chartered Accountant and Company Secretary services delivered 100% online across India. Transparent pricing, certified experts, fast turnaround.
            </p>
          </div>
        </header>

        {/* Services grid */}
        <main className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((s) => {
              const Icon = s.icon;
              return (
                <article key={s.title} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--navy)] flex items-center justify-center" aria-hidden="true">
                      <Icon size={22} className="text-[var(--gold)]" />
                    </div>
                    {/* <span className="text-[var(--gold)] font-bold font-display text-lg">{s.price}</span> */}
                  </div>
                  <h2 className="font-display font-semibold text-[var(--navy)] text-lg mb-2">{s.title}</h2>
                  <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{s.desc}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock size={12} aria-hidden="true" /> <span>Turnaround: {s.time}</span>
                    </span>
                    <Link href={`/services/${s.title.toLowerCase().replace(/\s+/g, '-')}`} className="text-sm font-medium text-[var(--gold)] hover:underline">
                      Get Started →
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 bg-[var(--navy)] rounded-2xl p-10 text-center text-white">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Not sure which service you need?
            </h2>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Talk to our CA experts for free — describe your requirement and we'll recommend the right service and pricing in minutes.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[var(--gold)] text-[var(--navy)] rounded-xl font-semibold hover:bg-[var(--gold-light)] transition-colors">
              Book Free Consultation →
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
