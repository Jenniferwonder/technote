import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="front-end-practice">Front-End Practice<a class="anchor" href="#front-end-practice"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="️developer-experience">🏷️Developer Experience<a class="anchor" href="#️developer-experience"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="teams-experience-building-and-maintaining-your-application">team’s experience building and maintaining your application.<a class="anchor" href="#teams-experience-building-and-maintaining-your-application"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="typescript"><a href="TypeScript">TypeScript</a><a class="anchor" href="#typescript"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="️ui">🏷️UI<a class="anchor" href="#️ui"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="from-design-to-code">💡From Design to Code<a class="anchor" href="#from-design-to-code"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>how users will consume and interact with your application.</li>\n</ul>\n<h3 id="front-end-frameworks">Front-End Frameworks<a class="anchor" href="#front-end-frameworks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>HTML in JS\n<ul>\n<li>📌<a href="private/p-react/react">react</a></li>\n</ul>\n</li>\n<li>JS in HTML\n<ul>\n<li>📌<a href="O-Vue">Vue</a></li>\n<li>📌<a href="O-Svelte">Svelte</a></li>\n</ul>\n</li>\n</ul>\n<h3 id="ui-styling">UI Styling<a class="anchor" href="#ui-styling"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>📌HTML</li>\n<li>📌CSS\n<ul>\n<li>CSS Fundamentals</li>\n<li>CSS Support\n<ul>\n<li>Sass</li>\n<li>TailwindCSS</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="ui-events--interaction">UI Events &#x26; Interaction<a class="anchor" href="#ui-events--interaction"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>📌JS\n<ul>\n<li>JS Fundamentals</li>\n</ul>\n</li>\n</ul>\n<h3 id="component-library">Component Library<a class="anchor" href="#component-library"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>React Component Lib\n<ul>\n<li>Styled-JSX</li>\n<li>📌Use Component Lib</li>\n<li>🏷️<a href="Front-End/CDD/README">README</a></li>\n</ul>\n</li>\n<li>Vue Component Lib</li>\n<li>Svelte Component Lib</li>\n</ul>\n<h2 id="️component-driven-development">🏷️<a href="Component-Driven-Development">Component-Driven Development</a><a class="anchor" href="#️component-driven-development"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="project-init"><a href="Project-Init">Project-Init</a><a class="anchor" href="#project-init"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="testing"><a href="Testing">Testing</a><a class="anchor" href="#testing"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="compilers-and-bundlers"><a href="Compilers-and-Bundlers">Compilers and Bundlers</a><a class="anchor" href="#compilers-and-bundlers"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="placeholder-data">📌Placeholder Data<a class="anchor" href="#placeholder-data"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="use-placeholder-data-in-json-format-or-as-javascript-objects">Use placeholder data in JSON format or as JavaScript objects.<a class="anchor" href="#use-placeholder-data-in-json-format-or-as-javascript-objects"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="use-a-3rd-party-service-like-mockapi">Use a 3rd party service like <a href="https://mockapi.io/">mockAPI</a>.<a class="anchor" href="#use-a-3rd-party-service-like-mockapi"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="️routing">🏷️<a href="Routing">Routing</a><a class="anchor" href="#️routing"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="how-users-navigate-between-different-parts-of-your-application">how users navigate between different parts of your application.<a class="anchor" href="#how-users-navigate-between-different-parts-of-your-application"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="react-router-dom">React Router Dom<a class="anchor" href="#react-router-dom"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="nextjs">📌<a href="../front-end-frameworks/next.js/o-nextjs.md">NextJS</a><a class="anchor" href="#nextjs"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Advanced Routing &#x26; Nested Layouts\n<ul>\n<li>Directory based routing system\n<ul>\n<li><em>React Router Dom</em> is not needed with Next.js</li>\n<li>Use a new app directory using <em>file system based routing</em> like before, but now it’s also <em>directory based</em></li>\n<li>To creat a page, you give the directory the name of the route, then create a <code>page.js</code> file to it that exports the component you want to display there.\n<ul>\n<li>We can co-locate extra components in that directory as well instead of needing to create a separate component directory</li>\n</ul>\n</li>\n<li>It opens the door to layouts and nested routing - When you create a <code>layout.js</code>, it creates a UI that can be <em>inherited</em> by the child routes\n<ul>\n<li>When navigate to a route inside of a layout, only the inner UI is rendered as opposed to the entire page.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>support for more advanced routing patterns and UI layouts</li>\n<li>Easily fetch data for your entire layout</li>\n<li>Also it has file naming conventions for <em>loading</em> and <em>error</em> that can render a different UI <em>at the component level</em> based on its current state.\n<ul>\n<li>If a component breaks, it’ll render <code>error.js</code> instead of <code>page.js</code>. The rest of the UI stays intact.</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Middleware\n<ul>\n<li>Take control of incoming request</li>\n<li>Use code to define routing and access rules for authentication, experimentation, and internationalization</li>\n</ul>\n</li>\n</ul>\n<h2 id="️data-fetching">🏷️<a href="Data-Fetching">Data Fetching</a><a class="anchor" href="#️data-fetching"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="where-your-data-lives-and-how-to-get-it">where your data lives and how to get it.<a class="anchor" href="#where-your-data-lives-and-how-to-get-it"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="react-query">React Query<a class="anchor" href="#react-query"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="nextjs-1">📌<a href="../front-end-frameworks/next.js/o-nextjs.md">NextJS</a><a class="anchor" href="#nextjs-1"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Make React component async and await your data\n<ul>\n<li>Now we can totally get rid of things like <code>getStaticProps</code>, and <code>getServerSideProps</code> , instead we can write a plain JS function uses <code>fetch</code> (<code>async function...await</code>) and <code>await</code> the result of that function directly in a component, no need to pass props back and forth between client and server.\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230227195806.png" alt=""></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Support both client and server data fetching</li>\n</ul>\n<h2 id="️rendering">🏷️Rendering<a class="anchor" href="#️rendering"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="the-environment-where-your-code-runs">The environment where your code runs<a class="anchor" href="#the-environment-where-your-code-runs"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Development vs. Production</li>\n</ul>\n<h3 id="when-and-where-you-render-static-or-dynamic-content">when and where you render static or dynamic content.<a class="anchor" href="#when-and-where-you-render-static-or-dynamic-content"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><em>When</em> your code runs\n<ul>\n<li>Build Time vs. Runtime</li>\n</ul>\n</li>\n<li><em>Where</em> rendering happens\n<ul>\n<li>Client vs. Server</li>\n</ul>\n</li>\n</ul>\n<h3 id="nextjs-2">📌<a href="../front-end-frameworks/next.js/o-nextjs.md">NextJS</a><a class="anchor" href="#nextjs-2"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="️integrations-3rd-party-services">🏷️Integrations (3rd-Party Services)<a class="anchor" href="#️integrations-3rd-party-services"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="what-third-party-services-you-use-cms-auth-payments-etc-and-how-you-connect-to-them">what third-party services you use (CMS, auth, payments, etc) and how you connect to them.<a class="anchor" href="#what-third-party-services-you-use-cms-auth-payments-etc-and-how-you-connect-to-them"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="cms">CMS<a class="anchor" href="#cms"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="authentication"><a href="Authentication">Authentication</a><a class="anchor" href="#authentication"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="payments">Payments<a class="anchor" href="#payments"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="user-analytics"><a href="User-Analytics">User Analytics</a><a class="anchor" href="#user-analytics"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="%E4%B8%89%E6%96%B9%E6%9C%8D%E5%8A%A1%E2%80%94%E2%80%94%E8%AE%BF%E9%97%AE%E7%BB%9F%E8%AE%A1%E4%B8%8E%E5%88%86%E6%9E%90">三方服务——访问统计与分析</a></li>\n</ul>\n<h3 id="三方服务评论功能"><a href="%E4%B8%89%E6%96%B9%E6%9C%8D%E5%8A%A1%E2%80%94%E2%80%94%E8%AF%84%E8%AE%BA%E5%8A%9F%E8%83%BD">三方服务——评论功能</a><a class="anchor" href="#三方服务评论功能"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="nextjs-3">📌<a href="../front-end-frameworks/next.js/o-nextjs.md">NextJS</a><a class="anchor" href="#nextjs-3"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Route Handlers\n<ul>\n<li>Build API endpoints to securely connect with 3rd party services and consume from your frontend</li>\n</ul>\n</li>\n</ul>\n<h2 id="️infrastructure">🏷️Infrastructure<a class="anchor" href="#️infrastructure"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="where-you-deploy-store-and-run-your-application-code">where you deploy, store, and run your application code<a class="anchor" href="#where-you-deploy-store-and-run-your-application-code"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="deploying"><a href="Deploying">Deploying</a><a class="anchor" href="#deploying"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Vercel</li>\n<li>Netlify</li>\n</ul>\n<h3 id="serverless">Serverless<a class="anchor" href="#serverless"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="edge">Edge<a class="anchor" href="#edge"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="cdn">CDN<a class="anchor" href="#cdn"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="nodejs">NodeJS<a class="anchor" href="#nodejs"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="代理-nginx"><a href="deployment/%E4%BB%A3%E7%90%86-nginx.md">代理-nginx</a><a class="anchor" href="#代理-nginx"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="️front-end-performance-optimization">🏷️<a href="Front-End-Performance-Optimization">Front-End Performance Optimization</a><a class="anchor" href="#️front-end-performance-optimization"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="how-to-optimize-your-application-for-end-users">how to optimize your application for end-users.<a class="anchor" href="#how-to-optimize-your-application-for-end-users"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="bundler">Bundler<a class="anchor" href="#bundler"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Webpack</li>\n<li>Vite</li>\n<li>📌<a href="../front-end-frameworks/next.js/o-nextjs.md">NextJS</a>\n<ul>\n<li>Turbopack\n<ul>\n<li>It’s faster than Create-React-App\n<ul>\n<li>4x faster cold starts than Webpack</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="compiler--minification">Compiler (&#x26; minification)<a class="anchor" href="#compiler--minification"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Babel</li>\n<li>📌<a href="../front-end-frameworks/next.js/o-nextjs.md">NextJS</a>\n<ul>\n<li>Speedy Web Compiler (SWC)\n<ul>\n<li>It also uses SWC (Speedy Web Compiler) same as Vite based on Rust which is faster than Babel as a compiler\n<ul>\n<li>10x Faster than Vite</li>\n<li>700x Faster updates than Webpack (Plugins)</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Hot Reloading support.</li>\n<li>Automatic code splitting and lazy loading.</li>\n</ul>\n</li>\n</ul>\n<h3 id="nextjs-4">📌<a href="../front-end-frameworks/next.js/o-nextjs.md">NextJS</a><a class="anchor" href="#nextjs-4"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Built-in Optimizations for improved UX and Core Web Vitals\n<ul>\n<li>Image\n<ul>\n<li>Vercel 0G Image Generation</li>\n<li>next/image: optimize images on demand</li>\n</ul>\n</li>\n<li>Font\n<ul>\n<li>next/font: custom typefaces for your brand</li>\n</ul>\n</li>\n<li>Link\n<ul>\n<li>next/link: increase your engagement rate</li>\n</ul>\n</li>\n<li>Script</li>\n</ul>\n</li>\n</ul>\n<h2 id="️scalability">🏷️Scalability<a class="anchor" href="#️scalability"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="how-your-application-adapts-as-your-team-data-and-traffic-grow">how your application adapts as your team, data, and traffic grow.<a class="anchor" href="#how-your-application-adapts-as-your-team-data-and-traffic-grow"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={topic:null,category:"Front-End Tooling",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["Front-End Practice"],title:"Front-End Practice",type:"O",tags:["DevPractice"],DateStarted:"2023-12-21T00:00:00.000Z",DateModified:"2024-05-10T00:00:00.000Z",status:null,"linter-yaml-title-alias":"Front-End Practice",draft:!0,minutes:3,words:513},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-tooling/front-end-tooling.md",url=void 0;function rawContent(){return"\n# Front-End Practice\n\n## 🏷️Developer Experience\n\n### team’s experience building and maintaining your application.\n\n### [TypeScript](TypeScript)\n\n## 🏷️UI\n\n### 💡From Design to Code\n\n- how users will consume and interact with your application.\n\n### Front-End Frameworks\n\n- HTML in JS\n  - 📌[react](private/p-react/react)\n- JS in HTML\n  - 📌[Vue](O-Vue)\n  - 📌[Svelte](O-Svelte)\n\n### UI Styling\n\n- 📌HTML\n- 📌CSS\n  - CSS Fundamentals\n  - CSS Support\n    - Sass\n    - TailwindCSS\n\n### UI Events & Interaction\n\n- 📌JS\n  - JS Fundamentals\n\n### Component Library\n\n- React Component Lib\n  - Styled-JSX\n  - 📌Use Component Lib\n  - 🏷️[README](Front-End/CDD/README)\n- Vue Component Lib\n- Svelte Component Lib\n\n## 🏷️[Component-Driven Development](Component-Driven-Development)\n\n### [Project-Init](Project-Init)\n\n### [Testing](Testing)\n\n### [Compilers and Bundlers](Compilers-and-Bundlers)\n\n## 📌Placeholder Data\n\n### Use placeholder data in JSON format or as JavaScript objects.\n\n### Use a 3rd party service like [mockAPI](https://mockapi.io/).\n\n## 🏷️[Routing](Routing)\n\n### how users navigate between different parts of your application.\n\n### React Router Dom\n\n### 📌[NextJS](../front-end-frameworks/next.js/o-nextjs.md)\n\n- Advanced Routing & Nested Layouts\n  - Directory based routing system\n    - _React Router Dom_ is not needed with Next.js\n    - Use a new app directory using _file system based routing_ like before, but now it's also _directory based_\n    - To creat a page, you give the directory the name of the route, then create a `page.js` file to it that exports the component you want to display there.\n      - We can co-locate extra components in that directory as well instead of needing to create a separate component directory\n    - It opens the door to layouts and nested routing - When you create a `layout.js`, it creates a UI that can be _inherited_ by the child routes\n      - When navigate to a route inside of a layout, only the inner UI is rendered as opposed to the entire page.\n  - support for more advanced routing patterns and UI layouts\n  - Easily fetch data for your entire layout\n  - Also it has file naming conventions for _loading_ and _error_ that can render a different UI _at the component level_ based on its current state.\n    - If a component breaks, it'll render `error.js` instead of `page.js`. The rest of the UI stays intact.\n- Middleware\n  - Take control of incoming request\n  - Use code to define routing and access rules for authentication, experimentation, and internationalization\n\n## 🏷️[Data Fetching](Data-Fetching)\n\n### where your data lives and how to get it.\n\n### React Query\n\n### 📌[NextJS](../front-end-frameworks/next.js/o-nextjs.md)\n\n- Make React component async and await your data\n  - Now we can totally get rid of things like `getStaticProps`, and `getServerSideProps` , instead we can write a plain JS function uses `fetch` (`async function...await`) and `await` the result of that function directly in a component, no need to pass props back and forth between client and server.\n    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230227195806.png)\n- Support both client and server data fetching\n\n## 🏷️Rendering\n\n### The environment where your code runs\n\n- Development vs. Production\n\n### when and where you render static or dynamic content.\n\n- _When_ your code runs\n  - Build Time vs. Runtime\n- _Where_ rendering happens\n  - Client vs. Server\n\n\n\n### 📌[NextJS](../front-end-frameworks/next.js/o-nextjs.md)\n\n\n## 🏷️Integrations (3rd-Party Services)\n\n### what third-party services you use (CMS, auth, payments, etc) and how you connect to them.\n\n### CMS\n\n### [Authentication](Authentication)\n\n### Payments\n\n### [User Analytics](User-Analytics)\n\n- [三方服务——访问统计与分析](三方服务——访问统计与分析)\n\n### [三方服务——评论功能](三方服务——评论功能)\n\n### 📌[NextJS](../front-end-frameworks/next.js/o-nextjs.md)\n\n- Route Handlers\n  - Build API endpoints to securely connect with 3rd party services and consume from your frontend\n\n## 🏷️Infrastructure\n\n### where you deploy, store, and run your application code\n\n### [Deploying](Deploying)\n\n- Vercel\n- Netlify\n\n### Serverless\n\n### Edge\n\n### CDN\n\n### NodeJS\n\n### [代理-nginx](deployment/代理-nginx.md)\n\n## 🏷️[Front-End Performance Optimization](Front-End-Performance-Optimization)\n\n### how to optimize your application for end-users.\n\n### Bundler\n\n- Webpack\n- Vite\n- 📌[NextJS](../front-end-frameworks/next.js/o-nextjs.md)\n  - Turbopack\n    - It's faster than Create-React-App\n      - 4x faster cold starts than Webpack\n\n### Compiler (& minification)\n\n- Babel\n- 📌[NextJS](../front-end-frameworks/next.js/o-nextjs.md)\n  - Speedy Web Compiler (SWC)\n    - It also uses SWC (Speedy Web Compiler) same as Vite based on Rust which is faster than Babel as a compiler\n      - 10x Faster than Vite\n      - 700x Faster updates than Webpack (Plugins)\n  - Hot Reloading support.\n  - Automatic code splitting and lazy loading.\n\n### 📌[NextJS](../front-end-frameworks/next.js/o-nextjs.md)\n\n- Built-in Optimizations for improved UX and Core Web Vitals\n  - Image\n    - Vercel 0G Image Generation\n    - next/image: optimize images on demand\n  - Font\n    - next/font: custom typefaces for your brand\n  - Link\n    - next/link: increase your engagement rate\n  - Script\n\n## 🏷️Scalability\n\n### how your application adapts as your team, data, and traffic grow.\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"front-end-practice",text:"Front-End Practice#"},{depth:2,slug:"️developer-experience",text:"🏷️Developer Experience#"},{depth:3,slug:"teams-experience-building-and-maintaining-your-application",text:"team’s experience building and maintaining your application.#"},{depth:3,slug:"typescript",text:"TypeScript#"},{depth:2,slug:"️ui",text:"🏷️UI#"},{depth:3,slug:"from-design-to-code",text:"💡From Design to Code#"},{depth:3,slug:"front-end-frameworks",text:"Front-End Frameworks#"},{depth:3,slug:"ui-styling",text:"UI Styling#"},{depth:3,slug:"ui-events--interaction",text:"UI Events & Interaction#"},{depth:3,slug:"component-library",text:"Component Library#"},{depth:2,slug:"️component-driven-development",text:"🏷️Component-Driven Development#"},{depth:3,slug:"project-init",text:"Project-Init#"},{depth:3,slug:"testing",text:"Testing#"},{depth:3,slug:"compilers-and-bundlers",text:"Compilers and Bundlers#"},{depth:2,slug:"placeholder-data",text:"📌Placeholder Data#"},{depth:3,slug:"use-placeholder-data-in-json-format-or-as-javascript-objects",text:"Use placeholder data in JSON format or as JavaScript objects.#"},{depth:3,slug:"use-a-3rd-party-service-like-mockapi",text:"Use a 3rd party service like mockAPI.#"},{depth:2,slug:"️routing",text:"🏷️Routing#"},{depth:3,slug:"how-users-navigate-between-different-parts-of-your-application",text:"how users navigate between different parts of your application.#"},{depth:3,slug:"react-router-dom",text:"React Router Dom#"},{depth:3,slug:"nextjs",text:"📌NextJS#"},{depth:2,slug:"️data-fetching",text:"🏷️Data Fetching#"},{depth:3,slug:"where-your-data-lives-and-how-to-get-it",text:"where your data lives and how to get it.#"},{depth:3,slug:"react-query",text:"React Query#"},{depth:3,slug:"nextjs-1",text:"📌NextJS#"},{depth:2,slug:"️rendering",text:"🏷️Rendering#"},{depth:3,slug:"the-environment-where-your-code-runs",text:"The environment where your code runs#"},{depth:3,slug:"when-and-where-you-render-static-or-dynamic-content",text:"when and where you render static or dynamic content.#"},{depth:3,slug:"nextjs-2",text:"📌NextJS#"},{depth:2,slug:"️integrations-3rd-party-services",text:"🏷️Integrations (3rd-Party Services)#"},{depth:3,slug:"what-third-party-services-you-use-cms-auth-payments-etc-and-how-you-connect-to-them",text:"what third-party services you use (CMS, auth, payments, etc) and how you connect to them.#"},{depth:3,slug:"cms",text:"CMS#"},{depth:3,slug:"authentication",text:"Authentication#"},{depth:3,slug:"payments",text:"Payments#"},{depth:3,slug:"user-analytics",text:"User Analytics#"},{depth:3,slug:"三方服务评论功能",text:"三方服务——评论功能#"},{depth:3,slug:"nextjs-3",text:"📌NextJS#"},{depth:2,slug:"️infrastructure",text:"🏷️Infrastructure#"},{depth:3,slug:"where-you-deploy-store-and-run-your-application-code",text:"where you deploy, store, and run your application code#"},{depth:3,slug:"deploying",text:"Deploying#"},{depth:3,slug:"serverless",text:"Serverless#"},{depth:3,slug:"edge",text:"Edge#"},{depth:3,slug:"cdn",text:"CDN#"},{depth:3,slug:"nodejs",text:"NodeJS#"},{depth:3,slug:"代理-nginx",text:"代理-nginx#"},{depth:2,slug:"️front-end-performance-optimization",text:"🏷️Front-End Performance Optimization#"},{depth:3,slug:"how-to-optimize-your-application-for-end-users",text:"how to optimize your application for end-users.#"},{depth:3,slug:"bundler",text:"Bundler#"},{depth:3,slug:"compiler--minification",text:"Compiler (& minification)#"},{depth:3,slug:"nextjs-4",text:"📌NextJS#"},{depth:2,slug:"️scalability",text:"🏷️Scalability#"},{depth:3,slug:"how-your-application-adapts-as-your-team-data-and-traffic-grow",text:"how your application adapts as your team, data, and traffic grow.#"}]}const Content=createComponent(((n,e,a)=>{const{layout:t,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};