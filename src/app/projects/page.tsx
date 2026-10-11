import type { Metadata } from "next";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, siteConfig } from "@/lib/site";
import "./projects.css";

export const metadata: Metadata = {
  title: "Projects | Aaditya Jha",
  description:
    "Academic projects and coursework by Aaditya Jha, an MBBS student at Chitwan Medical College, Nepal.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: `Projects | ${siteConfig.name}`,
    description:
      "An overview of academic projects and coursework completed during medical school.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects by Aaditya Jha",
    url: `${siteConfig.url}/projects`,
    description:
      "Academic projects and coursework by Aaditya Jha.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: project.title,
        url: `${siteConfig.url}/projects/${project.slug}`,
      })),
    },
  };

  return (
    <div className="projects-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectListSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Academic work</span>

          <h1>
            Projects and
            <br />
            <span>coursework.</span>
          </h1>

          <p className="lead">
            A record of academic projects and assignments completed
            or currently underway during medical school.
          </p>

          <div className="project-page-stats">
            <span>
              <strong>{String(projects.length).padStart(2, "0")}</strong>
              {" "}projects
            </span>

            <i aria-hidden="true" />

            <span>
              <strong>
                {String(
                  projects.filter(
                    (project) => project.status === "Completed"
                  ).length
                ).padStart(2, "0")}
              </strong>
              {" "}completed
            </span>

            <i aria-hidden="true" />

            <span>
              <strong>
                {String(
                  projects.filter(
                    (project) => project.status !== "Completed"
                  ).length
                ).padStart(2, "0")}
              </strong>
              {" "}in progress
            </span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid project-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
              />
            ))}
          </div>

          <p className="projects-disclaimer">
            Project information is provided for academic reference.
            Further details will be added when available and appropriate
            to share.
          </p>
        </div>
      </section>
    </div>
  );
}