import type { SkillGroup as SkillGroupType } from "../data/skills";

interface SkillGroupProps {
  group: SkillGroupType;
  index: number;
}

export default function SkillGroup({ group, index }: SkillGroupProps) {
  return (
    <div
      className="mb-6"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Category label */}
      <h3 className="font-mono text-xs text-accent uppercase mb-3 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent/40 inline-block" />
        {group.category}
      </h3>

      {/* Skill chips */}
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="inset-neu px-3 py-1.5 font-mono text-xs text-text-primary hover:text-accent transition-colors duration-200 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
