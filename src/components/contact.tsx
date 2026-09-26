import { ArrowUpRight, Check, Copy } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/portfolio";

export function Contact() {
  const [copied, setCopied] = useState<"email" | "phone" | null>(null);

  const copy = async (value: string, key: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(key);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="contact" className="scroll-mt-20 px-5 pb-10 sm:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-xl bg-ink text-canvas">
        <div className="relative px-7 py-16 sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-rule opacity-20" />
          <div className="relative max-w-3xl">
            <p className="mb-6 font-mono text-micro uppercase tracking-caps text-canvas/40">
              06 / Contact
            </p>
            <h2 className="font-display text-display font-medium tracking-display">
              Let’s build
              <br />
              something
              <br />
              <em className="italic text-canvas/40">that holds.</em>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-canvas/60">
              A payment flow that must be honest, a distributed workflow that must
              not lose work, an AI product that has to live in production — write.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-canvas px-6 text-sm font-medium text-ink transition-transform duration-150 hover:opacity-90 active:scale-[0.96]"
              >
                Send an email
                <ArrowUpRight className="size-4" />
              </a>
              <button
                type="button"
                onClick={() => void copy(profile.email, "email")}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-canvas/20 px-6 text-sm font-medium text-canvas transition-transform duration-150 hover:bg-canvas/10 active:scale-[0.96]"
              >
                {copied === "email" ? (
                  <>
                    <Check className="size-4" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="size-4" /> Copy email
                  </>
                )}
              </button>
              <a
                href={profile.phoneHref}
                className="inline-flex h-12 items-center justify-center rounded-full border border-canvas/20 px-6 text-sm font-medium text-canvas transition-transform duration-150 hover:bg-canvas/10 active:scale-[0.96]"
              >
                {profile.phone}
              </a>
            </div>

            <p className="mt-8 font-mono text-xs text-canvas/40">{profile.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
