import Image from "next/image";
import Link from "next/link";
import { caseStudies, caseStudiesSection } from "@/content/caseStudies";
import type { ServiceDetail } from "@/content/services";
import { CaseStudyCard } from "@/components/caseStudy/CaseStudyCard";
import { FeatureCarousel } from "@/components/ui/FeatureCarousel";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { IndustryTabs } from "./IndustryTabs";
import { PracticeIndex } from "./PracticeIndex";
import styles from "./Service.module.css";

export function ServiceOverview({ overview }: { overview: ServiceDetail["overview"] }) {
  return (
    <section className={styles.overview} aria-labelledby="overview-heading">
      <div className="section-wrap">
        <div className={styles.head} data-reveal="">
          <p className="section-eyebrow">{overview.eyebrow}</p>
          <h2 id="overview-heading" className={`section-heading ${styles.overviewHeading}`}>
            <RichText value={overview.heading} accentClassName={styles.accentTeal} />
          </h2>
        </div>
        <ul className={styles.overviewGrid}>
          {overview.items.map((item) => (
            <li key={item.title} className={styles.overviewCard} data-reveal="stagger">
              <span className={styles.iconCircle}>
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className={styles.overviewTitle}>{item.title}</h3>
              <p className={styles.overviewText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ServicePractices({ practices }: { practices: ServiceDetail["practices"] }) {
  return (
    <section className={styles.practices} id={practices.id} aria-labelledby="practices-heading">
      <div className={`section-wrap ${styles.practicesGrid}`}>
        <div className={styles.practicesAside}>
          <p className="section-eyebrow">{practices.eyebrow}</p>
          <h2 id="practices-heading" className="section-heading">
            {practices.heading}
          </h2>
          <p className={styles.practicesIntro}>{practices.intro}</p>
          <PracticeIndex label={practices.indexLabel} items={practices.items.map(({ id, title }) => ({ id, title }))} />
        </div>

        <ol className={styles.practiceList}>
          {practices.items.map((p, i) => (
            <li key={p.id} id={p.id} className={styles.practice} data-reveal="">
              <div className={styles.practiceMedia}>
                <Image
                  src={p.image.src}
                  alt={p.image.alt}
                  fill
                  sizes="(max-width: 760px) 100vw, (max-width: 1100px) 40vw, 300px"
                  className={styles.practiceImg}
                />
                <span className={styles.practiceNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className={styles.practiceBody}>
                <div className={styles.practiceTop}>
                  <span className={styles.practiceIcon}>
                    <Icon name={p.icon} size={20} />
                  </span>
                  <h3 className={styles.practiceTitle}>{p.title}</h3>
                </div>
                <p className={styles.practiceIntro}>{p.intro}</p>
                <p className={styles.offersLabel}>{practices.offersLabel}</p>
                <ul className={styles.offers}>
                  {p.offers.map((o) => (
                    <li key={o}>
                      <Icon name="check" size={15} />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ServiceIndustries({ industries }: { industries: ServiceDetail["industries"] }) {
  return (
    <section className={styles.industries} id={industries.id} aria-labelledby="industries-heading" data-surface="dark">
      <div className="section-wrap">
        <div className={styles.splitHead} data-reveal="">
          <div>
            <p className={styles.eyebrowDark}>{industries.eyebrow}</p>
            <h2 id="industries-heading" className={styles.headingDark}>
              {industries.heading}
            </h2>
          </div>
          <p className={styles.introDark}>{industries.intro}</p>
        </div>
        <IndustryTabs label={industries.tablistLabel} items={industries.items} />
      </div>
    </section>
  );
}

export function ServiceStack({ stack }: { stack: ServiceDetail["stack"] }) {
  return (
    <section className={styles.stack} aria-labelledby="stack-heading">
      <div className="section-wrap">
        <div className={styles.splitHead} data-reveal="">
          <div>
            <p className="section-eyebrow">{stack.eyebrow}</p>
            <h2 id="stack-heading" className="section-heading">
              {stack.heading}
            </h2>
          </div>
          <p className={styles.stackIntro}>{stack.intro}</p>
        </div>
        <dl className={styles.stackGroups}>
          {stack.groups.map((g) => (
            <div key={g.label} className={styles.stackRow} data-reveal="">
              <dt className={styles.stackLabel}>{g.label}</dt>
              <dd>
                <ul className={styles.stackItems}>
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function ServicePerspective({ perspective }: { perspective: ServiceDetail["perspective"] }) {
  return (
    <section className={styles.perspective} aria-labelledby="perspective-heading">
      <div className="section-wrap">
        <div className={styles.head} data-reveal="">
          <p className="section-eyebrow">{perspective.eyebrow}</p>
          <h2 id="perspective-heading" className={styles.perspectiveHeading}>
            {perspective.heading}
          </h2>
          <p className="section-sub">{perspective.intro}</p>
        </div>
        <FeatureCarousel
          label={perspective.eyebrow}
          prevLabel={perspective.prevLabel}
          nextLabel={perspective.nextLabel}
          goToLabel={perspective.goToLabel}
          slides={perspective.items.map((p) => ({ icon: p.icon, tag: p.tag, title: p.title, body: p.text, image: p.image }))}
        />
      </div>
    </section>
  );
}

export function ServiceRelated({ related }: { related: ServiceDetail["related"] }) {
  const items = related.caseStudySlugs
    .map((slug) => caseStudies.find((cs) => cs.slug === slug))
    .filter((cs) => cs !== undefined);
  if (!items.length) return null;

  return (
    <section className={styles.related} aria-labelledby="related-heading">
      <div className="section-wrap">
        <div className={styles.relatedHead} data-reveal="">
          <div>
            <p className="section-eyebrow">{related.eyebrow}</p>
            <h2 id="related-heading" className="section-heading">
              {related.heading}
            </h2>
            <p className="section-sub">{related.intro}</p>
          </div>
          <Link href={caseStudiesSection.viewAll.href} className="btn-text">
            {caseStudiesSection.viewAll.label}
          </Link>
        </div>
        <div className={styles.relatedGrid}>
          {items.map((cs) => (
            <CaseStudyCard key={cs.slug} caseStudy={cs} />
          ))}
        </div>
      </div>
    </section>
  );
}
