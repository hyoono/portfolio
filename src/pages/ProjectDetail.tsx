import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";

const categoryLabels: Record<string, string> = {
  operations: "Operations",
  capstone: "Capstone",
  practicum: "Practicum",
  automation: "Automation",
  hardware: "Hardware",
  mobile: "Mobile",
  hackathon: "Hackathon",
};

const yearLabels: Record<number, string> = {
  1: "1st Year",
  2: "2nd Year",
  3: "3rd Year",
  4: "4th Year",
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  if (!project) {
    return (
      <div className="page-container">
        <div className="section-container py-20 text-center">
          <div className="terminal-text mb-4">
            <span className="text-accent">$</span> cat projects/{slug}
          </div>
          <h1 className="font-display text-3xl font-bold mb-4">
            404 — Project Not Found
          </h1>
          <p className="text-text-secondary mb-8">
            The project you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/projects" className="btn-neu">
            ← Back to Work
          </Link>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering for bold text
  const renderBody = (text: string) => {
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} className="text-text-primary font-semibold">
            {part.slice(2, -2)}
          </strong>
        );
      }
      const lines = part.split("\n");
      return lines.map((line, j) => {
        if (line.startsWith("- ")) {
          return (
            <li key={`${i}-${j}`} className="ml-4 text-text-secondary">
              {line.slice(2)}
            </li>
          );
        }
        if (line.trim() === "") return <br key={`${i}-${j}`} />;
        return (
          <span key={`${i}-${j}`}>
            {line}
            {j < lines.length - 1 && !lines[j + 1]?.startsWith("- ") && "\n"}
          </span>
        );
      });
    });
  };

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const hasHardware = project.hardware && project.hardware.length > 0;

  return (
    <div className="page-container">
      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setLightboxSrc(null)}
          role="dialog"
          aria-label="Screenshot lightbox"
        >
          <img
            src={lightboxSrc}
            alt="Screenshot"
            className="max-w-full max-h-[90vh] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightboxSrc(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white font-mono text-xl"
            aria-label="Close lightbox"
          >
            ✕
          </button>
        </div>
      )}

      <article className="section-container pt-20 md:pt-28 pb-28 md:pb-36 fade-in" id={`project-${project.slug}`}>
        {/* Back link */}
        <Link
          to="/projects"
          className="font-mono text-sm text-text-secondary hover:text-accent transition-colors mb-8 inline-flex items-center gap-2"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Work
        </Link>

        {/* Header */}
        <header className="mb-12 md:mb-14 mt-8">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="tag-pill">{tag}</span>
            ))}
            {project.category && (
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20">
                {categoryLabels[project.category] ?? project.category}
              </span>
            )}
            {project.yearLevel && (
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-bg-surface-alt border border-border-hairline text-text-secondary">
                {yearLabels[project.yearLevel]}
              </span>
            )}
          </div>
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-5">
            {project.title}
          </h1>
          <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-3xl lg:max-w-4xl">
            {project.summary}
          </p>
        </header>

        {(project.role || project.status || project.impact) && (
          <div className="grid grid-cols-1 lg:grid-cols-[320px_minmax(0,1fr)] gap-6 mb-12 md:mb-14 max-w-5xl">
            <div className="card-neu p-7 md:p-8">
              <h2 className="font-mono text-sm text-accent uppercase mb-5">
                Assignment
              </h2>
              {project.role && (
                <div className="mb-4">
                  <p className="font-mono text-xs uppercase text-text-secondary/60">
                    Role
                  </p>
                  <p className="mt-1 text-text-primary font-medium">
                    {project.role}
                  </p>
                </div>
              )}
              {project.status && (
                <div>
                  <p className="font-mono text-xs uppercase text-text-secondary/60">
                    Status
                  </p>
                  <p className="mt-1 text-text-primary font-medium">
                    {project.status}
                  </p>
                </div>
              )}
            </div>

            {project.impact && (
              <div className="card-neu p-7 md:p-8">
                <h2 className="font-mono text-sm text-accent uppercase mb-5">
                  Operational Impact
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm md:text-base text-text-secondary"
                    >
                      <span className="text-accent shrink-0">›</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Tech stack + Hardware side by side on desktop */}
        <div className={`grid gap-6 mb-12 md:mb-14 max-w-3xl lg:max-w-4xl ${hasHardware ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1"}`}>
          {/* Software Used */}
          <div className="card-neu p-7 md:p-8">
            <h2 className="font-mono text-sm md:text-base text-accent mb-5 uppercase">
              Tools / Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="inset-neu px-4 py-2 font-mono text-sm md:text-base text-text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Hardware Used (only for IoT/capstone) */}
          {hasHardware && (
            <div className="card-neu p-7 md:p-8">
              <h2 className="font-mono text-sm md:text-base text-accent mb-5 uppercase">
                Hardware Used
              </h2>
              <div className="flex flex-col gap-2">
                {project.hardware!.map((hw) => (
                  <div key={hw} className="flex items-center gap-3">
                    <span className="text-accent text-xs shrink-0">▸</span>
                    <span className="font-mono text-sm text-text-secondary">
                      {hw}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Features / Description */}
        <div className="max-w-3xl lg:max-w-4xl mb-12 md:mb-14">
          <h2 className="font-mono text-sm md:text-base text-accent mb-6 uppercase">
            Case Notes
          </h2>
          <div className="prose-custom text-text-secondary text-base md:text-lg leading-relaxed whitespace-pre-line">
            {renderBody(project.body)}
          </div>
        </div>

        {/* Visual evidence */}
        {hasScreenshots ? (
          <div className="mb-12 md:mb-14">
            <h2 className="font-mono text-sm md:text-base text-accent mb-6 uppercase">
              Visual Evidence
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {project.screenshots!.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setLightboxSrc(src)}
                  className="group relative block w-full aspect-[4/3] rounded-xl overflow-hidden border border-border-hairline bg-bg-surface-alt hover:border-accent/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
                  aria-label={`Screenshot ${i + 1}`}
                  id={`screenshot-${project.slug}-${i}`}
                >
                  <img
                    src={src}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-contain p-2 group-hover:scale-[1.02] transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200 flex items-center justify-center">
                    <svg
                      className="text-white opacity-0 group-hover:opacity-80 transition-opacity duration-200 drop-shadow-lg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <line x1="21" y1="21" x2="16.65" y2="16.65" />
                      <line x1="11" y1="8" x2="11" y2="14" />
                      <line x1="8" y1="11" x2="14" y2="11" />
                    </svg>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-12 md:mb-14">
            <h2 className="font-mono text-sm md:text-base text-accent mb-6 uppercase">
              Visual Evidence
            </h2>
            <div className="card-neu p-8 text-center border-dashed">
              <p className="font-mono text-sm text-text-secondary/50">
                No public visual artifact is attached for this entry.
              </p>
            </div>
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-8 border-t border-border-hairline">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-neu"
              id={`project-repo-${project.slug}`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View Source
            </a>
          )}
          <Link to="/projects" className="btn-neu">
            ← All Work
          </Link>
        </div>
      </article>
    </div>
  );
}
