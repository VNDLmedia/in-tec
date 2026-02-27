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
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  image: string;
}

export interface SpecializedService {
  title: string;
  desc: string;
  icon: LucideIcon;
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
    title: "Unterhaltsreinigung",
    subtitle: "Das Fundament für Ihren Erfolg.",
    description:
      "Eine makellose Arbeitsumgebung ist kein Luxus, sondern ein Standard. Wir reinigen Büros, Praxen und Kanzleien mit höchster Präzision. Unauffällig, zuverlässig und perfekt getaktet.",
    tags: ["Büros", "Sanitäranlagen", "Küchen", "Flure"],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "bau",
    title: "Bauendreinigung",
    subtitle: "Vom Rohbau zur Schlüsselübergabe.",
    description:
      "Wir übernehmen den entscheidenden letzten Schritt. Entfernung von Bauschutt, Feinstaub und Schutzfolien. Pünktlich zur Abnahme erstrahlt Ihr Projekt in perfektem Zustand.",
    tags: ["Grobreinigung", "Feinreinigung", "Zementschleier"],
    image:
      "https://images.unsplash.com/photo-1541888055655-70e281cc1f13?auto=format&fit=crop&q=80&w=2000",
  },
  {
    id: "glas",
    title: "Glas- & Fassaden",
    subtitle: "Ihre Visitenkarte nach außen.",
    description:
      "Streifenfreie Sicht und repräsentative Fassaden. Mit modernster Technik reinigen wir auch schwer zugängliche Flächen, Schaufenster und moderne Glasarchitektur.",
    tags: ["Fenster", "Glasfassaden", "Schaufenster"],
    image:
      "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=2000",
  },
];

export const specializedServices: SpecializedService[] = [
  {
    title: "Praxis- & Hygienereinigung",
    desc: "Arbeit nach strengsten Vorgaben und Desinfektionsplänen für medizinische Einrichtungen.",
    icon: Stethoscope,
  },
  {
    title: "Teppich- & Textilreinigung",
    desc: "Fasertiefe Maschinenreinigung für fest verlegte Böden. Verlängert die Lebensdauer erheblich.",
    icon: Sparkles,
  },
  {
    title: "Industrie- & Hallenreinigung",
    desc: "Aufsitzmaschinen und Hochdrucktechnik für riesige Flächen in Produktion und Logistik.",
    icon: Settings,
  },
  {
    title: "Treppenhausreinigung",
    desc: "Repräsentative Eingangsbereiche und Aufgänge für Wohnanlagen und Gewerbeparks.",
    icon: Layers,
  },
  {
    title: "Entrümpelungen",
    desc: "Diskrete und besenreine Räumungen inklusive fachgerechter Entsorgung.",
    icon: Trash2,
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
