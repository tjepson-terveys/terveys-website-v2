import Link from "next/link";
import type { ReactNode } from "react";
import type { ButtonVariant } from "@/content/types";

type ButtonProps = {
  href: string;
  variant: ButtonVariant;
  children: ReactNode;
  className?: string;
};

/** Pill link-button. Styles live in globals.css (.btn, .btn-*). */
export function Button({ href, variant, children, className }: ButtonProps) {
  return (
    <Link href={href} className={["btn", `btn-${variant}`, className].filter(Boolean).join(" ")}>
      {children}
    </Link>
  );
}
