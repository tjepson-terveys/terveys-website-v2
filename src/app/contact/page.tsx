import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import { Reveal } from "@/components/ui/Reveal";
import { connectPhoneOrder, contactForm, contactPage, offices } from "@/content/contact";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: contactPage.metaTitle,
  description: contactPage.metaDescription,
  alternates: { canonical: contactPage.path },
  openGraph: { title: contactPage.metaTitle, description: contactPage.metaDescription, url: contactPage.path },
};

export default function ContactPage() {
  const { header, connect, locations, maps } = contactPage;
  const connectPhones = connectPhoneOrder.map((id) => offices.find((o) => o.id === id)!);

  return (
    <>
      {/* Page header — sits under the transparent site header, like the home hero */}
      <section className={styles.pageHeader} data-surface="dark" aria-labelledby="contact-title">
        <div className="section-wrap">
          <p className={styles.badge}>
            <Icon name="mail" size={14} />
            {header.badge}
          </p>
          <h1 id="contact-title" className={styles.title}>
            {header.title}
          </h1>
          <p className={styles.intro}>{header.intro}</p>
        </div>
      </section>

      {/* Quick connect bar */}
      <div className={styles.connectBar}>
        <div className={`section-wrap ${styles.connectInner}`}>
          <h2 className={styles.connectLabel}>{connect.label}</h2>
          <ul className={styles.connectItems}>
            {connectPhones.map((o) => (
              <li key={o.id}>
                <a className={styles.connectItem} href={`tel:${o.phone.tel}`}>
                  <span className={styles.iconCircle}>
                    <Icon name="phone" size={16} />
                  </span>
                  {o.phone.display}
                </a>
              </li>
            ))}
            <li>
              <a className={styles.connectItem} href={`mailto:${connect.email}`}>
                <span className={styles.iconCircle}>
                  <Icon name="mail" size={16} />
                </span>
                {connect.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Locations + form */}
      <section className={styles.main}>
        <div className={`section-wrap ${styles.mainGrid}`}>
          <div data-reveal="">
            <p className="section-eyebrow">{locations.eyebrow}</p>
            <h2 className={styles.colTitle}>
              <RichText value={locations.heading} />
            </h2>
            <p className={styles.colSub}>{locations.sub}</p>

            <ul className={styles.locationCards}>
              {offices.map((o) => (
                <li key={o.id} className={styles.locationCard}>
                  <span className={`${styles.iconCircle} ${styles.iconLg}`}>
                    <Icon name="mapPin" size={22} strokeWidth={1.8} />
                  </span>
                  <div>
                    <h3 className={styles.country}>{o.country}</h3>
                    <address className={styles.address}>
                      {o.address.map((line, i) => (
                        <span key={i}>
                          {i > 0 && <br />}
                          {line}
                        </span>
                      ))}
                    </address>
                    <a className={styles.phone} href={`tel:${o.phone.tel}`}>
                      <Icon name="phone" size={14} />
                      {o.phone.display}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal="">
            <p className="section-eyebrow">{contactForm.eyebrow}</p>
            <h2 className={styles.colTitle}>{contactForm.heading}</h2>
            <p className={styles.colSub}>{contactForm.sub}</p>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Offices strip */}
      <section className={styles.maps} aria-labelledby="offices-heading">
        <div className="section-wrap">
          <div className={styles.mapsHeader} data-reveal="">
            <p className="section-eyebrow">{maps.eyebrow}</p>
            <h2 id="offices-heading" className={styles.colTitle}>
              {maps.heading}
            </h2>
            <p className={styles.mapsSub}>{maps.sub}</p>
          </div>
          <ul className={styles.mapGrid}>
            {offices.map((o) => (
              <li key={o.id} className={styles.mapCard} data-reveal="stagger">
                {/* TODO: replace the placeholder with an embedded map or a static map image. */}
                <div className={styles.mapPlaceholder} aria-hidden="true">
                  <Icon name="mapPin" size={36} />
                  <span>{o.map.city}</span>
                </div>
                <div className={styles.mapBody}>
                  <h3>{o.map.title}</h3>
                  <p>{o.map.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Reveal />
    </>
  );
}
