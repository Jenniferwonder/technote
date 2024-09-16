import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="front-end-frameworks">Front-End Frameworks<a class="anchor" href="#front-end-frameworks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="ssg-frameworks"><a href="SSG-Frameworks">SSG Frameworks</a><a class="anchor" href="#ssg-frameworks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="react-based"><a href="private/p-react/react">react</a>-Based<a class="anchor" href="#react-based"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="Next.js">Next.js</a>\n<ul>\n<li>Redwood\n<ul>\n<li>Prisma, GraphQL, Jest, Storybook</li>\n<li>End-to-end workflow <strong>great for startups</strong></li>\n</ul>\n</li>\n<li>Blitz\n<ul>\n<li>NextJS Toolkit</li>\n<li>Typesafe Data layer, and Scaffolding</li>\n<li>Authentication</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Remix (React)\n<ul>\n<li>Native form component, loading states</li>\n</ul>\n</li>\n</ul>\n<h2 id="vue-based">Vue-Based<a class="anchor" href="#vue-based"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Nuxt.js (Vue)\n<ul>\n<li>Comparable to Next.js</li>\n<li>Hybrid rendering, Nitro server engine</li>\n</ul>\n</li>\n</ul>\n<h2 id="svelte-based">Svelte-Based<a class="anchor" href="#svelte-based"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Sveltekit (Svelte)\n<ul>\n<li>SSR, SSG, Routing…</li>\n<li>Hydrating the page: (骨架屏？)\n<ul>\n<li>Loads components <strong>on server</strong> first and send it to the client as HTMl, and render the components on the page again <strong>in the browser</strong> to make it interactive</li>\n</ul>\n</li>\n<li>You can control what you want to render on the server as well as the client</li>\n<li>User faced page - Server rendered vs Admin panel - SPA, <strong>Why</strong>?</li>\n</ul>\n</li>\n</ul>\n<h2 id="cwasm-based">C#/WASM-Based<a class="anchor" href="#cwasm-based"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Blazor (C#, WASM/ Web Assembly)\n<ul>\n<li>Hot reload, lazy loading, virtualization</li>\n</ul>\n</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230308095920.png" alt=""></li>\n</ul>',frontmatter={aliases:["Front-End Frameworks"],topic:null,type:null,category:"Front-End Frameworks",Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"Front-End Frameworks",tags:["React","NextJS","Vue","SSG","Svelte","Astro"],DateStarted:"2023-03-13T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:null,"linter-yaml-title-alias":"Front-End Frameworks",draft:!0,minutes:1,words:98},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/front-end-frameworks.md",url=void 0;function rawContent(){return"\n# Front-End Frameworks\n\n## [SSG Frameworks](SSG-Frameworks)\n\n## [react](private/p-react/react)-Based\n\n- [Next.js](Next.js)\n  - Redwood\n    - Prisma, GraphQL, Jest, Storybook\n    - End-to-end workflow **great for startups**\n  - Blitz\n    - NextJS Toolkit\n    - Typesafe Data layer, and Scaffolding\n    - Authentication\n- Remix (React)\n  - Native form component, loading states\n\n## Vue-Based\n\n- Nuxt.js (Vue)\n  - Comparable to Next.js\n  - Hybrid rendering, Nitro server engine\n\n## Svelte-Based\n\n- Sveltekit (Svelte)\n  - SSR, SSG, Routing...\n  - Hydrating the page: (骨架屏？)\n    - Loads components **on server** first and send it to the client as HTMl, and render the components on the page again **in the browser** to make it interactive\n  - You can control what you want to render on the server as well as the client\n  - User faced page - Server rendered vs Admin panel - SPA, **Why**?\n\n## C#/WASM-Based\n\n- Blazor (C#, WASM/ Web Assembly)\n  - Hot reload, lazy loading, virtualization\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230308095920.png)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"front-end-frameworks",text:"Front-End Frameworks#"},{depth:2,slug:"ssg-frameworks",text:"SSG Frameworks#"},{depth:2,slug:"react-based",text:"react-Based#"},{depth:2,slug:"vue-based",text:"Vue-Based#"},{depth:2,slug:"svelte-based",text:"Svelte-Based#"},{depth:2,slug:"cwasm-based",text:"C#/WASM-Based#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};