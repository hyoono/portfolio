import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="project-card block group"
      id={`project-card-${project.slug}`}
    >
      <div className="project-card-meta">
        {project.category && <span>{project.category}</span>}
        {project.status && <span>{project.status}</span>}
      </div>

      {project.role && <p className="project-card-role">{project.role}</p>}

      <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-200">
        {project.title}
      </h3>

      <p className="mt-3 text-text-secondary text-sm md:text-base leading-relaxed">
        {project.summary}
      </p>

      {project.impact && (
        <ul className="project-card-impact">
          {project.impact.slice(0, 3).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-card-stack">
        {project.stack.slice(0, 6).map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs text-text-secondary/70 bg-bg-surface-alt px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 6 && <span>+{project.stack.length - 6}</span>}
      </div>

      {project.repoUrl && (
        <div className="mt-4 flex items-center gap-1 text-text-secondary/50 text-xs font-mono">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          Source available
        </div>
      )}
    </Link>
  );
}
