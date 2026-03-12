/** @type {import('zudoku').ZudokuConfig} */
const config = {
  basePath: "/zudoku",
  site: {
    title: "Zudoku API",
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: 116,
    },
  },
  theme: {
    light: {
      primary: "262 83% 58%",
      primaryForeground: "0 0% 100%",
      background: "0 0% 100%",
      foreground: "0 0% 4%",
      border: "0 0% 90%",
      muted: "0 0% 96%",
      mutedForeground: "0 0% 45%",
      accent: "262 83% 96%",
      accentForeground: "262 83% 30%",
      radius: "0.5rem",
    },
    dark: {
      primary: "262 83% 68%",
      primaryForeground: "0 0% 100%",
      background: "0 0% 7%",
      foreground: "0 0% 95%",
      border: "0 0% 18%",
      muted: "0 0% 12%",
      mutedForeground: "0 0% 60%",
      accent: "262 40% 20%",
      accentForeground: "262 83% 80%",
      card: "0 0% 10%",
      cardForeground: "0 0% 95%",
      radius: "0.5rem",
    },
    fonts: {
      sans: {
        url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
        name: "Inter",
      },
    },
  },
  syntaxHighlighting: {
    languages: ["http"],
  },
  navigation: [
    {
      type: "category",
      label: "Documentación",
      items: [
        {
          type: "category",
          label: "Introducción",
          icon: "sparkles",
          items: ["/introduction", "/example"],
        },
      ],
    },
    {
      type: "link",
      to: "/v1",
      label: "API V1",
    },
    {
      type: "link",
      to: "/organizers",
      label: "Organizer API",
    },
    {
      type: "link",
      to: "/rickandmorty",
      label: "Rick and Morty API",
    },
  ],
  docs: {
    files: "/pages/**/*.mdx",
  },
  apis: [
    {
      type: "file",
      input: "./.bundled/v1.yaml",
      path: "/v1",
      options: {
        showInfoPage: false,
      },
    },
    {
      type: "file",
      input: "./.bundled/organizers.yaml",
      path: "/organizers",
      options: {
        showInfoPage: false,
      },
    },
    {
      type: "file",
      input: "./.bundled/rickandmorty.yaml",
      path: "/rickandmorty",
      options: {
        showInfoPage: false,
      },
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
};

export default config;
