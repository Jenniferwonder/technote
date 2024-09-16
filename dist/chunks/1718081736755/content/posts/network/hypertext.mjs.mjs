import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="hypertext-超文本">Hypertext (超文本)<a class="anchor" href="#hypertext-超文本"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<blockquote>\n<p><a href="https://cuiqingcai.com/5465.html">[Python3 网络爬虫开发实战] 2.1-HTTP 基本原理 | 静觅</a></p>\n</blockquote>\n<p>接下来，我们再了解一个概念 —— 超文本，其英文名称叫作 hypertext，我们在浏览器里看到的网页就是超文本解析而成的，其网页源代码是一系列 HTML 代码，里面包含了一系列标签，比如  <code>img</code>  显示图片，<code>p</code>  指定显示段落等。浏览器解析这些标签后，便形成了我们平常看到的网页，而网页的源代码 HTML 就可以称作超文本。</p>\n<p>例如，我们在 Chrome 浏览器里面打开任意一个页面，如淘宝首页，右击任一地方并选择 “检查” 项（或者直接按快捷键 F12），即可打开浏览器的开发者工具，这时在 Elements 选项卡即可看到当前网页的源代码，这些源代码都是超文本，如图 2-2 所示。</p>',frontmatter={category:"Network",title:"Hypertext (超文本)",topic:null,type:"D",tags:["Network"],DateStarted:"2024-04-11T00:00:00.000Z",DateModified:"2024-04-18T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["Hypertext (超文本)"],"linter-yaml-title-alias":"Hypertext (超文本)",minutes:1,words:238},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/hypertext.md",url=void 0;function rawContent(){return"\n# Hypertext (超文本)\n\n> [\\[Python3 网络爬虫开发实战\\] 2.1-HTTP 基本原理 | 静觅](https://cuiqingcai.com/5465.html)\n\n接下来，我们再了解一个概念 —— 超文本，其英文名称叫作 hypertext，我们在浏览器里看到的网页就是超文本解析而成的，其网页源代码是一系列 HTML 代码，里面包含了一系列标签，比如  `img`  显示图片，`p`  指定显示段落等。浏览器解析这些标签后，便形成了我们平常看到的网页，而网页的源代码 HTML 就可以称作超文本。\n\n例如，我们在 Chrome 浏览器里面打开任意一个页面，如淘宝首页，右击任一地方并选择 “检查” 项（或者直接按快捷键 F12），即可打开浏览器的开发者工具，这时在 Elements 选项卡即可看到当前网页的源代码，这些源代码都是超文本，如图 2-2 所示。\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"hypertext-超文本",text:"Hypertext (超文本)#"}]}const Content=createComponent(((e,t,n)=>{const{layout:r,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};