import type { Metadata } from "next";
import PageReveal from "../../components/PageReveal";
import styles from "../inner.module.css";

export const metadata: Metadata = {
    title: "Contact Aaditya Jha",
    description:
        "Contact Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
    keywords: [
        "Contact Aaditya Jha",
        "Aaditya Jha contact",
        "Aditya Jha contact",
        "Aaditya Jha Nepal",
    ],
    alternates: {
        canonical: "https://aaditya-jha.com.np/contact",
    },
    openGraph: {
        type: "website",
        locale: "en_NP",
        url: "https://aaditya-jha.com.np/contact",
        siteName: "Aaditya Jha",
        title: "Contact Aaditya Jha",
        description:
            "Contact Aaditya Jha, an MBBS student at Chitwan Medical College, Tribhuvan University, Nepal.",
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
        title: "Contact Aaditya Jha",
        description:
            "Contact Aaditya Jha through email and social profiles.",
        images: ["/aadityajha.jpg"],
    },
};

export default function Contact() {
    return (
        <PageReveal>
            <div className={styles.page}>
                <div className="eyebrow">04 / Contact</div>

                <h1 className="display">
                    Say hello.
                </h1>

                <div className={styles.rule} />

                <div className={styles.two}>
                    <div>
                        <p className={styles.lead}>
                            For a direct message, you can reach me
                            by email or through the social profiles below.
                        </p>
                    </div>

                    <div className={styles.facts}>
                        <span>Email</span>

                        <strong>
                            <a href="mailto:hi@aaditya-jha.com.np">
                                Email ↗
                            </a>
                        </strong>

                        <span>Social</span>

                        <strong>
                            <a
                                href="https://www.instagram.com/aadi.jha24/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Instagram ↗
                            </a>
                        </strong>

                        <strong>
                            <a
                                href="https://www.linkedin.com/in/aadityajha/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                LinkedIn ↗
                            </a>
                        </strong>
                    </div>
                </div>
            </div>
        </PageReveal>
    );
}