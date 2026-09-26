import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { StatusDot } from "@/components/section";
import { profile, signals } from "@/lib/portfolio";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-rule opacity-70" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)] lg:py-28">
        <div>
          <div className="animate-fade-up mb-8 flex flex-wrap items-center gap-3">
            <StatusDot />
            <span className="font-mono text-micro uppercase tracking-caps text-ink-muted">
              {profile.availability}
            </span>
          </div>

          <p className="animate-fade-up stagger-1 font-mono text-micro uppercase tracking-caps text-ink-faint">
            {profile.name} · {profile.title}
          </p>

          <h1 className="animate-fade-up stagger-2 mt-5 max-w-4xl font-display text-display font-medium tracking-display text-ink">
            Production systems
            <br />
            for{" "}
            <em className="italic text-ink-muted">the failure path.</em>
          </h1>

          <span className="animate-rule-in stagger-3 mt-8 block h-px w-24 bg-line-strong" />

          <p className="animate-fade-up stagger-4 mt-8 max-w-xl text-lg leading-8 text-ink-muted">
            Five years shipping event-driven services, Stripe workflows, real-time
            infrastructure, and AI products — with particular attention to retries,
            evidence, and the parts that break at 2 a.m.
          </p>

          <div className="animate-fade-up stagger-5 mt-10 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-canvas transition-transform duration-150 hover:opacity-90 active:scale-[0.96]"
            >
              Selected work
              <ArrowDownRight className="size-4" />
            </a>
            <Link
              to="/resume"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium text-ink transition-transform duration-150 hover:border-line-strong hover:bg-subtle active:scale-[0.96]"
            >
              Read résumé
            </Link>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-5 text-sm font-medium text-ink transition-transform duration-150 hover:border-line-strong hover:bg-subtle active:scale-[0.96]"
            >
              Email
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-muted">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4" />
              {profile.location}
            </span>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink"
            >
              GitHub
              <ArrowUpRight className="size-3.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-ink"
            >
              LinkedIn
              <ArrowUpRight className="size-3.5" />
            </a>
          </div>
        </div>

        <aside className="animate-fade-up stagger-4 self-center">
          <div className="rounded-xl border border-line bg-panel p-6 shadow-panel sm:p-7">
            <div className="mb-6 flex items-center justify-between border-b border-line pb-4">
              <div>
                <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                  Dossier
                </p>
                <p className="mt-1 text-sm font-medium">{profile.name}</p>
              </div>
              <StatusDot label="Open" />
            </div>

            <dl className="space-y-3 font-mono text-xs">
              {signals.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4">
                  <dt className="uppercase tracking-caps text-ink-faint">{row.label}</dt>
                  <dd className="text-right text-ink">{row.value}</dd>
                </div>
              ))}
              <div className="flex items-baseline justify-between gap-4">
                <dt className="uppercase tracking-caps text-ink-faint">Languages</dt>
                <dd className="text-right text-ink">NP · EN · JA</dd>
              </div>
            </dl>

            <div className="mt-6 rounded-md border border-dashed border-line px-4 py-3">
              <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                Building
              </p>
              <p className="mt-1 text-sm">{profile.now}</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
