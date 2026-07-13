export default function CertsWindow() {
  return (
    <div className="window-body" style={{ overflow: "auto", padding: 12 }}>
      <div className="xp-content">
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div style={{ fontSize: 48 }}>🏆</div>
          <h2 style={{ margin: "8px 0 4px", fontSize: 16 }}>Certifications</h2>
          <p style={{ color: "#555" }}>Professional credentials</p>
        </div>

        {/* CompTIA Tech+ */}
        <div
          style={{
            border: "1px solid #999",
            borderRadius: 4,
            overflow: "hidden",
            marginBottom: 12,
          }}
        >
          {/* Tab-like header */}
          <div
            style={{
              background: "#ece9d8",
              padding: "4px 8px",
              borderBottom: "1px solid #999",
              display: "flex",
              gap: 0,
            }}
          >
            <span
              style={{
                padding: "2px 12px",
                background: "#fff",
                border: "1px solid #999",
                borderBottom: "1px solid #fff",
                borderRadius: "3px 3px 0 0",
                fontSize: 11,
                fontWeight: "bold",
                marginBottom: -1,
              }}
            >
              General
            </span>
            <span
              style={{
                padding: "2px 12px",
                fontSize: 11,
                color: "#555",
              }}
            >
              Details
            </span>
          </div>

          {/* Properties body */}
          <div style={{ padding: 12, background: "#fff" }}>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  background: "linear-gradient(135deg, #e8d44d, #b8941e)",
                  borderRadius: 8,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 32,
                  flexShrink: 0,
                }}
              >
                🎖️
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "bold", fontSize: 14, marginBottom: 4 }}>
                  CompTIA Tech+
                </div>
                <table style={{ fontSize: 11, borderCollapse: "collapse", width: "100%" }}>
                  <tbody>
                    <tr>
                      <td style={{ color: "#555", padding: "2px 8px 2px 0", width: 100 }}>Issuer:</td>
                      <td>CompTIA</td>
                    </tr>
                    <tr>
                      <td style={{ color: "#555", padding: "2px 8px 2px 0" }}>Status:</td>
                      <td style={{ color: "#008000", fontWeight: "bold" }}>✓ Verified</td>
                    </tr>
                    <tr>
                      <td style={{ color: "#555", padding: "2px 8px 2px 0" }}>Type:</td>
                      <td>Professional Certification</td>
                    </tr>
                    <tr>
                      <td style={{ color: "#555", padding: "2px 8px 2px 0" }}>Domain:</td>
                      <td>IT Fundamentals & Infrastructure</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <hr style={{ margin: "12px 0", border: "none", borderTop: "1px solid #ccc" }} />

            <p style={{ fontSize: 11, color: "#333" }}>
              The CompTIA Tech+ certification validates broad IT knowledge
              spanning hardware, networking, security, and troubleshooting —
              forming the foundation for cybersecurity specialization.
            </p>
          </div>

          {/* Dialog buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 4,
              padding: "6px 8px",
              background: "#ece9d8",
              borderTop: "1px solid #ccc",
            }}
          >
            <button style={{ fontSize: 11, padding: "2px 16px" }}>OK</button>
            <button style={{ fontSize: 11, padding: "2px 16px" }}>Cancel</button>
            <button style={{ fontSize: 11, padding: "2px 16px" }}>Apply</button>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            border: "1px solid #999",
            padding: 8,
            fontSize: 11,
          }}
        >
          <b>Other accepted credentials</b>
          <ul style={{ margin: "6px 0 0 18px", padding: 0 }}>
            <li>CCNA: Introduction to Networks — Cisco Networking Academy</li>
            <li>Google Cloud Computing Foundations Certificate</li>
            <li>Google Cloud skill badges — networking, load balancing, ML APIs, app dev environment</li>
            <li>CyberSocPH Membership — Cybersecurity Society of the Philippines, Inc.</li>
            <li>Coursera Linux guided projects — command line and package installation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
