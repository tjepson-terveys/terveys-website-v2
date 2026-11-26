import type { ContentImage, Rich } from "./types";

export type PillarIcon = "chip" | "shield";

export const intro: {
  eyebrow: string;
  heading: Rich;
  body: string;
  pillars: Array<{ icon: PillarIcon; title: string; text: string }>;
  image: ContentImage;
} = {
  eyebrow: "Who We Are",
  heading: [{ text: "The full technology stack," }, { text: "built for production", br: true }],
  body: "Terveystech is an AI-first technology partner — delivering Generative AI, enterprise platforms, cloud infrastructure, digital products, and quality engineering under one roof. Every engagement powered by AI from day one.",
  pillars: [
    {
      icon: "chip",
      title: "Production-First Engineering",
      text: "Every system we build is designed for scale, drift monitoring, and continuous governance — not just pilot environments.",
    },
    {
      icon: "shield",
      title: "Explainability & Trust Built In",
      text: "Auditable, explainable, and governed AI — from architecture up, so you can deploy with confidence in regulated environments.",
    },
  ],
  // TODO: Unsplash placeholder image.
  image: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80", alt: "Operations centre" },
};
