import type { Metadata } from "next";
import Link from "next/link";
import { backHome, comingSoon } from "@/content/pages";
import styles from "./StubPage.module.css";

type StubPageProps = {
  eyebrow: string;
  title: string;
  lang?: string;
  message?: string;
};

/** Placeholder page shared by every route that doesn't have content yet. */
export function StubPage({ eyebrow, title, lang, message = comingSoon }: StubPageProps) {
  return (
    <>
      <section className={styles.banner} data-surface="dark" lang={lang}>
        <div className="section-wrap">
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </section>
      <section className={styles.body}>
        <div className="section-wrap">
          <p className={styles.message} lang={lang}>
            {message}
          </p>
          <Link href={backHome.href} className="btn-text">
            ← {backHome.label}
          </Link>
        </div>
      </section>
    </>
  );
}

export const stubMetadata = (title: string, path: string): Metadata => ({
  title,
  alternates: { canonical: path },
  openGraph: { title, url: path },
});
