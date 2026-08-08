import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://uai.inc';
const title = 'Universe by UAI — Spatial AI for Sports Production';
const description = 'A Spatial AI revolutionizing sports production. Autonomous scorekeeping, real-time stats & analysis, automated social feeds, live broadcast, and voice commands — all in one intelligent system.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: '%s | Universe by UAI',
  },
  description,
  keywords: [
    'Universe by UAI',
    'spatial AI',
    'sports production',
    'autonomous scorekeeping',
    'live broadcast',
    'sports technology',
    'real-time stats',
    'intelligent spaces',
  ],
  applicationName: 'Universe by UAI',
  authors: [{ name: 'UAI' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: 'Universe by UAI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Universe by UAI',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
