import { skillGroups } from "../data/skills";
import { certifications } from "../data/certifications";
import { seminars } from "../data/seminars";

const documents = [
  {
    label: "Download Resume",
    href: "/documents/evasco-resume-2026.pdf",
    description: "2-page recruiter version",
  },
  {
    label: "Harvard-style CV",
    href: "/documents/evasco-cv-harvard-2026.pdf",
    description: "3-page academic/professional CV",
  },
  {
    label: "Competency-based CV",
    href: "/documents/evasco-cv-competency-2026.pdf",
    description: "2-page skills-forward CV",
  },
];

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-8">
        <h2 className="section-heading mb-0">{title}</h2>
        <div className="flex-1 h-px bg-border-hairline" />
      </div>
      {children}
    </section>
  );
}

const roleColors: Record<string, string> = {
  Organizer: "text-accent bg-accent-dim",
  Attendee: "text-text-secondary bg-bg-surface-alt",
  Speaker: "text-amber-400 bg-amber-400/10",
  Panelist: "text-purple-400 bg-purple-400/10",
};

export default function CV() {
  return (
    <div className="page-container">
      <div className="section-container pt-20 md:pt-28 pb-28 md:pb-36 fade-in">
        {/* Terminal header */}
        <div className="terminal-text mb-4 md:mb-6 text-base">
          <span className="text-accent">&gt;</span> mount cv
        </div>

        {/* Page title + download button */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
          <div>
            <h1 className="section-heading mb-2">Curriculum Vitae</h1>
            <p className="font-mono text-sm text-text-secondary/60">
              Joshua · BS Information Technology (Cybersecurity) · Mapua MCL
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {documents.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                download
                className="btn-neu flex items-center gap-2 self-start sm:self-auto"
                id={`cv-download-${doc.label.toLowerCase().replace(/\s+/g, "-")}`}
                title={doc.description}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {doc.label}
              </a>
            ))}
          </div>
        </div>

        {/* ── Skills ─────────────────────────────── */}
        <Section id="cv-skills" title="Skills & Operations">
          <div className="card-neu p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {skillGroups
                .filter((g) => g.category !== "Certifications")
                .map((group) => (
                  <div key={group.category}>
                    <h3 className="font-mono text-xs text-accent uppercase mb-3">
                      {group.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="font-mono text-xs px-3 py-1.5 rounded-md bg-bg-surface-alt border border-border-hairline text-text-secondary"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Section>

        {/* ── Certificates ───────────────────────────────────── */}
        <Section id="cv-certs" title="Certificates">
          {certifications.length === 0 ? (
            <div className="card-neu p-7 md:p-10 text-center">
              <p className="font-mono text-sm text-text-secondary/50">
                No certificates added yet.{" "}
                <span className="text-text-secondary">
                  Add entries to <code>src/data/certifications.ts</code>.
                </span>
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert) => (
                <div
                  key={cert.name}
                  className="card-neu p-6 flex flex-col gap-3"
                >
                  {/* Thumbnail */}
                  {cert.thumbnailSrc && (
                    <div className="w-full aspect-[4/3] rounded-md overflow-hidden bg-bg-surface-alt">
                      <img
                        src={cert.thumbnailSrc}
                        alt={cert.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-display font-semibold text-text-primary text-sm leading-snug">
                      {cert.name}
                    </p>
                    <p className="font-mono text-xs text-accent mt-0.5">
                      {cert.issuer}
                    </p>
                    {cert.dateEarned && (
                      <p className="font-mono text-xs text-text-secondary/60 mt-0.5">
                        {cert.dateEarned}
                      </p>
                    )}
                  </div>
                  {cert.verifyUrl && cert.verifyUrl !== "#" && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-accent hover:underline mt-auto"
                    >
                      Verify ↗
                    </a>
                  )}
                  {cert.fileSrc && (
                    <a
                      href={cert.fileSrc}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs text-text-secondary hover:text-text-primary mt-auto"
                    >
                      View Certificate ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          )}
        </Section>

        {/* ── Seminars ───────────────────────────────────────── */}
        <Section id="cv-seminars" title="Seminars &amp; Events">
          {seminars.length === 0 ? (
            <div className="card-neu p-7 md:p-10 text-center">
              <p className="font-mono text-sm text-text-secondary/50">
                No seminars added yet.{" "}
                <span className="text-text-secondary">
                  Add entries to <code>src/data/seminars.ts</code>.
                </span>
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {seminars.map((s) => (
                <div
                  key={s.title}
                  className="card-neu p-6 flex flex-col sm:flex-row sm:items-start gap-4"
                >
                  {/* Date column */}
                  <div className="shrink-0 w-24">
                    <span className="font-mono text-xs text-text-secondary/60">
                      {s.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-display font-semibold text-text-primary text-sm">
                        {s.title}
                      </h3>
                      <span
                        className={`font-mono text-xs px-2 py-0.5 rounded-full ${
                          roleColors[s.role] ?? roleColors["Attendee"]
                        }`}
                      >
                        {s.role}
                      </span>
                    </div>
                    <p className="font-mono text-xs text-accent mb-2">
                      {s.organizer}
                    </p>
                    {s.description && (
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {s.description}
                      </p>
                    )}
                    {s.certificateUrl && (
                      <a
                        href={s.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs text-accent hover:underline mt-2 inline-block"
                      >
                        View Certificate ↗
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </Section>
      </div>
    </div>
  );
}
