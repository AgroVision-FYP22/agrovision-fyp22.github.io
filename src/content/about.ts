export type AgentIconKey =
  | "disease"
  | "pest"
  | "soil"
  | "weather"
  | "price"
  | "planting";

export type TrustIconKey =
  | "grounding"
  | "judge"
  | "metrics"
  | "observability";

export type AccessIconKey = "voice" | "lock";

export type Agent = {
  iconKey: AgentIconKey;
  name: string;
  role: string;
};

export type OrchestratorModule = {
  name: string;
  role: string;
};

export type ReasoningStep = {
  id: string;
  title: string;
  description: string;
};

export type StackItem = {
  category: string;
  role: string;
  status: "tbd" | "confirmed";
  name?: string;
  logo?: string;
};

export type TrustPillar = {
  iconKey: TrustIconKey;
  title: string;
  description: string;
  points: string[];
};

export type AccessibilityItem = {
  iconKey: AccessIconKey;
  title: string;
  description: string;
  points: string[];
};

export type OverviewCard = {
  label: string;
  body: string;
  points: string[];
};

export const about = {
  hero: {
    eyebrow: "About AgroVision",
    title: "What AgroVision is, and how it works.",
    intro:
      "AgroVision is a digital farming assistant and AI-driven decision support system that takes the guesswork out of crop health management.",
  },

  overview: {
    eyebrow: "Overview",
    heading: "A decision support system for everyday farming.",
    whatItIs: {
      label: "What it is",
      body: "A platform that combines a Multi-Agent System, Agentic Retrieval-Augmented Generation, vector databases, and GIS-based visualisations to support farmers and agricultural officers throughout the crop lifecycle.",
      points: [
        "Multi-Agent System for coordinated reasoning across specialised concerns.",
        "Agentic RAG grounded in verified agricultural data.",
        "GIS-based visualisations for regional, macro-level insight.",
      ],
    } satisfies OverviewCard,
    whatItSolves: {
      label: "What it solves",
      body: "Crop losses caused by extreme weather and pests, inefficient use of water and inputs, and the lack of accessible agricultural expertise in rural communities.",
      points: [
        "Crop losses from extreme weather and pest outbreaks.",
        "Uncoordinated use of water, fertilizer, and pesticides.",
        "Limited access to agricultural expertise in rural areas.",
      ],
    } satisfies OverviewCard,
  },

  architecture: {
    eyebrow: "System Architecture",
    heading: "A multi-agent system coordinated by an orchestrator.",
    subheading:
      "Six specialised agents handle one concern each. An orchestrator routes requests, manages state, judges safety, and composes the final response.",
    diagram: {
      src: "/images/diagrams/agrovision-architecture.png",
      alt: "AgroVision system architecture: users connect through a mobile and web frontend to a backend that hosts REST APIs, the community and heatmap services, and a RAG pipeline that reads from a vector database; an orchestrator with intent classifier, state manager, judge, and response synthesizer coordinates six specialised agents (Soil, Weather, Disease, Price, Pest, Planting) which talk to the Large Language Model.",
    },
    agents: {
      eyebrow: "Specialised Agents",
      items: [
        {
          iconKey: "disease",
          name: "Disease Agent",
          role: "Identifies crop diseases from leaf imagery via Visual Question Answering grounded in PlantVillageVQA.",
        },
        {
          iconKey: "pest",
          name: "Pest Agent",
          role: "Identifies insect pests and damage signs, grounded in the IP-VQA dataset.",
        },
        {
          iconKey: "soil",
          name: "Soil Agent",
          role: "Interprets local soil context for fertility and irrigation guidance.",
        },
        {
          iconKey: "weather",
          name: "Weather Agent",
          role: "Pulls live climate variables to ground recommendations in current conditions.",
        },
        {
          iconKey: "price",
          name: "Price Agent",
          role: "Surfaces commodity prices and trends so crop choice can factor in market value.",
        },
        {
          iconKey: "planting",
          name: "Planting Agent",
          role: "Recommends crops and planting windows from water calendars and agro-met advisories.",
        },
      ] satisfies Agent[],
    },
    orchestrator: {
      eyebrow: "Orchestrator",
      title: "Four modules coordinate the agents end to end.",
      modules: [
        {
          name: "Intent Classifier",
          role: "Decides which specialised agents a question needs.",
        },
        {
          name: "State Manager",
          role: "Tracks the conversation state across the multi-agent loop.",
        },
        {
          name: "Judge",
          role: "Checks every response for harmful or unverified output before delivery.",
        },
        {
          name: "Response Synthesizer",
          role: "Composes the final user-facing answer from agent outputs.",
        },
      ] satisfies OrchestratorModule[],
    },
    reasoningLoop: {
      label: "Request flow",
      steps: [
        {
          id: "01",
          title: "Classify",
          description:
            "Intent Classifier picks the specialised agents needed for the question.",
        },
        {
          id: "02",
          title: "Ground",
          description:
            "Specialised agents gather evidence via Agentic RAG and live data sources.",
        },
        {
          id: "03",
          title: "Judge",
          description:
            "Judge checks the draft response against safety and grounding rules.",
        },
        {
          id: "04",
          title: "Synthesize",
          description:
            "Response Synthesizer composes the final answer for the user.",
        },
      ] satisfies ReasoningStep[],
    },
  },

  stack: {
    eyebrow: "Technology Stack",
    heading: "The stack that powers AgroVision.",
    subheading:
      "Each layer below names the technology AgroVision uses and what role it plays in the system.",
    items: [
      {
        category: "App",
        role: "Cross-platform mobile (and web) experience.",
        status: "confirmed",
        name: "Flutter",
        logo: "/images/stack/flutter.svg",
      },
      {
        category: "API",
        role: "Asynchronous request handling.",
        status: "confirmed",
        name: "FastAPI",
        logo: "/images/stack/fastapi.svg",
      },
      {
        category: "Orchestration",
        role: "Stateful multi-agent coordination.",
        status: "confirmed",
        name: "LangGraph",
        logo: "/images/stack/langgraph.svg",
      },
      {
        category: "LLM",
        role: "Reasoning and response generation.",
        status: "confirmed",
        name: "Gemini",
        logo: "/images/stack/gemini.svg",
      },
      {
        category: "Vector DB",
        role: "RAG retrieval over verified data.",
        status: "confirmed",
        name: "Qdrant",
        logo: "/images/stack/qdrant.svg",
      },
      {
        category: "App DB",
        role: "Structured data and spatial mapping.",
        status: "confirmed",
        name: "Supabase (Postgres)",
        logo: "/images/stack/supabase.svg",
      },
      {
        category: "Object Storage",
        role: "Reference image storage.",
        status: "confirmed",
        name: "AWS S3",
        logo: "/images/stack/aws-s3.svg",
      },
      {
        category: "Cloud",
        role: "Hosting and scaling.",
        status: "confirmed",
        name: "AWS",
        logo: "/images/stack/aws.svg",
      },
      {
        category: "CI/CD",
        role: "Build and deploy automation.",
        status: "confirmed",
        name: "GitHub",
        logo: "/images/stack/github.svg",
      },
      {
        category: "Observability",
        role: "Live metrics and alerting.",
        status: "confirmed",
        name: "Signoz",
        logo: "/images/stack/signoz.svg",
      },
    ] as StackItem[],
  },

  trust: {
    eyebrow: "Quality & Safety",
    heading: "How outputs are kept trustworthy.",
    pillars: [
      {
        iconKey: "grounding",
        title: "Agentic RAG grounding",
        description:
          "LLM responses are restricted to verified agricultural data stored in the vector database.",
        points: [
          "Retrievals come only from the verified vector database.",
          "Image-similarity search adds visual context for diagnoses.",
        ],
      },
      {
        iconKey: "judge",
        title: "Judge Agent",
        description:
          "A final-stage agent checks every response for harmful content before it reaches the user.",
        points: [
          "Reviews every completed response.",
          "Blocks harmful or unverified output before delivery.",
        ],
      },
      {
        iconKey: "metrics",
        title: "Evaluation metrics",
        description:
          "Performance and accuracy are quantified against expert-verified answers.",
        points: [
          "ROUGE-L for semantic overlap, BLEU for fluency.",
          "Token usage and response times tracked continuously.",
        ],
      },
      {
        iconKey: "observability",
        title: "Observability",
        description:
          "API health and load behaviour are monitored continuously.",
        points: [
          "Signoz dashboards across all API endpoints.",
          "Stress testing to verify resilience under load.",
        ],
      },
    ] satisfies TrustPillar[],
  },

  accessibility: {
    eyebrow: "Accessibility & Access Control",
    heading: "Designed to be usable, and safe to use.",
    items: [
      {
        iconKey: "voice",
        title: "Accessibility",
        description:
          "Built so users with varying levels of technical literacy can use the system without friction.",
        points: [
          "Voice input for hands-free use.",
          "Minimalist UI for low-literacy users.",
          "In-app guides and contextual tooltips.",
        ],
      },
      {
        iconKey: "lock",
        title: "Access control",
        description:
          "Sensitive data and public surfaces are separated by role-based controls.",
        points: [
          "Role-based controls protect sensitive farmer profile data.",
          "Public forums and expert portals stay isolated from private data.",
        ],
      },
    ] satisfies AccessibilityItem[],
  },
} as const;
