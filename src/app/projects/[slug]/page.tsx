import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock3,
} from "lucide-react";
import { projects, siteConfig } from "@/lib/site";
import "./project-detail.css";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${project.title} | ${siteConfig.name}`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
      siteName: siteConfig.name,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const completed = project.statusType === "complete";

  const schema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.summary,
    url: `${siteConfig.url}/projects/${project.slug}`,
    creator: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    educationalUse: "Academic portfolio",
    inLanguage: "en",
  };

  return (
    <article className="project-detail">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="project-detail-hero">
        <div className="container">
          <Link href="/projects" className="back-link">
            <ArrowLeft size={16} />
            All projects
          </Link>

          <div className="detail-hero-grid">
            <div>
              <span className="eyebrow">{project.category}</span>

              <div className="detail-acronym">
                {project.acronym}
                <span>.</span>
              </div>

              <h1>{project.title}</h1>

              <p className="lead">{project.summary}</p>

              <div className="detail-meta">
                <span className={`project-status ${project.statusType}`}>
                  {completed ? (
                    <CheckCircle2 size={14} />
                  ) : (
                    <Clock3 size={14} />
                  )}
                  {project.status}
                </span>

                <span>{project.year}</span>
              </div>
            </div>

            <div className="detail-number" aria-label={`Project ${project.number}`}>
              <span>PROJECT</span>
              <strong>{project.number}</strong>
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-content-grid">
          <div className="detail-main">
            <span className="eyebrow">Overview</span>

            <h2>Project overview.</h2>

            <p>{project.description}</p>

            <p>
              This page documents the project and its progress.
              Relevant objectives, methodology, activities, findings,
              and educational materials can be added as they become
              available and are verified.
            </p>

            <div className="detail-note">
              <strong>Project information</strong>
              <span>
                Details and results will be added when verified.
                Confidential information and identifying patient
                details should not be published.
              </span>
            </div>
          </div>

          <aside className="detail-sidebar">
            <h2>Areas covered</h2>

            <ul>
              {project.focus.map((focus) => (
                <li key={focus}>
                  <span aria-hidden="true" />
                  {focus}
                </li>
              ))}
            </ul>

            <div className="sidebar-rule" />

            <p>Part of the academic portfolio of {siteConfig.name}.</p>

            <Link className="text-link" href="/contact">
              Contact me <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="container detail-next">
          <div>
            <span className="eyebrow">More projects</span>
            <h2>Explore other work.</h2>
          </div>

          <Link className="button button--dark" href="/projects">
            Browse all projects <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </article>
  );
}