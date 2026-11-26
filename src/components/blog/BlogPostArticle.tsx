import Image from "next/image";
import Link from "next/link";
import { ArticleBody, articleToc } from "@/components/article/ArticleBody";
import { ArticleTile } from "@/components/article/ArticleCards";
import listing from "@/components/article/Listing.module.css";
import { CaseStudyToc } from "@/components/caseStudy/CaseStudyToc";
import cs from "@/components/caseStudy/CaseStudy.module.css";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { Icon } from "@/components/ui/Icon";
import { authorInitials, blogHref, blogIndexPath, blogPostPage, blogPosts, type BlogPost } from "@/content/blog";
import { site } from "@/content/site";
import styles from "./BlogPost.module.css";

const dateFmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

/** Shown while the route's params resolve during client navigation. */
export function BlogPostFallback() {
  return <div className={cs.header} style={{ minHeight: 480 }} aria-hidden="true" />;
}

export function BlogPostArticle({ post }: { post: BlogPost }) {
  const toc = articleToc(post.body);
  const url = new URL(blogHref(post), site.url).toString();
  const share = [
    { label: "LinkedIn", icon: "linkedin" as const, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { label: "Facebook", icon: "facebook" as const, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
    { label: "Email", icon: "mail" as const, href: `mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(url)}` },
  ];
  const more = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <header className={cs.header} data-surface="dark">
        <div className={`section-wrap ${cs.headerInner}`}>
          <nav aria-label="Breadcrumb">
            <ol className={cs.breadcrumb}>
              <li>
                <Link href={blogIndexPath}>{blogPostPage.breadcrumbRoot}</Link>
              </li>
              <li aria-current="page">{post.title}</li>
            </ol>
          </nav>
          <h1 className={cs.title}>{post.title}</h1>
          {post.subtitle && <p className={cs.lede}>{post.subtitle}</p>}
          <div className={styles.byline}>
            <span className={styles.avatar} aria-hidden="true">
              {authorInitials(post.author)}
            </span>
            <span>
              {blogPostPage.byLabel} <strong>{post.author}</strong>
            </span>
            <span className={styles.dot} aria-hidden="true" />
            <time dateTime={post.publishedAt}>{dateFmt(post.publishedAt)}</time>
            <span className={styles.dot} aria-hidden="true" />
            <span>{blogPostPage.minRead(post.readingMinutes)}</span>
          </div>
        </div>
      </header>

      <div className={cs.coverWrap}>
        {/* Natural aspect ratio: blog covers are often banners with text, so never crop them */}
        <div className={`section-wrap ${styles.cover}`}>
          <Image
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            sizes="(max-width: 1320px) 100vw, 1240px"
            preload
            quality={80}
          />
        </div>
      </div>

      <div className={styles.outer}>
        <div className={`section-wrap ${styles.grid}`}>
          <article className={styles.article}>
            <ArticleBody blocks={post.body} />

            <aside className={styles.authorBox} aria-label={blogPostPage.aboutAuthor}>
              <span className={`${styles.avatar} ${styles.avatarLg}`} aria-hidden="true">
                {authorInitials(post.author)}
              </span>
              <div>
                <p className={styles.authorLabel}>{blogPostPage.aboutAuthor}</p>
                <p className={styles.authorName}>{post.author}</p>
                <p className={styles.authorRole}>{blogPostPage.authorRole}</p>
              </div>
            </aside>
          </article>

          <aside className={styles.sidebar} aria-label="Article tools">
            {toc.length > 1 && <CaseStudyToc title={blogPostPage.tocTitle} items={toc} />}
            <div className={cs.sideCard}>
              <p className={cs.sideTitle}>{blogPostPage.shareTitle}</p>
              <ul className={styles.share}>
                {share.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${s.label} (opens in a new tab)`}>
                      <Icon name={s.icon} size={18} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {more.length > 0 && (
        <section className={cs.more} aria-labelledby="more-posts-heading">
          <div className="section-wrap">
            <div className={cs.moreHead} data-reveal="">
              <div>
                <p className="section-eyebrow">{blogPostPage.more.eyebrow}</p>
                <h2 id="more-posts-heading" className="section-heading">
                  {blogPostPage.more.heading}
                </h2>
              </div>
              <Link href={blogPostPage.more.viewAll.href} className="btn-text">
                {blogPostPage.more.viewAll.label}
              </Link>
            </div>
            <div className={listing.grid}>
              {more.map((p, i) => (
                <ArticleTile
                  key={p.slug}
                  href={blogHref(p)}
                  image={p.image}
                  title={p.title}
                  description={p.description}
                  date={p.publishedAt}
                  tag={blogPostPage.minRead(p.readingMinutes)}
                  readLabel="Read article"
                  meta={<span>· {p.author}</span>}
                  index={i}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      <ConsultationCta />
    </>
  );
}
