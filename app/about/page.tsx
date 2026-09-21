import type { Metadata } from "next";
import PageReveal from "../../components/PageReveal";
import styles from "../inner.module.css";

const siteUrl = "https://aaditya-jha.com.np";

export const metadata: Metadata = {
    title: "About Aaditya Jha — MBBS Student, Nepal",

    description:
        "About Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal, exploring medicine through academic study, clinical learning and community experience.",

    keywords: [
        "About Aaditya Jha",
        "Aaditya Jha",
        "Aditya Jha",
        "Aaditya Jha MBBS",
        "Aaditya Jha Nepal",
        "Aaditya Jha Chitwan Medical College",
        "Aaditya Jha Tribhuvan University",
        "Aaditya Jha medical student",
    ],

    alternates: {
        canonical: `${siteUrl}/about`,
    },

    openGraph: {
        type: "profile",
        locale: "en_NP",
        url: `${siteUrl}/about`,
        siteName: "Aaditya Jha",
        title: "About Aaditya Jha — MBBS Student, Nepal",
        description:
            "About Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
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
        title: "About Aaditya Jha — MBBS Student, Nepal",
        description:
            "About Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
        images: ["/aadityajha.jpg"],
    },
};

export default function About() {
    return (
        <PageReveal>
            <article className={styles.page}>
                <header>
                    <div className="eyebrow">02 / About</div>

                    <h1 className="display">
                        A quiet
                        <br />
                        <em>introduction.</em>
                    </h1>
                </header>

                <div className={styles.rule} />

                <div className={styles.two}>
                    <div>
                        <p className={styles.lead}>
                            I am Aaditya Jha, an MBBS student at Chitwan
                            Medical College, Tribhuvan University, Nepal.
                        </p>

                        <p>
                            My medical education has been a gradual process
                            of learning how to observe carefully, ask better
                            questions, and understand the person behind the
                            clinical presentation.
                        </p>

                        <p>
                            Alongside classroom learning and clinical
                            exposure, community-based experiences have given
                            me a different perspective on medicine — one that
                            begins with listening, observation and understanding
                            the circumstances in which people live.
                        </p>

                        <p>
                            This website is a quiet record of that journey:
                            the academic work, experiences and projects that
                            have shaped my time in medical school.
                        </p>
                    </div>

                    <div className={styles.facts}>
                        <span>Education</span>
                        <strong>MBBS</strong>

                        <span>Current Stage</span>
                        <strong>Third Year</strong>

                        <span>Institution</span>
                        <strong>Chitwan Medical College</strong>

                        <span>University</span>
                        <strong>Tribhuvan University</strong>

                        <span>Location</span>
                        <strong>Nepal</strong>
                    </div>
                </div>
            </article>
        </PageReveal>
    );
}