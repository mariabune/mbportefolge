import { createFileRoute, Link } from "@tanstack/react-router";

import portraitAsset from "@/assets/portrait.jpg.asset.json";
import aiPlaybookCover from "@/assets/ai-playbook-cover.png.asset.json";
import aiPlaybookIndhold from "@/assets/ai-playbook-indhold.png.asset.json";
import garnCraftGalleri from "@/assets/garn-og-craft-galleri.png.asset.json";
import nangiCover from "@/assets/nangi-cover.png";
import logoMb from "@/assets/logo-mb.svg";
import cvPdfAsset from "@/assets/cv-maria-bune.pdf.asset.json";

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
          email: "mailto:Maria.bune@gmail.com",
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
    imgs: [aiPlaybookCover.url, aiPlaybookIndhold.url],
    alts: [
      "Front cover of the GLS AI handbook: a robot balloon leading to a lightbulb over a thinking head",
      "Contents page of the GLS AI handbook with colour-coded chapters",
    ],
    title: "Poster Series — “Støj”",
    meta: "2026 · Ai-assisted content",
    tag: "Illustrationer",
    tagColor: "bg-flame text-paper",
    note: "GLS",
    rotate: "md:-rotate-1",
  },
  {
    img: garnCraftGalleri.url,
    title: "Hjemmeside & rebranding",
    meta: "Skoleprojekt · Web / Rebranding",
    tag: "Web",
    tagColor: "bg-cyan text-paper",
    note: "Garn og Craft",
    rotate: "md:rotate-1",
  },
] as const;

const JOBS = [
  {
    role: "Stifter & Designer",
    place: "Nangi Company",
    period: "est. 2025",
    accent: "border-flame",
    bullets: [
      "Opstart og drift af lille etisk produktion i Sri Lanka",
      "Design, sociale medier, photoshoots, salg og kommunikation",
    ],
  },
  {
    role: "Barista",
    place: "Zephyr Wainui",
    period: "2025",
    accent: "border-cyan",
    bullets: [
      "Træning i kaffekunsten",
      "Samarbejde i et lille team",
      "Daglig kontakt med mange forskellige kunder",
    ],
  },
  {
    role: "Yoga instructor",
    place: "Lapoint Surfcamp",
    period: "2024",
    accent: "border-flame",
    bullets: [
      "Afholde daglige yogatimer for gæster i campen",
      "Sørge for at alle gæster føler sig godt tilpas",
    ],
  },
  {
    role: "Stoke rep and host",
    place: "Stoke Travel",
    period: "2023",
    accent: "border-cyan",
    bullets: [
      "Afholde vinsmagninger i intime omgivelser",
      "Skabe en god stemning til arrangementet",
    ],
  },
  {
    role: "Rejseleder",
    place: "Bravo Tours",
    period: "2021–2022",
    accent: "border-flame",
    bullets: [
      "Have mange hatte på",
      "Holde hovedet koldt i stressede situationer",
      "Løse problemer for gæster",
      "Guide på udflugter, velkomstmøder og daglig interaktion",
    ],
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
                02 pieces
              </span>
            </div>

            <ul className="grid gap-8 sm:grid-cols-2">
              {CASES.map((c) => (
                <li key={c.title}>
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
                        {"imgs" in c ? (
                          <div className="flex aspect-[4/3] w-full gap-1 overflow-hidden rounded-sm bg-paper-deep">
                            {c.imgs.map((src, i) => (
                              <img
                                key={src}
                                src={src}
                                alt={c.alts[i]}
                                loading="lazy"
                                className="h-full w-1/2 object-cover"
                              />
                            ))}
                          </div>
                        ) : (
                          <img
                            src={c.img}
                            alt={`Cover image for the case ${c.title}`}
                            width={1024}
                            height={768}
                            loading="lazy"
                            className="aspect-[4/3] w-full rounded-sm bg-paper-deep object-cover"
                          />
                        )}
                        <div className="mt-3 flex items-center justify-between gap-3 px-1 pb-6">
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
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- CV ---------- */}
          <section id="cv" aria-labelledby="cv-title" className="border-t-2 border-ink py-14">
            <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 id="cv-title" className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
                  cv
                </h2>
                <p className="hand mt-1.5 text-xl text-ink-soft sm:text-2xl">
                  just for the record
                </p>
              </div>
              <a
                href={cvPdfAsset.url}
                download="CV_Maria_Bune.pdf"
                className="rounded-full bg-flame px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
              >
                Download CV
              </a>
            </div>

            <p className="mb-10 max-w-[62ch] text-lg leading-relaxed">
              Jeg hedder <span className="font-bold">Maria</span>, og jeg studerer multimediedesign på IBA Kolding Online. Jeg elsker at designe kreative løsninger og grafiske elementer, men har en baggrund indenfor yoga og turisme. Desuden er jeg en team-player — det ses bl.a. i studiet, hvor jeg sætter stor pris på en god gruppe, og hvordan det bidrager til det bedste resultat.
            </p>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="label-mono mb-4 text-ink-soft">Uddannelse</h3>
                <ul className="space-y-5">
                  <li className="border-l-2 border-cyan pl-4">
                    <p className="font-bold">Multimediedesign — studerende</p>
                    <p className="label-mono mt-0.5 text-ink-soft">
                      IBA Kolding Online
                    </p>
                  </li>
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">Erfaring</h3>
                <ul className="space-y-5">
                  {JOBS.map((j) => (
                    <li key={`${j.place} ${j.period}`} className={`border-l-2 ${j.accent} pl-4`}>
                      <p className="font-bold">{j.role} — {j.place}</p>
                      <p className="label-mono mt-0.5 text-ink-soft">{j.period}</p>
                      <ul className="mt-2 space-y-1">
                        {j.bullets.map((b) => (
                          <li key={b} className="label-mono text-ink-soft">
                            — {b}
                          </li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">Certifikater</h3>
                <ul className="space-y-5">
                  <li className="border-l-2 border-flame pl-4">
                    <p className="font-bold">Yoga Teacher Training</p>
                    <p className="label-mono mt-0.5 text-ink-soft">
                      Vinyasa Yogashala, India — 2023
                    </p>
                  </li>
                  <li className="border-l-2 border-cyan pl-4">
                    <p className="font-bold">Rejselederbevis</p>
                    <p className="label-mono mt-0.5 text-ink-soft">
                      Service &amp; Co, Malta — 2021
                    </p>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="label-mono mb-4 text-ink-soft">Færdigheder</h3>
                <ul className="flex flex-wrap gap-2">
                  {[
                    "Visuel design",
                    "Branding & rebranding",
                    "Webdesign & developement",
                    "UX/UI & prototyping",
                    "Content creation",
                    "SEO & digital marketing",
                    "AI & digitale workflows",
                  ].map((skill, i) => (
                    <li
                      key={skill}
                      className={`label-mono rounded-full border-2 px-3 py-1.5 text-ink ${
                        i % 3 === 0 ? "border-flame" : i % 3 === 1 ? "border-cyan" : "border-sun"
                      }`}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">Tools</h3>
                <ul className="flex flex-wrap gap-2">
                  {["Figma", "Adobe Creative Cloud", "Wordpress", "VSC", "AI tools"].map((tool, i) => (
                    <li
                      key={tool}
                      className={`label-mono rounded-full border-2 px-3 py-1.5 text-ink ${
                        i % 3 === 0 ? "border-flame" : i % 3 === 1 ? "border-cyan" : "border-sun"
                      }`}
                    >
                      {tool}
                    </li>
                  ))}
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">Sprog</h3>
                <ul className="flex flex-wrap gap-2">
                  {["Dansk", "Engelsk"].map((lang) => (
                    <li key={lang} className="label-mono rounded-full bg-sun px-3 py-1.5">
                      {lang}
                    </li>
                  ))}
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">Kontakt</h3>
                <ul className="space-y-2">
                  <li className="label-mono">+45 42 54 95 64</li>
                  <li>
                    <a
                      href="mailto:Maria.bune@gmail.com"
                      className="label-mono transition-colors hover:text-flame"
                    >
                      Maria.bune@gmail.com
                    </a>
                  </li>
                </ul>

                <h3 className="label-mono mt-10 mb-4 text-ink-soft">Andre ansættelser</h3>
                <ul className="space-y-2">
                  {[
                    "Kiwiplukker og pakker, New Zealand",
                    "Pædagogisk assistent, Skovbuen Silkeborg",
                    "Tjener og barista, Cafe Valsen Silkeborg",
                    "Vikararbejde hos Sport24 lager, Funder",
                  ].map((a) => (
                    <li key={a} className="label-mono text-ink-soft">
                      — {a}
                    </li>
                  ))}
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
              href="mailto:Maria.bune@gmail.com"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:bg-flame"
            >
              Maria.bune@gmail.com
            </a>
            <p className="label-mono mt-4 text-ink-soft">
              +45 42 54 95 64
            </p>
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
