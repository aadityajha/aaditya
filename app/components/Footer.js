"use client";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* Optional AdSense / Promo Block */}
            <div className={styles.ad}>
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-client="ca-pub-6587894583055842"
                    data-ad-slot="YYYYYYYYYY"
                    data-ad-format="auto"
                    data-full-width-responsive="true"
                ></ins>
            </div>

            {/* Footer Links */}
            <div className={styles.links}>
                <a href="/privacy" className={styles.link}>Privacy</a>
                <a href="/terms" className={styles.link}>Terms</a>
            </div>

            {/* Copyright */}
            <div className={styles.copy}>
                © {new Date().getFullYear()} Aaditya Jha.
            </div>
        </footer>
    );
}