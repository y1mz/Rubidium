import './globals.css';
import { Inter } from 'next/font/google';

import Footer from '@/components/footer';

import { readConfig } from '@/libs/readConfig';

const inter = Inter({ subsets: ['latin'] });
const config = readConfig();

export const metadata = {
  title: config.siteName,
  description: config.siteDescription,
  metadataBase: new URL("https://" + config.siteURL),
  openGraph: {
    title: config.siteName,
    description: config.siteDescription,
    url: config.siteURL,
    modifiedTime: new Date().toISOString()
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="justify-center mx-auto min-h-screen">
          {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
