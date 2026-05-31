import { about, stats } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function About() {
  return (
    <Section id="about" label="About">
      <Reveal>
        <div className="space-y-4 text-base leading-relaxed text-fg-soft">
          {about.paragraphs.map((html, i) => (
            <p
              key={i}
              className="[&_a]:font-medium [&_a]:text-fg [&_a]:transition-colors hover:[&_a]:text-accent [&_strong]:font-semibold [&_strong]:text-fg"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <dl className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-2 px-5 py-6">
              <dt className="font-mono text-2xl font-semibold text-accent sm:text-3xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-fg-muted">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}
