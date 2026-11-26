import type { Metadata } from "next";
import { ListingHero } from "@/components/article/ListingHero";
import { BlogIndex } from "@/components/blog/BlogIndex";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { Reveal } from "@/components/ui/Reveal";
import { blogIndex, blogIndexPath, blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: { absolute: blogIndex.seoTitle },
  description: blogIndex.metaDescription,
  alternates: { canonical: blogIndexPath },
  openGraph: { title: blogIndex.seoTitle, description: blogIndex.metaDescription, url: blogIndexPath },
};

export default function BlogIndexPage() {
  // Cards only need summary fields — keep article bodies out of the client bundle.
  const cards = blogPosts.map(({ slug, title, description, author, publishedAt, categories, readingMinutes, image }) => ({
    slug,
    title,
    description,
    author,
    publishedAt,
    categories,
    readingMinutes,
    image,
  }));
  const authors = new Set(blogPosts.map((p) => p.author)).size;

  return (
    <>
      <ListingHero
        id="blog-index-title"
        eyebrow={blogIndex.eyebrow}
        title={blogIndex.title}
        lead={blogIndex.lead}
        stats={[
          { label: blogIndex.stats.articles, value: blogPosts.length },
          { label: blogIndex.stats.authors, value: authors },
        ]}
      />
      <BlogIndex posts={cards} />
      <ConsultationCta />
      <Reveal />
    </>
  );
}
