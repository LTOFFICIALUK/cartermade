"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  type Project,
  type ProjectCategory,
} from "@/lib/constants";
import { Reveal } from "@/components/ui/Reveal";
import { BrowserFrame, BrowserScreenshot } from "@/components/ui/BrowserFrame";

type ProjectCardProps = {
  project: Project;
  index?: number;
  featured?: boolean;
};

const ProjectCard = ({
  project,
  index = 0,
  featured = false,
}: ProjectCardProps) => (
  <Reveal delayMs={index * 80} as="article" className={featured ? "sm:col-span-2" : ""}>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass focus-visible:ring-offset-2 focus-visible:ring-offset-ivory"
      aria-label={`${project.name} — visit live site`}
    >
      <BrowserFrame url={project.url}>
        <div className="relative overflow-hidden">
          <BrowserScreenshot
            src={project.image}
            alt={`${project.name} website homepage`}
            sizes={
              featured
                ? "100vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            }
            className={`transition-transform duration-700 ease-out group-hover:scale-[1.02] ${
              featured ? "aspect-[21/9] sm:aspect-[21/9]" : ""
            }`}
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(to top, ${project.accent}33, transparent 55%)`,
            }}
            aria-hidden
          />
          <span className="absolute right-4 top-4 inline-flex size-9 items-center justify-center rounded-full bg-ivory/90 text-espresso opacity-0 transition-all duration-400 group-hover:opacity-100">
            <ArrowUpRight className="size-4" aria-hidden />
          </span>
        </div>
      </BrowserFrame>
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-walnut/10 pt-5">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-walnut/70">
            {project.industry}
          </p>
          <h3
            className={`mt-1 font-display tracking-tight text-espresso ${
              featured ? "text-3xl sm:text-4xl" : "text-2xl sm:text-[1.65rem]"
            }`}
          >
            {project.name}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-charcoal/75">
            {project.summary}
          </p>
        </div>
      </div>
    </a>
  </Reveal>
);

type ProjectShowcaseProps = {
  projects?: Project[];
  showFilters?: boolean;
  showAllLink?: boolean;
  editorial?: boolean;
};

export const ProjectShowcase = ({
  projects = [...PROJECTS],
  showFilters = false,
  showAllLink = false,
  editorial = false,
}: ProjectShowcaseProps) => {
  const [active, setActive] = useState<ProjectCategory | "all">("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  const displayProjects = editorial ? filtered.slice(0, 3) : filtered;
  const featured = editorial ? displayProjects[0] : null;
  const rest = editorial ? displayProjects.slice(1) : displayProjects;

  const handleFilterClick = (id: ProjectCategory | "all") => {
    setActive(id);
  };

  return (
    <div>
      {showFilters ? (
        <div
          className="mb-12 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {PROJECT_CATEGORIES.map((category) => {
            const selected = active === category.id;
            return (
              <button
                key={category.id}
                type="button"
                role="tab"
                aria-selected={selected}
                onClick={() => handleFilterClick(category.id)}
                className={`rounded-sm px-4 py-2 text-sm transition-colors ${
                  selected
                    ? "bg-espresso text-ivory"
                    : "bg-parchment text-charcoal hover:bg-walnut/10"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      ) : null}

      {editorial && featured ? (
        <div className="grid gap-10 sm:grid-cols-2">
          <ProjectCard project={featured} index={0} featured />
          {rest.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index + 1} />
          ))}
        </div>
      ) : (
        <div className="grid gap-10 sm:grid-cols-2">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}

      {showAllLink ? (
        <div className="mt-12 text-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-medium text-walnut underline decoration-brass/60 underline-offset-4 transition-colors hover:text-espresso hover:decoration-brass"
          >
            See all work
            <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
      ) : null}
    </div>
  );
};
