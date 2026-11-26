import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { StubPage, stubMetadata } from "@/components/layout/StubPage";
import { getSegment, healthcareIntro, segmentPageHref, segments } from "@/content/healthcare";

export function generateStaticParams() {
  return segments.map((s) => ({ segment: s.id }));
}

export async function generateMetadata({ params }: PageProps<"/healthcare/[segment]">): Promise<Metadata> {
  const { segment } = await params;
  const data = getSegment(segment);
  return data ? stubMetadata(data.label, segmentPageHref(data.id)) : {};
}

async function SegmentPageContent({ params }: { params: PageProps<"/healthcare/[segment]">["params"] }) {
  const { segment } = await params;
  const data = getSegment(segment);
  if (!data) notFound();
  return <StubPage eyebrow={healthcareIntro.eyebrow} title={data.label} />;
}

export default function SegmentPage({ params }: PageProps<"/healthcare/[segment]">) {
  return (
    <Suspense fallback={null}>
      <SegmentPageContent params={params} />
    </Suspense>
  );
}
