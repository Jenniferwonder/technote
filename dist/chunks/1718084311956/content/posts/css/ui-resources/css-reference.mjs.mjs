import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h3 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="1-css-basics">1. CSS Basics<a class="anchor" href="#1-css-basics"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS">CSS：层叠样式表 | MDN</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS: Cascading Style Sheets | MDN</a> > <a href="https://cssreference.io/">CSS Reference</a> | A collection of all css properties and definitions in detail |\n<ul>\n<li>CSS 并不难学。绝大多数觉得难的，一方面是文档没读透，另一方面是浏览器支持的标准不一致。所以，学好 CSS 最关键的还是要仔细地读文档。</li>\n</ul>\n</li>\n</ul>\n<h4 id="2-css-preprocessor">2. CSS Preprocessor<a class="anchor" href="#2-css-preprocessor"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<blockquote>\n<p>DRY - Don’t Repeat Yourself</p>\n</blockquote>\n<ul>\n<li>SASS\n<ul>\n<li><a href="https://sass-lang.com/">Sass: Syntactically Awesome Style Sheets</a></li>\n<li><a href="https://gerillass.com/">Gerillass</a> | Gerillass is a website development tool built on top of Sass with a set of Sass mixins and functions for frontend developers to generate scalable CSS outputs. |</li>\n</ul>\n</li>\n<li>LESS\n<ul>\n<li><a href="https://lesscss.org/">Getting started | Less.js</a></li>\n</ul>\n</li>\n</ul>\n<h3 id="more">More<a class="anchor" href="#more"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://github.com/vicky002/AlgoWiki/blob/gh-pages/HTML_CSS/html_resources">HTML, CSS GitHub 资料库</a></li>\n<li><a href="https://freefrontend.com/html-css-books/">41 HTML CSS books</a></li>\n</ul>',frontmatter={topic:null,category:"Web Design",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,draft:!0,title:"css-reference",type:"S",tags:["CSS"],DateStarted:"2023-07-08T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",minutes:1,words:136},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/ui-resources/css-reference.md",url=void 0;function rawContent(){return"\n### Reference\n\n#### 1. CSS Basics\n\n- [CSS：层叠样式表 | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS)\n- [CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS) > [CSS Reference](https://cssreference.io/) | A collection of all css properties and definitions in detail |\n  - CSS 并不难学。绝大多数觉得难的，一方面是文档没读透，另一方面是浏览器支持的标准不一致。所以，学好 CSS 最关键的还是要仔细地读文档。\n\n#### 2. CSS Preprocessor\n\n> DRY - Don’t Repeat Yourself\n\n- SASS\n  - [Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)\n  - [Gerillass](https://gerillass.com/) | Gerillass is a website development tool built on top of Sass with a set of Sass mixins and functions for frontend developers to generate scalable CSS outputs. |\n- LESS\n  - [Getting started | Less.js](https://lesscss.org/)\n\n### More\n\n- [HTML, CSS GitHub 资料库](https://github.com/vicky002/AlgoWiki/blob/gh-pages/HTML_CSS/html_resources)\n- [41 HTML CSS books](https://freefrontend.com/html-css-books/)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:3,slug:"reference",text:"Reference#"},{depth:4,slug:"1-css-basics",text:"1. CSS Basics#"},{depth:4,slug:"2-css-preprocessor",text:"2. CSS Preprocessor#"},{depth:3,slug:"more",text:"More#"}]}const Content=createComponent(((e,s,t)=>{const{layout:n,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};