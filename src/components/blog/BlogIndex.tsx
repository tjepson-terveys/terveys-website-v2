"use client";

import { useId, useState } from "react";
import { ArticleTile, FeaturedCard, listingStyles as styles } from "@/components/article/ArticleCards";
import { authorInitials, blogHref, blogIndex, blogPostPage, type BlogPost } from "@/content/blog";
import { Icon } from "@/components/ui/Icon";

type Card = Pick<BlogPost, "slug" | "title" | "description" | "author" | "publishedAt" | "categories" | "readingMinutes" | "image">;

const matches = (p: Card, q: string) =>
  !q || [p.title, p.description, p.author, ...p.categories].join(" ").toLowerCase().includes(q);

export function BlogIndex({ posts }: { posts: Card[] }) {
  const searchId = useId();
  const [query, setQuery] = useState("");
  const q = query.trim().toLowerCase();
  const visible = posts.filter((p) => matches(p, q));
  const [featured, ...rest] = visible;
  const meta = (p: Card) => (
    <span className={styles.metaItem}>
      <span className={styles.avatar} aria-hidden="true">
        {authorInitials(p.author)}
      </span>
      {p.author} · {blogPostPage.minRead(p.readingMinutes)}
    </span>
  );

  return (
    <>
      <div className={styles.toolbar}>
        <div className={`section-wrap ${styles.toolbarInner}`}>
          <p className={styles.summary} aria-live="polite" style={{ margin: 0 }}>
            {blogIndex.showing(visible.length)}
          </p>
          <div className={styles.search}>
            <label htmlFor={searchId} className="visually-hidden">
              {blogIndex.searchLabel}
            </label>
            <Icon name="search" size={18} className={styles.searchIcon} />
            <input
              id={searchId}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={blogIndex.searchPlaceholder}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className={styles.results}>
        <div className="section-wrap">
          {visible.length === 0 ? (
            <div className={styles.empty}>
              <p className={styles.emptyTitle}>{blogIndex.emptyTitle}</p>
              <p className={styles.emptyText}>{blogIndex.emptyText}</p>
              <button type="button" className="btn btn-teal" onClick={() => setQuery("")}>
                {blogIndex.resetLabel}
              </button>
            </div>
          ) : (
            <div key={q} className={styles.list}>
              <FeaturedCard
                href={blogHref(featured)}
                image={featured.image}
                title={featured.title}
                description={featured.description}
                date={featured.publishedAt}
                label={blogIndex.featuredLabel}
                tags={featured.categories}
                readLabel={blogIndex.readLabel}
                meta={meta(featured)}
              />
              {rest.length > 0 && (
                <div className={styles.grid}>
                  {rest.map((p, i) => (
                    <ArticleTile
                      key={p.slug}
                      href={blogHref(p)}
                      image={p.image}
                      title={p.title}
                      description={p.description}
                      date={p.publishedAt}
                      tag={blogPostPage.minRead(p.readingMinutes)}
                      readLabel={blogIndex.readLabel}
                      meta={<span>· {p.author}</span>}
                      index={i}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
