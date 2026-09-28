import { createFileRoute, Link } from "@tanstack/react-router";

import portraitAsset from "@/assets/portrait.jpg.asset.json";
import casePoster from "@/assets/case-poster.png";
import caseMotion from "@/assets/case-motion.png";
import caseZine from "@/assets/case-zine.png";
import caseBrand from "@/assets/case-brand.png";
import nangiCover from "@/assets/nangi-cover.png";
import logoMb from "@/assets/logo-mb.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "m.b. — Portefolio of a multimedia design student in København" },
      {
        name: "description",
        content:
          "The notebook portfolio of a multimedia design student in Copenhagen — selected cases in print, motion and identity, a CV and the design company nangi.",
      },
      { property: "og:url", content: "/" },
      { property: "og:title", content: "m.b. — Portefolio" },
      {
        property: "og:description",
        content:
          "A living notebook of a multimedia design student: selected cases, a CV, and notes from the making.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Maria",
          alternateName: "m.b.",
          jobTitle: "Multimedia design student",
          email: "mailto:hej@mb.dk",
          address: { "@type": "PostalAddress", addressLocality: "København", addressCountry: "DK" },
          knowsAbout: ["Multimedia design", "Print", "Motion design", "Visual identity", "Editorial design"],
        }),
      },
    ],
  }),
  component: Index,
});

const CASES = [
  {
    img: casePoster,
    title: "Poster Series — “Støj”",
    meta: "2024 · Print / Identity",
    tag: "Print",
    tagColor: "bg-flame text-paper",
    note: "my first riso print!",
    rotate: "md:-rotate-1",
  },
  {
    img: caseMotion,
    title: "Hjemmeside & rebranding",
    meta: "Skoleprojekt · Web / Rebranding",
    tag: "Web",
    tagColor: "bg-cyan text-paper",
    note: "Garn og Craft",
    rotate: "md:rotate-1",
  },
  {
    img: caseZine,
    title: "Zine — “Hænder”",
    meta: "2023 · Editorial",
    tag: "Editorial",
    tagColor: "bg-cyan text-paper",
    note: "hand-bound, 50 copies",
    rotate: "md:rotate-1",
  },
  {
    img: caseBrand,
    title: "Brand — “Kaffebar”",
    meta: "2023 · Identity / Space",
    tag: "Identity",
    tagColor: "bg-flame text-paper",
    note: "the local favourite",
    rotate: "md:-rotate-1",
  },
] as const;

const NAV = [
  { label: "HELLO", href: "#hello" },
  { label: "CASES", href: "#cases" },
  { label: "NANGI", href: "/nangi" },
  { label: "CV", href: "#cv" },
  { label: "CONTACT", href: "#contact" },
] as const;

function Index() {
  return (
    <div className="min-h-screen text-ink">
      {/* Ruled notebook lines run under everything */}
      <div aria-hidden="true" className="ruled grain pointer-events-none fixed inset-0 -z-10" />

      {/* To-do list menu along the red margin line */}
      <aside aria-label="Site menu" className="fixed inset-y-0 left-0 z-40 hidden w-[232px] flex-col border-r border-margin/60 bg-paper/95 py-8 pl-6 pr-2 md:flex lg:w-[184px]">
        <Link to="/" aria-label="m.b. — home" className="w-fit">
          <img src={logoMb} alt="" width={200} height={64} className="h-auto w-[200px] lg:w-[150px]" />
        </Link>
        <p aria-hidden="true" className="hand mt-8 -rotate-2 text-2xl text-ink-soft">to do:</p>
        <nav aria-label="Main" className="mt-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group flex items-center gap-2.5 label-mono text-ink-soft transition-colors hover:text-flame"
            >
              <span aria-hidden="true" className="size-3.5 shrink-0 border-2 border-ink/50 transition-colors group-hover:border-flame group-hover:bg-flame/80" />
              {item.label}
            </a>
          ))}
        </nav>
        <span className="label-mono mt-auto text-ink-soft/60">2026</span>
      </aside>


      {/* Mobile header */}
      <header className="sticky top-0 z-40 border-b border-margin/50 bg-paper/95 px-5 py-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="m.b. — home" className="w-fit">
            <img src={logoMb} alt="" width={200} height={64} className="h-6 w-auto shrink-0" />
          </Link>
          <nav aria-label="Main" className="flex items-center gap-2">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="label-mono text-ink-soft hover:text-flame"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="relative outline-none md:pl-[232px] lg:pl-[184px]">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {/* ---------- HERO ---------- */}
          <section id="hello" aria-labelledby="hero-title" className="relative pt-16 pb-14 sm:pt-24">

            <div className="mt-4 max-w-3xl">
              <h1 id="hero-title" className="pen-underline anim-rise inline-block pb-4 font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.9] tracking-tight [animation-delay:80ms]">
                Portefolio
              </h1>
            </div>
            <p className="hand anim-rise mt-2 text-2xl text-ink-soft [animation-delay:140ms] sm:text-3xl">
              — from a multimedia design student
            </p>

            <div className="mt-10 grid items-start gap-10 md:grid-cols-12">
              <div className="anim-rise [animation-delay:200ms] md:col-span-7">
                <p className="max-w-[46ch] text-lg leading-relaxed sm:text-xl">
                  I'm <span className="font-bold">Maria</span> — a multimedia
                  design student turning ideas into posters, motion and small
                  digital worlds. This site is my notebook: pinned, taped and
                  stamped as I grow.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#cases"
                    className="rounded-full bg-flame px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
                  >
                    See the cases
                  </a>
                  <a
                    href="#cv"
                    className="rounded-full border-2 border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-paper"
                  >
                    Read the CV
                  </a>
                </div>
              </div>

              {/* Taped portrait with handwritten sticker note */}
              <div className="anim-rise [animation-delay:280ms] md:col-span-5">
                <div className="relative mx-auto max-w-[250px] -rotate-2">
                  <div aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-2" />
                  <div aria-hidden="true" className="tape absolute -top-2 right-2 z-10 -rotate-6" />
                  <img
                    src={portraitAsset.url}
                    alt="Portrait photo of Maria, the designer behind this portfolio"
                    width={1280}
                    height={1920}
                    className="w-full rounded-sm bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                  />
                  <span className="sticker anim-stamp absolute -bottom-5 -right-4 bg-sun px-3 py-2 hand text-ink">
                    that's me!
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- CASES ---------- */}
          <section id="cases" aria-labelledby="cases-title" className="border-t-2 border-ink py-14">
            <div className="mb-9 flex items-end justify-between">
              <div>
                <h2 id="cases-title" className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
                  cases
                </h2>
                <p className="hand mt-1.5 text-xl text-ink-soft sm:text-2xl">
                  pinned while the ink is still wet
                </p>
              </div>
              <span className="label-mono hidden text-ink-soft sm:block">
                04 pieces
              </span>
            </div>

            <ul className="grid gap-8 sm:grid-cols-2">
              {CASES.map((c) => (
                <li key={c.title}>
                {c === CASES[0] || c === CASES[1] ? (
                  <Link
                    to={c === CASES[0] ? "/cases/ai-playbook" : "/cases/garn-og-craft"}
                    className="block focus-visible:outline-offset-8"
                    aria-label={c === CASES[0] ? "Open the AI playbook case" : "Open the Garn og Craft case"}
                  >
                    <article
                      className={`group relative ${c.rotate} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
                    >
                      <div aria-hidden="true" className="tape absolute -top-3 left-8 z-10 rotate-2" />
                      <div className="relative bg-paper p-3 shadow-[0_12px_28px_rgb(0_0_0/0.16)] ring-1 ring-ink/10">
                        <img
                          src={c.img}
                          alt={`Cover image for the case ${c.title}`}
                          width={1024}
                          height={768}
                          loading="lazy"
                          className="aspect-[4/3] w-full rounded-sm bg-paper-deep object-cover"
                        />
                        <div className="mt-3 flex items-center justify-between gap-3 px-1 pb-1">
                          <div>
                            <h3 className="font-display text-lg tracking-tight sm:text-xl">
                              {c === CASES[0] ? "AI-playbook" : c.title}
                            </h3>
                            <p className="label-mono mt-1 text-ink-soft">{c.meta}</p>
                          </div>
                          <span className={`label-mono shrink-0 rounded-full px-2.5 py-1 ${c.tagColor}`}>
                            {c.tag}
                          </span>
                        </div>
                      </div>
                      <span
                        aria-label={`Note: ${c.note}`}
                        className="sticker absolute -bottom-4 -left-3 border-2 border-flame/60 bg-paper px-3 py-1.5 hand text-ink shadow-[0_2px_5px_rgb(0_0_0/0.18)]"
                      >
                        {c.note}
                      </span>
                    </article>
                  </Link>
                ) : (
                  <article
                    className={`group relative ${c.rotate} transition-transform duration-300 hover:rotate-0 hover:-translate-y-1`}
                  >
                    <div aria-hidden="true" className="tape absolute -top-3 left-8 z-10 rotate-2" />
                    <div className="relative bg-paper p-3 shadow-[0_12px_28px_rgb(0_0_0/0.16)] ring-1 ring-ink/10">
                      <img
                        src={c.img}
                        alt={`Cover image for the case ${c.title}`}
                        width={1024}
                        height={768}
                        loading="lazy"
                        className="aspect-[4/3] w-full rounded-sm bg-paper-deep object-cover"
                      />
                      <div className="mt-3 flex items-center justify-between gap-3 px-1 pb-1">
                        <div>
                          <h3 className="font-display text-lg tracking-tight sm:text-xl">{c.title}</h3>
                          <p className="label-mono mt-1 text-ink-soft">{c.meta}</p>
                        </div>
                        <span className={`label-mono shrink-0 rounded-full px-2.5 py-1 ${c.tagColor}`}>
                          {c.tag}
                        </span>
                      </div>
                    </div>
                    <span
                      aria-label={`Note: ${c.note}`}
                      className={`sticker absolute -bottom-4 -left-3 hand bg-paper px-3 py-1.5 text-ink shadow-[0_2px_5px_rgb(0_0_0/0.18)] ${c.tag === "Motion" || c.tag === "Editorial" ? "border-2 border-cyan/60" : "border-2 border-flame/60"}`}
                    >
                      {c.note}
                    </span>
                  </article>
                )}
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- CV ---------- */}
          <section id="cv" aria-labelledby="cv-title" className="border-t-2 border-ink py-14">
            <div className="mb-10">
              <h2 id="cv-title" className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
                cv
              </h2>
              <p className="hand mt-1.5 text-xl text-ink-soft sm:text-2xl">
                just for the record
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="label-mono mb-4 text-ink-soft">Education</h3>
                <ul className="space-y-5">
                  <li className="border-l-2 border-flame pl-4">
                    <p className="font-bold">Multimedia Design, BA</p>
                    <p className="label-mono mt-0.5 text-ink-soft">
                      Designskolen — 2022–2026
                    </p>
                  </li>
                  <li className="border-l-2 border-cyan pl-4">
                    <p className="font-bold">Foundation in Graphic Design</p>
                    <p className="label-mono mt-0.5 text-ink-soft">
                      København — 2021–2022
                    </p>
                  </li>
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">
                  Experience
                </h3>
                <ul className="space-y-5">
                  <li className="border-l-2 border-flame pl-4">
                    <p className="font-bold">Design Intern</p>
                    <p className="label-mono mt-0.5 text-ink-soft">
                      Studio Nord — 2024
                    </p>
                  </li>
                  <li className="border-l-2 border-cyan pl-4">
                    <p className="font-bold">Freelance Poster Design</p>
                    <p className="label-mono mt-0.5 text-ink-soft">
                      Self-employed — 2023–now
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="label-mono mb-4 text-ink-soft">Tools</h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Figma",
                    "After Effects",
                    "Blender",
                    "InDesign",
                    "Procreate",
                    "Premiere Pro",
                  ].map((tool, i) => (
                    <li
                      key={tool}
                      className={`label-mono rounded-full px-3 py-1.5 ${
                        i === 0
                          ? "bg-ink text-paper"
                          : i === 1
                            ? "bg-flame text-paper"
                            : i === 2
                              ? "bg-cyan text-paper"
                              : "ring-1 ring-ink/20"
                      }`}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">
                  Achievements
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 pb-2">
                    <span className="font-bold">Student Print Prize</span>
                    <span className="label-mono shrink-0 text-ink-soft">
                      2024
                    </span>
                  </li>
                  <li className="flex items-baseline justify-between gap-4 border-b border-dashed border-ink/25 pb-2">
                    <span className="font-bold">Young Designer Nominee</span>
                    <span className="label-mono shrink-0 text-ink-soft">
                      2023
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* ---------- NANGI TEASER ---------- */}
          <section aria-labelledby="nangi-title" className="border-t-2 border-ink py-14">
            <div className="grid items-center gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <h2 id="nangi-title" className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
                  nangi
                </h2>
                <p className="hand mt-3 text-2xl text-ink-soft">
                  my little design company
                </p>
                <p className="mt-5 max-w-[46ch] text-lg leading-relaxed">
                  On the nangi page I share the work I make on my own terms —
                  experiments, process notes and the things I learn along the
                  way.
                </p>
                <Link
                  to="/nangi"
                  className="mt-7 inline-block rounded-full bg-cyan px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
                >
                  Open the nangi page
                </Link>
              </div>
              <div className="md:col-span-5">
                <div className="relative mx-auto max-w-[280px] rotate-2">
                  <div aria-hidden="true" className="tape absolute -top-3 left-6 z-10 -rotate-3" />
                  <img
                    src={nangiCover}
                    alt="Colourful collage artwork representing nangi, my design company"
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="w-full rounded-sm bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                  />
                  <span className="sticker anim-stamp absolute -right-3 -top-3 bg-flame px-3 py-2 hand text-paper">
                    new page!
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- CONTACT ---------- */}
          <footer id="contact" aria-labelledby="contact-title" className="border-t-2 border-ink py-16 text-center">
            <h2 id="contact-title" className="mx-auto mt-3 max-w-[16ch] font-display text-[clamp(2.5rem,8vw,5rem)] leading-[0.9] tracking-tight">
              Let's make something loud.
            </h2>
            <p className="hand mt-4 text-2xl text-ink-soft">
              write me a note — I always answer
            </p>
            <a
              href="mailto:hej@mb.dk"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:bg-flame"
            >
              hej@mb.dk
            </a>
            <ul aria-label="Social profiles" className="mt-8 flex justify-center gap-6">
              {["Instagram", "Behance", "LinkedIn"].map((s) => (
                <li key={s}>
                  <a
                    href="#contact"
                    className="label-mono inline-flex min-h-11 items-center transition-colors hover:text-flame"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
            <p className="label-mono mt-14 text-ink-soft">
              © 2026 m.b. — made in København, on actual paper first
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
