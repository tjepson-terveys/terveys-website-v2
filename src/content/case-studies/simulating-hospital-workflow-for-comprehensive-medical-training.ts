// Imported verbatim from https://www.terveystech.com/case-studies/simulating-hospital-workflow-for-comprehensive-medical-training/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "simulating-hospital-workflow-for-comprehensive-medical-training",
  "category": "Healthcare",
  "categories": [
    "Healthcare"
  ],
  "title": "Simulating Hospital Workflow for Comprehensive Medical Training",
  "description": "In order to operate hospital workflows efficiently, it is essential for medical staff to master various medical standards and technologies. Our project aimed to develop a platform…",
  "publishedAt": "2024-10-16",
  "image": {
    "src": "/images/case-studies/simulating-hospital-workflow-for-comprehensive-medical-training.png",
    "alt": ""
  },
  "detail": {
    "seoTitle": "Simulating Hospital Workflow for Comprehensive Medical Training - Terveystech",
    "cover": {
      "src": "/images/case-studies/simulating-hospital-workflow-for-comprehensive-medical-training.png",
      "alt": ""
    },
    "body": [
      {
        "type": "heading",
        "id": "background",
        "text": "background"
      },
      {
        "type": "p",
        "text": "In order to operate hospital workflows efficiently, it is essential for medical staff to master various medical standards and technologies. Our project aimed to develop a platform that can simulate all hospital workflows, focusing on medical standards such as DICOM, HL7, and FHIR."
      },
      {
        "type": "heading",
        "id": "assignment",
        "text": "assignment"
      },
      {
        "type": "p",
        "text": "The challenge was to create an interactive, comprehensive training environment that could accurately replicate the complexities of hospital workflows. The platform had to support a variety of DICOM, HL7, and FHIR workflows to provide a realistic training experience."
      },
      {
        "type": "heading",
        "id": "solution",
        "text": "Solution"
      },
      {
        "type": "p",
        "text": "We have developed a web-based simulation platform with the following features:"
      },
      {
        "type": "heading",
        "id": "dicom-workflow-execution",
        "text": "DICOM workflow execution"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "C-ECHO",
            "text": "Check network connection to DICOM server"
          },
          {
            "label": "DICOM MWL (Modality Work List)",
            "text": "Access to patient information and scheduled procedures"
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
            "text": "Store DICOM images and reports on the server"
          },
          {
            "label": "View images in a DICOM viewer",
            "text": "View images using the OHIF DICOM viewer"
          },
          {
            "label": "View/Edit DICOM Tags",
            "text": "Edit metadata in DICOM files"
          }
        ]
      },
      {
        "type": "heading",
        "id": "running-an-hl7-fhir-workflow",
        "text": "Running an HL7/FHIR workflow"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "HL7 v2 Workflow:"
          },
          {
            "text": "Viewing and editing HL7 messages"
          },
          {
            "text": "Sending HL7 messages to other systems"
          },
          {
            "text": "FHIR Workflow:"
          },
          {
            "text": "Viewing, editing, and sending FHIR resources"
          },
          {
            "text": "Query a FHIR server to view older versions of resources"
          }
        ]
      },
      {
        "type": "p",
        "text": "In this solution, we used open source technologies to set up a DICOM server and a FHIR server. Through a web application, users can simulate all workflows and experience the hospital workflow in a single platform."
      },
      {
        "type": "heading",
        "id": "technology-stack",
        "text": "Technology stack"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Front-end development",
            "text": "Building dynamic user interfaces using ReactJs"
          },
          {
            "label": "Backend Development",
            "text": "Use Python and Fast API for high performance server-side operations"
          },
          {
            "label": "Database",
            "text": "Uses MySQL to store structured data"
          },
          {
            "label": "DICOM Server",
            "text": "Uses DCM4Chee to manage DICOM images and workflows"
          },
          {
            "label": "DICOM Viewer",
            "text": "Uses OHIF to view DICOM images within the platform"
          }
        ]
      },
      {
        "type": "heading",
        "id": "result",
        "text": "result"
      },
      {
        "type": "p",
        "text": "The platform provided a hands-on training experience, enabling users to:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Learn and Practice",
            "text": "Gain practical knowledge of DICOM, HL7, and FHIR workflows"
          },
          {
            "label": "Simulate real-world scenarios",
            "text": "Experience the complexities of hospital workflows in a controlled environment"
          },
          {
            "label": "Improve skills",
            "text": "Increase proficiency in medical standards and the use of technology"
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
        "text": "This project effectively bridged the gap between theoretical knowledge and practical application in medical training. By simulating real hospital workflows, it created a valuable tool to train medical professionals in the use of key medical standards and techniques."
      }
    ]
  }
};

export default caseStudy;
