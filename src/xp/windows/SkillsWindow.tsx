import { skillGroups } from "../../data/skills";

export default function SkillsWindow() {
  return (
    <div className="window-body" style={{ overflow: "auto", padding: 0, flex: 1 }}>
      <div style={{ display: "flex", height: "100%" }}>
        {/* Explorer sidebar */}
        <div className="xp-explorer-sidebar">
          <div className="xp-explorer-sidebar-group">
            <div className="xp-explorer-sidebar-title">System Tasks</div>
            <div className="xp-explorer-sidebar-item">📊 View system info</div>
            <div className="xp-explorer-sidebar-item">➕ Add/remove programs</div>
          </div>
          <div className="xp-explorer-sidebar-group">
            <div className="xp-explorer-sidebar-title">Other Places</div>
            <div className="xp-explorer-sidebar-item">📁 My Documents</div>
            <div className="xp-explorer-sidebar-item">🌐 My Network</div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: 12, overflow: "auto" }}>
          <div className="xp-content">
            <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
              <div style={{ fontSize: 32 }}>💻</div>
              <div>
                <h2 style={{ margin: 0 }}>System Information</h2>
                <p style={{ color: "#555" }}>
                  Hardware & software capabilities
                </p>
              </div>
            </div>

            <div
              style={{
                background: "#f5f8fc",
                border: "1px solid #cce",
                padding: 8,
                borderRadius: 2,
                marginBottom: 12,
              }}
            >
              <table style={{ width: "100%", fontSize: 11, borderCollapse: "collapse" }}>
                <tbody>
                  <tr>
                    <td style={{ color: "#555", padding: 2, width: 140 }}>Developer:</td>
                    <td style={{ padding: 2 }}>Joshua Fil V. Evasco</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#555", padding: 2 }}>Operating System:</td>
                    <td style={{ padding: 2 }}>Windows XP Professional (simulated)</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#555", padding: 2 }}>Certification:</td>
                    <td style={{ padding: 2 }}>CompTIA Tech+ Certified</td>
                  </tr>
                  <tr>
                    <td style={{ color: "#555", padding: 2 }}>Education:</td>
                    <td style={{ padding: 2 }}>BS IT — Cybersecurity, MMCL</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {skillGroups.map((group) => (
              <div key={group.category} className="xp-sysinfo-section">
                <div className="xp-sysinfo-section-title">
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
                  {group.skills.map((skill) => (
                    <span key={skill} className="xp-skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
