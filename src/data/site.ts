export type PortfolioProject = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  previewImage?: string;
};

export type Capability = {
  id: string;
  title: string;
  description: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const siteConfig = {
  name: "shape",
  tagline: "DIGITALE ARCHITEKTUR",
  title: "shape — Digitale Architektur",
  description:
    "Digitale Räume, geformt aus Ideen. Websites, Web Apps und Progressive Web Apps — präzise gestaltet und technisch umgesetzt von shape.",
  url: "https://sebastianhappe.de",
  email: "hello@sebastianhappe.de",
  ogImage: "/shape_logo_primary@4x.png",
};

export const navLinks = [
  { href: "#work", label: "Projekte" },
  { href: "#capabilities", label: "Leistungen" },
  { href: "#process", label: "Prozess" },
  { href: "#about", label: "Studio" },
  { href: "#contact", label: "Kontakt" },
];

export const projects: PortfolioProject[] = [
  {
    id: "anslik-brandschutz",
    number: "01",
    title: "Anslik Brandschutz",
    category: "Unternehmenswebsite",
    description:
      "Konzeption, Design und Entwicklung einer modernen Unternehmenswebsite mit klarer Informationsarchitektur und vertrauenswürdiger Markenwirkung.",
    tags: ["Next.js", "Responsive", "SEO", "Corporate"],
    url: "https://anslik-brandschutz.pages.dev/",
    previewImage: "/projects/Anslik_Brandschutz.png",
  },
  {
    id: "coachpilot-ai",
    number: "02",
    title: "CoachPilot AI",
    category: "Progressive Web App",
    description:
      "KI-gestützte PWA für Fahrer und Unternehmen — Mobile First, installierbar und für den täglichen Einsatz entwickelt.",
    tags: ["AI", "PWA", "TypeScript", "Mobile First"],
    url: "https://coachpilot-ai.pages.dev/",
    previewImage: "/projects/CoachPilotAI.png",
  },
  {
    id: "moodpop",
    number: "03",
    title: "MoodPop",
    category: "Interactive Experience",
    description:
      "Interaktive Web-App mit KI-generierten Inhalten, Animationen und spielerischer Benutzerführung.",
    tags: ["AI", "Interactive", "Animations", "Frontend"],
    url: "https://moodpop.pages.dev/",
    previewImage: "/projects/Mood_Critters.png",
  },
];

export const capabilities: Capability[] = [
  {
    id: "websites",
    title: "Websites",
    description:
      "Individuelle Websites mit klarer Struktur, hochwertiger Gestaltung und schneller Performance.",
  },
  {
    id: "web-apps",
    title: "Web Apps",
    description:
      "Interaktive Anwendungen, Kundenbereiche und digitale Tools — direkt im Browser.",
  },
  {
    id: "pwa",
    title: "Progressive Web Apps",
    description:
      "Installierbare, offlinefähige Lösungen für mobile und stationäre Nutzung.",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Durchdachte Oberflächen, Nutzerführung und visuelle Systeme bis ins Detail.",
  },
  {
    id: "ai",
    title: "KI-Integration",
    description:
      "Intelligente Funktionen, Automatisierungen und smarte Workflows in digitalen Produkten.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "analyse",
    number: "01",
    title: "Analyse",
    description: "Ziele, Kontext und Anforderungen verstehen — die Grundlage jedes Entwurfs.",
  },
  {
    id: "struktur",
    number: "02",
    title: "Struktur",
    description: "Informationsarchitektur, Abläufe und technische Basis definieren.",
  },
  {
    id: "gestaltung",
    number: "03",
    title: "Gestaltung",
    description: "Visuelles Konzept, Typografie und Interaktion entwickeln.",
  },
  {
    id: "entwicklung",
    number: "04",
    title: "Entwicklung",
    description: "Sauberer Code, Performance und Accessibility von Anfang an.",
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    description: "Deployment, Testing und Übergabe des fertigen Produkts.",
  },
  {
    id: "betreuung",
    number: "06",
    title: "Betreuung",
    description: "Weiterentwicklung, Pflege und technische Unterstützung.",
  },
];
