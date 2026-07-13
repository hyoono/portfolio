import { useState } from "react";
import { projects, allTags, allCategories } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import ProjectFilter from "../components/ProjectFilter";

type CategoryValue = typeof allCategories[number]["value"];

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<CategoryValue>("all");

  const filtered = projects.filter((p) => {
    const tagMatch = activeTag ? p.tags.includes(activeTag) : true;
    const catMatch =
      activeCategory === "all" ? true : p.category === activeCategory;
    return tagMatch && catMatch;
  });

  return (
    <div className="page-container">
      <section className="section-container pt-20 md:pt-28 pb-28 md:pb-36 fade-in" id="projects-page">
        {/* Terminal header */}
        <div className="terminal-text mb-4 md:mb-6 text-base">
          <span className="text-accent">&gt;</span> enumerate operational_work
        </div>

        <h1 className="section-heading mb-8 md:mb-10">Operational Work</h1>

        <p className="text-text-secondary text-base md:text-lg max-w-3xl mb-10 md:mb-12 leading-relaxed">
          Selected work across platform adoption, IT support, practicum systems,
          automation, hardware prototypes, and cybersecurity-adjacent builds.
          Small seatwork is intentionally left out so the strongest evidence is
          easier to scan.
        </p>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Project categories">
          {allCategories.map((cat) => (
            <button
              key={cat.value}
              role="tab"
              aria-selected={activeCategory === cat.value}
              onClick={() => {
                setActiveCategory(cat.value as CategoryValue);
                setActiveTag(null); // reset tag filter on category change
              }}
              className={`font-mono text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
                activeCategory === cat.value
                  ? "bg-accent text-bg-base border-accent"
                  : "border-border-hairline text-text-secondary hover:text-text-primary hover:border-accent/40"
              }`}
              id={`cat-tab-${cat.value}`}
            >
              {cat.label}
              <span className="ml-2 opacity-50 text-[10px]">
                {cat.value === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.value).length}
              </span>
            </button>
          ))}
        </div>

        {/* Tag Filter */}
        <ProjectFilter
          tags={allTags}
          activeTag={activeTag}
          onFilter={setActiveTag}
        />

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10 stagger-in">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="terminal-text text-base">
              <span className="text-accent">$</span> find . -filter "{activeTag ?? activeCategory}"
              <br />
              <span className="text-text-secondary/50 mt-2 block">
                No projects found with this filter.
              </span>
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
