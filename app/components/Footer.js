"use client";

import Script from "next/script";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            {/* AdSense Fluid Ad */}
            <div className={styles.ad}>
                <Script
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6587894583055842"
                    crossOrigin="anonymous"
                />
                <ins
                    className="adsbygoogle"
                    style={{ display: "block" }}
                    data-ad-format="fluid"
                    data-ad-layout-key="-fb+5w+4e-db+86"
                    data-ad-client="ca-pub-6587894583055842"
                    data-ad-slot="2315906912"
                ></ins>
                <Script id="ads-init" strategy="afterInteractive">
                    {`(adsbygoogle = window.adsbygoogle || []).push({});`}
                </Script>
            </div>

            {/* Footer Links */}
            <div className={styles.links}>
                <a href="/privacy" className={styles.link}>Privacy</a>
                <a href="/terms" className={styles.link}>Terms</a>
            </div>

            {/* Copyright */}
            <div className={styles.copy}>
                © {new Date().getFullYear()} Aaditya Jha
            </div>
        </footer>
    );
}