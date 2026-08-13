// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    inlineStylesheets: "always",
  },

  // Dominio canónico (sin www). Debe coincidir con SITE.url en src/consts.ts,
  // que es lo que alimenta el canonical, og:url y el JSON-LD.
  site: "https://drafernandez.com.ar",

  // Precarga la página al pasar el mouse por un link interno.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
});
