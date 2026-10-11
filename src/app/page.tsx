import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HeartPulse,
  MoveUpRight,
} from "lucide-react";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/site";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="section home-intro">
        <div className="container intro-grid">
          <div>
            <span className="eyebrow">About me</span>
            <h2>
              Studying medicine.
              <br />
              <span className="highlight-underline">
                Learning along the way.
              </span>
            </h2>
          </div>

          <div className="intro-copy">
            <p>
              I&apos;m Aaditya Jha, a third-year MBBS student in Nepal.
              This website is where I share my academic projects
              and experiences from medical school.
            </p>

            <p>
              I&apos;ll keep updating it as I progress through my
              studies and work on new projects.
            </p>

            <Link className="text-link" href="/about">
              More about me <ArrowRight size={17} />
            </Link>
          </div>
        </div>

        <div className="container value-grid">
          <article className="value-item">
            <span className="value-icon">
              <HeartPulse size={22} />
            </span>
            <h3>Medical studies</h3>
            <p>
              Building knowledge of diseases, diagnosis, and
              patient care.
            </p>
          </article>

          <article className="value-item">
            <span className="value-icon value-icon--blue">
              <BookOpen size={22} />
            </span>
            <h3>Academic work</h3>
            <p>
              Keeping a record of coursework, assignments,
              and completed projects.
            </p>
          </article>

          <article className="value-item">
            <span className="value-icon value-icon--gold">
              <ArrowUpRight size={22} />
            </span>
            <h3>Personal projects</h3>
            <p>
              Exploring ideas and working on projects outside
              the regular medical curriculum.
            </p>
          </article>
        </div>
      </section>

      <section className="section section--ivory home-projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">Projects</span>
              <h2>Selected work.</h2>
              <p className="lead">
                Academic projects and other work from my
                time in medical school.
              </p>
            </div>

            <Link className="text-link" href="/projects">
              View all <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="grid project-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="section home-principles">
        <div className="container principles-grid">
          <div>
            <span className="eyebrow">Currently</span>
            <h2>
              Learning through
              <br />
              <span className="gold-text">medical school.</span>
            </h2>
            <p className="lead">
              Medical school involves a lot of learning, practice,
              and adapting to new challenges. This website helps
              me keep track of some of that work.
            </p>

            <Link className="button button--gold" href="/about">
              About me <MoveUpRight size={17} />
            </Link>
          </div>

          <div className="principles-panel">
            <div className="principle">
              <span>01</span>
              <div>
                <h3>Coursework</h3>
                <p>
                  Notes, assignments, and other work related to
                  my medical studies.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>02</span>
              <div>
                <h3>Projects</h3>
                <p>
                  A record of projects I have completed or am
                  currently working on.
                </p>
              </div>
            </div>

            <div className="principle">
              <span>03</span>
              <div>
                <h3>Progress</h3>
                <p>
                  Updating this website as I gain experience
                  and complete new work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-contact">
        <div className="container contact-banner">
          <div>
            <span className="eyebrow">Contact</span>
            <h2>Get in touch.</h2>
            <p>
              For questions, academic discussions, or project
              enquiries, you can reach me by email.
            </p>
          </div>

          <Link className="button button--dark" href="/contact">
            Contact me <ArrowUpRight size={17} />
          </Link>

          <span className="banner-decoration" aria-hidden="true">
            AJ.
          </span>
        </div>
      </section>
    </>
  );
}