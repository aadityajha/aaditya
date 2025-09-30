import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: "Aaditya Jha",
  description:
    "Aaditya Jha — MBBS student passionate about medicine, innovation, and sharing knowledge.",
  authors: [{ name: "Aaditya Jha" }],
  openGraph: {
    title: "Aaditya Jha",
    description:
      "Explore the personal space of Aaditya Jha — MBBS student focused on medicine, innovation, and healthcare resources.",
    url: "https://aaditya-jha.com.np",
    siteName: "Aaditya Jha",
    images: [
      {
        url: "https://aaditya-jha.com.np/aaditya.jpg",
        width: 1200,
        height: 630,
        alt: "Aaditya Jha",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@TheAadityaJha",
    title: "Aaditya Jha",
    description:
      "Aaditya Jha — MBBS student passionate about medicine, innovation, and sharing knowledge.",
    image: "https://aaditya-jha.com.np/aaditya.jpg",
  },
  social: {
    linkedin: "https://linkedin.com/in/aadityajha",
    instagram: "https://instagram.com/aadicyte",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Client-side components inside layout */}
        <Navbar />
        <main style={{ paddingTop: "55px" }}>{children}</main>
        <Footer />

        {/* Google Analytics */}
        <Script
          id="ga-script"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-RF175Y5JT4"
          async
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