import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { OrganizationSchema } from '@/lib/jsonld';
import { BASE_URL, SITE_NAME, defaultOpenGraph, defaultTwitter } from '@/lib/seo';

export const viewport: Viewport = {
  themeColor: '#0B1F3A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${SITE_NAME} | Fast & Reliable CA Services for Growing Businesses`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Fast & Reliable CA Services for Growing Businesses. Expert Chartered Accountant & Company Secretary services — company registration, GST, income tax return, MSME, and compliance. Pan-India, fast & affordable.",
  keywords: [
    'CA online India',
    'chartered accountant online',
    'company registration India',
    'GST registration online',
    'income tax return filing',
    'trademark registration India',
    'MSME registration',
    'import export code',
    'CA consultant online',
    'online CA services',
    'GST filing',
    'ITR filing',
    'ROC compliance',
    'startup registration India',
    'private limited company registration',
    'LLP registration',
    'TDS return filing',
    'FSSAI license',
    'CA Support India',
    'caonweb',
  ],
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: 'Finance & Legal',
  classification: 'Chartered Accountant Services',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    ...defaultOpenGraph,
    title: `${SITE_NAME} | Expert CA & CS Services Online India`,
    description:
      "Fast & Reliable CA Services for Growing Businesses. Company registration, GST, ITR, trademark and compliance — expert CA & CS team, transparent pricing, pan-India.",
    url: BASE_URL,
  },
  twitter: {
    ...defaultTwitter,
    title: `${SITE_NAME} | Expert CA & CS Services Online`,
    description:
      'Expert CA & CS services online — company registration, GST, ITR, trademark & compliance. 10,000+ clients. Pan-India.',
  },
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-IN': BASE_URL,
    },
  },
  verification: {
    google: 'REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_ID',
    // bing: 'REPLACE_WITH_BING_VERIFICATION_ID',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <OrganizationSchema />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
