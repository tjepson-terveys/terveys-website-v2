import { Fragment } from "react";
import type { Rich } from "@/content/types";

type RichTextProps = {
  value: Rich;
  /** Class applied to accent spans. */
  accentClassName?: string;
};

/** Renders a Rich content value: line breaks, accent spans and bold parts. */
export function RichText({ value, accentClassName }: RichTextProps) {
  return (
    <>
      {value.map((part, i) => {
        let node: React.ReactNode = part.text;
        if (part.strong) node = <strong>{node}</strong>;
        if (part.accent) node = <span className={accentClassName}>{node}</span>;
        return (
          <Fragment key={i}>
            {part.br && <br />}
            {node}
          </Fragment>
        );
      })}
    </>
  );
}

/** Plain-text version (for aria-labels, metadata). */
export const richToString = (value: Rich) => value.map((p) => p.text).join(" ").replace(/\s+/g, " ").trim();
