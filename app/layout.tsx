import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/styles/theme.css';
import { defaultSEO } from '@/config/seo';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { PageWrapper } from '@/components/layout/page-wrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = defaultSEO;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} style={{ colorScheme: 'dark' }}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <meta property="og:image" content="https://stanleyukeje.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/png" />
        <meta name="twitter:image" content="https://stanleyukeje.com/og-image.png" />
      </head>
      <body className="min-h-screen bg-[#05070B] font-sans text-white antialiased selection:bg-[#2563EB]/30 selection:text-white">
        <PageWrapper>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
