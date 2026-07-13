import { experiences } from "../../data/experience";

export default function ExperienceWindow() {
  return (
    <div className="window-body" style={{ overflow: "auto", padding: 12 }}>
      <div className="xp-content">
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <div style={{ fontSize: 32 }}>📋</div>
          <div>
            <h2 style={{ margin: 0, fontSize: 14 }}>Experience & Timeline</h2>
            <p style={{ color: "#555" }}>Professional and leadership history</p>
          </div>
        </div>

        <div className="tree-view" style={{ padding: 4 }}>
          <ul>
            {experiences.map((exp, i) => (
              <li key={exp.id}>
                <details open={i < 2}>
                  <summary style={{ fontWeight: "bold", cursor: "pointer" }}>
                    {exp.title} — {exp.period}
                  </summary>
                  <div
                    style={{
                      padding: "4px 0 8px 8px",
                      borderLeft: "1px dotted #aaa",
                      marginLeft: 4,
                    }}
                  >
                    <div style={{ fontSize: 11, color: "#555", marginBottom: 4 }}>
                      <span
                        style={{
                          background:
                            exp.type === "leadership"
                              ? "#d4edda"
                              : exp.type === "practicum"
                              ? "#cce5ff"
                              : "#fff3cd",
                          padding: "1px 6px",
                          borderRadius: 2,
                          fontSize: 10,
                        }}
                      >
                        {exp.type}
                      </span>{" "}
                      · {exp.organization}
                    </div>
                    <p>{exp.description}</p>
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul>
                        {exp.highlights.map((h, j) => (
                          <li key={j}>{h}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
