export default function AboutWindow() {
  return (
    <div className="window-body" style={{ overflow: "auto", padding: 12 }}>
      <div className="xp-content">
        <div style={{ display: "flex", gap: 12, marginBottom: 12, alignItems: "flex-start" }}>
          <div style={{ fontSize: 48 }}>📁</div>
          <div>
            <h2 style={{ margin: "0 0 4px", fontSize: 16 }}>About Joshua</h2>
            <p style={{ color: "#555" }}>C:\Users\Joshua\Documents\about.txt</p>
          </div>
        </div>

        <hr style={{ border: "none", borderTop: "1px solid #cce" }} />

        <p style={{ marginTop: 8 }}>
          I'm a fourth-year BS Information Technology student majoring in
          Cybersecurity at Mapua Malayan Colleges Laguna, graduating November
          2026. I split my time between two things that don't usually sit in the
          same sentence: running student governance and building the systems —
          digital and physical — that organizations depend on.
        </p>

        <p>
          As President of the Supreme Student Council (AY 2024–2025), following
          terms as Digital Transformation Director and Events Staff Manager, I've
          led initiatives that combine organizational leadership with real
          technical delivery — from organizing <b>Beyond the Breach 2026</b>, a
          CCIS in-house cybersecurity seminar, end-to-end, to coordinating across
          colleges, departments, and offices for Mapua MCL's 20th Foundation
          Week and managing student-led activities from logistics through
          compliance.
        </p>

        <p>
          On the technical side, I completed my IT Practicum at the Student
          Affairs Office as a System Developer and sole developer of SAO-IS,
          building the internal tools the office actually depends on — automated
          case masterlists, room availability systems, advising reports, and a
          full document management system from schema to deployment.
        </p>

        <p>
          My capstone project, <b>HopFog</b>, is where my cybersecurity and
          systems instincts come together most directly: a decentralized,
          multi-hop messaging system built on fog computing, ESP32 nodes, IEEE
          802.15.4 / XBee networking, and AES-128 CTR encryption, designed for
          resilient off-grid communication.
        </p>

        <h2>Education</h2>
        <div style={{ background: "#f5f8fc", border: "1px solid #cce", padding: 8, borderRadius: 2 }}>
          <b>BS Information Technology — Cybersecurity</b>
          <br />
          Mapua Malayan Colleges Laguna
          <br />
          Expected Graduation: November 2026
          <br />
          <span style={{ color: "#555" }}>
            Focus: Network Security, Cryptography, Embedded Systems, Full-Stack
            Web Development
          </span>
        </div>

        <h2>Leadership & Governance</h2>
        <div style={{ background: "#f5f8fc", border: "1px solid #cce", padding: 8, borderRadius: 2 }}>
          <b>President, Supreme Student Council</b>
          <br />
          AY 2024–2025 · Mapua Malayan Colleges Laguna
          <br />
          <span style={{ color: "#666", fontSize: 10 }}>
            Previous: Digital Transformation Director · Events Staff Manager
          </span>
          <ul>
            <li>
              Organized <b>Beyond the Breach 2026</b> (CCIS cybersecurity
              seminar) — full logistics, social media materials, formal
              invitations, and certificate distribution workflow.
            </li>
            <li>
              Coordinated across <b>colleges, departments, and offices</b> for
              Mapua MCL's 20th Foundation Week.
            </li>
            <li>
              Managed <b>student-led activities and events</b> end-to-end —
              administrative, logistical, and financial compliance including tax
              identification protocols and event liability insurance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
