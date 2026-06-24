import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://agrovision-fyp22.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
