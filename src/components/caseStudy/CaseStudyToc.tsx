"use client";

import { useEffect, useState } from "react";
import styles from "./CaseStudy.module.css";

type CaseStudyTocProps = { title: string; items: Array<{ id: string; label: string }> };

/** "On this page" list; highlights the section currently in view. */
export function CaseStudyToc({ title, items }: CaseStudyTocProps) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A band just below the sticky header counts as "reading".
      { rootMargin: "-90px 0px -60% 0px" },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <nav className={`${styles.sideCard} ${styles.toc}`} aria-label={title}>
      <p className={styles.sideTitle}>{title}</p>
      <ol className={styles.tocList}>
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={item.id === active ? styles.tocActive : undefined}
              aria-current={item.id === active ? "location" : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
