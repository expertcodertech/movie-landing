import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: "MovieHub | Latest Movie Reviews, Ratings & Entertainment News",
  description:
    "Discover the latest Bollywood, Hollywood & South Indian movie reviews, ratings, trailers, and entertainment news. Your ultimate destination for film enthusiasts.",
  keywords: [
    "movie reviews",
    "bollywood movies",
    "hollywood movies",
    "south indian movies",
    "movie ratings",
    "film reviews",
    "entertainment news",
    "movie trailers",
  ],
  authors: [{ name: "MovieHub" }],
  creator: "MovieHub",
  publisher: "MovieHub",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourdomain.com",
    siteName: "MovieHub",
    title: "MovieHub | Latest Movie Reviews, Ratings & Entertainment News",
    description:
      "Discover the latest Bollywood, Hollywood & South Indian movie reviews, ratings, trailers, and entertainment news.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MovieHub - Your Movie Destination",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MovieHub | Latest Movie Reviews & Entertainment",
    description:
      "Discover the latest movie reviews, ratings, trailers, and entertainment news.",
    images: ["/og-image.png"],
  },
};

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "MovieHub",
  description: "Discover the latest Bollywood, Hollywood & South Indian movie reviews, ratings, trailers, and entertainment news.",
  url: "https://yourdomain.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://yourdomain.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://yourdomain.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
