import { CONTACT, BASE_URL, SITE_NAME } from './seo';

/** Organisation + LocalBusiness schema for every page */
export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'LocalBusiness', 'AccountingService'],
        '@id': `${BASE_URL}/#organization`,
        name: SITE_NAME,
        url: BASE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${BASE_URL}/logo.png`,
          width: 200,
          height: 60,
        },
        image: `${BASE_URL}/og-image.jpg`,
        description:
          "India's trusted online platform for Chartered Accountant and Company Secretary services including company registration, GST, income tax, trademark, and compliance.",
        telephone: CONTACT.phone,
        email: CONTACT.email,
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1 Moti Sil Street',
          addressLocality: CONTACT.city,
          addressRegion: CONTACT.state,
          postalCode: CONTACT.postalCode,
          addressCountry: CONTACT.country,
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 22.5726,
          longitude: 88.3639,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '19:00',
          },
        ],
        sameAs: [
          'https://www.linkedin.com/company/casupportindia',
          'https://twitter.com/casupportindia',
          'https://www.facebook.com/casupportindia',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '10000',
          bestRating: '5',
          worstRating: '1',
        },
        priceRange: '₹₹',
        currenciesAccepted: 'INR',
        paymentAccepted: 'Cash, Credit Card, UPI, Net Banking',
        areaServed: {
          '@type': 'Country',
          name: 'India',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
        url: BASE_URL,
        name: SITE_NAME,
        description: 'Expert CA & CS Services Online – Company Registration, GST, Income Tax, Trademark',
        publisher: { '@id': `${BASE_URL}/#organization` },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: `${BASE_URL}/services?q={search_term_string}`,
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** FAQ schema for homepage */
export function HomeFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I register a Private Limited Company in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can register a Private Limited Company online through CA Support India in 7–12 working days. The process includes obtaining DSC, DIN, name approval from MCA, and filing SPICe+ form. Our experts handle all documentation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the cost of GST registration in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GST registration through CA Support India starts at ₹1,499 inclusive of professional fees. Government fee for GST registration is nil. The process takes 3–5 working days.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I file my income tax return online through CA Support India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. CA Support India offers ITR filing services for salaried individuals, business owners, NRIs, and HUFs. Our CAs compute your tax liability, claim all applicable deductions, and file your return starting at ₹999.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does trademark registration take in India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The trademark application filing takes 15–20 days. After filing, the trademark registration certificate is issued in 18–24 months after examination and publication. CA Support India manages the entire process and any objections.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is CA Support India available pan-India?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. CA Support India serves clients across all 28 states and 8 union territories of India. All services are delivered 100% online — no physical visit required.',
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Service schema for the services page */
export function ServicesSchema() {
  const services = [
    { name: 'Company Registration', price: '7999', description: 'Register a Private Limited Company, LLP, OPC, or Partnership in India with complete MCA filing and documentation.' },
    { name: 'GST Registration', price: '1499', description: 'Online GST registration with ARN generation, DSC, and end-to-end compliance support.' },
    { name: 'Income Tax Return Filing', price: '999', description: 'Expert ITR filing for individuals, NRIs, firms, and companies with maximum refund guarantee.' },
    { name: 'Trademark Registration', price: '6999', description: 'Protect your brand with trademark registration under all 45 classes with full search and objection handling.' },
    { name: 'MSME / Udyam Registration', price: '999', description: 'Instant MSME/Udyam registration to access government subsidies and bank loan benefits.' },
    { name: 'Import Export Code', price: '2499', description: 'IEC registration from DGFT for importers and exporters with lifetime validity.' },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'CA Support India Services',
    description: 'Professional CA and CS services available online across India',
    numberOfItems: services.length,
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Service',
        name: s.name,
        description: s.description,
        provider: { '@id': `${BASE_URL}/#organization` },
        areaServed: { '@type': 'Country', name: 'India' },
        offers: {
          '@type': 'Offer',
          price: s.price,
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${BASE_URL}/services`,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Breadcrumb schema */
export function BreadcrumbSchema({ items }: { items: { name: string; href: string }[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.href}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

/** Review/testimonial schema */
export function ReviewsSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Rajesh Kumar' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'CA Support India helped us incorporate our company in just 8 days. Professional, transparent, and truly expert service.',
        datePublished: '2024-03-15',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Priya Nair' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Filing my ITR as an NRI was a nightmare before I found CA Support India. Now it is done in hours, with expert guidance at every step.',
        datePublished: '2024-04-02',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Tajinder Singh' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody: 'Our company was incorporated on time with 100% accuracy. Thank you CA Support India for the seamless experience!',
        datePublished: '2024-05-10',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
