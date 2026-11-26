import Image from "next/image";
import { intro } from "@/content/intro";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import styles from "./Intro.module.css";

export function Intro() {
  return (
    <section className={styles.section} id="intro" aria-labelledby="intro-heading">
      <div className="section-wrap">
        <div className={styles.grid}>
          <div data-reveal="">
            <p className="section-eyebrow">{intro.eyebrow}</p>
            <h2 className="section-heading" id="intro-heading">
              <RichText value={intro.heading} />
            </h2>
            <p className="section-sub">{intro.body}</p>
            <div className={styles.pillars}>
              {intro.pillars.map((pillar) => (
                <div key={pillar.title} className={styles.pillar}>
                  <div className={styles.pillarIcon}>
                    <Icon name={pillar.icon} size={22} />
                  </div>
                  <h3 className={styles.pillarTitle}>{pillar.title}</h3>
                  <p className={styles.pillarText}>{pillar.text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imgWrap} data-reveal="">
            <Image
              src={intro.image.src}
              alt={intro.image.alt}
              width={900}
              height={675}
              sizes="(max-width: 900px) 100vw, 584px"
              className={styles.img}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
