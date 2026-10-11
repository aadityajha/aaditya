import type { Metadata, Viewport } from "next";
import Script from "next/script";

import { siteConfig } from "@/lib/site";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import "./globals.css";

const siteUrl = siteConfig.url.replace(/\/+$/, "");

const portraitUrl = `${siteUrl}/aadityajha.jpeg`;
const ogImageUrl = `${siteUrl}/og-image.png`;

// Configure these in your deployment environment.
const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID;
const googleVerification =
  process.env.GOOGLE_SITE_VERIFICATION;

const siteTitle = "Aaditya Jha — MBBS Student in Nepal";

const siteDescription =
  "Aaditya Jha (आदित्य झा), also known as Aditya Jha, is an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal. Explore his academic journey, community health work, projects, and professional profile.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteTitle,
    template: "%s | Aaditya Jha",
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

  category: "education",

  alternates: {
    canonical: "/",
  },

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

  ...(googleVerification
    ? {
      verification: {
        google: googleVerification,
      },
    }
    : {}),

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_NP",
    url: siteUrl,
    siteName: "Aaditya Jha",
    title: siteTitle,
    description: siteDescription,

    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: "Aaditya Jha — MBBS Student in Nepal",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImageUrl],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#101d38",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Person",
        "@id": `${siteUrl}/#person`,

        name: "Aaditya Jha",

        alternateName: [
          "Aaditya Jha",
          "आदित्य झा",
        ],

        url: siteUrl,

        image: {
          "@type": "ImageObject",
          url: portraitUrl,
        },

        jobTitle: "MBBS Student",

        description: siteDescription,

        email: siteConfig.email,

        affiliation: {
          "@type": "CollegeOrUniversity",
          name: "Chitwan Medical College",
          url: "https://cmc.edu.np/",
        },

        address: {
          "@type": "PostalAddress",
          addressCountry: "NP",
        },

        sameAs: siteConfig.socials
          .map((item) => item.href.trim())
          .filter(Boolean),

        knowsAbout: [
          "Medicine",
          "Medical education",
          "Community health",
          "Public health",
        ],
      },

      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,

        url: siteUrl,

        name: "Aaditya Jha",

        alternateName: [
          "Aditya Jha",
          "आदित्य झा",
        ],

        description: siteDescription,

        inLanguage: "en-NP",

        publisher: {
          "@id": `${siteUrl}/#person`,
        },
      },

      {
        "@type": "ProfilePage",
        "@id": `${siteUrl}/#profilepage`,

        url: siteUrl,

        name: siteTitle,

        description: siteDescription,

        mainEntity: {
          "@id": `${siteUrl}/#person`,
        },

        isPartOf: {
          "@id": `${siteUrl}/#website`,
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(
              /</g,
              "\\u003c"
            ),
          }}
        />

        {/* Accessibility */}
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>

        <Header />

        <main id="main-content">{children}</main>

        <Footer />

        {/* Google AdSense */}
        {adsenseId && (
          <Script
            id="google-adsense"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`}
          />
        )}
      </body>
    </html>
  );
}