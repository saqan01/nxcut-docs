import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/components/provider';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'nxcut Docs',
    template: '%s | nxcut',
  },
  description:
    'Official documentation for nxcut — the all-in-one salon and barbershop management platform for appointments, sales, commissions, and more.',
  keywords: [
    'nxcut',
    'salon software',
    'barbershop management',
    'appointment booking',
    'salon POS',
    'commission tracking',
    'staff scheduling',
  ],
  metadataBase: new URL('https://docs.nxcut.com'),
  openGraph: {
    type: 'website',
    siteName: 'nxcut Docs',
    title: 'nxcut Documentation',
    description:
      'Official documentation for nxcut — the all-in-one salon and barbershop management platform.',
    url: 'https://docs.nxcut.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'nxcut Documentation',
    description:
      'Official documentation for nxcut — the all-in-one salon and barbershop management platform.',
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    shortcut: '/favicon.ico',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
