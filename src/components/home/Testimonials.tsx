"use client";

import { useState } from "react";
import { testimonials, testimonialsSection } from "@/content/testimonials";
import { RichText } from "@/components/ui/RichText";
import styles from "./Testimonials.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

/** Accordion slider: collapsed slides are 72px strips; the active one expands. */
export function Testimonials() {
  const [active, setActive] = useState(0);
  const count = testimonials.length;
  const move = (dir: number) => setActive((i) => (i + dir + count) % count);

  return (
    <section className={styles.section} aria-labelledby="testimonials-heading">
      <div className="section-wrap">
        <div className={styles.layout} data-reveal="">
          <div className={styles.left}>
            <div>
              <p className="section-eyebrow">{testimonialsSection.eyebrow}</p>
              <h2 className={styles.heading} id="testimonials-heading">
                <RichText value={testimonialsSection.heading} />
              </h2>
            </div>
            <div className={styles.nav}>
              <button type="button" className={styles.navBtn} aria-label={testimonialsSection.prevLabel} onClick={() => move(-1)}>
                <span aria-hidden="true">←</span>
              </button>
              <button type="button" className={styles.navBtn} aria-label={testimonialsSection.nextLabel} onClick={() => move(1)}>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div className={styles.track}>
            {testimonials.map((t, i) => {
              const isActive = i === active;
              return (
                <div
                  key={i}
                  className={`${styles.slide} ${isActive ? styles.active : ""}`}
                  onClick={isActive ? undefined : () => setActive(i)}
                >
                  <button
                    type="button"
                    className={styles.num}
                    aria-label={`${testimonialsSection.showLabel} ${i + 1} of ${count}`}
                    aria-current={isActive ? "true" : undefined}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActive(i);
                    }}
                  >
                    {pad(i + 1)}
                  </button>
                  <figure className={styles.body} inert={!isActive} aria-hidden={!isActive}>
                    <blockquote>
                      <p className={styles.quote}>{t.quote}</p>
                    </blockquote>
                    <figcaption>
                      <span className={styles.divider} aria-hidden="true" />
                      <span className={styles.role}>{t.role}</span>
                      <span className={styles.org}>{t.organisation}</span>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
