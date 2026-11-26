import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { StubPage, stubMetadata } from "@/components/layout/StubPage";
import { getService, serviceHref, services } from "@/content/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? stubMetadata(service.name, serviceHref(service.slug)) : {};
}

async function ServicePageContent({ params }: { params: PageProps<"/services/[slug]">["params"] }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <StubPage eyebrow="Services" title={service.name} />;
}

export default function ServicePage({ params }: PageProps<"/services/[slug]">) {
  return (
    <Suspense fallback={null}>
      <ServicePageContent params={params} />
    </Suspense>
  );
}
