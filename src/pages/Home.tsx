import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import { projects } from "../data/projects";

const featuredProjects = projects.filter((p) => p.featured);

const metrics = [
  { value: "30+", label: "Organizations onboarded" },
  { value: "1,000+", label: "Students onboarded" },
  { value: "60+", label: "Officers trained" },
  { value: "50+", label: "Events posted and integrated" },
];

const focusAreas = [
  {
    label: "Support",
    title: "User-facing technical support",
    copy: "Training officers, answering platform issues, writing usable documentation, and keeping adoption work moving after the launch moment.",
  },
  {
    label: "Systems",
    title: "Office systems and admin tooling",
    copy: "Building LAN-deployed systems, SharePoint workflows, Power Automate jobs, reporting tools, and practical automation for daily operations.",
  },
  {
    label: "Hardware",
    title: "Hardware-aware troubleshooting",
    copy: "Working with microcontrollers, mesh networking, sensors, local networks, and the physical debugging that software-only portfolios usually hide.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="section-container py-20 md:py-24" id="system-readout">
        <div className="bios-section-heading">
          <span>01 / Readout</span>
          <h2>Operational Readout</h2>
        </div>

        <div className="metric-grid mt-10">
          {metrics.map((metric) => (
            <div key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 bios-note">
          <span>Mapua MCL Engage adoption</span>
          <p>
            March 2024 - March 2026 platform rollout covering organization
            onboarding, in-depth training, helpline support, data analysis,
            stakeholder coordination, and platform documentation.
          </p>
        </div>
      </section>

      <section className="section-container py-20 md:py-24" id="focus-areas">
        <div className="bios-section-heading">
          <span>02 / Focus</span>
          <h2>Preferred Work</h2>
        </div>

        <div className="ops-grid mt-10">
          {focusAreas.map((area) => (
            <article key={area.label} className="ops-card">
              <p className="ops-card-label">{area.label}</p>
              <h3>{area.title}</h3>
              <p>{area.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-container py-20 md:py-24" id="featured-projects">
        <div className="bios-section-heading">
          <span>03 / Cases</span>
          <h2>Selected Work</h2>
          <Link to="/projects">View all work</Link>
        </div>

        <div className="case-grid mt-10 stagger-in">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className="case-card"
              id={`featured-${project.slug}`}
            >
              <div className="case-card-topline">
                <span>{project.category}</span>
                {project.status && <span>{project.status}</span>}
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              {project.impact && (
                <ul>
                  {project.impact.slice(0, 3).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="case-card-tags">
                {project.tags.slice(0, 4).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-container py-20 md:py-24" id="about-teaser">
        <div className="bios-brief">
          <p className="terminal-text mb-4">
            <span className="text-accent">&gt;</span> load field-notes.txt
          </p>
          <h2>Built Around Messy, Real Systems</h2>
          <p>
            I am more interested in making technology work for people than in
            only making it look polished. The portfolio leans into that:
            platform adoption, support, documentation, troubleshooting, admin
            workflows, hardware prototypes, and secure systems thinking.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="btn-neu">
              Read Profile
            </Link>
            <Link to="/experience" className="btn-neu">
              View Timeline
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
