import type { Rich } from "./types";

export type OfficeId = "india" | "japan" | "usa";

export type Office = {
  id: OfficeId;
  /** Label in the location card, e.g. "India — Headquarters". */
  country: string;
  /** Address lines (rendered with line breaks in the location card). */
  address: string[];
  phone: { display: string; tel: string };
  /** Option label in the "Nearest Office" select. */
  regionLabel: string;
  map: {
    city: string;
    title: string;
    /** Single-line address for the map card. */
    address: string;
  };
};

export const contactPage = {
  path: "/contact",
  metaTitle: "Contact Us",
  metaDescription:
    "Reach out to our global team for partnerships, support, or to explore how Terveystech can help your organisation.",

  header: {
    badge: "Get in Touch",
    title: "We'd Love to Hear From You",
    intro:
      "Reach out to our global team for partnerships, support, or to explore how Terveystech can help your organisation.",
  },

  connect: {
    label: "Connect With Us",
    email: "info@terveystech.com",
  },

  locations: {
    eyebrow: "Our Locations",
    heading: [{ text: "Global Presence," }, { text: "Local Expertise", br: true }] as Rich,
    sub: "With offices across three continents, we're always close to where you need us most.",
  },

  maps: {
    eyebrow: "Find Us",
    heading: "Our Offices Around the World",
    sub: "Three strategic locations to serve our global clients.",
  },
};

// TODO: confirm addresses and phone numbers. The design spelled the building "Thejaswni";
// "Thejaswini" is used here to match the registered address in site.ts.
export const offices: Office[] = [
  {
    id: "india",
    country: "India — Headquarters",
    address: ["Module No 410, Thejaswini Building,", "Technopark Trivandrum, Kerala, India — 695581"],
    phone: { display: "+91 790 704 0634", tel: "+917907040634" },
    regionLabel: "India — Trivandrum",
    map: {
      city: "Trivandrum, India",
      title: "India HQ",
      address: "Module No 410, Thejaswini Building, Technopark Trivandrum, Kerala — 695581",
    },
  },
  {
    id: "japan",
    country: "Japan — Tokyo",
    address: ["4/F East Tower, Otemachi First Square,", "1-5-1 Otemachi, Chiyoda-ku, Tokyo, 100-0004"],
    phone: { display: "090-7847-9743", tel: "+819078479743" },
    regionLabel: "Japan — Tokyo",
    map: {
      city: "Tokyo, Japan",
      title: "Japan Office",
      address: "4/F East Tower, Otemachi First Square, 1-5-1 Otemachi, Chiyoda-ku, Tokyo 100-0004",
    },
  },
  {
    id: "usa",
    country: "USA — Austin, TX",
    address: ["5900 Balcones Drive Ste 100,", "Austin, TX 78731, USA"],
    phone: { display: "(445) 285-2827", tel: "+14452852827" },
    regionLabel: "USA — Austin, TX",
    map: {
      city: "Austin, Texas, USA",
      title: "USA Office",
      address: "5900 Balcones Drive Ste 100, Austin, TX 78731, USA",
    },
  },
];

/** Order of the phone numbers in the "Connect With Us" bar (as in the design). */
export const connectPhoneOrder: OfficeId[] = ["india", "usa", "japan"];

export type ContactFieldName = "firstName" | "lastName" | "email" | "phone" | "company" | "region" | "subject" | "message";

export const contactForm = {
  eyebrow: "Send Us a Message",
  heading: "Start a Conversation",
  sub: "Fill in the form and our team will get back to you within one business day.",
  fields: {
    firstName: { label: "First Name", placeholder: "Jane", required: true },
    lastName: { label: "Last Name", placeholder: "Smith", required: true },
    email: { label: "Work Email", placeholder: "jane@company.com", required: true },
    phone: { label: "Phone Number", placeholder: "+1 (555) 000-0000", required: false },
    company: { label: "Company / Organisation", placeholder: "Acme Corp", required: false },
    region: { label: "Nearest Office", placeholder: "Select a region…", required: false },
    subject: { label: "Subject", placeholder: "How can we help you?", required: true },
    message: { label: "Message", placeholder: "Tell us more about your project or enquiry…", required: true },
  } satisfies Record<ContactFieldName, { label: string; placeholder: string; required: boolean }>,
  note: "We respect your privacy. Your information will never be shared with third parties.",
  submit: "Send Message",
  submitting: "Sending…",
  success: {
    title: "Message Sent!",
    text: "Thank you for reaching out. A member of our team will respond within one business day.",
  },
  errors: {
    required: "This field is required.",
    email: "Enter a valid email address.",
    tooLong: "This is too long.",
    summary: "Please fix the highlighted fields.",
    delivery: "Sorry, your message couldn't be sent. Please email us at info@terveystech.com.",
  },
};
