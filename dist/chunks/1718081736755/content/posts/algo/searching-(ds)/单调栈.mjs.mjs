import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="单调栈">单调栈<a class="anchor" href="#单调栈"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ol>\n<li><a href="./problems/0739.%E6%AF%8F%E6%97%A5%E6%B8%A9%E5%BA%A6">单调栈：739.每日温度</a></li>\n<li><a href="0496.%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E5%85%83%E7%B4%A0I">单调栈：496.下一个更大元素 I</a></li>\n<li><a href="0503.%E4%B8%8B%E4%B8%80%E4%B8%AA%E6%9B%B4%E5%A4%A7%E5%85%83%E7%B4%A0II">单调栈：503.下一个更大元素 II</a></li>\n<li><a href="0042.%E6%8E%A5%E9%9B%A8%E6%B0%B4">单调栈：42.接雨水</a></li>\n<li><a href="0084.%E6%9F%B1%E7%8A%B6%E5%9B%BE%E4%B8%AD%E6%9C%80%E5%A4%A7%E7%9A%84%E7%9F%A9%E5%BD%A2">单调栈：84.柱状图中最大的矩形</a></li>\n</ol>',frontmatter={title:"单调栈",topic:null,type:null,Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,draft:!0,DateStarted:"2023-09-07T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",tags:["Algo"],category:"Programming",minutes:1,words:55},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/algo/searching-(ds)/单调栈.md",url=void 0;function rawContent(){return"\n## 单调栈\n\n1. [单调栈：739.每日温度](./problems/0739.每日温度)\n2. [单调栈：496.下一个更大元素 I](0496.下一个更大元素I)\n3. [单调栈：503.下一个更大元素 II](0503.下一个更大元素II)\n4. [单调栈：42.接雨水](0042.接雨水)\n5. [单调栈：84.柱状图中最大的矩形](0084.柱状图中最大的矩形)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"单调栈",text:"单调栈#"}]}const Content=createComponent(((e,t,n)=>{const{layout:r,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};