import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="浏览器路由-history-hash">浏览器路由 History, Hash<a class="anchor" href="#浏览器路由-history-hash"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="路由-history-和-hash-的区别">路由 history 和 hash 的区别？<a class="anchor" href="#路由-history-和-hash-的区别"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>路由 history 和 hash 是前端路由（Single Page Application, SPA）中常用的两种模式。它们的主要区别在于实现方式和 URL 的展示形式。</p>\n<ol>\n<li><strong>Hash 模式</strong>：\n<ul>\n<li>Hash 模式基于浏览器 URL 中的哈希（<code>#</code>）部分进行路由切换。当哈希值改变时，浏览器不会向服务器发送请求，而是触发 <code>hashchange</code> 事件。前端路由库会监听这个事件，并根据哈希值变化来更新视图。</li>\n<li>URL 示例：<code>https://example.com/#/page1</code></li>\n<li>Hash 模式兼容性较好，适用于旧版本浏览器。</li>\n</ul>\n</li>\n<li><strong>History 模式</strong>：\n<ul>\n<li>History 模式基于 HTML5 的 History API（如 <code>pushState</code>、<code>replaceState</code> 和 <code>popstate</code> 事件）实现。这些 API 允许在不重新加载页面的情况下，直接操作浏览器的历史记录和 URL。</li>\n<li>URL 示例：<code>https://example.com/page1</code></li>\n<li>History 模式需要服务器的配合，因为在用户直接访问某个路由（如 <code>https://example.com/page1</code>）时，如果服务器没有对应的配置，可能会返回 404 错误。为了解决这个问题，服务器需要设置一个通配符路由，将所有未匹配到的路由都重定向到单页应用的入口 HTML 文件。<br>\n总之，Hash 模式和 History 模式是前端路由中的两种实现方式，具有不同的 URL 展示形式和浏览器兼容性。在选择路由模式时，需要根据项目需求、用户体验和服务器配置等因素进行权衡。</li>\n</ul>\n</li>\n</ol>',frontmatter={title:"浏览器路由 History, Hash",topic:null,type:null,tags:["Network","Browser"],category:"Network",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["浏览器路由 History, Hash"],draft:!0,DateStarted:"2024-04-29T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z","linter-yaml-title-alias":"浏览器路由 History, Hash",minutes:2,words:372},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/browser/browser-routing-history-hash.md",url=void 0;function rawContent(){return"# 浏览器路由 History, Hash\n### 路由 history 和 hash 的区别？\n路由 history 和 hash 是前端路由（Single Page Application, SPA）中常用的两种模式。它们的主要区别在于实现方式和 URL 的展示形式。\n1. **Hash 模式**：\n   - Hash 模式基于浏览器 URL 中的哈希（`#`）部分进行路由切换。当哈希值改变时，浏览器不会向服务器发送请求，而是触发 `hashchange` 事件。前端路由库会监听这个事件，并根据哈希值变化来更新视图。\n   - URL 示例：`https://example.com/#/page1`\n   - Hash 模式兼容性较好，适用于旧版本浏览器。\n2. **History 模式**：\n   - History 模式基于 HTML5 的 History API（如 `pushState`、`replaceState` 和 `popstate` 事件）实现。这些 API 允许在不重新加载页面的情况下，直接操作浏览器的历史记录和 URL。\n   - URL 示例：`https://example.com/page1`\n   - History 模式需要服务器的配合，因为在用户直接访问某个路由（如 `https://example.com/page1`）时，如果服务器没有对应的配置，可能会返回 404 错误。为了解决这个问题，服务器需要设置一个通配符路由，将所有未匹配到的路由都重定向到单页应用的入口 HTML 文件。  \n总之，Hash 模式和 History 模式是前端路由中的两种实现方式，具有不同的 URL 展示形式和浏览器兼容性。在选择路由模式时，需要根据项目需求、用户体验和服务器配置等因素进行权衡。\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"浏览器路由-history-hash",text:"浏览器路由 History, Hash#"},{depth:3,slug:"路由-history-和-hash-的区别",text:"路由 history 和 hash 的区别？#"}]}const Content=createComponent(((t,e,o)=>{const{layout:s,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};