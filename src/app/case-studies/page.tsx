import type { Metadata } from "next";
import { ListingHero } from "@/components/article/ListingHero";
import { CaseStudyIndex } from "@/components/caseStudy/CaseStudyIndex";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { Reveal } from "@/components/ui/Reveal";
import { caseStudies, caseStudiesIndex, caseStudiesIndexPath, caseStudyCategories } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: { absolute: caseStudiesIndex.seoTitle },
  description: caseStudiesIndex.metaDescription,
  alternates: { canonical: caseStudiesIndexPath },
  openGraph: { title: caseStudiesIndex.seoTitle, description: caseStudiesIndex.metaDescription, url: caseStudiesIndexPath },
};

export default function CaseStudiesIndexPage() {
  const published = caseStudies.filter((cs) => cs.detail);
  const categories = caseStudyCategories();

  return (
    <>
      <ListingHero
        id="cs-index-title"
        eyebrow={caseStudiesIndex.eyebrow}
        title={caseStudiesIndex.title}
        lead={caseStudiesIndex.lead}
        stats={[
          { label: caseStudiesIndex.stats.caseStudies, value: published.length },
          { label: caseStudiesIndex.stats.industries, value: categories.length },
        ]}
      />
      <CaseStudyIndex caseStudies={published} categories={categories} />
      <ConsultationCta />
      <Reveal />
    </>
  );
}
