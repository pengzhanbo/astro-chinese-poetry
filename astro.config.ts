// import mdx from '@astrojs/mdx'
// import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://poetry.pengzhanbo.cn',
  integrations: [
    tailwind(),
    // preact(),
    // mdx()
  ],
  compressHTML: true,
})
