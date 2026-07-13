interface ProjectFilterProps {
  tags: string[];
  activeTag: string | null;
  onFilter: (tag: string | null) => void;
}

export default function ProjectFilter({
  tags,
  activeTag,
  onFilter,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8" role="group" aria-label="Filter projects by tag" id="project-filter">
      <button
        onClick={() => onFilter(null)}
        className={`font-mono text-sm px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
          activeTag === null
            ? "bg-accent text-[#0e1117] font-semibold shadow-md"
            : "bg-bg-surface border border-border-hairline text-text-secondary hover:text-text-primary hover:bg-bg-surface-alt"
        }`}
      >
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onFilter(tag === activeTag ? null : tag)}
          className={`font-mono text-sm px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer ${
            activeTag === tag
              ? "bg-accent text-[#0e1117] font-semibold shadow-md"
              : "bg-bg-surface border border-border-hairline text-text-secondary hover:text-text-primary hover:bg-bg-surface-alt"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
