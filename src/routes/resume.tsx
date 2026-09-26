import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";
import { experience, profile, projects, research, stackGroups } from "@/lib/portfolio";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  head: () => ({
    meta: [{ title: "Résumé — Ranjan Bhattarai" }],
  }),
});

function ResumePage() {
  return (
    <div className="min-h-dvh bg-canvas text-ink">
      <div className="no-print mx-auto flex max-w-3xl items-center justify-between px-5 py-5">
        <Link
          to="/"
          className="inline-flex h-11 items-center gap-2 rounded-full border border-line px-4 text-sm"
        >
          <ArrowLeft className="size-4" />
          Back to site
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-canvas"
        >
          <Printer className="size-4" />
          Print
        </button>
      </div>

      <article className="mx-auto max-w-3xl px-5 pb-20">
        <header className="border-b border-line pb-6">
          <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
            Curriculum vitae
          </p>
          <h1 className="mt-3 font-display text-4xl font-medium tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 text-ink-muted">{profile.title}</p>
          <p className="mt-4 text-sm leading-6 text-ink-muted">
            {profile.location} · {profile.phone} · {profile.email}
          </p>
          <p className="mt-1 text-sm">
            <a href={profile.linkedin} className="underline decoration-line underline-offset-4">
              LinkedIn
            </a>
            <span className="mx-2 text-ink-faint">·</span>
            <a href={profile.github} className="underline decoration-line underline-offset-4">
              GitHub
            </a>
          </p>
        </header>

        <section className="mt-8">
          <h2 className="font-mono text-micro uppercase tracking-caps text-ink-faint">
            Summary
          </h2>
          <p className="mt-3 text-sm leading-7 text-ink">
            Senior Backend / Full-Stack Engineer with 5+ years building production
            systems in Node.js, TypeScript, PostgreSQL, Redis, Kafka, and AWS.
            Experienced in REST and real-time APIs, event-driven architecture,
            Stripe payments, database performance, and AI-powered products.
            Available immediately for remote, hybrid, or on-site work.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-micro uppercase tracking-caps text-ink-faint">
            Skills
          </h2>
          <dl className="mt-4 space-y-2 text-sm">
            {stackGroups.map((group) => (
              <div key={group.label} className="grid gap-1 sm:grid-cols-[7rem_1fr]">
                <dt className="font-medium">{group.label}</dt>
                <dd className="text-ink-muted">{group.items.join(", ")}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-micro uppercase tracking-caps text-ink-faint">
            Experience
          </h2>
          {experience.map((role) => (
            <div key={role.company} className="mt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-medium">
                  {role.role} — {role.company}
                </h3>
                <p className="font-mono text-micro text-ink-faint">{role.period}</p>
              </div>
              <p className="mt-1 text-xs text-ink-muted">{role.location}</p>
              {role.chapters.map((chapter) => (
                <div key={chapter.title} className="mt-3">
                  <p className="text-sm font-medium">{chapter.title}</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 text-sm leading-6 text-ink">
                    {chapter.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-micro uppercase tracking-caps text-ink-faint">
            Selected projects
          </h2>
          <ul className="mt-4 space-y-4">
            {projects.map((project) => (
              <li key={project.name}>
                <p className="text-sm font-medium">
                  {project.name}
                  <span className="ml-2 font-mono text-micro font-normal text-ink-faint">
                    {project.status}
                  </span>
                </p>
                <p className="mt-1 text-sm leading-6 text-ink-muted">{project.summary}</p>
                <p className="mt-1 font-mono text-micro text-ink-faint">
                  {project.tech.join(" · ")}
                </p>
              </li>
            ))}
            <li>
              <p className="text-sm font-medium">
                {research.name}
                <span className="ml-2 font-mono text-micro font-normal text-ink-faint">
                  {research.status}
                </span>
              </p>
              <p className="mt-1 text-sm leading-6 text-ink-muted">{research.thesis}</p>
              <p className="mt-1 font-mono text-micro text-ink-faint">
                Test accuracy 96.25% · ROC-AUC 0.988 · PyTorch
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-micro uppercase tracking-caps text-ink-faint">
            Education
          </h2>
          <p className="mt-3 text-sm font-medium">{profile.education.degree}</p>
          <p className="text-sm text-ink-muted">
            {profile.education.school} · {profile.education.years}
          </p>
        </section>

        <section className="mt-10">
          <h2 className="font-mono text-micro uppercase tracking-caps text-ink-faint">
            Additional
          </h2>
          <p className="mt-3 text-sm text-ink">
            Languages: {profile.languages.map((item) => `${item.name} (${item.level})`).join(" · ")}
          </p>
          <p className="mt-1 text-sm text-ink">{profile.availability}</p>
        </section>
      </article>
    </div>
  );
}
