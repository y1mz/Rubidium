import './globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { generateRSSFeed } from '@/libs/generateRSS';
import { readConfig } from '@/libs/readConfig';

const inter = Inter({ subsets: ['latin'] });
const config = readConfig();

export const metadata = {
  title: config.siteName,
  description: config.siteDescription,
}

export default function RootLayout({ children }) {
  const generateRSS = generateRSSFeed();
  return (
    <html lang="en">
      <body className="{inter.className} bg-gray-900 text-white">
        <div className="sm:px-20 md:px-40 lg:px-60 py-5 min-h-screen px-5">
          <Header />
          {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
