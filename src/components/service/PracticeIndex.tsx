"use client";

import { useEffect, useState } from "react";
import styles from "./Service.module.css";

type PracticeIndexProps = {
  label: string;
  items: Array<{ id: string; title: string }>;
};

/** Sticky numbered index of the practice areas; highlights the one currently in view. */
export function PracticeIndex({ label, items }: PracticeIndexProps) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      // A band across the upper-middle of the viewport decides which card is "current".
      { rootMargin: "-30% 0px -60% 0px" },
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [items]);

  return (
    <nav aria-label={label} className={styles.index}>
      <ol>
        {items.map((item, i) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`${styles.indexLink} ${item.id === active ? styles.indexActive : ""}`}
              aria-current={item.id === active ? "true" : undefined}
            >
              <span className={styles.indexNum}>{String(i + 1).padStart(2, "0")}</span>
              {item.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
