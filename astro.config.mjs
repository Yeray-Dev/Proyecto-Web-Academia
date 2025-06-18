// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yeray-dev.github.io',
  base: '/Proyecto-Web-Academia',
  integrations: [tailwind(), react()],



  // vite: {
  //   plugins: [tailwindcss()],
  // },
})