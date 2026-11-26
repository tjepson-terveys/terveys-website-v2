"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { newsItemPage } from "@/content/news";
import { Icon } from "@/components/ui/Icon";
import styles from "./NewsGallery.module.css";

type Photo = { src: string; alt: string; width: number; height: number };

/** Photo grid; each photo opens a full-screen lightbox (native <dialog>: Esc closes, focus is trapped). */
export function NewsGallery({ photos }: { photos: Photo[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (index !== null && !dialog.open) dialog.showModal();
    if (index === null && dialog.open) dialog.close();
  }, [index]);

  const close = () => {
    const last = index;
    setIndex(null);
    if (last !== null) triggerRefs.current[last]?.focus();
  };
  const step = (dir: number) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length));
  const onKeyDown = (e: KeyboardEvent<HTMLDialogElement>) => {
    if (e.key === "ArrowRight") step(1);
    if (e.key === "ArrowLeft") step(-1);
  };

  const current = index !== null ? photos[index] : null;

  return (
    <>
      <ul className={`${styles.grid} ${photos.length === 1 ? styles.single : ""}`}>
        {photos.map((p, i) => (
          <li key={p.src}>
            <button
              ref={(el) => {
                triggerRefs.current[i] = el;
              }}
              type="button"
              className={styles.thumb}
              aria-label={`${newsItemPage.galleryOpen}: ${p.alt}`}
              onClick={() => setIndex(i)}
            >
              <Image src={p.src} alt="" width={p.width} height={p.height} sizes="(max-width: 760px) 100vw, 380px" className={styles.img} />
              <span className={styles.zoom} aria-hidden="true">
                <Icon name="search" size={18} />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog ref={dialogRef} className={styles.dialog} aria-label={current?.alt} onClose={() => setIndex(null)} onKeyDown={onKeyDown} onClick={(e) => e.target === e.currentTarget && close()}>
        {current && (
          <div className={styles.stage}>
            <Image src={current.src} alt={current.alt} width={current.width} height={current.height} sizes="100vw" className={styles.full} />
            <p className={styles.counter} aria-live="polite">
              {index! + 1} / {photos.length}
            </p>
            <button type="button" className={`${styles.ctl} ${styles.closeBtn}`} aria-label={newsItemPage.galleryClose} onClick={close}>
              <Icon name="close" size={20} />
            </button>
            {photos.length > 1 && (
              <>
                <button type="button" className={`${styles.ctl} ${styles.prev}`} aria-label={newsItemPage.galleryPrev} onClick={() => step(-1)}>
                  <Icon name="prev" size={22} />
                </button>
                <button type="button" className={`${styles.ctl} ${styles.next}`} aria-label={newsItemPage.galleryNext} onClick={() => step(1)}>
                  <Icon name="next" size={22} />
                </button>
              </>
            )}
          </div>
        )}
      </dialog>
    </>
  );
}
