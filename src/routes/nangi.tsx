import { createFileRoute, Link } from "@tanstack/react-router";

import nangiCover from "@/assets/nangi-photoshoot.jpg.asset.json";
import logoMb from "@/assets/logo-mb.svg";
import nangiSketches from "@/assets/nangi-sketches.jpg.asset.json";
import nangiPrototypePatterns from "@/assets/nangi-prototype-patterns.jpg.asset.json";
import nangiPrototypeFitting from "@/assets/nangi-prototype-fitting.jpg.asset.json";
import nangiFabricMarket from "@/assets/nangi-fabric-market.jpg.asset.json";
import nangiFabricRolls from "@/assets/nangi-fabric-rolls.jpg.asset.json";
import nangiCollection from "@/assets/nangi-collection.jpg.asset.json";

import nangiInokaSewing from "@/assets/nangi-inoka-sewing.jpg.asset.json";
import nangiStockBook from "@/assets/nangi-stock-book.jpg.asset.json";
import nangiGiveback from "@/assets/nangi-giveback.jpg.asset.json";



const NAV = [
  { label: "HELLO", href: "/#hello" },
  { label: "CASES", href: "/#cases" },
  { label: "NANGI", href: "/nangi" },
  { label: "CV", href: "/#cv" },
  { label: "CONTACT", href: "/#contact" },
] as const;

const ROLES = [
  "Kreativ retning",
  "Tøjdesign",
  "Branding",
  "Content",
  "Fotografi",
  "Sociale medier",
  "Salg",
  "Projektledelse",
] as const;

const ETHICS = [
  "Fair løn",
  "Rimelige arbejdstimer (8 timer dagligt, 5 dage om ugen)",
  "Gode arbejdsforhold og ordentlige redskaber",
  "Respekt overfor de lokale helligdage",
  "Fleksibilitet overfor familielivet, børn og sygdom",
  "Fejring af milepæle og fødselsdage",
  "Pengene bliver i lokalsamfundet",
  "Holistisk tilgang",
  "Transparens hele vejen igennem",
] as const;

const PROCESS = [
  {
    step: "1. Ideation",
    text: "Processen starter med at jeg designer et stykke tøj. Inpspiration kan kome fra farvekombinationer jeg ser, naturen, noget stof, trends eller noget tøj jeg holder af. Jeg foretrækker at skitsere i hånden med pen og papir, og elsker at lægge de sidste detaljer på og farvelægge.",
    imgs: [
      {
        img: nangiSketches.url,
        alt: "Håndtegnede modetegninger af Nangi-styles i farver, spredt ud på et bord med farveblyanter, tusser og sticky notes",
        caption: "Skitser fra tegnebrættet — i hånden, med pen og farver",
      },
    ],

  },
  {
    step: "2. Prototype",
    text: "Dernæst tager jeg over til min skrædder Inoka, hvor vi begynder at tegne et mønster op, enten i fri hånd eller med guidelines fra et stykke tøj der passer i pasformen. Dernæst syr Inoka en prototype som jeg prøver på. Vi retter pasformen til, og justerer derefter mønsteret. Det kan tage mange forsøg at ramme den helt rigtige facon, men nogle gange opstår der gode ideer gennem fejl, og inspiration kan komme når man står med stoffet i hænderne. Når jeg er tilfreds godkendes mønsteret og vi er klar til at producere",
    imgs: [
      {
        img: nangiPrototypePatterns.url,
        alt: "Mønstre klippet i papir på lyserødt stof, ved siden af håndtegnede modetegninger af Nangi-styles",
        caption: "papirmønstre & skitser",
      },
      {
        img: nangiPrototypeFitting.url,
        alt: "Maria prøver en hvid Nangi-top, mens skrædderen Inoka justerer pasformen",
        caption: "prøvepasning hos Inoka",
      },
    ],
  },
  {
    step: "3. Materialer",
    text: "Når jeg har besluttet hvor mange stykker tøj vi skal lave, og i hvilke farver, planlægger jeg sammen med Inoka hvor meget stof hun skal bruge af hver farve. Jeg køber selv stof ind på det lokale stofmarked i den nærmeste by, tæt på hvor jeg bor, og det kan desuden være at Inoka også mangler tråd eller en ny saks.",
    imgs: [
      {
        img: nangiFabricMarket.url,
        alt: "Inoka står mellem reoler fyldt med farverige stofruller i en stofbutik på det lokale stofmarked",
        caption: "stofindkøb på markedet",
      },
      {
        img: nangiFabricRolls.url,
        alt: "Stofruller i mange farver — gult, rødt, brunt og blåt — stablet uden for stofbutikken",
        caption: "stof i alle farver",
      },
    ],
  },

  {
    step: "4. Produktion",
    text: "Inoka får stoffet og så går hun og et lille team af andre kvinder i gang med at sy ordren. Hun kontakter mig undervejs hvis der opstår problemer eller hun er i tvivl om noget. Jeg kommer tit forbi da vi bor 2 minutter fra hinanden, både til at tjekke om alt går fint eller bare for at drikke en kop te.",
    imgs: [
      {
        img: nangiInokaSewing.url,
        alt: "Skrædderen Inoka står ved sin overlockmaskine og syer hvidt stof, med målebåndet om halsen",
        caption: "Inoka ved symaskinen",
      },
    ],

  },
  {
    step: "5. Salg",
    text: "Når ordren er færdig henter jeg det hele, og tjekker alt igennem. Tøjet afleverer jeg i diverse butikker der forhandler vores produkter, eller sælger det på markeder som foregår hver anden uge.",
    imgs: [
      {
        img: nangiCollection.url,
        alt: "Færdige Nangi-produkter i mange farver med Nangi-tagget i træ",
        caption: "klar til at blive solgt",
      },
    ],
  },
  {
    step: "6. Feedback",
    text: "På baggrund af markeder og salgsdata fra butikkerne, analyserer jeg hele tiden på hvad der fungerer og hvad der kan forbedres. Det kan både være på farver, styles, pasform og størrelser. Jeg elsker at være på markederne hvor jeg får lov til at møde kunderne og få direkte feedback på vores tøj.",
    imgs: [
      {
        img: nangiStockBook.url,
        alt: "Bogen med håndskrevne notater om alle Nangi-modeller og -farver",
        caption: "noter, tal og data",
      },
    ],
  },
  {
    step: "7. Give tilbage",
    text: "Hver anden måned donerer vi 10% af vores profit tilbage til samfundet i Sri Lanka. Det kan være til organisationer der hjælper kvinder og børn i Sri Lanka, men senest donerede vi en masse madposer og legetøj til de fattigste i landsbyen hvor jeg bor. Inflationen er enormt høj i Sri Lanka, og det er svært for mange at få mad på bordet, især hvis man er ældre, syg, ikke har en uddannelse eller har mange børn.",
    imgs: [
      {
        img: nangiGiveback.url,
        alt: "Mange poser pakket med mad og legetøj, der skal doneres til familier i Sri Lanka",
        caption: "poser klar til at blive delt ud",
      },
    ],
  },
] as const;

const PROJECTS = [
  {
    title: "Photoshoot",
    text: "Jeg har afholdt 2 større og 2 mindre photoshoots til at tage billeder af tøjet til sociale medier. Jeg har hyret lokale fotografer 2 gange, og brugt mine veninder som modeller. Derefter har jeg valgt lokation, style og havde ansvaret for det kreative udtryk. Jeg oplevede at de bedste billeder opstod, når shootet ikke blev for kontrolleret. Slutvis brugte jeg Adobe Lightroom til at redigere billederne, til de fik det udtryk jeg gerne ville have.",
  },
  {
    title: "Markeder",
    text: "Hver anden lørdag afholdes der markeder, i den landsby jeg bor. Her har jeg haft den fantastiske mulighed at stille en Nangi-bod op, og sælge tøj. Markederne fungerer som mere end en salgskanal. De giver mig muligheden for direkte feedback fra de besøgende, som jeg kan bruge til at videreudvikle produkterne. Jeg arbejder også bevidst med brugeroplevelsen omkring boden, og hvordan tøjet bliver præsenteret. Jeg tager altid et stort spejl med, friske blomster, og mine skitser og stofprøver, så folk kan se lidt bag om facaden på Nangi. Desuden er det et fantastisk sted at netværke og mødes med andre sælgere, udveksle viden og erfaring og blive en del af det lokale fællesskab.",
  },
  {
    title: "Logo, labels og tags design",
    text: "Et af de første vigtige skridt inden jeg kunne sælge, var at designe et logo. Jeg skitserede flere forskellige logos i hånden, og arbejdede med mange forskellige farvekombinationer. Derefter valgte jeg et rundt logo til prismærkerne og instagram, da jeg var vild med det visuelle udtryk. Jeg valgte et firkantet til labels inde i tøjet af praktiske årsager. Derefter brugte jeg Adobe Illustrator til at tegne en digital version ovenpå et billede af min håndskitse. Jeg tilføjede tekst og informationer på prisskiltene, blandt andet en lille hyldest til skrædderen Inoka. For mig er det vigtigt, at folk kan se mennesket bag produktet. Da jeg slutvis havde filerne, valgte jeg en printforhandler, som printede prisskilte og labels til mig.",
  },
  {
    title: "Sociale medier",
    text: "Sociale medier fungerer som mit online visitkort. Jeg har planlagt content og arbejdet med en strategi der viser en livsstil og ikke kun produktbilleder fra et tøjbrand. Det er instagram som jeg bruger som den primære platform, pga. de visuelle muligheder samt muligheden for at have kontakt med kunder. Da jeg ikke sælger tøj online, har det ikke været min største prioritet indtil videre, men jeg ser et stort potentiale der, og vil løbende videreudvikle på den front.",
  },
  {
    title: "Tøjdesign",
    text: "En af mine yndlingsopgaver ved Nangi, er at tegne, designe og udvikle nye styles. Jeg skitserer alle modeller i hånden på papir, med blyant og tusser. Jeg har lært at tegne modeller gennem lånte biblioteksbøger og Youtube tutorials, og har løbende udviklet min egen måde at skitsere på. Tegningerne er første led i designprocessen, og dermed vigtige for den videre proces. Da jeg er en visuel person, elsker jeg at få en ide ud af hovedet og ned på papiret. Det giver mig et godt overblik at have fysiske tegninger.",
  },
  {
    title: "Kommunikation og forhandlinger",
    text: "Som ejer af Nangi har jeg mange forskellige hatte på. En stor del af arbejdet - især i opstartsfasen - har været, at skabe kontakt til butikker, leverandører og andre samarbejdspartnere. Jeg har blandt andet kontaktet butikker, der kunne være interesseret i at forhandle Nangi, og forhandlet aftaler om kommission og salg. Hvordan kontakter man en butiksindehaver? Hvad er en rimelig kommission til dem? Hvordan sælger jeg Nangi bedst? Det er nogle af de spørgsmål jeg stod overfor. Jeg lægger stor vægt på en tydelig og venlig kommunikation, og på at overholde de aftaler, jeg indgår. For mig handler et godt samarbejde ikke kun om at få Nangi ind i en butik, men at skabe et samarbejde der fungerer på længere sigt.",
  },
] as const;

const LESSONS = [
  {
    title: "Inspiration kommer når man mindst venter det",
    text: "De bedste ideer kommer tit på cyklen, lige før sengetid eller når jeg kigger på stof i de mange forhandlere. En gammel rissæk kan give en ide til en lækker farvekombination. Gode designs kan opstå af en fejl eller misforståelse. Ideer på papiret kan ikke altid føres ud i livet, men resultatet kan ende med at blive endnu bedre end den oprindelige ide.",
    bg: "bg-cyan text-paper",
    rotate: "-rotate-1",
  },
  {
    title: "Man behøver ikke have alle svar for at starte",
    text: "Der er noget smukt ved bare at kaste sig ud i tingene, med en god ide, men uden at have en konkret plan. Selvom det er en god ide at have gjort sit grundarbejde inden man starter et større projekt, er det umuligt at forudsige hvilke problemer man støder ind i. Med en ovenfra-og-ned-tilgang er jeg kommet langt. Jeg har haft gavn af at have overordnede mål, såvel som ugentlige mål og daglige mål. Det fungerer godt for mig at tage en dag af gangen, men samtidig have overordnede mål i horisonten.",
    bg: "bg-paper ring-1 ring-ink/15",
    rotate: "rotate-1",
  },
  {
    title: "Man behøver ikke kunne alt selv",
    text: "Da jeg startede Nangi projektet, vidste jeg med det samme at jeg ikke selv skulle stå for at sy tøjet. Selvom jeg har basale syfærdigheder, er det hverken min passion eller mit helt store talent. Derfor er det fantastisk at arbejde med min dygtige skrædder som har meget mere erfaring og teknik end jeg har. Hun er uundværlig for firmaet, og giver mig samtidig mulighed for at bruge min tid på noget andet.",
    bg: "bg-flame text-paper",
    rotate: "-rotate-1",
  },
] as const;

const PILL_ACCENTS = [
  "border-flame hover:bg-flame hover:text-paper",
  "border-cyan hover:bg-cyan hover:text-paper",
  "border-sun hover:bg-sun hover:text-ink",
] as const;

export const Route = createFileRoute("/nangi")({
  head: () => ({
    meta: [
      { title: "nangi — mit eget tøjunivers i Sri Lanka" },
      {
        name: "description",
        content:
          "Nangi er mit eget lille kreative univers: etisk produceret tøj i 100% bomuld, designet af mig og syet i Sri Lanka. Læs om processen fra skitse til salg.",
      },
      { property: "og:url", content: "/nangi" },
      { property: "og:title", content: "nangi — mit eget tøjunivers i Sri Lanka" },
      {
        property: "og:description",
        content:
          "Fra skitse til salg: hvordan jeg designer, producerer og sælger tøj sammen med kvinder i Sri Lanka — og hvad jeg har lært undervejs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/nangi" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "nangi",
          description:
            "Et etisk tøjfirma i Sri Lanka med tidsløse designs i 100% bomuld. 10% af profit doneres til organisationer der hjælper kvinder og børn i Sri Lanka.",
          email: "mailto:Maria.bune@gmail.com",
          founder: { "@type": "Person", name: "Maria", alternateName: "m.b." },
          foundingDate: "2024",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Portefølje", item: "/" },
            { "@type": "ListItem", position: 2, name: "nangi", item: "/nangi" },
          ],
        }),
      },
    ],
  }),
  component: Nangi,
});

function Nangi() {
  return (
    <div className="min-h-screen text-ink">
      {/* Ruled notebook lines + margin line run under everything */}
      <div aria-hidden="true" className="ruled grain pointer-events-none fixed inset-0 -z-10" />

      {/* To-do list menu along the red margin line */}
      <aside aria-label="Site menu" className="fixed inset-y-0 left-0 z-40 hidden w-[232px] flex-col border-r border-margin/60 bg-paper/95 py-8 pl-6 pr-2 md:flex lg:w-[184px]">
        <Link to="/" aria-label="m.b. — back to portefølje" className="w-fit">
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
          <section id="about" aria-labelledby="about-title" className="relative pt-16 pb-14 sm:pt-24">
            <div aria-hidden="true" className="anim-drift absolute -top-2 right-6 size-14 rounded-full bg-flame/80 sm:size-20" />
            <div className="mt-4 max-w-3xl">
              <h1 id="about-title" className="pen-underline anim-rise inline-block pb-4 font-display text-[clamp(3rem,11vw,7.5rem)] leading-[0.9] tracking-tight [animation-delay:80ms]">
                nangi
              </h1>
            </div>
            <p className="hand anim-rise mt-2 text-2xl text-ink-soft [animation-delay:140ms] sm:text-3xl">
              — mit eget lille kreative univers
            </p>

            <div className="mt-10 grid items-center gap-10 md:grid-cols-12">
              <div className="anim-rise [animation-delay:200ms] md:col-span-7">
                <p className="max-w-[46ch] text-lg leading-relaxed sm:text-xl">
                  Nangi er mit eget lille kreative univers. Her eksperimenterer
                  jeg med at designe tøj, producere og udvikle brandet i Sri
                  Lanka. Jeg er vildt begejstret over at se mine skitser komme
                  til live og blive rigtige produkter. Jeg startede projektet
                  for at kombinere min passion for design, mennesker og
                  iværksætteri, og det har udviklet sig til et lille
                  tøjunivers i Sri Lanka.
                </p>
                <h2 className="label-mono mt-8 mb-3 text-ink-soft">Mine roller</h2>
                <ul className="flex max-w-md flex-wrap gap-2">
                  {ROLES.map((role, i) => (
                    <li
                      key={role}
                      className={`label-mono cursor-default rounded-full border-2 bg-paper px-3 py-1.5 text-ink transition-[transform,background-color,color] duration-200 ease-out hover:scale-105 ${
                        i % 3 === 0 ? PILL_ACCENTS[0] : i % 3 === 1 ? PILL_ACCENTS[1] : PILL_ACCENTS[2]
                      }`}
                    >
                      {role}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#hvem"
                    className="rounded-full bg-cyan px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] text-paper transition-transform hover:-translate-y-0.5"
                  >
                    Læs historien
                  </a>
                  <Link
                    to="/"
                    className="rounded-full border-2 border-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:bg-ink hover:text-paper"
                  >
                    ← Portefølje
                  </Link>
                </div>
              </div>
              <div className="anim-rise [animation-delay:280ms] md:col-span-5">
                <div className="relative mx-auto max-w-[280px] rotate-2">
                  <div aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 -translate-x-1/2 -rotate-2" />
                  <img
                    src={nangiCover.url}
                    alt="Maria i lys blå Nangi-top og nederdel, fotograferet foran grønne palmeblade i Sri Lanka"
                    width={1024}
                    height={1280}
                    className="w-full rounded-sm bg-paper-deep object-cover shadow-[0_10px_24px_rgb(0_0_0/0.14)]"
                  />
                  <span className="sticker anim-stamp absolute -bottom-5 -right-4 bg-sun px-3 py-2 hand text-ink">
                    the boss
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- HVEM ER VI ---------- */}
          <section id="hvem" aria-labelledby="hvem-title" className="py-14">
            <p className="label-mono text-flame">01</p>
            <h2 id="hvem-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl tracking-tight sm:text-5xl">
              Hvem er vi?
            </h2>
            <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed">
              <p>
                Nangi er et etisk tøjfirma, der skaber tidsløse designs i 100%
                bomuld, som du har lyst til at række ud efter igen og igen.
                Tøjet designer jeg, og det bliver produceret og sælges i Sri
                Lanka, både i butikker og på markeder. Vi er modsvaret til
                fast-fashion, da vi er et lille team, der lader tingene tage
                den tid det tager. Dermed opnår vi det bedste resultat, og den
                største tilfredshed ved vores medarbejdere.
              </p>
              <p>
                Nangi betyder lillesøster på sinhala, og vores vision er at
                skabe bedre arbejdsforhold for kvinder i Sri Lanka og dermed
                bedre fremtidsudsigter. Derfor doneres 10% af vores profit til
                organisationer der hjælper kvinder/børn i Sri Lanka. Vores
                motto er <strong className="font-bold text-flame">sisters over suppliers</strong>. Nangi er ikke
                perfekt men vi stræber hele tiden på at være ne lille smule
                bedre.
              </p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-6">
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                  Hvad vil det sige at have en etisk produktion?
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {ETHICS.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span aria-hidden="true" className="mt-1 size-4 shrink-0 border-2 border-flame/70" />
                      <span className="text-base leading-relaxed sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-6">
                <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                  Hvad laver vi?
                </h3>
                <div className="mt-6 space-y-6 text-lg leading-relaxed">
                  <p>
                    Jeg startede med at designe et lille udvalg af styles,
                    primært til kvinder, men i mange forskellige farver. Vores
                    kollektion indeholder bukser, shorts, toppe og kjoler, og
                    mange flere styles er på tegnebrættet. En del af konceptet
                    er at du kan mixe og matche forskellige toppe og bunde.
                  </p>
                  <p>
                    Desuden er tøjet behageligt da det er syet i 100% bomuld,
                    og har et løst fit, der passer perfekt til varme tropiske
                    sommerdage. De mange farver giver uendelige muligheder for
                    styling, og gør at du aldrig bliver træt af hverdagen.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ---------- HVORDAN GØR VI ---------- */}
          <section id="hvordan" aria-labelledby="hvordan-title" className="py-14">
            <p className="label-mono text-flame">02</p>
            <h2 id="hvordan-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl tracking-tight sm:text-5xl">
              Hvordan gør vi?
            </h2>
            <p className="hand mt-4 text-2xl text-ink-soft">fra skitse til tøj på kroppen</p>
            <div className="mt-10 space-y-10">
              {PROCESS.map((step, i) => {
                const imgs = "imgs" in step ? step.imgs : null;
                const hasImgs = !!imgs && imgs.length > 0;
                // Steps 1, 3, 5, 7: pictures on the right — steps 2, 4, 6: pictures on the left
                const imgSide = i % 2 === 0 ? "right" : "left";
                // Steps 4, 5 and 7 have slightly smaller pictures
                const smallerImg = i === 3 || i === 4 || i === 6;

                const renderFigure = (im: { img: string; alt: string; caption: string }, k: number) => (
                  <figure key={im.img} className={`relative ${k % 2 === 0 ? "-rotate-1" : "rotate-1"}`}>
                    <span aria-hidden="true" className="tape absolute -top-3 left-1/2 z-10 h-4 w-14 -translate-x-1/2 rotate-2" />
                    <img
                      src={im.img}
                      alt={im.alt}
                      width={800}
                      height={1067}
                      loading="lazy"
                      className="w-full rounded-sm bg-paper-deep object-cover shadow-[0_8px_20px_rgb(0_0_0/0.14)]"
                    />
                    <figcaption className="hand hand-sm mt-2 text-center text-ink-soft">{im.caption}</figcaption>
                  </figure>
                );

                if (!hasImgs) {
                  return (
                    <article
                      key={step.step}
                      className={`grid gap-6 lg:grid-cols-12 ${i > 0 ? "pt-10" : ""}`}
                    >
                      <h3 className={`font-display text-2xl tracking-tight lg:col-span-4 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                        {step.step}
                      </h3>
                      <div className="lg:col-span-8">
                        <p className="text-base leading-relaxed sm:text-lg">{step.text}</p>
                      </div>
                    </article>
                  );
                }

                const imageCol = (
                  <div
                    className={`order-2 grid gap-6 md:order-1 md:col-span-5 md:items-start ${
                      imgs!.length > 1 ? "lg:grid-cols-2" : ""
                    }`}
                  >
                    {imgs!.map((im, k) => renderFigure(im, k))}
                  </div>
                );
                const textCol = (
                  <div className={`order-1 md:col-span-7 ${imgSide === "left" ? "md:order-2" : ""}`}>
                    <h3 className="font-display text-2xl tracking-tight">{step.step}</h3>
                    <p className="mt-3 text-base leading-relaxed sm:text-lg">{step.text}</p>
                  </div>
                );

                return (
                  <article key={step.step} className={`grid gap-6 md:grid-cols-12 ${i > 0 ? "pt-10" : ""}`}>
                    {imgSide === "left" ? (
                      <>
                        {imageCol}
                        {textCol}
                      </>
                    ) : (
                      <>
                        {textCol}
                        {imageCol}
                      </>
                    )}
                  </article>
                );
              })}

            </div>
          </section>

          {/* ---------- PROJEKTER ---------- */}
          <section id="projekter" aria-labelledby="projekter-title" className="py-14">
            <p className="label-mono text-flame">03</p>
            <h2 id="projekter-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl tracking-tight sm:text-5xl">
              Projekter jeg har lavet med Nangi
            </h2>
            <ul className="mt-10 grid gap-8 md:grid-cols-2">
              {PROJECTS.map((project, i) => (
                <li key={project.title}>
                  <article
                    className={`rounded-sm bg-paper p-6 ring-1 ring-ink/15 transition-transform duration-300 hover:rotate-0 sm:p-8 ${i % 2 === 0 ? "-rotate-1" : "rotate-1"}`}
                  >
                    <h3 className="font-display text-2xl leading-snug tracking-tight">{project.title}</h3>
                    <p className="mt-4 text-base leading-relaxed">{project.text}</p>
                    <div className="mt-8 grid grid-cols-2 gap-5">
                      {[0, 1].map((slot) => (
                        <figure key={slot} className="relative">
                          <span aria-hidden="true" className={`tape absolute -top-3 left-1/2 z-10 h-4 w-12 -translate-x-1/2 ${slot === 0 ? "rotate-2" : "-rotate-2"}`} />
                          <div className="aspect-[4/3] rounded-sm border border-dashed border-ink/30 bg-paper-deep" />
                          <figcaption className="hand mt-2 text-center text-ink-soft">billede kommer…</figcaption>
                        </figure>
                      ))}
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- WHAT'S NEXT ---------- */}
          <section id="naeste" aria-labelledby="naeste-title" className="py-14">
            <p className="label-mono text-flame">04</p>
            <h2 id="naeste-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl tracking-tight sm:text-5xl">
              What's next?
            </h2>
            <div className="mt-8 max-w-3xl text-lg leading-relaxed">
              <p>
                I fremtiden drømmer jeg om at Nangi når ud til flere butikker,
                både i Sri Lanka og internationalt. Desuden ønsker jeg, at
                opsætte en hjemmeside med webshop, og videreudvikle Nangis
                online identitet også på sociale medier. Jeg ønsker at få
                systematiseret vores produktion, så vi kan udvide brandet.
              </p>
            </div>
          </section>

          {/* ---------- HVAD HAR JEG LÆRT ---------- */}
          <section id="laert" aria-labelledby="laert-title" className="py-14">
            <p className="label-mono text-flame">05</p>
            <h2 id="laert-title" className="pen-underline mt-2 w-fit pb-2 font-display text-4xl tracking-tight sm:text-5xl">
              Hvad har jeg lært?
            </h2>
            <p className="hand mt-4 text-2xl text-ink-soft">tre sedler fra notesbogen</p>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {LESSONS.map((lesson) => (
                <li key={lesson.title}>
                  <article
                    className={`rounded-sm p-6 transition-transform duration-300 hover:rotate-0 ${lesson.bg} ${lesson.rotate}`}
                  >
                    <h3 className="font-display text-xl leading-snug tracking-tight">
                      {lesson.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed opacity-90">{lesson.text}</p>
                  </article>
                </li>
              ))}
            </ul>
          </section>

          {/* ---------- CONTACT ---------- */}
          <footer aria-labelledby="contact-title" className="border-t-2 border-ink py-16 text-center">
            <h2 id="contact-title" className="mx-auto mt-3 max-w-[18ch] font-display text-[clamp(2.25rem,7vw,4.5rem)] leading-[0.9] tracking-tight">
              Got a project for nangi?
            </h2>
            <a
              href="mailto:Maria.bune@gmail.com"
              className="mt-8 inline-block rounded-full bg-ink px-6 py-4 font-mono text-sm uppercase tracking-[0.15em] text-paper transition-colors hover:bg-flame"
            >
              Maria.bune@gmail.com
            </a>
            <p className="label-mono mt-4 text-ink-soft">
              +45 42 54 95 64
            </p>
            <p className="label-mono mt-14 text-ink-soft">
              © 2026 nangi — a one-woman company
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
