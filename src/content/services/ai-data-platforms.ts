import type { ServiceDetail } from "../services";

/*
 * AI & Data Platforms service page. Copy from the approved design (service-data-ai-platforms-v4.html).
 * TODO: all photos are Unsplash stock placeholders — replace with owned imagery.
 */
const aiDataPlatforms: ServiceDetail = {
  metaTitle: "AI & Data Platforms",
  metaDescription:
    "Production-grade Generative AI, Agentic AI, machine learning and data engineering — healthcare-native, governed and built to keep improving after launch.",

  hero: {
    eyebrow: "Full-Stack · Production-Grade · Healthcare-Native",
    title: [{ text: "AI & Data" }, { text: "Platforms", br: true, accent: true }],
    lead:
      "From raw data to autonomous intelligence — the full stack, built for production. We make your data AI-ready and your AI production-ready, governed, and continuously improving.",
    /** Background slideshow — crossfades with a slow zoom under a dark overlay. */
    backgrounds: [
      { src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1800&q=80", alt: "" },
      { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1800&q=80", alt: "" },
      { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1800&q=80", alt: "" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=80", alt: "" },
    ],
    /** Floating photo collage on the right (3 images). */
    collage: [
      { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80", alt: "" },
      { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=700&q=80", alt: "" },
      { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80", alt: "" },
    ],
    chips: ["Generative AI", "Agentic AI", "RAG pipelines", "FHIR-native"],
    buttons: [
      { label: "Explore Services", href: "#practice-areas", variant: "primary" },
      { label: "Talk to an Expert", href: "/contact/", variant: "outline" },
    ],
  },

  overview: {
    eyebrow: "Service Overview",
    heading: [{ text: "What makes our " }, { text: "AI & Data platform", accent: true }, { text: " stand out?" }],
    items: [
      {
        icon: "pulse",
        title: "Full-Stack Delivery",
        text: "AI strategy through to LLMOps, production operations, and continuous governance — no handoffs, no gaps.",
      },
      {
        icon: "shield",
        title: "Healthcare-Native",
        text: "HL7, FHIR, DICOM, KHZG, and HIPAA built into every platform from day one — not bolted on at the end.",
      },
      {
        icon: "layers",
        title: "Production-First Engineering",
        text: "Every system designed for scale, drift monitoring, and regulatory auditability from the first line of code.",
      },
    ],
  },

  practices: {
    id: "practice-areas",
    eyebrow: "What We Do",
    heading: "Six practice areas",
    intro: "Each capability is production-hardened and healthcare-compliant by design.",
    offersLabel: "What we offer",
    indexLabel: "Practice areas",
    items: [
      {
        id: "ai-strategy",
        icon: "globe",
        title: "AI Strategy & Roadmap Consulting",
        intro:
          "We help leadership teams build a clear, practical AI strategy — identifying highest-value opportunities and delivering measurable results at every stage.",
        image: { src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80", alt: "" },
        offers: [
          "AI and data maturity assessment: readiness gap analysis across people, platforms, and processes",
          "AI opportunity identification: Gen AI and Agentic AI use cases ranked by business impact",
          "Build vs. buy analysis across LLM providers, AI platforms, data tools, and cloud AI services",
          "AI governance framework design: ethical AI principles, model risk management, and compliance",
          "Executive AI literacy workshops and organisation-wide AI adoption and change management",
        ],
      },
      {
        id: "generative-ai",
        icon: "message",
        title: "Generative AI & LLM Solutions",
        intro:
          "We design and deploy enterprise Gen AI systems tailored to your data, domain, and compliance requirements — turning language models into measurable outcomes.",
        image: { src: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80", alt: "" },
        offers: [
          "Enterprise RAG (Retrieval-Augmented Generation) platform design and deployment",
          "LLM fine-tuning on proprietary datasets — OpenAI GPT, Anthropic Claude, Meta LLaMA, Mistral",
          "AI-powered document generation: clinical notes, reports, contracts, and executive summaries",
          "Multimodal Gen AI — combining text, images, audio, and structured data in unified pipelines",
          "Prompt engineering, evaluation frameworks, and red-teaming for safety and accuracy",
        ],
      },
      {
        id: "agentic-ai",
        icon: "layers",
        title: "Agentic AI & Autonomous Systems",
        intro:
          "We architect multi-agent AI systems that plan, reason, and execute complex multi-step workflows autonomously — from clinical pathways to back-office automation.",
        image: { src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80", alt: "" },
        offers: [
          "Multi-agent orchestration using LangGraph, AutoGen, CrewAI, and custom frameworks",
          "Autonomous task agents for customer support, clinical workflows, and back-office operations",
          "Tool-use agents with live integrations across APIs, CRMs, EHRs, and enterprise systems",
          "Human-in-the-loop oversight layers, guardrails, and intelligent escalation controls",
          "Agent memory, long-context management, and self-reflection loops for continuous improvement",
        ],
      },
      {
        id: "machine-learning",
        icon: "barChart",
        title: "Machine Learning & Predictive Analytics",
        intro:
          "We build custom ML models and predictive systems that turn historical data into forward-looking intelligence — from clinical decision support to demand forecasting at scale.",
        image: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80", alt: "" },
        offers: [
          "Predictive and prescriptive analytics across classification, regression, and ranking tasks",
          "Clinical decision support systems (CDSS) with explainable and auditable AI output",
          "Computer vision for medical imaging, document analysis, and industrial quality inspection",
          "Time-series forecasting for demand planning, capacity management, and anomaly detection",
          "Continuous model monitoring, drift detection, and automated retraining pipelines",
        ],
      },
      {
        id: "data-engineering",
        icon: "database",
        title: "Data Engineering & AI-Ready Platforms",
        intro:
          "We build the data infrastructure that makes your AI possible — real-time streaming platforms, vector databases, and AI-ready data lakes with full governance.",
        image: { src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=900&q=80", alt: "" },
        offers: [
          "Batch and real-time ELT/ETL pipelines using dbt, Apache Spark, Databricks, and Kafka",
          "Vector database architecture for semantic search and RAG (Pinecone, Weaviate, pgvector)",
          "Data lakehouse implementation with Delta Lake and Apache Iceberg for AI workloads",
          "Healthcare data integration: HL7, FHIR, and DICOM pipelines with AI enrichment layers",
          "Feature stores and ML pipelines for consistent model serving and LLM grounding",
        ],
      },
      {
        id: "analytics-bi",
        icon: "monitor",
        title: "Analytics, BI & Data Science",
        intro:
          "We transform static dashboards into dynamic intelligence platforms — where natural language querying, AI narratives, and autonomous anomaly detection replace manual reporting.",
        image: { src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80", alt: "" },
        offers: [
          "AI-powered self-service BI: Text-to-SQL and natural language querying interfaces",
          "LLM-generated executive summaries, automated insight narratives, and prescriptive recommendations",
          "Custom predictive model development, experimentation platforms, and A/B testing frameworks",
          "Real-time KPI monitoring with AI alerting and automated root-cause analysis",
          "Operationalised data science: MLOps pipelines that take models from notebook to production",
        ],
      },
    ],
  },

  industries: {
    id: "industries",
    eyebrow: "Industries We Serve",
    heading: "Built for the most demanding sectors",
    intro:
      "Our Data & AI platforms are deployed across healthcare, life sciences, manufacturing, financial services, and the public sector — each with its own compliance requirements, data complexity, and operational stakes.",
    tablistLabel: "Industries",
    items: [
      {
        id: "healthcare",
        label: "Healthcare",
        title: "AI-Powered Clinical & Operational Excellence",
        text: "We build production-grade AI and data platforms for hospitals, health networks, and digital health companies — FHIR-native, HIPAA-compliant, and designed for clinical trust at the point of care.",
        image: { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80", alt: "" },
        useCases: [
          "Clinical decision support systems (CDSS) with explainable, auditable AI output",
          "Predictive readmission, deterioration, and length-of-stay models in live deployment",
          "NLP pipelines for clinical note structuring, ICD coding, and documentation automation",
          "HL7, FHIR, and DICOM data integration and AI-enrichment platforms",
          "AI-powered imaging analysis for radiology, pathology, and diagnostic workflows",
        ],
      },
      {
        id: "life-sciences",
        label: "Life Sciences",
        title: "Accelerating Discovery and Regulatory Compliance",
        text: "From drug discovery pipelines to clinical trial optimisation, we deploy AI and data platforms that compress timelines, improve trial outcomes, and meet the strictest regulatory requirements.",
        image: { src: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1000&q=80", alt: "" },
        useCases: [
          "AI-accelerated drug discovery and molecular property prediction pipelines",
          "Clinical trial design optimisation and patient recruitment with predictive modelling",
          "Pharmacovigilance automation: adverse event detection and regulatory signal processing",
          "Genomics and multi-omics data platforms with AI enrichment and variant analysis",
          "Regulatory submission data pipelines with full audit trails and compliance controls",
        ],
      },
      {
        id: "manufacturing",
        label: "Manufacturing",
        title: "Intelligent Operations from Shop Floor to Supply Chain",
        text: "We build AI and data platforms that connect OT and IT data, enabling predictive maintenance, quality automation, and supply chain intelligence across complex manufacturing environments.",
        image: { src: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1000&q=80", alt: "" },
        useCases: [
          "Predictive maintenance platforms using sensor data, IIoT streams, and ML models",
          "Computer vision quality inspection systems for defect detection at production speed",
          "Demand forecasting and supply chain optimisation with real-time data pipelines",
          "OEE (Overall Equipment Effectiveness) analytics and AI-driven downtime reduction",
          "AI-powered supplier risk monitoring and procurement intelligence platforms",
        ],
      },
      {
        id: "financial-services",
        label: "Financial Services",
        title: "AI-Driven Risk, Compliance, and Client Intelligence",
        text: "We deploy AI and data platforms for banks, insurers, and fintechs — combining real-time risk intelligence, regulatory compliance automation, and personalised client experiences at scale.",
        image: { src: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1000&q=80", alt: "" },
        useCases: [
          "Real-time fraud detection and AML transaction monitoring with explainable AI",
          "Credit risk modelling, underwriting automation, and portfolio analytics platforms",
          "Regulatory reporting automation: MiFID II, Basel IV, IFRS 9, and Solvency II pipelines",
          "AI-powered document intelligence for contracts, KYC, and onboarding workflows",
          "Client 360 data platforms with next-best-action and churn prediction models",
        ],
      },
      {
        id: "public-sector",
        label: "Public Sector",
        title: "Transparent, Trusted AI for Public Services",
        text: "We build responsible AI and data platforms for government and public sector organisations — designed with explainability, fairness, and democratic accountability at their core.",
        image: { src: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=1000&q=80", alt: "" },
        useCases: [
          "Citizen service automation with AI agents that handle high-volume request processing",
          "Policy analysis and legislative document intelligence platforms using LLMs",
          "Benefits fraud detection with fair, auditable AI models and human oversight",
          "Resource allocation and capacity planning platforms for health, education, and infrastructure",
          "AI governance frameworks built to EU AI Act and national public sector AI standards",
        ],
      },
    ],
  },

  stack: {
    eyebrow: "Technologies & Frameworks",
    heading: "The stack behind every engagement",
    intro:
      "We work with the leading AI, data, and cloud platforms — selecting the right tools for your architecture, not the ones that are easiest for us. Every technology below has been battle-tested in production healthcare and enterprise environments.",
    groups: [
      { label: "Foundation models", items: ["OpenAI GPT", "Anthropic Claude", "Meta LLaMA", "Mistral"] },
      { label: "Agent frameworks", items: ["LangGraph", "AutoGen", "CrewAI"] },
      { label: "Data platforms", items: ["Databricks", "Apache Spark", "Apache Kafka", "dbt", "Delta Lake", "Apache Iceberg"] },
      { label: "Vector search", items: ["Pinecone", "Weaviate", "pgvector"] },
      { label: "MLOps & explainability", items: ["MLflow", "SHAP / LIME"] },
      { label: "Healthcare & compliance", items: ["HL7 / FHIR", "DICOM", "KHZG", "HIPAA", "EU AI Act", "GDPR"] },
    ],
  },

  perspective: {
    eyebrow: "Our Perspective",
    heading: "How we think about AI engineering",
    intro: "Four principles that shape every data and AI platform we build — from the first architecture decision to production day one.",
    prevLabel: "Previous principle",
    nextLabel: "Next principle",
    goToLabel: "Go to principle",
    items: [
      {
        icon: "growth",
        tag: "Principle 01",
        title: "Production First, Always",
        text: "The gap between an AI proof-of-concept and a production-grade system is not a technology gap — it is an engineering discipline gap. We obsess over the production side: monitoring, drift management, retraining pipelines, and governance from day one. That is why the systems we deliver are still performing at month twelve, not just at the demo.",
        image: { src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80", alt: "" },
      },
      {
        icon: "target",
        tag: "Principle 02",
        title: "Data Quality Is Not Optional",
        text: "Data quality failures account for the majority of AI underperformance in the field. We treat data quality as a first-class engineering concern across every layer of the stack — from pipeline design to model grounding and vector stores. There is no AI strategy that compensates for unreliable source data, and we never pretend otherwise.",
        image: { src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80", alt: "" },
      },
      {
        icon: "eye",
        tag: "Principle 03",
        title: "Explainability Drives Adoption",
        text: "In regulated healthcare environments, AI adoption at the point of care is tied directly to explainability. Every system we build in a clinical context is designed to answer one question: why did it predict this? Explainability is not a compliance checkbox — it is a prerequisite for clinical trust, and we engineer for it from the architecture up.",
        image: { src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80", alt: "" },
      },
      {
        icon: "scale",
        tag: "Principle 04",
        title: "Governance by Design",
        text: "Most AI governance failures happen because controls are added at the end of a project rather than designed from the start. Every AI and data platform we deliver is auditable, compliant, and governed by design — across EU AI Act, HIPAA, GDPR, and KHZG — not as a final sign-off exercise.",
        image: { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80", alt: "" },
      },
    ],
  },

  related: {
    eyebrow: "Client Outcomes",
    heading: "Building things that will last",
    intro: "Together with our clients, we're shaping an enduring, AI-powered future for healthcare and enterprise.",
    caseStudySlugs: [
      "case-study-ai-internal-policy-chatbot-using-llm-and-rag",
      "boosting-sales-for-a-medical-imaging-modality-manufacturer-with-llm-powered-rag",
      "revolutionizing-clinical-practice-with-ai-driven-decision-support",
    ],
  },

  cta: {
    heading: [{ text: "Ready to build" }, { text: "your AI stack?", br: true }],
    body: [
      { text: "Talk to our Data & AI team. We'll assess your readiness and map a clear path to " },
      { text: "production-grade AI", strong: true },
      { text: " — governed, scalable, and built for your domain." },
    ],
    buttons: [
      { label: "Book a Discovery Call →", href: "/contact/", variant: "white" },
      { label: "Talk to Sales", href: "/contact/", variant: "ghost" },
    ],
    trust: "No commitment · 30-min session",
  },
};

export default aiDataPlatforms;
