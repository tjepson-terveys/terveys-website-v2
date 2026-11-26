import type { ArticleBlock } from "@/content/types";
import { Icon } from "@/components/ui/Icon";
import styles from "./ArticleBody.module.css";

const Label = ({ text }: { text?: string }) => (text ? <strong className={styles.label}>{text}: </strong> : null);

/** Text with any recorded links turned into anchors (first occurrence of each link's text). */
function Linked({ text, links }: { text: string; links?: Array<{ text: string; href: string }> }) {
  if (!links?.length) return <>{text}</>;
  const out: React.ReactNode[] = [];
  let rest = text;
  links.forEach((l, i) => {
    const at = rest.indexOf(l.text);
    if (at < 0) return;
    out.push(rest.slice(0, at));
    out.push(
      <a key={i} href={l.href} className={styles.link} target="_blank" rel="noopener noreferrer">
        {l.text}
      </a>,
    );
    rest = rest.slice(at + l.text.length);
  });
  out.push(rest);
  return <>{out}</>;
}

/** "April 17, 2025 – Yokohama, Japan" style datelines at the top of news items. */
const DATELINE = /^(?:[A-Z][a-z]{2,8}\.? \d{1,2}, \d{4}|\d{1,2} [A-Z][a-z]+ \d{4})\s+[–-]\s+[A-Z][\w ,.]+$/;

function Block({ block: b }: { block: ArticleBlock }) {
  switch (b.type) {
    case "p":
      if (!b.label && DATELINE.test(b.text)) return <p className={styles.dateline}>{b.text}</p>;
      return (
        <p className={styles.para}>
          <Label text={b.label} />
          <Linked text={b.text} links={b.links} />
        </p>
      );
    case "lead":
      return <p className={styles.lead}>{b.text}</p>;
    case "subheading":
      return <h3 className={styles.subheading}>{b.text}</h3>;
    case "quote":
      return (
        <blockquote className={styles.quote}>
          <p>{b.text}</p>
        </blockquote>
      );
    case "callout":
      return (
        <aside className={styles.callout}>
          {b.title && <p className={styles.calloutTitle}>{b.title}</p>}
          <p>{b.text}</p>
        </aside>
      );
    case "list":
      return b.ordered ? (
        <ol className={styles.numbered}>
          {b.items.map((it, i) => (
            <li key={i}>
              <Label text={it.label} />
              {it.text}
            </li>
          ))}
        </ol>
      ) : (
        <ul className={styles.checks}>
          {b.items.map((it, i) => (
            <li key={i}>
              <Icon name="check" size={16} />
              <span>
                <Label text={it.label} />
                {it.text}
              </span>
            </li>
          ))}
        </ul>
      );
    case "table":
      return (
        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                {b.head.map((h, i) => (
                  <th key={i} scope="col">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) =>
                    c === 0 ? (
                      <th key={c} scope="row">
                        {cell}
                      </th>
                    ) : (
                      <td key={c}>{cell}</td>
                    ),
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

/** Renders article blocks, grouping content into <section>s at each heading (for the in-page nav). */
export function ArticleBody({ blocks }: { blocks: ArticleBlock[] }) {
  const groups: Array<{ heading?: Extract<ArticleBlock, { type: "heading" }>; blocks: ArticleBlock[] }> = [];
  for (const b of blocks) {
    if (b.type === "heading") groups.push({ heading: b, blocks: [] });
    else if (groups.length === 0) groups.push({ blocks: [b] });
    else groups[groups.length - 1].blocks.push(b);
  }

  return (
    <div className={styles.body}>
      {groups.map((g, gi) =>
        g.heading ? (
          <section key={g.heading.id} id={g.heading.id} className={styles.section} aria-labelledby={`${g.heading.id}-heading`}>
            <h2 id={`${g.heading.id}-heading`} className={styles.heading}>
              {g.heading.text}
            </h2>
            {g.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </section>
        ) : (
          <div key={`intro-${gi}`} className={styles.section}>
            {g.blocks.map((b, i) => (
              <Block key={i} block={b} />
            ))}
          </div>
        ),
      )}
    </div>
  );
}

/** "On this page" entries for a list of blocks. */
export const articleToc = (blocks: ArticleBlock[]) =>
  blocks.flatMap((b) => (b.type === "heading" ? [{ id: b.id, label: b.text }] : []));
