import type { Metadata } from "next";
import PageReveal from "../../components/PageReveal";
import styles from "../legal.module.css";

export const metadata: Metadata = {
    title: "Privacy Policy",
    description:
        "Privacy policy for the official Aaditya Jha website.",
};

export default function Privacy() {
    return (
        <PageReveal>
            <article className={styles.page}>
                <div className="eyebrow">Legal</div>

                <h1 className="display">
                    Privacy
                    <br />
                    <em>Policy.</em>
                </h1>

                <p className={styles.updated}>
                    Last updated: September 21, 2026
                </p>

                <h2>Overview</h2>

                <p>
                    This website is a personal portfolio operated by Aaditya Jha. The
                    site is designed primarily to provide information about his medical
                    education, academic projects, and ways to make contact.
                </p>

                <h2>Analytics</h2>

                <p>
                    The website may use Google Analytics to understand aggregate website
                    usage, such as page views and general traffic patterns. Analytics
                    data is used to understand how visitors use the website and to help
                    improve its content and functionality.
                </p>

                <h2>Advertising</h2>

                <p>
                    This website may display advertising through Google AdSense. Google
                    and its advertising partners may use cookies or similar technologies
                    to serve, personalize, and measure advertisements, subject to
                    applicable policies and user choices.
                </p>

                <h2>Contact</h2>

                <p>
                    If you contact the site owner by email or another available contact
                    method, the information you provide may be used to respond to your
                    message and for related communication. Personal information is not
                    intentionally sold to third parties.
                </p>

                <h2>Third-Party Services</h2>

                <p>
                    The website may rely on third-party services for analytics,
                    advertising, hosting, fonts, embedded content, or other website
                    functionality. Those services may process information according to
                    their own privacy policies and terms.
                </p>

                <h2>Changes</h2>

                <p>
                    This policy may be updated when the website, analytics, advertising,
                    contact practices, or applicable requirements change. The date at
                    the top of this page indicates when the policy was most recently
                    updated.
                </p>
            </article>
        </PageReveal>
    );
}