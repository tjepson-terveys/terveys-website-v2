"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { SegmentId } from "@/content/healthcare";
import { requestSegment } from "@/lib/segment";

type SegmentLinkProps = {
  href: string;
  segment?: SegmentId;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

/**
 * next/link that, when it carries a healthcare segment, also tells the healthcare tabs
 * to select it (the href scrolls to #industries and carries ?segment= for fresh loads).
 */
export function SegmentLink({ href, segment, className, children, onClick }: SegmentLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => {
        if (segment) requestSegment(segment);
        onClick?.();
      }}
    >
      {children}
    </Link>
  );
}
