import type { ContentImage, LinkItem, Rich } from "./types";

export const segmentIds = ["medtech", "imaging", "providers", "digital"] as const;
export type SegmentId = (typeof segmentIds)[number];

export const isSegmentId = (value: string | null | undefined): value is SegmentId =>
  !!value && (segmentIds as readonly string[]).includes(value);

/** Section anchor for the healthcare block. */
export const industriesId = "industries";

/**
 * Deep link used by menu/footer links: scrolls to #industries and selects the tab.
 * Also supported: /#imaging and /#ind-imaging.
 */
export const segmentDeepLink = (id: SegmentId) => `/?segment=${id}#${industriesId}`;
export const segmentPageHref = (id: SegmentId) => `/healthcare/${id}`;

export const healthcareIntro: {
  eyebrow: string;
  heading: Rich;
  body: string;
  certifiedLabel: string;
  /** Only these three certifications are real — do not add others. */
  certified: string[];
  standardsLabel: string;
  standards: string[];
} = {
  eyebrow: "Healthcare & MedTech",
  heading: [
    { text: "Built for healthcare." },
    { text: "Engineered for compliance.", br: true, accent: true },
  ],
  body: "Healthcare is all we do. From medical devices and imaging to hospital systems and digital health products, we build software that clinicians trust and regulators accept.",
  certifiedLabel: "Certified",
  certified: ["ISO 13485", "ISO 27001", "ISO 9001"],
  standardsLabel: "Standards we work with",
  standards: ["DICOM", "HL7", "FHIR", "HIPAA", "GDPR"],
};

export type Segment = {
  id: SegmentId;
  /** Tab label, menu label and stub-page title. */
  label: string;
  eyebrow: string;
  title: string;
  description: string;
  deliverables: string[];
  cta: LinkItem;
  image: ContentImage;
  kicker: string;
  caption: string;
};

export const segmentsTablistLabel = "Who we serve";

// TODO: all panel images are Unsplash stock placeholders — replace with owned imagery.
export const segments: Segment[] = [
  {
    id: "medtech",
    label: "Medical Device & MedTech",
    eyebrow: "Medical Device & MedTech",
    title: "Software for devices that meet clinical standards.",
    description:
      "We engineer software for medical devices — from embedded and touchscreen interfaces to connected-device platforms and companion apps — within an ISO 13485 certified quality management system.",
    deliverables: [
      "Medical device software",
      "Embedded & HMI interfaces",
      "Connected devices & IoMT",
      "Companion & clinician apps",
      "Verification & validation",
      "Regulatory documentation support",
    ],
    cta: { label: "Explore MedTech Engineering", href: segmentPageHref("medtech") },
    image: { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80", alt: "" },
    kicker: "Quality first",
    caption: "Engineering delivered under our ISO 13485 certified quality management system.",
  },
  {
    id: "imaging",
    label: "Medical Imaging & Digital Pathology",
    eyebrow: "Medical Imaging & Digital Pathology",
    title: "Imaging software built for real clinical workflows.",
    description:
      "Next-generation DICOM viewers, PACS integration, 2D/3D rendering and AI-assisted analysis — plus digital pathology and telepathology platforms that move whole-slide images from scanner to diagnosis.",
    deliverables: [
      "DICOM viewers & PACS integration",
      "2D / 3D rendering",
      "ROI cropping & segmentation",
      "Digital pathology & telepathology",
      "AI-assisted image analysis",
      "Cloud imaging platforms",
    ],
    cta: { label: "Explore Imaging Solutions", href: segmentPageHref("imaging") },
    image: { src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80", alt: "" },
    kicker: "Featured work",
    caption: "Focus where it matters: ROI cropping in 3D medical imaging.",
  },
  {
    id: "providers",
    label: "Hospitals & Care Providers",
    eyebrow: "Hospitals & Care Providers",
    title: "Connected systems for better care.",
    description:
      "We implement and integrate the clinical systems hospitals depend on — EHR/EMR, interoperability, telemedicine and AI-powered clinical decision support — fitted to existing workflows, not the other way round.",
    deliverables: [
      "EHR / EMR implementation",
      "HL7 & FHIR interoperability",
      "Telemedicine & virtual care",
      "Clinical decision support",
      "Clinical data platforms",
      "Secure patient portals",
    ],
    cta: { label: "Explore Provider Solutions", href: segmentPageHref("providers") },
    image: { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80", alt: "" },
    kicker: "Interoperability",
    caption: "Systems that talk to each other through HL7 and FHIR standards.",
  },
  {
    id: "digital",
    label: "Digital Health & HealthTech",
    eyebrow: "Digital Health & HealthTech",
    title: "From idea to compliant, scalable product.",
    description:
      "We partner with digital health companies to design, build and scale patient-facing and clinician-facing products — with privacy, security and compliance built in from the very first sprint.",
    deliverables: [
      "Patient & clinician apps",
      "Remote patient monitoring",
      "AI & GenAI health products",
      "Secure, compliant cloud",
      "Product design & UX",
      "Quality engineering & testing",
    ],
    cta: { label: "Explore Digital Health", href: segmentPageHref("digital") },
    image: { src: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80", alt: "" },
    kicker: "Built in from day one",
    caption: "Privacy and security designed for HIPAA and GDPR requirements.",
  },
];

export const getSegment = (id: string) => segments.find((s) => s.id === id);
