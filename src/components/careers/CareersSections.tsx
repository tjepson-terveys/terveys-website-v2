import Image from "next/image";
import Link from "next/link";
import { joinCta, openPositionsLink, overview, values, whyChoose } from "@/content/careers";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./Careers.module.css";

export function Overview() {
  return (
    <section className={styles.overview} aria-labelledby="careers-title">
      <div className={`section-wrap ${styles.overviewGrid}`}>
        <div data-reveal="">
          <p className="section-eyebrow">{overview.eyebrow}</p>
          <h1 id="careers-title" className={styles.overviewTitle}>
            {overview.heading}
          </h1>
          <p className={styles.overviewBody}>{overview.body}</p>
          <p className={styles.overviewHighlight}>{overview.highlight}</p>
          <Link href={overview.cta.href} className="btn-text">
            {overview.cta.label}
            <Icon name="arrowRight" size={16} />
          </Link>
        </div>
        <div className={styles.overviewPhoto} data-reveal="">
          <Image src={overview.image.src} alt={overview.image.alt} fill sizes="(max-width: 900px) 100vw, 580px" preload />
        </div>
      </div>
    </section>
  );
}

export function Values() {
  const [integrity, people, simplicity, leadership] = values.cards;
  const card = (c: (typeof values.cards)[number], area: string) => (
    <div className={`${styles.vCard} ${styles[c.tone]} ${styles[area]}`}>
      <h3 className={styles.vTitle}>{c.title}</h3>
      <p className={styles.vText}>{c.text}</p>
      <span className={styles.vIcon}>
        <Icon name={c.icon} size={34} />
      </span>
    </div>
  );
  const photo = (img: (typeof values.photos)["wide"], area: string, sizes: string) => (
    <div className={`${styles.vPhoto} ${styles[area]}`}>
      <Image src={img.src} alt={img.alt} fill sizes={sizes} />
    </div>
  );

  return (
    <section className={styles.values} id="values" aria-labelledby="values-heading">
      <div className="section-wrap">
        <div className={styles.sectionHead} data-reveal="">
          <p className="section-eyebrow">{values.eyebrow}</p>
          <h2 id="values-heading" className="section-heading">
            {values.heading}
          </h2>
        </div>
        <div className={styles.mosaic} data-reveal="">
          {card(integrity, "aIntegrity")}
          {photo(values.photos.wide, "aWide", "(max-width: 1000px) 100vw, 620px")}
          {card(people, "aPeople")}
          {card(simplicity, "aSimplicity")}
          {photo(values.photos.left, "aPhotoL", "(max-width: 1000px) 50vw, 310px")}
          {card(leadership, "aLeadership")}
          {photo(values.photos.right, "aPhotoR", "(max-width: 1000px) 50vw, 310px")}
        </div>
      </div>
    </section>
  );
}

export function WhyChoose() {
  return (
    <section className={styles.why} id="why" aria-labelledby="why-heading">
      <div className="section-wrap">
        <div className={styles.whyHead} data-reveal="">
          <p className="section-eyebrow">{whyChoose.eyebrow}</p>
          <h2 id="why-heading" className="section-heading">
            {whyChoose.heading}
          </h2>
          <p className="section-sub">{whyChoose.sub}</p>
        </div>
        <ul className={styles.whyGrid}>
          {whyChoose.cards.map((c) => (
            <li key={c.title} className={styles.whyCard} data-reveal="stagger">
              <span className={styles.whyIcon}>
                <Icon name={c.icon} size={30} />
              </span>
              <h3 className={styles.whyTitle}>{c.title}</h3>
              <p className={styles.whyText}>{c.text}</p>
            </li>
          ))}
          <li className={styles.whyCta} data-reveal="stagger">
            <div>
              <h3 className={styles.whyCtaTitle}>{whyChoose.ctaCard.title}</h3>
              <p className={styles.whyCtaText}>{whyChoose.ctaCard.text}</p>
            </div>
            <Button href={openPositionsLink.href} variant="white" className={styles.ctaSelf}>
              {whyChoose.ctaCard.button}
              <Icon name="arrowRight" size={16} />
            </Button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export function JoinCta() {
  return (
    <section className={styles.join} aria-labelledby="join-heading">
      <div className={`section-wrap ${styles.joinInner}`} data-reveal="">
        <p className="section-eyebrow">{joinCta.eyebrow}</p>
        <h2 id="join-heading" className="section-heading">
          {joinCta.heading}
        </h2>
        <p className={styles.joinSub}>{joinCta.sub}</p>
        <Button href={openPositionsLink.href} variant="teal">
          {joinCta.button}
          <Icon name="arrowRight" size={16} />
        </Button>
      </div>
    </section>
  );
}
