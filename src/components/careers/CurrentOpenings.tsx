import { careersAnchors, currentOpenings } from "@/content/careers";
import { Icon } from "@/components/ui/Icon";
import { Notice } from "@/components/ui/Notice";
import styles from "./CurrentOpenings.module.css";

const applyHref = (title: string) =>
  `mailto:${currentOpenings.applyEmail}?subject=${encodeURIComponent(`Application: ${title}`)}`;

export function CurrentOpenings() {
  const { jobs } = currentOpenings;
  return (
    <section className={styles.section} id={careersAnchors.openings} aria-labelledby="openings-heading">
      <div className="section-wrap">
        <div className={styles.head} data-reveal="">
          <p className="section-eyebrow">{currentOpenings.eyebrow}</p>
          <h2 id="openings-heading" className="section-heading">
            {currentOpenings.heading}
          </h2>
          <p className="section-sub">{currentOpenings.sub}</p>
        </div>

        {jobs.length === 0 ? (
          <p className={styles.empty}>{currentOpenings.empty}</p>
        ) : (
          <ul className={styles.list}>
            {jobs.map((job) => (
              <li key={job.title} className={styles.job} data-reveal="stagger">
                <div className={styles.jobMain}>
                  <h3 className={styles.title}>{job.title}</h3>
                  <ul className={styles.meta}>
                    <li>
                      <Icon name="mapPin" size={16} strokeWidth={1.8} />
                      {job.location}
                    </li>
                    <li>
                      <Icon name="briefcase" size={16} />
                      {job.type}
                    </li>
                    <li>
                      <Icon name="clock" size={16} strokeWidth={2.4} />
                      {job.experience}
                    </li>
                  </ul>
                  <p className={styles.summary}>{job.summary}</p>
                  <ul className={styles.skills} aria-label="Key skills">
                    {job.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <a className={`btn btn-teal ${styles.apply}`} href={applyHref(job.title)}>
                  {currentOpenings.applyLabel}
                  <span className="visually-hidden">: {job.title}</span>
                  <Icon name="arrowRight" size={16} />
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.noticeWrap}>
          <Notice id="openings-notice" title={currentOpenings.notice.title} text={currentOpenings.notice.text} />
        </div>
      </div>
    </section>
  );
}
