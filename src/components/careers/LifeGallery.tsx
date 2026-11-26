"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { careersAnchors, lifeAtTerveys } from "@/content/careers";
import { Icon } from "@/components/ui/Icon";
import styles from "./LifeGallery.module.css";

/**
 * Horizontally scrolling photo strip: swipe, trackpad, keyboard (focus the strip, then ←/→)
 * or the arrow buttons. Scroll-snapped, and the strip bleeds to the right edge of the window.
 */
export function LifeGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const max = track.scrollWidth - track.clientWidth;
        setEdges({ start: track.scrollLeft <= 4, end: track.scrollLeft >= max - 4 });
      });
    };
    update();
    track.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(track);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    const card = track?.querySelector<HTMLElement>("li");
    if (!track || !card) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollBy({ left: dir * (card.offsetWidth + 16), behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section className={styles.section} id={careersAnchors.life} aria-labelledby="life-heading">
      <div className={styles.headOuter}>
        <div className={`section-wrap ${styles.head}`} data-reveal="">
          <div>
            <p className="section-eyebrow">{lifeAtTerveys.eyebrow}</p>
            <h2 id="life-heading" className="section-heading">
              {lifeAtTerveys.heading}
            </h2>
            <p className="section-sub">{lifeAtTerveys.sub}</p>
          </div>
          <div className={styles.nav}>
            <button type="button" className={styles.navBtn} aria-label={lifeAtTerveys.prevLabel} onClick={() => scroll(-1)} disabled={edges.start}>
              <Icon name="prev" size={18} />
            </button>
            <button type="button" className={styles.navBtn} aria-label={lifeAtTerveys.nextLabel} onClick={() => scroll(1)} disabled={edges.end}>
              <Icon name="next" size={18} />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className={styles.track}
        role="region"
        aria-label={lifeAtTerveys.regionLabel}
        tabIndex={0}
        data-reveal=""
      >
        <ul className={styles.list}>
          {lifeAtTerveys.photos.map((photo) => (
            <li key={photo.src} className={styles.card}>
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 85vw, 560px" className={styles.img} />
              <span className={styles.caption} aria-hidden="true">
                {photo.caption}
              </span>
            </li>
          ))}
          <li className={`${styles.card} ${styles.more}`}>
            <Image src={lifeAtTerveys.seeMore.image} alt="" fill sizes="(max-width: 640px) 85vw, 560px" className={styles.img} />
            <Link href={lifeAtTerveys.seeMore.href} className={styles.moreLink}>
              <span>{lifeAtTerveys.seeMore.label}</span>
              <span className={styles.moreArrow}>
                <Icon name="arrowRight" size={20} />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
