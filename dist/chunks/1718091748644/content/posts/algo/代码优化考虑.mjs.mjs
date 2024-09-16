import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="代码优化考虑">代码优化考虑<a class="anchor" href="#代码优化考虑"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ol>\n<li>循环条件与变量名可读性：<strong><code>for (... of ...){}</code></strong></li>\n<li>解构赋值，更清晰的处理区间起终点; <code>const [curStart, curEnd] = currentInterval;</code></li>\n<li>循环结构中的常量声明能用  <code>const</code>  而不是  <code>let</code>  符合最佳实践与代码规范，可防止意外修改</li>\n</ol>',frontmatter={title:"代码优化考虑",type:null,Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,draft:!0,DateStarted:"2023-09-08T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",topic:["Algo"],tags:["Algo"],category:"Programming",minutes:1,words:76},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/algo/代码优化考虑.md",url=void 0;function rawContent(){return"\n## 代码优化考虑\n\n1. 循环条件与变量名可读性：**`for (... of ...){}`**\n2. 解构赋值，更清晰的处理区间起终点; `const [curStart, curEnd] = currentInterval;`\n3. 循环结构中的常量声明能用  `const`  而不是  `let`  符合最佳实践与代码规范，可防止意外修改\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"代码优化考虑",text:"代码优化考虑#"}]}const Content=createComponent(((e,t,n)=>{const{layout:o,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};