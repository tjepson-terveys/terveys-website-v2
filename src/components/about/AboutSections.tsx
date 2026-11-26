import Image from "next/image";
import {
  aboutHero,
  aboutNotice,
  aboutValues,
  certifications,
  clients,
  difference,
  leadership,
  visionMission,
} from "@/content/about";
import { FeatureCarousel } from "@/components/ui/FeatureCarousel";
import { Icon } from "@/components/ui/Icon";
import { Notice } from "@/components/ui/Notice";
import styles from "./About.module.css";

export function AboutHero() {
  return (
    <section className={styles.hero} aria-labelledby="about-title" data-surface="dark">
      <Image src={aboutHero.image.src} alt={aboutHero.image.alt} fill sizes="100vw" preload className={styles.heroImg} />
      <div className={`section-wrap ${styles.heroContent}`}>
        <p className={styles.heroEyebrow}>{aboutHero.eyebrow}</p>
        <h1 id="about-title" className={styles.heroTitle}>
          {aboutHero.title}
        </h1>
        <p className={styles.heroLead}>{aboutHero.lead}</p>
      </div>
    </section>
  );
}

export function VisionMission() {
  return (
    <section className={styles.vm} aria-label="Vision and mission">
      <div className={`section-wrap ${styles.vmGrid}`}>
        {visionMission.map((item) => (
          <article key={item.title} className={styles.vmCard} data-reveal="stagger">
            <span className={styles.iconCircle}>
              <Icon name={item.icon} size={24} />
            </span>
            <h2 className={styles.vmTitle}>{item.title}</h2>
            <p className={styles.vmText}>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Difference() {
  return (
    <section className={styles.diff} aria-labelledby="difference-heading" data-surface="dark">
      <div className={`section-wrap ${styles.diffGrid}`}>
        <div data-reveal="">
          <p className={styles.eyebrowDark}>{difference.eyebrow}</p>
          <h2 id="difference-heading" className={styles.diffHeading}>
            {difference.heading}
          </h2>
          <ul className={styles.pillars}>
            {difference.pillars.map((pillar, i) => (
              <li key={pillar}>
                <span className={styles.pillarNum}>{String(i + 1).padStart(2, "0")}</span>
                {pillar}
              </li>
            ))}
          </ul>
        </div>
        <p className={styles.diffBody} data-reveal="">
          {difference.body}
        </p>
      </div>
    </section>
  );
}

export function AboutValues() {
  return (
    <section className={styles.values} aria-labelledby="about-values-heading">
      <div className="section-wrap">
        <div className={styles.valuesHead} data-reveal="">
          <p className="section-eyebrow">{aboutValues.eyebrow}</p>
          <h2 id="about-values-heading" className={styles.valuesHeading}>
            {aboutValues.heading}
          </h2>
        </div>
        <FeatureCarousel
          label={aboutValues.eyebrow}
          prevLabel={aboutValues.prevLabel}
          nextLabel={aboutValues.nextLabel}
          goToLabel={aboutValues.goToLabel}
          slides={aboutValues.items.map((v) => ({
            icon: v.icon,
            tag: v.tag,
            title: v.title,
            body: v.text,
            image: v.image,
          }))}
        />
      </div>
    </section>
  );
}

function LinkedInLink({ name, href, className }: { name: string; href: string; className: string }) {
  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer" aria-label={`${name} on LinkedIn (opens in a new tab)`}>
      <Icon name="linkedin" size={18} />
    </a>
  );
}

export function Leadership() {
  const executives = leadership.leaders.filter((l) => l.group === "executive");
  const regional = leadership.leaders.filter((l) => l.group === "regional");

  return (
    <section className={styles.leaders} id="leadership" aria-labelledby="leadership-heading" data-surface="dark">
      <div className="section-wrap">
        <div className={styles.leadersHead} data-reveal="">
          <p className={styles.eyebrowDark}>{leadership.eyebrow}</p>
          <h2 id="leadership-heading" className={styles.diffHeading}>
            {leadership.heading}
          </h2>
        </div>

        <h3 className={styles.groupLabel}>
          <span>{leadership.groups.executive}</span>
        </h3>
        <ul className={styles.execGrid}>
          {executives.map((l) => (
            <li key={l.name} className={styles.exec} data-reveal="stagger">
              <Image
                src={l.photo}
                alt={`Portrait of ${l.name}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 400px"
                className={styles.execImg}
              />
              <div className={styles.execInfo}>
                <span className={styles.execBar} aria-hidden="true" />
                <h4 className={styles.execName}>{l.name}</h4>
                <p className={styles.execRole}>{l.role}</p>
              </div>
              <LinkedInLink name={l.name} href={l.linkedin} className={styles.execLinkedin} />
            </li>
          ))}
        </ul>

        <h3 className={styles.groupLabel}>
          <span>{leadership.groups.regional}</span>
        </h3>
        <ul className={styles.regionalGrid}>
          {regional.map((l) => (
            <li key={l.name} className={styles.regional} data-reveal="stagger">
              <div className={styles.regionalPhoto}>
                <Image src={l.photo} alt={`Portrait of ${l.name}`} fill sizes="112px" />
              </div>
              <div className={styles.regionalInfo}>
                <h4 className={styles.regionalName}>{l.name}</h4>
                <p className={styles.regionalRole}>{l.role}</p>
              </div>
              <LinkedInLink name={l.name} href={l.linkedin} className={styles.regionalLinkedin} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Clients() {
  return (
    <section className={styles.clients} aria-labelledby="clients-heading">
      <div className="section-wrap">
        <div className={styles.clientsHead} data-reveal="">
          <p className="section-eyebrow">{clients.eyebrow}</p>
          <h2 id="clients-heading" className={styles.clientsHeading}>
            {clients.heading}
          </h2>
        </div>
        <ul className={styles.logoGrid} data-reveal="">
          {clients.logos.map((logo) => (
            <li key={logo.name} className={styles.logoCell}>
              <Image src={logo.src} alt={logo.name} width={logo.width} height={logo.height} sizes="200px" className={styles.logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section className={styles.certs} id="certifications" aria-labelledby="certs-heading" data-surface="dark">
      <div className="section-wrap">
        <div className={styles.certsHead} data-reveal="">
          <div>
            <p className={styles.eyebrowDark}>{certifications.eyebrow}</p>
            <h2 id="certs-heading" className={styles.diffHeading}>
              {certifications.heading}
            </h2>
          </div>
          <p className={styles.certsIntro}>{certifications.intro}</p>
        </div>
        <ul className={styles.certGrid}>
          {certifications.items.map((c) => (
            <li key={c.name} className={styles.certCard} data-reveal="stagger">
              <Image src={c.badge.src} alt={c.badge.alt} width={120} height={120} className={styles.badge} />
              <h3 className={styles.certName}>{c.name}</h3>
              <p className={styles.certText}>{c.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function AboutNotice() {
  return (
    <section className={styles.notice} aria-label={aboutNotice.title}>
      <div className="section-wrap">
        <Notice id="about-notice" title={aboutNotice.title} text={aboutNotice.text} />
      </div>
    </section>
  );
}
