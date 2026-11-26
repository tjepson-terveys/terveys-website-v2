import type { ContentImage, LinkItem } from "./types";

/*
 * Careers page copy, from career-page-v2.html (hero section removed by request).
 *
 * TODO — REVIEW BEFORE LAUNCH:
 * - Several passages describe "health plans" and "Risk Adjustment" work, which doesn't match the
 *   medtech / medical-imaging positioning on the rest of the site.
 * - Some headings and paragraphs closely resemble other companies' careers pages. Confirm the
 *   copy is original before publishing.
 * - All numbers (500+, 24/7) and every named employee quote are unverified placeholders.
 */

export const careersPage = {
  path: "/careers",
  metaTitle: "Careers",
  metaDescription:
    "Join a team of inventors, strategists and creative thinkers. Explore careers at Terveystech across our India, Japan and USA offices.",
};

/** Section anchors on the careers page (used by the footer and buttons). */
export const careersAnchors = { openings: "current-openings", life: "life-at-terveys" } as const;

/** Where every "open positions / apply" button points. */
export const openPositionsLink: LinkItem = { label: "Job Openings", href: `/careers#${careersAnchors.openings}` };

export const overview = {
  eyebrow: "Overview",
  heading: "Where ambition, ingenuity and teamwork create boundless impact",
  body: "We're inventors and strategists. Practical problem solvers and creative thinkers—and we're always looking for fellow visionaries who aren't afraid to take risks. We're teammates who celebrate a diverse and inclusive workplace. Who listen to one another, and view learning as a life-long journey.",
  highlight:
    "As we work with world-class clients, we ground our decisions in humility, humanity and integrity. And transform customer experiences and business practices with a human-centered approach and the power of technology. Every day, we come together to improve the way people work, live and do business all over the world.",
  cta: { label: "Interested? Let's get to know each other", href: "/contact" } satisfies LinkItem,
  // TODO: Unsplash placeholder — replace with a photo of the Terveystech team.
  image: { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80", alt: "Team collaborating around a laptop" } satisfies ContentImage,
};

export type ValueIcon = "scale" | "people" | "arrowsSwap" | "star";

export const values: {
  eyebrow: string;
  heading: string;
  cards: Array<{ title: string; text: string; icon: ValueIcon; tone: "cream" | "white" | "mint" }>;
  // TODO: Unsplash placeholders — replace with Terveystech office/team photos.
  photos: { wide: ContentImage; left: ContentImage; right: ContentImage };
} = {
  eyebrow: "Our Values",
  heading: "The tenets that shape our culture",
  cards: [
    {
      title: "Integrity",
      text: "Integrity is our currency to build relationships. It demonstrates that we are here to do the right thing, no matter who is watching",
      icon: "scale",
      tone: "cream",
    },
    {
      title: "People-centricity",
      text: "Everything we do reflects our deep bonds with our associates, peers, and customers. These aren't mere transactions, but transformational ties",
      icon: "people",
      tone: "white",
    },
    {
      title: "Simplicity",
      text: "Simplifying complexity underlines everything we do - this approach is what makes us unique",
      icon: "arrowsSwap",
      tone: "mint",
    },
    {
      title: "Leadership",
      text: "Taking ownership is about taking initiative, being in-charge and driving things to completion",
      icon: "star",
      tone: "cream",
    },
  ],
  photos: {
    wide: { src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80", alt: "" },
    left: { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&q=80", alt: "" },
    right: { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=700&q=80", alt: "" },
  },
};

export type BenefitIcon = "heartPlus" | "clock" | "growth" | "inclusive" | "mentor";

export const whyChoose = {
  eyebrow: "Why Choose Us",
  heading: "What awaits you at Terveystech",
  sub: "We pride ourselves for our inclusive culture where we celebrate all member's individual differences and accomplishments. Your career path is laid out with immense opportunities to grow.",
  // TODO: confirm benefits are accurate for every office (India, Japan, USA).
  cards: [
    {
      icon: "heartPlus",
      title: "Health Benefits",
      text: "Comprehensive medical, dental, vision, and wellness programs to keep you and your family healthy and supported.",
    },
    {
      icon: "clock",
      title: "Work-Life Balance",
      text: "Flexible hybrid and remote options, generous PTO, and a culture that genuinely respects your time outside of work.",
    },
    {
      icon: "growth",
      title: "Boundless Growth",
      text: "Clear career progression tracks, certification support, mentorship programs, and continuous learning resources.",
    },
    {
      icon: "inclusive",
      title: "Inclusive Culture",
      text: "A workplace where every background, perspective, and accomplishment is celebrated. Everyone belongs here.",
    },
    {
      icon: "mentor",
      title: "Expert Mentorship",
      text: "Seasoned professionals who invest in your journey — not just your output. Real guidance from people who care.",
    },
  ] satisfies Array<{ icon: BenefitIcon; title: string; text: string }>,
  ctaCard: {
    title: "Ready to join us?",
    text: "Explore open positions across our USA, India, and Japan offices. Your next chapter starts here.",
    button: "Apply Now",
  },
};

export const grow = {
  heading: "Grow without limits",
  sub: "For us, it's never just about the work. Our people thrive when they discover what energizes them. That's why we offer meaningful ways for you to develop your skills while developing yourself, so you can run with big ideas. Have a voice. And make a real difference.",
  learnMore: "Learn more",
  prevLabel: "Previous programme",
  nextLabel: "Next programme",
  goToLabel: "Show programme",
  // TODO: confirm these programmes exist (e.g. "Garage Ventures") before launch; images are Unsplash placeholders.
  slides: [
    {
      tag: "Garage Ventures",
      title: "Fuel for the brightest ideas",
      body: "Our employees continually expand their abilities and outdo their own best thinking—leading to products and tools that will significantly improve the world. We foster entrepreneurship through the Terveystech Garage Ventures program, a unique funding model designed to help our team members bring their most innovative ideas to market.",
      href: `/careers#${careersAnchors.life}`,
      image: { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80", alt: "" },
    },
    {
      tag: "Learning & Development",
      title: "Master your craft, then go further",
      body: "From certification sponsorships to dedicated learning time and internal academies, we invest deeply in your skills. Whether you want to specialise deeply or broaden your expertise across health plan operations, technology, or analytics — the path is yours to shape.",
      href: `/careers#${careersAnchors.life}`,
      image: { src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80", alt: "" },
    },
    {
      tag: "Career Mobility",
      title: "Move up, across, or into something new",
      body: "At Terveystech, career progression isn't a ladder — it's a lattice. Internal mobility is actively encouraged. Our people regularly move between teams, business units, and even geographies, building breadth and depth that makes them truly exceptional professionals.",
      href: `/careers#${careersAnchors.life}`,
      image: { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80", alt: "" },
    },
  ] satisfies Array<{ tag: string; title: string; body: string; href: string; image: ContentImage }>,
};

export const globalPresence = {
  eyebrow: "Global Presence",
  heading: "A team spanning three continents, one mission",
  mapLabel: "Map showing Terveystech offices in Austin (USA), Trivandrum (India) and Tokyo (Japan)",
  offices: [
    { id: "usa", country: "USA", city: "Austin, TX" },
    { id: "india", country: "India", city: "Trivandrum · HQ" },
    { id: "japan", country: "Japan", city: "Tokyo" },
  ] as const,
  // TODO: "500+" and "24/7" are unverified — confirm or remove before launch.
  stats: [
    { value: "3", label: "Countries of operation" },
    { value: "500+", label: "Professionals worldwide" },
    { value: "24/7", label: "Global delivery capability" },
  ],
};

export type Speaker = {
  name: string;
  role: string;
  quote: string;
  /** TODO: add an approved portrait (path in /public) — initials are shown until then. */
  photo?: ContentImage;
};

export const teamSpeak: {
  eyebrow: string;
  heading: string;
  cta: string;
  showLabel: string;
  speakers: Speaker[];
} = {
  eyebrow: "Team Speak",
  heading: "Voices from our team",
  cta: "Check Out Our Open Positions",
  showLabel: "Show quote from",
  /*
   * TODO: TEMPLATE TEXT — these five named quotes are placeholders from the design.
   * Replace with real, approved quotes from current employees (with their consent) before launch.
   */
  speakers: [
    {
      name: "Kristi Reyes",
      role: "Director, Risk Adjustment Coding Operations",
      quote:
        "Working at Terveystech has been a fulfilling journey marked by abundant promotional prospects, invaluable mentorship, and a team of seasoned, collaborative Risk Adjustment professionals. Surrounded by dedicated teammates who exude passion for their work, I've found a supportive environment that fosters growth, learning, and a shared love and appreciation for what we do for our clients and the members they serve.",
    },
    {
      name: "Samuel Mitchell",
      role: "Senior Software Engineer, Platform",
      quote:
        "From my very first week, I felt genuinely welcomed and valued here. The mentorship is real — senior leaders invest in your growth, not just your deliverables. I've grown more professionally in two years at Terveystech than anywhere else in my career.",
    },
    {
      name: "James Patel",
      role: "Product Manager, Health Plan Solutions",
      quote:
        "The culture here is unlike anywhere I've worked. Everyone genuinely supports each other, and leadership truly listens. You're never just a number — you're a contributor with a real voice in how we shape the future of healthcare technology.",
    },
    {
      name: "Ananya Prasad",
      role: "Data Scientist, Risk Analytics",
      quote:
        "What makes Terveystech special is the sense of purpose. Every piece of work we do ultimately helps health plan members get better care. Knowing that the work matters — that's what keeps me energized and motivated every single day.",
    },
    {
      name: "Marcus Rivera",
      role: "Client Success Manager",
      quote:
        "The growth opportunities here are unmatched. In just eighteen months I've taken on two promotions and worked directly with some of the largest health plans in the country. The leadership here genuinely wants to see you succeed and they make it happen.",
    },
  ],
};

export const joinCta = {
  eyebrow: "Join Us",
  heading: "Ready to make your mark?",
  sub: "Explore open roles across our USA, India, and Japan offices. Whether you're an experienced professional or just starting out, there's a place for you here.",
  button: "View Open Positions",
};

/* ── Life at Terveys (photo gallery) — copy from terveystech.com/life-at-terveys ── */
export type LifePhoto = { src: string; alt: string; caption: string };

export const lifeAtTerveys: {
  eyebrow: string;
  heading: string;
  sub: string;
  regionLabel: string;
  prevLabel: string;
  nextLabel: string;
  photos: LifePhoto[];
  seeMore: { label: string; href: string; image: string };
} = {
  eyebrow: "Life at Terveys",
  heading: "This Is the Place to Be!",
  sub: "Work or fun, you'll always find excitement at Terveys. Step in and live the Terveys way.",
  regionLabel: "Life at Terveys photo gallery",
  prevLabel: "Scroll photos left",
  nextLabel: "Scroll photos right",
  // Photos from the current terveystech.com Life at Terveys page. TODO: confirm captions; add more photos here.
  photos: [
    { src: "/images/life/stage-dance.jpg", alt: "Team members dancing on stage under coloured lights", caption: "On stage" },
    { src: "/images/life/christmas-frame.jpg", alt: "Colleagues in Santa hats posing in a Merry Christmas photo frame", caption: "Christmas" },
    { src: "/images/life/team-office.jpg", alt: "Smiling team members together in the office", caption: "Team moments" },
    { src: "/images/life/halloween.jpg", alt: "Team group photo in Halloween costumes, in black and white", caption: "Halloween" },
    { src: "/images/life/on-stage-music.jpg", alt: "Two colleagues performing a song with a guitar on stage", caption: "Music on stage" },
    { src: "/images/life/christmas-santa.jpg", alt: "Santa Claus celebrating with colleagues in the office", caption: "Christmas" },
    { src: "/images/life/office-celebration.jpg", alt: "Team gathered in the office with orange, white and green balloons", caption: "Office celebration" },
    { src: "/images/life/tokyo-office.jpg", alt: "Meeting in the Terveys Technology Solutions Tokyo office", caption: "Tokyo office" },
    { src: "/images/life/team-photo.jpg", alt: "Large group of colleagues posing together in the office", caption: "Team day" },
  ],
  seeMore: { label: "See more events", href: "/news-events/", image: "/images/life/marathon.jpg" },
};

/* ── Current openings — from terveystech.com/job-openings ── */
export type JobOpening = {
  title: string;
  location: string;
  type: string;
  experience: string;
  summary: string;
  skills: string[];
};

export const currentOpenings: {
  eyebrow: string;
  heading: string;
  sub: string;
  applyLabel: string;
  applyEmail: string;
  empty: string;
  notice: { title: string; text: string };
  jobs: JobOpening[];
} = {
  eyebrow: "Careers",
  heading: "Current Openings",
  sub: "Become part of a high-performing & collaborative team",
  applyLabel: "Apply now",
  // TODO: replace with a careers inbox or the ATS application link. The current site uses an on-page form with CV upload.
  applyEmail: "info@terveystech.com",
  empty: "There are no open positions right now. Check back soon.",
  notice: {
    title: "Important notice",
    text: "Terveys and its representatives never assign tasks or make job offers without first holding a face-to-face or video interview. Do not share personal information in response to unsolicited calls or messages. If in doubt, email info@terveystech.com.",
  },
  // TODO: confirm these roles are still open before launch; keep this list in sync with hiring.
  jobs: [
    {
      title: "Python Developer (Senior)",
      location: "Trivandrum / Bangalore · Hybrid",
      type: "Full Time",
      experience: "10+ years",
      summary:
        "Collaborate with the Development team, Business Analysts and Product owner to determine application requirements.",
      skills: ["Python", "MongoDB", "NumPy & pandas", "Docker / Linux"],
    },
    {
      title: "Senior DevOps Engineer",
      location: "Bangalore · Hybrid",
      type: "Full Time",
      experience: "5+ years",
      summary:
        "We are seeking a highly skilled and experienced DevOps Developer to join our technology operations team.",
      skills: ["AWS", "Terraform", "GitHub Actions", "CI/CD"],
    },
    {
      title: "DevOps Engineer – Azure",
      location: "Bangalore · Hybrid",
      type: "Full Time",
      experience: "5+ years",
      summary:
        "As a DevOps Engineer specialising in Azure, you will play a crucial role in bridging development and operations.",
      skills: ["Azure", "CI/CD", "Infrastructure as code"],
    },
  ],
};
