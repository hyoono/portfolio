import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import heroGraphic from "../assets/hero.png";

const systemRows = [
  ["Target", "IT Support -> System Administrator"],
  ["Specialty", "Troubleshooting, onboarding, secure operations"],
  ["Current", "SAO practicum systems + campus platform support"],
  ["Graduation", "November 2026"],
];

const bootItems = [
  "Mapua MCL Engage adoption",
  "HopFog capstone prototype",
  "SAO office systems",
  "Hardware + network troubleshooting",
];

export default function Hero() {
  const [statusVisible, setStatusVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStatusVisible(true), 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="page-container bios-hero relative overflow-hidden" id="hero">
      <div className="section-container relative z-10 grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1fr)_460px] lg:py-20">
        <div className="max-w-4xl">
          <div className="bios-kicker fade-in mb-5">
            <span>POST OK</span>
            <span>Profile loaded</span>
            <span>IT support priority</span>
          </div>

          <p className="terminal-text mb-4 fade-in">
            <span className="text-accent">&gt;</span> system_profile / primary_operator
          </p>

          <h1 className="font-display text-5xl font-bold leading-[0.98] text-text-primary fade-in sm:text-6xl md:text-7xl">
            Joshua Fil
            <span className="block text-accent">V. Evasco</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-text-primary fade-in md:text-xl">
            IT generalist and student leader focused on support, systems
            administration, hardware-aware troubleshooting, and technology
            adoption that survives real users.
          </p>

          <div
            className={`mt-8 grid max-w-3xl gap-3 transition-all duration-500 sm:grid-cols-3 ${
              statusVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-2 opacity-0"
            }`}
            aria-label="Role focus"
          >
            {["IT Support", "System Administration", "Cybersecurity"].map(
              (item) => (
                <div key={item} className="bios-chip">
                  {item}
                </div>
              )
            )}
          </div>

          <div className="mt-10 flex flex-wrap gap-4 fade-in">
            <Link
              to="/projects"
              className="btn-neu btn-accent text-base"
              id="hero-cta-projects"
            >
              View Operational Work
            </Link>
            <Link
              to="/experience"
              className="btn-neu text-base"
              id="hero-cta-experience"
            >
              Experience Log
            </Link>
            <a
              href="/documents/evasco-resume-2026.pdf"
              className="btn-neu text-base"
              target="_blank"
              rel="noopener noreferrer"
              id="hero-cta-resume"
            >
              Resume
            </a>
          </div>
        </div>

        <aside className="bios-panel fade-in" aria-label="System diagnostics">
          <div className="bios-panel-header">
            <span>h&gt; bios</span>
            <span>v2.6</span>
          </div>

          <div className="bios-device">
            <div className="bios-device-copy">
              <p className="font-mono text-xs uppercase text-accent">
                Active profile
              </p>
              <p className="mt-2 font-display text-2xl font-bold text-text-primary">
                Hybrid Leader-Builder
              </p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                Serious operations work up front. The whimsy stays tucked in the
                recovery partition.
              </p>
            </div>
            <img
              src={heroGraphic}
              alt=""
              className="bios-device-image"
              aria-hidden="true"
            />
          </div>

          <div className="bios-table" role="list">
            {systemRows.map(([label, value]) => (
              <div className="bios-table-row" key={label} role="listitem">
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>

          <div className="mt-5">
            <p className="font-mono text-xs uppercase text-text-secondary">
              Boot priority
            </p>
            <ol className="mt-3 space-y-2">
              {bootItems.map((item, index) => (
                <li key={item} className="bios-boot-row">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </section>
  );
}
