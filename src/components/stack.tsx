import { SectionHeading } from "@/components/section";
import { skills, stackGroups } from "@/lib/portfolio";

export function Stack() {
  return (
    <section id="stack" className="scroll-mt-20 border-y border-line px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="04"
          kicker="Engineering focus"
          title="I think in systems,"
          muted="not tickets."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill.number} className="bg-canvas p-7 transition-colors duration-200 hover:bg-panel">
              <div className="mb-10 flex items-center justify-between">
                <span className="font-mono text-micro text-ink-faint">{skill.number}</span>
                <span className="h-px w-10 bg-line" />
              </div>
              <h3 className="text-xl font-medium tracking-tight">{skill.title}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-ink-muted">
                {skill.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line px-2.5 py-1 font-mono text-micro text-ink-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stackGroups.map((group) => (
            <div key={group.label}>
              <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                {group.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
