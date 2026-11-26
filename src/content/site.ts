import type { LinkItem } from "./types";

export type SocialNetwork = "linkedin" | "instagram" | "facebook" | "youtube";

export const site = {
  name: "Terveys Technology Solutions",
  shortName: "Terveys",
  /** Primary domain — matches the live site (the bare domain redirects to www). */
  url: "https://www.terveystech.com",
  title: "Terveys — Healthcare & MedTech Software Engineering",
  // TODO: confirm meta description wording with marketing.
  description:
    "Terveys Technology Solutions is an ISO 13485, ISO 27001 and ISO 9001 certified software engineering partner for healthcare and medtech — medical devices, medical imaging, hospital systems and digital health.",
  locale: "en",

  /**
   * Logo. Currently a text wordmark.
   * TODO: supply the real logo. Set `image` (e.g. "/images/logo.svg" placed in /public) and the
   * Logo component renders it instead of the wordmark.
   */
  logo: {
    header: { text: "TERVEYSTECH", accent: "." },
    footer: { before: "t", accent: "·", after: "erveys" },
    image: null as null | { src: string; width: number; height: number },
    /** Used by JSON-LD. TODO: replace with the real logo URL. */
    jsonLdUrl: "/logo-placeholder.png",
  },

  /** TODO: replace /og.png (1200×630 placeholder) with the approved social sharing image. */
  ogImage: "/og.png",

  address: {
    streetAddress: "Module No 410, Thejaswini Building, Technopark",
    addressLocality: "Trivandrum",
    addressRegion: "Kerala",
    postalCode: "695581",
    addressCountry: "IN",
  },

  /** Social profiles (as linked from the current terveystech.com). Entries left as "#" are excluded from JSON-LD. */
  social: [
    { network: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/company/terveystech/" },
    { network: "instagram", label: "Instagram", href: "https://www.instagram.com/terveys_official/" },
    { network: "facebook", label: "Facebook", href: "https://www.facebook.com/terveystech" },
    { network: "youtube", label: "YouTube", href: "https://www.youtube.com/@terveystech" },
  ] satisfies Array<{ network: SocialNetwork; label: string; href: string }>,

  skipLink: "Skip to content",
  contact: { label: "Contact Us", href: "/contact" } satisfies LinkItem,
  language: { label: "日本語", href: "/ja", lang: "ja" },
};
