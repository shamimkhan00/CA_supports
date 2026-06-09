const steps = [
  {
    num: '01',
    title: 'Choose a Service',
    desc: 'Browse our comprehensive list of CA, CS and financial services tailored to your needs.',
  },
  {
    num: '02',
    title: 'Book Appointment',
    desc: 'Schedule a free consultation online at your preferred date and time — no waiting in queues.',
  },
  {
    num: '03',
    title: 'Expert Assigned',
    desc: 'A certified CA or CS is matched to your case. They review your requirements and reach out promptly.',
  },
  {
    num: '04',
    title: 'Work Gets Done',
    desc: 'Your expert handles all documentation, filings and follow-ups. You get real-time status updates.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--gold-pale)] border border-[var(--gold)]/30 mb-4">
            <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Simple Process</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--navy)] mb-4">
            How It Works
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Getting professional CA services has never been easier. Four simple steps to get your work done.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-14 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-[var(--gold-pale)] via-[var(--gold)] to-[var(--gold-pale)]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center group">
                {/* Number circle */}
                <div className="w-20 h-20 rounded-full bg-[var(--gold-pale)] border-2 border-[var(--gold)] flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--navy)] transition-colors duration-300">
                  <span className="font-display font-bold text-2xl text-[var(--gold)] group-hover:text-[var(--gold)]">{step.num}</span>
                </div>

                <h3 className="font-display font-semibold text-[var(--navy)] text-lg mb-2">{step.title}</h3>
                <p className="text-[var(--muted)] text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
