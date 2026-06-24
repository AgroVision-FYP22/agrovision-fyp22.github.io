export type FeatureIconKey =
  | "assistant"
  | "calculator"
  | "map"
  | "users";

export type RoleIconKey =
  | "farmer"
  | "agronomist"
  | "officer"
  | "researcher";

export type ImpactMetric = {
  id: string;
  title: string;
  description: string;
};

export type ProblemItem = {
  id: string;
  title: string;
  description: string;
};

export type Feature = {
  iconKey: FeatureIconKey;
  title: string;
  description: string;
};

export type Role = {
  iconKey: RoleIconKey;
  title: string;
  description: string;
};

export type ComparisonColumn = {
  label: string;
  title: string;
  points: string[];
};

export type SDG = {
  number: string;
  title: string;
  image: string;
  contribution: string;
};

export const home = {
  hero: {
    eyebrow: "Climate-Resilient Agriculture",
    title: "AgroVision",
    tagline:
      "Diagnose crops, plan seasons, and catch outbreaks early — an AI agronomist built for Sri Lankan farmers.",
    primaryCta: { label: "Explore", href: "#problem" },
    secondaryCta: { label: "About Our System", href: "/about" },
    backgroundImage: "/images/hero-bg.webp",
  },

  problem: {
    eyebrow: "The Problem",
    heading: "Sri Lankan farming runs on guesswork.",
    subheading:
      "Across thousands of small farms, every season starts with the same questions — and the same blind spots.",
    items: [
      {
        id: "01",
        title: "Weather hits without warning",
        description:
          "Floods, droughts, and heatwaves destroy harvests before farmers can prepare or protect their crops.",
      },
      {
        id: "02",
        title: "Pests spread faster than they're spotted",
        description:
          "By the time an outbreak is identified in one village, it has already reached neighbouring fields.",
      },
      {
        id: "03",
        title: "Advice ignores local context",
        description:
          "Generic SMS tips and static brochures can't account for your specific field, season, or soil.",
      },
      {
        id: "04",
        title: "Expertise is out of reach",
        description:
          "One agronomist serves thousands of farmers — most never get a direct answer when they need one.",
      },
    ] satisfies ProblemItem[],
  },

  impact: {
    eyebrow: "Why It Matters",
    heading: "What AgroVision changes.",
    items: [
      {
        id: "01",
        title: "Climate Resilience",
        description:
          "Prevent crop losses from extreme weather, pests, and unpredictable seasons with early, data-backed alerts.",
      },
      {
        id: "02",
        title: "Resource Efficiency",
        description:
          "Coordinate water and input use across fields — no more guesswork, no more waste.",
      },
      {
        id: "03",
        title: "Democratized Expertise",
        description:
          "Bring an always-on digital agronomist to every rural community, in plain language.",
      },
    ] satisfies ImpactMetric[],
  },

  features: {
    eyebrow: "What It Does",
    heading: "Four modules. One coordinated agricultural mind.",
    subheading:
      "A multi-agent system orchestrated around your field, your season, and your region.",
    items: [
      {
        iconKey: "assistant",
        title: "Digital Assistant",
        description:
          "Chat to diagnose field issues and get step-by-step treatment plans tuned to live conditions.",
      },
      {
        iconKey: "calculator",
        title: "Smart Calculator",
        description:
          "Pick the right crop and planting window from water calendars, price predictions, and advisories.",
      },
      {
        iconKey: "map",
        title: "Regional Heatmap",
        description:
          "Track disease and pest outbreaks across regions on a live GIS map — see threats before they spread.",
      },
      {
        iconKey: "users",
        title: "Community & Expert Hub",
        description:
          "Ask questions and get answers from agronomists, neighbours, and verified specialists.",
      },
    ] satisfies Feature[],
  },

  userRoles: {
    eyebrow: "Who It's For",
    heading: "Built for every role in the agricultural chain.",
    subheading:
      "One platform, four perspectives — each with the tools they actually need.",
    items: [
      {
        iconKey: "farmer",
        title: "Farmers",
        description:
          "Get daily field guidance, early outbreak alerts, and treatment steps in your own language.",
      },
      {
        iconKey: "agronomist",
        title: "Agronomists",
        description:
          "Answer farmer questions at scale and publish verified advice for your region.",
      },
      {
        iconKey: "officer",
        title: "Agricultural Officers",
        description:
          "Monitor regional outbreaks live and coordinate response across districts from one dashboard.",
      },
      {
        iconKey: "researcher",
        title: "Researchers",
        description:
          "Tap anonymised field data to study crop trends and inform local agricultural policy.",
      },
    ] satisfies Role[],
  },

  uniqueness: {
    eyebrow: "The Innovation",
    heading: "A unified intelligence — not another isolated tool.",
    oldWay: {
      label: "The Old Way",
      title: "Fragmented, static, blind to context.",
      points: [
        "Static SMS notifications that ignore live conditions.",
        "Isolated image diagnostics that miss climate context.",
        "Disconnected advice that fails when seasons shift.",
      ],
    } satisfies ComparisonColumn,
    edge: {
      label: "The AgroVision Edge",
      title: "Context-aware, agentic, climate-coupled.",
      points: [
        "A multi-agent system that reasons like an agronomist.",
        "Cross-checks visual symptoms against live climate data before recommending action.",
        "Weather-adaptive treatment plans tuned to your specific region.",
      ],
    } satisfies ComparisonColumn,
  },

  sdg: {
    eyebrow: "Sustainability Alignment",
    heading: "Built to advance the UN Sustainable Development Goals.",
    subheading:
      "Every feature in AgroVision maps directly to a global goal for sustainable, equitable agriculture.",
    items: [
      {
        number: "02",
        title: "Zero Hunger",
        image: "/images/sdg/E_SDG_Icons-02.jpg",
        contribution:
          "Boost yields and reduce post-harvest losses so more food reaches the table.",
      },
      {
        number: "06",
        title: "Clean Water & Sanitation",
        image: "/images/sdg/E_SDG_Icons-06.jpg",
        contribution:
          "Inform irrigation decisions with live water release calendars so clean water is used sparingly.",
      },
      {
        number: "12",
        title: "Responsible Consumption",
        image: "/images/sdg/E_SDG_Icons-12.jpg",
        contribution:
          "Cut wasted water, fertilizer, and pesticide use with field-specific guidance.",
      },
      {
        number: "13",
        title: "Climate Action",
        image: "/images/sdg/E_SDG_Icons-13.jpg",
        contribution:
          "Help farmers adapt planting and protection to a shifting climate, season by season.",
      },
      {
        number: "15",
        title: "Life on Land",
        image: "/images/sdg/E_SDG_Icons-15.jpg",
        contribution:
          "Encourage sustainable land use through targeted, low-impact crop protection.",
      },
    ] satisfies SDG[],
  },
} as const;
