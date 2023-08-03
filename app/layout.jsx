import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/header'
import Footer from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "The Batuhan's Blog",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-gray-900 text-white">
        <div className="sm:px-20 py-5 min-h-screen px-5">
          <Header />
          {children}
        </div>
        <Footer />
        </body>
    </html>
  )
}
