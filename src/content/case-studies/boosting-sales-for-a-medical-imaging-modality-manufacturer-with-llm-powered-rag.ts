// Imported verbatim from https://www.terveystech.com/case-studies/boosting-sales-for-a-medical-imaging-modality-manufacturer-with-llm-powered-rag/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "boosting-sales-for-a-medical-imaging-modality-manufacturer-with-llm-powered-rag",
  "category": "AI · Data",
  "categories": [
    "AI",
    "Data"
  ],
  "title": "Boosting Sales for a Medical Imaging Modality Manufacturer with LLM-powered RAG",
  "description": "A leading medical imaging modality manufacturer faced challenges in empowering its global sales team with the right product knowledge at the right time. With a diverse portfolio…",
  "publishedAt": "2025-04-16",
  "image": {
    "src": "/images/case-studies/boosting-sales-for-a-medical-imaging-modality-manufacturer-with-llm-powered-rag.jpg",
    "alt": ""
  },
  "featured": true,
  "detail": {
    "seoTitle": "Boosting Sales for a Medical Imaging Modality Manufacturer with LLM-powered RAG - Terveystech",
    "cover": {
      "src": "/images/case-studies/boosting-sales-for-a-medical-imaging-modality-manufacturer-with-llm-powered-rag.jpg",
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
        "text": "A leading medical imaging modality manufacturer faced challenges in empowering its global sales team with the right product knowledge at the right time. With a diverse portfolio of imaging devices such as CT, MRI, and digital radiography systems, the company maintained vast volumes of product brochures, technical specifications, regulatory documents, and competitor comparisons. However, these documents were spread across multiple repositories, in varied formats, and not easily searchable. Sales representatives often struggled to provide accurate, timely responses to customer inquiries, leading to delays in deal closures and missed opportunities. To address this challenge, the company deployed an AI-powered Retrieval-Augmented Generation (RAG) system integrated with Large Language Models (LLMs). The goal was to enable sales teams to instantly access contextual product insights, enhance customer conversations, and accelerate the sales cycle."
      },
      {
        "type": "heading",
        "id": "challenge",
        "text": "Challenge"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Sales reps had no quick way to access technical and competitive product information during client meetings."
          },
          {
            "text": "Manually browsing through brochures, technical manuals, and compliance documents was inefficient."
          },
          {
            "text": "Marketing and pre-sales teams were overwhelmed with repetitive queries from regional sales reps."
          },
          {
            "text": "The solution had to ensure data security since product documents included sensitive regulatory and pricing details."
          }
        ]
      },
      {
        "type": "heading",
        "id": "solution",
        "text": "Solution"
      },
      {
        "type": "subheading",
        "text": "Document Ingestion & Indexing"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Supported file formats",
            "text": "PDF, DOCX, TXT"
          },
          {
            "text": "Product catalogs, brochures, technical manuals, and FAQs were chunked using paragraph-based logic and embedded using Sentence Transformers."
          },
          {
            "text": "Embeddings were stored in a local FAISS vector database for fast retrieval."
          }
        ]
      },
      {
        "type": "subheading",
        "text": "LLM Integration with RAG"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Integrated OpenAI GPT-4 via LangChain for orchestration."
          },
          {
            "text": "Used Retrieval-Augmented Generation to ground the LLM’s responses with data from the vector store."
          },
          {
            "text": "Every answer included references to the source documents and page numbers for credibility."
          }
        ]
      },
      {
        "type": "subheading",
        "text": "Sales Assistant Interface"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Developed a responsive web-based UI using React."
          },
          {
            "text": "Sales reps could input customer queries in natural language and receive concise, contextual responses with supporting references."
          },
          {
            "text": "Designed mobile-friendly access for on-the-go client meetings."
          }
        ]
      },
      {
        "type": "subheading",
        "text": "Security & Admin Features"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Dummy login with optional SSO for secure access."
          },
          {
            "text": "Local storage of documents and embeddings ensured data privacy."
          },
          {
            "text": "Admin module allowed document uploads, usage tracking, and monitoring of query analytics."
          }
        ]
      },
      {
        "type": "heading",
        "id": "outcome",
        "text": "Outcome"
      },
      {
        "type": "table",
        "head": [
          "Metric",
          "Result"
        ],
        "rows": [
          [
            "Answer Accuracy",
            "Over 88% of product-related questions answered correctly"
          ],
          [
            "Source Citation",
            "100% of responses included document references"
          ],
          [
            "Response Latency",
            "Average 3.5 seconds"
          ],
          [
            "Sales Team Feedback",
            "Strongly positive, citing increased confidence in client interactions"
          ]
        ]
      },
      {
        "type": "subheading",
        "text": "Sample Use Cases"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Customer Question",
            "text": "“What are the differences between your 128-slice CT scanner and the competitor’s model?” Response: “Our 128-slice system offers lower dose optimization and AI-assisted reconstruction, reducing scan time by 20% compared to Competitor-X.” [CT_Brochure.pdf, Page 6]"
          },
          {
            "label": "Customer Question",
            "text": "“Does this MRI system comply with the latest EU MDR regulations?” Response: “Yes, the MRI 1.5T model is compliant with EU MDR 2017/745 standards.” [MRI_Regulatory.pdf, Section 2.4]"
          },
          {
            "label": "Customer Question",
            "text": "“What warranty and service options are available for digital radiography systems?” Response: “Standard warranty covers 3 years, with optional 5-year extended service packages.” [DR_Service.docx, Clause 5.1]"
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
        "text": "The LLM-based RAG system transformed how the manufacturer’s sales force engaged with customers. By delivering accurate, context-rich answers in real time, it accelerated sales cycles, reduced dependency on pre-sales teams, and strengthened customer trust. This initiative demonstrated how AI-driven knowledge access can directly contribute to revenue growth in highly competitive industries like medical imaging."
      }
    ]
  }
};

export default caseStudy;
