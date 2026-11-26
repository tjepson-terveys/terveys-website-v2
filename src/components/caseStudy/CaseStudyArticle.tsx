import Image from "next/image";
import Link from "next/link";
import {
  caseStudies,
  caseStudyPage,
  formatDate,
  type CaseStudy,
  type CaseStudySection,
} from "@/content/caseStudies";
import { ArticleBody, articleToc } from "@/components/article/ArticleBody";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { Icon } from "@/components/ui/Icon";
import { CaseStudyCard } from "./CaseStudyCard";
import { CaseStudyToc } from "./CaseStudyToc";
import styles from "./CaseStudy.module.css";

const pad = (n: number) => String(n + 1).padStart(2, "0");

function LabelledList({ items }: { items: Array<{ label?: string; text: string }> }) {
  return (
    <ul className={styles.checks}>
      {items.map((it, i) => (
        <li key={i}>
          <Icon name="check" size={16} />
          <span>
            {it.label && <strong className={styles.itemLabel}>{it.label}: </strong>}
            {it.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

/* ── Structured sections (case-study design) ── */
function Section({ section }: { section: CaseStudySection }) {
  const labelled = section.bullets?.some((b) => b.label);
  const items = section.items ?? [];
  return (
    <section id={section.id} className={styles.block} aria-labelledby={`${section.id}-heading`}>
      <p className="section-eyebrow">{section.label}</p>
      <h2 id={`${section.id}-heading`} className={styles.blockHeading}>
        {section.heading}
      </h2>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className={styles.para}>
          {p}
        </p>
      ))}

      {section.bullets &&
        (labelled ? (
          <ul className={styles.outcomes}>
            {section.bullets.map((b) => (
              <li key={b.text}>
                <span className={styles.outcomeLabel}>{b.label}</span>
                <span className={styles.outcomeText}>{b.text}</span>
              </li>
            ))}
          </ul>
        ) : (
          <LabelledList items={section.bullets} />
        ))}

      {items.length > 0 &&
        (items.length % 2 === 0 ? (
          <ol className={styles.itemGrid}>
            {items.map((item, i) => (
              <li key={item.title} className={styles.itemCard}>
                <span className={styles.itemNum}>{pad(i)}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemText}>{item.text}</p>
              </li>
            ))}
          </ol>
        ) : (
          <ol className={styles.itemList}>
            {items.map((item, i) => (
              <li key={item.title}>
                <span className={styles.itemBadge}>{pad(i)}</span>
                <div>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.itemText}>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        ))}
    </section>
  );
}

/** Shown while the route's params resolve during client navigation (keeps the dark band in place). */
export function CaseStudyHeaderFallback() {
  return <div className={styles.header} style={{ minHeight: 520 }} aria-hidden="true" />;
}

export function CaseStudyArticle({ caseStudy }: { caseStudy: CaseStudy }) {
  const d = caseStudy.detail!;
  const { labels } = caseStudyPage;
  // Related first (shared categories), then newest
  const shared = (cs: CaseStudy) => cs.categories.filter((c) => caseStudy.categories.includes(c)).length;
  const others = caseStudies
    .filter((cs) => cs.slug !== caseStudy.slug && cs.detail)
    .sort((a, b) => shared(b) - shared(a) || b.publishedAt.localeCompare(a.publishedAt))
    .slice(0, 3);
  const toc = d.sections
    ? d.sections.map((s) => ({ id: s.id, label: s.label }))
    : articleToc(d.body ?? []);

  return (
    <>
      {/* ── Header ── */}
      <header className={styles.header} data-surface="dark">
        <div className={`section-wrap ${styles.headerInner}`}>
          <nav aria-label="Breadcrumb">
            <ol className={styles.breadcrumb}>
              <li>
                <Link href={caseStudyPage.more.viewAll.href}>{caseStudyPage.breadcrumbRoot}</Link>
              </li>
              <li aria-current="page">{d.meta?.industry ?? caseStudy.categories[0] ?? caseStudy.category}</li>
            </ol>
          </nav>
          <p className={styles.tag}>{caseStudy.category}</p>
          <h1 className={styles.title}>{caseStudy.title}</h1>
          {d.lede && <p className={styles.lede}>{d.lede}</p>}
          <dl className={styles.pills}>
            {(d.meta
              ? [
                  [labels.client, d.meta.client],
                  [labels.industry, d.meta.industry],
                  [labels.region, d.meta.region],
                  [labels.deliverables, d.meta.deliverables.join(" · ")],
                ]
              : [
                  [caseStudyPage.publishedLabel, formatDate(caseStudy.publishedAt)],
                  [caseStudyPage.categoryLabel, caseStudy.categories.join(" · ")],
                ]
            ).map(([label, value]) => (
              <div key={label} className={styles.pill}>
                <dt>{label}</dt>
                <dd>{label === caseStudyPage.publishedLabel ? <time dateTime={caseStudy.publishedAt}>{value}</time> : value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className={styles.coverWrap}>
        <div className={`section-wrap ${styles.cover}`}>
          <Image src={d.cover.src} alt={d.cover.alt} fill sizes="(max-width: 1320px) 100vw, 1240px" preload quality={80} />
        </div>
      </div>

      {/* ── Article + sidebar ── */}
      <div className={styles.articleOuter}>
        <div className={`section-wrap ${styles.articleGrid}`}>
          <div className={styles.article}>
            {d.sections ? d.sections.map((s) => <Section key={s.id} section={s} />) : <ArticleBody blocks={d.body ?? []} />}
          </div>

          <aside className={styles.sidebar} aria-label="Project summary">
            {toc.length > 1 && <CaseStudyToc title={caseStudyPage.tocTitle} items={toc} />}

            {d.results && (
              <div className={styles.sideCard}>
                <p className={styles.sideTitle}>{caseStudyPage.resultsTitle}</p>
                <ul className={styles.stats}>
                  {d.results.map((r) => (
                    <li key={r.label}>
                      <span className={styles.statValue}>{r.value}</span>
                      <span className={styles.statLabel}>{r.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className={styles.sideCard}>
              <p className={styles.sideTitle}>{caseStudyPage.detailsTitle}</p>
              <dl className={styles.details}>
                {d.meta ? (
                  <>
                    <div>
                      <dt>{labels.client}</dt>
                      <dd>{d.meta.client}</dd>
                    </div>
                    <div>
                      <dt>{labels.industry}</dt>
                      <dd>{d.meta.industry}</dd>
                    </div>
                    <div>
                      <dt>{labels.region}</dt>
                      <dd>{d.meta.region}</dd>
                    </div>
                    <div>
                      <dt>{labels.solutionType}</dt>
                      <dd className={styles.teal}>{d.meta.solutionType}</dd>
                    </div>
                    <div>
                      <dt>{labels.deliverables}</dt>
                      <dd>{d.meta.deliverablesFull.join(" · ")}</dd>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <dt>{caseStudyPage.categoryLabel}</dt>
                      <dd className={styles.teal}>{caseStudy.categories.join(" · ")}</dd>
                    </div>
                    <div>
                      <dt>{caseStudyPage.publishedLabel}</dt>
                      <dd>
                        <time dateTime={caseStudy.publishedAt}>{formatDate(caseStudy.publishedAt)}</time>
                      </dd>
                    </div>
                  </>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </div>

      {/* ── Client quote ── */}
      {d.quote && (
        <section className={styles.quote} aria-label="Client feedback" data-surface="dark">
          <figure className={`section-wrap ${styles.quoteInner}`} data-reveal="">
            <blockquote>
              <p>{d.quote.text}</p>
            </blockquote>
            <figcaption>
              <span className={styles.quoteDivider} aria-hidden="true" />
              <span className={styles.quoteRole}>{d.quote.role}</span>
              <span className={styles.quoteOrg}>{d.quote.organisation}</span>
            </figcaption>
          </figure>
        </section>
      )}

      {/* ── More case studies ── */}
      {others.length > 0 && (
        <section className={styles.more} aria-labelledby="more-heading">
          <div className="section-wrap">
            <div className={styles.moreHead} data-reveal="">
              <div>
                <p className="section-eyebrow">{caseStudyPage.more.eyebrow}</p>
                <h2 id="more-heading" className="section-heading">
                  {caseStudyPage.more.heading}
                </h2>
              </div>
              <Link href={caseStudyPage.more.viewAll.href} className="btn-text">
                {caseStudyPage.more.viewAll.label}
              </Link>
            </div>
            <div className={styles.moreGrid}>
              {others.map((cs) => (
                <CaseStudyCard key={cs.slug} caseStudy={cs} />
              ))}
            </div>
          </div>
        </section>
      )}

      {d.cta ? (
        <ConsultationCta
          content={{
            heading: [{ text: d.cta.heading }],
            body: [{ text: d.cta.text }],
            buttons: [
              { ...d.cta.primary, variant: "white" },
              { ...d.cta.secondary, variant: "ghost" },
            ],
          }}
        />
      ) : (
        <ConsultationCta />
      )}
    </>
  );
}
