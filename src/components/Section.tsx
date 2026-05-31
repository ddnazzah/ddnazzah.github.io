import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  children: ReactNode;
};

/**
 * A page section with an id anchor and a sticky, blurred label that appears
 * only on small screens (where the sidebar nav is hidden).
 */
export default function Section({ id, label, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className="scroll-mt-16 py-12 lg:scroll-mt-24 lg:py-20"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-ink/75 px-6 py-4 backdrop-blur-md lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-fg">
          {label}
        </h2>
      </div>
      {children}
    </section>
  );
}
