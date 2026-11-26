import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { CaseStudyArticle, CaseStudyHeaderFallback } from "@/components/caseStudy/CaseStudyArticle";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudiesIndexPath, caseStudiesWithDetail, getCaseStudy } from "@/content/caseStudies";
import { site } from "@/content/site";

type Params = PageProps<"/case-studies/[slug]">["params"];

export function generateStaticParams() {
  return caseStudiesWithDetail().map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs?.detail) return {};
  const path = `${caseStudiesIndexPath}${cs.slug}/`;
  const description = cs.detail.lede ?? cs.description;
  return {
    // Same <title> as the original page, so search listings don't change.
    title: { absolute: cs.detail.seoTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: cs.detail.seoTitle,
      description,
      url: path,
      publishedTime: cs.publishedAt,
      images: [{ url: cs.detail.cover.src, alt: cs.detail.cover.alt }],
    },
  };
}

async function CaseStudyContent({ params }: { params: Params }) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs?.detail) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: cs.title,
    description: cs.detail.lede ?? cs.description,
    image: new URL(cs.detail.cover.src, site.url).toString(),
    datePublished: cs.publishedAt,
    about: cs.category,
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}${caseStudiesIndexPath}${cs.slug}/`,
  };

  return (
    <>
      <CaseStudyArticle caseStudy={cs} />
      <Reveal />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
    </>
  );
}

export default function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  return (
    <Suspense fallback={<CaseStudyHeaderFallback />}>
      <CaseStudyContent params={params} />
    </Suspense>
  );
}
