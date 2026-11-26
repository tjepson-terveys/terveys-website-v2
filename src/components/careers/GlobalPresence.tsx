import { globalPresence } from "@/content/careers";
import { worldMap } from "./worldMapData";
import styles from "./GlobalPresence.module.css";

type City = { x: number; y: number };

/** Curved connection between two offices, bowing upwards. */
function arc(a: City, b: City, lift: number) {
  const cx = (a.x + b.x) / 2;
  const cy = Math.min(a.y, b.y) - lift;
  return `M${a.x} ${a.y}Q${cx} ${cy} ${b.x} ${b.y}`;
}

export function GlobalPresence() {
  const { cities, width, height, dotSize } = worldMap;
  const pct = (c: City) => ({ left: `${(c.x / width) * 100}%`, top: `${(c.y / height) * 100}%` });

  return (
    <section className={styles.section} id="locations" aria-labelledby="presence-heading" data-surface="dark">
      <div className={`section-wrap ${styles.inner}`}>
        <div data-reveal="">
          <p className={styles.eyebrow}>{globalPresence.eyebrow}</p>
          <h2 id="presence-heading" className={styles.heading}>
            {globalPresence.heading}
          </h2>
        </div>

        <figure className={styles.stage} data-reveal="">
          <div className={styles.mapWrap}>
            <svg
              className={styles.map}
              viewBox={`0 0 ${width} ${height}`}
              role="img"
              aria-label={globalPresence.mapLabel}
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <radialGradient id="presence-glow">
                  <stop offset="0%" stopColor="#00d6b8" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#00d6b8" stopOpacity="0" />
                </radialGradient>
              </defs>
              <path d={worldMap.land} className={styles.land} strokeWidth={dotSize} />
              <path d={worldMap.highlight} className={styles.highlight} strokeWidth={dotSize} />
              <path d={arc(cities.usa, cities.india, 150)} className={styles.arc} />
              <path d={arc(cities.india, cities.japan, 70)} className={styles.arc} />
              {globalPresence.offices.map((o, i) => {
                const c = cities[o.id];
                return (
                  <g key={o.id}>
                    <circle cx={c.x} cy={c.y} r="34" fill="url(#presence-glow)" />
                    <circle cx={c.x} cy={c.y} r="9" className={styles.pulse} style={{ animationDelay: `${i * 0.9}s` }} />
                    <circle cx={c.x} cy={c.y} r="5.5" className={styles.pin} />
                  </g>
                );
              })}
            </svg>
            {globalPresence.offices.map((o) => (
              <span key={o.id} className={styles.label} style={pct(cities[o.id])} aria-hidden="true">
                {o.country}
              </span>
            ))}
          </div>

          <figcaption className={styles.legend}>
            {globalPresence.offices.map((o) => (
              <span key={o.id} className={styles.legendItem}>
                <span className={styles.legendDot} aria-hidden="true" />
                <strong>{o.country}</strong> {o.city}
              </span>
            ))}
          </figcaption>
        </figure>

        <dl className={styles.stats}>
          {globalPresence.stats.map((s) => (
            <div key={s.label} className={styles.stat} data-reveal="stagger">
              <dt className={styles.statLabel}>{s.label}</dt>
              <dd className={styles.statValue}>{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
