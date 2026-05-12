import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'USpaces - Real-Time Intelligent Spaces.',
  description: 'USpaces - Real-Time Intelligent Spaces.',
  viewport: 'width=device-width, initial-scale=1.0',
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