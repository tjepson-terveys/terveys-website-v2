import type { CtaLink, Rich } from "./types";

export type HeroMedia =
  | {
      type: "video";
      /** Path in /public, e.g. "/videos/hero.mp4". Falls back to the poster if the file is missing. */
      src: string;
      /** Image shown until the video loads (and if it is missing). */
      poster: string;
    }
  | { type: "image"; src: string; alt: string };

export type HeroSlide = {
  media: HeroMedia;
  tag: string;
  title: Rich;
  sub: string;
  ctas: CtaLink[];
};

export const hero = {
  label: "Highlights",
  /** Time each slide stays on screen (drives the progress bar). */
  slideMs: 6000,
  controls: {
    pause: "Pause slideshow",
    play: "Play slideshow",
    prev: "Previous slide",
    next: "Next slide",
    goTo: "Go to slide",
  },
};

export const heroSlides: HeroSlide[] = [
  {
    media: {
      type: "video",
      // TODO: supply the hero video — drop it at public/videos/hero.mp4 (muted, looping, ~10–20s, H.264).
      src: "/videos/hero.mp4",
      // TODO: Unsplash placeholder poster — replace with a frame from the real video.
      poster: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1800&q=80",
    },
    tag: "Generative AI · Agentic AI · Intelligent Automation",
    title: [{ text: "Turn Data Into Your" }, { text: "Competitive Advantage.", br: true, accent: true }],
    sub: "An AI-first technology partner delivering the complete AI and data stack, enterprise systems, cloud, digital products and quality engineering.",
    ctas: [
      { label: "Request a Demo →", href: "/#contact", variant: "primary" },
      { label: "Explore Services", href: "/#capabilities", variant: "outline" },
    ],
  },
  {
    // TODO: Unsplash placeholder image.
    media: { type: "image", src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1800&q=80", alt: "" },
    tag: "ROI Cropping in 3D Medical Imaging",
    title: [{ text: "Focus Where It Matters" }],
    sub: "Next-generation DICOM viewers and 2D/3D rendering built for real-world clinical environments.",
    ctas: [{ label: "Read More →", href: "/case-studies/roi-based-volume-crop-with-cornerstone3d/", variant: "primary" }],
  },
  {
    // TODO: Unsplash placeholder image.
    media: { type: "image", src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1800&q=80", alt: "" },
    tag: "Healthcare",
    title: [{ text: "Transforming Healthcare with " }, { text: "Cutting-Edge IT.", accent: true }],
    sub: "From DICOM imaging to EHR integration and AI-powered clinical decision support.",
    ctas: [{ label: "Explore Healthcare →", href: "/#industries", variant: "primary" }],
  },
  {
    // TODO: Unsplash placeholder image.
    media: { type: "image", src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&q=80", alt: "" },
    tag: "Expansion",
    title: [{ text: "Now Serving Japan" }],
    sub: "Bringing our healthcare and enterprise engineering to clients across Japan.",
    // TODO: "#" in the design — pointed at the Japanese site stub; confirm the destination.
    ctas: [{ label: "Read More →", href: "/ja", variant: "primary" }],
  },
];
