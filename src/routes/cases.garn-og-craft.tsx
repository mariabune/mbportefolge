import { createFileRoute, Link } from "@tanstack/react-router";

import logoMb from "@/assets/logo-mb.svg";
import garnForside from "@/assets/garn-craft-forside.svg.asset.json";
import garnEvents from "@/assets/garn-craft-events.svg.asset.json";
import garnCraftsalon from "@/assets/garn-craft-craftsalon.svg.asset.json";
import garnOmos from "@/assets/garn-craft-omos.svg.asset.json";
import garnLogoer from "@/assets/garn-craft-logoer.svg.asset.json";
import garnIkoner from "@/assets/garn-craft-ikoner.svg.asset.json";

const NAV = [
  { label: "HELLO", href: "/#hello" },
  { label: "CASES", href: "/#cases" },
  { label: "NANGI", href: "/nangi" },
  { label: "CV", href: "/#cv" },
  { label: "CONTACT", href: "/#contact" },
] as const;

const PROJECT_FACTS = [
  { label: "Min rolle", value: "Illustrationer · style tile · Wireframes · prototype" },
  { label: "Team", value: "3 studerende" },
  { label: "Varighed", value: "7 uger" },
  { label: "Kunde", value: "Garn og Craft" },
  { label: "Projekttype:", value: "Skoleprojekt" },
] as const;

const SOLUTION_GOALS = [
  "Engagere og inspirere studerende til strikkemiljøet",
  "Designe en ny visuel identitet",
  "Skabe sammenhæng på tværs af platforme",
  "Udarbejde forslag til kommunikation og markedsføring",
  "Match-strategi: gør konkurrenter til samarbejdspartnere",
] as const;

type ImageSpaceProps = {
  number: string;
  title: string;
  note: string;
  className?: string;
};

function ImageSpace({ number, title, note, className = "" }: ImageSpaceProps) {
  return (
    <figure className={`relative ${className}`}>
      <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
      <div className="flex aspect-[4/3] items-center justify-center border border-ink/25 bg-paper-deep px-6 text-center shadow-[0_10px_24px_rgb(0_0_0/0.14)]">
        <div>
          <span className="label-mono text-flame">Billede {number}</span>
          <p className="mt-3 font-display text-2xl">{title}</p>
        </div>
      </div>
      <figcaption className="hand mt-3 text-center text-ink-soft">{note}</figcaption>
    </figure>
  );
}

export const Route = createFileRoute("/cases/garn-og-craft")({
  head: () => ({
    meta: [
      { title: "Hjemmeside & rebranding for Garn og Craft — case by m.b." },
      {
        name: "description",
        content:
          "Læs om research, løsning, proces og læring bag en ny hjemmeside og visuel identitet til Garn og Craft.",
      },
      { property: "og:url", content: "/cases/garn-og-craft" },
      { property: "og:title", content: "Hjemmeside & rebranding for Garn og Craft — case by m.b." },
      {
        property: "og:description",
        content:
          "En case om webdesign, rebranding, brugeradfærd og fællesskaber udviklet for Garn og Craft.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cases/garn-og-craft" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "Hjemmeside & rebranding",
          description: "Garn og Craft · Skoleprojekt",
          creator: { "@type": "Person", name: "Maria", alternateName: "m.b." },
          about: ["Webdesign", "Rebranding", "Visual identity", "Garn og Craft"],
          inLanguage: "da",
        }),
      },
    ],
  }),
  component: GarnOgCraftCase,
});

function GarnOgCraftCase() {
  return (
    <div className="min-h-screen text-ink">
      <div aria-hidden="true" className="ruled grain pointer-events-none fixed inset-0 -z-10" />

      <aside aria-label="Site menu" className="fixed inset-y-0 left-0 z-40 hidden w-[232px] flex-col border-r border-margin/60 bg-paper/95 py-8 pl-6 pr-2 md:flex lg:w-[184px]">
        <Link to="/" aria-label="m.b. — back to portefolio" className="w-fit">
          <img src={logoMb} alt="" width={200} height={64} className="h-auto w-[200px] lg:w-[150px]" />
        </Link>
        <p aria-hidden="true" className="hand mt-8 -rotate-2 text-2xl text-ink-soft">to do:</p>
        <nav aria-label="Main" className="mt-4 flex flex-col gap-4">
          {NAV.map((item) => (
            <a key={item.label} href={item.href} className="group flex items-center gap-2.5 label-mono text-ink-soft transition-colors hover:text-flame">
              <span aria-hidden="true" className="size-3.5 shrink-0 border-2 border-ink/50 transition-colors group-hover:border-flame group-hover:bg-flame/80" />
              {item.label}
            </a>
          ))}
        </nav>
        <span className="label-mono mt-auto text-ink-soft/60">2026</span>
      </aside>

      <header className="sticky top-0 z-40 border-b border-margin/50 bg-paper/95 px-5 py-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between">
          <Link to="/" aria-label="m.b. — home" className="w-fit">
            <img src={logoMb} alt="" width={200} height={64} className="h-6 w-auto shrink-0" />
          </Link>
          <nav aria-label="Main" className="flex items-center gap-2">
            {NAV.map((item) => (
              <a key={item.label} href={item.href} className="label-mono text-ink-soft hover:text-flame">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1} className="relative outline-none md:pl-[232px] lg:pl-[184px]">
        <article className="mx-auto max-w-5xl px-5 sm:px-8">
          <header className="relative pt-16 pb-14 sm:pt-24">
            <Link to="/" hash="cases" className="label-mono inline-flex min-h-11 items-center text-ink-soft transition-colors hover:text-flame">
              ← Tilbage til cases
            </Link>
            <h1 className="pen-underline anim-rise mt-8 block w-fit pb-4 font-display text-5xl leading-[0.92] sm:text-7xl [animation-delay:80ms]">
              Hjemmeside &amp; rebranding
            </h1>
            <p className="hand anim-rise mt-4 text-2xl text-ink-soft [animation-delay:140ms] sm:text-3xl">
              Garn og Craft · Skoleprojekt
            </p>
          </header>

          <section aria-labelledby="introduction-title" className="py-14">
            <p className="label-mono text-flame">01</p>
            <h2 id="introduction-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">1. Introduktion</h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <dl className="border border-ink/25 px-6 py-3">
                  {PROJECT_FACTS.map((fact) => (
                    <div key={fact.label} className="py-3.5">
                      <dt className="label-mono text-flame">{fact.label}</dt>
                      <dd className="mt-1.5 text-base leading-relaxed">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="lg:col-span-8">
                <p className="text-lg leading-relaxed">
                  <strong className="font-bold text-flame">Kort fortalt:</strong> Garn og Craft er en lille garnbutik, der ligger i Kolding, som har en hjemmeside med webshop. Ejeren ønskede at fremme fællesskabet gennem arrangementer i butikken, og ville have hjælp til dette igennem en ny visuel identitet på tværs af platforme. Da vi vurderede at en samhørighed på tværs af alle kanaler var vigtigt for virksomheden, var det en rebranding case.
                </p>
                <blockquote className="relative mt-8 border-l-4 border-flame py-3 pl-6 font-display text-2xl leading-snug sm:text-3xl">
                  ”Hvordan inspirerer og engagerer vi den nuværende målgruppe samt studerende, til at blive en del af Garn og Crafts fællesskab, gennem en ny visuel identitet og diverse digitale platforme?”
                </blockquote>
                <div className="mt-12 grid gap-10 sm:grid-cols-2">
                  <figure className="relative">
                    <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-1" />
                    <img
                      src={garnForside.url}
                      alt="Den redesignede forside til Garn og Craft: navigation, foto af to kvinder der strikker sammen, afsnittet Garn & Craft KLUBBEN, vareudvalg af garn, december-events og gaveideer"
                      width={951}
                      height={1733}
                      className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                      loading="lazy"
                    />
                    <figcaption className="hand mt-3 text-center text-ink-soft">den nye forside — meget mere end garn!</figcaption>
                  </figure>
                  <figure className="relative">
                    <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
                    <img
                      src={garnEvents.url}
                      alt="Events-siden til Garn og Craft: Overskriften EVENTS over et foto af garnnøgler, tekst om workshops og kurser, et december-montheder med events der kan tilmeldes, og månedsfaneblade fra januar til maj"
                      width={951}
                      height={1658}
                      className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                      loading="lazy"
                    />
                    <figcaption className="hand mt-3 text-center text-ink-soft">events-kalenderen — hver måned sin farve</figcaption>
                  </figure>
                </div>
                <figure className="relative mt-12">
                  <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
                  <img
                    src={garnLogoer.url}
                    alt="Garn og Crafts logo før og efter: til venstre det nye sort-hvide garnnøgle-logo med strikkepinde, til højre det gamle runde logo i grøn med orange hjerte af garn"
                    width={2667}
                    height={1382}
                    className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                    loading="lazy"
                  />
                  <figcaption className="hand mt-3 text-center text-ink-soft">logoet: før og efter</figcaption>
                </figure>
              </div>
            </div>
          </section>

          <section aria-labelledby="solution-title" className="py-14">
            <p className="label-mono text-flame">02</p>
            <h2 id="solution-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">2. Løsningen</h2>
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed">
              <p>Løsningen blev en kodet hjemmeside, som fungerede som webshop, men samtidig havde en kalender hvor man kunne gå på opdagelse i de forskellige events og workshops, der foregår i butikken.</p>
              <p>Vi fremhævede events ved at arbejde med nudging og brugeradfærd. Blandt andet bragte vi sektionen op i det visuelle hierarki, og markerede den med en CTA-knap med en tydelig rød farve.</p>
            </div>

            <div className="mt-12 grid items-start gap-10 lg:grid-cols-12">
              <div className="space-y-6 text-lg leading-relaxed lg:col-span-5">
                <p>Vi redesignede desuden logoet til at matche hjemmesidens nye visuelle identitet og farver, og foreslog hvordan man kunne engagere flere studerende igennem sociale medier.</p>
                <p>Vi lavede, gennem vores research, desuden en guide til hvordan man opbygger sociale fællesskaber online, da vi så et stort kundepotentiale derigennem. Det handler blandt andet om at følge trends, og lave relevant indhold der får folk til at reagere, kommentere og reposte.</p>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                  <figure className="relative">
                    <span aria-hidden="true" className="tape absolute -top-2 left-1/2 z-10 -translate-x-1/2 rotate-1" />
                    <img
                      src={garnForside.url}
                      alt="Forsiden til Garn og Craft: navigation, foto af to kvinder der strikker sammen, afsnittet Garn & Craft KLUBBEN, vareudvalg af garn, december-events og gaveideer"
                      width={951}
                      height={1733}
                      className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="relative">
                    <span aria-hidden="true" className="tape absolute -top-2 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
                    <img
                      src={garnEvents.url}
                      alt="Events-siden til Garn og Craft: overskriften EVENTS over et foto af garnnøgler, tekst om workshops og kurser, december-montheder med events der kan tilmeldes, og månedsfaneblade fra januar til maj"
                      width={951}
                      height={1658}
                      className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="relative">
                    <span aria-hidden="true" className="tape absolute -top-2 left-1/2 z-10 -translate-x-1/2 rotate-1" />
                    <img
                      src={garnCraftsalon.url}
                      alt="Craftsalon-siden til Garn og Craft: overskriften Craftsalon, dato, gratis beskrivelse, tilmeld-knap, relaterede events og footer med navigation, åbningstider og kontakt"
                      width={951}
                      height={1237}
                      className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                      loading="lazy"
                    />
                  </figure>
                  <figure className="relative">
                    <span aria-hidden="true" className="tape absolute -top-2 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
                    <img
                      src={garnOmos.url}
                      alt="Om os-siden til Garn og Craft: overskriften Om os, hilsenen Hej jeg hedder Helle, beskrivelse af Garn & Craft KLUBBEN, og afsnittet Om butikken med adresse i Kolding"
                      width={951}
                      height={1419}
                      className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                      loading="lazy"
                    />
                  </figure>
                </div>
              </div>
            </div>

            <p className="mt-12 max-w-3xl text-lg leading-relaxed">Desuden gav vi forslag til hvordan dette kunne hænge sammen med virksomhedens markedsføring på sociale medier. Resultatet blev en rebranding af hjemmesiden og sociale medier, der engagerer studerende på en måde så den også hænger sammen med hendes fysiske butik, samtidig med at vi beholdt Garn og Crafts stemning og identitet.</p>

            <figure className="relative mx-auto mt-12 w-fit max-w-[280px]">
              <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-1" />
              <img
                src={garnIkoner.url}
                alt="Seks håndtegnede ikoner i farvede cirkler: et fællesskab af mennesker (grøn), en garnnøgle (grønblå), strikkepinde med garn (gul), en kat (orange), en gaveæske (lilla) og et hjerte med strikkepind (lyserød)"
                width={1304}
                height={1646}
                className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                loading="lazy"
              />
              <figcaption className="hand mt-3 text-center text-ink-soft">ikoner til det nye udtryk</figcaption>
            </figure>
          </section>

          <section aria-labelledby="process-title" className="py-14">
            <p className="label-mono text-flame">03</p>
            <h2 id="process-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">3. Processen</h2>
            <p className="hand mt-3 text-2xl text-ink-soft">fra kundemøde til prototype</p>

            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <div className="space-y-6 text-lg leading-relaxed lg:col-span-7">
                <p>Processen startede med et møde med kunden, hvor hun præsenterede sig selv og sin forretning, og hvad hun ønskede hjælp til. Derefter gik vi i gang med grundig research.</p>
                <p>Vi lavede en markedsanalyse, målgruppeanalyse, swot/tows analyse og communication brief, før vi begyndte på designarbejdet. Det gjorde, at vi forstod virksomheden og markedet ind til kernen, men gjorde også at vi kunne vælge en target målgruppe, nemlig studerende. Nogle af argumenterne for målgruppen var blandt andet, at Kolding er en studieby, samt strikning vinder frem blandt unge.</p>
              </div>
              <div className="lg:col-span-5">
                <p className="font-display text-2xl">Her er stikord til den løsning vi ønskede at skabe:</p>
                <ul className="mt-6 space-y-3">
                  {SOLUTION_GOALS.map((goal, index) => (
                    <li key={goal} className="flex gap-4 border-b border-dashed border-ink/30 pb-3">
                      <span className="label-mono mt-1 text-flame">0{index + 1}</span>
                      <span className="text-lg">{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 grid gap-10 sm:grid-cols-2">
              <ImageSpace number="03" title="Research & visuel retning" note="fra analyse til style tile" />
              <ImageSpace number="04" title="Wireframes & prototype" note="test, ret til, test igen" />
            </div>

            <div className="mt-14 grid items-start gap-10 lg:grid-cols-12">
              <div className="space-y-6 text-lg leading-relaxed lg:col-span-7">
                <p>Derefter gik vi i gang med den visuelle del. Vi undersøgte forskellige farvepaletter, redesignede logoet, lavede wireframes og prototyper.</p>
                <p>Hele processen var præget af <strong className="font-bold text-flame">design thinking</strong>, blandt andet gennem flere brugertests som vi lavede undervejs i form af testen 5-second-test og gangster-testen. Det var meget brugbart, og vigtigt for det endelige resultat.</p>
                <p>Vi udviklede også bud på hvordan hun skabte samhørighed mellem butik, hjemmeside og sociale medier (omnichannel), da vi gennem research og brugeroplevelser ved hvor vigtigt det er, at der er genkendelighed mellem alle platforme.</p>
              </div>
              <ImageSpace number="05" title="Identitet på tværs" note="butik, hjemmeside og sociale medier" className="lg:col-span-5" />
            </div>
          </section>

          <section aria-labelledby="learning-title" className="py-14">
            <div className="mb-10">
              <p className="label-mono text-flame">04</p>
              <h2 id="learning-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">4. Hvad har jeg lært?</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <section aria-labelledby="lesson-testing" className="border-t-4 border-flame pt-5">
                <h3 id="lesson-testing" className="font-display text-2xl">Vigtigheden af brugertest</h3>
                <p className="mt-5 leading-relaxed">Brugertestene bidrog enormt meget til forbedringen af siden. Vi fik belyst problematiske områder som vi ikke selv havde lagt mærke til, og fik samtidig god inspiration til forbedringer, samt feedback på hvad der fungerede godt. Det er et vigtigt element af et projekt, som jeg vil tage videre i min arbejdsrutine.</p>
              </section>
              <section aria-labelledby="lesson-client" className="border-t-4 border-cyan pt-5">
                <h3 id="lesson-client" className="font-display text-2xl">Kundens ønsker og faglig rådgivning</h3>
                <p className="mt-5 leading-relaxed">Jeg lærte hvor vigtigt det er at finde balancen mellem kundens ønsker og vores egen faglighed. Kunden kender sin virksomhed og kunder, mens vi bidrager med vores faglige viden om design, brugeradfærd og digitale løsninger. Det handler om at lytte til kundes ønsker, samtidig med at man kan argumentere fagligt for sit forslag.</p>
              </section>
              <section aria-labelledby="lesson-carousel" className="border-t-4 border-ink pt-5">
                <h3 id="lesson-carousel" className="font-display text-2xl">CSS og karrusel</h3>
                <p className="mt-5 leading-relaxed">En af de ting jeg lærte, var at lave en karrusel i CSS med HTML. Det blev relevant til opsætning af produkter på hjemmesiden, og det var primært mine gruppemedlemmer der stod for den del, men igennem dem lærte jeg at lave funktionen karrusel.</p>
              </section>
            </div>
          </section>

          <footer className="py-14 text-center">
            <p className="hand text-2xl text-ink-soft">næste side i notesbogen?</p>
            <Link to="/" hash="cases" className="mt-5 inline-flex min-h-11 items-center rounded-full bg-ink px-6 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-colors hover:bg-flame">
              Se alle cases
            </Link>
          </footer>
        </article>
      </main>
    </div>
  );
}