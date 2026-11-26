"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState, type KeyboardEvent } from "react";
import { mainNav, mobileMenu } from "@/content/navigation";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { useMediaQuery, useScrolledPast } from "@/lib/hooks";
import { Logo } from "./Logo";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import styles from "./Header.module.css";

const CLOSE_DELAY_MS = 180;
const MOBILE_MENU_ID = "mobile-menu";
const panelId = (id: string) => `mega-${id}`;

export function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  const [openId, setOpenId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrolled = useScrolledPast(40);
  const canHover = useMediaQuery("(hover: hover)");
  const isCompact = useMediaQuery("(max-width: 1100px)");
  // The mobile menu only exists at ≤1100px; resizing wider closes it.
  const mobileMenuOpen = mobileOpen && isCompact;
  const megaOpenId = isCompact ? null : openId;

  const open = (id: string | null) => {
    window.clearTimeout(closeTimer.current);
    setOpenId(id);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenId(null), CLOSE_DELAY_MS);
  };

  // Close on outside click.
  useEffect(() => {
    if (!megaOpenId) return;
    const onDocClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setOpenId(null);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [megaOpenId]);

  // Menus are transient: reset them if this layout is hidden during navigation.
  useLayoutEffect(
    () => () => {
      window.clearTimeout(closeTimer.current);
      setOpenId(null);
      setMobileOpen(false);
    },
    [],
  );

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key !== "Escape" || !megaOpenId) return;
    const trigger = document.querySelector<HTMLButtonElement>(`[aria-controls="${panelId(megaOpenId)}"]`);
    open(null);
    trigger?.focus();
  };

  const closeMega = () => open(null);

  const classes = [styles.nav, scrolled && styles.scrolled, megaOpenId && styles.menuOpen].filter(Boolean).join(" ");

  return (
    <>
      <header ref={headerRef} className={classes} onKeyDown={onKeyDown} data-surface="dark">
        <div className={styles.bar}>
          <Logo variant="header" onMouseEnter={closeMega} onClick={closeMega} />

          <nav aria-label="Main" className={styles.navEl}>
            <ul className={styles.links}>
              {mainNav.map((item) =>
                item.kind === "mega" ? (
                  <li
                    key={item.id}
                    className={`${styles.item} ${megaOpenId === item.id ? styles.itemOpen : ""}`}
                    onMouseEnter={canHover ? () => open(item.id) : undefined}
                    onMouseLeave={canHover ? scheduleClose : undefined}
                  >
                    <button
                      type="button"
                      className={styles.trigger}
                      aria-expanded={megaOpenId === item.id}
                      aria-controls={panelId(item.id)}
                      onClick={() => open(megaOpenId === item.id ? null : item.id)}
                    >
                      {item.label}
                      <Icon name="chevron" size={12} className={styles.chev} />
                    </button>
                    <MegaMenu
                      menu={item}
                      panelId={panelId(item.id)}
                      open={megaOpenId === item.id}
                      onNavigate={closeMega}
                    />
                  </li>
                ) : (
                  <li key={item.label} className={styles.item} onMouseEnter={closeMega}>
                    <Link href={item.href} className={styles.trigger}>
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className={styles.right} onMouseEnter={closeMega}>
            <Link href={site.contact.href} className={styles.contact}>
              {site.contact.label}
            </Link>
            <Link href={site.language.href} className={styles.lang} lang={site.language.lang}>
              <Icon name="globe" size={18} />
              {site.language.label}
            </Link>
          </div>

          <button
            ref={burgerRef}
            type="button"
            className={styles.burger}
            aria-label={mobileMenu.openLabel}
            aria-controls={MOBILE_MENU_ID}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Icon name="menu" size={22} />
          </button>
        </div>
      </header>

      <MobileMenu
        id={MOBILE_MENU_ID}
        open={mobileMenuOpen}
        onClose={() => setMobileOpen(false)}
        returnFocusRef={burgerRef}
      />
    </>
  );
}
