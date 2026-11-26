import Image from "next/image";
import Link from "next/link";
import type { MegaMenu as MegaMenuData } from "@/content/navigation";
import { SegmentLink } from "@/components/ui/SegmentLink";
import styles from "./MegaMenu.module.css";

type MegaMenuProps = {
  menu: MegaMenuData;
  panelId: string;
  open: boolean;
  onNavigate: () => void;
};

/** Full-width dark panel: title + two-column link list on the left, feature card on the right. */
export function MegaMenu({ menu, panelId, open, onNavigate }: MegaMenuProps) {
  return (
    <div className={`${styles.mega} ${open ? styles.open : ""}`} id={panelId}>
      <div className={styles.inner}>
        <div>
          <p className={styles.title}>{menu.title}</p>
          <ul className={styles.list}>
            {menu.links.map((link) => (
              <li key={link.label}>
                <SegmentLink href={link.href} segment={link.segment} onClick={onNavigate}>
                  {link.label}
                </SegmentLink>
              </li>
            ))}
          </ul>
        </div>
        <Link href={menu.feature.href} className={styles.feature} onClick={onNavigate}>
          <Image
            src={menu.feature.image.src}
            alt={menu.feature.image.alt}
            width={400}
            height={210}
            sizes="400px"
            className={styles.featureImg}
          />
          <span className={styles.featureBody}>
            <span className={styles.kicker}>{menu.feature.kicker}</span>
            <span className={styles.featureText}>{menu.feature.text}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
