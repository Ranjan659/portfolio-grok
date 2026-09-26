import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  number,
  kicker,
  title,
  muted,
  children,
  className,
}: {
  number: string;
  kicker: string;
  title: string;
  muted?: string;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-12 max-w-3xl", className)}>
      <p className="mb-5 flex items-center gap-3 font-mono text-micro uppercase tracking-caps text-ink-faint">
        <span className="text-steel">{number}</span>
        <span className="h-px w-8 bg-line" />
        {kicker}
      </p>
      <h2 className="font-display text-title font-medium tracking-display text-ink">
        {title}
        {muted ? <span className="text-ink-faint"> {muted}</span> : null}
      </h2>
      {children}
    </header>
  );
}

export function StatusDot({ label }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="relative flex size-2.5">
        <span className="absolute inset-0 rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
        <span className="relative size-2.5 rounded-full bg-ok" />
      </span>
      {label ? (
        <span className="font-mono text-micro uppercase tracking-caps text-ink-muted">
          {label}
        </span>
      ) : null}
    </span>
  );
}
