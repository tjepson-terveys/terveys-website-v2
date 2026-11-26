"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ContentImage } from "@/content/types";
import { Icon, type IconName } from "./Icon";
import styles from "./FeatureCarousel.module.css";

export type FeatureSlide = {
  tag: string;
  title: string;
  body: string;
  image: ContentImage;
  /** Optional line icon shown above the tag. */
  icon?: IconName;
  /** Optional "Learn more" style link. */
  link?: { href: string; label: string };
};

type FeatureCarouselProps = {
  slides: FeatureSlide[];
  /** Accessible name for the carousel. */
  label: string;
  prevLabel: string;
  nextLabel: string;
  goToLabel: string;
};

/**
 * Split card carousel: dark text panel (tag, title, body, arrows) beside a photo,
 * with progress dots underneath. Used by "Grow without limits" (Careers) and "Our Values" (About).
 */
export function FeatureCarousel({ slides, label, prevLabel, nextLabel, goToLabel }: FeatureCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const go = (n: number) => setIndex((n + count) % count);
  const slide = slides[index];

  return (
    <>
      <div className={styles.card} aria-roledescription="carousel" aria-label={label} data-reveal="">
        <div className={styles.left} data-surface="dark">
          {/* key remounts the text so it fades in on every change */}
          <div key={index} className={styles.text} aria-live="polite" aria-atomic="true">
            {slide.icon && (
              <span className={styles.icon}>
                <Icon name={slide.icon} size={24} />
              </span>
            )}
            <p className={styles.tag}>{slide.tag}</p>
            <h3 className={styles.title}>{slide.title}</h3>
            <p className={styles.body}>{slide.body}</p>
          </div>
          <div className={styles.leftFoot}>
            {slide.link ? (
              <Link href={slide.link.href} className={styles.learn}>
                {slide.link.label}
                <span className="visually-hidden">: {slide.title}</span>
                <Icon name="arrowRight" size={18} />
              </Link>
            ) : (
              <span className={styles.counter} aria-hidden="true">
                {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
              </span>
            )}
            <div className={styles.nav}>
              <button type="button" className={styles.navBtn} aria-label={prevLabel} onClick={() => go(index - 1)}>
                <Icon name="prev" size={18} />
              </button>
              <button type="button" className={styles.navBtn} aria-label={nextLabel} onClick={() => go(index + 1)}>
                <Icon name="next" size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          {slides.map((s, i) => (
            <Image
              key={s.title}
              src={s.image.src}
              alt={s.image.alt}
              fill
              sizes="(max-width: 860px) 100vw, 620px"
              className={`${styles.img} ${i === index ? styles.imgActive : ""}`}
            />
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {slides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            aria-label={`${goToLabel} ${i + 1}: ${s.tag}`}
            aria-current={i === index ? "true" : undefined}
            onClick={() => go(i)}
          >
            <span />
          </button>
        ))}
      </div>
    </>
  );
}
