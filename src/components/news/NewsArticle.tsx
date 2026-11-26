import Image from "next/image";
import Link from "next/link";
import { ArticleBody } from "@/components/article/ArticleBody";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { formatNewsDate, newsIndexPath, newsItemPage, newsItems, type NewsItem } from "@/content/news";
import cs from "@/components/caseStudy/CaseStudy.module.css";
import { TimelineRow } from "./NewsIndex";
import timeline from "./NewsIndex.module.css";
import { NewsGallery } from "./NewsGallery";
import styles from "./NewsArticle.module.css";

/** Shown while the route's params resolve during client navigation. */
export function NewsArticleFallback() {
  return <div className={cs.header} style={{ minHeight: 420 }} aria-hidden="true" />;
}

export function NewsArticle({ item }: { item: NewsItem }) {
  const more = newsItems.filter((n) => n.slug !== item.slug).slice(0, 3);

  return (
    <>
      {/* Same dark header band + overlapping cover as case studies and blog posts */}
      <header className={cs.header} data-surface="dark">
        <div className={`section-wrap ${cs.headerInner}`}>
          <nav aria-label="Breadcrumb">
            <ol className={cs.breadcrumb}>
              <li>
                <Link href={newsIndexPath}>{newsItemPage.breadcrumbRoot}</Link>
              </li>
              <li aria-current="page">{item.kind}</li>
            </ol>
          </nav>
          <div className={styles.meta}>
            <span className={`${timeline.kind} ${timeline.kindOnDark} ${item.kind === "Event" ? timeline.kindEvent : timeline.kindNews}`}>
              {item.kind}
            </span>
            <time dateTime={item.publishedAt}>{formatNewsDate(item.publishedAt)}</time>
          </div>
          <h1 className={cs.title}>{item.title}</h1>
          {item.subtitle && <p className={cs.lede}>{item.subtitle}</p>}
        </div>
      </header>

      <div className={cs.coverWrap}>
        <figure className={`section-wrap ${styles.cover}`}>
          <Image
            src={item.image.src}
            alt={item.image.alt}
            width={item.image.width}
            height={item.image.height}
            sizes="(max-width: 1320px) 100vw, 1240px"
            preload
            quality={80}
          />
        </figure>
      </div>

      <div className={styles.bodyWrap}>
        <div className={styles.narrow}>
          <ArticleBody blocks={item.body} />

          {item.hashtags.length > 0 && (
            <ul className={styles.hashtags} aria-label="Hashtags">
              {item.hashtags.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          )}
        </div>

        {item.gallery.length > 0 && (
          <section className={styles.gallery} aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className={styles.galleryTitle}>
              {newsItemPage.galleryTitle}
            </h2>
            <NewsGallery photos={item.gallery} />
          </section>
        )}
      </div>

      {more.length > 0 && (
        <section className={styles.more} aria-labelledby="more-news-heading">
          <div className="section-wrap">
            <div className={styles.moreHead}>
              <div>
                <p className="section-eyebrow">{newsItemPage.more.eyebrow}</p>
                <h2 id="more-news-heading" className="section-heading">
                  {newsItemPage.more.heading}
                </h2>
              </div>
              <Link href={newsItemPage.more.viewAll.href} className="btn-text">
                {newsItemPage.more.viewAll.label}
              </Link>
            </div>
            <ol className={timeline.rows}>
              {more.map((n) => (
                <TimelineRow key={n.slug} item={n} />
              ))}
            </ol>
          </div>
        </section>
      )}

      <ConsultationCta />
    </>
  );
}
