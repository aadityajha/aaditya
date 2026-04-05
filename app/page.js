import Image from "next/image";
import styles from "./Home.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Home() {
  return (
    <main className={styles.hero}>
      <div className={styles.profileContainer}>
        <Image
          src="/aaditya.jpg"
          alt="Aaditya Jha"
          width={200}
          height={200}
          className={styles.profile}
          priority
        />
      </div>

      <h1 className={styles.name}>Aaditya Jha</h1>
      <h2 className={styles.subtitle}>Healthcare & Tech Enthusiast</h2>

      <div className={styles.socialIcons}>
        <a
          href="https://linkedin.com/in/aadityajha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/iaadityajha"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a href="mailto:hi@aaditya-jha.com.np" aria-label="Email">
          <HiOutlineMail />
        </a>
      </div>
    </main>
  );
}