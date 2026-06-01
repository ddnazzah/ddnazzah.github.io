import { experience, education, site } from "../data/content";
import { ArrowUpRight } from "./icons";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="group/list space-y-3">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.05}>
            <li className="relative">
              <div className="group relative grid gap-3 rounded-lg p-4 transition-all sm:grid-cols-8 sm:gap-6 lg:p-5 lg:hover:bg-panel/40 lg:hover:shadow-[inset_0_1px_0_rgba(134,223,166,0.12)] lg:group-hover/list:opacity-50 lg:hover:!opacity-100">
                <header className="z-10 mt-1 text-xs font-semibold uppercase tracking-wide text-fg-muted sm:col-span-2">
                  {job.start} — {job.end}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-semibold text-fg">
                    {job.title}
                    <span className="text-fg"> · </span>
                    {job.url ? (
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-accent hover:underline"
                      >
                        {job.company}
                        <ArrowUpRight width={14} height={14} />
                      </a>
                    ) : (
                      <span className="text-accent">{job.company}</span>
                    )}
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-fg-soft">
                    {job.points.map((p, j) => (
                      <li key={j} className="relative pl-5">
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent/60" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={0.1}>
        <div className="mt-8 flex flex-col gap-2 rounded-lg border border-line/70 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-fg">{education.degree}</p>
            <p className="text-sm text-fg-soft">{education.school}</p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wide text-fg-muted">
            {education.start} — {education.end}
          </span>
        </div>
      </Reveal>

      {site.resumeUrl && (
        <Reveal delay={0.15}>
          <a
            href={site.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center font-semibold text-fg"
          >
            View Full Résumé
            <ArrowUpRight
              width={16}
              height={16}
              className="ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>
      )}
    </Section>
  );
}
