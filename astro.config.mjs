// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

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
          label: "Development",
          items: [{ autogenerate: { directory: "development" } }],
        },
        // {
        //   label: "Guides",
        //   items: [{ label: "Example Guide", slug: "guides/example" }],
        // },
        // {
        //   label: "Reference",
        //   items: [{ autogenerate: { directory: "reference" } }],
        // },
      ],
    }),
  ],
});
