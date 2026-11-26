import Image from "next/image";
import Link from "next/link";
import { services, serviceHref, whatWeDo } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import styles from "./WhatWeDo.module.css";

export function WhatWeDo() {
  return (
    <section className={styles.section} id={whatWeDo.id} aria-labelledby="what-we-do-heading">
      <div className="section-wrap">
        <div className={styles.header} data-reveal="">
          <div>
            <p className="section-eyebrow">{whatWeDo.eyebrow}</p>
            <h2 className="section-heading" id="what-we-do-heading">
              <RichText value={whatWeDo.heading} />
            </h2>
          </div>
          <div>
            <p className={`section-sub ${styles.intro}`}>{whatWeDo.intro}</p>
            <Link href={whatWeDo.viewAll.href} className={`btn-text ${styles.headerLink}`}>
              {whatWeDo.viewAll.label}
            </Link>
          </div>
        </div>

        <div className={styles.grid}>
          {services.map((service) => (
            <Link
              key={service.slug}
              href={serviceHref(service.slug)}
              className={`${styles.tile} ${service.lead ? styles.lead : ""}`}
              aria-label={service.ariaLabel}
              data-reveal="stagger"
            >
              <Image
                src={service.image.src}
                alt={service.image.alt}
                fill
                sizes={service.lead ? "(max-width: 680px) 100vw, (max-width: 1000px) 100vw, 830px" : "(max-width: 680px) 100vw, (max-width: 1000px) 50vw, 410px"}
                className={styles.img}
              />
              <span className={styles.top}>
                <span className={styles.num}>{service.number}</span>
                <span className={styles.arrow}>
                  <Icon name="arrowRight" size={18} />
                </span>
              </span>
              <h3 className={styles.name}>{service.name}</h3>
              <p className={styles.line}>{service.line}</p>
              <ul className={styles.features}>
                {service.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
