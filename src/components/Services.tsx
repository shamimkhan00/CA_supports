import Link from 'next/link';
import { Building2, FileText, Receipt, Tag, Package, Globe, ArrowRight, Scale, BarChart3, Shield } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Company Registration',
    desc: 'Register your Private Limited, LLP, or OPC company in 7–12 days with complete documentation support.',
    color: '#0B1F3A',
    tag: 'Most Popular',
  },
  {
    icon: Receipt,
    title: 'GST Services',
    desc: 'GST registration, return filing, reconciliation, and compliance management for businesses of all sizes.',
    color: '#1a3a5c',
    tag: null,
  },
  {
    icon: FileText,
    title: 'Income Tax Return',
    desc: 'Expert ITR filing for individuals, NRIs, firms, LLPs, and companies. Maximize refunds, minimize tax.',
    color: '#0B1F3A',
    tag: null,
  },
  {
    icon: Tag,
    title: 'Trademark Registration',
    desc: 'Protect your brand identity with trademark registration under the Trade Marks Act. Classes 1–45.',
    color: '#1a3a5c',
    tag: null,
  },
  {
    icon: Package,
    title: 'MSME / Udyam',
    desc: 'Get MSME/Udyam registration to access government subsidies, bank loans, and tender preferences.',
    color: '#0B1F3A',
    tag: null,
  },
  // {
  //   icon: Globe,
  //   title: 'Import Export Code',
  //   desc: 'Obtain IEC code from DGFT to start importing or exporting goods and services from India.',
  //   color: '#1a3a5c',
  //   tag: null,
  // },
  // {
  //   icon: Scale,
  //   title: 'Legal Compliance',
  //   desc: 'ROC annual filings, statutory compliance, and corporate governance for companies and LLPs.',
  //   color: '#0B1F3A',
  //   tag: null,
  // },
  // {
  //   icon: BarChart3,
  //   title: 'Accounting & Audit',
  //   desc: 'Bookkeeping, financial statement preparation, internal audit, and statutory audit services.',
  //   color: '#1a3a5c',
  //   tag: null,
  // },
  {
    icon: Scale,
    title: 'ROC Compliance',
    desc: 'Annual ROC return filing, financial statements, and MCA compliance for Private Limited Companies and LLPs.',
    color: '#1a3a5c',
    tag: null,
  },
  {
    icon: BarChart3,
    title: 'Accounting Services',
    desc: 'Monthly bookkeeping, P&L statements, balance sheets, and MIS reporting to keep your finances organized.',
    color: '#0B1F3A',
    tag: null,
  },
  {
    icon: Shield,
    title: 'FSSAI Food License',
    desc: 'State or Central FSSAI registration and licensing for food manufacturers, traders, and operators.',
    color: '#1a3a5c',
    tag: null,
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
            <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">What We Offer</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4 gold-line mx-auto w-fit">
            Comprehensive CA Services
          </h2>
          <p className="text-[var(--muted)] max-w-2xl mx-auto">
            From startup incorporation to tax compliance, our expert team covers every financial and legal need for individuals and businesses across India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.title}
                className="group relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300  overflow-hidden">
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--gold)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-t-2xl" />

                {s.tag && (
                  <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider bg-[var(--gold)] text-[var(--navy)] px-2 py-1 rounded-full">
                    {s.tag}
                  </span>
                )}

                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                  style={{ background: s.color }}>
                  <Icon size={22} className="text-[var(--gold)]" />
                </div>

                <h3 className="font-display font-semibold text-[var(--navy)] text-base mb-2 leading-snug">{s.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">{s.desc}</p>

                <Link href="/contact"
                  className="flex items-center gap-1 text-sm font-medium text-[var(--gold)] group-hover:gap-2 transition-all">
                  Get Quote <ArrowRight size={14} />
                </Link>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-[var(--navy)] text-[var(--navy)] font-medium hover:bg-[var(--navy)] hover:text-white transition-all">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
