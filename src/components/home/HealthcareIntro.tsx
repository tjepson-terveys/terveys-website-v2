import { healthcareIntro, industriesId } from "@/content/healthcare";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import styles from "./HealthcareIntro.module.css";

export function HealthcareIntro() {
  return (
    <section className={styles.section} id={industriesId} aria-labelledby="industries-heading" data-surface="dark">
      <div className={`section-wrap ${styles.inner}`}>
        <div data-reveal="">
          <p className={styles.eyebrow}>{healthcareIntro.eyebrow}</p>
          <h2 className={styles.heading} id="industries-heading">
            <RichText value={healthcareIntro.heading} accentClassName={styles.accent} />
          </h2>
          <p className={styles.sub}>{healthcareIntro.body}</p>
        </div>
        <div className={styles.trust} data-reveal="">
          <div>
            <p className={styles.label} id="certified-label">
              {healthcareIntro.certifiedLabel}
            </p>
            <ul className={styles.row} aria-labelledby="certified-label">
              {healthcareIntro.certified.map((c) => (
                <li key={c} className={`${styles.chip} ${styles.chipCert}`}>
                  <Icon name="shield" size={16} strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className={styles.label} id="standards-label">
              {healthcareIntro.standardsLabel}
            </p>
            <ul className={styles.row} aria-labelledby="standards-label">
              {healthcareIntro.standards.map((s) => (
                <li key={s} className={styles.chip}>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
