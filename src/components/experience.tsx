import { MapPin } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/section";
import { experience, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function Experience() {
  const [active, setActive] = useState(0);
  const [chapter, setChapter] = useState(0);
  const role = experience[active];
  if (!role) return null;
  const current = role.chapters[chapter] ?? role.chapters[0];

  return (
    <section id="experience" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="03"
          kicker="Experience"
          title="Five years in"
          muted="production seats."
        />

        <div className="grid gap-10 lg:grid-cols-[0.34fr_0.66fr]">
          <div>
            <div className="space-y-2">
              {experience.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => {
                    setActive(index);
                    setChapter(0);
                  }}
                  className={cn(
                    "flex w-full items-start justify-between rounded-lg border px-4 py-4 text-left transition-colors duration-150",
                    active === index
                      ? "border-line-strong bg-panel shadow-panel"
                      : "border-transparent hover:bg-subtle",
                  )}
                >
                  <span>
                    <span className="block text-sm font-medium">{item.company}</span>
                    <span className="mt-1 block text-xs text-ink-muted">{item.role}</span>
                  </span>
                  <span className="font-mono text-micro text-ink-faint">{item.period.split("—")[0]}</span>
                </button>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-6">
              <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                Education
              </p>
              <p className="mt-3 text-sm font-medium">{profile.education.degree}</p>
              <p className="mt-1 text-sm text-ink-muted">{profile.education.school}</p>
              <p className="mt-1 font-mono text-micro text-ink-faint">
                {profile.education.years}
              </p>
            </div>
          </div>

          <article className="rounded-xl border border-line bg-panel p-6 shadow-panel sm:p-9">
            <div className="flex flex-col justify-between gap-4 border-b border-line pb-6 sm:flex-row">
              <div>
                <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                  {role.period}
                </p>
                <h3 className="mt-2 font-display text-3xl font-medium tracking-tight">
                  {role.role}
                </h3>
                <p className="mt-1 text-ink-muted">{role.company}</p>
              </div>
              <p className="inline-flex items-center gap-2 text-sm text-ink-muted">
                <MapPin className="size-3.5" />
                {role.location}
              </p>
            </div>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-ink-muted">{role.summary}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {role.tech.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-subtle px-3 py-1.5 font-mono text-micro text-ink-muted"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {role.chapters.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setChapter(index)}
                  className={cn(
                    "h-10 rounded-full px-4 text-sm transition-colors duration-150",
                    chapter === index
                      ? "bg-ink text-canvas"
                      : "border border-line text-ink-muted hover:text-ink",
                  )}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <ul className="mt-8 space-y-4">
              {current?.points.map((point, index) => (
                <li key={point} className="flex gap-4">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-line font-mono text-micro text-ink-faint">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-ink">{point}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
