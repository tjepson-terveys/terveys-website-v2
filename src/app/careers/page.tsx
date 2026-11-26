import type { Metadata } from "next";
import { CurrentOpenings } from "@/components/careers/CurrentOpenings";
import { GlobalPresence } from "@/components/careers/GlobalPresence";
import { GrowCarousel } from "@/components/careers/GrowCarousel";
import { LifeGallery } from "@/components/careers/LifeGallery";
import { JoinCta, Overview, Values, WhyChoose } from "@/components/careers/CareersSections";
import { TeamSpeak } from "@/components/careers/TeamSpeak";
import { Reveal } from "@/components/ui/Reveal";
import { careersPage } from "@/content/careers";

export const metadata: Metadata = {
  title: careersPage.metaTitle,
  description: careersPage.metaDescription,
  alternates: { canonical: careersPage.path },
  openGraph: { title: careersPage.metaTitle, description: careersPage.metaDescription, url: careersPage.path },
};

export default function CareersPage() {
  return (
    // data-solid-header: this page starts on white, so the site header renders solid from the top.
    <div data-solid-header="">
      <Overview />
      <Values />
      <WhyChoose />
      <GrowCarousel />
      <GlobalPresence />
      <TeamSpeak />
      <LifeGallery />
      <CurrentOpenings />
      <JoinCta />
      <Reveal />
    </div>
  );
}
