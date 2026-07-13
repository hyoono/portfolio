import type { Experience } from "../data/experience";

interface TimelineProps {
  items: Experience[];
}

const typeLabels: Record<Experience["type"], string> = {
  practicum: "Practicum",
  leadership: "Leadership",
  competition: "Competition",
};

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline-rail" id="timeline">
      <div className="timeline-line" aria-hidden="true" />

      <div className="timeline-items">
        {items.map((item, index) => (
          <article
            key={item.id}
            className="timeline-item fade-in"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            <div
              className={`timeline-node timeline-node-${item.type}`}
              aria-hidden="true"
            />

            <div className="timeline-card">
              <div className="timeline-card-top">
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.organization}</p>
                </div>

                <div className="timeline-card-meta">
                  <span className={`timeline-type timeline-type-${item.type}`}>
                    {typeLabels[item.type]}
                  </span>
                  <span>{item.period}</span>
                </div>
              </div>

              <p className="timeline-card-description">{item.description}</p>

              {item.highlights.length > 0 && (
                <ul className="timeline-card-list">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
