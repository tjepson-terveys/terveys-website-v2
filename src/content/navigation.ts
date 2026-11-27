import type { ContentImage } from "./types";
import { segments, segmentDeepLink, type SegmentId } from "./healthcare";
import { serviceHref, services } from "./services";

export type NavLink = {
  label: string;
  href: string;
  /** When set, clicking also selects this healthcare tab (deep link). */
  segment?: SegmentId;
};

export type MegaMenu = {
  kind: "mega";
  id: string;
  label: string;
  title: string;
  links: NavLink[];
  feature: {
    href: string;
    image: ContentImage;
    kicker: string;
    text: string;
  };
};

export type PlainNavItem = { kind: "link"; label: string; href: string };

export type NavItem = MegaMenu | PlainNavItem;

// TODO: mega-menu feature images are Unsplash stock placeholders — replace with owned imagery.
export const mainNav: NavItem[] = [
  {
    kind: "mega",
    id: "services",
    label: "Services",
    title: "Services",
    links: services.map((s) => ({ label: s.name, href: serviceHref(s.slug) })),
    feature: {
      href: serviceHref("ai-data-platforms"),
      image: { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80", alt: "" },
      kicker: "Practice 01",
      text: "Turn data into your competitive advantage with production-grade AI.",
    },
  },
  {
    kind: "mega",
    id: "industries",
    label: "Healthcare",
    title: "Healthcare & MedTech",
    links: segments.map((s) => ({ label: s.label, href: segmentDeepLink(s.id), segment: s.id })),
    feature: {
      href: "/#industries",
      image: { src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80", alt: "" },
      kicker: "Healthcare",
      text: "Advanced DICOM & medical imaging, built for real-world clinical environments.",
    },
  },
  {
    kind: "mega",
    id: "insights",
    label: "Insights",
    title: "Insights",
    links: [
      { label: "Case Studies", href: "/case-studies/" },
      { label: "Blog", href: "/blogs/" },
      { label: "News & Events", href: "/news-events/" },
    ],
    feature: {
      href: "/case-studies/roi-based-volume-crop-with-cornerstone3d/",
      image: { src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&q=80", alt: "" },
      kicker: "Case Study",
      text: "Focus where it matters: ROI cropping in 3D medical imaging.",
    },
  },
  { kind: "link", label: "About Us", href: "/about" },
  { kind: "link", label: "Careers", href: "/careers" },
];

export const mobileMenu = {
  openLabel: "Open menu",
  closeLabel: "Close menu",
  dialogLabel: "Menu",
};
