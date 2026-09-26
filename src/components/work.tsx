import { ArrowUpRight, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SectionHeading, StatusDot } from "@/components/section";
import {
  projects,
  traceEvents,
  traceNodes,
  type Project,
} from "@/lib/portfolio";
import { cn } from "@/lib/utils";

function TracePlay() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const visible = useRef(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        visible.current = Boolean(entry?.isIntersecting);
        if (entry?.isIntersecting) setPlaying(true);
      },
      { threshold: 0.35 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStep(traceEvents.length - 1);
      return;
    }
    const id = window.setInterval(() => {
      setStep((current) => {
        if (!visible.current) return current;
        return current + 1 >= traceEvents.length ? 0 : current + 1;
      });
    }, 1100);
    return () => window.clearInterval(id);
  }, [playing]);

  const activeNode = traceEvents[step]?.node ?? 0;
  const log = traceEvents.slice(0, step + 1);

  return (
    <div ref={rootRef} className="relative overflow-hidden bg-subtle p-6 sm:p-8">
      <div className="pointer-events-none absolute inset-0 bg-rule opacity-50" />
      <div className="relative">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
              Live trace
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Evidence-first incident pipeline
            </p>
          </div>
          <div className="flex items-center gap-3">
            <StatusDot label="Streaming" />
            <button
              type="button"
              onClick={() => setPlaying((v) => !v)}
              className="inline-flex size-10 items-center justify-center rounded-full border border-line bg-panel"
              aria-label={playing ? "Pause trace" : "Play trace"}
            >
              {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
            </button>
          </div>
        </div>

        <ol className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {traceNodes.map((node, index) => {
            const on = index <= activeNode;
            const current = index === activeNode;
            return (
              <li
                key={node.id}
                className={cn(
                  "rounded-md border px-3 py-3 transition-colors duration-200",
                  current
                    ? "border-ink bg-ink text-canvas"
                    : on
                      ? "border-line-strong bg-panel"
                      : "border-line bg-panel/60 text-ink-muted",
                )}
              >
                <p className="font-mono text-micro uppercase tracking-caps opacity-70">
                  0{index + 1}
                </p>
                <p className="mt-1 text-sm font-medium">{node.label}</p>
                <p
                  className={cn(
                    "mt-0.5 text-micro",
                    current ? "text-canvas/70" : "text-ink-faint",
                  )}
                >
                  {node.detail}
                </p>
              </li>
            );
          })}
        </ol>

        <div className="mt-6 min-h-44 rounded-md border border-line bg-canvas/80 p-4 font-mono text-micro leading-6 text-ink-muted">
          {log.map((event, index) => (
            <p
              key={`${event.t}-${event.line}`}
              className={cn(
                "tabular-nums",
                index === log.length - 1 ? "text-ink" : "",
              )}
            >
              <span className="text-steel">{event.t}</span>
              <span className="mx-3 text-ink-faint">│</span>
              {event.line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-micro text-ink-faint">{project.number}</span>
        <span className="rounded-full border border-line px-2.5 py-1 font-mono text-micro uppercase tracking-caps text-ink-muted">
          {project.status}
        </span>
      </div>
      <p className="mt-10 font-mono text-micro uppercase tracking-caps text-ink-faint">
        {project.category}
      </p>
      <h3 className="mt-2 flex items-center gap-2 font-display text-2xl font-medium tracking-tight">
        {project.name}
        {project.href ? (
          <ArrowUpRight className="size-4 text-ink-faint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        ) : null}
      </h3>
      <p className="mt-3 text-sm leading-6 text-ink-muted">{project.summary}</p>
      {project.extraLinks ? (
        <div className="mt-5 flex gap-4">
          {project.extraLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="relative z-10 font-mono text-micro text-ink-muted underline decoration-line underline-offset-4 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      ) : null}
      <div className="mt-auto flex flex-wrap gap-x-3 gap-y-1 border-t border-line pt-5 font-mono text-micro text-ink-faint">
        {project.tech.map((item) => (
          <span key={item}>#{item.replaceAll(" ", "-").toLowerCase()}</span>
        ))}
      </div>
    </>
  );

  return (
    <article className="group relative flex min-h-80 flex-col rounded-xl border border-line bg-panel p-6 shadow-panel transition-colors duration-200 hover:border-line-strong sm:p-7">
      {inner}
      {project.href ? (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="absolute inset-0 rounded-xl"
          aria-label={`Open ${project.name}`}
        />
      ) : null}
    </article>
  );
}

export function Work() {
  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="work" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="01"
          kicker="Selected work"
          title="Systems in production,"
          muted="and the one still being born."
        />

        <div className="overflow-hidden rounded-xl border border-line bg-panel shadow-panel">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="border-b border-line p-7 lg:border-r lg:border-b-0 sm:p-10">
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                  01 / Featured
                </span>
                <span className="rounded-full border border-warn/30 bg-warn/10 px-3 py-1 font-mono text-micro uppercase tracking-caps text-warn">
                  {featured?.status}
                </span>
              </div>
              <p className="mt-14 font-mono text-micro uppercase tracking-caps text-ink-faint">
                {featured?.category}
              </p>
              <h3 className="mt-3 font-display text-4xl font-medium tracking-display sm:text-5xl">
                {featured?.name}
              </h3>
              <p className="mt-5 max-w-md text-base leading-7 text-ink-muted">
                {featured?.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured?.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-subtle px-3 py-1.5 font-mono text-micro text-ink-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <TracePlay />
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {rest.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
