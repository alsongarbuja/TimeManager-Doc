// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import mermaid from "astro-mermaid";

// https://astro.build/config
export default defineConfig({
  site: "https://alsongarbuja.github.io",
  base: "/TimeManager-Doc/",
  integrations: [
    starlight({
      title: "Time manager Doc",
      customCss: [
        "@fontsource-variable/montserrat/wght.css",
        "./src/styles/custom.css",
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/alsongarbuja/TimeManager",
        },
      ],
      sidebar: [
        {
          label: "Overview",
          slug: "01-overview",
        },
        {
          label: "Development",
          items: [{ autogenerate: { directory: "development" } }],
        },
        {
          label: "Modules",
          items: [{ autogenerate: { directory: "modules" } }],
        },
        {
          label: "Components",
          items: [{ autogenerate: { directory: "components" } }],
        },
        {
          label: "Production",
          items: [{ autogenerate: { directory: "production" } }],
        },
      ],
    }),
    mermaid(),
  ],
});
