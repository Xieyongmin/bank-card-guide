import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from "astro-icon"
import partytown from '@astrojs/partytown'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site:'https://bankcardguide.midware.dev',
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false,
  }), compress(), partytown({
    forward: ['dataLayer.push'],
}), sitemap()],
})
