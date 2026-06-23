export type DatasetItem = {
  name: string;
  provider?: string;
  meta?: string;
  description: string;
  usage: string;
  link: string;
  image?: string;
};

export type DatasetCategory = {
  id: string;
  label: string;
  blurb?: string;
  items: DatasetItem[];
};

export const datasets = {
  hero: {
    eyebrow: "Datasets",
    title: "The data behind AgroVision.",
    intro:
      "AgroVision is grounded in public and open datasets — for diagnosis, forecasting, soil context, and pricing. Each source is listed below by category.",
  },

  categories: [
    {
      id: "crop-pest-imagery",
      label: "Crop & Pest Imagery",
      blurb:
        "Image datasets paired with question–answer annotations that power the Disease Agent.",
      items: [
        {
          name: "PlantVillageVQA",
          provider: "Hugging Face",
          meta: "55,448 leaf images · 193,609 Q&A pairs",
          description:
            "A Visual Question Answering dataset built on the PlantVillage plant-disease image collection. Each image is paired with natural-language questions and answers covering disease identification, severity, and treatment cues.",
          usage:
            "Grounds the Disease Agent's image diagnosis. The Q&A pairs let the agent answer farmer questions about plant symptoms directly from photos.",
          link: "https://huggingface.co/datasets/SyedNazmusSakib/PlantVillageVQA",
        },
        {
          name: "IP-VQA",
          provider: "GitHub",
          meta: "18,981 pest images · 5 Q&A pairs per image",
          description:
            "An Insect-Pest Visual Question Answering dataset. Each image is annotated with question–answer pairs covering pest identification, lifecycle stage, and damage signs.",
          usage:
            "Complements PlantVillageVQA. Drives pest identification in the Disease Agent and informs treatment recommendations.",
          link: "https://github.com/carrey-Jin/IP-VQA",
        },
      ],
    },
    {
      id: "weather-climate",
      label: "Weather & Climate",
      blurb:
        "Live and historical climate data the Weather Agent uses to ground recommendations in current conditions.",
      items: [
        {
          name: "Open-Meteo",
          provider: "Open-Meteo",
          description:
            "A free, open-source weather API providing global forecasts, historical climate data, and climate-model outputs. No API key required.",
          usage:
            "The Weather Agent's primary source for short-term forecasts that drive alerts, treatment plans, and the Smart Calculator's planting windows.",
          link: "https://open-meteo.com/",
        },
        {
          name: "NASA POWER",
          provider: "NASA",
          description:
            "NASA's Prediction of Worldwide Energy Resources — a global database of solar irradiance and meteorological data tuned for renewable-energy and agricultural applications.",
          usage:
            "Long-range climatology for the Soil Agent and the Smart Calculator — multi-year averages, solar load, and evapotranspiration baselines.",
          link: "https://power.larc.nasa.gov/",
        },
        {
          name: "JMA Himawari Data",
          provider: "Japan Meteorological Agency",
          description:
            "Real-time satellite imagery from JMA's Himawari geostationary weather satellites, covering the Asia-Pacific region including Sri Lanka.",
          usage:
            "Supplies the Weather Agent with current cloud cover and storm-system imagery for proactive environmental alerts.",
          link: "https://www.data.jma.go.jp/mscweb/data/himawari/",
        },
        {
          name: "Agro-met Advisory Reports",
          provider: "Department of Agriculture, Sri Lanka",
          description:
            "Periodic agro-meteorological advisories combining weather forecasts with crop-specific guidance, published by Sri Lanka's Department of Agriculture.",
          usage:
            "Feeds locally-authoritative seasonal guidance into the Smart Calculator and is cited in conversational responses to farmers.",
          link: "https://doa.gov.lk/agro-met-advisory/",
        },
      ],
    },
    {
      id: "soil",
      label: "Soil",
      blurb:
        "Soil property data that grounds the Soil Agent's fertility and irrigation recommendations.",
      items: [
        {
          name: "Nation-wide Open 3D Soil Database (Sri Lanka)",
          provider: "Geoderma Regional (Elsevier)",
          description:
            "A peer-reviewed, open-access 3D soil property database covering Sri Lanka. Provides soil characteristics at multiple depths across the country, published in Geoderma Regional.",
          usage:
            "Grounds the Soil Agent's location-aware fertility and irrigation recommendations.",
          link: "https://www.sciencedirect.com/science/article/pii/S235234092031235X",
        },
      ],
    },
    {
      id: "market-pricing",
      label: "Market & Pricing",
      blurb:
        "Commodity price data that powers price-aware planting decisions in the Smart Calculator.",
      items: [
        {
          name: "HARTI Daily Prices",
          provider: "Hector Kobbekaduwa Agrarian Research and Training Institute",
          description:
            "Daily wholesale and retail prices for agricultural commodities across Sri Lanka, published by HARTI.",
          usage:
            "Powers the Smart Calculator's price-aware crop selection so farmers can factor current market value and trends into planting decisions.",
          link: "https://www.harti.gov.lk/daily-price.php",
        },
      ],
    },
  ] satisfies DatasetCategory[],
} as const;
