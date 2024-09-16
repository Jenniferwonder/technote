import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="css-text-directions">CSS Text Directions<a class="anchor" href="#css-text-directions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="writing-modes">Writing Modes<a class="anchor" href="#writing-modes"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="writing-mode-horizontal-tb-vertical-rl-vertical-lr"><code>writing-mode: horizontal-tb/ vertical-rl/ vertical-lr</code><a class="anchor" href="#writing-mode-horizontal-tb-vertical-rl-vertical-lr"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>setting the direction in which block-level elements are displayed on the page — either from top-to-bottom, right-to-left, or left-to-right</li>\n</ul>\n<h3 id="the-block-dimension-is-always-the-direction-blocks-are-displayed-on-the-page-in-the-writing-mode-in-use">📌the block dimension is always the direction blocks are displayed on the page in the writing mode in use.<a class="anchor" href="#the-block-dimension-is-always-the-direction-blocks-are-displayed-on-the-page-in-the-writing-mode-in-use"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="the-inline-dimension-is-always-the-direction-a-sentence-flows">📌The inline dimension is always the direction a sentence flows.<a class="anchor" href="#the-inline-dimension-is-always-the-direction-a-sentence-flows"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="logical-properties-and-values">Logical Properties and Values<a class="anchor" href="#logical-properties-and-values"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="width--inline-size"><code>width</code> > <strong><code>inline-size</code></strong><a class="anchor" href="#width--inline-size"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="height--block-size"><code>height</code> > <strong><code>block-size</code></strong><a class="anchor" href="#height--block-size"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="margin-top--margin-block-start"><code>margin-top</code> > <strong><code>margin-block-start</code></strong><a class="anchor" href="#margin-top--margin-block-start"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="border-bottom--border-block-end"><code>border-bottom</code> > <strong><code>border-block-end</code></strong><a class="anchor" href="#border-bottom--border-block-end"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="padding-left--padding-inline-start"><code>padding-left</code> > <strong><code>padding-inline-start</code></strong><a class="anchor" href="#padding-left--padding-inline-start"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="-reference-logical-properties-and-values">📌 Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values">Logical Properties and Values</a><a class="anchor" href="#-reference-logical-properties-and-values"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={category:"Web Design",aliases:["CSS Text Directions"],draft:!1,title:"CSS Text Directions",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-20T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",difficulty:"Good",reviewed:1,Datereviewed:"2023-09-22T16:00:00.000Z",comment:"⭐",topic:["Text"],"linter-yaml-title-alias":"CSS Text Directions",minutes:1,words:70},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/typography/css-text-directions.md",url=void 0;function rawContent(){return"\n# CSS Text Directions\n\n## Writing Modes\n\n### `writing-mode: horizontal-tb/ vertical-rl/ vertical-lr`\n\n- setting the direction in which block-level elements are displayed on the page — either from top-to-bottom, right-to-left, or left-to-right\n\n### 📌the block dimension is always the direction blocks are displayed on the page in the writing mode in use.\n\n### 📌The inline dimension is always the direction a sentence flows.\n\n## Logical Properties and Values\n\n### `width` > **`inline-size`**\n\n### `height` > **`block-size`**\n\n### `margin-top` > **`margin-block-start`**\n\n### `border-bottom` > **`border-block-end`**\n\n### `padding-left` > **`padding-inline-start`**\n\n### 📌 Reference: [Logical Properties and Values](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"css-text-directions",text:"CSS Text Directions#"},{depth:2,slug:"writing-modes",text:"Writing Modes#"},{depth:3,slug:"writing-mode-horizontal-tb-vertical-rl-vertical-lr",text:"writing-mode: horizontal-tb/ vertical-rl/ vertical-lr#"},{depth:3,slug:"the-block-dimension-is-always-the-direction-blocks-are-displayed-on-the-page-in-the-writing-mode-in-use",text:"📌the block dimension is always the direction blocks are displayed on the page in the writing mode in use.#"},{depth:3,slug:"the-inline-dimension-is-always-the-direction-a-sentence-flows",text:"📌The inline dimension is always the direction a sentence flows.#"},{depth:2,slug:"logical-properties-and-values",text:"Logical Properties and Values#"},{depth:3,slug:"width--inline-size",text:"width > inline-size#"},{depth:3,slug:"height--block-size",text:"height > block-size#"},{depth:3,slug:"margin-top--margin-block-start",text:"margin-top > margin-block-start#"},{depth:3,slug:"border-bottom--border-block-end",text:"border-bottom > border-block-end#"},{depth:3,slug:"padding-left--padding-inline-start",text:"padding-left > padding-inline-start#"},{depth:3,slug:"-reference-logical-properties-and-values",text:"📌 Reference: Logical Properties and Values#"}]}const Content=createComponent(((e,n,i)=>{const{layout:t,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};