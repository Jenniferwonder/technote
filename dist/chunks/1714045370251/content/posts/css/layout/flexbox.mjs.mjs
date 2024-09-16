import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="flexbox">Flexbox<a class="anchor" href="#flexbox"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="displayflex"><code>display:flex</code><a class="anchor" href="#displayflex"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="to-the-parent-element-of-the-elements-you-want-to-lay-out">to the parent element of the elements you want to lay out<a class="anchor" href="#to-the-parent-element-of-the-elements-you-want-to-lay-out"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="axis">Axis<a class="anchor" href="#axis"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id=""><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Flexbox-Axis.png" alt=""></h3>\n<h2 id="flex-flow-row-wrap"><code>flex-flow: row wrap</code><a class="anchor" href="#flex-flow-row-wrap"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="flex-direction-row-column-row-reverse-column-reverse"><code>flex-direction: row/ column/ row-reverse/ column-reverse</code><a class="anchor" href="#flex-direction-row-column-row-reverse-column-reverse"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="flex-wrap-wrap"><code>flex-wrap: wrap</code><a class="anchor" href="#flex-wrap-wrap"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>to prevent overflow content</li>\n</ul>\n<h2 id="flexible-sizing-of-flex-items">Flexible sizing of flex items<a class="anchor" href="#flexible-sizing-of-flex-items"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="default-behavior-when-flex-container-is-too-small-big-to-contain-items">Default Behavior (when flex container is too small/ big to contain items)<a class="anchor" href="#default-behavior-when-flex-container-is-too-small-big-to-contain-items"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>shrink/ grow flex items to fit the container</li>\n<li>otherwise: overflow happens</li>\n</ul>\n<h3 id="flex"><code>flex</code><a class="anchor" href="#flex"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Shorthand\n<ul>\n<li><code>flex: 1 1 0%</code>\n<ul>\n<li>allow a flex item to grow and shrink, ignoring its initial size</li>\n</ul>\n</li>\n<li><code>flex: 1 1 auto</code>\n<ul>\n<li>allow a flex item to grow and shrink, taking into account its initial size</li>\n</ul>\n</li>\n<li><code>flex: 0 1 auto</code>\n<ul>\n<li>allow a flex item to shrink but not grow, taking into account its <em>initial</em> size</li>\n</ul>\n</li>\n<li><code>flex: none</code>\n<ul>\n<li>prevent a flex item from growing or shrinking</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>flex-grow: 1</code>\n<ul>\n<li><code>flex:1</code>\n<ul>\n<li>the flex item is allowed to grow to fill any available space along the main axis of the flex container</li>\n<li>If set on each item\n<ul>\n<li>means they’ll all take up an equal amount of the spare space left after properties like padding and margin have been set.</li>\n</ul>\n</li>\n<li>📌<code>flex: 1 200px;</code>\n<ul>\n<li>Each flex item will first be given 200px of the available space. After that, the rest of the available space will be shared according to the proportion units.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>flex-shrink: 2</code>\n<ul>\n<li>default value :1\n<ul>\n<li>each item would be shrunk by equal size</li>\n</ul>\n</li>\n<li>the item will shrink twice/ x times as much as the other when the container gets smaller</li>\n</ul>\n</li>\n<li><code>flex-basis: 200px</code>\n<ul>\n<li><code>flex: 200px</code>\n<ul>\n<li>means that each will be at least 200px wide.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="horizontal-and-vertical-alignment">Horizontal and vertical alignment<a class="anchor" href="#horizontal-and-vertical-alignment"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="align-items"><code>align-items</code><a class="anchor" href="#align-items"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>📌controls where the flex items sit on the cross axis.</li>\n<li><code>strech</code>\n<ul>\n<li>by default</li>\n<li>stretches all flex items to fill the parent in the direction of the cross axis.</li>\n</ul>\n</li>\n<li><code>center</code>\n<ul>\n<li>centered vertically</li>\n</ul>\n</li>\n<li><code>flex-start</code>/ <code>flex-end</code>\n<ul>\n<li>align all items at the start and end of the cross axis respectively.</li>\n</ul>\n</li>\n</ul>\n<h3 id="align-self"><code>align-self</code><a class="anchor" href="#align-self"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>override the <code>align-items</code> behavior for individual flex items</li>\n</ul>\n<h3 id="justify-content"><code>justify-content</code><a class="anchor" href="#justify-content"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>controls where the flex items sit on the main axis.</li>\n<li><code>flex-start</code>\n<ul>\n<li>by default</li>\n</ul>\n</li>\n<li><code>flex-end</code></li>\n<li><code>space-around</code>\n<ul>\n<li>distributes all the items evenly along the main axis with a bit of space left at either end.</li>\n</ul>\n</li>\n<li><code>space-between</code>\n<ul>\n<li>similar to <code>space-around</code> except that it doesn’t leave any space at either end.</li>\n</ul>\n</li>\n</ul>\n<h3 id="justify-items"><code>justify-items</code><a class="anchor" href="#justify-items"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>⚠️ is ignored in flexbox layouts.</li>\n</ul>\n<h2 id="ordering-flex-items">Ordering flex items<a class="anchor" href="#ordering-flex-items"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="changing-the-layout-order-of-flex-items-without-affecting-the-source-order">changing the layout order of flex items without affecting the source order<a class="anchor" href="#changing-the-layout-order-of-flex-items-without-affecting-the-source-order"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="order"><code>order</code><a class="anchor" href="#order"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>0</code>\n<ul>\n<li>by default</li>\n</ul>\n</li>\n<li><code>-1</code>\n<ul>\n<li>to make items appear earlier than items whose value is 0</li>\n</ul>\n</li>\n<li>📌with higher specified order values will appear later in the display order than items with lower order values.</li>\n</ul>\n<h2 id="nested-flex-boxes">Nested flex boxes<a class="anchor" href="#nested-flex-boxes"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="to-set-a-flex-item-to-also-be-a-flex-container-so-that-its-children-are-also-laid-out-like-flexible-boxes">to set a flex item to also be a flex container, so that its children are also laid out like flexible boxes<a class="anchor" href="#to-set-a-flex-item-to-also-be-a-flex-container-so-that-its-children-are-also-laid-out-like-flexible-boxes"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="cross-browser-compatibility">Cross-browser compatibility<a class="anchor" href="#cross-browser-compatibility"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="cross-browser-testing"><a href="https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing">Cross browser testing</a><a class="anchor" href="#cross-browser-testing"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="flexbox-guide-and-resources">Flexbox Guide and Resources<a class="anchor" href="#flexbox-guide-and-resources"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="css-tricks-guide-to-flexbox"><a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">CSS-Tricks Guide to Flexbox</a><a class="anchor" href="#css-tricks-guide-to-flexbox"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="flexbox-froggy"><a href="https://flexboxfroggy.com/">Flexbox Froggy</a><a class="anchor" href="#flexbox-froggy"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={category:"Web Design",aliases:["Flexbox"],draft:!1,title:"Flexbox",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-25T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",comment:"⭐⭐⭐",difficulty:"Hard",topic:["Layout"],Datereviewed:"2024-01-18T16:00:00.000Z",reviewed:2,"linter-yaml-title-alias":"Flexbox",minutes:2,words:377},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/layout/flexbox.md",url=void 0;function rawContent(){return"\n# Flexbox\n\n## `display:flex`\n\n### to the parent element of the elements you want to lay out\n\n## Axis\n\n### ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Flexbox-Axis.png)\n\n## `flex-flow: row wrap`\n\n### `flex-direction: row/ column/ row-reverse/ column-reverse`\n\n### `flex-wrap: wrap`\n\n- to prevent overflow content\n\n## Flexible sizing of flex items\n\n### Default Behavior (when flex container is too small/ big to contain items)\n\n- shrink/ grow flex items to fit the container\n- otherwise: overflow happens\n\n### `flex`\n\n- Shorthand\n  - `flex: 1 1 0%`\n    - allow a flex item to grow and shrink, ignoring its initial size\n  - `flex: 1 1 auto`\n    - allow a flex item to grow and shrink, taking into account its initial size\n  - `flex: 0 1 auto`\n    - allow a flex item to shrink but not grow, taking into account its _initial_ size\n  - `flex: none`\n    - prevent a flex item from growing or shrinking\n- `flex-grow: 1`\n  - `flex:1`\n    - the flex item is allowed to grow to fill any available space along the main axis of the flex container\n    - If set on each item\n      - means they'll all take up an equal amount of the spare space left after properties like padding and margin have been set.\n    - 📌`flex: 1 200px;`\n      - Each flex item will first be given 200px of the available space. After that, the rest of the available space will be shared according to the proportion units.\n- `flex-shrink: 2`\n  - default value :1\n    - each item would be shrunk by equal size\n  - the item will shrink twice/ x times as much as the other when the container gets smaller\n- `flex-basis: 200px`\n  - `flex: 200px`\n    - means that each will be at least 200px wide.\n\n## Horizontal and vertical alignment\n\n### `align-items`\n\n- 📌controls where the flex items sit on the cross axis.\n- `strech`\n  - by default\n  - stretches all flex items to fill the parent in the direction of the cross axis.\n- `center`\n  - centered vertically\n- `flex-start`/ `flex-end`\n  - align all items at the start and end of the cross axis respectively.\n\n### `align-self`\n\n- override the `align-items` behavior for individual flex items\n\n### `justify-content`\n\n- controls where the flex items sit on the main axis.\n- `flex-start`\n  - by default\n- `flex-end`\n- `space-around`\n  - distributes all the items evenly along the main axis with a bit of space left at either end.\n- `space-between`\n  - similar to `space-around` except that it doesn't leave any space at either end.\n\n### `justify-items`\n\n- ⚠️ is ignored in flexbox layouts.\n\n## Ordering flex items\n\n### changing the layout order of flex items without affecting the source order\n\n### `order`\n\n- `0`\n  - by default\n- `-1`\n  - to make items appear earlier than items whose value is 0\n- 📌with higher specified order values will appear later in the display order than items with lower order values.\n\n## Nested flex boxes\n\n### to set a flex item to also be a flex container, so that its children are also laid out like flexible boxes\n\n## Cross-browser compatibility\n\n### [Cross browser testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)\n\n## Flexbox Guide and Resources\n\n### [CSS-Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)\n\n### [Flexbox Froggy](https://flexboxfroggy.com/)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"flexbox",text:"Flexbox#"},{depth:2,slug:"displayflex",text:"display:flex#"},{depth:3,slug:"to-the-parent-element-of-the-elements-you-want-to-lay-out",text:"to the parent element of the elements you want to lay out#"},{depth:2,slug:"axis",text:"Axis#"},{depth:3,slug:"",text:""},{depth:2,slug:"flex-flow-row-wrap",text:"flex-flow: row wrap#"},{depth:3,slug:"flex-direction-row-column-row-reverse-column-reverse",text:"flex-direction: row/ column/ row-reverse/ column-reverse#"},{depth:3,slug:"flex-wrap-wrap",text:"flex-wrap: wrap#"},{depth:2,slug:"flexible-sizing-of-flex-items",text:"Flexible sizing of flex items#"},{depth:3,slug:"default-behavior-when-flex-container-is-too-small-big-to-contain-items",text:"Default Behavior (when flex container is too small/ big to contain items)#"},{depth:3,slug:"flex",text:"flex#"},{depth:2,slug:"horizontal-and-vertical-alignment",text:"Horizontal and vertical alignment#"},{depth:3,slug:"align-items",text:"align-items#"},{depth:3,slug:"align-self",text:"align-self#"},{depth:3,slug:"justify-content",text:"justify-content#"},{depth:3,slug:"justify-items",text:"justify-items#"},{depth:2,slug:"ordering-flex-items",text:"Ordering flex items#"},{depth:3,slug:"changing-the-layout-order-of-flex-items-without-affecting-the-source-order",text:"changing the layout order of flex items without affecting the source order#"},{depth:3,slug:"order",text:"order#"},{depth:2,slug:"nested-flex-boxes",text:"Nested flex boxes#"},{depth:3,slug:"to-set-a-flex-item-to-also-be-a-flex-container-so-that-its-children-are-also-laid-out-like-flexible-boxes",text:"to set a flex item to also be a flex container, so that its children are also laid out like flexible boxes#"},{depth:2,slug:"cross-browser-compatibility",text:"Cross-browser compatibility#"},{depth:3,slug:"cross-browser-testing",text:"Cross browser testing#"},{depth:2,slug:"flexbox-guide-and-resources",text:"Flexbox Guide and Resources#"},{depth:3,slug:"css-tricks-guide-to-flexbox",text:"CSS-Tricks Guide to Flexbox#"},{depth:3,slug:"flexbox-froggy",text:"Flexbox Froggy#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};