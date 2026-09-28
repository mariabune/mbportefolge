import { createFileRoute, Link } from "@tanstack/react-router";

import logoMb from "@/assets/logo-mb.svg";
import forsideAsset from "@/assets/ai-haandbog-forside.png.asset.json";
import indhold1Asset from "@/assets/ai-haandbog-indhold-1.png.asset.json";
import indhold2Asset from "@/assets/ai-haandbog-indhold-2.png.asset.json";

const NAV = [
  { label: "HELLO", href: "/#hello" },
  { label: "CASES", href: "/#cases" },
  { label: "NANGI", href: "/nangi" },
  { label: "CV", href: "/#cv" },
  { label: "CONTACT", href: "/#contact" },
] as const;

const PROJECT_FACTS = [
  {
    label: "Min rolle",
    value: "Illustrationer · 2 kapitler tekst · AI-assisted content development",
  },
  { label: "Team", value: "4 studerende" },
  { label: "Varighed", value: "2,5 uger" },
  { label: "Kunde", value: "GLS" },
  { label: "Projekttype:", value: "Skoleprojekt" },
] as const;

const PLAYBOOK_GOALS = [
  "Nem at navigere rundt i",
  "Visuelt indbydende",
  "Matche GLS egen visuelle stil",
  "Inspirere og motivere medarbejderne til at bruge AI",
  "Klæde medarbejderne på til at forholde sig kritisk og tage ansvar",
  "Give medarbejdere konkrete redskaber til brug af AI",
] as const;

const IMAGE_SPACES = [
  { number: "03", label: "Designproces", rotate: "md:-rotate-1" },
  { number: "04", label: "Sider fra håndbogen", rotate: "md:rotate-1" },
  { number: "05", label: "Det færdige resultat", rotate: "md:-rotate-1" },
] as const;

export const Route = createFileRoute("/cases/ai-playbook")({
  head: () => ({
    meta: [
      { title: "AI playbook for GLS — case by m.b." },
      {
        name: "description",
        content:
          "Læs om processen, løsningen og læringen bag en interaktiv AI-håndbog udviklet til GLS som skoleprojekt.",
      },
      { property: "og:url", content: "/cases/ai-playbook" },
      { property: "og:title", content: "AI playbook for GLS — case by m.b." },
      {
        property: "og:description",
        content:
          "En case om research, illustrationer og AI-assisted content development til GLS' interaktive AI-håndbog.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/cases/ai-playbook" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "AI playbook",
          description: "GLS · Skoleprojekt med rigtig virksomhed",
          creator: { "@type": "Person", name: "Maria", alternateName: "m.b." },
          about: ["AI", "Editorial design", "Illustration", "GLS"],
          inLanguage: "da",
        }),
      },
    ],
  }),
  component: AiPlaybookCase,
});

function ImageSpace({
  number,
  label,
  rotate,
}: (typeof IMAGE_SPACES)[number]) {
  return (
    <figure className={`relative ${rotate}`}>
      <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-1" />
      <div className="grid-paper flex aspect-[4/3] items-center justify-center border border-ink/20 bg-paper-deep px-6 text-center shadow-[0_10px_24px_rgb(0_0_0/0.12)]">
        <div>
          <span className="label-mono text-ink-soft">Billede {number}</span>
          <p className="mt-3 font-display text-2xl">{label}</p>
        </div>
      </div>
      <figcaption className="hand mt-3 text-center text-ink-soft">{label}</figcaption>
    </figure>
  );
}

function AiPlaybookCase() {
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
              AI playbook
            </h1>
            <p className="hand anim-rise mt-4 text-2xl text-ink-soft [animation-delay:140ms] sm:text-3xl">
              GLS · Skoleprojekt med rigtig virksomhed
            </p>
          </header>

          <section aria-labelledby="introduction-title" className="border-t-2 border-ink py-14">
            <p className="label-mono text-flame">01</p>
            <h2 id="introduction-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">1. Introduktion</h2>
            <div className="mt-8 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <dl>
                  {PROJECT_FACTS.map((fact) => (
                    <div key={fact.label} className="py-3.5">
                      <dt className="label-mono text-flame">{fact.label}</dt>
                      <dd className="mt-1.5 text-base leading-relaxed">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="lg:col-span-8">
                <blockquote className="relative border-l-4 border-flame py-3 pl-6 font-display text-2xl leading-snug sm:text-3xl">
                  ”Hvordan kan vi designe en AI playbook til GLS, der skaber klarhed og tryghed for medarbejderne om brugen af AI på arbejdspladsen, og som samtidig både inspirerer og informerer om korrekt brug af AI?”
                </blockquote>
              </div>
            </div>
            <div className="mt-14 space-y-12">
              <figure className="relative mx-auto w-fit max-w-[280px] md:-rotate-1 sm:max-w-[320px]">
                <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 rotate-1" />
                <img
                  src={forsideAsset.url}
                  alt="Forsiden af AI-håndbogen: GLS' AI-figur Finn, en lyspære og teksten »Dit opslagsværk til brug af AI i dit arbejde«"
                  width={595}
                  height={842}
                  className="w-full border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                />
                <figcaption className="hand mt-3 text-center text-ink-soft">den færdige forside!</figcaption>
              </figure>
              <figure className="relative mx-auto w-fit max-w-xl md:rotate-1">
                <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
                <div className="flex border border-ink/20 bg-paper-deep shadow-[0_10px_24px_rgb(0_0_0/0.14)]">
                  <img
                    src={indhold1Asset.url}
                    alt="Indholdsfortegnelsen, side 2: kapitlerne Kom godt i gang, Mød Finn, Hvornår bruges AI? og Datasikkerhed"
                    width={595}
                    height={842}
                    className="w-1/2"
                  />
                  <img
                    src={indhold2Asset.url}
                    alt="Indholdsfortegnelsen, side 3: kapitlerne Det gode prompt, Tænk kritisk, Samarbejde med AI og Hurtig hjælp"
                    width={595}
                    height={842}
                    className="w-1/2 border-l border-ink/20"
                  />
                </div>
                <figcaption className="hand mt-3 text-center text-ink-soft">indholdsfortegnelsen — 8 kapitler, hver sin farve</figcaption>
              </figure>
            </div>
          </section>

          <section aria-labelledby="solution-title" className="border-t-2 border-ink py-14">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="label-mono text-flame">02</p>
                <h2 id="solution-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">2. Løsningen</h2>
              </div>
              <div className="text-lg leading-relaxed lg:col-span-8">
                <p>Vi endte med en playbook på 23 sider, som vi kaldte for ”AI håndbog” for at gøre det mere håndgribeligt for brugeren. Vi lavede den som en interaktiv pdf, hvor man hurtigt kunne klikke sig hjem til forsiden, og til de forskellige kapitler, for at styrke brugervenligheden. Desuden opdelte vi indholdet i 8 kapitler, med hver sin farve og tal. Dette styrker håndbogens formål som opslagsværk, da brugeren nemt kan finde netop det de leder efter. Vi sørgede for at tekststykkerne var relevante og præcise, og tilføjede godt med luft og whitespace på siderne, for at skabe ro og overblik. Desuden inkluderede vi konkrete arbejdsredskaber til medarbejderne såsom prompt-bibliotek, beslutningstræ og ideer til arbejdsopgaver med AI. Håndbogens design er skabt i samme visuelle stil som kunden GLS, ved brug af samme farvepalette, visuelle elementer og deres AI figur Finn.</p>
              </div>
            </div>
            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              <ImageSpace {...IMAGE_SPACES[1]} />
              <ImageSpace {...IMAGE_SPACES[2]} />
            </div>
          </section>

          <section aria-labelledby="process-title" className="border-t-2 border-ink py-14">
            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="label-mono text-flame">03</p>
                <h2 id="process-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">3. Processen</h2>
                <p className="hand mt-3 text-2xl text-ink-soft">fra brief til prototype</p>
              </div>
              <div className="space-y-8 text-lg leading-relaxed lg:col-span-8">
                <p>Processen startede med en brief med kunden, om deres virksomhed, problemstilling samt ønsker og krav til playbooken. Her handlede det om at stille spørgsmål, for at få en dybere forståelse for virksomhedens behov.</p>
                <p>Dernæst samles vi i gruppen, hvor vi begynder at brainstorme ideer til indhold og visuel stil. Vi brugte den første tid på at analysere data fra virksomheden, over deres interne undersøgelser af brug af AI. Vi stillede spørgsmål som Hvem bruger mest AI og hvem bruger mindst AI? Hvad er grunden til at nogen er tilbageholdne med at bruge AI på arbejdspladsen? Dataen viste at de medarbejdere, der brugte AI mest, var aldersgruppen 50-59 år, hvilket vi blev overraskede over. Desuden viste data fra virksomheden at mere end halvdelen af medarbejderne, slet ikke eller næsten aldrig brugte AI. Dataen viste desuden at medarbejderne ikke fandt det naturligt eller ikke kunne se relevansen ved at bruge AI. Derfor diskuterede vi hvordan vi kunne imødekomme disse problemstillinger.</p>
              </div>
            </div>

            <aside aria-label="Vigtige indsigter fra GLS' data" className="my-16 border-y-2 border-ink py-9">
              <div className="grid gap-8 sm:grid-cols-2 sm:divide-x sm:divide-ink/30">
                <div className="relative px-3 sm:px-8">
                  <p className="font-display text-7xl leading-none text-flame sm:text-8xl">50–59</p>
                  <p className="mt-4 max-w-[28ch] text-xl font-bold leading-snug">år var den aldersgruppe, der brugte AI mest</p>
                  <span className="hand absolute right-3 top-3 -rotate-6 text-ink-soft">det overraskede os!</span>
                </div>
                <div className="px-3 sm:px-8">
                  <p className="font-display text-7xl leading-none text-cyan sm:text-8xl">&gt; ½</p>
                  <p className="mt-4 max-w-[30ch] text-xl font-bold leading-snug">af medarbejderne brugte slet ikke eller næsten aldrig AI</p>
                </div>
              </div>
            </aside>

            <div className="grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="font-display text-2xl">Her er stikord til hvad vi hurtigt kom frem til, at playbooken skulle være:</p>
              </div>
              <ul className="space-y-3 lg:col-span-7">
                {PLAYBOOK_GOALS.map((goal, index) => (
                  <li key={goal} className="flex gap-4 border-b border-dashed border-ink/30 pb-3">
                    <span className="label-mono mt-1 text-flame">0{index + 1}</span>
                    <span className="text-lg">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-14 grid gap-10 lg:grid-cols-12">
              <div className="space-y-8 text-lg leading-relaxed lg:col-span-7">
                <p>Herefter gik arbejdet i gang. Første skridt blev at lægge os fast på en visuel stil. Vi brugte kundens farvepalette og visuelle elementer, og ville inkorporere deres egen AI figur Finn. En af mine roller i projektet var at stå for at skitsere en version af Finn som passede ind i vores playbook, samt designe forsiden og andre illustrationer til playbooken. Vores arbejdsproces var i høj grad præget af design thinking, da vi skitserede, lavede prototyper og gik frem og tilbage i processen for at rette til og tilføje.</p>
                <p>En del af projektet bestod i at arbejde med AI. Derfor brugte vi arbejdsmetoder som HITL (human in the loop) og prompt engineering, til at få det optimale ud af vores tid. Undervejs blev vi selv klogere på hvad arbejdet med AI kan bidrage med, og hvordan man bruger det som værktøj uden at slippe tøjlerne helt. Vi opdelte indholdet imellem os i gruppen, så vi hver især stod for at skrive tekst til 2 kapitler. Vi brugte blandt andet AI til at brainstorme indhold, tjekke fejl, og skabe sammenhæng mellem vores tekster. Samtidig har vi forholdt os kritisk overfor outputs og taget selvstændige beslutninger.</p>
              </div>
              <div className="lg:col-span-5">
                <ImageSpace {...IMAGE_SPACES[0]} />
              </div>
            </div>
          </section>

          <section aria-labelledby="learning-title" className="border-t-2 border-ink py-14">
            <div className="mb-10">
              <p className="label-mono text-flame">04</p>
              <h2 id="learning-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl sm:text-5xl">4. Hvad har jeg lært?</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              <section aria-labelledby="lesson-short" className="border-t-4 border-flame pt-5">
                <h3 id="lesson-short" className="font-display text-2xl">Hold det kort</h3>
                <p className="mt-5 leading-relaxed">At holde noget kort og simpelt kan øge brugervenligheden. Det gør produktet mere overskueligt for brugeren, når indholdet ikke består af lange overvældende tekststykker. Hvis jeg kunne ændre noget, ville jeg have gjort playbooken endnu kortere og mere præcis.</p>
              </section>
              <section aria-labelledby="lesson-ai" className="border-t-4 border-cyan pt-5">
                <h3 id="lesson-ai" className="font-display text-2xl">AI som værktøj – ikke autopilot</h3>
                <p className="mt-5 leading-relaxed">Jeg har lært hvordan man bruger AI som værktøj og fundet gode arbejdsformer med AI. Det handler ikke om at få AI til at gøre alt arbejdet, men om at bruge det i den rigtige sammenhæng, og selvfølgelig forholde sig kritisk til resultatet. Jeg har lært arbejdsmetoder som HITL og prompt engineering, som jeg vil bruge fremadrettet.</p>
              </section>
              <section aria-labelledby="lesson-figma" className="border-t-4 border-ink pt-5">
                <h3 id="lesson-figma" className="font-display text-2xl">Videreudviklet mine færdigheder i Figma</h3>
                <p className="mt-5 leading-relaxed">I dette projekt har jeg blandt andet arbejdet med at skabe illustrationer i Figma, og vi har brugt Figma som redskab til at opsætte vores håndbog i. Derfor er mine færdigheder i Figma blevet endnu bedre.</p>
              </section>
            </div>
          </section>

          <footer className="border-t-2 border-ink py-14 text-center">
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