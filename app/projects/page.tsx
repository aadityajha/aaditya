import type { Metadata } from "next";
import Link from "next/link";

import PageReveal from "../../components/PageReveal";
import styles from "./projects.module.css";

export const metadata: Metadata = {
    title: "Projects — Aaditya Jha | Medical Student",

    description:
        "Selected academic and community work by Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University.",

    keywords: [
        "Aaditya Jha projects",
        "Aaditya Jha",
        "Aditya Jha",
        "Aaditya Jha MBBS",
        "Aaditya Jha medical projects",
        "Aaditya Jha Chitwan Medical College",
        "Community Health Diagnosis Aaditya Jha",
    ],

    alternates: {
        canonical: "https://aaditya-jha.com.np/projects",
    },

    openGraph: {
        type: "website",
        url: "https://aaditya-jha.com.np/projects",
        title: "Projects — Aaditya Jha | Medical Student",
        description:
            "Selected academic and community work by Aaditya Jha.",
    },
};

export default function Projects() {
    return (
        <PageReveal>
            <article className={styles.page}>
                <header>
                    <div className="eyebrow">03 / Projects</div>

                    <h1 className="display">
                        Selected
                        <br />
                        <em>academic work.</em>
                    </h1>
                </header>

                <div className={styles.archive}>
                    <div className={styles.itemNumber}>
                        01
                    </div>

                    <div className={styles.itemContent}>
                        <div className={styles.itemMeta}>
                            FIRST YEAR · COMMUNITY HEALTH
                        </div>

                        <h2 className="display">
                            Community
                            <br />
                            <em>Health Diagnosis</em>
                        </h2>

                        <p>
                            A community-based field study completed during
                            the first year of MBBS, documenting local health
                            observations and learning through direct community
                            exposure.
                        </p>

                        <Link href="/projects/chd">
                            View project <span>↗</span>
                        </Link>
                    </div>
                </div>
            </article>
        </PageReveal>
    );
}