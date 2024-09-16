import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1718090302448/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/style-for-react/react-style-basics.md",collection="posts",slug="front-end-frameworks/react/style-for-react/react-style-basics",body='# React Style Basics \n#### Using normal CSS\n- `<img className="avatar" />`\n  - `className` 相当于 html `class`\n#### Using JS\n- `style={{ width: user.imageSize, height: user.imageSize, }}`\n#### Global CSS\n  - `app/ui/global.css`\n  - can use this file to add CSS rules to all the routes in your application\n    - CSS reset rules\n    - Site-wide styles for HTML elements like links\n    - ...\n  - can import `global.css` in any component in your application\n  - But it\'s usually good practice to add it to your top-level component\n    - In Next.js, this is `layout.tsx`, the [root layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)',data={title:"React Style Basics ",DateStarted:new Date(17152128e5),draft:!1,tags:["React","CSS"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/style-for-react/react-style-basics.md",rawData:void 0},html='<h1 id="react-style-basics">React Style Basics<a class="anchor" href="#react-style-basics"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h4 id="using-normal-css">Using normal CSS<a class="anchor" href="#using-normal-css"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>&#x3C;img className="avatar" /></code>\n<ul>\n<li><code>className</code> 相当于 html <code>class</code></li>\n</ul>\n</li>\n</ul>\n<h4 id="using-js">Using JS<a class="anchor" href="#using-js"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>style={{ width: user.imageSize, height: user.imageSize, }}</code></li>\n</ul>\n<h4 id="global-css">Global CSS<a class="anchor" href="#global-css"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>app/ui/global.css</code></li>\n<li>can use this file to add CSS rules to all the routes in your application\n<ul>\n<li>CSS reset rules</li>\n<li>Site-wide styles for HTML elements like links</li>\n<li>…</li>\n</ul>\n</li>\n<li>can import <code>global.css</code> in any component in your application</li>\n<li>But it’s usually good practice to add it to your top-level component\n<ul>\n<li>In Next.js, this is <code>layout.tsx</code>, the <a href="https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required">root layout</a></li>\n</ul>\n</li>\n</ul>',frontmatter={title:"React Style Basics ",topic:null,type:"D",tags:["React","CSS"],category:"Front-End Frameworks",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["React Style Basics"],draft:!1,DateStarted:"2024-05-09T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z","linter-yaml-title-alias":"React Style Basics ",minutes:1,words:67},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/style-for-react/react-style-basics.md",url=void 0;function rawContent(){return'# React Style Basics \n#### Using normal CSS\n- `<img className="avatar" />`\n  - `className` 相当于 html `class`\n#### Using JS\n- `style={{ width: user.imageSize, height: user.imageSize, }}`\n#### Global CSS\n  - `app/ui/global.css`\n  - can use this file to add CSS rules to all the routes in your application\n    - CSS reset rules\n    - Site-wide styles for HTML elements like links\n    - ...\n  - can import `global.css` in any component in your application\n  - But it\'s usually good practice to add it to your top-level component\n    - In Next.js, this is `layout.tsx`, the [root layout](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required)'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"react-style-basics",text:"React Style Basics#"},{depth:4,slug:"using-normal-css",text:"Using normal CSS#"},{depth:4,slug:"using-js",text:"Using JS#"},{depth:4,slug:"global-css",text:"Global CSS#"}]}const Content=createComponent(((e,t,a)=>{const{layout:n,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),reactStyleBasics=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,reactStyleBasics,slug};