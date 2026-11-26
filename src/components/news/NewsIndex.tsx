"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { formatNewsDate, newsDateParts, newsHref, newsIndex, type NewsItem, type NewsKind } from "@/content/news";
import { Icon } from "@/components/ui/Icon";
import styles from "./NewsIndex.module.css";

type Card = Pick<NewsItem, "slug" | "title" | "kind" | "description" | "publishedAt" | "image">;
type Filter = "all" | NewsKind;

function KindBadge({ kind, onDark = false }: { kind: NewsKind; onDark?: boolean }) {
  return (
    <span className={`${styles.kind} ${kind === "Event" ? styles.kindEvent : styles.kindNews} ${onDark ? styles.kindOnDark : ""}`}>
      {kind}
    </span>
  );
}

function LeadStory({ item }: { item: Card }) {
  return (
    <article className={styles.leadStory} data-surface="dark">
      <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 900px) 100vw, 820px" className={styles.leadImg} preload />
      <div className={styles.leadBody}>
        <div className={styles.leadMeta}>
          <span className={styles.leadLabel}>{newsIndex.leadLabel}</span>
          <KindBadge kind={item.kind} onDark />
          <time dateTime={item.publishedAt}>{formatNewsDate(item.publishedAt)}</time>
        </div>
        <h2 className={styles.leadTitle}>
          <Link href={newsHref(item)} className={styles.stretched}>
            {item.title}
          </Link>
        </h2>
        <p className={styles.leadText}>{item.description}</p>
      </div>
    </article>
  );
}

function SideStory({ item }: { item: Card }) {
  return (
    <article className={styles.sideStory}>
      <div className={styles.sideMedia}>
        <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 900px) 100vw, 400px" className={styles.sideImg} />
      </div>
      <div className={styles.sideBody}>
        <div className={styles.rowMeta}>
          <KindBadge kind={item.kind} />
          <time dateTime={item.publishedAt}>{formatNewsDate(item.publishedAt)}</time>
        </div>
        <h2 className={styles.sideTitle}>
          <Link href={newsHref(item)} className={styles.stretched}>
            {item.title}
          </Link>
        </h2>
      </div>
    </article>
  );
}

/** One timeline entry: date stamp · text · thumbnail. Exported for the "More news" list. */
export function TimelineRow({ item, headingLevel = "h3" }: { item: Card; headingLevel?: "h2" | "h3" }) {
  const d = newsDateParts(item.publishedAt);
  const Title = headingLevel;
  return (
    <li className={styles.row}>
      <span className={styles.stamp} aria-hidden="true">
        <span className={styles.stampDay}>{d.day}</span>
        <span className={styles.stampMonth}>{d.month}</span>
      </span>
      <div className={styles.rowBody}>
        <div className={styles.rowMeta}>
          <KindBadge kind={item.kind} />
          <time dateTime={item.publishedAt}>{formatNewsDate(item.publishedAt)}</time>
        </div>
        <Title className={styles.rowTitle}>
          <Link href={newsHref(item)} className={styles.stretched}>
            {item.title}
          </Link>
        </Title>
        <p className={styles.rowText}>{item.description}</p>
      </div>
      <div className={styles.rowThumb}>
        <Image src={item.image.src} alt="" fill sizes="200px" className={styles.thumbImg} />
      </div>
      <span className={styles.rowArrow} aria-hidden="true">
        <Icon name="arrowRight" size={18} />
      </span>
    </li>
  );
}

export function NewsIndex({ items }: { items: Card[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible = filter === "all" ? items : items.filter((i) => i.kind === filter);
  const [lead, ...others] = visible;
  const side = others.slice(0, 2);
  const timeline = others.slice(2);
  const years = [...new Set(timeline.map((i) => i.publishedAt.slice(0, 4)))];
  const count = (f: Filter) => (f === "all" ? items.length : items.filter((i) => i.kind === f).length);

  return (
    <>
      <div className={styles.filterBar}>
        <div className={`section-wrap ${styles.filterInner}`}>
          <span className={styles.filterLabel} id="news-filter-label">
            {newsIndex.filterLabel}
          </span>
          <div className={styles.segmented} role="group" aria-labelledby="news-filter-label">
            {(["all", "Event", "Announcement"] as const).map((f) => (
              <button key={f} type="button" aria-pressed={filter === f} className={filter === f ? styles.segActive : undefined} onClick={() => setFilter(f)}>
                {newsIndex.filters[f]}
                <span className={styles.segCount}>{count(f)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div key={filter} className={styles.content}>
        {lead && (
          <section className={styles.leadSection} aria-label={newsIndex.leadLabel}>
            <div className={`section-wrap ${styles.leadGrid}`}>
              <LeadStory item={lead} />
              {side.length > 0 && (
                <div className={styles.sideCol}>
                  {side.map((i) => (
                    <SideStory key={i.slug} item={i} />
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {timeline.length > 0 && (
          <section className={styles.timeline} aria-labelledby="timeline-heading">
            <div className="section-wrap">
              <h2 id="timeline-heading" className="visually-hidden">
                {newsIndex.timelineTitle}
              </h2>
              {years.map((year) => (
                <div key={year} className={styles.yearGroup}>
                  <p className={styles.year} aria-hidden="true">
                    {year}
                  </p>
                  <ol className={styles.rows} aria-label={year}>
                    {timeline
                      .filter((i) => i.publishedAt.startsWith(year))
                      .map((i) => (
                        <TimelineRow key={i.slug} item={i} />
                      ))}
                  </ol>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
