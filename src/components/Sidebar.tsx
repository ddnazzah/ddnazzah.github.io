import { site, socials } from "../data/content";
import { socialIconMap } from "./icons";
import { useActiveSection } from "../hooks/useActiveSection";

const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const active = useActiveSection(NAV.map((n) => n.id));

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[38%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <h1 className="text-[clamp(2.5rem,5vw,3.25rem)] font-bold tracking-tight text-fg">
          <a href="#top" className="hover:text-accent transition-colors">
            {site.name}
          </a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-fg sm:text-xl">
          {site.role}
        </h2>
        <p className="mt-4 max-w-xs leading-relaxed text-fg-soft">
          {site.tagline}
        </p>

        {/* In-page nav (large screens) */}
        <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
          <ul className="space-y-4">
            {NAV.map((item) => {
              const isActive = active === item.id;
              return (
                <li key={item.id}>
                  <a href={`#${item.id}`} className="group flex items-center py-2">
                    <span
                      className={`mr-4 h-px bg-fg-muted transition-all duration-300 ${
                        isActive
                          ? "w-16 bg-accent"
                          : "w-8 group-hover:w-16 group-hover:bg-fg"
                      }`}
                    />
                    <span
                      className={`text-xs font-semibold uppercase tracking-widest transition-colors ${
                        isActive
                          ? "text-accent"
                          : "text-fg-muted group-hover:text-fg"
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <ul className="mt-8 flex items-center gap-5" aria-label="Social links">
        {socials.map((s) => {
          const Icon = socialIconMap[s.icon];
          return (
            <li key={s.label}>
              <a
                href={s.url}
                target={s.icon === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="block text-fg-muted transition-all hover:-translate-y-1 hover:text-accent"
              >
                <Icon width={22} height={22} />
              </a>
            </li>
          );
        })}
        {site.resumeUrl && (
          <li>
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full border border-line px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-fg-soft transition-colors hover:border-accent hover:text-accent"
            >
              Résumé
            </a>
          </li>
        )}
      </ul>
    </header>
  );
}
