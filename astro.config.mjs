import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://frontier.templates.springmicrohost.com",
  integrations: [
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
mdx(),
prefetch(),
react(),
sitemap(),
tailwind({ applyBaseStyles: false })
  ],
  vite: {
    ssr: {
      noExternal: ["react-icons"],
    },
  },
});