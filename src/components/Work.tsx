import { projects, archiveTable } from "../data/content";
import type { Project } from "../data/content";
import { ArrowUpRight, ExternalIcon, GitHubIcon } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

function TechList({ tech }: { tech: string[] }) {
  return (
    <ul className="mt-4 flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-full bg-accent-soft px-3 py-1 font-mono text-xs font-medium text-accent"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function FeaturedCard({ p }: { p: Project }) {
  const linkProps = p.external
    ? { href: p.external, target: "_blank", rel: "noopener noreferrer" as const }
    : null;

  return (
    <li>
      <div className="group relative h-full rounded-2xl border border-line/60 bg-panel/30 p-8 transition-all duration-300 hover:border-accent/30 hover:bg-panel/60">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-fg">
            {linkProps ? (
              <a {...linkProps} className="inline-flex items-center gap-1.5 group-hover:text-accent">
                {p.name}
                <ArrowUpRight
                  width={16}
                  height={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ) : (
              <span className="group-hover:text-accent">{p.name}</span>
            )}
          </h3>
          <div className="flex shrink-0 items-center gap-3 text-fg-muted">
            {p.github && (
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} on GitHub`}
                className="transition-colors hover:text-accent"
              >
                <GitHubIcon width={18} height={18} />
              </a>
            )}
            {p.external && (
              <a
                href={p.external}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${p.name} live site`}
                className="transition-colors hover:text-accent"
              >
                <ExternalIcon width={18} height={18} />
              </a>
            )}
          </div>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-fg-soft">
          {p.description}
        </p>
        <TechList tech={p.tech} />
      </div>
    </li>
  );
}

export default function Work() {
  return (
    <Section id="work" label="Work">
      <Reveal>
        <p className="mb-8 max-w-lg text-fg-soft">
          A selection of products I've designed and built end-to-end — from
          school platforms used by thousands daily to real-estate, logistics,
          and assessment systems.
        </p>
      </Reveal>

      <ul className="grid gap-6">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.06}>
            <FeaturedCard p={p} />
          </Reveal>
        ))}
      </ul>

      <Reveal delay={0.1}>
        <a
          href="/archive/"
          className="group mt-10 inline-flex items-center font-semibold text-fg"
        >
          View Full Project Archive
          <span className="ml-2 font-normal text-fg-muted">
            ({archiveTable.length})
          </span>
          <ArrowUpRight
            width={16}
            height={16}
            className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      </Reveal>
    </Section>
  );
}
