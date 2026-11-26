"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ResolvedHeroSlide } from "@/lib/heroMedia";
import { hero } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { usePrefersReducedMotion } from "@/lib/hooks";
import styles from "./HeroSlider.module.css";

const pad = (n: number) => String(n).padStart(2, "0");

type HeroSliderProps = { slides: ResolvedHeroSlide[] };

export function HeroSlider({ slides }: HeroSliderProps) {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  /** Bumped on every slide change so the active progress bar's animation restarts. */
  const [cycle, setCycle] = useState(0);
  /** null = user hasn't chosen; reduced-motion users start paused (no autoplay). */
  const [userPaused, setUserPaused] = useState<boolean | null>(null);
  const paused = userPaused ?? reducedMotion;
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([]);

  const go = (n: number) => {
    const next = (n + slides.length) % slides.length;
    const video = videoRefs.current[next];
    if (video) video.currentTime = 0;
    setIndex(next);
    setCycle((c) => c + 1);
  };

  // Only the active slide's video plays; pause it when inactive or paused.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index && !paused) video.play().catch(() => {});
      else video.pause();
    });
  }, [index, paused]);

  const total = pad(slides.length);

  return (
    <section
      id="hero"
      className={`${styles.hero} ${paused ? styles.paused : ""}`}
      aria-roledescription="carousel"
      aria-label={hero.label}
      style={{ "--slide-ms": `${hero.slideMs}ms` } as React.CSSProperties}
      data-surface="dark"
    >
      {slides.map((slide, i) => {
        const active = i === index;
        const Title = i === 0 ? "h1" : "h2";
        const eager = i === 0;
        return (
          <div
            key={i}
            className={`${styles.slide} ${active ? styles.active : ""}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            aria-hidden={!active}
            inert={!active}
          >
            {slide.media.type === "video" ? (
              <>
                <Image
                  src={slide.media.poster}
                  alt=""
                  fill
                  sizes="100vw"
                  className={styles.media}
                  preload={eager}
                  quality={80}
                />
                {slide.videoAvailable && (
                  <video
                    ref={(el) => {
                      videoRefs.current[i] = el;
                    }}
                    className={styles.media}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    aria-hidden="true"
                  >
                    <source src={slide.media.src} type="video/mp4" />
                  </video>
                )}
              </>
            ) : (
              <Image
                src={slide.media.src}
                alt={slide.media.alt}
                fill
                sizes="100vw"
                className={styles.media}
                preload={eager}
                quality={80}
              />
            )}

            <div className={styles.content}>
              <p className={styles.tag}>{slide.tag}</p>
              <Title className={styles.title}>
                <RichText value={slide.title} accentClassName={styles.accent} />
              </Title>
              <p className={styles.sub}>{slide.sub}</p>
              <div className={styles.ctaRow}>
                {slide.ctas.map((cta) => (
                  <Button key={cta.label} href={cta.href} variant={cta.variant}>
                    {cta.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        );
      })}

      <div className={styles.controls}>
        <span className={styles.count} aria-live={paused ? "polite" : "off"} aria-atomic="true">
          {pad(index + 1)} / {total}
        </span>
        <button
          type="button"
          className={styles.ctl}
          aria-label={paused ? hero.controls.play : hero.controls.pause}
          onClick={() => setUserPaused(!paused)}
        >
          <Icon name={paused ? "play" : "pause"} size={18} />
        </button>
        <button type="button" className={styles.ctl} aria-label={hero.controls.prev} onClick={() => go(index - 1)}>
          <Icon name="prev" size={20} />
        </button>
        <button type="button" className={styles.ctl} aria-label={hero.controls.next} onClick={() => go(index + 1)}>
          <Icon name="next" size={20} />
        </button>
        <div className={styles.dots}>
          {slides.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                className={`${styles.dot} ${active ? styles.dotActive : ""}`}
                aria-label={`${hero.controls.goTo} ${i + 1}`}
                aria-current={active ? "true" : undefined}
                onClick={() => go(i)}
              >
                <span
                  key={active ? `on-${cycle}` : "off"}
                  // The progress bar finishing advances the slide, so pause/resume stays in sync.
                  onAnimationEnd={active ? () => !paused && go(index + 1) : undefined}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
