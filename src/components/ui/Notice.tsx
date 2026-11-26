import { Fragment } from "react";
import { Icon } from "./Icon";
import styles from "./Notice.module.css";

const EMAIL_RE = /([\w.+-]+@[\w-]+\.[\w.]+)/;

type NoticeProps = { id: string; title: string; text: string };

/** Highlighted notice (e.g. the recruitment-fraud warning). Email addresses become mailto links. */
export function Notice({ id, title, text }: NoticeProps) {
  return (
    <aside className={styles.notice} aria-labelledby={id} data-reveal="">
      <span className={styles.icon}>
        <Icon name="shield" size={22} />
      </span>
      <div>
        <h3 id={id} className={styles.title}>
          {title}
        </h3>
        <p className={styles.text}>
          {text.split(EMAIL_RE).map((part, i) =>
            EMAIL_RE.test(part) ? (
              <a key={i} href={`mailto:${part}`}>
                {part}
              </a>
            ) : (
              <Fragment key={i}>{part}</Fragment>
            ),
          )}
        </p>
      </div>
    </aside>
  );
}
