import { archiveTable, site } from "./data/content";
import { ExternalIcon } from "./components/icons";
import Spotlight from "./components/Spotlight";
import Reveal from "./components/Reveal";

const hasLinks = archiveTable.some((e) => e.link);

export default function ArchivePage() {
  return (
    <div className="relative min-h-screen">
      <Spotlight />

      <div className="mx-auto max-w-5xl px-6 py-16 sm:px-10 md:py-24 lg:px-12">
        <Reveal>
          <a
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-sm font-medium text-accent"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              &#8592;
            </span>
            {site.name}
          </a>

          <h1 className="mt-10 text-4xl font-bold tracking-tight text-fg sm:text-5xl">
            Archive
          </h1>
          <p className="mt-3 text-lg text-fg-soft">
            A big list of products and projects I've designed and built.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <table className="mt-12 w-full border-collapse text-left">
            <thead className="sticky top-0 z-10 bg-ink/80 backdrop-blur-md">
              <tr className="border-b border-line text-xs uppercase tracking-widest text-fg-muted">
                <th className="py-4 pr-6 font-semibold">Year</th>
                <th className="py-4 pr-6 font-semibold">Project</th>
                <th className="hidden py-4 pr-6 font-semibold md:table-cell">
                  Made at
                </th>
                <th className="hidden py-4 pr-6 font-semibold lg:table-cell">
                  Built with
                </th>
                {hasLinks && (
                  <th className="py-4 font-semibold">Link</th>
                )}
              </tr>
            </thead>
            <tbody>
              {archiveTable.map((e) => (
                <tr
                  key={`${e.year}-${e.title}`}
                  className="border-b border-line/50 transition-colors hover:bg-panel/40"
                >
                  <td className="py-4 pr-6 align-top font-mono text-sm text-fg-muted">
                    {e.year}
                  </td>
                  <td className="py-4 pr-6 align-top font-semibold text-fg">
                    {e.title}
                    {/* tech shown inline on small screens where columns are hidden */}
                    <span className="mt-1 block font-mono text-xs font-normal text-fg-muted lg:hidden">
                      {e.builtWith.join(" · ")}
                    </span>
                  </td>
                  <td className="hidden py-4 pr-6 align-top text-sm text-fg-soft md:table-cell">
                    {e.madeAt}
                  </td>
                  <td className="hidden py-4 pr-6 align-top lg:table-cell">
                    <ul className="flex flex-wrap gap-1.5">
                      {e.builtWith.map((t) => (
                        <li
                          key={t}
                          className="rounded-full bg-accent-soft px-2.5 py-0.5 font-mono text-xs text-accent"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </td>
                  {hasLinks && (
                    <td className="py-4 align-top">
                      {e.link && (
                        <a
                          href={e.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${e.title} link`}
                          className="inline-block text-fg-muted transition-colors hover:text-accent"
                        >
                          <ExternalIcon width={18} height={18} />
                        </a>
                      )}
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </div>
    </div>
  );
}
