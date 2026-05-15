import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Sannidhi Physiotherapy & Rehabilitation | Care That Comes Closer',
  description: 'Compassionate multidisciplinary physiotherapy and rehabilitation services designed to support recovery, restore independence, and improve quality of life — all from the comfort of your home in Bangalore.',
  keywords: 'Physiotherapy, Rehabilitation, Home Visit, Bangalore, Neuro Rehabilitation, Orthopedic Rehabilitation',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {children}
      </body>
    </html>
  );
}
