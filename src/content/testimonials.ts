import type { Rich } from "./types";

export type Testimonial = {
  quote: string;
  role: string;
  organisation: string;
};

export const testimonialsSection: {
  eyebrow: string;
  heading: Rich;
  prevLabel: string;
  nextLabel: string;
  showLabel: string;
} = {
  eyebrow: "Customer Stories",
  heading: [{ text: "Customer" }, { text: "trust.", br: true }],
  prevLabel: "Previous testimonial",
  nextLabel: "Next testimonial",
  showLabel: "Show testimonial",
};

/*
 * TODO: TEMPLATE TEXT — these three testimonials are placeholders from the design.
 * They MUST be replaced with real, approved customer quotes before launch.
 * Slide shades cycle through four teal tones (see Testimonials.module.css).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The team didn't just deliver software — they understood our clinical workflows from day one. The DICOM viewer they built has transformed how our radiologists work, cutting turnaround time significantly and improving diagnostic confidence across our network.",
    role: "Chief Medical Information Officer",
    organisation: "Regional Hospital Network, Finland",
  },
  {
    quote:
      "Implementing FHIR-compliant APIs across our legacy infrastructure felt impossible before we engaged Terveystech. They delivered a fully interoperable integration within six months — something our internal teams had been struggling with for over two years.",
    role: "VP of Digital Transformation",
    organisation: "Medical Device Manufacturer, Japan",
  },
  {
    quote:
      "Terveystech brought structure and pace to a project that had stalled under two previous vendors. Their quality engineering team caught issues we didn't even know existed. We launched on time, fully compliant, and with confidence in every release since.",
    role: "Director of Product Engineering",
    organisation: "Health Technology Scale-up, United Kingdom",
  },
];
