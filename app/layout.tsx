import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

// ---------------- Metadata ----------------
export const metadata: Metadata = {
  title: "Aaditya Jha | MBBS Student & Healthcare Enthusiast",
  description:
    "Official website of Aaditya Jha — MBBS student passionate about medicine, healthcare, and sharing medical knowledge in Nepal.",
  keywords: ["Aaditya Jha", "MBBS student", "medical blog", "healthcare", "Nepal"],
  authors: [{ name: "Aaditya Jha", url: "https://aaditya-jha.com.np" }],
  metadataBase: new URL("https://aaditya-jha.com.np"),
  alternates: { canonical: "https://aaditya-jha.com.np" },

  openGraph: {
    title: "Aaditya Jha | MBBS Student & Healthcare Enthusiast",
    description:
      "Explore the personal space of Aaditya Jha — MBBS student focused on medicine and healthcare knowledge sharing.",
    url: "https://aaditya-jha.com.np",
    siteName: "Aaditya Jha",
    images: [
      {
        url: "https://aaditya-jha.com.np/aaditya.jpg",
        width: 1200,
        height: 1200,
        alt: "Aaditya Jha",
      },
    ],
    locale: "en_US",
    type: "profile",
  },

  twitter: {
    card: "summary_large_image",
    site: "@TheAadityaJha",
    creator: "@TheAadityaJha",
    title: "Aaditya Jha | MBBS Student & Healthcare Enthusiast",
    description:
      "Aaditya Jha — MBBS student passionate about medicine, healthcare, and sharing knowledge.",
    images: ["https://aaditya-jha.com.np/aaditya.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ---------------- Schema.org ----------------
const schemaPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aaditya Jha",
  givenName: "Aaditya",
  familyName: "Jha",
  url: "https://aaditya-jha.com.np",
  image: "https://aaditya-jha.com.np/aaditya.jpg",
  jobTitle: "MBBS Student",
  alumniOf: { "@type": "CollegeOrUniversity", name: "Chitwan Medical College" },
  description:
    "Aaditya Jha is an MBBS student passionate about medicine, healthcare, and sharing knowledge.",
  sameAs: [
    "https://instagram.com/aadicyte",
    "https://twitter.com/TheAadityaJha",
    "https://linkedin.com/in/aadityajha",
  ],
};

const schemaWebsite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: "https://aaditya-jha.com.np",
  name: "Aaditya Jha",
  description:
    "Official website of Aaditya Jha — MBBS student passionate about medicine, healthcare, and knowledge sharing.",
  publisher: { "@type": "Person", name: "Aaditya Jha", url: "https://aaditya-jha.com.np" },
  sameAs: [
    "https://instagram.com/aadicyte",
    "https://twitter.com/TheAadityaJha",
    "https://linkedin.com/in/aadityajha",
  ],
  potentialAction: {
    "@type": "SearchAction",
    target: "https://aaditya-jha.com.np/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const schemaWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://aaditya-jha.com.np",
  name: "Aaditya Jha | MBBS Student & Healthcare Enthusiast",
  description:
    "Official personal website of Aaditya Jha, MBBS student passionate about medicine and healthcare knowledge sharing.",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: "https://aaditya-jha.com.np/aaditya.jpg",
    width: 1200,
    height: 1200,
  },
  author: { "@type": "Person", name: "Aaditya Jha", url: "https://aaditya-jha.com.np" },
};

const schemaBreadcrumbs = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://aaditya-jha.com.np" }],
};

// ---------------- Root Layout ----------------
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPerson) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebsite) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaWebPage) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumbs) }} />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header>
          <Navbar />
        </header>
        <main role="main">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>

        {/* Google Analytics */}
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RF175Y5JT4"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RF175Y5JT4', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </body>
    </html>
  );
}