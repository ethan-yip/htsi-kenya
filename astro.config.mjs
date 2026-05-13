// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter",
        styles: ["italic", "normal", "oblique"],
        weights: ["100 900"]
    },
    {
        provider: fontProviders.fontsource(),
        name: "Playfair Display",
        cssVariable: "--font-playfair",
        weights: ["400 900"]
    }
  ]
});