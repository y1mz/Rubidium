import './globals.css';
import { Inter } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { readConfig } from '@/libs/readConfig';

const inter = Inter({ subsets: ['latin'] });
const config = readConfig();

const websiteURL = process.env.NODE_ENV === 'production'
    ? `${config.siteURL}`
    : 'http://localhost:3000/'

export const metadata = {
  title: config.siteName,
  description: config.siteDescription,
  openGraph: {
    title: config.siteName,
    description: config.siteDescription,
    url: websiteURL,
    modifiedTime: new Date().toISOString()
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="{inter.className} bg-gray-900 text-white">
        <div className="justify-center mx-auto min-h-screen">
          {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
