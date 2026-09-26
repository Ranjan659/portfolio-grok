import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Research } from "@/components/research";
import { SectionRail, SiteFooter, SiteNav } from "@/components/shell";
import { Stack } from "@/components/stack";
import { Work } from "@/components/work";
import { nav } from "@/lib/portfolio";

export const Route = createFileRoute("/")({ component: Home });

const SECTION_IDS = nav.map((item) => item.id);

function Home() {
  const [active, setActive] = useState(SECTION_IDS[0] ?? "work");

  useEffect(() => {
    const observers = SECTION_IDS.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) setActive(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        Skip to work
      </a>
      <SiteNav />
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl 2xl:grid 2xl:grid-cols-[10rem_minmax(0,1fr)]">
          <SectionRail active={active} />
          <div className="min-w-0">
            <Work />
            <Research />
            <Experience />
            <Stack />
            <About />
            <Contact />
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
