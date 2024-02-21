import './globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { readConfig } from '@/libs/readConfig';

const inter = Inter({ subsets: ['latin'] });
const config = readConfig();

export const metadata = {
  title: config.siteName,
  description: config.siteDescription,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-gray-900 text-white">
        <div className="max-w-[900px] mx-auto py-5 min-h-screen px-5">
          <Header />
          {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
