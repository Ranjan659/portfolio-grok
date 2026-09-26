import { useRef, useState, type KeyboardEvent } from "react";
import { SectionHeading } from "@/components/section";
import { aboutPoints, profile, terminalHelp } from "@/lib/portfolio";

const replies: Record<string, string[]> = {
  help: terminalHelp,
  whoami: [profile.title, profile.location, "5+ years in production backends"],
  now: [profile.now, profile.availability],
  about: [
    "I work on the layer between an idea and a system that survives contact with users, money, and time.",
  ],
  stack: [
    "Node.js · TypeScript · PostgreSQL · Kafka · Redis · AWS · Next.js · OpenRouter",
  ],
  work: [
    "IncidentLens · AI Workspace · Skysales · MBN Torihiki · Mizulino",
  ],
  projects: [
    "IncidentLens · AI Workspace · Skysales · MBN Torihiki · Mizulino",
  ],
  research: [
    "Cardamom Leaf Classifier — Phase 3 complete.",
    "522 field images. Test accuracy 96.25%. ROC-AUC 0.988. 3 errors in 80 held-out.",
    "github.com/Ranjan659/Cardamom-leaf-classifier",
  ],
  experience: ["Unibird, Tokyo remote — Dec 2020 to Feb 2026", "Defactori, Kathmandu — intern 2020"],
  contact: [profile.email, profile.phone],
  resume: ["Open /resume — a print-ready version of the CV."],
  languages: ["Nepali (native) · English (professional) · Japanese (basic)"],
};

function runCommand(input: string): string[] {
  const value = input.trim().toLowerCase();
  if (!value) return [];
  if (value === "open github") return [`opening ${profile.github}`];
  if (value === "open linkedin") return [`opening ${profile.linkedin}`];
  if (value === "open research") {
    return ["opening https://github.com/Ranjan659/Cardamom-leaf-classifier"];
  }
  return replies[value] ?? [`command not found: ${value}  —  try help`];
}

export function About() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "welcome. type help — or just read the column on the left.",
  ]);
  const [commands, setCommands] = useState<string[]>([]);
  const [cursor, setCursor] = useState(-1);
  const listRef = useRef<HTMLDivElement>(null);

  const execute = (raw: string) => {
    const value = raw.trim();
    if (!value) return;
    if (value.toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    const lower = value.toLowerCase();
    if (lower === "open github") window.open(profile.github, "_blank", "noreferrer");
    if (lower === "open linkedin") window.open(profile.linkedin, "_blank", "noreferrer");
    if (lower === "open research") {
      window.open(
        "https://github.com/Ranjan659/Cardamom-leaf-classifier",
        "_blank",
        "noreferrer",
      );
    }
    const next = [`$ ${value}`, ...runCommand(value)];
    setHistory((current) => [...current, ...next]);
    setCommands((current) => [...current, value]);
    setCursor(-1);
    setInput("");
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
    });
  };

  const onKey = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") return;
    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (commands.length === 0) return;
      const next = cursor < 0 ? commands.length - 1 : Math.max(0, cursor - 1);
      setCursor(next);
      setInput(commands[next] ?? "");
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (cursor < 0) return;
      const next = cursor + 1;
      if (next >= commands.length) {
        setCursor(-1);
        setInput("");
      } else {
        setCursor(next);
        setInput(commands[next] ?? "");
      }
    }
    if (event.key === "Tab") {
      event.preventDefault();
      const match = Object.keys(replies).find((key) =>
        key.startsWith(input.trim().toLowerCase()),
      );
      if (match) setInput(match);
    }
  };

  return (
    <section id="about" className="scroll-mt-20 px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeading
            number="05"
            kicker="About"
            title="How the work"
            muted="is actually done."
          />
          <p className="max-w-xl text-base leading-8 text-ink-muted">
            I like the unglamorous layer: the webhook that must not double-charge,
            the consumer that must not replay, the socket that must not leak, the
            query that must not sequential-scan a million orders. Currently building
            IncidentLens and an AI workspace on that same instinct.
          </p>
          <ul className="mt-10 space-y-8">
            {aboutPoints.map((point) => (
              <li key={point.title}>
                <h3 className="text-sm font-medium">{point.title}</h3>
                <p className="mt-2 text-sm leading-7 text-ink-muted">{point.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="overflow-hidden rounded-xl border border-ink/80 bg-ink text-canvas shadow-panel">
          <div className="flex items-center justify-between border-b border-canvas/10 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="size-2.5 rounded-full bg-canvas/25" />
              <span className="size-2.5 rounded-full bg-canvas/25" />
              <span className="size-2.5 rounded-full bg-canvas/25" />
            </div>
            <span className="font-mono text-micro text-canvas/40">ranjan@portfolio</span>
            <span className="font-mono text-micro text-canvas/40">zsh</span>
          </div>
          <div ref={listRef} className="h-80 overflow-y-auto p-5 font-mono text-xs leading-6">
            <p className="text-canvas/40">last login · bhaktapur</p>
            <p className="mt-3 text-ok">
              <span className="text-canvas/40">~</span> % whoami
            </p>
            <p className="text-canvas/80">{profile.title}</p>
            <div className="mt-4 space-y-1 text-canvas/55">
              {history.map((line, index) => (
                <p key={`${line}-${index}`}>{line}</p>
              ))}
            </div>
            <form
              className="mt-4 flex items-center text-ok"
              onSubmit={(event) => {
                event.preventDefault();
                const field = event.currentTarget.elements.namedItem("command");
                const value =
                  field instanceof HTMLInputElement ? field.value : input;
                execute(value);
              }}
            >
              <span className="text-canvas/40">~</span>
              <span className="ml-2">%</span>
              <input
                name="command"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onKey}
                className="min-w-0 flex-1 bg-transparent pl-2 text-canvas outline-none placeholder:text-canvas/25"
                placeholder="help"
                aria-label="Terminal command"
                autoComplete="off"
                spellCheck={false}
                suppressHydrationWarning
                style={{ caretColor: "transparent" }}
              />
              <span className="animate-caret">▍</span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
