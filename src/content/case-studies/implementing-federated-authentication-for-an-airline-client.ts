// Imported verbatim from https://www.terveystech.com/case-studies/implementing-federated-authentication-for-an-airline-client/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "implementing-federated-authentication-for-an-airline-client",
  "category": "Transportation & Logistics (Airline)",
  "categories": [
    "Transportation & Logistics (Airline)"
  ],
  "title": "Implementing Federated Authentication for an Airline Client",
  "description": "An airline client required a robust solution to streamline their authentication process across various applications. The goal was to enhance user experience by providing a…",
  "publishedAt": "2024-09-29",
  "image": {
    "src": "/images/case-studies/implementing-federated-authentication-for-an-airline-client.jpg",
    "alt": ""
  },
  "detail": {
    "seoTitle": "Implementing Federated Authentication for an Airline Client - Terveystech",
    "cover": {
      "src": "/images/case-studies/implementing-federated-authentication-for-an-airline-client.jpg",
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
        "text": "An airline client required a robust solution to streamline their authentication process across various applications. The goal was to enhance user experience by providing a seamless sign-on experience, automate access control based on user roles, and ensure high security for application access."
      },
      {
        "type": "heading",
        "id": "scope",
        "text": "Scope"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Seamless Sign-On",
            "text": "Users should be able to log onto different applications without repeated sign-ins."
          },
          {
            "label": "Role-Based Access Provisioning",
            "text": "New users should receive access to applications based on predefined roles."
          },
          {
            "label": "Dynamic Access Control",
            "text": "Users’ access should be automatically updated or revoked based on role changes or employment status."
          },
          {
            "label": "Security",
            "text": "Applications must be secured to allow only authenticated and authorized users."
          },
          {
            "label": "Open Standards",
            "text": "The solution should use open standards for user authentication."
          },
          {
            "label": "Integration with Azure AD/Microsoft Entra ID",
            "text": "The system should support OAuth protocols for integration with Azure AD/Microsoft Entra ID."
          }
        ]
      },
      {
        "type": "heading",
        "id": "proposed-solution",
        "text": "Proposed Solution"
      },
      {
        "type": "p",
        "text": "The solution involved setting up federated authentication using the Auth0 platform, which would authenticate users from an external identity provider via Open-ID-Connect (OIDC)."
      },
      {
        "type": "subheading",
        "text": "Implementation Plan"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Auth0 Platform Setup:Configured the Auth0 platform to support authentication for multiple organizations."
          },
          {
            "text": "OIDC Enterprise Connection:Established a new enterprise connection using OIDC to support Azure AD integration."
          },
          {
            "text": "Auth0 Application Configuration:Configured Auth0 applications to recognize the organization as an Identity Provider (IdP)."
          },
          {
            "text": "Identity API Consideration:Modified the Identity API to include organization consideration for authentication processes."
          }
        ]
      },
      {
        "type": "heading",
        "id": "outcome",
        "text": "Outcome"
      },
      {
        "type": "p",
        "text": "The implementation of federated authentication via Auth0 provided the airline client with a seamless login experience. Users could now access various applications with a single sign-on, and their access rights were dynamically managed based on their roles within the organization. The integration with Azure AD/Microsoft Entra ID using OAuth protocols ensured that the applications were secure and accessible only to authenticated and authorized users."
      },
      {
        "type": "heading",
        "id": "benefits",
        "text": "Benefits"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Enhanced User Experience",
            "text": "Users enjoyed a frictionless sign-on process across all applications."
          },
          {
            "label": "Automated Access Management",
            "text": "The system automatically managed user access rights, reducing administrative overhead."
          },
          {
            "label": "Security Compliance",
            "text": "The use of open standards and integration with Azure AD/Microsoft Entra ID ensured compliance with security best practices."
          },
          {
            "label": "Scalability",
            "text": "The Auth0 platform’s support for multiple organizations made the solution scalable for future growth."
          }
        ]
      },
      {
        "type": "p",
        "text": "This case study demonstrates the effective use of federated authentication to provide a secure and user-friendly authentication system that aligns with the client’s operational requirements and security standards."
      }
    ]
  }
};

export default caseStudy;
