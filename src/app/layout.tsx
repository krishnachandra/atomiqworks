import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'
import { FloatingChatbot } from '@/components/ui/FloatingChatbot'
import { ScrollToTop } from '@/components/ui/ScrollToTop'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AtomIQWorks | Premium Digital Product Agency",
    template: "%s | AtomIQWorks"
  },
  description: "Engineering the Future of Digital. AtomIQWorks builds scalable, high-performance digital experiences, web apps, and AI solutions for ambitious brands.",
  keywords: ["Digital Agency", "Web Development", "AI Solutions", "App Development", "UX/UI Design", "High Performance Web", "React", "Next.js", "India"],
  authors: [{ name: "AtomIQWorks Team" }],
  creator: "AtomIQWorks",
  publisher: "AtomIQWorks",
  metadataBase: new URL('https://atomiqworks.com'), // Replace with actual domain when live
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://atomiqworks.com",
    siteName: "AtomIQWorks",
    title: "AtomIQWorks | Engineering the Future of Digital",
    description: "We build scalable, high-performance digital experiences for ambitious brands. Specialized in Next.js, AI integration, and premium UI/UX.",
    images: [{
      url: "/atomiq-logo.png", // We generated this earlier
      width: 512,
      height: 512,
      alt: "AtomIQWorks Logo",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AtomIQWorks | Premium Digital Product Agency",
    description: "Engineering the Future of Digital. We build scalable, high-performance digital experiences.",
    images: ["/atomiq-logo.png"],
    creator: "@atomiqworks",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // AEO/GEO: JSON-LD Structured Data for AI parsers
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "AtomIQWorks",
    "image": "https://atomiqworks.com/atomiq-logo.png",
    "description": "AtomIQWorks is a premium digital product agency engineering scalable, high-performance experiences.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "20.5937", // Center of India approx
      "longitude": "78.9629"
    },
    "url": "https://atomiqworks.com",
    "telephone": "+918074535932",
    "email": "atomiqworks@gmail.com",
    "priceRange": "$$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://twitter.com/atomiqworks",
      "https://linkedin.com/company/atomiqworks",
      "https://github.com/atomiqworks",
      "https://instagram.com/atomiqworks"
    ]
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <ScrollToTop />
        <FloatingChatbot />
        <GoogleAnalytics gaId="G-JDWPDHLR9D" />
      </body>
    </html>
  );
}
