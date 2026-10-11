import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Microscope } from "lucide-react";
import { siteConfig } from "@/lib/site";
import "./about.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Aaditya Jha, an MBBS student in Nepal, his medical studies, and academic projects.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: `About | ${siteConfig.name}`,
    description:
      "A brief introduction to my medical studies and academic work.",
    url: `${siteConfig.url}/about`,
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="page-shell about-page">
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About me</span>

          <h1>
            A medical student
            <br />
            <span>in Nepal.</span>
          </h1>

          <p className="lead">
            I&apos;m Aaditya Jha, an MBBS student documenting my
            medical education, academic work, and experiences.
          </p>
        </div>

        <div className="about-hero-mark" aria-hidden="true">
          AJ.
        </div>
      </section>

      <section className="section">
        <div className="container about-body-grid">
          <div>
            <span className="eyebrow">Background</span>
            <h2>My medical journey.</h2>
          </div>

          <div className="about-prose">
            <p>
              I&apos;m currently studying MBBS in Nepal. Medical school
              continues to introduce me to new concepts, clinical
              skills, and different ways of understanding disease
              and patient care.
            </p>

            <p>
              This website is a personal record of my academic
              projects, experiences, and progress throughout
              medical school.
            </p>

            <p>
              I&apos;ll update it as I complete projects, gain
              experience, and explore new areas of medicine.
            </p>

            <p className="about-note">
              <strong>About the content:</strong> I&apos;m a medical
              student, not a licensed physician. Content on this
              website reflects my studies and project work and
              should not be treated as individual medical advice.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Medical school</span>
              <h2>What I work on.</h2>
            </div>
          </div>

          <div className="about-values">
            <article className="card">
              <span className="about-value-icon">
                <Microscope size={23} />
              </span>
              <h3>Medical studies</h3>
              <p>
                Learning the principles of medicine, disease,
                diagnosis, and patient care.
              </p>
            </article>

            <article className="card">
              <span className="about-value-icon">
                <BookOpen size={23} />
              </span>
              <h3>Academic projects</h3>
              <p>
                Documenting coursework, assignments, and projects
                completed during medical school.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container about-cta">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Get in touch.</h2>
          </div>

          <Link className="button button--dark" href="/contact">
            Contact me <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}