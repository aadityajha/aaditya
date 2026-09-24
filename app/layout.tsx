import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Cormorant_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://aaditya-jha.com.np";

const siteTitle = "Aaditya Jha — MBBS Student in Nepal";

const siteDescription =
  "Aaditya Jha (आदित्य झा) is an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal. Explore his academic background, projects, community health work and professional profile.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  /* ==============================
     BASIC IDENTITY
  ============================== */

  title: {
    default: siteTitle,
    template: "%s — Aaditya Jha",
  },

  description: siteDescription,

  applicationName: "Aaditya Jha",

  authors: [
    {
      name: "Aaditya Jha",
      url: siteUrl,
    },
  ],

  creator: "Aaditya Jha",
  publisher: "Aaditya Jha",

  category: "personal",

  /*
   * These support contextual relevance.
   * Google does NOT use the keywords meta tag
   * as a primary ranking factor, so the actual
   * page content and structured data matter more.
   */
  keywords: [
    "Aaditya Jha",
    "Aditya Jha",
    "आदित्य झा",

    "Aaditya Jha Nepal",
    "Aditya Jha Nepal",
    "आदित्य झा नेपाल",

    "Aaditya Jha MBBS",
    "Aditya Jha MBBS",
    "आदित्य झा MBBS",

    "Aaditya Jha medical student",
    "Aditya Jha medical student",
    "आदित्य झा मेडिकल विद्यार्थी",

    "Aaditya Jha Chitwan Medical College",
    "आदित्य झा चितवन मेडिकल कलेज",

    "Aaditya Jha Tribhuvan University",
    "आदित्य झा त्रिभुवन विश्वविद्यालय",

    "MBBS student Nepal",
    "medical student Nepal",
    "Chitwan Medical College",
    "Tribhuvan University",
  ],

  /* ==============================
     CANONICAL
  ============================== */

  alternates: {
    canonical: siteUrl,
  },

  /* ==============================
     ROBOTS
  ============================== */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  /* ==============================
     ICONS
  ============================== */

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  /* ==============================
     OPEN GRAPH
  ============================== */

  openGraph: {
    type: "website",

    locale: "en_NP",

    url: siteUrl,

    siteName: "Aaditya Jha",

    title: siteTitle,

    description: siteDescription,

    images: [
      {
        url: "/aadityajha.jpg",
        width: 1200,
        height: 1200,
        alt: "Aaditya Jha (आदित्य झा) — MBBS Student in Nepal",
      },
    ],
  },

  /* ==============================
     X / TWITTER
  ============================== */

  twitter: {
    card: "summary_large_image",

    title: siteTitle,

    description: siteDescription,

    images: ["/aadityajha.jpg"],
  },
};


/* ==============================
   PERSON STRUCTURED DATA
============================== */

const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  "@id": `${siteUrl}/#person`,

  /*
   * Primary name
   */
  name: "Aaditya Jha",

  /*
   * Alternative spellings / scripts
   *
   * This helps establish that these names
   * refer to the same Person entity.
   */
  alternateName: [
    "Aditya Jha",
    "आदित्य झा",
  ],

  url: siteUrl,

  image: `${siteUrl}/aadityajha.jpg`,

  jobTitle: "MBBS Student",

  description:
    "Aaditya Jha (आदित्य झा) is an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",

  nationality: {
    "@type": "Country",
    name: "Nepal",
  },

  affiliation: {
    "@type": "CollegeOrUniversity",

    name: "Chitwan Medical College",

    url: "https://cmc.edu.np/",
  },

  /*
   * Real profile / identity references only.
   *
   * Avoid search-result URLs here.
   */
  sameAs: [
    "https://www.linkedin.com/in/aadityajha/",
    "https://www.instagram.com/aadi.jha24/",
  ],
};


/* ==============================
   WEBSITE STRUCTURED DATA
============================== */

const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": `${siteUrl}/#website`,

  name: "Aaditya Jha",

  alternateName: [
    "Aaditya Jha — MBBS Student in Nepal",
    "आदित्य झा",
  ],

  url: siteUrl,

  description: siteDescription,

  publisher: {
    "@id": `${siteUrl}/#person`,
  },

  inLanguage: "en-NP",
};


/* ==============================
   ROOT LAYOUT
============================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ga =
    process.env.NEXT_PUBLIC_GA_ID ||
    "G-RF175Y5JT4";

  const adsense =
    process.env.NEXT_PUBLIC_ADSENSE_ID ||
    "ca-pub-6587894583055842";

  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${cormorant.variable}`}
    >
      <body>
        <Header />

        <main id="main">
          {children}
        </main>

        <Footer />

        {/* ==============================
                    PERSON SCHEMA
        ============================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {/* ==============================
                    WEBSITE SCHEMA
        ============================== */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* ==============================
                    GOOGLE ADSENSE
        ============================== */}

        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsense}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />

        {/* ==============================
                    GOOGLE ANALYTICS
        ============================== */}

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
          strategy="afterInteractive"
        />

        <Script
          id="ga-init"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', '${ga}');
          `}
        </Script>

        <Analytics />
      </body>
    </html>
  );
}