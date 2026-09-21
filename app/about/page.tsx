import type { Metadata } from "next";
import PageReveal from "../../components/PageReveal";
import styles from "../inner.module.css";

export const metadata: Metadata = {
    title: "About Aaditya Jha — MBBS Student, Nepal",

    description:
        "Learn about Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal, and his academic journey in medicine.",

    keywords: [
        "About Aaditya Jha",
        "Aaditya Jha",
        "Aditya Jha",
        "Aaditya Jha MBBS",
        "Aaditya Jha Nepal",
        "Aaditya Jha Chitwan Medical College",
        "Aaditya Jha Tribhuvan University",
    ],

    alternates: {
        canonical: "https://aaditya-jha.com.np/about",
    },

    openGraph: {
        type: "profile",
        url: "https://aaditya-jha.com.np/about",
        title: "About Aaditya Jha — MBBS Student, Nepal",
        description:
            "Learn about Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
        images: [
            {
                url: "/aadityajha.jpg",
                width: 1200,
                height: 1200,
                alt: "Aaditya Jha",
            },
        ],
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
                            I am Aaditya Jha, currently studying MBBS at
                            Chitwan Medical College, Tribhuvan University.
                        </p>

                        <p>
                            Medicine has taught me to look carefully, ask
                            better questions, and remain curious. My education
                            combines classroom learning with clinical exposure
                            and experiences within the community.
                        </p>

                        <p>
                            This website is a small record of that journey —
                            the academic work, experiences and projects that
                            have been meaningful along the way.
                        </p>
                    </div>

                    <div className={styles.facts}>
                        <span>Education</span>
                        <strong>MBBS</strong>

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