import type { Metadata } from "next";
import PageReveal from "../../components/PageReveal";
import styles from "../legal.module.css";

export const metadata: Metadata = {
    title: "Terms",
    description: "Terms of use for the official Aaditya Jha website.",
};

export default function Terms() {
    return (
        <PageReveal>
            <article className={styles.page}>
                <div className="eyebrow">Legal</div>

                <h1 className="display">
                    Terms of
                    <br />
                    <em>Use.</em>
                </h1>

                <p className={styles.updated}>
                    Last updated: September 21, 2026
                </p>

                <h2>Website Purpose</h2>

                <p>
                    This website is a personal portfolio and informational site. Content
                    describes the education and academic work of Aaditya Jha and is
                    provided for general informational purposes.
                </p>

                <h2>No Medical Advice</h2>

                <p>
                    Nothing on this website is intended to provide medical diagnosis,
                    treatment, or individualized medical advice. Information presented
                    on the website should not be used as a substitute for consultation
                    with a qualified healthcare professional.
                </p>

                <h2>Content</h2>

                <p>
                    Reasonable care is taken with published information, but no guarantee
                    is made that every page will remain complete, current, or error-free.
                    Academic project material should not be treated as a substitute for
                    official course documents, institutional guidance, or professional
                    advice.
                </p>

                <h2>External Links</h2>

                <p>
                    The website may link to third-party services, websites, or social
                    platforms. Aaditya Jha does not control those external websites and
                    is not responsible for their content, availability, or privacy
                    practices.
                </p>

                <h2>Changes</h2>

                <p>
                    These terms may be updated as the website develops or its content and
                    functionality change. The updated version will be published on this
                    page.
                </p>
            </article>
        </PageReveal>
    );
}