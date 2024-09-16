import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h3 id="css-normal-flow">CSS Normal Flow<a class="anchor" href="#css-normal-flow"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Refer to: <a href="Box-Model-(Spacing)">Box Model (Spacing)</a>\n<ul>\n<li>Block-level element\n<ul>\n<li><code>div</code></li>\n<li><code>p</code>, <code>h1</code>…</li>\n</ul>\n</li>\n<li>Inline-level element\n<ul>\n<li><code>span</code>, <code>input</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Margin collapsing\n<ul>\n<li>the larger of the two margins remains and the smaller one disappears</li>\n</ul>\n</li>\n</ul>',frontmatter={category:"Web Design",draft:!1,title:"css-normal-flow",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-25T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",difficulty:"Good",comment:"⭐⭐",topic:"Layout",reviewed:1,Datereviewed:"2024-01-08T16:00:00.000Z",minutes:1,words:23},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/layout/css-normal-flow.md",url=void 0;function rawContent(){return"\n### CSS Normal Flow\n\n- Refer to: [Box Model (Spacing)](<Box-Model-(Spacing)>)\n  - Block-level element\n    - `div`\n    - `p`, `h1`...\n  - Inline-level element\n    - `span`, `input`\n- Margin collapsing\n  - the larger of the two margins remains and the smaller one disappears\n"}function compiledContent(){return html}function getHeadings(){return[{depth:3,slug:"css-normal-flow",text:"CSS Normal Flow#"}]}const Content=createComponent(((e,n,l)=>{const{layout:o,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};