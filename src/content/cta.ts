import type { CtaLink, Rich } from "./types";

export const consultationCta: {
  id: string;
  heading: Rich;
  body: Rich;
  buttons: CtaLink[];
  trust: string;
  /** TODO: Unsplash placeholder background photo. */
  backgroundImage: string;
} = {
  id: "contact",
  heading: [{ text: "Building something" }, { text: "for healthcare?", br: true }],
  body: [
    {
      text: "Talk to our healthcare engineering team about your device, imaging or digital health product — ",
    },
    { text: "ISO 13485 certified", strong: true },
    { text: " and ready to start." },
  ],
  buttons: [
    { label: "Book a Consultation →", href: "/contact", variant: "white" },
    { label: "Talk to Sales", href: "/contact", variant: "ghost" },
  ],
  trust: "No commitment · 30-min session",
  backgroundImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80",
};
