import type { Metadata } from "next";
import Link from "next/link";

import PageReveal from "../../../components/PageReveal";
import styles from "./chb.module.css";

export const metadata: Metadata = {
    title: "Community Health Diagnosis — Aaditya Jha",

    description:
        "Community Health Diagnosis project by Aaditya Jha during his MBBS studies at Chitwan Medical College, documenting community-based medical education and field experience.",

    keywords: [
        "Community Health Diagnosis",
        "Aaditya Jha Community Health Diagnosis",
        "Aaditya Jha",
        "Aaditya Jha MBBS",
        "Aaditya Jha Chitwan Medical College",
        "community health Nepal",
        "MBBS community health project",
    ],

    alternates: {
        canonical:
            "https://aaditya-jha.com.np/projects/chd",
    },

    openGraph: {
        type: "article",
        url: "https://aaditya-jha.com.np/projects/chd",
        title: "Community Health Diagnosis — Aaditya Jha",
        description:
            "A first-year community field experience during MBBS at Chitwan Medical College.",
    },
};

export default function CHD() {
    return (
        <PageReveal>
            <article className={styles.page}>
                <header>
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
                        learning to observe health beyond the hospital and
                        understand a community in its own context.
                    </p>
                </header>

                <div className={styles.meta}>
                    <span>Community Health</span>
                    <span>First Year MBBS</span>
                    <span>Chitwan Medical College</span>
                </div>

                <section>
                    <div className="eyebrow">
                        The experience
                    </div>

                    <div className={styles.body}>
                        <p>
                            The Community Health Diagnosis visit formed part
                            of the early medical curriculum. The field
                            experience brought classroom learning into direct
                            contact with the community, where observation,
                            communication and structured assessment became
                            practical skills.
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
                        A documented part of medical education, rather than
                        a claim of published research.
                    </p>
                </section>

                <Link
                    className={styles.back}
                    href="/projects"
                >
                    ← Back to projects
                </Link>
            </article>
        </PageReveal>
    );
}