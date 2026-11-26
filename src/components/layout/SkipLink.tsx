import { site } from "@/content/site";
import styles from "./SkipLink.module.css";

/** First focusable element on every page; jumps to <main id="main">. */
export function SkipLink() {
  return (
    <a href="#main" className={styles.skip}>
      {site.skipLink}
    </a>
  );
}
