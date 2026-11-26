// Imported verbatim from https://www.terveystech.com/case-studies/case-study-ai-internal-policy-chatbot-using-llm-and-rag/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "case-study-ai-internal-policy-chatbot-using-llm-and-rag",
  "category": "AI",
  "categories": [
    "AI"
  ],
  "title": "AI Internal Policy Chatbot Using LLM and RAG",
  "description": "As organizations grow, it becomes increasingly difficult for employees to find quick answers to questions about internal company policies such as HR policies, IT security…",
  "publishedAt": "2026-03-11",
  "image": {
    "src": "/images/case-studies/case-study-ai-internal-policy-chatbot-using-llm-and-rag.png",
    "alt": ""
  },
  "detail": {
    "seoTitle": "AI Internal Policy Chatbot Using LLM and RAG - Terveystech",
    "cover": {
      "src": "/images/case-studies/case-study-ai-internal-policy-chatbot-using-llm-and-rag.png",
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
        "text": "As organizations grow, it becomes increasingly difficult for employees to find quick answers to questions about internal company policies such as HR policies, IT security guidelines, vacation policies, travel expense reimbursement procedures, etc. These documents are typically lengthy, stored in various formats, and difficult to search. To address this challenge, a proof-of-concept (PoC) for an AI chatbot has been launched that leverages Large Language Models (LLM) and Retrieval-Augmented Generation (RAG) to help employees retrieve accurate and contextual information through a natural language interface."
      },
      {
        "type": "heading",
        "id": "assignment",
        "text": "Assignment"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Employees did not have ready access to policy information"
          },
          {
            "text": "Manually searching for documents is time-consuming and inefficient"
          },
          {
            "text": "Repeated inquiries to HR and administrative departments increased workload"
          },
          {
            "text": "The solution had to ensure data privacy and not expose information to external services."
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
        "text": "Document Ingestion and Indexing"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Supported file formats",
            "text": "PDF, DOCX, TXT"
          },
          {
            "text": "Documents are split into paragraphs and embeddings are generated using Sentence Transformers."
          },
          {
            "text": "Embedded information is stored in a local FAISS vector database for fast retrieval"
          }
        ]
      },
      {
        "type": "subheading",
        "text": "LLM and RAG Integration"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Integrating OpenAI GPT-4 using LangChain"
          },
          {
            "text": "Extract relevant content from the Vector Store to generate LLM answers in context"
          },
          {
            "text": "All answers include source document and section references to ensure transparency"
          }
        ]
      },
      {
        "type": "subheading",
        "text": "Query interface"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Developing a simple and responsive web UI with React"
          },
          {
            "text": "Users can type in their questions and get clear answers with references"
          }
        ]
      },
      {
        "type": "subheading",
        "text": "Security and Management Features"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "PoC implements simple login function, with future SSO integration in mind"
          },
          {
            "text": "Local document and embedded information storage ensures data privacy"
          },
          {
            "text": "Optional administration module allows document upload and usage monitoring"
          }
        ]
      },
      {
        "type": "heading",
        "id": "result",
        "text": "Result"
      },
      {
        "type": "table",
        "head": [
          "index",
          "result"
        ],
        "rows": [
          [
            "Accuracy of answers",
            "Answer 85% or more of the test questions correctly"
          ],
          [
            "Citation of sources",
            "100% of answers include accurate references"
          ],
          [
            "response speed",
            "Average 3.2 seconds"
          ],
          [
            "User ratings",
            "Particularly well received by the HR and administrative departments"
          ]
        ]
      },
      {
        "type": "subheading",
        "text": "Usage example"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "What are the company’s policies regarding sick leave? → “Employees are entitled to 12 days of paid sick leave per year.” [HR_Policy.pdf, Section 3.2]"
          },
          {
            "text": "Can unused paid leave be carried over? → “You can carry over up to five days.” [Leave_Policy.docx, Article 4.1]"
          },
          {
            "text": "“What are the steps to report a phishing email?” → “Please forward the email to infosec@company.com and delete it.” [IT_Security_Guidelines.pdf, page 8]"
          }
        ]
      },
      {
        "type": "heading",
        "id": "in-conclusion",
        "text": "In conclusion"
      },
      {
        "type": "p",
        "text": "This PoC demonstrated the effectiveness of a solution using LLM and RAG to answer questions about internal company policies. The chatbot provided highly accurate, contextual answers with references, demonstrating its potential to reduce the burden on HR and administrative departments and contribute to improving employee satisfaction."
      }
    ]
  }
};

export default caseStudy;
