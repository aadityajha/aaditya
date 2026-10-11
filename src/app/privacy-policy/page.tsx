
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "../legal.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for the personal portfolio website of ${siteConfig.name}.`,
  alternates: {
    canonical: "/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <span className="eyebrow">Legal information</span>
          <h1>Privacy Policy</h1>
          <p className="lead">
            A straightforward explanation of how this personal portfolio
            handles information.
          </p>
          <p className="legal-updated">
            Last updated: 11 October 2026
          </p>
        </div>
      </header>

      <div className="container legal-content">
        <p>
          This Privacy Policy describes how the personal portfolio website
          operated by {siteConfig.name} (“I”, “me”, or “this website”)
          handles information when you visit{" "}
          <strong>{siteConfig.url}</strong>.
        </p>

        <h2>1. Information you provide</h2>
        <p>
          This website does not currently include a contact form, account
          registration, or user login. If you contact me at{" "}
          <a href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          , I will receive the information you choose to include in your
          email, such as your email address and message.
        </p>

        <h2>2. Automatically collected information</h2>
        <p>
          The hosting provider or infrastructure used to operate this
          website may process basic technical information, such as IP
          address, browser type, requested pages, and security logs, as
          part of normal website delivery and protection. The exact data
          retained depends on the hosting and security services configured
          at deployment.
        </p>

        <h2>3. Cookies and analytics</h2>
        <p>
          This website has no intentional analytics or advertising cookies
          configured in this starter project. If analytics, embedded
          content, or other third-party services are added in the future,
          this policy should be updated to explain what they collect and
          how you can manage relevant settings.
        </p>

        <h2>4. How information is used</h2>
        <p>
          Information sent directly to me is used to respond to your
          message, maintain correspondence, and protect against misuse.
          I do not sell personal information.
        </p>

        <h2>5. Third-party websites</h2>
        <p>
          This website may link to social networks or external websites.
          Those services operate under their own privacy policies and
          practices.
        </p>

        <h2>6. Data security and retention</h2>
        <p>
          Reasonable measures should be used to protect correspondence
          and website operations. Email messages may be retained for as
          long as reasonably needed to respond, maintain relevant records,
          or meet applicable obligations.
        </p>

        <h2>7. Children and sensitive information</h2>
        <p>
          Please do not send confidential patient details, medical records,
          or other sensitive personal information through this website or
          by email. This portfolio is not intended to collect such
          information.
        </p>

        <h2>8. Your choices and contact</h2>
        <p>
          If you have a privacy question or want to discuss personal
          information you have sent me, contact{" "}
          <a href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          .
        </p>

        <h2>9. Changes to this policy</h2>
        <p>
          This policy may be updated when the website or its services
          change. The latest revision date will be shown at the top of
          this page.
        </p>

        <p className="legal-note">
          This is a general starter policy, not legal advice. It should
          be reviewed for the actual hosting setup, applicable law, and
          any services added before launch.
        </p>
      </div>
    </article>
  );
}
