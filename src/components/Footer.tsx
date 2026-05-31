import { site, socials } from "../data/content";
import { socialIconMap } from "./icons";

export default function Footer() {
  return (
    <footer className="pb-16 pt-8 text-sm text-fg-muted">
      <ul className="mb-4 flex items-center gap-5 lg:hidden">
        {socials.map((s) => {
          const Icon = socialIconMap[s.icon];
          return (
            <li key={s.label}>
              <a
                href={s.url}
                target={s.icon === "email" ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-fg-muted transition-colors hover:text-accent"
              >
                <Icon width={20} height={20} />
              </a>
            </li>
          );
        })}
      </ul>
      <p className="leading-relaxed">
        Designed &amp; built by {site.name}. Coded in a text editor, with{" "}
        <span className="text-fg-soft">React</span>,{" "}
        <span className="text-fg-soft">Tailwind CSS</span>, and{" "}
        <span className="text-fg-soft">Framer Motion</span> — deployed on GitHub
        Pages.
      </p>
    </footer>
  );
}
