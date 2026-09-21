import type { Metadata } from "next";
import Link from "next/link";

import PageReveal from "../../../components/PageReveal";
import styles from "./chb.module.css";

const siteUrl = "https://aaditya-jha.com.np";

export const metadata: Metadata = {
    title: "Community Health Diagnosis — Aaditya Jha",

    description:
        "Community Health Diagnosis field project by Aaditya Jha during first-year MBBS at Chitwan Medical College, Tribhuvan University, Nepal.",

    keywords: [
        "Aaditya Jha Community Health Diagnosis",
        "Community Health Diagnosis",
        "Aaditya Jha",
        "Aditya Jha",
        "Aaditya Jha MBBS",
        "Aaditya Jha Nepal",
        "Aaditya Jha Chitwan Medical College",
        "Aaditya Jha Tribhuvan University",
        "community health Nepal",
        "MBBS community health project",
    ],

    alternates: {
        canonical: `${siteUrl}/projects/chd`,
    },

    openGraph: {
        type: "article",
        locale: "en_NP",
        url: `${siteUrl}/projects/chd`,
        siteName: "Aaditya Jha",
        title: "Community Health Diagnosis — Aaditya Jha",
        description:
            "A first-year Community Health Diagnosis field experience during MBBS at Chitwan Medical College, Tribhuvan University, Nepal.",
        images: [
            {
                url: "/aadityajha.jpg",
                width: 1200,
                height: 1200,
                alt: "Aaditya Jha",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Community Health Diagnosis — Aaditya Jha",
        description:
            "A first-year community field experience during MBBS at Chitwan Medical College.",
        images: ["/aadityajha.jpg"],
    },
};

export default function CHD() {
    return (
        <PageReveal>
            <article className={styles.page}>
                <header className={styles.header}>
                    <div className="eyebrow">
                        01 · Academic Project
                    </div>

                    <h1 className="display">
                        Community
                        <br />
                        <em>Health Diagnosis</em>
                    </h1>

                    <p className={styles.intro}>
                        A first-year community field experience during MBBS —
                        an early opportunity to observe health beyond the
                        hospital and understand a community in its own context.
                    </p>
                </header>

                <div className={styles.meta}>
                    <span>Community Health</span>
                    <span>First Year MBBS</span>
                    <span>Chitwan Medical College</span>
                </div>

                <section className={styles.section}>
                    <div className="eyebrow">
                        The experience
                    </div>

                    <div className={styles.body}>
                        <p>
                            The Community Health Diagnosis visit formed part
                            of the early medical curriculum. It brought
                            classroom learning into direct contact with the
                            community, where observation, communication and
                            structured assessment became practical aspects of
                            medical education.
                        </p>

                        <p>
                            The experience offered an early opportunity to
                            understand health in a setting beyond the hospital
                            and to appreciate the relationship between
                            individuals, households and their wider community.
                        </p>
                    </div>
                </section>

                <section className={styles.note}>
                    <div className="eyebrow">
                        Project record
                    </div>

                    <p className="display">
                        An early record of learning through
                        <em> community experience.</em>
                    </p>
                </section>

                <div className={styles.footer}>
                    <Link
                        className={styles.back}
                        href="/projects"
                    >
                        <span>←</span>
                        Back to projects
                    </Link>
                </div>
            </article>
        </PageReveal>
    );
}