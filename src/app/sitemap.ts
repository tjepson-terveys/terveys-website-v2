import type { MetadataRoute } from "next";
import { segments, segmentPageHref } from "@/content/healthcare";
import { aboutPage } from "@/content/about";
import { blogHref, blogIndexPath, blogPosts } from "@/content/blog";
import { careersPage } from "@/content/careers";
import { caseStudiesIndexPath, caseStudiesWithDetail } from "@/content/caseStudies";
import { contactPage } from "@/content/contact";
import { newsHref, newsIndexPath, newsItems } from "@/content/news";
import { stubPages } from "@/content/pages";
import { services, serviceHref } from "@/content/services";
import { site } from "@/content/site";

/** URLs end with "/" (next.config trailingSlash), matching the served pages. */
const withSlash = (path: string) => (path.endsWith("/") ? path : `${path}/`);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    contactPage.path,
    careersPage.path,
    aboutPage.path,
    caseStudiesIndexPath,
    blogIndexPath,
    newsIndexPath,
    ...Object.values(stubPages).map((p) => p.path),
    ...services.map((s) => serviceHref(s.slug)),
    ...segments.map((s) => segmentPageHref(s.id)),
  ].map((path) => ({
    url: new URL(withSlash(path), site.url).toString(),
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.6,
  }));

  const caseStudyPages = caseStudiesWithDetail().map((cs) => ({
    url: new URL(`${caseStudiesIndexPath}${cs.slug}/`, site.url).toString(),
    lastModified: cs.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const posts = blogPosts.map((p) => ({
    url: new URL(blogHref(p), site.url).toString(),
    lastModified: p.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  const news = newsItems.map((n) => ({
    url: new URL(newsHref(n), site.url).toString(),
    lastModified: n.publishedAt,
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...pages, ...caseStudyPages, ...posts, ...news];
}
