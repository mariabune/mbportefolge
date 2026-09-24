import { createFileRoute, Link } from "@tanstack/react-router";

import nangiCover from "@/assets/nangi-cover.png";

export const Route = createFileRoute("/nangi")({
  head: () => ({
    meta: [
      {
        title: "nangi — the personal space of m.b.",
        description:
          "nangi is my little design company: experiments, process notes and the things I learn along the way.",
      },
      { property: "og:title", content: "nangi — the personal space of m.b." },
      {
        property: "og:description",
        content:
          "Experiments, process notes and lessons learned — the notebook page for my design company nangi.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Nangi,
});

const NOTES = [
  {
    kicker: "Note 01",
    title: "What a week of motion taught me about rhythm.",
    bg: "bg-cyan text-paper",
    rotate: "-rotate-1",
  },
  {
    kicker: "Note 02",
    title: "A small experiment with risograph inks.",
    bg: "bg-paper ring-1 ring-ink/15",
    rotate: "rotate-1",
  },
  {
    kicker: "Note 03",
    title: "Why I keep a physical scrapbook next to every project.",
    bg: "bg-flame text-paper",
    rotate: "-rotate-1",
  },
] as const;

function Nangi() {
  return (
    <div className="min-h-screen text-ink">
      {/* Ruled notebook lines + margin line run under everything */}
      <div className="ruled grain pointer-events-none fixed inset-0 -z-10" />


      <div className="pointer-events-none fixed inset-y-0 left-14 z-10 hidden w-px bg-margin/50 md:block" />

      {/* Left margin menu, matching the main notebook */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-14 flex-col items-center justify-between border-r border-margin/60 bg-paper/95 py-6 md:flex">
        <Link to="/" className="font-display text-sm tracking-tight text-ink">
          m.b.
        </Link>
        <nav className="flex flex-col items-center gap-8">
          {[
            { label: "about", href: "#about" },
            { label: "notes", href: "#notes" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label-mono text-ink-soft transition-colors hover:text-flame"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Link
          to="/"
          className="label-mono text-flame transition-colors hover:text-ink"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          back
        </Link>
      </aside>

      <header className="sticky top-0 z-40 border-b border-margin/50 bg-paper/95 px-5 py-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-display text-lg text-ink">
            m.b.
          </Link>
          <Link to="/" className="label-mono text-flame">
            ← back to portefolio
          </Link>
        </div>
      </header>

      <main className="relative md:pl-14">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {/* ---------- HERO ---------- */}
          <section id="about" className="relative pt-16 pb-14 sm:pt-24">
            <div className="anim-drift absolute -top-2 right-6 size-14 rounded-full bg-flame/80 sm:size-20" />
            <p className="label-mono anim-rise text-cyan">
              (my company) — est. 2024
            </p>
            <div className="mt-4 max-w-3xl">
              <h1 className="pen-underline anim-rise inline-block pb-4 font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.9] tracking-tight [animation-delay:80ms]">
                nangi
              </h1>
            </div>
            <p className="hand anim-rise mt-2 text-2xl text-ink-soft [animation-delay:140ms] sm:text-3xl">
              — where I make things on my own terms
            </p>

            <div className="mt-10 grid items-center gap-10 md:grid-cols-12">
              <div className="anim-rise [animation-delay:200ms] md:col-span-7">
                <p className="max-w-[46ch] text-lg leading-relaxed sm:text-xl">
                  nangi is my little design company and my playground. Here I
                  collect the experiments, the process notes and the occasional
                  beautiful mistake — everything that doesn't fit in a case
                  study, but shapes how I work.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#notes"
                    className="rounded-full bg-cyan px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
                  >
                    Read the notes
                  </a>
                  <Link
                    to="/"
                    className="rounded-full border-2 border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-paper"
                  >
                    ← Portefolio
                  </Link>
                </div>
              </div>
              <div className="anim-rise [animation-delay:280ms] md:col-span-5">
                <div className="relative mx-auto max-w-[280px] rotate-2">
                  <div className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
                  <img
                    src={nangiCover}
                    alt="Collage artwork for nangi"
                    width={1024}
                    height={1024}
                    className="w-full rounded-sm bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                  />
                  <span className="sticker anim-stamp absolute -bottom-5 -right-4 bg-sun px-3 py-2 hand text-ink">
                    work in progress
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- NOTES ---------- */}
          <section id="notes" className="border-t-2 border-ink py-14">
            <div className="mb-9">
              <p className="label-mono text-flame">— notes</p>
              <h2 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
                From the notebook
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {NOTES.map((n) => (
                <article
                  key={n.kicker}
                  className={`rounded-sm p-6 transition-transform duration-300 hover:rotate-0 ${n.bg} ${n.rotate}`}
                >
                  <p className="label-mono opacity-80">{n.kicker}</p>
                  <p className="mt-4 font-display text-xl leading-snug tracking-tight">
                    {n.title}
                  </p>
                  <p className="hand mt-4 text-xl opacity-80">full note soon…</p>
                </article>
              ))}
            </div>
          </section>

          {/* ---------- CONTACT ---------- */}
          <section className="border-t-2 border-ink py-16 text-center">
            <p className="label-mono text-cyan">— say hi</p>
            <h2 className="mx-auto mt-3 max-w-[18ch] font-display text-[clamp(2.25rem,7vw,4.5rem)] leading-[0.9] tracking-tight">
              Got a project for nangi?
            </h2>
            <a
              href="mailto:hej@mb.dk"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:bg-flame"
            >
              hej@mb.dk
            </a>
            <p className="label-mono mt-14 text-ink-soft/70">
              © 2026 nangi — a one-woman company in København
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
