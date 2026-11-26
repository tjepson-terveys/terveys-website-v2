import type { ArticleBlock, ContentImage } from "./types";
import aiGovernanceInHealthcare from "./blog/ai-governance-in-healthcare";
import aiRagProductionEngineeringLessons from "./blog/ai-rag-production-engineering-lessons";
import harmonizingArchitecturalStyles from "./blog/harmonizing-architectural-styles";
import navigatingTheWatersOfSecurityScanningStaticCodeAnalysisAndOwasp from "./blog/navigating-the-waters-of-security-scanning-static-code-analysis-and-owasp";
import nvidiasEyeTrackingTechCouldRevolutionizeVirtualReality from "./blog/nvidias-eye-tracking-tech-could-revolutionize-virtual-reality";
import schoolsToHoldProgrammingCoursesIn2016 from "./blog/schools-to-hold-programming-courses-in-2016";
import securingApisBestPracticesForRobustApiSecurity from "./blog/securing-apis-best-practices-for-robust-api-security";
import topUseCasesWhereKafkaTrulyShines from "./blog/top-use-cases-where-kafka-truly-shines";
import understandingOauth20AndFederatedAuthentication2 from "./blog/understanding-oauth-2-0-and-federated-authentication-2";
import whatVibeCodingTaughtUsAboutAiAssistedDevelopment from "./blog/what-vibe-coding-taught-us-about-ai-assisted-development";

/*
 * Blog posts. One file per post in ./blog/. The 10 posts were imported from the current
 * terveystech.com/blogs/ — they live at the site root (/<slug>/) exactly as before, so their
 * URLs and search rankings carry over. Never change a published slug (even the odd legacy ones).
 */

export type BlogPost = {
  /** URL slug — the post lives at /<slug>/. */
  slug: string;
  title: string;
  /** Exact <title> from the original site (kept for SEO). */
  seoTitle: string;
  /** Standfirst shown under the title. */
  subtitle?: string;
  /** Card summary and meta description. */
  description: string;
  author: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  /** Topics (beyond the generic "Blog"). */
  categories: string[];
  readingMinutes: number;
  /** Intrinsic size — the post page shows the cover uncropped. */
  image: ContentImage & { width: number; height: number };
  body: ArticleBlock[];
};

export const blogIndexPath = "/blogs/";

export const blogIndex = {
  eyebrow: "Insights",
  title: "Blogs",
  /** Same <title> as the original page. */
  seoTitle: "Blogs - Terveystech",
  lead: "Exploring Insights, Tips, and Inspiration",
  metaDescription: "Insights, tips and lessons from the Terveystech engineering team — AI, healthcare, architecture, security and more.",
  searchLabel: "Search articles",
  searchPlaceholder: "Search articles…",
  featuredLabel: "Latest article",
  readLabel: "Read article",
  showing: (n: number) => `Showing ${n} ${n === 1 ? "article" : "articles"}`,
  emptyTitle: "No articles match your search",
  emptyText: "Try a different keyword.",
  resetLabel: "Clear search",
  stats: { articles: "Articles", authors: "Authors" },
};

export const blogPostPage = {
  breadcrumbRoot: "Blog",
  tocTitle: "On this page",
  byLabel: "By",
  minRead: (n: number) => `${n} min read`,
  shareTitle: "Share this article",
  aboutAuthor: "Written by",
  authorRole: "Terveystech team",
  more: { eyebrow: "Keep Reading", heading: "More from the blog", viewAll: { label: "View all articles →", href: blogIndexPath } },
};

/** Newest first. */
export const blogPosts: BlogPost[] = [
  aiGovernanceInHealthcare,
  aiRagProductionEngineeringLessons,
  harmonizingArchitecturalStyles,
  navigatingTheWatersOfSecurityScanningStaticCodeAnalysisAndOwasp,
  nvidiasEyeTrackingTechCouldRevolutionizeVirtualReality,
  schoolsToHoldProgrammingCoursesIn2016,
  securingApisBestPracticesForRobustApiSecurity,
  topUseCasesWhereKafkaTrulyShines,
  understandingOauth20AndFederatedAuthentication2,
  whatVibeCodingTaughtUsAboutAiAssistedDevelopment,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const blogHref = (post: Pick<BlogPost, "slug">) => `/${post.slug}/`;
export const getBlogPost = (slug: string) => blogPosts.find((p) => p.slug === slug);
export const authorInitials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
