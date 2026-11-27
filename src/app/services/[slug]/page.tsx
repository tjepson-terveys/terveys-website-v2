import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { StubPage, stubMetadata } from "@/components/layout/StubPage";
import { ServiceHero } from "@/components/service/ServiceHero";
import {
  ServiceIndustries,
  ServiceOverview,
  ServicePerspective,
  ServicePractices,
  ServiceRelated,
  ServiceStack,
} from "@/components/service/ServiceSections";
import { Reveal } from "@/components/ui/Reveal";
import { getService, serviceHref, services } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = serviceHref(service.slug);
  if (!service.detail) return stubMetadata(service.name, path);
  const { metaTitle: title, metaDescription: description } = service.detail;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}

async function ServicePageContent({ params }: { params: PageProps<"/services/[slug]">["params"] }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const detail = service.detail;
  if (!detail) return <StubPage eyebrow="Services" title={service.name} />;

  return (
    <>
      <ServiceHero service={service} hero={detail.hero} ticker={detail.stack.groups.flatMap((g) => g.items)} />
      <ServiceOverview overview={detail.overview} />
      <ServicePractices practices={detail.practices} />
      <ServiceIndustries industries={detail.industries} />
      <ServiceStack stack={detail.stack} />
      <ServicePerspective perspective={detail.perspective} />
      <ServiceRelated related={detail.related} />
      <ConsultationCta content={detail.cta} />
      <Reveal />
    </>
  );
}

export default function ServicePage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={null}>
      <ServicePageContent params={params} />
    </Suspense>
  );
}
