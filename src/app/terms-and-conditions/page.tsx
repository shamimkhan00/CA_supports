import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions | CA Support India',
  description: 'Terms and Conditions of CA Support India (casupportindia.in) — rules, responsibilities, and guidelines for using our financial and compliance services.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://casupportindia.in/terms-and-conditions' },
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <header className="bg-[var(--navy)] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-3">Terms & Conditions</h1>
          <p className="text-gray-400 text-sm">Last updated: June 2025</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10 text-gray-700 text-sm leading-relaxed">

          <section>
            <p>
              Welcome to CA Support India ("Company", "we", "us", or "our"). These Terms and Conditions govern your use of our website located at{' '}
              <a href="https://casupportindia.in" className="text-[var(--gold)] hover:underline">casupportindia.in</a>{' '}
              and any related professional consultancy services provided by us. By accessing our website or engaging our services, you agree to be bound by these terms. If you do not agree, please discontinue use immediately.
            </p>
          </section>

          <Section title="1. Professional Services & No Advertising">
            <p>
              CA Support India connects users with qualified Chartered Accountants (CAs), Company Secretaries (CSs), and financial consultants. In strict accordance with the code of ethics laid down by the Institute of Chartered Accountants of India (ICAI) and the Institute of Company Secretaries of India (ICSI):
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>This website is intended solely to provide information about compliance requirements and help users look for professional support.</li>
              <li>Nothing on this website should be construed as advertisement, solicitation, or inducement of any kind.</li>
              <li>The information provided on our blog, FAQs, or pages is for educational purposes only and does not constitute formal professional advice.</li>
            </ul>
          </Section>

          <Section title="2. Client Responsibilities & Accurate Information">
            <p>
              For us to accurately execute tax filings, company registrations, or licensing compliance, you agree to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Provide completely true, accurate, and updated financial data, identity proofs, and transaction records.</li>
              <li>Ensure all submitted documents are legitimate. CA Support India will not be held liable for any legal, penal, or financial consequences arising from falsified, inaccurate, or delayed documentation.</li>
              <li>Adhere to the timelines communicated by our team to avoid government-mandated late fees or penalties.</li>
            </ul>
          </Section>

          <Section title="3. Payment Terms, Government Fees, & Refunds">
            <ul className="list-disc pl-5 space-y-1.5">
              <li><strong>Professional Fees:</strong> Payments for our advisory or processing services must be paid in full or as per agreed milestone advances before we initiate government portal filings.</li>
              <li><strong>Government Fees & Taxes:</strong> Quoted fees may exclude statutory government portal fees, stamp duties, or GST unless explicitly listed as "all-inclusive". Any unexpected variance in government portal fees must be cleared by the client.</li>
              <li><strong>Refund Policy:</strong> Fees paid for professional consultations are generally non-refundable once work or document assessment has officially commenced. If a registration or filing fails due to a direct operational error on our end, a partial or full refund of the professional fee component may be processed at management’s sole discretion.</li>
            </ul>
          </Section>

          <Section title="4. Intellectual Property Rights">
            <p>
              Unless otherwise stated, all original layout elements, codebase, text content, logos, calculators, and graphics displayed on this website are the intellectual property of CA Support India. You are permitted to browse and download materials strictly for personal, non-commercial assessment. Unauthorized duplication, modification, or distribution is strictly prohibited.
            </p>
          </Section>

          <Section title="5. Limitation of Liability">
            <p>
              While we make every commercially reasonable effort to ensure error-free service deployment, CA Support India, its directors, partners, or assigned professionals shall not be held liable for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>Any indirect, incidental, or consequential financial losses resulting from government portal downtimes (such as MCA, Income Tax, or GST portal glitches).</li>
              <li>Penalties or legal action triggered by missing statutory deadlines due to a client’s failure to provide documents on time.</li>
              <li>Calculations based on incorrect figures supplied directly by you.</li>
            </ul>
          </Section>

          <Section title="6. Termination of Service">
            <p>
              We reserve the absolute right to suspend, terminate, or refuse service to any client if:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-2">
              <li>We suspect fraudulent, deceptive, or illegal financial activities.</li>
              <li>There is a continuous failure to pay invoices or supply requisite documentation.</li>
              <li>A conflict of interest arises under professional accounting and corporate regulatory statutes.</li>
            </ul>
          </Section>

          <Section title="7. Governing Law & Jurisdiction">
            <p>
              These Terms and Conditions shall be governed by and interpreted strictly in accordance with the laws of the Republic of India. Any disputes, claims, or legal proceedings arising directly out of your use of this platform or our consultancy shall be subject to the exclusive jurisdiction of the courts located in <strong>New Delhi, India</strong>.
            </p>
          </Section>

          <Section title="8. Modifications to Terms">
            <p>
              We reserve the right to amend or replace these Terms and Conditions at any time. It is your responsibility to review this page periodically for updates. Your continued interaction with our web services following any changes signifies your explicit acceptance of the updated terms.
            </p>
          </Section>

          <div className="pt-6 border-t border-gray-100 text-center">
            <Link href="/" className="text-[var(--gold)] hover:underline text-sm">← Back to Home</Link>
            <span className="text-gray-300 mx-3">|</span>
            <Link href="/privacy-policy" className="text-[var(--gold)] hover:underline text-sm">Privacy Policy</Link>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-display text-lg font-bold text-[var(--navy)] mb-3 pb-2 border-b border-gray-100">{title}</h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}