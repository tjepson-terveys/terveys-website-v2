"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import type { ServiceDetail } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import styles from "./Service.module.css";

type Industry = ServiceDetail["industries"]["items"][number];

/** WAI-ARIA tabs (roving tabIndex, ←/→/Home/End) over the industries a service covers. */
export function IndustryTabs({ label, items }: { label: string; items: Industry[] }) {
  const [active, setActive] = useState(items[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let n: number | null = null;
    if (e.key === "ArrowRight") n = (i + 1) % items.length;
    if (e.key === "ArrowLeft") n = (i - 1 + items.length) % items.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = items.length - 1;
    if (n === null) return;
    e.preventDefault();
    setActive(items[n].id);
    tabRefs.current[items[n].id]?.focus();
  };

  return (
    <div data-reveal="">
      <div className={styles.tabs} role="tablist" aria-label={label}>
        {items.map((item, i) => {
          const selected = item.id === active;
          return (
            <button
              key={item.id}
              ref={(el) => {
                tabRefs.current[item.id] = el;
              }}
              type="button"
              role="tab"
              id={`industry-tab-${item.id}`}
              aria-controls={`industry-${item.id}`}
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
              onClick={() => setActive(item.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      {items.map((item) => (
        <div
          key={item.id}
          id={`industry-${item.id}`}
          role="tabpanel"
          aria-labelledby={`industry-tab-${item.id}`}
          tabIndex={0}
          hidden={item.id !== active}
          className={styles.panel}
        >
          <div className={styles.panelMedia}>
            <Image src={item.image.src} alt={item.image.alt} fill sizes="(max-width: 960px) 100vw, 560px" className={styles.panelImg} />
          </div>
          <div className={styles.panelBody}>
            <p className={styles.eyebrowDark}>{item.label}</p>
            <h3 className={styles.panelTitle}>{item.title}</h3>
            <p className={styles.panelText}>{item.text}</p>
            <ul className={styles.useCases}>
              {item.useCases.map((u) => (
                <li key={u}>
                  <Icon name="check" size={16} />
                  {u}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
