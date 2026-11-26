// Imported verbatim from https://www.terveystech.com/case-studies/streamlining-radiology-workflows-with-intelligent-reporting-systems/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "streamlining-radiology-workflows-with-intelligent-reporting-systems",
  "category": "Healthcare",
  "categories": [
    "Healthcare"
  ],
  "title": "Streamlining Radiology Workflows with Intelligent Reporting Systems",
  "description": "Radiology departments often face challenges in maintaining consistency and accuracy in reporting practices. To address this, our team embarked on a project to convert radiologic…",
  "publishedAt": "2024-05-13",
  "image": {
    "src": "/images/case-studies/streamlining-radiology-workflows-with-intelligent-reporting-systems.jpg",
    "alt": ""
  },
  "featured": true,
  "detail": {
    "seoTitle": "Streamlining Radiology Workflows with Intelligent Reporting Systems - Terveystech",
    "cover": {
      "src": "/images/case-studies/streamlining-radiology-workflows-with-intelligent-reporting-systems.jpg",
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
        "text": "Radiology departments often face challenges in maintaining consistency and accuracy in reporting practices. To address this, our team embarked on a project to convert radiologic guidelines and algorithms into actionable guidance that could be seamlessly integrated into existing radiology workflows."
      },
      {
        "type": "heading",
        "id": "challenge",
        "text": "Challenge"
      },
      {
        "type": "p",
        "text": "The primary challenge was to standardize reporting practices across the board, ensuring that all reports are evidence-based and adhere to expert consensus. Additionally, the system needed to be intuitive enough to guide radiologists through various clinical scenarios without disrupting their workflow."
      },
      {
        "type": "heading",
        "id": "solution",
        "text": "Solution"
      },
      {
        "type": "p",
        "text": "Our solution was to develop a new XML-based schema that encapsulates the inputs for each clinical scenario, along with the underlying logic and reporting sections. The technology stack we employed included:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Backend Development",
            "text": ".NET 5.0 for robust and scalable server-side logic"
          },
          {
            "label": "Frontend Development",
            "text": "HTML, JavaScript, CSS, and Angular for a responsive user interface"
          },
          {
            "label": "Database Management",
            "text": "MySQL and SQL for structured data storage and retrieval"
          },
          {
            "label": "DevOps",
            "text": "Azure DevOps for continuous integration and delivery"
          },
          {
            "label": "Cloud Services",
            "text": "AWS for hosting and scaling the application"
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
        "text": "The intelligent reporting system works by identifying the clinical scenario encountered by a radiologist. Once triggered, the system prompts the radiologist to input relevant information, after which it suggests appropriate report text, complete with impressions and recommendations."
      },
      {
        "type": "heading",
        "id": "results",
        "text": "Results"
      },
      {
        "type": "p",
        "text": "The implementation of this intelligent reporting system has led to:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Standardized Reporting",
            "text": "Ensured uniformity in reporting practices across the department."
          },
          {
            "label": "Evidence-Based Reports",
            "text": "Facilitated the creation of reports grounded in evidence and expert consensus."
          },
          {
            "label": "Enhanced Efficiency",
            "text": "Reduced the time spent by radiologists on report generation."
          },
          {
            "label": "Improved Accuracy",
            "text": "Minimized errors in reports through guided inputs and suggestions."
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
        "text": "The project has successfully transformed the way radiologic reports are generated, leading to a more standardized, efficient, and accurate reporting process. By leveraging advanced technologies and a carefully designed XML schema, we have provided a tool that not only enhances the radiologist’s workflow but also contributes to better patient outcomes."
      }
    ]
  }
};

export default caseStudy;
