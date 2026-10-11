import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import "../legal.css";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of use for the personal portfolio website of Aaditya Jha.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <article className="legal-page">
      <header className="legal-hero">
        <div className="container">
          <span className="eyebrow">Legal information</span>
          <h1>Terms of Use</h1>
          <p className="lead">
            A few clear ground rules for using this personal portfolio.
          </p>
          <p className="legal-updated">
            Last updated: 11 October 2026
          </p>
        </div>
      </header>

      <div className="container legal-content">
        <p>
          Welcome to the personal portfolio of Aaditya Jha, available at{" "}
          <strong>{siteConfig.url}</strong> (the &ldquo;website&rdquo;). By
          accessing or using this website, you agree to these Terms of Use.
        </p>

        <h2>1. Purpose of this website</h2>
        <p>
          This website presents personal background, educational projects,
          and learning interests. Content is provided for general
          informational and portfolio purposes only.
        </p>

        <h2>2. Not medical advice</h2>
        <p>
          Nothing on this website constitutes medical advice, diagnosis,
          treatment, or a doctor-patient relationship. I am a medical
          student, not a substitute for a licensed healthcare professional.
          For personal medical concerns, consult an appropriately qualified
          clinician; for emergencies, contact local emergency services.
        </p>

        <h2>3. Accuracy and updates</h2>
        <p>
          Content may be revised, expanded, or removed without notice.
          Reasonable care is taken with published information, but I do not
          warrant that every item is complete, current, or free from error.
          Academic project descriptions should not be treated as formal
          clinical guidance.
        </p>

        <h2>4. Intellectual property</h2>
        <p>
          Unless stated otherwise, original text, design, and personal
          portfolio materials belong to their respective rights holders.
          You may not reproduce substantial portions for commercial use
          without prior permission. Third-party names, marks, and materials
          remain the property of their owners.
        </p>

        <h2>5. Acceptable use</h2>
        <p>
          You agree not to misuse the website, attempt unauthorized access,
          interfere with its operation, or use its content in a misleading
          or unlawful manner.
        </p>

        <h2>6. External links</h2>
        <p>
          Links to third-party sites are provided for convenience. I do not
          control or guarantee the content, availability, or practices of
          those websites.
        </p>

        <h2>7. Limitation</h2>
        <p>
          To the extent permitted by applicable law, the website and its
          content are provided &ldquo;as is,&rdquo; without warranties of
          any kind. Nothing in these terms excludes liability that cannot
          lawfully be excluded.
        </p>

        <h2>8. Changes to these terms</h2>
        <p>
          These terms may be updated as the website develops. Continued use
          after an update means you accept the revised terms to the extent
          permitted by law.
        </p>

        <h2>9. Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>.
        </p>

        <p className="legal-note">
          This is a general starter document, not legal advice. Review it
          for your actual use case and applicable law before publishing.
        </p>
      </div>
    </article>
  );
}