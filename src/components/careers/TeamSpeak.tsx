"use client";

import Image from "next/image";
import { useState } from "react";
import { openPositionsLink, teamSpeak } from "@/content/careers";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import styles from "./TeamSpeak.module.css";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export function TeamSpeak() {
  const [index, setIndex] = useState(0);
  const speaker = teamSpeak.speakers[index];

  return (
    <section className={styles.section} id="team" aria-labelledby="team-heading">
      <div className={`section-wrap ${styles.inner}`}>
        <div data-reveal="">
          <p className="section-eyebrow">{teamSpeak.eyebrow}</p>
          <h2 id="team-heading" className={`section-heading ${styles.heading}`}>
            {teamSpeak.heading}
          </h2>

          {/* key remounts the quote so it fades in on every change */}
          <figure key={index} className={styles.quoteBlock} aria-live="polite">
            <figcaption>
              <span className={styles.name}>{speaker.name}</span>
              <span className={styles.role}>{speaker.role}</span>
            </figcaption>
            <blockquote className={styles.quote}>
              <p>{speaker.quote}</p>
            </blockquote>
          </figure>

          <Button href={openPositionsLink.href} variant="teal" className={styles.cta}>
            {teamSpeak.cta}
            <Icon name="arrowRight" size={16} />
          </Button>

          <div className={styles.avatars}>
            {teamSpeak.speakers.map((s, i) => (
              <button
                key={s.name}
                type="button"
                className={`${styles.avatar} ${styles[`av${(i % 5) + 1}`]} ${i === index ? styles.avatarActive : ""}`}
                aria-label={`${teamSpeak.showLabel} ${s.name}`}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                {s.photo ? <Image src={s.photo.src} alt="" width={56} height={56} /> : initials(s.name)}
              </button>
            ))}
          </div>
        </div>

        <div className={`${styles.portrait} ${styles[`av${(index % 5) + 1}`]}`} aria-hidden="true">
          {speaker.photo ? (
            <Image src={speaker.photo.src} alt="" fill sizes="(max-width: 900px) 100vw, 580px" className={styles.portraitImg} />
          ) : (
            <span key={index} className={styles.portraitInitials}>
              {initials(speaker.name)}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
