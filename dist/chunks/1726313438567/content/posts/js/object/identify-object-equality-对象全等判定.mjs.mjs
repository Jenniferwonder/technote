import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="identify-object-equality-对象全等判定">Identify Object Equality-对象全等判定<a class="anchor" href="#identify-object-equality-对象全等判定"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<p>?</p>\n<ul>\n<li>全等操作符也无能为力\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692024519319.png" alt=""></li>\n</ul>\n</li>\n<li><code>Object.is()</code> (ES6)\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692024510364.png" alt=""></li>\n</ul>\n</li>\n</ul>',frontmatter={aliases:["Identify Object Equality-对象全等判定"],title:"Identify Object Equality-对象全等判定",topic:["Objects"],type:"D",tags:["JavaScript"],DateStarted:"2024-01-29T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",Datereviewed:"2024-01-29T00:00:00.000Z",reviewed:1,difficulty:"Good",status:["ToUse"],comment:null,"linter-yaml-title-alias":"Identify Object Equality-对象全等判定",category:"Programming",draft:!1,minutes:1,words:21},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/object/identify-object-equality-对象全等判定.md",url=void 0;function rawContent(){return"\n# Identify Object Equality-对象全等判定\n\n?\n\n- 全等操作符也无能为力\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692024519319.png)\n- `Object.is()` (ES6)\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692024510364.png)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"identify-object-equality-对象全等判定",text:"Identify Object Equality-对象全等判定#"}]}const Content=createComponent(((e,t,n)=>{const{layout:i,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};