import {
  Building2,
  Stethoscope,
  Droplets,
  HardHat,
  Settings,
  Layers,
  Trash2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

// --- TYPES ---

export interface Stat {
  value: string;
  label: string;
}

export interface CoreService {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  detailDescription: string;
  tags: string[];
  image: string;
  metaDescription: string;
}

export interface SpecializedService {
  slug: string;
  title: string;
  desc: string;
  detailDescription: string;
  icon: LucideIcon;
  metaDescription: string;
}

export interface FormServiceOption {
  id: string;
  title: string;
  icon: LucideIcon;
}

// --- DATA ---

export const stats: Stat[] = [
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "250+", label: "Betreute Objekte" },
  { value: "24/7", label: "Einsatzbereitschaft" },
  { value: "100%", label: "Diskretion & Qualität" },
];

export const coreServices: CoreService[] = [
  {
    id: "unterhalt",
    slug: "unterhaltsreinigung",
    title: "Unterhaltsreinigung",
    subtitle: "Das Fundament für Ihren Erfolg.",
    description:
      "Eine makellose Arbeitsumgebung ist kein Luxus, sondern ein Standard. Wir reinigen Büros, Praxen und Kanzleien mit höchster Präzision. Unauffällig, zuverlässig und perfekt getaktet.",
    detailDescription:
      "Unsere Unterhaltsreinigung bildet das Rückgrat einer gepflegten Immobilie. Ob Bürokomplexe, Arztpraxen, Kanzleien oder Verwaltungsgebäude – wir sorgen dafür, dass Ihre Räumlichkeiten jeden Tag in einwandfreiem Zustand sind.\n\nUnser Service umfasst die tägliche oder wöchentliche Reinigung von Büroflächen, Sanitäranlagen, Teeküchen, Empfangsbereichen und Fluren. Wir arbeiten mit professionellen Reinigungsmitteln und modernen Maschinen, die selbst empfindliche Oberflächen schonend behandeln.\n\nJeder Einsatz wird individuell auf Ihre Bedürfnisse abgestimmt. Wir erstellen detaillierte Leistungsverzeichnisse, führen regelmäßige Qualitätskontrollen durch und passen unsere Arbeitszeiten flexibel an Ihren Betriebsablauf an – ob früh morgens, abends oder am Wochenende.",
    tags: ["Büros", "Sanitäranlagen", "Küchen", "Flure"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
    metaDescription:
      "Professionelle Unterhaltsreinigung in Berlin – tägliche Büroreinigung, Sanitäranlagen, Küchen & Flure. Zuverlässig, diskret und individuell auf Ihre Bedürfnisse abgestimmt.",
  },
  {
    id: "bau",
    slug: "bauendreinigung",
    title: "Bauendreinigung",
    subtitle: "Vom Rohbau zur Schlüsselübergabe.",
    description:
      "Wir übernehmen den entscheidenden letzten Schritt. Entfernung von Bauschutt, Feinstaub und Schutzfolien. Pünktlich zur Abnahme erstrahlt Ihr Projekt in perfektem Zustand.",
    detailDescription:
      "Die Bauendreinigung ist der letzte Schritt vor der Übergabe – und oft der entscheidende Eindruck. Wir sorgen dafür, dass Ihr Bauprojekt makellos übergeben wird.\n\nUnser Service umfasst die komplette Grobreinigung (Entfernung von Bauschutt, Folien, Kleberesten) und die anschließende Feinreinigung aller Oberflächen. Dazu gehören die Beseitigung von Zementschleiern auf Fliesen, die Reinigung aller Fenster und Glasflächen, die Säuberung sanitärer Einrichtungen sowie die Endreinigung von Böden und Treppenräumen.\n\nWir arbeiten termingerecht und koordinieren uns direkt mit Ihrer Bauleitung. Ob Neubau, Sanierung oder Umbau – unsere erfahrenen Teams kennen die Anforderungen und liefern Ergebnisse, die jeder Abnahme standhalten.",
    tags: ["Grobreinigung", "Feinreinigung", "Zementschleier"],
    image:
      "https://images.unsplash.com/photo-1541888055655-70e281cc1f13?auto=format&fit=crop&q=80&w=2000",
    metaDescription:
      "Professionelle Bauendreinigung in Berlin – Grobreinigung, Feinreinigung, Zementschleier-Entfernung. Termingerecht und abnahmesicher für Neubau & Sanierung.",
  },
  {
    id: "glas",
    slug: "glas-und-fassadenreinigung",
    title: "Glas- & Fassadenreinigung",
    subtitle: "Ihre Visitenkarte nach außen.",
    description:
      "Streifenfreie Sicht und repräsentative Fassaden. Mit modernster Technik reinigen wir auch schwer zugängliche Flächen, Schaufenster und moderne Glasarchitektur.",
    detailDescription:
      "Saubere Fenster und gepflegte Fassaden sind die Visitenkarte Ihres Unternehmens. Wir sorgen dafür, dass Ihr Gebäude von außen genauso überzeugt wie von innen.\n\nUnser Leistungsspektrum reicht von der klassischen Fensterreinigung über die Pflege großflächiger Glasfassaden bis hin zur Reinigung von Schaufenstern und Wintergärten. Dabei setzen wir auf modernste Technik: Teleskopstangen mit Reinwasser-System für streifenfreie Ergebnisse, Hubarbeitsbühnen für schwer zugängliche Bereiche und schonende Reinigungsmittel für empfindliche Materialien.\n\nWir bieten flexible Intervalle – von der einmaligen Grundreinigung bis zum regelmäßigen Wartungsvertrag. Auch Sonderreinigungen nach Bauarbeiten oder Witterungsschäden gehören zu unserem Repertoire.",
    tags: ["Fenster", "Glasfassaden", "Schaufenster"],
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2000",
    metaDescription:
      "Professionelle Glas- & Fassadenreinigung in Berlin – streifenfreie Fenster, Glasfassaden & Schaufenster. Modernste Technik für jede Höhe und Fläche.",
  },
];

export const specializedServices: SpecializedService[] = [
  {
    slug: "praxis-und-hygienereinigung",
    title: "Praxis- & Hygienereinigung",
    desc: "Arbeit nach strengsten Vorgaben und Desinfektionsplänen für medizinische Einrichtungen.",
    detailDescription:
      "Medizinische Einrichtungen stellen höchste Anforderungen an Hygiene und Sauberkeit. Unsere spezialisierten Teams arbeiten nach den Vorgaben des Robert Koch-Instituts und erstellen individuelle Hygiene- und Desinfektionspläne für Ihre Praxis, Klinik oder Pflegeeinrichtung.\n\nWir reinigen und desinfizieren Behandlungsräume, Wartezimmer, Sanitärbereiche und Laborflächen mit zugelassenen medizinischen Desinfektionsmitteln. Alle Mitarbeiter sind in den relevanten Hygienevorschriften geschult und werden regelmäßig weitergebildet.\n\nDokumentation und Nachweisführung sind für uns selbstverständlich – für Ihre Sicherheit und die Ihrer Patienten.",
    icon: Stethoscope,
    metaDescription:
      "Professionelle Praxis- & Hygienereinigung in Berlin – RKI-konforme Desinfektion für Arztpraxen, Kliniken & Pflegeeinrichtungen. Geschultes Fachpersonal.",
  },
  {
    slug: "teppich-und-textilreinigung",
    title: "Teppich- & Textilreinigung",
    desc: "Fasertiefe Maschinenreinigung für fest verlegte Böden. Verlängert die Lebensdauer erheblich.",
    detailDescription:
      "Teppichböden und textile Beläge sind Schmutzfänger und Allergieauslöser zugleich. Unsere professionelle Tiefenreinigung entfernt nicht nur sichtbaren Schmutz, sondern auch Milben, Bakterien und tief sitzende Verunreinigungen.\n\nWir setzen auf bewährte Sprühextraktions-Verfahren und moderne Schaumreinigung, die Ihre Textilien schonend und gründlich reinigen. Das Ergebnis: frische Farben, angenehmer Geruch und eine deutlich verlängerte Lebensdauer Ihrer Bodenbeläge.\n\nOb Teppichboden im Großraumbüro, Polstermöbel im Empfangsbereich oder textile Wandbespannungen – wir haben die passende Lösung.",
    icon: Sparkles,
    metaDescription:
      "Professionelle Teppich- & Textilreinigung in Berlin – Tiefenreinigung für Teppichböden, Polster & Textilien. Verlängert die Lebensdauer, entfernt Allergene.",
  },
  {
    slug: "industrie-und-hallenreinigung",
    title: "Industrie- & Hallenreinigung",
    desc: "Aufsitzmaschinen und Hochdrucktechnik für riesige Flächen in Produktion und Logistik.",
    detailDescription:
      "Produktionshallen, Lagerflächen und Logistikzentren erfordern leistungsstarke Reinigungstechnik und erfahrene Teams. Wir reinigen Industrieflächen jeder Größe – von der kleinen Werkstatt bis zur Großhalle.\n\nUnsere Ausstattung umfasst Aufsitz-Scheuersaugmaschinen, Hochdruckreiniger, Industriesauger und Spezialgeräte für die Maschinenreinigung. Wir entfernen Öl, Fett, Produktionsrückstände und Staub zuverlässig und sorgen für sichere, saubere Arbeitsbedingungen.\n\nAuch Sonderreinigungen wie die Entfettung von Produktionsanlagen oder die Reinigung nach Umbauten gehören zu unserem Leistungsspektrum.",
    icon: Settings,
    metaDescription:
      "Professionelle Industrie- & Hallenreinigung in Berlin – Aufsitzmaschinen, Hochdrucktechnik für Produktion & Logistik. Großflächen effizient gereinigt.",
  },
  {
    slug: "treppenhausreinigung",
    title: "Treppenhausreinigung",
    desc: "Repräsentative Eingangsbereiche und Aufgänge für Wohnanlagen und Gewerbeparks.",
    detailDescription:
      "Das Treppenhaus ist der erste Eindruck für Bewohner, Mieter und Besucher. Wir sorgen dafür, dass Eingangsbereiche, Treppenstufen, Geländer und Aufzüge stets einladend und gepflegt wirken.\n\nUnser Service umfasst die regelmäßige Nassreinigung der Böden, das Wischen von Handläufen und Geländern, die Reinigung von Briefkastenanlagen, Eingangstüren und Aufzugskabinen sowie den Winterdienst im Eingangsbereich.\n\nWir betreuen Wohnanlagen, Bürogebäude und Gewerbeparks gleichermaßen – mit festen Ansprechpartnern und zuverlässigen Reinigungsintervallen.",
    icon: Layers,
    metaDescription:
      "Professionelle Treppenhausreinigung in Berlin – saubere Eingangsbereiche, Treppenstufen & Aufzüge für Wohnanlagen und Gewerbe. Regelmäßig & zuverlässig.",
  },
  {
    slug: "entruempelungen",
    title: "Entrümpelungen",
    desc: "Diskrete und besenreine Räumungen inklusive fachgerechter Entsorgung.",
    detailDescription:
      "Ob Wohnungsauflösung, Kellerentrümpelung oder Geschäftsräumung – wir übernehmen die komplette Entrümpelung diskret, schnell und besenrein.\n\nUnser Service umfasst die Sichtung und Sortierung des Inventars, den fachgerechten Abtransport, die umweltgerechte Entsorgung und auf Wunsch die anschließende Endreinigung der Räumlichkeiten. Verwertbare Gegenstände werden nach Absprache gespendet oder recycelt.\n\nWir arbeiten diskret und respektvoll – auch in sensiblen Situationen wie Nachlassräumungen. Alle Arbeiten werden dokumentiert und termingerecht abgeschlossen.",
    icon: Trash2,
    metaDescription:
      "Professionelle Entrümpelung in Berlin – diskret, schnell & besenrein. Wohnungsauflösung, Kellerentrümpelung & fachgerechte Entsorgung inklusive.",
  },
];

export const formServiceOptions: FormServiceOption[] = [
  { id: "unterhalt", title: "Unterhaltsreinigung", icon: Building2 },
  { id: "bau", title: "Bauendreinigung", icon: HardHat },
  { id: "glas", title: "Glas- & Fassaden", icon: Droplets },
  { id: "praxis", title: "Praxis & Hygiene", icon: Stethoscope },
  { id: "andere", title: "Sonstiges / Beratung", icon: Settings },
];

export const frequencyOptions = [
  "Täglich",
  "Mehrmals wöchentlich",
  "Wöchentlich",
  "Einmalig / Auf Anfrage",
] as const;

export const clientLogos = [
  "Immobilien AG",
  "Klinikum Süd",
  "TechSpace",
  "Logistik Zentrum",
  "Kanzlei Weber",
];

// --- HELPERS ---

export function getAllServiceSlugs(): string[] {
  return [
    ...coreServices.map((s) => s.slug),
    ...specializedServices.map((s) => s.slug),
  ];
}

export function findServiceBySlug(slug: string) {
  const core = coreServices.find((s) => s.slug === slug);
  if (core) return { type: "core" as const, service: core };
  const specialized = specializedServices.find((s) => s.slug === slug);
  if (specialized) return { type: "specialized" as const, service: specialized };
  return null;
}
