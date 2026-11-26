"use client";

import Link from "next/link";
import { useEffect, useRef, type KeyboardEvent, type RefObject } from "react";
import { mainNav, mobileMenu } from "@/content/navigation";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { SegmentLink } from "@/components/ui/SegmentLink";
import { Logo } from "./Logo";
import styles from "./MobileMenu.module.css";

type MobileMenuProps = {
  id: string;
  open: boolean;
  onClose: () => void;
  /** Focus returns here when the menu closes. */
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

/** Full-screen menu (≤1100px) with a <details> accordion per group. */
export function MobileMenu({ id, open, onClose, returnFocusRef }: MobileMenuProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and move focus while open; restore both on close.
  useEffect(() => {
    if (!open) return;
    const returnTo = returnFocusRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      returnTo?.focus();
    };
  }, [open, returnFocusRef]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    // Keep focus inside the dialog.
    const focusable = Array.from(
      dialogRef.current.querySelectorAll<HTMLElement>("a[href], button, summary"),
    ).filter((el) => el.offsetParent !== null);
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  return (
    <div
      ref={dialogRef}
      id={id}
      className={`${styles.menu} ${open ? styles.open : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={mobileMenu.dialogLabel}
      onKeyDown={onKeyDown}
      data-surface="dark"
    >
      <div className={styles.head}>
        <Logo variant="header" onClick={onClose} />
        <button ref={closeRef} type="button" className={styles.close} aria-label={mobileMenu.closeLabel} onClick={onClose}>
          <Icon name="close" size={20} />
        </button>
      </div>

      {mainNav.map((item) =>
        item.kind === "mega" ? (
          <details key={item.id} className={styles.group}>
            <summary>
              {item.label}
              <Icon name="chevron" size={14} className={styles.chev} />
            </summary>
            <ul>
              {item.links.map((link) => (
                <li key={link.label}>
                  <SegmentLink href={link.href} segment={link.segment} onClick={onClose}>
                    {link.label}
                  </SegmentLink>
                </li>
              ))}
            </ul>
          </details>
        ) : (
          <Link key={item.label} href={item.href} className={styles.link} onClick={onClose}>
            {item.label}
          </Link>
        ),
      )}

      <Link href={site.language.href} className={styles.link} lang={site.language.lang} onClick={onClose}>
        {site.language.label}
      </Link>
      <Link href={site.contact.href} className={styles.cta} onClick={onClose}>
        {site.contact.label}
      </Link>
    </div>
  );
}
