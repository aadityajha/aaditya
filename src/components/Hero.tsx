import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Stethoscope } from "lucide-react";
import { siteConfig } from "@/lib/site";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="hero-orb hero-orb--one" aria-hidden="true" />
      <div className="hero-orb hero-orb--two" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-kicker">
            <span className="status-dot" />
            MBBS STUDENT
            <span className="kicker-divider">/</span>
            NEPAL
          </div>

          <h1>
            Medical student.
            <br />
            <span className="hero-ampersand">Learning</span>
            <span className="hero-period">.</span>
          </h1>

          <p className="hero-lead">
            I’m {siteConfig.name}, currently studying MBBS in Nepal.
            This is my personal website, where I share my academic
            projects and experiences.
          </p>

          <div className="hero-actions">
            <Link className="button button--dark" href="/projects">
              View projects <ArrowUpRight size={17} />
            </Link>

            <Link className="button button--outline" href="/contact">
              Contact me <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="portrait-frame">
            <div className="portrait-topline">
              <span>AADITYA JHA</span>
            </div>

            <div className="portrait-art">
              <Image
                src="/aadityajha.svg"
                alt="Portrait of Aaditya Jha"
                fill
                priority
                sizes="(max-width: 760px) 80vw, 480px"
                className="hero-portrait-image"
              />
            </div>

            <div className="portrait-caption">
              <span className="caption-monogram">AJ.</span>

              <div>
                <strong>Aaditya Jha</strong>
                <small>MBBS Student · Nepal</small>
              </div>

              <ArrowDownRight size={22} />
            </div>
          </div>

          <div className="floating-note floating-note--top">
            <span className="floating-icon">
              <Stethoscope size={19} />
            </span>
            <span>
              <strong>Medicine</strong>
              <small>MBBS</small>
            </span>
          </div>

          <div className="visual-star" aria-hidden="true">
            ✳
          </div>
        </div>
      </div>

      <div className="container hero-bottom">
        <span>PERSONAL PORTFOLIO</span>
        <span>
          SCROLL TO EXPLORE <ArrowDownRight size={15} />
        </span>
      </div>
    </section>
  );
}