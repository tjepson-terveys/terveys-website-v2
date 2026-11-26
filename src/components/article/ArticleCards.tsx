import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentImage } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import styles from "./Listing.module.css";

const dateFmt = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

type CardProps = {
  href: string;
  image: ContentImage;
  title: string;
  description: string;
  date: string;
  readLabel: string;
  /** Extra meta (e.g. author · reading time). */
  meta?: ReactNode;
};

/** Large horizontal card for the newest item in a listing. */
export function FeaturedCard({ href, image, title, description, date, readLabel, meta, label, tags }: CardProps & { label: string; tags: string[] }) {
  return (
    <article className={styles.featured}>
      <div className={styles.featuredMedia}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 900px) 100vw, 720px" className={styles.img} />
      </div>
      <div className={styles.featuredBody}>
        <p className={styles.featuredLabel}>{label}</p>
        {tags.length > 0 && (
          <ul className={styles.tags} aria-label="Categories">
            {tags.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        )}
        <h2 className={styles.featuredTitle}>
          <Link href={href} className={styles.stretched}>
            {title}
          </Link>
        </h2>
        <p className={styles.featuredText}>{description}</p>
        <div className={styles.featuredFoot}>
          <span className={styles.meta}>
            {meta}
            <span className={styles.date}>
              <Icon name="calendar" size={15} />
              <time dateTime={date}>{dateFmt(date)}</time>
            </span>
          </span>
          <span className={styles.featuredCta} aria-hidden="true">
            {readLabel}
            <Icon name="arrowRight" size={16} />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Grid card. The whole card is clickable via the title link. */
export function ArticleTile({ href, image, title, description, date, readLabel, meta, tag, index }: CardProps & { tag?: string; index: number }) {
  return (
    <article className={styles.tile} style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}>
      <div className={styles.tileMedia}>
        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px" className={styles.img} />
        {tag && <span className={styles.tileTag}>{tag}</span>}
      </div>
      <div className={styles.tileBody}>
        <span className={styles.meta}>
          <time dateTime={date}>{dateFmt(date)}</time>
          {meta}
        </span>
        <h2 className={styles.tileTitle}>
          <Link href={href} className={styles.stretched}>
            {title}
          </Link>
        </h2>
        <p className={styles.tileText}>{description}</p>
        <div className={styles.tileFoot} aria-hidden="true">
          <span>{readLabel}</span>
          <span className={styles.arrow}>
            <Icon name="arrowRight" size={16} />
          </span>
        </div>
      </div>
    </article>
  );
}

/** Search box + chips toolbar wrapper and results area are styled by Listing.module.css. */
export { styles as listingStyles };
