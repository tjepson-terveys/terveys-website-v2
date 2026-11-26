"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useSyncExternalStore, type KeyboardEvent } from "react";
import { segments, segmentsTablistLabel, type SegmentId } from "@/content/healthcare";
import { Icon } from "@/components/ui/Icon";
import { readSegmentFromUrl, SEGMENT_EVENT } from "@/lib/segment";
import styles from "./HealthcareTabs.module.css";

const tabId = (id: SegmentId) => `ind-tab-${id}`;
const panelId = (id: SegmentId) => `ind-${id}`;

/** Segment requested by the URL (?segment=imaging, #imaging or #ind-imaging). */
function useUrlSegment() {
  return useSyncExternalStore(
    (onChange) => {
      window.addEventListener("popstate", onChange);
      window.addEventListener("hashchange", onChange);
      return () => {
        window.removeEventListener("popstate", onChange);
        window.removeEventListener("hashchange", onChange);
      };
    },
    readSegmentFromUrl,
    () => null,
  );
}

/** WAI-ARIA tabs: roving tabIndex, ←/→/Home/End, deep-linkable from the menu and footer. */
export function HealthcareTabs() {
  const urlSegment = useUrlSegment();
  const [chosen, setChosen] = useState<SegmentId | null>(null);
  const active = chosen ?? urlSegment ?? segments[0].id;
  const tabRefs = useRef<Partial<Record<SegmentId, HTMLButtonElement | null>>>({});

  // Menu/footer deep links on this page select the tab directly.
  useEffect(() => {
    const onRequest = (e: Event) => setChosen((e as CustomEvent<SegmentId>).detail);
    window.addEventListener(SEGMENT_EVENT, onRequest);
    return () => window.removeEventListener(SEGMENT_EVENT, onRequest);
  }, []);

  const select = (id: SegmentId, focus = false) => {
    setChosen(id);
    if (focus) tabRefs.current[id]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, i: number) => {
    let n: number | null = null;
    if (e.key === "ArrowRight") n = (i + 1) % segments.length;
    if (e.key === "ArrowLeft") n = (i - 1 + segments.length) % segments.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = segments.length - 1;
    if (n === null) return;
    e.preventDefault();
    select(segments[n].id, true);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <div className={styles.barInner} role="tablist" aria-label={segmentsTablistLabel}>
          {segments.map((s, i) => {
            const selected = s.id === active;
            return (
              <button
                key={s.id}
                ref={(el) => {
                  tabRefs.current[s.id] = el;
                }}
                type="button"
                role="tab"
                id={tabId(s.id)}
                aria-controls={panelId(s.id)}
                aria-selected={selected}
                tabIndex={selected ? 0 : -1}
                className={`${styles.tab} ${selected ? styles.tabActive : ""}`}
                onClick={() => select(s.id)}
                onKeyDown={(e) => onKeyDown(e, i)}
              >
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className={styles.panels} data-reveal="">
        {segments.map((s) => {
          const selected = s.id === active;
          return (
            <div
              key={s.id}
              id={panelId(s.id)}
              role="tabpanel"
              aria-labelledby={tabId(s.id)}
              tabIndex={0}
              hidden={!selected}
              className={styles.panel}
            >
              <div>
                <p className={styles.eyebrow}>{s.eyebrow}</p>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.description}</p>
                <ul className={styles.deliver}>
                  {s.deliverables.map((d) => (
                    <li key={d}>
                      <Icon name="check" size={16} />
                      {d}
                    </li>
                  ))}
                </ul>
                <Link href={s.cta.href} className="btn btn-teal">
                  {s.cta.label}
                  <Icon name="arrowRight" size={16} strokeWidth={2.2} />
                </Link>
              </div>
              <div className={styles.visual}>
                <Image
                  src={s.image.src}
                  alt={s.image.alt}
                  fill
                  sizes="(max-width: 960px) 100vw, 592px"
                  className={styles.visualImg}
                />
                <div className={styles.caption}>
                  <p className={styles.kicker}>{s.kicker}</p>
                  <p className={styles.captionText}>{s.caption}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
