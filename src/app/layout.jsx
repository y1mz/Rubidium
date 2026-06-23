import "./globals.css";
import { Inter } from "next/font/google";
import { readConfig, readFooterLinks } from "@/libs/readConfig";

import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });
const config = readConfig();

export async function generateMetadata() {
  return {
  title: config.siteName,
  description: config.siteDescription,
  metadataBase: new URL("https://" + config.siteURL),
  openGraph: {
    title: config.siteName,
    description: config.siteDescription,
    url: config.siteURL,
    modifiedTime: new Date().toISOString(),
    images: config.siteImage && config.siteImage
    },
  other: config.vertificationTags
}

export default function RootLayout({ children }) {
  const links = readFooterLinks();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <div className="justify-center mx-auto">{children}</div>
        <Footer links={links} />
      </body>
    </html>
  );
}
