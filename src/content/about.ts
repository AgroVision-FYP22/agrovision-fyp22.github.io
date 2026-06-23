export type AgentIconKey =
  | "disease"
  | "soil"
  | "weather"
  | "orchestrator"
  | "judge";

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
      "Specialised agents handle one concern each. An orchestrator coordinates them, and a judge agent checks the final response before it reaches the user.",
    diagramPlaceholder: {
      label: "Architecture diagram in design",
      note: "A detailed diagram will replace this placeholder once the system design is finalised.",
    },
    agents: [
      {
        iconKey: "disease",
        name: "Disease Agent",
        role: "Identifies crop diseases from images using Visual Question Answering.",
      },
      {
        iconKey: "soil",
        name: "Soil Agent",
        role: "Interprets soil context to tailor treatment to the field.",
      },
      {
        iconKey: "weather",
        name: "Weather Agent",
        role: "Pulls live climate variables to ground recommendations in current conditions.",
      },
      {
        iconKey: "orchestrator",
        name: "Orchestrator",
        role: "Coordinates the agents and runs the reasoning loop end to end.",
      },
      {
        iconKey: "judge",
        name: "Judge Agent",
        role: "Final-stage gatekeeper that blocks harmful or unverified output.",
      },
    ] satisfies Agent[],
    reasoningLoop: {
      label: "How they work together",
      steps: [
        {
          id: "01",
          title: "Route",
          description:
            "The Orchestrator receives a question and decides which specialised agents to engage.",
        },
        {
          id: "02",
          title: "Ground",
          description:
            "Specialised agents gather evidence via Agentic RAG and live climate variables.",
        },
        {
          id: "03",
          title: "Verify",
          description:
            "The Judge Agent checks the final response for safety before it reaches the user.",
        },
      ] satisfies ReasoningStep[],
    },
  },

  stack: {
    eyebrow: "Technology Stack",
    heading: "The components that will power AgroVision.",
    subheading:
      "The exact technology choices are not yet finalised. Brand logos and names will appear in each slot below once they are.",
    items: [
      { category: "App", role: "Cross-platform mobile experience.", status: "tbd" },
      { category: "API", role: "Asynchronous request handling.", status: "tbd" },
      { category: "Orchestration", role: "Multi-agent coordination.", status: "tbd" },
      { category: "LLM", role: "Reasoning and response generation.", status: "tbd" },
      { category: "Vector DB", role: "RAG retrieval over verified data.", status: "tbd" },
      { category: "App DB", role: "Structured data and spatial mapping.", status: "tbd" },
      { category: "Object Storage", role: "Reference image storage.", status: "tbd" },
      { category: "Cloud", role: "Hosting and scaling.", status: "tbd" },
      { category: "CI/CD", role: "Build and deploy automation.", status: "tbd" },
      { category: "Observability", role: "Live metrics and alerting.", status: "tbd" },
    ] satisfies StackItem[],
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
