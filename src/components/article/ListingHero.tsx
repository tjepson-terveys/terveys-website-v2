import styles from "./ListingHero.module.css";

type ListingHeroProps = {
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  stats: Array<{ label: string; value: number | string }>;
};

/** Dark hero used by the case-study and blog listings. */
export function ListingHero({ id, eyebrow, title, lead, stats }: ListingHeroProps) {
  return (
    <section className={styles.hero} data-surface="dark" aria-labelledby={id}>
      <div className={`section-wrap ${styles.heroInner}`}>
        <div>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 id={id} className={styles.title}>
            {title}
          </h1>
          <p className={styles.lead}>{lead}</p>
        </div>
        <dl className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label}>
              <dt>{s.label}</dt>
              <dd>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
