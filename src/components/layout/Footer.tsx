import Image from "next/image";
import Link from "next/link";
import { cacheLife } from "next/cache";
import { footerColumns, footerMeta, isoBadges } from "@/content/footer";
import { site } from "@/content/site";
import { Icon } from "@/components/ui/Icon";
import { SegmentLink } from "@/components/ui/SegmentLink";
import { Logo } from "./Logo";
import styles from "./Footer.module.css";

/** Current year, cached so the footer stays in the static shell (refreshed daily). */
async function getCurrentYear() {
  "use cache";
  cacheLife("days");
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className={styles.footer} data-surface="dark">
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.top}>
            <Logo variant="footer" />
            <ul className={styles.social}>
              {site.social.map((s) => (
                <li key={s.network}>
                  <a href={s.href} aria-label={s.label}>
                    <Icon name={s.network} size={s.network === "youtube" ? 24 : 22} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.cols}>
            {footerColumns.map((col) => (
              <div key={col.title} className={col.posts ? styles.postsCol : undefined}>
                <h2 className={styles.colTitle}>{col.title}</h2>
                <ul className={`${styles.links} ${col.posts ? styles.posts : ""}`}>
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <SegmentLink href={link.href} segment={link.segment}>
                        {link.label}
                      </SegmentLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <ul className={styles.badges}>
            {isoBadges.map((badge) => (
              <li key={badge.standard}>
                {badge.image ? (
                  <Image src={badge.image} alt={badge.label} width={112} height={112} className={styles.badgeImg} />
                ) : (
                  <div className={styles.badge} role="img" aria-label={badge.label}>
                    <small>CERTIFIED</small>
                    <strong>ISO</strong>
                    <em>{badge.standard}</em>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        <a href="#top" className={styles.backToTop} aria-label={footerMeta.backToTop}>
          <Icon name="arrowUp" size={20} />
        </a>
      </div>

      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <Link href={footerMeta.privacy.href}>{footerMeta.privacy.label}</Link>
          <p className={styles.copy}>{footerMeta.copyright.replace("{year}", String(year))}</p>
        </div>
      </div>
    </footer>
  );
}
