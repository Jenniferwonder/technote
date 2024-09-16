import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="pseudo-elements-selectors-伪元素">Pseudo Elements Selectors (伪元素)<a class="anchor" href="#pseudo-elements-selectors-伪元素"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="select-a-certain-part-of-an-element-rather-than-the-element-itself">Select <strong>a certain part of an element</strong> rather than the element itself<a class="anchor" href="#select-a-certain-part-of-an-element-rather-than-the-element-itself"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements</li>\n</ul>\n<h3 id="structural">Structural<a class="anchor" href="#structural"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>p::first-line{ }</code>\n<ul>\n<li>Selects the first line of text inside an element</li>\n<li>If the number of words increases or decreases it will still only select the first line</li>\n</ul>\n</li>\n<li><code>::first-letter</code></li>\n<li><code>::before</code></li>\n<li><code>::after</code>\n<ul>\n<li>! Set other properties to make sure it’s identical to the button parent\n<ul>\n<li>display: in-line block</li>\n<li>height: 100%</li>\n<li>width: 100%</li>\n<li>border-radius: 100px</li>\n</ul>\n</li>\n<li>! Set its position behind the buttons\n<ul>\n<li>position: absolute\n<ul>\n<li>! for child element</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>:hover::after</code></li>\n</ul>\n</li>\n</ul>\n<h3 id="selection">Selection<a class="anchor" href="#selection"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>::selection</code>\n<ul>\n<li>Applies styles to the portion of a document that has been highlighted (selected) by the user</li>\n</ul>\n</li>\n</ul>\n<h3 id="marker-list-related">Marker (List related)<a class="anchor" href="#marker-list-related"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>::marker</code>\n<ul>\n<li>Styles the marker box of a list item. It allows you to style the bullet or number in a list</li>\n</ul>\n</li>\n</ul>\n<h3 id="placeholder">Placeholder<a class="anchor" href="#placeholder"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>::placeholder</code></li>\n</ul>\n<h3 id="scrollbar">Scrollbar<a class="anchor" href="#scrollbar"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>::scrollbar</code></li>\n<li><code>::track</code></li>\n<li><code>::thumb</code></li>\n<li><code>::corner</code></li>\n</ul>\n<h3 id="file-input-form-related">File Input (Form related)<a class="anchor" href="#file-input-form-related"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>::file-selector-button</code></li>\n<li><code>::file-selector-arrow</code></li>\n</ul>\n<h3 id="to-generate-content">To Generate Content<a class="anchor" href="#to-generate-content"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>::content</code></li>\n<li><code>content:""</code>\n<ul>\n<li>The property must be used along with</li>\n<li>Whenever you see these selectors, look at the content property to see what is being added to the HTML element.</li>\n</ul>\n</li>\n<li>📌to insert an icon\n<ul>\n<li><code>.box::after {content: " ➥";}</code>\n<ul>\n<li>a visual indicator that we wouldn’t want read out by a screen reader</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>📌to insert an empty string\n<ul>\n<li>set this to <code>display: block</code> in order that we can style it with a width and height. We then use CSS to style it just like any element</li>\n</ul>\n</li>\n<li>📌Example: <a href="https://cssarrowplease.com/">CSS Arrow Box</a></li>\n</ul>\n<h3 id="backdrop">Backdrop<a class="anchor" href="#backdrop"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>::backdrop</code></li>\n</ul>',frontmatter={aliases:["Pseudo Elements Selectors (伪元素)"],category:"Web Design",comment:null,draft:!1,title:"Pseudo Elements Selectors (伪元素)",type:"D",tags:["CSS"],DateStarted:"2024-01-09T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,reviewed:1,Datereviewed:"2024-01-08T16:00:00.000Z",topic:"Selectors",difficulty:"Hard","linter-yaml-title-alias":"Pseudo Elements Selectors (伪元素)",minutes:1,words:209},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/css-selectors/pseudo-elements-selectors-伪元素.md",url=void 0;function rawContent(){return'\n# Pseudo Elements Selectors (伪元素)\n\n### Select **a certain part of an element** rather than the element itself\n\n- Act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements\n\n### Structural\n\n- `p::first-line{ }`\n  - Selects the first line of text inside an element\n  - If the number of words increases or decreases it will still only select the first line\n- `::first-letter`\n- `::before`\n- `::after`\n  - ! Set other properties to make sure it\'s identical to the button parent\n    - display: in-line block\n    - height: 100%\n    - width: 100%\n    - border-radius: 100px\n  - ! Set its position behind the buttons\n    - position: absolute\n      - ! for child element\n  - `:hover::after`\n\n### Selection\n\n- `::selection`\n  - Applies styles to the portion of a document that has been highlighted (selected) by the user\n\n### Marker (List related)\n\n- `::marker`\n  - Styles the marker box of a list item. It allows you to style the bullet or number in a list\n\n### Placeholder\n\n- `::placeholder`\n\n### Scrollbar\n\n- `::scrollbar`\n- `::track`\n- `::thumb`\n- `::corner`\n\n### File Input (Form related)\n\n- `::file-selector-button`\n- `::file-selector-arrow`\n\n### To Generate Content\n\n- `::content`\n- `content:""`\n  - The property must be used along with\n  - Whenever you see these selectors, look at the content property to see what is being added to the HTML element.\n- 📌to insert an icon\n  - `.box::after {content: " ➥";}`\n    - a visual indicator that we wouldn\'t want read out by a screen reader\n- 📌to insert an empty string\n  - set this to `display: block` in order that we can style it with a width and height. We then use CSS to style it just like any element\n- 📌Example: [CSS Arrow Box](https://cssarrowplease.com/)\n\n### Backdrop\n\n- `::backdrop`\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"pseudo-elements-selectors-伪元素",text:"Pseudo Elements Selectors (伪元素)#"},{depth:3,slug:"select-a-certain-part-of-an-element-rather-than-the-element-itself",text:"Select a certain part of an element rather than the element itself#"},{depth:3,slug:"structural",text:"Structural#"},{depth:3,slug:"selection",text:"Selection#"},{depth:3,slug:"marker-list-related",text:"Marker (List related)#"},{depth:3,slug:"placeholder",text:"Placeholder#"},{depth:3,slug:"scrollbar",text:"Scrollbar#"},{depth:3,slug:"file-input-form-related",text:"File Input (Form related)#"},{depth:3,slug:"to-generate-content",text:"To Generate Content#"},{depth:3,slug:"backdrop",text:"Backdrop#"}]}const Content=createComponent(((e,t,n)=>{const{layout:l,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};