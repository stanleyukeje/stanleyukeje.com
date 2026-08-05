import type { Metadata, Viewport } from 'next';
import { Inter, Geist } from 'next/font/google';
import { defaultSEO } from '@/config/seo';
import { PageWrapper } from '@/components/layout/page-wrapper';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
  display: 'swap',
});

export const metadata: Metadata = defaultSEO;

export const viewport: Viewport = {
  themeColor: '#05070B',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${geist.variable} dark`}>
      <body className="bg-[#05070B] text-white antialiased">
        <PageWrapper>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}
