
import type { Metadata } from "next";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { siteConfig } from "@/lib/site";
import "./contact.css";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Aaditya Jha via email, Instagram, or LinkedIn.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Aaditya Jha",
    description: "Get in touch with Aaditya Jha.",
    url: `${siteConfig.url}/contact`,
  },
};

const socials = [
  {
    label: "Instagram",
    username: "@iaadityajha",
    href: "https://www.instagram.com/iaadityajha",
    Icon: Instagram,
  },
  {
    label: "LinkedIn",
    username: "aadityajha",
    href: "https://www.linkedin.com/in/aadityajha",
    Icon: Linkedin,
  },
];

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact</span>

          <h1>
            Good things start
            <br />
            <span>with a hello.</span>
          </h1>

          <p className="lead">
            Have a question or just want to connect? My inbox is open.
          </p>
        </div>

        <div className="contact-orbit" aria-hidden="true">
          ✳
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-main">
            <span className="eyebrow">Email</span>
            <h2>Drop me a message.</h2>

            <a
              className="email-card"
              href={`mailto:${siteConfig.email}`}
            >
              <span className="email-icon">
                <Mail size={23} />
              </span>

              <span className="email-copy">
                <small>GET IN TOUCH</small>
                <strong>{siteConfig.email}</strong>
              </span>

              <ArrowUpRight className="email-arrow" size={23} />
            </a>
          </div>

          <aside className="social-panel">
            <span className="eyebrow">Socials</span>
            <h2>Find me online.</h2>

            <div className="social-list">
              {socials.map(({ label, username, href, Icon }) => (
                <a
                  className="social-row"
                  href={href}
                  key={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    <Icon size={19} />
                  </span>

                  <span className="social-copy">
                    <strong>{label}</strong>
                    <small>{username}</small>
                  </span>

                  <ArrowUpRight size={17} />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
