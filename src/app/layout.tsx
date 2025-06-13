import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "James Faye - Product Manager",
  description: "Leading SaaS & AI products by day. Fuelled by coffee.",
  keywords: ["Product Manager", "SaaS", "AI", "Builder", "Community", "Manchester"],
  authors: [{ name: "James Faye" }],
  creator: "James Faye",
  metadataBase: new URL('https://jamesfaye.com'),
  openGraph: {
    title: "James Faye - Product Manager",
    description: "Leading SaaS & AI products by day. Fuelled by coffee.",
    url: "https://jamesfaye.com",
    siteName: "James Faye",
    images: [
      {
        url: "/james-faye.jpg",
        width: 1200,
        height: 630,
        alt: "James Faye - Product Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "James Faye - Product Manager",
    description: "Leading SaaS & AI products by day. Fuelled by coffee.",
    images: ["/james-faye.jpg"],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' }
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
