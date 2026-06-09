import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Shiv Kumar',
    role: 'Business Owner, New Delhi',
    text: 'CA on Web has been incredibly helpful. Their team is professional, knowledgeable, and always available. Highly recommend for GST and company compliance.',
    initials: 'SK',
    rating: 5,
  },
  {
    name: 'Meezan Khan',
    role: 'CEO, Khan Exports Ltd.',
    text: 'The whole team is efficient and professional. They handle everything from company registration to income tax with great accuracy and speed.',
    initials: 'MK',
    rating: 5,
  },
  {
    name: 'Tajinder Singh',
    role: 'Founder, Visonia Techlabs',
    text: 'Our company Visonia Techlabs India Pvt. Ltd. was incorporated on time with 100% accuracy. Thank you CA on Web for the seamless experience!',
    initials: 'TS',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Freelancer, Bangalore',
    text: "Filing my ITR as an NRI was a nightmare before I found CA on Web. Now it's done in hours, with expert guidance at every step.",
    initials: 'PN',
    rating: 5,
  },
  {
    name: 'Ankit Mehta',
    role: 'Director, Retail Ventures',
    text: 'Got our FSSAI and MSME registration done smoothly. The pricing is transparent, no hidden charges. Will use again for trademark.',
    initials: 'AM',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    role: 'HR Manager, Startup',
    text: 'Excellent service for TDS return filing. Our CA was responsive, thorough, and made the entire compliance process stress-free.',
    initials: 'SR',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
            <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Client Stories</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            Trusted by Thousands Across India
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Real clients. Real results. See what they say about working with our expert CA team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-[var(--gold)] text-[var(--gold)]" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>

              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-[var(--navy)] flex items-center justify-center text-[var(--gold)] font-bold text-sm flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <div className="font-semibold text-[var(--navy)] text-sm">{t.name}</div>
                  <div className="text-[var(--muted)] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
