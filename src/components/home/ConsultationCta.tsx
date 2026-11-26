import Image from "next/image";
import { consultationCta } from "@/content/cta";
import type { CtaLink, Rich } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { RichText } from "@/components/ui/RichText";
import styles from "./ConsultationCta.module.css";

type ConsultationCtaProps = {
  /** Override the default copy (e.g. a case-study specific call to action). */
  content?: { heading: Rich; body: Rich; buttons: CtaLink[]; trust?: string };
};

/** Teal call-to-action band over a photo. Defaults to the home page copy. */
export function ConsultationCta({ content }: ConsultationCtaProps) {
  const { heading, body, buttons, trust } = content ?? consultationCta;
  return (
    <section className={styles.section} id={consultationCta.id} aria-labelledby="cta-heading" data-surface="dark">
      <Image src={consultationCta.backgroundImage} alt="" fill sizes="100vw" className={styles.bg} />
      <div className={`section-wrap ${styles.inner}`} data-reveal="">
        <div className={styles.text}>
          <h2 id="cta-heading">
            <RichText value={heading} />
          </h2>
          <p>
            <RichText value={body} />
          </p>
        </div>
        <div className={styles.btns}>
          {buttons.map((b) => (
            <Button key={b.label} href={b.href} variant={b.variant}>
              {b.label}
            </Button>
          ))}
          {trust && (
            <p className={styles.trust}>
              <span className={styles.dot} aria-hidden="true" />
              {trust}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
