export const siteConfig = {
  name: "AquaKids",
  tagline: "Dive Deeper",
  title: "AquaKids — Schwimmschule für Kinder",
  description:
    "Spielerische Schwimmkurse für Kinder – mit Geduld, Erfahrung und ganz viel Spaß am Wasser. Kleine Gruppen, erfahrene Trainer, sichere Umgebung.",
  url: "https://aquakids.example.de",
  email: "hallo@aquakids.de",
  phone: "+49 30 123 456 78",
  ogImage: "/ocean/objects/buoy-duck.svg",
};

export const navLinks = [
  { href: "#kurse", label: "Kurse" },
  { href: "#warum-wir", label: "Warum wir" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export const trustPoints = [
  {
    title: "kleine Gruppen",
    description: "Maximal 6 Kinder pro Kurs",
  },
  {
    title: "spielerisches Lernen",
    description: "Mit Freude und Sicherheit",
  },
  {
    title: "erfahrene Schwimmtrainer",
    description: "Liebevolle Begleitung",
  },
  {
    title: "sichere Umgebung",
    description: "Vertrauen im Wasser",
  },
] as const;

export const poolInfo = {
  message: "Neue Anfängergruppen ab August verfügbar",
  altMessages: [
    "Ferienpause vom 12.07.–28.07.",
    "Alle Kurse laufen regulär",
  ],
} as const;

export type Course = {
  id: string;
  icon: string;
  title: string;
  age?: string;
  description: string;
  goal?: string;
  formValue: string;
};

export const courses: Course[] = [
  {
    id: "wassergewoehnung",
    icon: "/ocean/animals/starfish.svg",
    title: "Wassergewöhnung",
    age: "2–4 Jahre",
    description: "Spielerischer Einstieg ins Wasser.",
    goal: "Vertrauen zum Wasser entwickeln",
    formValue: "Wassergewöhnung (2–4 Jahre)",
  },
  {
    id: "anfaenger",
    icon: "/ocean/animals/fish-01.svg",
    title: "Anfänger",
    description: "Erste Schwimmbewegungen und Wassersicherheit.",
    goal: "Vorbereitung Seepferdchen",
    formValue: "Anfänger / Seepferdchen",
  },
  {
    id: "fortgeschritten",
    icon: "/ocean/animals/fish-04.svg",
    title: "Fortgeschritten",
    description: "Technik vertiefen und Ausdauer aufbauen.",
    goal: "Sicherer schwimmen",
    formValue: "Fortgeschritten",
  },
  {
    id: "einzeltraining",
    icon: "/ocean/animals/fish-06.svg",
    title: "Einzeltraining",
    description: "Individuelle Förderung mit persönlichem Trainer.",
    goal: "Persönliche Förderung",
    formValue: "Einzeltraining",
  },
];

export type WhyUsIcon =
  | "groups"
  | "care"
  | "patience"
  | "method"
  | "safety"
  | "transparency";

export const whyUsItems = [
  {
    title: "Kleine Gruppen",
    description: "Maximal 6 Kinder pro Kurs – persönliche Aufmerksamkeit.",
    icon: "groups" as const,
  },
  {
    title: "Individuelle Betreuung",
    description: "Jedes Kind lernt im eigenen Tempo – wir passen uns an.",
    icon: "care" as const,
  },
  {
    title: "Geduld statt Druck",
    description: "Kein Zeitdruck, keine Vergleiche – Vertrauen wächst.",
    icon: "patience" as const,
  },
  {
    title: "Spielerische Methode",
    description: "Spiele und Abenteuer – Lernen mit Freude.",
    icon: "method" as const,
  },
  {
    title: "Sicherheit",
    description: "Qualifizierte Trainer und klare Regeln – jeden Tag.",
    icon: "safety" as const,
  },
  {
    title: "Eltern-Transparenz",
    description: "Klare Kommunikation über Fortschritte und Ziele.",
    icon: "transparency" as const,
  },
];

export const processSteps = [
  { number: "01", title: "Kurs auswählen", description: "Passenden Kurs nach Alter und Level finden." },
  { number: "02", title: "Anmeldung", description: "Einfach online oder telefonisch anmelden." },
  { number: "03", title: "Erste Schwimmstunde", description: "Spielerisch und ohne Druck ins Wasser." },
  { number: "04", title: "Fortschritte sammeln", description: "Schritt für Schritt mehr Sicherheit gewinnen." },
  { number: "05", title: "Schwimmabzeichen", description: "Seepferdchen & Co. mit Stolz erreichen." },
];

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Müller",
    role: "Schwimmtrainerin & Gründerin",
    bio: "15 Jahre Erfahrung mit Kindern im Wasser. Ihre Geduld ist legendär.",
    image: "/team/sarah-mueller.png",
  },
  {
    name: "Tom Weber",
    role: "Schwimmtrainer",
    bio: "Ehemaliger Leistungsschwimmer, heute mit Herz für die Kleinsten.",
    image: "/team/tom-weber.png",
  },
  {
    name: "Lisa Hoffmann",
    role: "Wassergewöhnung",
    bio: "Spezialisiert auf die jüngsten Wasserfans ab 2 Jahren.",
    image: "/team/lisa-hoffmann.png",
  },
];

export const locationInfo = {
  name: "HörnBad Kiel",
  address: "Anni-Wadle-Weg 1, 24143 Kiel",
  parking: "Parkmöglichkeiten direkt am Schwimmbad",
  meeting: "Eingangsbereich / Kursbereich Schwimmschule",
  hours: "Mo–Fr 15:00–18:00 Uhr, Sa 10:00–13:00 Uhr",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=HörnBad+Kiel+Anni-Wadle-Weg+1+24143+Kiel",
};

export const faqItems = [
  {
    question: "Was muss mein Kind mitbringen?",
    answer: "Badekleidung, Handtuch, Badeschuhe und eine Wasserflasche. Schwimmbrille ist optional.",
  },
  {
    question: "Dürfen Eltern zuschauen?",
    answer: "Ja, aus der Zuschauergalerie. Für manche Übungen bitten wir um etwas Abstand – das hilft den Kindern.",
  },
  {
    question: "Was passiert bei Krankheit?",
    answer: "Krankgemeldete Stunden können nach Absprache in einem anderen Kurs nachgeholt werden.",
  },
  {
    question: "Kann eine Stunde nachgeholt werden?",
    answer: "Ja, innerhalb von 4 Wochen in einer parallel laufenden Gruppe.",
  },
  {
    question: "Ab welchem Alter?",
    answer: "Wassergewöhnung ab 2 Jahren, Schwimmkurse ab ca. 4 Jahren.",
  },
  {
    question: "Braucht mein Kind Schwimmhilfen?",
    answer: "Am Anfang ja – wir stellen Schwimmflügel und Boards zur Verfügung.",
  },
];

export const courseOptions = [
  "Wassergewöhnung (2–4 Jahre)",
  "Anfänger / Seepferdchen",
  "Fortgeschritten",
  "Einzeltraining",
  "Noch unsicher",
] as const;
