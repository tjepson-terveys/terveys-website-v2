// Imported verbatim from https://www.terveystech.com/case-studies/comprehensive-data-migration-to-a-data-lake/ — keep the slug unchanged (SEO).
import type { CaseStudy } from "../caseStudies";

const caseStudy: CaseStudy = {
  "slug": "comprehensive-data-migration-to-a-data-lake",
  "category": "Data",
  "categories": [
    "Data"
  ],
  "title": "Comprehensive Data Migration to a Data Lake",
  "description": "In the contemporary data-driven landscape, the consolidation of information from disparate sources into a unified data lake is paramount. This case study delves into a project…",
  "publishedAt": "2024-05-24",
  "image": {
    "src": "/images/case-studies/comprehensive-data-migration-to-a-data-lake.jpg",
    "alt": ""
  },
  "detail": {
    "seoTitle": "Comprehensive Data Migration to a Data Lake - Terveystech",
    "cover": {
      "src": "/images/case-studies/comprehensive-data-migration-to-a-data-lake.jpg",
      "alt": ""
    },
    "body": [
      {
        "type": "heading",
        "id": "introduction",
        "text": "Introduction"
      },
      {
        "type": "p",
        "text": "In the contemporary data-driven landscape, the consolidation of information from disparate sources into a unified data lake is paramount. This case study delves into a project that aimed to achieve such a migration with a robust and scalable solution."
      },
      {
        "type": "heading",
        "id": "background",
        "text": "Background"
      },
      {
        "type": "p",
        "text": "The project’s goal was to migrate data from multiple sources to a data lake, ensuring the data’s availability and integrity for analytical purposes. The challenge was to create a pipeline that could handle continuous, real-time data ingestion from various databases."
      },
      {
        "type": "heading",
        "id": "solution-overview",
        "text": "Solution Overview"
      },
      {
        "type": "p",
        "text": "The solution involved the implementation of Debezium for change data capture and Kafka for data streaming, supplemented by AWS Kinesis Firehose for data delivery and AWS Glue Data Catalog for metadata management."
      },
      {
        "type": "heading",
        "id": "implementation",
        "text": "Implementation"
      },
      {
        "type": "p",
        "text": "The implementation process was as follows:"
      },
      {
        "type": "list",
        "items": [
          {
            "text": "Data Capture:AWS RDS(Relational Database Service) was used as the primary data source. Debezium connectors were configured to capture change data records (CDRs) from these sources."
          },
          {
            "label": "Data Streaming",
            "text": "Kafka served as the initial streaming platform, processing the CDRs from Debezium."
          },
          {
            "label": "Data Delivery",
            "text": "The data was then passed toAWS Kinesis Firehose, which provided a fully managed service to efficiently load the streaming data into the data lake."
          },
          {
            "text": "Metadata Management:AWS Glue Data Catalogwas employed to catalog the data and manage the associated metadata, facilitating easier data discovery and governance."
          },
          {
            "label": "Data Lake Storage",
            "text": "AnAutoloaderinDatabrickswas utilized to move the data into the data lake, leveraging the metadata from AWS Glue Data Catalog to handle schema evolution."
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
        "text": "The multi-faceted approach to data migration resulted in:"
      },
      {
        "type": "list",
        "items": [
          {
            "label": "Real-Time Data Processing",
            "text": "The combination of Debezium and Kafka allowed for real-time capture and processing of data changes."
          },
          {
            "label": "Efficient Data Delivery",
            "text": "AWS Kinesis Firehose streamlined the delivery of data into the data lake with minimal latency."
          },
          {
            "label": "Enhanced Metadata Management",
            "text": "The AWS Glue Data Catalog provided a centralized repository for metadata, improving data searchability and compliance."
          },
          {
            "label": "Scalable Data Lake Integration",
            "text": "The use of Databricks’ Autoloader ensured that the data lake could scale with the growing data volume and complexity."
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
        "text": "The project successfully demonstrated a scalable and efficient method for migrating data from multiple sources to a data lake. The integration of Debezium, Kafka, AWS Kinesis Firehose, and AWS Glue Data Catalog created a seamless pipeline that facilitated real-time data availability and robust metadata management."
      }
    ]
  }
};

export default caseStudy;
