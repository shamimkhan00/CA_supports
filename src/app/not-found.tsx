import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | CA Support India',
  description: 'The page you are looking for does not exist. Return to CA Support India homepage for expert CA and CS services.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[var(--cream)] px-6">
      <div className="text-center max-w-lg">
        <div className="font-display text-8xl font-bold text-[var(--navy)] opacity-10 mb-4">404</div>
        <h1 className="font-display text-3xl font-bold text-[var(--navy)] mb-3">Page Not Found</h1>
        <p className="text-[var(--muted)] mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/"
            className="px-6 py-3 bg-[var(--navy)] text-white rounded-lg font-medium hover:bg-[var(--navy-light)] transition-colors">
            Go to Homepage
          </Link>
          <Link href="/services"
            className="px-6 py-3 border-2 border-[var(--navy)] text-[var(--navy)] rounded-lg font-medium hover:bg-[var(--navy)] hover:text-white transition-colors">
            Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
