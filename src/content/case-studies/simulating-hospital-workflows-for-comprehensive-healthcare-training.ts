// Imported verbatim from https://www.terveystech.com/case-studies/simulating-hospital-workflows-for-comprehensive-healthcare-training/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "simulating-hospital-workflows-for-comprehensive-healthcare-training",
  "category": "Healthcare",
  "categories": [
    "Healthcare"
  ],
  "title": "Simulating Hospital Workflows for Comprehensive Healthcare Training",
  "description": "Training healthcare professionals in the use of various medical standards and technologies is essential for the efficient operation of hospital workflows. Our project aimed to…",
  "publishedAt": "2024-05-13",
  "image": {
    "src": "/images/case-studies/simulating-hospital-workflows-for-comprehensive-healthcare-training.png",
    "alt": ""
  },
  "detail": {
    "seoTitle": "Simulating Hospital Workflows for Comprehensive Healthcare Training - Terveystech",
    "cover": {
      "src": "/images/case-studies/simulating-hospital-workflows-for-comprehensive-healthcare-training.png",
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
        "text": "Training healthcare professionals in the use of various medical standards and technologies is essential for the efficient operation of hospital workflows. Our project aimed to develop a platform that could simulate all hospital workflows for training purposes, focusing on healthcare standards like DICOM, HL7, and FHIR."
      },
      {
        "type": "heading",
        "id": "challenge",
        "text": "Challenge"
      },
      {
        "type": "p",
        "text": "The challenge was to create an interactive and comprehensive training environment that could accurately represent the complexity of hospital workflows. The platform needed to support various DICOM, HL7, and FHIR workflows to provide a realistic training experience."
      },
      {
        "type": "heading",
        "id": "solution",
        "text": "Solution"
      },
      {
        "type": "p",
        "text": "We developed a web-based simulation platform with the following features:"
      },
      {
        "type": "heading",
        "id": "perform-dicom-workflows",
        "text": "Perform DICOM Workflows"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "C-ECHO",
            "text": "Verify network connection to a DICOM server"
          },
          {
            "label": "DICOM MWL (Modality Worklist)",
            "text": "Access patient information and scheduled exams"
          },
          {
            "label": "C-FIND",
            "text": "Search for DICOM objects on a server"
          },
          {
            "label": "C-MOVE",
            "text": "Transfer DICOM objects between servers"
          },
          {
            "label": "C-STORE",
            "text": "Store DICOM images and reports on a server"
          },
          {
            "label": "View DICOM Images in Viewer",
            "text": "Utilize the OHIF DICOM Viewer for image display"
          },
          {
            "label": "View/Edit DICOM Tags",
            "text": "Modify metadata within DICOM files"
          }
        ]
      },
      {
        "type": "heading",
        "id": "perform-hl7-fhir-workflows",
        "text": "Perform HL7/FHIR Workflows"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "HL7 v2 Workflows:"
          },
          {
            "text": "View and edit HL7 messages"
          },
          {
            "text": "Send HL7 messages to other systems"
          },
          {
            "text": "FHIR Workflows:"
          },
          {
            "text": "View, edit, and send FHIR resources"
          },
          {
            "text": "Query FHIR server and view older versions of resources"
          }
        ]
      },
      {
        "type": "p",
        "text": "The solution involved setting up a DICOM server and FHIR server using open-source technology. Through a web application, users can simulate all workflows, experiencing hospital workflows on a single platform."
      },
      {
        "type": "heading",
        "id": "the-technology-stack-included",
        "text": "The technology stack included"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Frontend Development",
            "text": "ReactJs for a dynamic user interface"
          },
          {
            "label": "Backend Development",
            "text": "Python with Fast API for high-performance server-side operations"
          },
          {
            "label": "Database",
            "text": "MySQL for structured data storage"
          },
          {
            "label": "DICOM Server",
            "text": "DCM4Chee for managing DICOM images and workflows"
          },
          {
            "label": "DICOM Viewer",
            "text": "OHIF for viewing DICOM images within the platform"
          }
        ]
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Results"
      },
      {
        "type": "p",
        "text": "The platform successfully provided a hands-on training experience, allowing users to:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Learn and Practice",
            "text": "Gain practical knowledge of DICOM, HL7, and FHIR workflows"
          },
          {
            "label": "Simulate Real-World Scenarios",
            "text": "Experience the intricacies of hospital workflows in a controlled environment"
          },
          {
            "label": "Enhance Skills",
            "text": "Improve proficiency in using healthcare standards and technologies"
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
        "text": "This project has effectively bridged the gap between theoretical knowledge and practical application in healthcare training. By simulating real hospital workflows, we have created a valuable tool for training healthcare professionals in the use of critical medical standards and technologies."
      }
    ]
  }
};

export default caseStudy;
