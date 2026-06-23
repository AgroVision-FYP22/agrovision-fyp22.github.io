export type Paper = {
  title: string;
  authors?: string;
  year?: string;
  venue?: string;
  description: string;
  relevance: string;
  link: string;
  quote?: string;
};

export type PaperCategory = {
  id: string;
  label: string;
  blurb?: string;
  items: Paper[];
};

export const references = {
  hero: {
    eyebrow: "References",
    title: "The literature behind AgroVision.",
    intro:
      "Research papers that inform AgroVision's architecture and approach, grouped by topic.",
  },

  categories: [
    {
      id: "single-agent",
      label: "Single Agent Systems",
      blurb:
        "Foundational work on single-agent approaches and where they fit in agricultural decision support.",
      items: [],
    },
    {
      id: "single-agent-limitations",
      label: "Limitations with Single Agent",
      blurb:
        "Why single-agent architectures fall short for cross-domain, real-world agricultural reasoning.",
      items: [
        {
          title:
            "Accelerating Earth Science Discovery via Multi-Agent LLM Systems",
          authors:
            "D. Pantiukhin, B. Shapkin, I. Kuznetsov, A. A. Jost, N. Koldunov",
          year: "2025",
          venue: "Frontiers in AI · arXiv 2503.05854",
          description:
            "A perspective on Multi-Agent Systems powered by LLMs for the geosciences. Presents PANGAEA GPT, a specialised MAS pipeline integrated with the PANGAEA Earth-and-Environmental-Science database, demonstrating how MAS-driven workflows manage complex, multi-format scientific data.",
          quote:
            "while single-agent approaches can handle specific, well-defined tasks, they often struggle with interdisciplinary queries that require specialized knowledge across diverse data formats and domains.",
          relevance:
            "Cited to justify the multi-agent architecture. Agricultural decision support spans crops, soil, weather, and pests — exactly the kind of cross-domain workload single-agent setups handle poorly.",
          link: "https://arxiv.org/abs/2503.05854",
        },
      ],
    },
    {
      id: "multi-agent",
      label: "Multi Agent Systems",
      blurb:
        "Recent multi-agent frameworks applied to agricultural decision support and farmer advisory.",
      items: [
        {
          title:
            "AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers' Enquiries Globally",
          authors: "N. A. Cantonjos, A. Biswas",
          year: "2025",
          venue: "arXiv 2512.14910",
          description:
            "A modular, role-specialised multi-agent framework for smallholder farmers. Uses a chain-of-responsibility pattern to coordinate autonomous agents with real-time tools (weather, geospatial data) and a dedicated critique agent for hallucination control. Supports multilingual interaction.",
          relevance:
            "Closest peer to AgroVision's architecture. Informs the orchestrator + specialised-agent + judge pattern that AgroVision uses.",
          link: "https://arxiv.org/abs/2512.14910",
        },
        {
          title:
            "Agentic AI-driven autonomous decision support system for smart agriculture",
          year: "2026",
          venue: "Scientific Reports",
          description:
            "Soil2Harvest-AI — an agentic framework for end-to-end crop yield optimisation. Combines soil image classification (Custom CNN, 92.88% accuracy), regression-based soil parameter estimation, real-time weather integration, and explainable-AI overlays (SHAP, LIME).",
          relevance:
            "Validates the model of orchestrating multiple agricultural ML sub-tasks behind a single user-facing decision support interface.",
          link: "https://www.nature.com/articles/s41598-026-39472-w",
        },
        {
          title:
            "An Agent-Based Model-Driven Decision Support System for Assessment of Agricultural Vulnerability of Sugarcane Facing Climatic Change",
          authors: "A. E. Badillo-Márquez et al.",
          year: "2021",
          venue: "Mathematics (MDPI) 9(23) 3061",
          description:
            "An agent-based model combining fuzzy logic and system dynamics to evaluate sugarcane vulnerability to climate change. Uses a three-stage methodology: vulnerability indicators, crop vulnerability, and total system vulnerability.",
          relevance:
            "Demonstrates how agent-based decision support translates climate variables into actionable crop-vulnerability assessments — directly applicable to AgroVision's climate-coupled reasoning.",
          link: "https://doi.org/10.3390/math9233061",
        },
        {
          title:
            "MASSAI: Multi-agent system for simulating sustainable agricultural intensification of smallholder farms in Africa",
          year: "2023",
          venue: "Heliyon · ScienceDirect",
          description:
            "A multi-agent system that operationalises the Sustainable Agricultural Intensification framework. Pairs an Environmental Module (nutrient inputs and outputs) with a Behavioural Module (farmer decisions on fertilizer, manure, biological N fixation) to simulate sustainability trajectories on managed plots.",
          relevance:
            "Reference for separating environmental modelling from behavioural decision-making — informs AgroVision's split between Weather/Soil agents and the orchestrator/advisory layer.",
          link: "https://www.sciencedirect.com/science/article/pii/S2215016123004636",
        },
      ],
    },
    {
      id: "rag",
      label: "RAG",
      blurb:
        "Retrieval-Augmented Generation approaches that ground LLM responses in verified agricultural knowledge.",
      items: [
        {
          title:
            "Empowering farmers with artificial intelligence: a retrieval-augmented generation based large language model advisory framework",
          year: "2026",
          venue: "Journal of Agricultural Engineering",
          description:
            "A RAG-based agricultural advisory system covering crop cultivation, pest and disease management, and fertilizer application across five crops (maize, ragi, sweet potato, cotton, groundnut). Processes Package of Practices documents via semantic chunking and benchmarks four LLMs.",
          relevance:
            "Concrete evidence that RAG on government and extension-service documents produces deployable farmer advisory — supports AgroVision's choice to ground responses in verified agronomic corpora.",
          link: "https://www.agroengineering.org/jae/article/view/1908",
        },
        {
          title:
            "AgriIR: A Scalable Framework for Domain-Specific Knowledge Retrieval",
          authors: "S. Banerji Seal et al.",
          year: "2026",
          venue: "arXiv 2604.16353",
          description:
            "A configurable RAG framework that decomposes information access into declarative stages (query refinement, sub-query planning, retrieval, synthesis, evaluation). Integrates 1B-parameter LLMs with adaptive retrievers and enforces deterministic citation (59–73% perfect citation accuracy) to eliminate citation hallucination.",
          relevance:
            "Architectural reference for AgroVision's Agentic RAG layer — particularly the deterministic citation mechanism, which aligns with the Judge Agent and the project's 'no fabricated claims' stance.",
          link: "https://arxiv.org/abs/2604.16353",
        },
      ],
    },
  ] satisfies PaperCategory[],
} as const;
