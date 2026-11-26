import { grow } from "@/content/careers";
import { FeatureCarousel } from "@/components/ui/FeatureCarousel";
import styles from "./GrowCarousel.module.css";

export function GrowCarousel() {
  return (
    <section className={styles.section} id="grow" aria-labelledby="grow-heading">
      <div className="section-wrap">
        <div data-reveal="">
          <h2 id="grow-heading" className={styles.heading}>
            {grow.heading}
          </h2>
          <p className={styles.sub}>{grow.sub}</p>
        </div>
        <FeatureCarousel
          label={grow.heading}
          prevLabel={grow.prevLabel}
          nextLabel={grow.nextLabel}
          goToLabel={grow.goToLabel}
          slides={grow.slides.map((s) => ({
            tag: s.tag,
            title: s.title,
            body: s.body,
            image: s.image,
            link: { href: s.href, label: grow.learnMore },
          }))}
        />
      </div>
    </section>
  );
}
