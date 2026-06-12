'use client';
import Link from 'next/link';
import { ArrowRight, Shield, Clock, Award, CheckCircle } from 'lucide-react';

const badges = [
  { icon: Shield, text: 'Trusted by 10,000+ clients' },
  { icon: Clock, text: 'Fast turnaround' },
  { icon: Award, text: 'Certified experts' },
];

const highlights = [
  'Company Registration in 7 days',
  'Expert CA & CS team',
  'Transparent pricing',
  'Pan-India service',
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--navy)] min-h-[90vh] flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--gold) 1px, transparent 0)', backgroundSize: '40px 40px' }} />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, var(--gold) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, var(--gold-light) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* Left content */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--gold)]/10 border border-[var(--gold)]/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse"></span>
            <span className="text-[var(--gold)] text-sm font-medium">Fast & Reliable CA Services for Growing Businesses</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Your Trusted<br />
            <span className="shimmer-text">Financial &</span><br />
            Legal Partner
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-xl">
            Expert Chartered Accountants and Company Secretaries at your fingertips. From company registration to GST, income tax, and compliance — we handle it all, affordably.
          </p>

          <ul className="space-y-2.5 mb-8">
            {highlights.map(h => (
              <li key={h} className="flex items-center gap-3 text-gray-300">
                <CheckCircle size={16} className="text-[var(--gold)] flex-shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-4 mb-12">
            <Link href="/services"
              className="flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[var(--gold)] text-[var(--navy)] font-semibold hover:bg-[var(--gold-light)] transition-colors">
              Explore Services <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              className="flex items-center gap-2 px-6 py-3.5 rounded-lg border border-white/20 text-white hover:bg-white/10 transition-colors">
              Book Free Call
            </Link>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-4">
            {badges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-gray-400">
                <Icon size={14} className="text-[var(--gold)]" /> {text}
              </div>
            ))}
          </div>
        </div>

        {/* Right: stats card */}
        <div className="relative">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <h3 className="font-display text-xl font-semibold text-white mb-6">Our Track Record</h3>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { value: '10,000+', label: 'Happy Clients' },
                { value: '5,000+', label: 'Companies Registered' },
                { value: '98%', label: 'Client Satisfaction' },
                { value: '15+', label: 'Years Experience' },
              ].map(stat => (
                <div key={stat.label} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="font-display text-3xl font-bold text-[var(--gold)]">{stat.value}</div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial snippet */}
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-300 text-sm italic leading-relaxed">
                "CA Support India helped us incorporate our company in just 8 days. Professional, transparent, and truly expert service."
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-9 h-9 rounded-full bg-[var(--gold)]/20 flex items-center justify-center text-[var(--gold)] font-bold text-sm">
                  RK
                </div>
                <div>
                  <div className="text-white text-sm font-medium">Rajesh Kumar</div>
                  <div className="text-gray-500 text-xs">Founder, TechStart Pvt. Ltd.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -top-4 -right-4 bg-[var(--gold)] text-[var(--navy)] rounded-xl p-3 shadow-xl">
            <div className="text-center">
              <div className="font-bold text-xl">ISO</div>
              <div className="text-xs font-medium">Certified</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
