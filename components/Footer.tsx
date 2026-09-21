import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.line} />

            <div className={styles.top}>
                <Link
                    href="/"
                    className={styles.brand}
                >
                    AJ.
                </Link>

                <span>NEPAL · 2026</span>
            </div>

            <div className={styles.bottom}>
                <span>© Aaditya Jha</span>

                <div className={styles.links}>
                    <Link href="/privacy">
                        Privacy
                    </Link>

                    <Link href="/terms">
                        Terms
                    </Link>

                    <a href="mailto:hi@aaditya-jha.com.np">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    );
}