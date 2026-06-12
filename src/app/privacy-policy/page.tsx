import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | CA Support India',
  description: 'Privacy Policy of CA Support India (casupportindia.in) — how we collect, use, and protect your personal information.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://casupportindia.in/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--cream)]">
      <header className="bg-[var(--navy)] py-14">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl font-bold text-white mb-3">Privacy Policy</h1>
          <p className="text-gray-400 text-sm">Last updated: June 2025</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-12 space-y-10 text-gray-700 text-sm leading-relaxed">

          <section>
            <p>
              CA Support India ("Company", "we", "us", or "our") operates the website{' '}
              <a href="https://casupportindia.in" className="text-[var(--gold)] hover:underline">casupportindia.in</a>{' '}
              and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
            </p>
          </section>

          <Section title="1. Information We Collect">
            <p>We may collect the following types of information:</p>
            <SubSection title="a) Personal Information You Provide">
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>Full name, mobile number, and email address (via contact forms or enquiry submissions)</li>
                <li>City, state, and nature of service required</li>
                <li>Documents shared voluntarily for service delivery (PAN, identification numbers, etc.)</li>
                <li>Payment information — processed securely through third-party payment gateways; we do not store card details</li>
              </ul>
            </SubSection>
            <SubSection title="b) Automatically Collected Information">
              <ul className="list-disc pl-5 space-y-1.5 mt-2">
                <li>IP address, browser type, operating system, and referring URLs</li>
                <li>Pages visited, time spent, and navigation patterns (via cookies and analytics tools)</li>
                <li>Device information and geographic location (city/country level)</li>
              </ul>
            </SubSection>
          </Section>

          <Section title="2. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Provide, operate, and improve our CA and CS services</li>
              <li>Respond to enquiries, bookings, and service requests</li>
              <li>Send service updates, appointment reminders, and compliance notifications</li>
              <li>Process payments and issue invoices</li>
              <li>Send promotional communications (you may opt out at any time)</li>
              <li>Comply with legal obligations under Indian law (Income Tax Act, Companies Act, FEMA, GST, etc.)</li>
              <li>Analyse website usage to improve user experience</li>
              <li>Detect and prevent fraud or unauthorised activity</li>
            </ul>
          </Section>

          <Section title="3. Sharing of Information">
            <p>We do not sell, trade, or rent your personal information to third parties. We may share information with:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li><strong>Assigned CA / CS professionals</strong> — to deliver the service you have engaged us for</li>
              <li><strong>Regulatory authorities</strong> — MCA, Income Tax Department, GST Council, DGFT, IP India, etc., as required for filings</li>
              <li><strong>Payment processors</strong> — for secure transaction processing</li>
              <li><strong>Technology service providers</strong> — hosting, email delivery, analytics (under strict confidentiality and data protection agreements)</li>
              <li><strong>Legal authorities</strong> — when required by court order, law enforcement, or applicable law</li>
            </ul>
          </Section>

          <Section title="4. Cookies and Tracking Technologies">
            <p>
              We use cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device. We use:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li><strong>Essential cookies</strong> — necessary for the website to function</li>
              <li><strong>Analytics cookies</strong> — to understand how visitors use the site (e.g. Google Analytics)</li>
              <li><strong>Marketing cookies</strong> — to deliver relevant advertisements</li>
            </ul>
            <p className="mt-3">You can disable cookies in your browser settings. However, some features of the website may not function correctly without them.</p>
          </Section>

          <Section title="5. Data Security">
            <p>
              We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. These include SSL/TLS encryption, access controls, and secure data storage practices.
            </p>
            <p className="mt-3">
              However, no method of internet transmission or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="6. Data Retention">
            <p>
              We retain personal information for as long as necessary to provide our services and comply with legal obligations. Client records related to tax filings, company registrations, and compliance work are retained for a minimum of 8 years as required under Indian law. You may request deletion of marketing data at any time.
            </p>
          </Section>

          <Section title="7. Your Rights (Including DPDP Act compliance)">
            <p>In accordance with applicable Indian legal standards, you have the right to:</p>
            <ul className="list-disc pl-5 space-y-1.5 mt-3">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data (subject to statutory legal retention requirements)</li>
              <li><strong>Withdraw your consent</strong> for data processing at any time. Please note that withdrawing consent may limit our ability to provide certain financial or compliance services to you.</li>
              <li>Withdraw consent for marketing communications at any time</li>
              <li>Lodge a complaint with the relevant regulatory or data protection authority</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, contact us at <a href="mailto:admin.ca.supports@gmail.com" className="text-[var(--gold)] hover:underline">admin.ca.supports@gmail.com</a>.</p>
          </Section>

          <Section title="8. Third-Party Websites">
            <p>
              Our website may contain links to third-party websites (e.g. MCA portal, GST portal, IP India). We are not responsible for the privacy practices or content of those sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </Section>

          <Section title="9. Children's Privacy">
            <p>
              Our services are not directed at individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe a minor has provided us with personal data, please contact us immediately and we will delete it.
            </p>
          </Section>

          <Section title="10. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. The updated version will be posted on this page with a revised "Last updated" date. We encourage you to review this policy periodically. Continued use of our services after any changes constitutes acceptance of the revised policy.
            </p>
          </Section>

          <Section title="11. Contact Us">
            <p>If you have any questions or concerns about this Privacy Policy, please contact:</p>
            <div className="mt-4 p-5 bg-[var(--cream)] rounded-xl border border-gray-100 space-y-1.5">
              <p><strong className="text-[var(--navy)]">CA Support India</strong></p>
              <p>Website: <a href="https://casupportindia.in" className="text-[var(--gold)] hover:underline">casupportindia.in</a></p>
              <p>Email: <a href="mailto:admin.ca.supports@gmail.com" className="text-[var(--gold)] hover:underline">admin.ca.supports@gmail.com</a></p>
              <p>Phone: +91 91233 29927</p>
              {/* <p>Address: 1 Moti Sil Street, Kolkata, West Bengal 700013, India</p> */}
            </div>
          </Section>

          {/* New Section: Grievance Officer Section for Indian Compliance */}
          <Section title="12. Grievance Officer">
            <p>
              In accordance with the Information Technology Act, 2000 and the Digital Personal Data Protection (DPDP) Act, 2023, the name and contact details of the Grievance Officer are provided below:
            </p>
            <div className="mt-4 p-5 bg-[var(--cream)] rounded-xl border border-gray-100 space-y-1.5">
              <p><strong className="text-[var(--navy)]">Attn: Grievance Redressal Officer</strong></p>
              <p>Designation: Compliance & Data Privacy Officer</p>
              <p>Email: <a href="mailto:grievance@casupportindia.in" className="text-[var(--gold)] hover:underline">grievance@casupportindia.in</a></p>
              {/* <p>Address: 1 Moti Sil Street, Kolkata, West Bengal 700013, India</p> */}
              <p className="text-xs text-gray-500 mt-2">We will acknowledge grievances within 36 hours and resolve them within the timelines mandated by applicable law.</p>
            </div>
          </Section>

          <div className="pt-6 border-t border-gray-100 text-center">
            <Link href="/" className="text-[var(--gold)] hover:underline text-sm">← Back to Home</Link>
            <span className="text-gray-300 mx-3">|</span>
            <Link href="/terms-and-conditions" className="text-[var(--gold)] hover:underline text-sm">Terms & Conditions</Link>
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

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <h3 className="font-semibold text-[var(--navy)] text-sm mb-1">{title}</h3>
      {children}
    </div>
  );
}