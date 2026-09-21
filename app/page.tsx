import type { Metadata } from "next";
import Link from "next/link";

import PageReveal from "../components/PageReveal";
import HomeAnimations from "../components/HomeAnimations";
import styles from "./home.module.css";

export const metadata: Metadata = {
    title: "Aaditya Jha — MBBS Student in Nepal",

    description:
        "Aaditya Jha is an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal. Explore his academic background, community health work and professional profile.",

    keywords: [
        "Aaditya Jha",
        "Aditya Jha",
        "Aaditya Jha Nepal",
        "Aditya Jha Nepal",
        "Aaditya Jha MBBS",
        "Aditya Jha MBBS",
        "Aaditya Jha medical student",
        "Aaditya Jha Chitwan Medical College",
        "Aaditya Jha Tribhuvan University",
        "MBBS student Nepal",
        "medical student Nepal",
    ],

    alternates: {
        canonical: "https://aaditya-jha.com.np/",
    },

    openGraph: {
        type: "website",
        locale: "en_NP",
        url: "https://aaditya-jha.com.np/",
        siteName: "Aaditya Jha",
        title: "Aaditya Jha — MBBS Student in Nepal",
        description:
            "Official website of Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
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
        title: "Aaditya Jha — MBBS Student in Nepal",
        description:
            "Official website of Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
        images: ["/aadityajha.jpg"],
    },
};

export default function Home() {
    return (
        <PageReveal>
            <div className="noise" />

            <section
                className={styles.hero}
                aria-labelledby="hero-title"
            >
                <div className={styles.grid} />

                <div
                    className={styles.orbit}
                    aria-hidden="true"
                >
                    <img
                        src="/aadityajha.jpg"
                        alt="Aaditya Jha, MBBS student in Nepal"
                        className={styles.orbitImage}
                    />
                </div>

                <div className={styles.meta}>
                    <span>01 / 04</span>
                    <span>NEPAL · 2026</span>
                </div>

                <div className={styles.copy}>
                    <HomeAnimations />

                    <h1
                        id="hero-title"
                        className={styles.title}
                    >
                        Aaditya
                        <br />
                        <i className={styles.titleAccent}>
                            Jha
                        </i>
                    </h1>

                    <p>
                        Medical student. Learning to observe carefully,
                        think clearly, and understand the human side of
                        clinical care.
                    </p>

                    <div className={styles.actions}>
                        <Link
                            className={styles.primary}
                            href="/about"
                        >
                            About me <span>↗</span>
                        </Link>

                        <Link
                            className={styles.secondary}
                            href="/projects"
                        >
                            View projects <span>↗</span>
                        </Link>
                    </div>
                </div>

                <div className={styles.side}>
                    <div className={styles.vertical}>
                        MEDICINE · OBSERVATION · PRECISION
                    </div>
                </div>

                <div className={styles.scroll}>
                    SCROLL <span>↓</span>
                </div>
            </section>

            <section
                className={styles.statement}
                aria-labelledby="introduction-title"
            >
                <div className="eyebrow">
                    A short introduction
                </div>

                <h2
                    id="introduction-title"
                    className="display"
                >
                    Currently studying <em>MBBS</em> at Chitwan
                    Medical College, Tribhuvan University.
                </h2>

                <Link href="/about">
                    More about Aaditya <span>↗</span>
                </Link>
            </section>

            <section
                className={styles.feature}
                aria-labelledby="featured-project-title"
            >
                <div className="eyebrow">
                    Selected project
                </div>

                <div className={styles.projectRow}>
                    <div>
                        <div className={styles.projectNo}>
                            01
                        </div>

                        <h2
                            id="featured-project-title"
                            className={styles.projectTitle}
                        >
                            Community
                            <br />
                            <em
                                className={
                                    styles.projectTitleAccent
                                }
                            >
                                Health Diagnosis
                            </em>
                        </h2>
                    </div>

                    <div className={styles.projectInfo}>
                        <p>
                            A first-year community field study documenting
                            health conditions, observations and the experience
                            of learning medicine outside the hospital.
                        </p>

                        <Link href="/projects/chd">
                            Open project <span>↗</span>
                        </Link>
                    </div>
                </div>
            </section>
        </PageReveal>
    );
}