import type { Metadata } from "next";
import {
  AboutHero,
  AboutNotice,
  AboutValues,
  Certifications,
  Clients,
  Difference,
  Leadership,
  VisionMission,
} from "@/components/about/AboutSections";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { Reveal } from "@/components/ui/Reveal";
import { aboutPage } from "@/content/about";

export const metadata: Metadata = {
  title: aboutPage.metaTitle,
  description: aboutPage.metaDescription,
  alternates: { canonical: aboutPage.path },
  openGraph: { title: aboutPage.metaTitle, description: aboutPage.metaDescription, url: aboutPage.path },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <VisionMission />
      <Difference />
      <AboutValues />
      <Leadership />
      <Clients />
      <Certifications />
      <AboutNotice />
      <ConsultationCta />
      <Reveal />
    </>
  );
}
