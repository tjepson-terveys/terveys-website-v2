import type { ContentImage } from "./types";

/*
 * About Us — copy taken from the current terveystech.com/about-us page.
 * Edits to the original wording are marked "Copy edit".
 */

export const aboutPage = {
  path: "/about",
  metaTitle: "About Us",
  metaDescription:
    "Our vision is to be the most trusted partner for organizations in their digital transformation and engineering journey.",
};

export const aboutHero = {
  eyebrow: "Terveys Technology Solutions",
  title: "About Us",
  lead: "Our vision is to be the most trusted partner for organizations in their digital transformation and engineering journey.",
  image: { src: "/images/about/hero.jpg", alt: "" } satisfies ContentImage,
};

export type AboutIcon = "eye" | "target" | "people" | "shield" | "handshake";

export const visionMission: Array<{ icon: AboutIcon; title: string; text: string }> = [
  {
    icon: "eye",
    title: "Our Vision",
    text: "To be the trusted partner for organizations in their digital transformation and engineering journey. We embrace diversity and inclusivity, driving innovation, collaboration, and sustainable growth to create lasting value for businesses and society.",
  },
  {
    icon: "target",
    title: "Our Mission",
    text: "Our mission is to build a strong and diverse team that delivers engineering services across emerging technologies, develops advanced AI-driven solutions, and fosters a people-centric culture to empower clients with innovation, reliability, and sustainable value.",
  },
];

export const difference = {
  eyebrow: "Our Approach",
  heading: "What Makes Us Different",
  pillars: ["Co-Creating Value.", "Designing for Impact.", "Engineering for the Future"],
  body: "At Terveys, we go beyond traditional IT consulting – we co-create value propositions with our clients to drive long-term impact through scalable, maintainable, and cost-effective solutions. We believe the best solutions are built collaboratively, not imposed. By aligning business goals with smart technology design, we deliver outcomes that are both meaningful and measurable.",
};

export const aboutValues: {
  eyebrow: string;
  heading: string;
  prevLabel: string;
  nextLabel: string;
  goToLabel: string;
  items: Array<{ icon: AboutIcon; tag: string; title: string; text: string; image: ContentImage }>;
} = {
  eyebrow: "Our Values",
  heading: "What drives our culture and decisions",
  prevLabel: "Previous value",
  nextLabel: "Next value",
  goToLabel: "Show value",
  items: [
    {
      icon: "people",
      tag: "Value 01",
      title: "People-Centric Approach",
      text: "Our clients — and their customers — are at the heart of everything we do. We focus on long-term relationships and measurable value, going beyond short-term gains to drive growth and trust.",
      image: { src: "/images/life/team-photo.jpg", alt: "Large group of colleagues posing together in the office" },
    },
    {
      icon: "shield",
      tag: "Value 02",
      title: "Accountability that Builds Trust",
      text: "We take ownership of our actions and deliver with consistency. Through transparency and responsibility, we earn the trust and confidence of our clients, partners, and people.",
      image: { src: "/images/life/team-office.jpg", alt: "Smiling team members together in the office" },
    },
    {
      icon: "handshake",
      tag: "Value 03",
      title: "Strength in Collaboration",
      text: "Collaboration fuels our progress. By combining diverse perspectives and skills, we unlock creativity, solve complex challenges, and achieve outcomes greater than the sum of their parts.",
      image: { src: "/images/life/office-celebration.jpg", alt: "Team gathered in the office with orange, white and green balloons" },
    },
  ],
};

export type LeaderGroup = "executive" | "regional";
export type Leader = { name: string; role: string; photo: string; linkedin: string; group: LeaderGroup };

export const leadership: {
  eyebrow: string;
  heading: string;
  groups: Record<LeaderGroup, string>;
  leaders: Leader[];
} = {
  eyebrow: "Leadership",
  heading: "Our Leadership",
  groups: { executive: "Executive Team", regional: "Regional Leadership & Advisory" },
  leaders: [
    { name: "Tony Jepson", role: "Chief Executive Officer", photo: "/images/about/leaders/tony.jpg", linkedin: "https://www.linkedin.com/in/tonyjepson1984/", group: "executive" },
    { name: "Remyamol EM", role: "Chief Operating Officer", photo: "/images/about/leaders/remya.jpg", linkedin: "https://www.linkedin.com/in/remya-tony-72b59518a/", group: "executive" },
    { name: "Nikhil Narikkodan", role: "Chief Growth Officer", photo: "/images/about/leaders/nikhil.jpg", linkedin: "https://www.linkedin.com/in/nikhil-narikkodan-0b352141/", group: "executive" },
    { name: "Toshiro Iwasaki", role: "Director – Japan", photo: "/images/about/leaders/toshiro.jpg", linkedin: "https://www.linkedin.com/in/toshiro-iwasaki-87344711/", group: "regional" },
    { name: "Anja Fischer", role: "Director – Europe", photo: "/images/about/leaders/anja.jpg", linkedin: "https://www.linkedin.com/in/anja-fischer-55b88a128/", group: "regional" },
    { name: "Dr. Tina Manoharan", role: "Strategic Advisor – AI & Innovation", photo: "/images/about/leaders/tina.jpg", linkedin: "https://www.linkedin.com/in/dr-tina-manoharan/", group: "regional" },
  ],
};

export type ClientLogo = { name: string; src: string; width: number; height: number };

export const clients: { eyebrow: string; heading: string; logos: ClientLogo[] } = {
  eyebrow: "Our Clients",
  // Copy edit: original reads "Our expertise are built on global engagements with engineering pioneer's".
  heading: "Our expertise is built on global engagements with engineering pioneers",
  logos: [
    { name: "Canon Medical", src: "/images/clients/canon-medical.png", width: 475, height: 179 },
    { name: "Siemens", src: "/images/clients/siemens.png", width: 1024, height: 341 },
    { name: "American College of Radiology", src: "/images/clients/american-college-of-radiology.png", width: 1024, height: 261 },
    { name: "Asahi Intecc", src: "/images/clients/asahi-intecc.png", width: 624, height: 72 },
    { name: "Swissray", src: "/images/clients/swissray.png", width: 350, height: 140 },
    { name: "Unilode", src: "/images/clients/unilode.png", width: 820, height: 193 },
  ],
};

export const certifications: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: Array<{ name: string; badge: ContentImage; text: string }>;
} = {
  eyebrow: "Quality & Compliance",
  heading: "Our Certifications & Achievements",
  intro:
    "At Terveys, we are committed to delivering excellence with the highest standards of quality, security, and compliance. Our global clients trust us not only for innovation but also for our adherence to internationally recognized benchmarks.",
  items: [
    {
      name: "ISO 13485:2016",
      badge: { src: "/images/badges/iso-13485.png", alt: "ISO 13485:2016 certified badge" },
      text: "Certified for Medical Device Quality Management, demonstrating our capability to deliver safe, reliable, and compliant healthcare technology solutions",
    },
    {
      name: "ISO/IEC 27001:2022",
      badge: { src: "/images/badges/iso-27001.png", alt: "ISO 27001 certified badge" },
      text: "Certified for Information Security Management, reflecting our strong commitment to protecting sensitive information and maintaining data security across all projects.",
    },
    {
      name: "ISO 9001:2015",
      badge: { src: "/images/badges/iso-9001.png", alt: "ISO 9001 certified badge" },
      text: "Certified for Quality Management Systems, demonstrating our commitment to delivering consistent, high-quality services while continually improving our processes and customer satisfaction.",
    },
  ],
};

export const aboutNotice = {
  title: "Important notice",
  text: "Terveys and its representatives will never assign tasks or make hires without a preliminary face-to-face or video-call interview. Please remember that you don’t share personal information during unsolicited phone calls and text communications. If you have any additional questions, don’t hesitate to get in touch with us via e-mail: info@terveystech.com",
};

