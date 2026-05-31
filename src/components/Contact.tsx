import { site } from "../data/content";
import Reveal from "./Reveal";
import Section from "./Section";

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <Reveal>
        <div className="text-center sm:text-left">
          <p className="font-mono text-sm text-accent">What's next?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
            Get in touch
          </h2>
          <p className="mt-4 max-w-md text-fg-soft sm:mx-0 mx-auto">
            I'm always open to discussing new products, engineering leadership,
            or interesting problems to solve. Whether you have a question or just
            want to say hello, my inbox is open.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block rounded-lg border border-accent px-7 py-4 font-mono text-sm font-medium text-accent transition-colors hover:bg-accent-soft"
          >
            Say Hello
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
