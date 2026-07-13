import { experiences } from "../data/experience";
import Timeline from "../components/Timeline";

const chronologicalExperienceIds = [
  "ssc-events",
  "ssc-digital-transformation",
  "engage-adoption",
  "ssc-president",
  "ccis-representative",
  "practicum-sao",
  "asean-hackathon",
];

const chronologicalExperiences = chronologicalExperienceIds
  .map((id) => experiences.find((item) => item.id === id))
  .filter((item): item is (typeof experiences)[number] => Boolean(item));

export default function Experience() {
  return (
    <div className="page-container">
      <div className="section-container pt-20 md:pt-28 pb-28 md:pb-36 fade-in" id="experience-page">
        {/* Terminal header */}
        <div className="terminal-text mb-4 md:mb-6 text-base">
          <span className="text-accent">&gt;</span> read experience-log
        </div>

        <h1 className="section-heading mb-6 md:mb-8">Experience Log</h1>

        <p className="text-text-secondary text-base md:text-lg max-w-3xl mb-12 md:mb-14 leading-relaxed">
          A timeline of platform adoption, student-facing support, office
          systems, governance, and technical delivery. The through-line is
          practical operations work: helping people use systems, then improving
          the systems behind the work.
        </p>

        <div className="experience-legend">
          <span>Practicum</span>
          <span>Leadership</span>
          <span>Competition</span>
        </div>

        <div className="max-w-5xl">
          <Timeline items={chronologicalExperiences} />
        </div>
      </div>
    </div>
  );
}
