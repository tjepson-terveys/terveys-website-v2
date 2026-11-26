import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { BlogPostArticle, BlogPostFallback } from "@/components/blog/BlogPostArticle";
import { NewsArticle } from "@/components/news/NewsArticle";
import { Reveal } from "@/components/ui/Reveal";
import { blogHref, blogPosts, getBlogPost } from "@/content/blog";
import { getNewsItem, newsHref, newsItems } from "@/content/news";
import { site } from "@/content/site";

/*
 * Blog posts and News & Events items live at the site root (/<slug>/), exactly like the
 * original WordPress site, so existing URLs keep their search rankings. Unknown slugs 404.
 */

type Params = PageProps<"/[slug]">["params"];

export function generateStaticParams() {
  return [...blogPosts, ...newsItems].map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug) ?? getNewsItem(slug);
  if (!post) return {};
  const path = `/${post.slug}/`;
  const author = "author" in post ? post.author : undefined;
  return {
    title: { absolute: post.seoTitle },
    description: post.description,
    alternates: { canonical: path },
    ...(author ? { authors: [{ name: author }] } : {}),
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.description,
      url: path,
      publishedTime: post.publishedAt,
      ...(author ? { authors: [author] } : {}),
      images: [{ url: post.image.src }],
    },
  };
}

const jsonLdScript = (data: object) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
);

async function RootArticle({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (post) {
    return (
      <>
        <BlogPostArticle post={post} />
        <Reveal />
        {jsonLdScript({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.description,
          image: new URL(post.image.src, site.url).toString(),
          datePublished: post.publishedAt,
          author: { "@type": "Person", name: post.author },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          mainEntityOfPage: new URL(blogHref(post), site.url).toString(),
        })}
      </>
    );
  }

  const item = getNewsItem(slug);
  if (!item) notFound();
  return (
    <>
      <NewsArticle item={item} />
      <Reveal />
      {jsonLdScript({
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: item.title,
        description: item.description,
        image: [item.image, ...item.gallery].map((i) => new URL(i.src, site.url).toString()),
        datePublished: item.publishedAt,
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: { "@type": "Organization", name: site.name, url: site.url },
        mainEntityOfPage: new URL(newsHref(item), site.url).toString(),
      })}
    </>
  );
}

export default function RootSlugPage({ params }: PageProps<"/[slug]">) {
  return (
    <Suspense fallback={<BlogPostFallback />}>
      <RootArticle params={params} />
    </Suspense>
  );
}
