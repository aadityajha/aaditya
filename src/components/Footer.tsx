
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { navigation, siteConfig } from "@/lib/site";
import "./Footer.css";

export function Footer() {
  const socials = siteConfig.socials.filter((item) =>
    item.href.trim()
  );

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-intro">
            <Link
              className="footer-brand"
              href="/"
              aria-label={`${siteConfig.name} — home`}
            >
              {siteConfig.name}
              <span>.</span>
            </Link>

            <p>
              Learning medicine. Exploring community health.
              Staying curious about what comes next.
            </p>
          </div>

          <div className="footer-col">
            <h2>Explore</h2>

            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h2>Elsewhere</h2>

            <a href={`mailto:${siteConfig.email}`}>
              <Mail size={16} aria-hidden="true" />
              Email me
            </a>

            {socials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
                <ArrowUpRight
                  size={14}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {siteConfig.name}.
            {" "}
          </span>

          <div>
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms">Terms</Link>

            <span>
              Made with purpose <b aria-label="creativity">✳</b>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
