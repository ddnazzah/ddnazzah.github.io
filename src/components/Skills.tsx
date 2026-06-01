import { skills } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills" label="Skills">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={(i % 2) * 0.06}>
            <div className="h-full rounded-xl border border-line/60 bg-panel/20 p-7">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-accent">
                {group.group}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-ink-2 px-3 py-1.5 text-sm text-fg-soft transition-colors hover:border-accent/40 hover:text-fg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
