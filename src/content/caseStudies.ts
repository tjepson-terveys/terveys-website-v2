import type { ArticleBlock, ContentImage, LinkItem, Rich } from "./types";
import advancingMedicalReportingWithConcordanceAnalysisPoc from "./case-studies/advancing-medical-reporting-with-concordance-analysis-poc";
import boostingSalesForAMedicalImagingModalityManufacturerWithLlmPoweredRag from "./case-studies/boosting-sales-for-a-medical-imaging-modality-manufacturer-with-llm-powered-rag";
import caseStudyAiInternalPolicyChatbotUsingLlmAndRag from "./case-studies/case-study-ai-internal-policy-chatbot-using-llm-and-rag";
import comprehensiveDataMigrationToADataLake from "./case-studies/comprehensive-data-migration-to-a-data-lake";
import customizedSeatReservationSystemForAUaeBasedRestaurant from "./case-studies/customized-seat-reservation-system-for-a-uae-based-restaurant";
import digitalTransformationOfAuditingProcessesForAUaeBasedTrainingAuditingFirm from "./case-studies/digital-transformation-of-auditing-processes-for-a-uae-based-training-auditing-firm";
import enhancingClinicalDataCollectionWithFhirQuestionnaires from "./case-studies/enhancing-clinical-data-collection-with-fhir-questionnaires";
import implementingFederatedAuthenticationForAnAirlineClient from "./case-studies/implementing-federated-authentication-for-an-airline-client";
import multiTenantSaasPlatformForAppointmentScheduling from "./case-studies/multi-tenant-saas-platform-for-appointment-scheduling";
import revolutionizingClinicalPracticeWithAiDrivenDecisionSupport from "./case-studies/revolutionizing-clinical-practice-with-ai-driven-decision-support";
import roiBasedVolumeCropWithCornerstone3d from "./case-studies/roi-based-volume-crop-with-cornerstone3d";
import simulatingHospitalWorkflowForComprehensiveMedicalTraining from "./case-studies/simulating-hospital-workflow-for-comprehensive-medical-training";
import simulatingHospitalWorkflowsForComprehensiveHealthcareTraining from "./case-studies/simulating-hospital-workflows-for-comprehensive-healthcare-training";
import streamliningRadiologyWorkflowsWithIntelligentReportingSystems from "./case-studies/streamlining-radiology-workflows-with-intelligent-reporting-systems";

/*
 * Case studies. Each one lives in its own file in ./case-studies/ (one file = one page).
 * The 14 pages were imported from the current terveystech.com/case-studies/ — their slugs MUST stay
 * unchanged so the existing URLs (and their search rankings) keep working.
 */

/* ─────────────────────────────────────────────
   Types
───────────────────────────────────────────── */

/** Body content for imported (article-style) case studies. */
export type ContentBlock = ArticleBlock;

/** Structured section (used by case studies built from the case-study design). */
export type CaseStudySection = {
  /** Anchor id, also used by the "On this page" list. */
  id: string;
  label: string;
  heading: string;
  paragraphs?: string[];
  /** Bulleted list. `label` renders bold before the text (used for outcomes). */
  bullets?: Array<{ label?: string; text: string }>;
  /** Sub-sections: rendered as numbered cards. */
  items?: Array<{ title: string; text: string }>;
};

export type CaseStudyDetail = {
  /** Exact <title> of the page (kept identical to the original site for SEO). */
  seoTitle: string;
  /** Summary under the title. */
  lede?: string;
  cover: ContentImage;
  meta?: {
    client: string;
    industry: string;
    region: string;
    solutionType: string;
    /** Short list for the header pills. */
    deliverables: string[];
    /** Full list for the sidebar. */
    deliverablesFull: string[];
  };
  results?: Array<{ value: string; label: string }>;
  /** Either structured sections… */
  sections?: CaseStudySection[];
  /** …or free-flowing body blocks (imported pages). */
  body?: ContentBlock[];
  quote?: { text: string; role: string; organisation: string };
  /** Page-specific call to action. Defaults to the site-wide consultation band. */
  cta?: { heading: string; text: string; primary: LinkItem; secondary: LinkItem };
};

export type CaseStudy = {
  /** URL slug — /case-studies/<slug>/. Never change it for a published page. */
  slug: string;
  /** Label shown on cards and the page tag. */
  category: string;
  /** Categories (from the original site) — used by the filter on the index. */
  categories: string[];
  title: string;
  /** Card summary and meta description. */
  description: string;
  /** ISO date (YYYY-MM-DD). */
  publishedAt: string;
  image: ContentImage;
  /** Shown in the home page "Case Studies" section. */
  featured?: boolean;
  detail?: CaseStudyDetail;
};

/* ─────────────────────────────────────────────
   Page copy
───────────────────────────────────────────── */

export const caseStudiesIndexPath = "/case-studies/";

export const caseStudiesSection: {
  id: string;
  eyebrow: string;
  heading: Rich;
  viewAll: LinkItem;
  readLabel: string;
} = {
  id: "case-studies",
  eyebrow: "Case Studies",
  heading: [{ text: "Results that speak" }, { text: "for themselves", br: true }],
  viewAll: { label: "View all case studies →", href: caseStudiesIndexPath },
  readLabel: "Read case study →",
};

export const caseStudiesIndex = {
  eyebrow: "Insights",
  title: "Case Studies",
  /** Kept identical to the original page title for SEO. */
  seoTitle: "Case Studies - Terveystech",
  lead: "Results that speak for themselves",
  metaDescription: "Case studies from Terveystech — healthcare, medical imaging, AI, data and digital transformation projects.",
  filterLabel: "Filter case studies by category",
  allLabel: "All",
  searchLabel: "Search case studies",
  searchPlaceholder: "Search case studies…",
  featuredLabel: "Latest case study",
  readLabel: "Read case study",
  showing: (n: number, category: string | null) =>
    `Showing ${n} ${n === 1 ? "case study" : "case studies"}${category ? ` in ${category}` : ""}`,
  emptyTitle: "No case studies match your search",
  emptyText: "Try a different keyword or category.",
  resetLabel: "Clear filters",
  stats: { caseStudies: "Case studies", industries: "Industries & categories" },
};

export const caseStudyPage = {
  breadcrumbRoot: "Case Studies",
  tocTitle: "On this page",
  detailsTitle: "Project details",
  resultsTitle: "Key results",
  publishedLabel: "Published",
  categoryLabel: "Category",
  labels: {
    client: "Client",
    industry: "Industry",
    region: "Region",
    solutionType: "Solution type",
    deliverables: "Deliverables",
  },
  more: {
    eyebrow: "More Case Studies",
    heading: "Explore more client outcomes",
    viewAll: { label: "View all →", href: caseStudiesIndexPath } satisfies LinkItem,
  },
};

/* ─────────────────────────────────────────────
   Case studies — newest first
───────────────────────────────────────────── */

export const caseStudies: CaseStudy[] = [
  advancingMedicalReportingWithConcordanceAnalysisPoc,
  boostingSalesForAMedicalImagingModalityManufacturerWithLlmPoweredRag,
  caseStudyAiInternalPolicyChatbotUsingLlmAndRag,
  comprehensiveDataMigrationToADataLake,
  customizedSeatReservationSystemForAUaeBasedRestaurant,
  digitalTransformationOfAuditingProcessesForAUaeBasedTrainingAuditingFirm,
  enhancingClinicalDataCollectionWithFhirQuestionnaires,
  implementingFederatedAuthenticationForAnAirlineClient,
  multiTenantSaasPlatformForAppointmentScheduling,
  revolutionizingClinicalPracticeWithAiDrivenDecisionSupport,
  roiBasedVolumeCropWithCornerstone3d,
  simulatingHospitalWorkflowForComprehensiveMedicalTraining,
  simulatingHospitalWorkflowsForComprehensiveHealthcareTraining,
  streamliningRadiologyWorkflowsWithIntelligentReportingSystems,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

/* ─────────────────────────────────────────────
   Helpers
───────────────────────────────────────────── */

export const caseStudyHref = (cs: CaseStudy) => (cs.detail ? `${caseStudiesIndexPath}${cs.slug}/` : caseStudiesIndexPath);

export const getCaseStudy = (slug: string) => caseStudies.find((cs) => cs.slug === slug && cs.detail);

export const caseStudiesWithDetail = () => caseStudies.filter((cs) => cs.detail);

export const caseStudyCategories = () =>
  [...new Set(caseStudies.flatMap((cs) => cs.categories))].sort((a, b) => a.localeCompare(b));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
