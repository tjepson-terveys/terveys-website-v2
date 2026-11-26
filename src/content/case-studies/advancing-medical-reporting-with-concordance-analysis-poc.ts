// Imported verbatim from https://www.terveystech.com/case-studies/advancing-medical-reporting-with-concordance-analysis-poc/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "advancing-medical-reporting-with-concordance-analysis-poc",
  "category": "Healthcare",
  "categories": [
    "Healthcare"
  ],
  "title": "Advancing Medical Reporting with Concordance Analysis POC",
  "description": "In the medical field, the accuracy of diagnostic reports is paramount. Our project aimed to implement a Proof of Concept (POC) to assess the concordance between radiology and…",
  "publishedAt": "2024-05-13",
  "image": {
    "src": "/images/case-studies/advancing-medical-reporting-with-concordance-analysis-poc.jpg",
    "alt": ""
  },
  "detail": {
    "seoTitle": "Advancing Medical Reporting with Concordance Analysis POC - Terveystech",
    "cover": {
      "src": "/images/case-studies/advancing-medical-reporting-with-concordance-analysis-poc.jpg",
      "alt": ""
    },
    "body": [
      {
        "type": "heading",
        "id": "background",
        "text": "Background"
      },
      {
        "type": "p",
        "text": "In the medical field, the accuracy of diagnostic reports is paramount. Our project aimed to implement a Proof of Concept (POC) to assess the concordance between radiology and pathology reports, which is critical for accurate diagnosis and treatment planning."
      },
      {
        "type": "heading",
        "id": "challenge",
        "text": "Challenge"
      },
      {
        "type": "p",
        "text": "The challenge was to extract and compare data from structured radiology and pathology reports accurately. The goal was to develop a system that could assign a concordance score to the results, which would then be included in a new, integrated report."
      },
      {
        "type": "heading",
        "id": "solution",
        "text": "Solution"
      },
      {
        "type": "p",
        "text": "We developed a POC using the following technology stack:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Backend Development",
            "text": ".NET 5.0 for server-side logic"
          },
          {
            "label": "Frontend Development",
            "text": "HTML, JavaScript, CSS, and Angular for the user interface"
          },
          {
            "label": "Database",
            "text": "MySQL for data storage"
          },
          {
            "label": "Cloud Services",
            "text": "AWS for hosting and scalability"
          },
          {
            "label": "Healthcare Interoperability",
            "text": "FHIR for ensuring compliance with healthcare data standards"
          }
        ]
      },
      {
        "type": "heading",
        "id": "implementation",
        "text": "Implementation"
      },
      {
        "type": "p",
        "text": "The system extracts data from existing structured reports and uses a set of predefined rules to compare the findings. It then calculates a concordance score reflecting the degree of agreement between the radiology and pathology reports."
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Results"
      },
      {
        "type": "p",
        "text": "The POC demonstrated:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Improved Report Accuracy",
            "text": "The concordance score provided a quantifiable measure of report reliability."
          },
          {
            "label": "Enhanced Clinical Decision-Making",
            "text": "Clinicians could make better-informed decisions with integrated reports that highlighted concordance."
          },
          {
            "label": "Streamlined Reporting Process",
            "text": "The automated comparison reduced manual review time and potential for human error."
          }
        ]
      },
      {
        "type": "heading",
        "id": "conclusion",
        "text": "Conclusion"
      },
      {
        "type": "p",
        "text": "The concordance analysis POC marks a significant step forward in medical reporting. By leveraging a robust technology stack and the FHIR standard, we have created a tool that not only improves the accuracy of medical reports but also supports clinicians in delivering high-quality patient care."
      }
    ]
  }
};

export default caseStudy;
