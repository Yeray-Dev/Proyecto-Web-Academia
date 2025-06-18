// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yeray-dev.github.io',
  base: '/Proyecto-Web-Academia',
  integrations: [tailwind()],



  // vite: {
  //   plugins: [tailwindcss()],
  // },
})

