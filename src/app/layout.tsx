import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'MVA Claimz — Free Car Accident Claim Check',
  description:
    'Were you injured in a car accident? Check if you qualify for compensation in 2 minutes. Free, confidential claim review by experienced attorneys.',
  openGraph: {
    title: 'MVA Claimz — Free Car Accident Claim Check',
    description:
      'Were you injured in a car accident? Check if you qualify for compensation in 2 minutes. Free, confidential claim review by experienced attorneys.',
    url: 'https://mvaclaimz.com',
    siteName: 'MVA Claimz',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MVA Claimz — Free Car Accident Claim Check',
    description:
      'Were you injured in a car accident? Check if you qualify for compensation in 2 minutes. Free, confidential claim review by experienced attorneys.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} font-sans antialiased text-slate-800 bg-[#f8f9fa]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
