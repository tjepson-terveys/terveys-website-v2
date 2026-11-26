// Imported verbatim from https://www.terveystech.com/understanding-oauth-2-0-and-federated-authentication-2/ — keep the slug unchanged (SEO).
import type { BlogPost } from "../blog";

const post: BlogPost = {
  "slug": "understanding-oauth-2-0-and-federated-authentication-2",
  "title": "Understanding OAuth 2.0",
  "seoTitle": "Understanding OAuth 2.0 - Terveystech",
  "subtitle": "Federated Authentication",
  "description": "In the digital world, securing user data and authentication processes is paramount. OAuth 2.0 and federated authentication are two critical components in the modern…",
  "author": "Rohith Roy",
  "publishedAt": "2024-06-29",
  "categories": [],
  "readingMinutes": 3,
  "image": {
    "src": "/images/blog/understanding-oauth-2-0-and-federated-authentication-2.jpg",
    "alt": "",
    "width": 1380,
    "height": 920
  },
  "body": [
    {
      "type": "lead",
      "text": "In the digital world, securing user data and authentication processes is paramount. OAuth 2.0 and federated authentication are two critical components in the modern security landscape. Let's dive into what they are and how they work."
    },
    {
      "type": "p",
      "text": "OAuth 2.0: The Standard for Authorization OAuth 2.0 is the industry-standard protocol for authorization. It allows users to grant third-party access to their web resources without sharing their credentials. Instead, OAuth 2.0 provides access tokens, which are strings representing the authorization granted to the third-party. This protocol is versatile and supports various applications, from web and desktop applications to mobile devices and IoT. It defines four roles:"
    },
    {
      "type": "list",
      "items": [
        {
          "label": "Resource Owner",
          "text": "Typically the user."
        },
        {
          "label": "Resource Server",
          "text": "The server hosting the protected resources."
        },
        {
          "label": "Client",
          "text": "The application seeking access to the user’s resources."
        },
        {
          "label": "Authorization Server",
          "text": "The server that issues access tokens after successfully authenticating the resource owner and obtaining authorization."
        }
      ]
    },
    {
      "type": "p",
      "text": "The OAuth 2.0 flow typically involves the following steps:"
    },
    {
      "type": "list",
      "items": [
        {
          "text": "The client requests authorization from the resource owner."
        },
        {
          "text": "The client receives an authorization grant, which is a credential representing the resource owner’s consent."
        },
        {
          "text": "The client requests an access token from the authorization server by presenting the authorization grant."
        },
        {
          "text": "The authorization server authenticates the client, validates the authorization grant, and issues an access token."
        },
        {
          "text": "The client requests the protected resource from the resource server and presents the access token for authentication."
        },
        {
          "text": "The resource server validates the access token and serves the request."
        }
      ]
    },
    {
      "type": "p",
      "label": "Federated Authentication",
      "text": "A Unified Identity Federated authentication is a mechanism that allows users to access multiple systems and applications using a single set of credentials. This is achieved through a trust relationship between different domains or ‘federations.’ The process involves:"
    },
    {
      "type": "list",
      "items": [
        {
          "label": "Identity Provider (IdP)",
          "text": "The service that verifies the user’s identity."
        },
        {
          "label": "Service Provider (SP)",
          "text": "The service that the user wants to access, which trusts the IdP to authenticate users."
        }
      ]
    },
    {
      "type": "p",
      "text": "When a user attempts to access a service, the SP redirects them to the IdP. The IdP authenticates the user’s identity and provides a token that the SP can use to grant access. This means users don’t need to remember multiple passwords, and services can rely on a trusted IdP to handle authentication. Combining OAuth 2.0 with Federated Authentication OAuth 2.0 and federated authentication often work together to provide a seamless and secure user experience. For instance, when you log into a service using your Google account, you’re using both OAuth 2.0 and federated authentication. Google acts as the IdP, and the service you’re logging into is the SP. Conclusion OAuth 2.0 and federated authentication are essential for protecting user identities and simplifying the login process across various services. As we continue to integrate more services into our digital lives, understanding and implementing these protocols will become increasingly important for developers and organizations alike."
    }
  ]
};

export default post;
