export const BASE_URL = 'https://www.caonweb.in';
export const SITE_NAME = 'CA Support India';
export const SITE_TAGLINE = 'Expert CA & CS Services Online India';

export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const CONTACT = {
  phone: '+91 98765 43210',
  email: 'info@caonweb.in',
  address: '123 Financial District, Connaught Place, New Delhi – 110001',
  city: 'New Delhi',
  state: 'Delhi',
  country: 'IN',
  postalCode: '110001',
};

/** Reusable Open Graph defaults */
export const defaultOpenGraph = {
  siteName: SITE_NAME,
  locale: 'en_IN',
  type: 'website' as const,
  images: [
    {
      url: DEFAULT_OG_IMAGE,
      width: 1200,
      height: 630,
      alt: `${SITE_NAME} – ${SITE_TAGLINE}`,
    },
  ],
};

/** Reusable Twitter card defaults */
export const defaultTwitter = {
  card: 'summary_large_image' as const,
  site: '@CAonWeb',
  creator: '@CAonWeb',
  images: [DEFAULT_OG_IMAGE],
};
