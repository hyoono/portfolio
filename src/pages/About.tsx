import { skillGroups } from "../data/skills";
import SkillGroup from "../components/SkillGroup";
import CertificationsGallery from "../components/CertificationsGallery";

export default function About() {
  return (
    <div className="page-container">
      <div className="section-container pt-20 md:pt-28 pb-28 md:pb-36 fade-in" id="about-page">
        {/* Terminal header */}
        <div className="terminal-text mb-4 md:mb-6 text-base">
          <span className="text-accent">&gt;</span> load operator-profile
        </div>

        <h1 className="section-heading mb-12 md:mb-16">Profile</h1>

        {/* Bio — wider on desktop */}
        <div className="max-w-3xl lg:max-w-4xl mb-20 md:mb-24">
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
            I'm a fourth-year BS Information Technology student majoring in
            Cybersecurity at Mapua Malayan Colleges Laguna, graduating November
            2026. My preferred lane is IT generalist work: hardware-aware
            troubleshooting, user support, systems administration, platform
            adoption, documentation, and practical problem solving.
          </p>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
            A lot of my strongest work sits between people and systems. I led
            the first-year adoption work for Mapua MCL Engage:
            onboarding 30+ organizations and 1,000+ students, training 60+
            officers, supporting 50+ events, writing platform documentation,
            handling helpline-style troubleshooting, and coordinating with
            stakeholders and admins from March 2024 to March 2026.
          </p>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed mb-6">
            On the technical side, I completed my IT Practicum at the Student
            Affairs Office as a System Developer and sole developer of SAO-IS, a
            Laravel 11 + React/Vite document management system deployed on an
            Ubuntu server for internal office use. I also built practical
            automation around disciplinary case tracking, room availability,
            advising reports, shifting reports, and document workflow support.
          </p>
          <p className="text-text-secondary text-base md:text-lg leading-relaxed">
            My capstone project,{" "}
            <em className="text-text-primary not-italic font-medium">HopFog</em>
            , is where hardware, networking, and cybersecurity come together:
            a decentralized, multi-hop messaging prototype built on fog
            computing, ESP32 nodes, IEEE 802.15.4 / XBee networking, and
            AES-128 CTR encryption for resilient off-grid communication.
          </p>
        </div>

        {/* Two-column layout for Leadership + Education on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 md:mb-24">
          {/* Leadership Section */}
          <section id="leadership">
            <h2 className="section-heading mb-10">Leadership & Support</h2>

            <div className="card-neu p-7 md:p-8">
              <h3 className="font-display text-lg md:text-xl font-semibold text-text-primary mb-1">
                Platform Adoption + Student Governance
              </h3>
              <p className="font-mono text-xs md:text-sm text-accent mb-3">
                March 2024 - March 2026 · AY 2024-2025
              </p>
              <p className="font-mono text-xs text-text-secondary/60 mb-4">
                Mapua MCL Engage adoption lead · SSC President · Digital Transformation Director
              </p>
              <ul className="space-y-3 text-sm md:text-base text-text-secondary">
                <li className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">›</span>
                  <span>
                    Led <strong className="text-text-primary font-medium">Mapua MCL Engage adoption</strong> through onboarding, training, documentation, data analysis, tech support, and admin coordination.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">›</span>
                  <span>
                    Organized <strong className="text-text-primary font-medium">Beyond the Breach 2026</strong> (CCIS in-house cybersecurity seminar) — full logistics, social media materials, formal invitations, and a Canva Bulk Create + Adobe Acrobat certificate distribution workflow.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">›</span>
                  <span>
                    Coordinated across <strong className="text-text-primary font-medium">colleges, departments, and offices</strong> for Mapua MCL's 20th Foundation Week.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent mt-1 shrink-0">›</span>
                  <span>
                    Managed <strong className="text-text-primary font-medium">student-led activities and events</strong> end-to-end — administrative, logistical, and financial compliance including tax identification protocols and event liability insurance.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section id="education">
            <h2 className="section-heading mb-10">Education</h2>
            <div className="card-neu p-7 md:p-8">
              <h3 className="font-display text-lg md:text-xl font-semibold text-text-primary mb-2">
                BS Information Technology — Cybersecurity
              </h3>
              <p className="font-mono text-xs md:text-sm text-accent mb-3">
                Mapua Malayan Colleges Laguna · Expected Graduation: November 2026
              </p>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                Major in Cybersecurity. Focus areas: network security, cryptography,
                embedded systems, and full-stack web development.
              </p>
            </div>
          </section>
        </div>

        {/* Skills — full width */}
        <section className="mb-20 md:mb-24" id="skills">
          <h2 className="section-heading mb-10 md:mb-12">Skills</h2>
          <div className="card-neu p-7 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {skillGroups.map((group, i) => (
                <SkillGroup key={group.category} group={group} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mb-8">
          <CertificationsGallery />
        </section>
      </div>
    </div>
  );
}
