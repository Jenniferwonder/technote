import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="attribute-selector">Attribute Selector<a class="anchor" href="#attribute-selector"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="atitle-"><code>a[title] {}</code><a class="anchor" href="#atitle-"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>select elements based on <strong>a certain attribute on an element</strong></li>\n</ul>\n<h3 id="ahrefhttpsexamplecom-"><code>a[href="https://example.com"] {}</code><a class="anchor" href="#ahrefhttpsexamplecom-"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>make a selection based on <strong>the presence of an attribute with a particular value</strong></li>\n</ul>\n<h3 id="pclassspecial"><code>p[class~="special"]</code><a class="anchor" href="#pclassspecial"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Matches elements with an attribute whose value is <strong>exactly value, or contains value in its (space separated) list of values</strong>.</li>\n</ul>\n<h3 id="divlangzh"><code>div[lang|="zh"]</code><a class="anchor" href="#divlangzh"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Matches elements with an attribute whose value is <strong>exactly value or begins with value immediately followed by a hyphen</strong>.</li>\n</ul>\n<h3 id="liclassbox-"><code>li[class^="box-"]</code><a class="anchor" href="#liclassbox-"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Matches elements with an attribute, whose value <strong>begins with value</strong>.</li>\n</ul>\n<h3 id="liclass-box"><code>li[class$="-box"]</code><a class="anchor" href="#liclass-box"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Matches elements with an attr attribute whose value <strong>ends with value</strong>.</li>\n</ul>\n<h3 id="liclassbox"><code>li[class*="box"]</code><a class="anchor" href="#liclassbox"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Matches elements with an attr attribute whose value <strong>contains value anywhere within the string</strong>.</li>\n</ul>\n<h3 id="-to-match-case-insensitive">📌 To match <strong>case-insensitive</strong><a class="anchor" href="#-to-match-case-insensitive"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>use the value <code>i </code>before the closing bracket</li>\n<li><code>li[class^="a" i] { }</code></li>\n</ul>',frontmatter={aliases:["Attribute Selector"],category:"Web Design",comment:null,draft:!1,title:"Attribute Selector",type:"D",tags:["CSS"],DateStarted:"2024-01-09T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:null,reviewed:1,Datereviewed:"2024-01-08T16:00:00.000Z",topic:"Selectors",difficulty:"Good","linter-yaml-title-alias":"Attribute Selector",minutes:1,words:108},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/css-selectors/attribute-selectors.md",url=void 0;function rawContent(){return'\n# Attribute Selector\n\n### `a[title] {}`\n\n- select elements based on **a certain attribute on an element**\n\n### `a[href="https://example.com"] {}`\n\n- make a selection based on **the presence of an attribute with a particular value**\n\n### `p[class~="special"]`\n\n- Matches elements with an attribute whose value is **exactly value, or contains value in its (space separated) list of values**.\n\n### `div[lang|="zh"]`\n\n- Matches elements with an attribute whose value is **exactly value or begins with value immediately followed by a hyphen**.\n\n### `li[class^="box-"]`\n\n- Matches elements with an attribute, whose value **begins with value**.\n\n### `li[class$="-box"]`\n\n- Matches elements with an attr attribute whose value **ends with value**.\n\n### `li[class*="box"]`\n\n- Matches elements with an attr attribute whose value **contains value anywhere within the string**.\n\n### 📌 To match **case-insensitive**\n\n- use the value `i `before the closing bracket\n- `li[class^="a" i] { }`\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"attribute-selector",text:"Attribute Selector#"},{depth:3,slug:"atitle-",text:"a[title] {}#"},{depth:3,slug:"ahrefhttpsexamplecom-",text:'a[href="https://example.com"] {}#'},{depth:3,slug:"pclassspecial",text:'p[class~="special"]#'},{depth:3,slug:"divlangzh",text:'div[lang|="zh"]#'},{depth:3,slug:"liclassbox-",text:'li[class^="box-"]#'},{depth:3,slug:"liclass-box",text:'li[class$="-box"]#'},{depth:3,slug:"liclassbox",text:'li[class*="box"]#'},{depth:3,slug:"-to-match-case-insensitive",text:"📌 To match case-insensitive#"}]}const Content=createComponent(((e,t,a)=>{const{layout:n,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};