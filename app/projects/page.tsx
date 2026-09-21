import type { Metadata } from "next";
import Link from "next/link";
import PageReveal from "../../components/PageReveal";
import styles from "./projects.module.css";

const siteUrl = "https://aaditya-jha.com.np";

export const metadata: Metadata = {
    title: "Projects — Aaditya Jha",
    description:
        "Selected academic and community work by Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
    keywords: [
        "Aaditya Jha projects",
        "Aditya Jha projects",
        "Aaditya Jha MBBS",
        "Aaditya Jha academic projects",
        "Aaditya Jha Community Health Diagnosis",
        "Community Health Diagnosis Nepal",
        "Aaditya Jha Chitwan Medical College",
    ],
    alternates: {
        canonical: `${siteUrl}/projects`,
    },
    openGraph: {
        type: "website",
        locale: "en_NP",
        url: `${siteUrl}/projects`,
        siteName: "Aaditya Jha",
        title: "Projects — Aaditya Jha",
        description:
            "Selected academic and community work by Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
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
        title: "Projects — Aaditya Jha",
        description:
            "Selected academic and community work by Aaditya Jha.",
        images: ["/aadityajha.jpg"],
    },
};

export default function Projects() {
    return (
        <PageReveal>
            <article className={styles.page}>
                <header className={styles.header}>
                    <div className="eyebrow">03 / Projects</div>

                    <h1 className="display">
                        Work worth
                        <br />
                        <em>remembering.</em>
                    </h1>

                    <p className={styles.intro}>
                        A small collection of academic and community
                        experiences from medical school.
                    </p>
                </header>

                <div className={styles.rule} />

                <section
                    className={styles.project}
                    aria-labelledby="chd-title"
                >
                    <div className={styles.projectMeta}>
                        <span>01</span>
                        <span>First Year</span>
                        <span>Community Health</span>
                    </div>

                    <div className={styles.projectContent}>
                        <h2 id="chd-title" className="display">
                            Community
                            <br />
                            <em>Health Diagnosis</em>
                        </h2>

                        <p>
                            A first-year community field experience during
                            MBBS, bringing classroom learning into direct
                            contact with the community through observation,
                            communication and structured assessment.
                        </p>

                        <Link
                            className={styles.link}
                            href="/projects/chd"
                        >
                            View project <span>↗</span>
                        </Link>
                    </div>
                </section>

                <div className={styles.bottomNote}>
                    <span className="eyebrow">Academic record</span>

                    <p>
                        Selected work will be added here as the journey
                        continues.
                    </p>
                </div>
            </article>
        </PageReveal>
    );
}