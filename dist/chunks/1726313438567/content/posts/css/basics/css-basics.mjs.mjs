import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="css-basics">CSS Basics<a class="anchor" href="#css-basics"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="全称">全称<a class="anchor" href="#全称"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="层叠样式表-cascading-style-sheets">层叠样式表 (Cascading Style Sheets)<a class="anchor" href="#层叠样式表-cascading-style-sheets"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="一种样式表语言用来描述-html-或-xml包括如-svgmathml-或-xhtml-之类的-xml-分支语言文档的呈现方式">一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式<a class="anchor" href="#一种样式表语言用来描述-html-或-xml包括如-svgmathml-或-xhtml-之类的-xml-分支语言文档的呈现方式"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="apply-css-to-html">Apply CSS to HTML<a class="anchor" href="#apply-css-to-html"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="external-stylesheet">External stylesheet<a class="anchor" href="#external-stylesheet"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>You can link a single CSS file to multiple web pages, styling all of them with the same CSS stylesheet</li>\n<li><code>&#x3C;link rel="stylesheet" href="styles.css" /></code></li>\n</ul>\n<h3 id="internal-stylesheet">Internal stylesheet<a class="anchor" href="#internal-stylesheet"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>&#x3C;style>&#x3C;/style></code></li>\n<li>internal stylesheets can be useful: when you’re working with a content management system where you are blocked from modifying external CSS files</li>\n</ul>\n<h3 id="inline-styles">Inline styles<a class="anchor" href="#inline-styles"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>&#x3C;p style="color:red;">This is my first CSS example&#x3C;/p></code></li>\n<li>Avoid using CSS in this way, when possible\n<ul>\n<li>One styling change might require multiple edits within a single web page</li>\n<li>making everything more difficult to read and understand</li>\n</ul>\n</li>\n</ul>\n<h2 id="comments">Comments<a class="anchor" href="#comments"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="this-helps-to-navigate-the-codebase-as-it-gets-larger">This helps to navigate the codebase as it gets larger<a class="anchor" href="#this-helps-to-navigate-the-codebase-as-it-gets-larger"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="white-space">White space<a class="anchor" href="#white-space"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="can-improve-readability">can improve readability<a class="anchor" href="#can-improve-readability"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="separate-distinct-values-from-one-another-by-at-least-one-space">separate distinct values from one another by at least one space<a class="anchor" href="#separate-distinct-values-from-one-another-by-at-least-one-space"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="how-css-works">How CSS works?<a class="anchor" href="#how-css-works"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="what-happens-when-a-browser-loads-a-webpage-33dcf977-14ca-57a2">❓What happens when a browser loads a webpage ^33dcf977-14ca-57a2<a class="anchor" href="#what-happens-when-a-browser-loads-a-webpage-33dcf977-14ca-57a2"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>The browser parses the fetched CSS, and sorts the different rules by their selector types into different “buckets”, e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree)</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-Browser-loads-webpage.png" alt=""></li>\n</ul>\n<h3 id="what-happens-if-a-browser-encounters-css-it-doesnt-understand-a07d7472-a8d6-6940">❓What happens if a browser encounters CSS it doesn’t understand? ^a07d7472-a8d6-6940<a class="anchor" href="#what-happens-if-a-browser-encounters-css-it-doesnt-understand-a07d7472-a8d6-6940"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>it does nothing, and just moves on to the next bit of CSS</li>\n<li>This enables basic fallback styling.\n<ul>\n<li>It means that you can use new CSS as an enhancement</li>\n</ul>\n</li>\n</ul>\n<h3 id="️css-cascade-specificity-and-inheritance-优先级原理">🏷️<a href="CSS-Cascade-Specificity-and-Inheritance-(%E4%BC%98%E5%85%88%E7%BA%A7%E5%8E%9F%E7%90%86)">CSS Cascade Specificity and Inheritance (优先级原理)</a><a class="anchor" href="#️css-cascade-specificity-and-inheritance-优先级原理"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={topic:null,category:"Web Design",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["CSS Basics"],draft:!1,title:"CSS Basics",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-18T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z","linter-yaml-title-alias":"CSS Basics",minutes:1,words:265},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/basics/css-basics.md",url=void 0;function rawContent(){return'\n# CSS Basics\n\n## 全称\n\n### 层叠样式表 (Cascading Style Sheets)\n\n### 一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式\n\n## Apply CSS to HTML\n\n### External stylesheet\n\n- You can link a single CSS file to multiple web pages, styling all of them with the same CSS stylesheet\n- `<link rel="stylesheet" href="styles.css" />`\n\n### Internal stylesheet\n\n- `<style></style>`\n- internal stylesheets can be useful: when you\'re working with a content management system where you are blocked from modifying external CSS files\n\n### Inline styles\n\n- `<p style="color:red;">This is my first CSS example</p>`\n- Avoid using CSS in this way, when possible\n  - One styling change might require multiple edits within a single web page\n  - making everything more difficult to read and understand\n\n## Comments\n\n### This helps to navigate the codebase as it gets larger\n\n## White space\n\n### can improve readability\n\n### separate distinct values from one another by at least one space\n\n## How CSS works?\n\n### ❓What happens when a browser loads a webpage ^33dcf977-14ca-57a2\n\n- The browser parses the fetched CSS, and sorts the different rules by their selector types into different "buckets", e.g. element, class, ID, and so on. Based on the selectors it finds, it works out which rules should be applied to which nodes in the DOM, and attaches style to them as required (this intermediate step is called a render tree)\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/O-CSS-Browser-loads-webpage.png)\n\n### ❓What happens if a browser encounters CSS it doesn\'t understand? ^a07d7472-a8d6-6940\n\n- it does nothing, and just moves on to the next bit of CSS\n- This enables basic fallback styling.\n  - It means that you can use new CSS as an enhancement\n\n### 🏷️[CSS Cascade Specificity and Inheritance (优先级原理)](<CSS-Cascade-Specificity-and-Inheritance-(优先级原理)>)\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"css-basics",text:"CSS Basics#"},{depth:2,slug:"全称",text:"全称#"},{depth:3,slug:"层叠样式表-cascading-style-sheets",text:"层叠样式表 (Cascading Style Sheets)#"},{depth:3,slug:"一种样式表语言用来描述-html-或-xml包括如-svgmathml-或-xhtml-之类的-xml-分支语言文档的呈现方式",text:"一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现方式#"},{depth:2,slug:"apply-css-to-html",text:"Apply CSS to HTML#"},{depth:3,slug:"external-stylesheet",text:"External stylesheet#"},{depth:3,slug:"internal-stylesheet",text:"Internal stylesheet#"},{depth:3,slug:"inline-styles",text:"Inline styles#"},{depth:2,slug:"comments",text:"Comments#"},{depth:3,slug:"this-helps-to-navigate-the-codebase-as-it-gets-larger",text:"This helps to navigate the codebase as it gets larger#"},{depth:2,slug:"white-space",text:"White space#"},{depth:3,slug:"can-improve-readability",text:"can improve readability#"},{depth:3,slug:"separate-distinct-values-from-one-another-by-at-least-one-space",text:"separate distinct values from one another by at least one space#"},{depth:2,slug:"how-css-works",text:"How CSS works?#"},{depth:3,slug:"what-happens-when-a-browser-loads-a-webpage-33dcf977-14ca-57a2",text:"❓What happens when a browser loads a webpage ^33dcf977-14ca-57a2#"},{depth:3,slug:"what-happens-if-a-browser-encounters-css-it-doesnt-understand-a07d7472-a8d6-6940",text:"❓What happens if a browser encounters CSS it doesn’t understand? ^a07d7472-a8d6-6940#"},{depth:3,slug:"️css-cascade-specificity-and-inheritance-优先级原理",text:"🏷️CSS Cascade Specificity and Inheritance (优先级原理)#"}]}const Content=createComponent(((e,a,n)=>{const{layout:s,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};