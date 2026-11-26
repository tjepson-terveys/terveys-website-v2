import type { ArticleBlock, ContentImage } from "./types";
import annualDay2025 from "./news/annual-day-2025";
import terveysAchievesIso90012015AndIsoIec270012022Certification from "./news/terveys-achieves-iso-90012015-and-iso-iec-270012022-certification";
import terveysAtArabHealth2025 from "./news/terveys-at-arab-health-2025";
import terveysCelebratesFirstAnniversary from "./news/terveys-celebrates-first-anniversary";
import terveysDelegateAttendsMedicalJapan2024 from "./news/terveys-delegate-attends-medical-japan-2024";
import terveysDelegateVisitsGitex2024 from "./news/terveys-delegate-visits-gitex-2024";
import terveysExpandsToJapanEmbracingNewHorizonsInInnovation from "./news/terveys-expands-to-japan-embracing-new-horizons-in-innovation";
import terveysInauguratesNewOfficeAtTechnoparkTrivandrumIndia from "./news/terveys-inaugurates-new-office-at-technopark-trivandrum-india";
import terveysParticipatesInItem2025 from "./news/terveys-participates-in-item-2025";
import terveystechAchievesIso134852016CertificationForMedicalDeviceQualityManagement from "./news/terveystech-achieves-iso-134852016-certification-for-medical-device-quality-management";

/*
 * News & Events. One file per item in ./news/. The 10 items were imported from the current
 * terveystech.com/news-events/ — like blog posts they live at the site root (/<slug>/),
 * so their URLs carry over unchanged. Never change a published slug.
 */

export type NewsKind = "Event" | "Announcement";

type SizedImage = ContentImage & { width: number; height: number };

export type NewsItem = {
  slug: string;
  title: string;
  /** Exact <title> from the original site (kept for SEO). */
  seoTitle: string;
  kind: NewsKind;
  subtitle?: string;
  /** Summary for listings and the meta description. */
  description: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  image: SizedImage;
  body: ArticleBlock[];
  /** Photos shown in the gallery (with lightbox). */
  gallery: SizedImage[];
  hashtags: string[];
};

export const newsIndexPath = "/news-events/";

export const newsIndex = {
  eyebrow: "Insights",
  title: "News & Events",
  /** Same <title> as the original page. */
  seoTitle: "News & Events - Terveystech",
  lead: "Exploring Insights, Tips, and Inspiration",
  metaDescription: "Company news, certifications and the events where you can meet the Terveystech team.",
  filterLabel: "Show",
  filters: { all: "All", Event: "Events", Announcement: "Announcements" } as const,
  leadLabel: "Latest",
  timelineTitle: "Timeline",
  readLabel: "Read more",
  stats: { stories: "Stories", events: "Events" },
};

export const newsItemPage = {
  breadcrumbRoot: "News & Events",
  galleryTitle: "Photos",
  galleryOpen: "Open photo",
  galleryClose: "Close",
  galleryPrev: "Previous photo",
  galleryNext: "Next photo",
  more: { eyebrow: "Newsroom", heading: "More news & events", viewAll: { label: "All news & events →", href: newsIndexPath } },
};

/** Newest first. */
export const newsItems: NewsItem[] = [
  annualDay2025,
  terveysAchievesIso90012015AndIsoIec270012022Certification,
  terveysAtArabHealth2025,
  terveysCelebratesFirstAnniversary,
  terveysDelegateAttendsMedicalJapan2024,
  terveysDelegateVisitsGitex2024,
  terveysExpandsToJapanEmbracingNewHorizonsInInnovation,
  terveysInauguratesNewOfficeAtTechnoparkTrivandrumIndia,
  terveysParticipatesInItem2025,
  terveystechAchievesIso134852016CertificationForMedicalDeviceQualityManagement,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const newsHref = (item: Pick<NewsItem, "slug">) => `/${item.slug}/`;
export const getNewsItem = (slug: string) => newsItems.find((n) => n.slug === slug);

export const formatNewsDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** { day: "20", month: "Nov", year: 2025 } for date stamps. */
export const newsDateParts = (iso: string) => {
  const d = new Date(`${iso}T00:00:00Z`);
  return {
    day: d.toLocaleDateString("en-GB", { day: "2-digit", timeZone: "UTC" }),
    month: d.toLocaleDateString("en-GB", { month: "short", timeZone: "UTC" }),
    year: d.getUTCFullYear(),
  };
};
