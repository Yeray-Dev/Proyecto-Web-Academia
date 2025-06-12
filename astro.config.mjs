// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: 'https://yeray-dev.github.io',
  base: '/Proyecto-Web-Academia',


  vite: {
    plugins: [tailwindcss()],
  },
})

