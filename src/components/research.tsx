import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { SectionHeading } from "@/components/section";
import { research } from "@/lib/portfolio";

function Chart() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);

  if (!ready) {
    return <div className="h-56 rounded-md bg-subtle" aria-hidden />;
  }

  return (
    <div className="h-56">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={research.chart} margin={{ top: 12, right: 4, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="var(--line)" vertical={false} />
          <XAxis
            dataKey="phase"
            tick={{ fill: "var(--ink-faint)", fontSize: 11, fontFamily: "IBM Plex Mono" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              background: "var(--panel)",
              border: "1px solid var(--line)",
              borderRadius: 8,
              fontSize: 12,
            }}
            formatter={(value) => [`${value} images`, "Dataset"]}
          />
          <Area
            type="monotone"
            dataKey="images"
            stroke="var(--steel)"
            fill="var(--steel)"
            fillOpacity={0.16}
            name="Images"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export function Research() {
  const { matrix } = research;

  return (
    <section id="research" className="scroll-mt-20 border-y border-line bg-panel px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          number="02"
          kicker="Research"
          title={research.name}
          muted="— field photos, not lab crops."
        >
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted">
            {research.thesis}
          </p>
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-xl border border-line bg-canvas p-6 shadow-panel sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                Dataset growth · accuracy
              </p>
              <span className="font-mono text-micro text-ok">{research.status}</span>
            </div>
            <Chart />
            <ol className="mt-8 grid gap-4 sm:grid-cols-3">
              {research.phases.map((phase) => (
                <li key={phase.phase} className="border-t border-line pt-4">
                  <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                    {phase.phase} · N={phase.n}
                  </p>
                  <p className="mt-2 text-sm font-medium">{phase.title}</p>
                  <p className="mt-1 font-mono text-sm text-steel">{phase.result}</p>
                  <p className="mt-2 text-xs leading-5 text-ink-muted">{phase.note}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-3">
              {research.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-lg border border-line bg-canvas p-4 shadow-panel"
                >
                  <p className="font-mono text-micro uppercase tracking-caps text-ink-faint">
                    {metric.label}
                  </p>
                  <p className="mt-2 font-display text-3xl tracking-tight tabular-nums">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-ink-muted">{metric.hint}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-line bg-canvas p-5 shadow-panel">
              <p className="mb-4 font-mono text-micro uppercase tracking-caps text-ink-faint">
                Held-out confusion · 80 images
              </p>
              <div className="grid grid-cols-[4.5rem_1fr_1fr] gap-2 text-center text-xs">
                <span />
                <span className="text-ink-faint">Pred leaf</span>
                <span className="text-ink-faint">Pred not</span>
                <span className="flex items-center justify-end pr-1 text-ink-faint">
                  Leaf
                </span>
                <div className="rounded-md bg-ok/15 py-5">
                  <p className="font-mono text-lg tabular-nums text-ink">{matrix.tp}</p>
                  <p className="text-ink-faint">TP</p>
                </div>
                <div className="rounded-md bg-subtle py-5">
                  <p className="font-mono text-lg tabular-nums">{matrix.fn}</p>
                  <p className="text-ink-faint">FN</p>
                </div>
                <span className="flex items-center justify-end pr-1 text-ink-faint">
                  Not
                </span>
                <div className="rounded-md bg-subtle py-5">
                  <p className="font-mono text-lg tabular-nums">{matrix.fp}</p>
                  <p className="text-ink-faint">FP</p>
                </div>
                <div className="rounded-md bg-ok/15 py-5">
                  <p className="font-mono text-lg tabular-nums text-ink">{matrix.tn}</p>
                  <p className="text-ink-faint">TN</p>
                </div>
              </div>
            </div>

            <a
              href={research.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-between rounded-lg border border-line bg-canvas px-5 text-sm font-medium transition-colors duration-150 hover:border-line-strong"
            >
              Read the paper on GitHub
              <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
