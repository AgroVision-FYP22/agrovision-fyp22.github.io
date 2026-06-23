export type NavLink = {
  label: string;
  href: string;
};

export const site = {
  brand: "AgroVision",
  tagline: "AI-powered decision support for climate-resilient agriculture.",
  url: "https://agrovision.lk",
  description:
    "AgroVision is a Multi-Agent AI assistant that helps farmers and agricultural officers diagnose crop issues, plan seasons, and track regional outbreaks.",

  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Datasets", href: "/datasets" },
    { label: "References", href: "/references" },
  ] satisfies NavLink[],

  cta: {
    label: "Contact Us",
    href: "/contact",
  },

  footer: {
    blurb:
      "Bringing context-aware agricultural expertise to every field, every season.",
    columns: [
      {
        heading: "Product",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Datasets", href: "/datasets" },
          { label: "References", href: "/references" },
        ],
      },
      {
        heading: "Resources",
        links: [
          { label: "Documentation", href: "#" },
          { label: "Contact", href: "#contact" },
        ],
      },
    ],
    copyright: "© 2026 AgroVision. All rights reserved.",
  },
} as const;
