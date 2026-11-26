/** Shared content types. All copy lives in src/content/*.ts. */

/**
 * A piece of rich text. A heading or paragraph is an array of parts:
 * - `br`: insert a line break before this part
 * - `accent`: render in the accent colour (hero + dark healthcare intro only)
 * - `strong`: render bold
 */
export type RichPart = {
  text: string;
  br?: boolean;
  accent?: boolean;
  strong?: boolean;
};
export type Rich = RichPart[];

export type ContentImage = {
  src: string;
  /** Empty string for decorative images. */
  alt: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type ButtonVariant = "primary" | "outline" | "teal" | "white" | "ghost";

export type CtaLink = LinkItem & { variant: ButtonVariant };

/** Body content for article-style pages (blog posts, imported case studies). */
export type ArticleBlock =
  /** Section heading (h2) — `id` is its anchor and the "On this page" entry. */
  | { type: "heading"; id: string; text: string }
  | { type: "subheading"; text: string }
  /** `label` renders bold before the text ("Use HTTPS: …"). */
  | { type: "p"; text: string; label?: string; links?: Array<{ text: string; href: string }> }
  /** Larger opening paragraph. */
  | { type: "lead"; text: string }
  | { type: "quote"; text: string }
  /** Highlighted box. */
  | { type: "callout"; text: string; title?: string }
  | { type: "list"; ordered?: boolean; items: Array<{ label?: string; text: string }> }
  | { type: "table"; head: string[]; rows: string[][] };
