"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Projects", "/projects"],
    ["Contact", "/contact"],
];

export default function Header() {
    const path = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.inner}>
                    {/* Brand */}
                    <Link
                        href="/"
                        className={styles.brand}
                        aria-label="Aaditya Jha home"
                        onClick={() => setMenuOpen(false)}
                    >
                        AJ.
                    </Link>

                    {/* Desktop navigation */}
                    <nav
                        className={styles.desktopNav}
                        aria-label="Main navigation"
                    >
                        {links.map(([label, href]) => {
                            const isActive =
                                href === "/"
                                    ? path === "/"
                                    : path === href ||
                                    path.startsWith(`${href}/`);

                            return (
                                <Link
                                    key={href}
                                    href={href}
                                    className={
                                        isActive ? styles.active : undefined
                                    }
                                >
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Desktop index */}
                    <Link
                        href="/contact"
                        className={styles.index}
                    >
                        01—04
                    </Link>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className={`${styles.menuButton} ${menuOpen ? styles.menuButtonOpen : ""
                            }`}
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        <span />
                        <span />
                    </button>
                </div>
            </header>

            {/* Mobile sidebar */}
            <aside
                className={`${styles.sidebar} ${menuOpen ? styles.sidebarOpen : ""
                    }`}
                aria-hidden={!menuOpen}
            >
                <div className={styles.sidebarTop}>
                    <span>MENU</span>

                    <button
                        type="button"
                        className={styles.closeButton}
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        ×
                    </button>
                </div>

                <nav className={styles.mobileNav}>
                    {links.map(([label, href], index) => {
                        const isActive =
                            href === "/"
                                ? path === "/"
                                : path === href ||
                                path.startsWith(`${href}/`);

                        return (
                            <Link
                                key={href}
                                href={href}
                                className={
                                    isActive ? styles.mobileActive : ""
                                }
                                onClick={() => setMenuOpen(false)}
                            >
                                <span className={styles.mobileNumber}>
                                    0{index + 1}
                                </span>

                                <span>{label}</span>

                                <span className={styles.mobileArrow}>
                                    ↗
                                </span>
                            </Link>
                        );
                    })}
                </nav>

                <div className={styles.sidebarBottom}>
                    <span>NEPAL · 2026</span>
                    <span>AJ</span>
                </div>
            </aside>

            {/* Background overlay */}
            <button
                type="button"
                className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ""
                    }`}
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation"
            />
        </>
    );
}