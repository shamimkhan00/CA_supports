export const BASE_URL = 'https://www.casupportindia.in';
export const SITE_NAME = 'CA Support India';
export const SITE_TAGLINE = 'Expert CA & CS Services Online India';

export const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const CONTACT = {
  phone: '+91 91233 29927',
  email: 'contact@casupportindia.in',
  address: '1 Moti Sil Street, Kolkata, West Bengal 700013, India',
  city: 'Kolkata',
  state: 'West Bengal',
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
  site: '@casupportindia',
  creator: '@casupportindia',
  images: [DEFAULT_OG_IMAGE],
};
