import { segments, segmentDeepLink } from "./healthcare";
import { serviceHref } from "./services";
import type { NavLink } from "./navigation";

export type FooterColumn = {
  title: string;
  links: NavLink[];
  /** Recent posts render in lighter text and span the full row on tablet. */
  posts?: boolean;
};

export type IsoBadge = {
  /** Accessible label, e.g. "ISO 27001 certified". */
  label: string;
  standard: string;
  /**
   * TODO: official ISO certification badge artwork. Put files in public/images/badges/ and set
   * e.g. image: "/images/badges/iso-27001.png". Until then a CSS badge is rendered.
   */
  image?: string;
};

export const footerColumns: FooterColumn[] = [
  {
    title: "Our Services",
    // TODO: footer service names differ from the five practice areas — confirm these destinations.
    links: [
      { label: "Software Development", href: serviceHref("digital-product-engineering") },
      { label: "Data/AI", href: serviceHref("ai-data-platforms") },
      { label: "Cloud Engineering", href: serviceHref("cloud") },
      { label: "UI/UX Design", href: serviceHref("digital-product-engineering") },
      { label: "Quality Assurance", href: serviceHref("quality-assurance") },
    ],
  },
  {
    title: "Healthcare & MedTech",
    links: segments.map((s) => ({ label: s.label, href: segmentDeepLink(s.id), segment: s.id })),
  },
  {
    title: "Insight",
    links: [
      { label: "Case Studies", href: "/case-studies/" },
      { label: "Blogs", href: "/blogs/" },
      { label: "News & Events", href: "/news-events/" },
    ],
  },
  {
    title: "Careers",
    links: [
      { label: "Current Openings", href: "/careers#current-openings" },
      { label: "Life At Terveys", href: "/careers#life-at-terveys" },
    ],
  },
  {
    title: "Recent Posts",
    posts: true,
    links: [
      { label: "AI Governance in Healthcare", href: "/ai-governance-in-healthcare/" },
      { label: "The RAG Reality Check", href: "/ai-rag-production-engineering-lessons/" },
      { label: "Terveys Inaugurates New Office at Technopark, Trivandrum, India", href: "/terveys-inaugurates-new-office-at-technopark-trivandrum-india/" },
      { label: "What Vibe Coding Taught Us About AI-Assisted Development", href: "/what-vibe-coding-taught-us-about-ai-assisted-development/" },
    ],
  },
];

export const isoBadges: IsoBadge[] = [
  { label: "ISO 27001 certified", standard: "27001", image: "/images/badges/iso-27001.png" },
  { label: "ISO 9001 certified", standard: "9001", image: "/images/badges/iso-9001.png" },
  { label: "ISO 13485:2016 certified", standard: "13485:2016", image: "/images/badges/iso-13485.png" },
];

export const footerMeta = {
  privacy: { label: "Privacy Policy", href: "/privacy-policy" },
  /** `{year}` is replaced with the current year. */
  copyright: "© {year} Terveys Technology Solutions. All Rights Reserved.",
  backToTop: "Back to top",
};
