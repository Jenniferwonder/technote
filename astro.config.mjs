import sitemap from '@astrojs/sitemap'
import svelte from '@astrojs/svelte'
import tailwind from '@astrojs/tailwind'
import swup from '@swup/astro'
import { defineConfig } from 'astro/config'
import Compress from 'astro-compress'
import icon from 'astro-icon'
import Color from 'colorjs.io'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeComponents from 'rehype-components'
import rehypeKatex from 'rehype-katex' /* Render the custom directive content */
import rehypeSlug from 'rehype-slug' /* Handle directives */
import remarkDirective from 'remark-directive'
import remarkGithubAdmonitionsToDirectives from 'remark-github-admonitions-to-directives'
import remarkMath from 'remark-math'
import { AdmonitionComponent } from './src/plugins/rehype-component-admonition.mjs'
import { GithubCardComponent } from './src/plugins/rehype-component-github-card.mjs'
import { parseDirectiveNode } from './src/plugins/remark-directive-rehype.js'
import { remarkExcerpt } from './src/plugins/remark-excerpt.js'
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs'

function oklchToHex(str) {
  const DEFAULT_HUE = 250
  const regex = /-?\d+(\.\d+)?/g
  const matches = str.string.match(regex)
  const lch = [matches[0], matches[1], DEFAULT_HUE]
  return new Color('oklch', lch).to('srgb').toString({
    format: 'hex',
  })
}

// https://astro.build/config
export default defineConfig({
  site: 'https://jenniferwonder.github.io/technote',
  base: '/technote',
  prefetch: {
    defaultStrategy: 'hover',
    prefetchAll: true,
  },
  experimental: {
    contentCollectionCache: true,
  },
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en", "es", "pt-br"],
  //   routing: {
  //     prefixDefaultLocale: false
  // }
  // },
  // trailingSlash: "always",
  integrations: [
    tailwind(),
    swup({
      theme: false,
      animationClass: 'transition-swup-', // see https://swup.js.org/options/#animationselector
      // the default value `transition-` cause transition delay
      // when the Tailwind class `transition-all` is used
      containers: ['main'],
      smoothScrolling: true,
      cache: true,
      preload: true,
      accessibility: true,
      updateHead: true,
      updateBodyClass: false,
      globalInstance: true,
    }),
    icon({
      include: {
        'material-symbols': ['*'],
        'fa6-brands': ['*'],
        'fa6-regular': ['*'],
        'fa6-solid': ['*'],
      },
    }),
    svelte(),
    sitemap(),
    Compress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true, // https://github.com/PlayForm/Compress/issues/376
      },
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkMath,
      remarkReadingTime,
      remarkExcerpt,
      remarkGithubAdmonitionsToDirectives,
      remarkDirective,
      parseDirectiveNode,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeSlug,
      [
        rehypeComponents,
        {
          components: {
            github: GithubCardComponent,
            note: (x, y) => AdmonitionComponent(x, y, 'note'),
            tip: (x, y) => AdmonitionComponent(x, y, 'tip'),
            important: (x, y) => AdmonitionComponent(x, y, 'important'),
            caution: (x, y) => AdmonitionComponent(x, y, 'caution'),
            warning: (x, y) => AdmonitionComponent(x, y, 'warning'),
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'append',
          properties: {
            className: ['anchor'],
          },
          content: {
            type: 'element',
            tagName: 'span',
            properties: {
              'className': ['anchor-icon'],
              'data-pagefind-ignore': true,
            },
            children: [
              {
                type: 'text',
                value: '#',
              },
            ],
          },
        },
      ],
    ],
  },
  vite: {
    build: {
      rollupOptions: {
        external: 'technote/pagefind/pagefind.js',
        // onwarn(warning, warn) {
        //   // temporarily suppress this warning
        //   if (
        //     warning.message.includes("is dynamically imported by") &&
        //     warning.message.includes("but also statically imported by")
        //   ) {
        //     return;
        //   }
        //   warn(warning);
        // },
      },
    },
    css: {
      preprocessorOptions: {
        stylus: {
          define: {
            oklchToHex,
          },
        },
      },
    },
  },
})
