import { CaseStudies } from "@/components/home/CaseStudies";
import { ConsultationCta } from "@/components/home/ConsultationCta";
import { HealthcareIntro } from "@/components/home/HealthcareIntro";
import { HealthcareTabs } from "@/components/home/HealthcareTabs";
import { HeroSlider } from "@/components/home/HeroSlider";
import { Intro } from "@/components/home/Intro";
import { Testimonials } from "@/components/home/Testimonials";
import { WhatWeDo } from "@/components/home/WhatWeDo";
import { Reveal } from "@/components/ui/Reveal";
import { heroSlides } from "@/content/hero";
import { resolveHeroSlides } from "@/lib/heroMedia";

export default function Home() {
  return (
    <>
      <HeroSlider slides={resolveHeroSlides(heroSlides)} />
      <Intro />
      <WhatWeDo />
      <HealthcareIntro />
      <HealthcareTabs />
      <CaseStudies />
      <Testimonials />
      <ConsultationCta />
      <Reveal />
    </>
  );
}
