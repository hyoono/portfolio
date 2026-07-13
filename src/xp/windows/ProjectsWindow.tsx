import { useState } from "react";
import { projects } from "../../data/projects";

function getProjectIcon(tags: string[]) {
  if (tags.includes("Security") || tags.includes("IoT")) {
    return "/xp-assets/icons/network.png";
  }

  if (tags.includes("AI")) {
    return "/xp-assets/icons/my-computer.png";
  }

  if (tags.includes("Mobile")) {
    return "/xp-assets/icons/xp.png";
  }

  return "/xp-assets/icons/notepad-list.png";
}

export default function ProjectsWindow() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const project = selectedProject
    ? projects.find((p) => p.slug === selectedProject)
    : null;

  return (
    <>
      {/* Address Bar */}
      <div className="xp-address-bar">
        <label>Address</label>
        <input
          type="text"
          value={
            selectedProject
              ? `http://joshuafil.dev/projects/${selectedProject}`
              : "http://joshuafil.dev/projects"
          }
          readOnly
          style={{ flex: 1 }}
        />
        <button style={{ fontSize: 10, padding: "1px 8px" }}>Go</button>
      </div>

      <div className="window-body" style={{ overflow: "auto", padding: 0, flex: 1 }}>
        {!project ? (
          /* Project listing */
          <div style={{ padding: 8 }}>
            <div className="xp-ie-info-bar">
              <img src="/xp-assets/icons/folder.png" alt="" />
              Showing {projects.length} projects - Click to view details
            </div>
            {projects.map((p) => (
              <div
                key={p.slug}
                className="xp-project-item"
                onClick={() => setSelectedProject(p.slug)}
              >
                <img
                  className="xp-project-item-icon"
                  src={getProjectIcon(p.tags)}
                  alt=""
                />
                <div>
                  <div className="xp-project-item-title">{p.title}</div>
                  <div className="xp-project-item-desc">{p.summary}</div>
                  <div className="xp-project-item-tags">
                    {p.tags.map((t) => (
                      <span key={t} className="xp-project-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Project detail */
          <div style={{ padding: 12 }}>
            <div style={{ marginBottom: 8 }}>
              <a
                href="#"
                style={{ fontSize: 11 }}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(null);
                }}
              >
                ← Back to all projects
              </a>
            </div>
            <div className="xp-content">
              <h2 style={{ fontSize: 16, margin: "0 0 6px" }}>
                {project.title}
              </h2>
              <p style={{ color: "#555", marginBottom: 8 }}>
                {project.summary}
              </p>

              <div
                style={{
                  background: "#f5f8fc",
                  border: "1px solid #cce",
                  padding: 8,
                  borderRadius: 2,
                  marginBottom: 12,
                }}
              >
                <b>Tech Stack:</b>{" "}
                {project.stack.map((s) => (
                  <span key={s} className="xp-skill-pill">
                    {s}
                  </span>
                ))}
              </div>

              <div style={{ whiteSpace: "pre-line", lineHeight: 1.6 }}>
                {project.body.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
                  if (part.startsWith("**") && part.endsWith("**")) {
                    return <b key={i}>{part.slice(2, -2)}</b>;
                  }
                  return <span key={i}>{part}</span>;
                })}
              </div>

              {project.repoUrl && (
                <div style={{ marginTop: 12 }}>
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🌐 View Repository on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
