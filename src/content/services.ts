import type { IconName } from "@/components/ui/Icon";
import type { ContentImage, CtaLink, LinkItem, Rich } from "./types";
import aiDataPlatforms from "./services/ai-data-platforms";

/** Full service page content (one file per service in ./services/). */
export type ServiceDetail = {
  metaTitle: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    title: Rich;
    lead: string;
    /** Background slideshow — exactly four photos (the crossfade timing assumes four). */
    backgrounds: [ContentImage, ContentImage, ContentImage, ContentImage];
    /** Floating collage on the right — exactly three images. */
    collage: [ContentImage, ContentImage, ContentImage];
    /** Glass tags floating around the collage (up to four). */
    chips: string[];
    buttons: CtaLink[];
  };
  overview: {
    eyebrow: string;
    heading: Rich;
    items: Array<{ icon: IconName; title: string; text: string }>;
  };
  practices: {
    id: string;
    eyebrow: string;
    heading: string;
    intro: string;
    offersLabel: string;
    /** Accessible name for the sticky index. */
    indexLabel: string;
    items: Array<{ id: string; icon: IconName; title: string; intro: string; image: ContentImage; offers: string[] }>;
  };
  industries: {
    id: string;
    eyebrow: string;
    heading: string;
    intro: string;
    tablistLabel: string;
    items: Array<{ id: string; label: string; title: string; text: string; image: ContentImage; useCases: string[] }>;
  };
  stack: { eyebrow: string; heading: string; intro: string; groups: Array<{ label: string; items: string[] }> };
  perspective: {
    eyebrow: string;
    heading: string;
    intro: string;
    prevLabel: string;
    nextLabel: string;
    goToLabel: string;
    items: Array<{ icon: IconName; tag: string; title: string; text: string; image: ContentImage }>;
  };
  related: { eyebrow: string; heading: string; intro: string; caseStudySlugs: string[] };
  cta: { heading: Rich; body: Rich; buttons: CtaLink[]; trust?: string };
};

export type Service = {
  slug: string;
  number: string;
  name: string;
  /** One-line headline shown on the tile. */
  line: string;
  /** Accessible name for the whole tile link. */
  ariaLabel: string;
  features: string[];
  image: ContentImage;
  /** Lead tile spans two columns. */
  lead?: boolean;
  /** Full page content. Services without it show the "coming soon" page. */
  detail?: ServiceDetail;
};

export const whatWeDo: {
  id: string;
  eyebrow: string;
  heading: Rich;
  intro: string;
  viewAll: LinkItem;
} = {
  id: "capabilities",
  eyebrow: "What We Do",
  heading: [{ text: "Five practice areas." }, { text: "One accountable partner.", br: true }],
  intro:
    "From Generative AI and enterprise systems to cloud infrastructure, digital products, and quality engineering — Terveystech delivers across the full technology stack, powered by AI throughout.",
  viewAll: { label: "View all services →", href: "/services" },
};

// TODO: all tile images are Unsplash stock placeholders — replace with owned imagery.
export const services: Service[] = [
  {
    slug: "ai-data-platforms",
    number: "01",
    name: "AI & Data Platforms",
    line: "Turn Data Into Your Competitive Advantage",
    ariaLabel: "AI and Data Platforms: Explore AI and Data",
    features: ["Generative AI", "Agentic AI systems", "Data pipelines & platforms", "MLOps & LLMOps"],
    image: { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1400&q=80", alt: "" },
    lead: true,
    detail: aiDataPlatforms,
  },
  {
    slug: "enterprise-applications",
    number: "02",
    name: "Enterprise Applications",
    line: "Enterprise Systems That Work Harder for You",
    ariaLabel: "Enterprise Applications: Explore Enterprise Applications",
    features: ["ERP implementation", "EHR / EMR systems", "HL7 / FHIR integration", "Operational intelligence"],
    image: { src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=900&q=80", alt: "" },
  },
  {
    slug: "cloud",
    number: "03",
    name: "Cloud",
    line: "Cloud That Moves at Your Speed",
    ariaLabel: "Cloud: Explore Cloud",
    features: ["Strategy & migration", "AIOps", "FinOps", "Azure · AWS · GCP"],
    image: { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80", alt: "" },
  },
  {
    slug: "digital-product-engineering",
    number: "04",
    name: "Digital Product Engineering",
    line: "Products People Use. Platforms That Scale.",
    ariaLabel: "Digital Product Engineering: Explore Digital Product Engineering",
    features: ["Concept to launch", "Design-led UX", "AI personalisation", "Agentic workflows"],
    image: { src: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=900&q=80", alt: "" },
  },
  {
    slug: "quality-assurance",
    number: "05",
    name: "Quality Assurance",
    line: "Ship With Confidence. Stay Reliable.",
    ariaLabel: "Quality Assurance: Explore Quality Assurance",
    features: ["Test automation", "Performance validation", "Security testing", "Production observability"],
    image: { src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80", alt: "" },
  },
];

export const serviceHref = (slug: string) => `/services/${slug}/`;
export const getService = (slug: string) => services.find((s) => s.slug === slug);
