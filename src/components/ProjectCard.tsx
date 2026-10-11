import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Clock3 } from "lucide-react";
import type { projects } from "@/lib/site";
import "./ProjectCard.css";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  const Icon = project.statusType === "complete" ? CheckCircle2 : Clock3;

  return (
    <Link href={`/projects/${project.slug}`} className="project-card card">
      <div className="project-card-top">
        <span className="project-number">{project.number}</span>
        <span className={`project-status ${project.statusType}`}><Icon size={14} />{project.status}</span>
      </div>
      <div className="project-acronym">{project.acronym}<span>.</span></div>
      <span className="project-category">{project.category}</span>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="project-card-bottom"><span>View project</span><span className="project-arrow"><ArrowUpRight size={19} /></span></div>
    </Link>
  );
}
