import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="styling-links">Styling Links<a class="anchor" href="#styling-links"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links#lets_look_at_some_links">Styling Links</a></li>\n</ul>\n<h2 id="link-states--default-styles">Link states &#x26; Default styles<a class="anchor" href="#link-states--default-styles"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="a"><strong>a</strong><a class="anchor" href="#a"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>&#x3C;a href="http://example.com">link&#x3C;/a></code></li>\n<li>Select the anchor element</li>\n</ul>\n<h3 id="link"><strong>:link</strong><a class="anchor" href="#link"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>A link that has a destination (i.e., not just a named anchor)</li>\n<li>📌Links are underlined.</li>\n</ul>\n<h3 id="visited"><strong>:visited</strong><a class="anchor" href="#visited"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>unvisited, visited</li>\n<li>📌Unvisited links are blue. Visited links are purple.</li>\n</ul>\n<h3 id="focus"><strong>:focus</strong><a class="anchor" href="#focus"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>focused via the keyboard</li>\n<li>📌Focused links have an outline around them</li>\n</ul>\n<h3 id="hover"><strong>:hover</strong><a class="anchor" href="#hover"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>being hovered over</li>\n<li>📌Hovering a link makes the mouse pointer change to a little hand icon.</li>\n</ul>\n<h3 id="active"><strong>:active</strong><a class="anchor" href="#active"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>! When a button is clicked</li>\n<li>in the process of being clicked (activated)</li>\n<li>📌Active links are red</li>\n</ul>\n<h3 id="-the-above-order-matters-when-styling-links-cuz-link-styles-build-on-one-another">⭐ The above order matters when styling links, cuz link styles build on one another<a class="anchor" href="#-the-above-order-matters-when-styling-links-cuz-link-styles-build-on-one-another"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="to-change-default-styles">To change default styles<a class="anchor" href="#to-change-default-styles"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="color"><code>color</code><a class="anchor" href="#color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="cursor"><code>cursor</code><a class="anchor" href="#cursor"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>mouse pointer style</li>\n</ul>\n<h3 id="outline"><code>outline</code><a class="anchor" href="#outline"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>text outline, similar to a border</li>\n</ul>\n<h3 id="background"><code>background</code><a class="anchor" href="#background"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="refer-to-typography">Refer to <a href="Typography">Typography</a><a class="anchor" href="#refer-to-typography"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>text-align</code></li>\n<li><code>line-height</code></li>\n<li><code>text-decoration</code></li>\n</ul>\n<h2 id="including-icons-on-links">Including icons on links<a class="anchor" href="#including-icons-on-links"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id=""><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695366049825image.png" alt=""></h3>\n<h3 id="specify-the-position-as-100-of-the-way-to-the-right-of-the-text-content-and-0-pixels-from-the-top">specify the position as 100% of the way to the right of the text content, and 0 pixels from the top.<a class="anchor" href="#specify-the-position-as-100-of-the-way-to-the-right-of-the-text-content-and-0-pixels-from-the-top"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="refer-to-css-selectors">Refer to <a href="CSS-Selectors">CSS Selectors</a><a class="anchor" href="#refer-to-css-selectors"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="styling-links-as-buttons">Styling links as buttons<a class="anchor" href="#styling-links-as-buttons"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={category:"Web Design",aliases:["Styling Links"],draft:!1,title:"Styling Links",type:"D",tags:["CSS"],DateStarted:"2023-09-22T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,comment:"⭐⭐",Datereviewed:"2023-09-22T16:00:00.000Z",reviewed:1,difficulty:"Hard",topic:"Text","linter-yaml-title-alias":"Styling Links",minutes:1,words:124},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/typography/styling-links.md",url=void 0;function rawContent(){return'\n# Styling Links\n\n## Reference\n\n- [Styling Links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links#lets_look_at_some_links)\n\n## Link states & Default styles\n\n### **a**\n\n- `<a href="http://example.com">link</a>`\n- Select the anchor element\n\n### **:link**\n\n- A link that has a destination (i.e., not just a named anchor)\n- 📌Links are underlined.\n\n### **:visited**\n\n- unvisited, visited\n- 📌Unvisited links are blue. Visited links are purple.\n\n### **:focus**\n\n- focused via the keyboard\n- 📌Focused links have an outline around them\n\n### **:hover**\n\n- being hovered over\n- 📌Hovering a link makes the mouse pointer change to a little hand icon.\n\n### **:active**\n\n- ! When a button is clicked\n- in the process of being clicked (activated)\n- 📌Active links are red\n\n### ⭐ The above order matters when styling links, cuz link styles build on one another\n\n## To change default styles\n\n### `color`\n\n### `cursor`\n\n- mouse pointer style\n\n### `outline`\n\n- text outline, similar to a border\n\n### `background`\n\n### Refer to [Typography](Typography)\n\n- `text-align`\n- `line-height`\n- `text-decoration`\n\n## Including icons on links\n\n### ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695366049825image.png)\n\n### specify the position as 100% of the way to the right of the text content, and 0 pixels from the top.\n\n### Refer to [CSS Selectors](CSS-Selectors)\n\n## Styling links as buttons\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"styling-links",text:"Styling Links#"},{depth:2,slug:"reference",text:"Reference#"},{depth:2,slug:"link-states--default-styles",text:"Link states & Default styles#"},{depth:3,slug:"a",text:"a#"},{depth:3,slug:"link",text:":link#"},{depth:3,slug:"visited",text:":visited#"},{depth:3,slug:"focus",text:":focus#"},{depth:3,slug:"hover",text:":hover#"},{depth:3,slug:"active",text:":active#"},{depth:3,slug:"-the-above-order-matters-when-styling-links-cuz-link-styles-build-on-one-another",text:"⭐ The above order matters when styling links, cuz link styles build on one another#"},{depth:2,slug:"to-change-default-styles",text:"To change default styles#"},{depth:3,slug:"color",text:"color#"},{depth:3,slug:"cursor",text:"cursor#"},{depth:3,slug:"outline",text:"outline#"},{depth:3,slug:"background",text:"background#"},{depth:3,slug:"refer-to-typography",text:"Refer to Typography#"},{depth:2,slug:"including-icons-on-links",text:"Including icons on links#"},{depth:3,slug:"",text:""},{depth:3,slug:"specify-the-position-as-100-of-the-way-to-the-right-of-the-text-content-and-0-pixels-from-the-top",text:"specify the position as 100% of the way to the right of the text content, and 0 pixels from the top.#"},{depth:3,slug:"refer-to-css-selectors",text:"Refer to CSS Selectors#"},{depth:2,slug:"styling-links-as-buttons",text:"Styling links as buttons#"}]}const Content=createComponent(((n,e,t)=>{const{layout:a,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};