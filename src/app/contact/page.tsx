import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send } from 'lucide-react';
import { BreadcrumbSchema } from '@/lib/jsonld';
import { BASE_URL, defaultOpenGraph, defaultTwitter, CONTACT } from '@/lib/seo';
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: 'Contact CA Support India – Book Free CA Consultation | +91 91233 29927',
  description:
    'Contact CA Support India for a free 30-minute CA consultation. Call +91 91233 29927 or email info@caonweb.in. Office in Connaught Place, New Delhi. Responds within 2 hours. Pan-India service.',
  keywords: [
    'contact CA Support India', 'CA consultation online', 'book CA appointment',
    'free CA consultation India', 'CA helpline India', 'chartered accountant contact',
  ],
  alternates: { canonical: `${BASE_URL}/contact` },
  openGraph: {
    ...defaultOpenGraph,
    title: 'Contact CA Support India – Book Free CA Consultation',
    description: 'Book a free CA consultation. Call +91 91233 29927 · Responds within 2 hours · Pan-India service.',
    url: `${BASE_URL}/contact`,
  },
  twitter: {
    ...defaultTwitter,
    title: 'Contact CA Support India | Free Consultation',
    description: 'Book a free CA consultation. Responds within 2 hours.',
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Home', href: '/' }, { name: 'Contact', href: '/contact' }]} />

      <div className="min-h-screen bg-[var(--cream)]">
        {/* Header */}
        <header className="bg-[var(--navy)] py-16">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <nav aria-label="Breadcrumb" className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-6">
              <a href="/" className="hover:text-[var(--gold)] transition-colors">Home</a>
              <span aria-hidden="true">/</span>
              <span className="text-gray-200">Contact</span>
            </nav>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Contact CA Support India
            </h1>
            <p className="text-gray-300 max-w-xl mx-auto">
              Book a free 30-minute consultation or reach out with any questions. Our expert CA team responds within 2 business hours.
            </p>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-3 gap-10">
          {/* Contact form */}
          <section className="lg:col-span-2" aria-labelledby="form-heading">
            <ContactForm />
          </section>
          {/* Contact info */}
          <aside aria-label="Contact information">
            <h2 className="font-display text-2xl font-bold text-[var(--navy)] mb-6 gold-line">Get In Touch</h2>
            <address className="not-italic space-y-4">
              {[
                { icon: Phone, label: 'Phone', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
                { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: MapPin, label: 'Office', value: CONTACT.address, href: `https://maps.google.com/?q=${encodeURIComponent(CONTACT.address)}` },
                { icon: Clock, label: 'Hours', value: 'Monday–Saturday: 9 AM – 7 PM', href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--navy)] flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)] transition-colors" aria-hidden="true">
                    <Icon size={18} className="text-[var(--gold)] group-hover:text-[var(--navy)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--muted)] uppercase tracking-wide font-medium">{label}</div>
                    <div className="text-[var(--navy)] text-sm font-medium mt-0.5">{value}</div>
                  </div>
                </a>
              ))}
            </address>

            <div className="p-6 bg-[var(--navy)] rounded-2xl text-white mt-6">
              <div className="flex items-center gap-2 mb-3">
                <MessageSquare size={18} className="text-[var(--gold)]" aria-hidden="true" />
                <span className="font-semibold">WhatsApp Us</span>
              </div>
              <p className="text-gray-300 text-sm mb-4">Chat directly with our CA on WhatsApp for quick queries and instant replies.</p>
              <a href={`https://wa.me/${CONTACT.phone.replace(/\D/g, '')}`}
                target="_blank" rel="noopener noreferrer"
                className="block text-center py-2.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-colors">
                Open WhatsApp Chat
              </a>
            </div>
          </aside>

        </main>
      </div>
    </>
  );
}
