export type PortfolioProject = {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  isDesignStudy?: boolean;
  accent: string;
};

export type Capability = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const siteConfig = {
  name: "Sebastian Happe",
  title: "Sebastian Happe — Digital Products & Web Development",
  description:
    "Websites, Landingpages und Progressive Web Apps — klar gestaltet, technisch sauber umgesetzt. Portfolio von Sebastian Happe.",
  url: "https://sebastianhappe.de",
  email: "hello@sebastianhappe.de",
  ogImage: "/og-image.png",
};

export const navLinks = [
  { href: "#work", label: "Portfolio" },
  { href: "#capabilities", label: "Leistungen" },
  { href: "#process", label: "Prozess" },
  { href: "#about", label: "Über mich" },
  { href: "#contact", label: "Kontakt" },
];

export const projects: PortfolioProject[] = [
  {
    id: "atlas-pwa",
    title: "Atlas Field Service",
    category: "Progressive Web App",
    description:
      "Offline-fähige PWA für Außendienst-Teams mit Echtzeit-Sync, GPS-Routing und intuitivem Dashboard.",
    tags: ["PWA", "React", "Offline-First", "TypeScript"],
    url: "#",
    accent: "#4d9fff",
  },
  {
    id: "lumen-landing",
    title: "Lumen Studio",
    category: "Landingpage",
    description:
      "Conversion-optimierte Landingpage für ein Design-Studio mit scroll-basierten Animationen und klarem Funnel.",
    tags: ["Next.js", "Animation", "SEO", "Performance"],
    url: "#",
    accent: "#7c6fff",
  },
  {
    id: "craft-website",
    title: "Craft & Co.",
    category: "Website",
    description:
      "Mehrseitige Unternehmenswebsite für ein Handwerksunternehmen — modern, vertrauenswürdig, mobil-first.",
    tags: ["Website", "CMS", "Responsive", "Accessibility"],
    url: "#",
    accent: "#38d9c0",
  },
  {
    id: "pulse-dashboard",
    title: "Pulse Analytics",
    category: "Designstudie",
    description:
      "Konzept für ein Echtzeit-Analytics-Dashboard mit datengetriebenen Visualisierungen und Dark-Mode-UI.",
    tags: ["UI/UX", "Dashboard", "Data Viz", "Figma"],
    url: "#",
    isDesignStudy: true,
    accent: "#ff6b9d",
  },
  {
    id: "flow-onboarding",
    title: "Flow Onboarding",
    category: "Designstudie",
    description:
      "Microinteraction-Studie für einen mehrstufigen Onboarding-Flow mit progressiven Disclosure-Patterns.",
    tags: ["Microinteractions", "UX", "Motion", "Prototyp"],
    url: "#",
    isDesignStudy: true,
    accent: "#ffb84d",
  },
];

export const capabilities: Capability[] = [
  {
    id: "websites",
    title: "Websites",
    description:
      "Mehrseitige Unternehmenswebsites mit klarer Struktur, schnellen Ladezeiten und professionellem Auftritt.",
    icon: "◈",
  },
  {
    id: "landingpages",
    title: "Landingpages",
    description:
      "Fokussierte Seiten für Kampagnen und Produkt-Launches — conversion-orientiert und visuell präzise.",
    icon: "◇",
  },
  {
    id: "pwa",
    title: "Progressive Web Apps",
    description:
      "App-ähnliche Web-Erlebnisse mit Offline-Fähigkeit, Push-Notifications und installierbar auf jedem Gerät.",
    icon: "⬡",
  },
  {
    id: "uiux",
    title: "UI/UX",
    description:
      "Durchdachte Interfaces mit Fokus auf Nutzerführung, Lesbarkeit und konsistentem Design-System.",
    icon: "◎",
  },
  {
    id: "animation",
    title: "Animation & Microinteractions",
    description:
      "Dezente Bewegung, die Orientierung gibt und Interaktionen lebendig macht — ohne Ablenkung.",
    icon: "◉",
  },
  {
    id: "performance",
    title: "Performance & SEO",
    description:
      "Technische Basis für schnelle Ladezeiten, gute Lighthouse-Scores und solide Suchmaschinen-Grundlagen.",
    icon: "◆",
  },
  {
    id: "ai",
    title: "KI-Integration",
    description:
      "Optionale Integration von KI-Features — Chatbots, Content-Assistenz oder intelligente Automatisierung.",
    icon: "✦",
  },
];

export const processSteps: ProcessStep[] = [
  {
    id: "understand",
    number: "01",
    title: "Idee verstehen",
    description:
      "Ziele, Zielgruppe und Anforderungen klären. Was soll die Lösung leisten — und was nicht?",
  },
  {
    id: "structure",
    number: "02",
    title: "Struktur entwickeln",
    description:
      "Informationsarchitektur, User Flows und technische Grundlage definieren, bevor Design beginnt.",
  },
  {
    id: "design",
    number: "03",
    title: "Design formen",
    description:
      "Visuelles Konzept, Typografie und Interaktionsmuster — klar, konsistent, auf den Nutzer ausgerichtet.",
  },
  {
    id: "build",
    number: "04",
    title: "Umsetzung",
    description:
      "Sauberer, wartbarer Code mit modernen Technologien. Performance und Accessibility von Anfang an.",
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    description:
      "Deployment, Testing und Übergabe. Optional: Monitoring, Updates und kontinuierliche Verbesserung.",
  },
];
