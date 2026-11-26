import type { Metadata } from "next";
import { ListingHero } from "@/components/article/ListingHero";
import { NewsIndex } from "@/components/news/NewsIndex";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { Reveal } from "@/components/ui/Reveal";
import { newsIndex, newsIndexPath, newsItems } from "@/content/news";

export const metadata: Metadata = {
  title: { absolute: newsIndex.seoTitle },
  description: newsIndex.metaDescription,
  alternates: { canonical: newsIndexPath },
  openGraph: { title: newsIndex.seoTitle, description: newsIndex.metaDescription, url: newsIndexPath },
};

export default function NewsIndexPage() {
  // Listing fields only — keep article bodies and galleries out of the client bundle.
  const cards = newsItems.map(({ slug, title, kind, description, publishedAt, image }) => ({ slug, title, kind, description, publishedAt, image }));
  const events = newsItems.filter((n) => n.kind === "Event").length;

  return (
    <>
      {/* Same hero as the other Insights pages (Case Studies, Blogs) */}
      <ListingHero
        id="news-title"
        eyebrow={newsIndex.eyebrow}
        title={newsIndex.title}
        lead={newsIndex.lead}
        stats={[
          { label: newsIndex.stats.stories, value: newsItems.length },
          { label: newsIndex.stats.events, value: events },
        ]}
      />
      <NewsIndex items={cards} />
      <ConsultationCta />
      <Reveal />
    </>
  );
}
