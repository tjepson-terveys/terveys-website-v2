// Imported verbatim from https://www.terveystech.com/case-studies/enhancing-clinical-data-collection-with-fhir-questionnaires/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "enhancing-clinical-data-collection-with-fhir-questionnaires",
  "category": "Healthcare · Startup",
  "categories": [
    "Healthcare",
    "Startup"
  ],
  "title": "Enhancing Clinical Data Collection with FHIR Questionnaires",
  "description": "In the healthcare industry, the efficient collection and management of patient data are crucial for research and quality improvement initiatives. Our team was tasked with…",
  "publishedAt": "2024-05-13",
  "image": {
    "src": "/images/case-studies/enhancing-clinical-data-collection-with-fhir-questionnaires.webp",
    "alt": ""
  },
  "detail": {
    "seoTitle": "Enhancing Clinical Data Collection with FHIR Questionnaires - Terveystech",
    "cover": {
      "src": "/images/case-studies/enhancing-clinical-data-collection-with-fhir-questionnaires.webp",
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
        "text": "In the healthcare industry, the efficient collection and management of patient data are crucial for research and quality improvement initiatives. Our team was tasked with developing a solution that would streamline the data collection process in a clinical setting using FHIR Questionnaires."
      },
      {
        "type": "heading",
        "id": "challenge",
        "text": "Challenge"
      },
      {
        "type": "p",
        "text": "The primary challenge was to create a system that could capture detailed patient data through a standardized questionnaire format. This data needed to be easily shareable and integrable with other healthcare systems while ensuring accuracy and compliance with healthcare standards."
      },
      {
        "type": "heading",
        "id": "solution",
        "text": "Solution"
      },
      {
        "type": "p",
        "text": "Leveraging the power of the Fast Healthcare Interoperability Resources (FHIR) standard, we developed a dynamic questionnaire system. Our technology stack included:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Backend Development",
            "text": ".NET 5.0 for robust server-side operations"
          },
          {
            "label": "Frontend Development",
            "text": "HTML, JavaScript, and CSS for building intuitive user interfaces"
          },
          {
            "label": "Framework",
            "text": "Angular for a responsive, single-page application experience"
          },
          {
            "label": "Database",
            "text": "MongoDB for flexible, scalable data storage"
          },
          {
            "label": "Cloud Services",
            "text": "AWS for reliable hosting and data management"
          },
          {
            "label": "Standards Compliance",
            "text": "FHIR for interoperability and standardization"
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
        "text": "The system allows clinicians to create and distribute FHIR Questionnaires to patients, who can then fill them out on their preferred devices. The responses are automatically collected and stored in MongoDB, with AWS providing the necessary compute power and storage scalability."
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Results"
      },
      {
        "type": "p",
        "text": "The implementation of the FHIR Questionnaire system resulted in:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Improved Data Quality",
            "text": "Standardized data collection led to more accurate and consistent patient data."
          },
          {
            "label": "Enhanced Research Capabilities",
            "text": "Researchers gained access to a richer dataset, facilitating more comprehensive studies."
          },
          {
            "label": "Streamlined Workflows",
            "text": "Clinicians saved time with automated data collection and integration, allowing them to focus on patient care."
          },
          {
            "label": "Increased Patient Engagement",
            "text": "Patients appreciated the ease of use and accessibility of the digital questionnaires."
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
        "text": "The FHIR Questionnaire system has significantly improved the way clinical data is collected and utilized. By embracing modern technologies and standards, we have provided a solution that not only meets the current needs of healthcare providers but also paves the way for future advancements in patient care and research."
      }
    ]
  }
};

export default caseStudy;
