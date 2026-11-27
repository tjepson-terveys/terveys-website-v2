import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { Service, ServiceDetail } from "@/content/services";
import { stubPages } from "@/content/pages";
import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";
import styles from "./ServiceHero.module.css";

type ServiceHeroProps = {
  service: Service;
  hero: ServiceDetail["hero"];
  /** Technologies scrolled along the bottom edge. */
  ticker: string[];
};

/** Seconds each background photo is on screen (the keyframes in the CSS assume this). */
const SLIDE_SECONDS = 6;

/**
 * Animated service hero. All motion is CSS (no client JS):
 * - background photos crossfade with a slow zoom, under a dark teal-tinted overlay
 * - drifting glows, a faint grid and "data flow" lines
 * - a floating photo collage with an orbit ring, a scan line and glass tags
 * - a technology ticker along the bottom
 * Everything stops for prefers-reduced-motion.
 */
export function ServiceHero({ service, hero, ticker }: ServiceHeroProps) {
  const [a, b, c] = hero.collage;
  const cycle = `${hero.backgrounds.length * SLIDE_SECONDS}s`;

  return (
    <section className={styles.hero} aria-labelledby="service-title" data-surface="dark">
      {/* ── Background layers ── */}
      <div className={styles.bg} aria-hidden="true">
        {hero.backgrounds.map((img, i) => (
          <div
            key={img.src}
            className={styles.slide}
            style={{ "--i": i, "--cycle": cycle, "--step": `${SLIDE_SECONDS}s` } as CSSProperties}
          >
            <Image src={img.src} alt="" fill sizes="100vw" preload={i === 0} className={styles.slideImg} />
          </div>
        ))}
        <div className={styles.shade} />
        <div className={styles.grid} />
        <div className={`${styles.glow} ${styles.glowA}`} />
        <div className={`${styles.glow} ${styles.glowB}`} />
        <svg className={styles.flow} viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path d="M-40 620 C 280 520, 520 700, 820 560 S 1300 380, 1480 460" />
          <path d="M-40 700 C 360 640, 640 760, 960 640 S 1320 560, 1480 600" />
          <path d="M-40 300 C 240 360, 520 220, 860 300 S 1260 200, 1480 140" />
          <path className={styles.comet} d="M-40 620 C 280 520, 520 700, 820 560 S 1300 380, 1480 460" />
          <path className={`${styles.comet} ${styles.cometLate}`} d="M-40 300 C 240 360, 520 220, 860 300 S 1260 200, 1480 140" />
        </svg>
      </div>

      {/* ── Content ── */}
      <div className={`section-wrap ${styles.inner}`}>
        <div className={styles.content}>
          <nav aria-label="Breadcrumb" className={styles.rise} style={{ "--d": "0ms" } as CSSProperties}>
            <ol className={styles.breadcrumb}>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={stubPages.services.path}>{stubPages.services.title}</Link>
              </li>
              <li aria-current="page">{service.name}</li>
            </ol>
          </nav>
          <p className={`${styles.eyebrow} ${styles.rise}`} style={{ "--d": "80ms" } as CSSProperties}>
            <span className={styles.liveDot} aria-hidden="true" />
            {hero.eyebrow}
          </p>
          <h1 id="service-title" className={`${styles.title} ${styles.rise}`} style={{ "--d": "160ms" } as CSSProperties}>
            <RichText value={hero.title} accentClassName={styles.accent} />
          </h1>
          <p className={`${styles.lead} ${styles.rise}`} style={{ "--d": "260ms" } as CSSProperties}>
            {hero.lead}
          </p>
          <div className={`${styles.btns} ${styles.rise}`} style={{ "--d": "360ms" } as CSSProperties}>
            {hero.buttons.map((btn) => (
              <Button key={btn.label} href={btn.href} variant={btn.variant}>
                {btn.label}
              </Button>
            ))}
          </div>
        </div>

        <div className={styles.collage} aria-hidden="true">
          <div className={styles.ring} />
          <div className={`${styles.ring} ${styles.ringInner}`} />
          <div className={`${styles.tile} ${styles.tileA}`}>
            <Image src={a.src} alt="" fill sizes="360px" className={styles.tileImg} />
            <span className={styles.scan} />
          </div>
          <div className={`${styles.tile} ${styles.tileB}`}>
            <Image src={b.src} alt="" fill sizes="280px" className={styles.tileImg} />
          </div>
          <div className={`${styles.tile} ${styles.tileC}`}>
            <Image src={c.src} alt="" fill sizes="200px" className={styles.tileImg} />
          </div>
          {hero.chips.map((chip, i) => (
            <span key={chip} className={`${styles.chip} ${styles[`chip${i}`] ?? ""}`}>
              <span className={styles.chipDot} />
              {chip}
            </span>
          ))}
        </div>
      </div>

      {/* ── Technology ticker (decorative: the full stack is listed further down the page) ── */}
      {ticker.length > 0 && (
        <div className={styles.ticker} aria-hidden="true">
          <div className={styles.track}>
            {[0, 1].map((copy) => (
              <ul key={copy}>
                {ticker.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
