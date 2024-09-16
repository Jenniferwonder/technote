import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="floats">Floats<a class="anchor" href="#floats"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="create-float-items">Create float items<a class="anchor" href="#create-float-items"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="float-left"><code>float: left</code><a class="anchor" href="#float-left"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="clearing-floats">Clearing Floats<a class="anchor" href="#clearing-floats"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="before--after-clearing-floats">Before &#x26; After Clearing Floats<a class="anchor" href="#before--after-clearing-floats"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-Before-clearing-floats.png" alt=""> <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-After-clearing-floats.png" alt=""></li>\n</ul>\n<h3 id="clear"><code>clear</code><a class="anchor" href="#clear"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>To clear floats</li>\n<li><code>left</code>: Clear items floated to the left</li>\n<li><code>right</code>: Clear items floated to the right.</li>\n<li><code>both</code>: Clear any floated items, left or right.</li>\n</ul>\n<h2 id="clearing-boxes-wrapped-around-a-float">Clearing boxes wrapped around a float<a class="anchor" href="#clearing-boxes-wrapped-around-a-float"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="display-flow-root"><code>display: flow-root</code><a class="anchor" href="#display-flow-root"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>to create a block formatting context (BFC) without using hacks — there will be no unintended consequences when you use it.</li>\n<li>🏷️<a href="Box-Display-Types-(Block-and-Inline-Boxes)">Box Display Types (Block and Inline Boxes)</a></li>\n</ul>\n<h3 id="before--after-using-display-flow-root">Before &#x26; After using <code>display: flow-root</code><a class="anchor" href="#before--after-using-display-flow-root"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-Before-and-after-using-float-root.png" alt=""></li>\n</ul>\n<h2 id="floats-reference">📌<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/float">Floats reference</a><a class="anchor" href="#floats-reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={category:"Web Design",aliases:["Floats"],draft:!1,title:"Floats",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-25T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",difficulty:"Hard",topic:["Layout"],reviewed:1,Datereviewed:"2024-01-18T16:00:00.000Z",comment:"⭐⭐","linter-yaml-title-alias":"Floats",minutes:1,words:69},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/layout/floats.md",url=void 0;function rawContent(){return"\n# Floats\n\n## Create float items\n\n### `float: left`\n\n## Clearing Floats\n\n### Before & After Clearing Floats\n\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-Before-clearing-floats.png) ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-After-clearing-floats.png)\n\n### `clear`\n\n- To clear floats\n- `left`: Clear items floated to the left\n- `right`: Clear items floated to the right.\n- `both`: Clear any floated items, left or right.\n\n## Clearing boxes wrapped around a float\n\n### `display: flow-root`\n\n- to create a block formatting context (BFC) without using hacks — there will be no unintended consequences when you use it.\n- 🏷️[Box Display Types (Block and Inline Boxes)](<Box-Display-Types-(Block-and-Inline-Boxes)>)\n\n### Before & After using `display: flow-root`\n\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-Before-and-after-using-float-root.png)\n\n## 📌[Floats reference](https://developer.mozilla.org/en-US/docs/Web/CSS/float)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"floats",text:"Floats#"},{depth:2,slug:"create-float-items",text:"Create float items#"},{depth:3,slug:"float-left",text:"float: left#"},{depth:2,slug:"clearing-floats",text:"Clearing Floats#"},{depth:3,slug:"before--after-clearing-floats",text:"Before & After Clearing Floats#"},{depth:3,slug:"clear",text:"clear#"},{depth:2,slug:"clearing-boxes-wrapped-around-a-float",text:"Clearing boxes wrapped around a float#"},{depth:3,slug:"display-flow-root",text:"display: flow-root#"},{depth:3,slug:"before--after-using-display-flow-root",text:"Before & After using display: flow-root#"},{depth:2,slug:"floats-reference",text:"📌Floats reference#"}]}const Content=createComponent(((e,a,t)=>{const{layout:n,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};