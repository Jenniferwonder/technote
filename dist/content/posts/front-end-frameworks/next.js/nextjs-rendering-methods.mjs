import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/next.js/nextjs-rendering-methods.md",collection="posts",slug="front-end-frameworks/nextjs/nextjs-rendering-methods",body="\n# Next.js Rendering Methods\n\n### Reference\n\n- [Client Side Rendering Vs Server Side Rendering in React js & Next js | by Yudhajit Adhikary | Medium](https://yudhajitadhikary.medium.com/client-side-rendering-vs-server-side-rendering-in-react-js-next-js-b74b909c7c51)\n- [[Routing Methods]]\n- view-source: https://...\n\n### CSR\n\n- CSR-Client Side Rendering 客户端渲染\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102356.png)\n- Instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.\n- With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast.\n- Communication with server happens only for **getting the run-time data**. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.\n- **Pros of Client Side Rendering:**\n  - 1. Rich site interactions\n  - 2. Fast website rendering after the initial load.\n  - 3. Great for web applications.\n  - 4. Robust selection of JavaScript libraries.\n- **Cons of Client Side Rendering:**\n  - 1. Low SEO if not implemented correctly.\n  - 2. Initial load might require more time.\n  - 3. In most cases, requires an external library.\n\n### SSG\n\n- SSG-Static Site Generation 静态页面生成\n- In Next.js, by default, all pages will be cached to provide the performance of a static site\n- [SSG Frameworks](SSG-Frameworks)\n\n### SSR\n\n- SSR-Server Side Rendering 服务端渲染\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102929.png)\n- But if you want new data on every request like SSR, you can add `{cache: 'no-store'}` option to fetch, or for ISR , use the `{next:{revalidate:420}}` option with the number of revalidate seconds.\n- In **server-side rendering** when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then constructs the content and displays the page. This entire process of fetching data from the database, creating an HTML page and sending it to client happens in mere milliseconds.\n- **Pros of Server Side Rendering** :\n  - 1. Search engines can crawl the site for better SEO.\n  - 2. The initial page load is faster.\n  - 3. Great for **static sites**.\n- **Cons of Server Side Rendering:**\n  - 1. Frequent server requests.\n  - 2. An overall slow page rendering.\n  - 3. Full page reloads.\n  - 4. Non-rich site interactions\n\n### ISR\n\n- ISR-Incremental Static Regeneration 增量静态重生成\n- The UI can be incrementally streamed in thanks to React suspense. Just need to define a `loading.js` file to define the UI. If a component is still awaiting data, it'll automatically show it at the component level, while rendering everything else in the application.\n",data={title:"Next.js Rendering Methods",DateStarted:new Date(17013024e5),tags:["NextJS"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/next.js/nextjs-rendering-methods.md",rawData:void 0},html='<h1 id="nextjs-rendering-methods">Next.js Rendering Methods<a class="anchor" href="#nextjs-rendering-methods"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://yudhajitadhikary.medium.com/client-side-rendering-vs-server-side-rendering-in-react-js-next-js-b74b909c7c51">Client Side Rendering Vs Server Side Rendering in React js &#x26; Next js | by Yudhajit Adhikary | Medium</a></li>\n<li>[[Routing Methods]]</li>\n<li>view-source: https://…</li>\n</ul>\n<h3 id="csr">CSR<a class="anchor" href="#csr"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>CSR-Client Side Rendering 客户端渲染</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102356.png" alt=""></li>\n<li>Instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.</li>\n<li>With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast.</li>\n<li>Communication with server happens only for <strong>getting the run-time data</strong>. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.</li>\n<li><strong>Pros of Client Side Rendering:</strong>\n<ul>\n<li>\n<ol>\n<li>Rich site interactions</li>\n</ol>\n</li>\n<li>\n<ol start="2">\n<li>Fast website rendering after the initial load.</li>\n</ol>\n</li>\n<li>\n<ol start="3">\n<li>Great for web applications.</li>\n</ol>\n</li>\n<li>\n<ol start="4">\n<li>Robust selection of JavaScript libraries.</li>\n</ol>\n</li>\n</ul>\n</li>\n<li><strong>Cons of Client Side Rendering:</strong>\n<ul>\n<li>\n<ol>\n<li>Low SEO if not implemented correctly.</li>\n</ol>\n</li>\n<li>\n<ol start="2">\n<li>Initial load might require more time.</li>\n</ol>\n</li>\n<li>\n<ol start="3">\n<li>In most cases, requires an external library.</li>\n</ol>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="ssg">SSG<a class="anchor" href="#ssg"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>SSG-Static Site Generation 静态页面生成</li>\n<li>In Next.js, by default, all pages will be cached to provide the performance of a static site</li>\n<li><a href="SSG-Frameworks">SSG Frameworks</a></li>\n</ul>\n<h3 id="ssr">SSR<a class="anchor" href="#ssr"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>SSR-Server Side Rendering 服务端渲染</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102929.png" alt=""></li>\n<li>But if you want new data on every request like SSR, you can add <code>{cache: \'no-store\'}</code> option to fetch, or for ISR , use the <code>{next:{revalidate:420}}</code> option with the number of revalidate seconds.</li>\n<li>In <strong>server-side rendering</strong> when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then constructs the content and displays the page. This entire process of fetching data from the database, creating an HTML page and sending it to client happens in mere milliseconds.</li>\n<li><strong>Pros of Server Side Rendering</strong> :\n<ul>\n<li>\n<ol>\n<li>Search engines can crawl the site for better SEO.</li>\n</ol>\n</li>\n<li>\n<ol start="2">\n<li>The initial page load is faster.</li>\n</ol>\n</li>\n<li>\n<ol start="3">\n<li>Great for <strong>static sites</strong>.</li>\n</ol>\n</li>\n</ul>\n</li>\n<li><strong>Cons of Server Side Rendering:</strong>\n<ul>\n<li>\n<ol>\n<li>Frequent server requests.</li>\n</ol>\n</li>\n<li>\n<ol start="2">\n<li>An overall slow page rendering.</li>\n</ol>\n</li>\n<li>\n<ol start="3">\n<li>Full page reloads.</li>\n</ol>\n</li>\n<li>\n<ol start="4">\n<li>Non-rich site interactions</li>\n</ol>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="isr">ISR<a class="anchor" href="#isr"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>ISR-Incremental Static Regeneration 增量静态重生成</li>\n<li>The UI can be incrementally streamed in thanks to React suspense. Just need to define a <code>loading.js</code> file to define the UI. If a component is still awaiting data, it’ll automatically show it at the component level, while rendering everything else in the application.</li>\n</ul>',frontmatter={topic:null,Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["Next.js Rendering Methods"],title:"Next.js Rendering Methods",type:"D",tags:["NextJS"],status:null,DateStarted:"2023-11-30T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",category:"Front-End Frameworks","linter-yaml-title-alias":"Next.js Rendering Methods",minutes:2,words:384},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/next.js/nextjs-rendering-methods.md",url=void 0;function rawContent(){return"\n# Next.js Rendering Methods\n\n### Reference\n\n- [Client Side Rendering Vs Server Side Rendering in React js & Next js | by Yudhajit Adhikary | Medium](https://yudhajitadhikary.medium.com/client-side-rendering-vs-server-side-rendering-in-react-js-next-js-b74b909c7c51)\n- [[Routing Methods]]\n- view-source: https://...\n\n### CSR\n\n- CSR-Client Side Rendering 客户端渲染\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102356.png)\n- Instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.\n- With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast.\n- Communication with server happens only for **getting the run-time data**. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.\n- **Pros of Client Side Rendering:**\n  - 1. Rich site interactions\n  - 2. Fast website rendering after the initial load.\n  - 3. Great for web applications.\n  - 4. Robust selection of JavaScript libraries.\n- **Cons of Client Side Rendering:**\n  - 1. Low SEO if not implemented correctly.\n  - 2. Initial load might require more time.\n  - 3. In most cases, requires an external library.\n\n### SSG\n\n- SSG-Static Site Generation 静态页面生成\n- In Next.js, by default, all pages will be cached to provide the performance of a static site\n- [SSG Frameworks](SSG-Frameworks)\n\n### SSR\n\n- SSR-Server Side Rendering 服务端渲染\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102929.png)\n- But if you want new data on every request like SSR, you can add `{cache: 'no-store'}` option to fetch, or for ISR , use the `{next:{revalidate:420}}` option with the number of revalidate seconds.\n- In **server-side rendering** when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then constructs the content and displays the page. This entire process of fetching data from the database, creating an HTML page and sending it to client happens in mere milliseconds.\n- **Pros of Server Side Rendering** :\n  - 1. Search engines can crawl the site for better SEO.\n  - 2. The initial page load is faster.\n  - 3. Great for **static sites**.\n- **Cons of Server Side Rendering:**\n  - 1. Frequent server requests.\n  - 2. An overall slow page rendering.\n  - 3. Full page reloads.\n  - 4. Non-rich site interactions\n\n### ISR\n\n- ISR-Incremental Static Regeneration 增量静态重生成\n- The UI can be incrementally streamed in thanks to React suspense. Just need to define a `loading.js` file to define the UI. If a component is still awaiting data, it'll automatically show it at the component level, while rendering everything else in the application.\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"nextjs-rendering-methods",text:"Next.js Rendering Methods#"},{depth:3,slug:"reference",text:"Reference#"},{depth:3,slug:"csr",text:"CSR#"},{depth:3,slug:"ssg",text:"SSG#"},{depth:3,slug:"ssr",text:"SSR#"},{depth:3,slug:"isr",text:"ISR#"}]}const Content=createComponent(((e,n,t)=>{const{layout:i,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),nextjsRenderingMethods=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,nextjsRenderingMethods,slug};