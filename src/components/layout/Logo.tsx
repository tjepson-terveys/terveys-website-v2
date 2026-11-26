import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Logo.module.css";

type LogoProps = {
  variant: "header" | "footer";
  onClick?: () => void;
  onMouseEnter?: () => void;
};

/**
 * Site logo. Renders the text wordmark until `site.logo.image` is set,
 * then renders that SVG/image instead.
 */
export function Logo({ variant, onClick, onMouseEnter }: LogoProps) {
  const { image, header, footer } = site.logo;
  const className = variant === "header" ? styles.header : styles.footer;

  return (
    <Link href="/" className={className} onClick={onClick} onMouseEnter={onMouseEnter}>
      {image ? (
        <Image src={image.src} width={image.width} height={image.height} alt={site.shortName} className={styles.image} />
      ) : variant === "header" ? (
        <>
          {header.text}
          <span className={styles.accent}>{header.accent}</span>
        </>
      ) : (
        <>
          {footer.before}
          <span className={styles.accent}>{footer.accent}</span>
          {footer.after}
        </>
      )}
    </Link>
  );
}
