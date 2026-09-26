import { Link } from "@tanstack/react-router";
import { Command } from "cmdk";
import {
  ArrowUpRight,
  Copy,
  FileText,
  Github,
  Mail,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import { nav, profile } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, ready, toggle } = useTheme();

  if (!ready) {
    return (
      <span className="size-11 rounded-full border border-line" aria-hidden />
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 border-b transition-colors duration-200",
          scrolled
            ? "border-line bg-canvas/80 backdrop-blur-xl"
            : "border-transparent bg-canvas/40 backdrop-blur-md",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="font-mono text-sm font-medium tracking-tight">
              {profile.shortName}
              <span className="text-ink-faint">.</span>
            </span>
            <span className="hidden font-mono text-micro text-ink-faint sm:inline">
              engineer
            </span>
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm text-ink-muted transition-colors duration-150 hover:text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <kbd className="hidden rounded-full border border-line px-2.5 py-1 font-mono text-micro text-ink-faint md:inline">
              ⌘K
            </kbd>
            <Link
              to="/resume"
              className="hidden h-11 items-center rounded-full bg-ink px-4 text-sm font-medium text-canvas transition-transform duration-150 hover:opacity-90 active:scale-[0.96] sm:inline-flex"
            >
              Résumé
            </Link>
            <ThemeToggle />
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-30 bg-canvas px-5 pt-24 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-14 items-center justify-between border-b border-line text-lg"
              >
                <span>{item.label}</span>
                <span className="font-mono text-micro text-ink-faint">
                  {item.number}
                </span>
              </a>
            ))}
            <Link
              to="/resume"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-ink text-sm font-medium text-canvas"
            >
              Résumé
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}

export function SectionRail({ active }: { active: string }) {
  return (
    <aside className="hidden 2xl:block">
      <nav className="sticky top-28 px-3 py-24" aria-label="On this page">
        <ol className="space-y-1 border-l border-line">
          {nav.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={cn(
                    "-ml-px flex items-center gap-3 border-l py-2 pl-4 font-mono text-micro uppercase tracking-caps transition-colors duration-150",
                    isActive
                      ? "border-steel text-ink"
                      : "border-transparent text-ink-faint hover:text-ink-muted",
                  )}
                >
                  <span>{item.number}</span>
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
    </aside>
  );
}

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const { toggle } = useTheme();

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((v) => !v);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noreferrer");
      return;
    }
    if (href.startsWith("/")) {
      window.location.assign(href);
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 px-4 pt-[12vh] backdrop-blur-sm">
      <button
        type="button"
        className="absolute inset-0 cursor-default"
        aria-label="Close command menu"
        onClick={() => setOpen(false)}
      />
      <Command
        label="Command menu"
        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-line bg-panel shadow-panel"
      >
        <div className="flex items-center gap-2 border-b border-line px-4">
          <Command.Input
            autoFocus
            placeholder="Jump, copy, or open…"
            className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-faint"
          />
          <span className="font-mono text-micro text-ink-faint">ESC</span>
        </div>
        <Command.List className="max-h-80 overflow-y-auto p-2">
          <Command.Empty className="px-3 py-6 text-sm text-ink-muted">
            Nothing matches.
          </Command.Empty>
          <Command.Group heading="Navigate" className="px-2 py-1 text-micro uppercase tracking-caps text-ink-faint">
            {nav.map((item) => (
              <Command.Item
                key={item.id}
                value={item.label}
                onSelect={() => go(item.href)}
                className="flex cursor-pointer items-center justify-between rounded-md px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-subtle"
              >
                {item.label}
                <span className="font-mono text-micro text-ink-faint">
                  {item.number}
                </span>
              </Command.Item>
            ))}
            <Command.Item
              value="resume"
              onSelect={() => go("/resume")}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-subtle"
            >
              <FileText className="size-4 text-ink-faint" />
              Résumé
            </Command.Item>
          </Command.Group>
          <Command.Group heading="Actions" className="mt-2 px-2 py-1 text-micro uppercase tracking-caps text-ink-faint">
            <Command.Item
              value="copy email"
              onSelect={() => {
                void copyEmail();
              }}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-subtle"
            >
              <Copy className="size-4 text-ink-faint" />
              {copied ? "Copied" : "Copy email"}
            </Command.Item>
            <Command.Item
              value="email"
              onSelect={() => go(`mailto:${profile.email}`)}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-subtle"
            >
              <Mail className="size-4 text-ink-faint" />
              Write an email
            </Command.Item>
            <Command.Item
              value="github"
              onSelect={() => go(profile.github)}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-subtle"
            >
              <Github className="size-4 text-ink-faint" />
              GitHub
            </Command.Item>
            <Command.Item
              value="linkedin"
              onSelect={() => go(profile.linkedin)}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-subtle"
            >
              <ArrowUpRight className="size-4 text-ink-faint" />
              LinkedIn
            </Command.Item>
            <Command.Item
              value="toggle theme"
              onSelect={() => {
                toggle();
                setOpen(false);
              }}
              className="flex cursor-pointer items-center gap-2 rounded-md px-3 py-2.5 text-sm data-[selected=true]:bg-subtle"
            >
              <Sun className="size-4 text-ink-faint" />
              Toggle theme
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 sm:flex-row sm:items-end sm:justify-between sm:px-8">
        <div>
          <p className="text-sm font-medium">{profile.name}</p>
          <p className="mt-1 text-sm text-ink-muted">{profile.title}</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-ink-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-ink">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-ink">
            Email
          </a>
          <Link to="/resume" className="hover:text-ink">
            Résumé
          </Link>
        </div>
        <p className="font-mono text-micro text-ink-faint">
          © {new Date().getFullYear()} · Press ⌘K
        </p>
      </div>
    </footer>
  );
}
