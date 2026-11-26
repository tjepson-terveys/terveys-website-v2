import Image from "next/image";
import Link from "next/link";
import { caseStudiesSection, caseStudyHref, formatDate, type CaseStudy } from "@/content/caseStudies";
import styles from "./CaseStudyCard.module.css";

type CaseStudyCardProps = {
  caseStudy: CaseStudy;
  /** Heading level for the card title (h3 under a section h2; h2 directly under a page h1). */
  headingLevel?: "h2" | "h3";
  /** Show the publish date under the title. */
  showDate?: boolean;
};

/** Case-study card used on the home page, the index and "More case studies". */
export function CaseStudyCard({ caseStudy: cs, headingLevel = "h3", showDate = false }: CaseStudyCardProps) {
  const Title = headingLevel;
  const readLabel = caseStudiesSection.readLabel;
  return (
    <article className={styles.card} data-reveal="stagger">
      <div className={styles.imgWrap}>
        <Image
          src={cs.image.src}
          alt={cs.image.alt}
          width={800}
          height={500}
          sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 400px"
          className={styles.img}
        />
      </div>
      <div className={styles.body}>
        <p className={styles.industry}>{cs.category}</p>
        <Title className={styles.title}>{cs.title}</Title>
        {showDate && (
          <p className={styles.client}>
            <time dateTime={cs.publishedAt}>{formatDate(cs.publishedAt)}</time>
          </p>
        )}
        <p className={styles.desc}>{cs.description}</p>
        <Link href={caseStudyHref(cs)} className={styles.link} aria-label={`${readLabel.replace(/\s*→$/, "")}: ${cs.title}`}>
          {readLabel}
        </Link>
      </div>
    </article>
  );
}
