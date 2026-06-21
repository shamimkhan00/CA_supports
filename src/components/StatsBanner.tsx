const stats = [
  { value: '1000+', label: 'Happy Clients' },
  { value: '25+', label: 'Companies Registered' },
  { value: '98%', label: 'Positive Feedback' },
  { value: '10+', label: 'Certified CA & CS' },
];

export default function StatsBanner() {
  return (
    <section className="bg-[var(--navy)] py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-[var(--gold)] mb-2">{s.value}</div>
              <div className="text-gray-300 text-sm tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
