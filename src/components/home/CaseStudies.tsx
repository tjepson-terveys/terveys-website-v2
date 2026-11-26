import Link from "next/link";
import { caseStudies, caseStudiesSection } from "@/content/caseStudies";
import { CaseStudyCard } from "@/components/caseStudy/CaseStudyCard";
import { RichText } from "@/components/ui/RichText";
import styles from "./CaseStudies.module.css";

export function CaseStudies() {
  return (
    <section className={styles.section} id={caseStudiesSection.id} aria-labelledby="case-studies-heading">
      <div className="section-wrap">
        <div className={styles.header} data-reveal="">
          <div>
            <p className="section-eyebrow">{caseStudiesSection.eyebrow}</p>
            <h2 className="section-heading" id="case-studies-heading">
              <RichText value={caseStudiesSection.heading} />
            </h2>
          </div>
          <Link href={caseStudiesSection.viewAll.href} className="btn-text">
            {caseStudiesSection.viewAll.label}
          </Link>
        </div>

        <div className={styles.grid}>
          {caseStudies
            .filter((cs) => cs.featured)
            .map((cs) => (
              <CaseStudyCard key={cs.slug} caseStudy={cs} />
            ))}
        </div>
      </div>
    </section>
  );
}
