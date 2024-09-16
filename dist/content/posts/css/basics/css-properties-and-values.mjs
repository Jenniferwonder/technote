import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="css/basics/css-properties-and-values.md",collection="posts",slug="css/basics/css-properties-and-values",body="\n## CSS Properties and values\n\n### When a property is paired with a value, this pairing is called a **CSS declaration**\n\n### CSS declarations are found within **CSS Declaration Blocks**\n\n- ![](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured/declaration-block.png)\n\n### CSS declaration blocks are paired with selectors to produce **CSS rulesets (or CSS rules)**\n\n### Shorthand properties\n\n- `font`\n- `padding`\n- `margin`\n- `border`\n- 📌4-value shorthands\n  - in the order **top, right, bottom, left** (**clockwise from the top**)\n- 📌2-value shorthands\n  - for **top/bottom**, then **left/right**\n- 📌set several values in a single line\n",data={title:"css-properties-and-values",DateStarted:new Date(16949952e5),draft:!1,tags:["CSS"],category:"Web Design"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/basics/css-properties-and-values.md",rawData:void 0},html='<h2 id="css-properties-and-values">CSS Properties and values<a class="anchor" href="#css-properties-and-values"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="when-a-property-is-paired-with-a-value-this-pairing-is-called-a-css-declaration">When a property is paired with a value, this pairing is called a <strong>CSS declaration</strong><a class="anchor" href="#when-a-property-is-paired-with-a-value-this-pairing-is-called-a-css-declaration"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="css-declarations-are-found-within-css-declaration-blocks">CSS declarations are found within <strong>CSS Declaration Blocks</strong><a class="anchor" href="#css-declarations-are-found-within-css-declaration-blocks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><img src="https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured/declaration-block.png" alt=""></li>\n</ul>\n<h3 id="css-declaration-blocks-are-paired-with-selectors-to-produce-css-rulesets-or-css-rules">CSS declaration blocks are paired with selectors to produce <strong>CSS rulesets (or CSS rules)</strong><a class="anchor" href="#css-declaration-blocks-are-paired-with-selectors-to-produce-css-rulesets-or-css-rules"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="shorthand-properties">Shorthand properties<a class="anchor" href="#shorthand-properties"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>font</code></li>\n<li><code>padding</code></li>\n<li><code>margin</code></li>\n<li><code>border</code></li>\n<li>📌4-value shorthands\n<ul>\n<li>in the order <strong>top, right, bottom, left</strong> (<strong>clockwise from the top</strong>)</li>\n</ul>\n</li>\n<li>📌2-value shorthands\n<ul>\n<li>for <strong>top/bottom</strong>, then <strong>left/right</strong></li>\n</ul>\n</li>\n<li>📌set several values in a single line</li>\n</ul>',frontmatter={category:"Web Design",draft:!1,title:"css-properties-and-values",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-18T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",reviewed:1,Datereviewed:"2023-09-20T16:00:00.000Z",difficulty:"Hard",comment:"⭐",topic:"Basics",minutes:1,words:60},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/basics/css-properties-and-values.md",url=void 0;function rawContent(){return"\n## CSS Properties and values\n\n### When a property is paired with a value, this pairing is called a **CSS declaration**\n\n### CSS declarations are found within **CSS Declaration Blocks**\n\n- ![](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/How_CSS_is_structured/declaration-block.png)\n\n### CSS declaration blocks are paired with selectors to produce **CSS rulesets (or CSS rules)**\n\n### Shorthand properties\n\n- `font`\n- `padding`\n- `margin`\n- `border`\n- 📌4-value shorthands\n  - in the order **top, right, bottom, left** (**clockwise from the top**)\n- 📌2-value shorthands\n  - for **top/bottom**, then **left/right**\n- 📌set several values in a single line\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"css-properties-and-values",text:"CSS Properties and values#"},{depth:3,slug:"when-a-property-is-paired-with-a-value-this-pairing-is-called-a-css-declaration",text:"When a property is paired with a value, this pairing is called a CSS declaration#"},{depth:3,slug:"css-declarations-are-found-within-css-declaration-blocks",text:"CSS declarations are found within CSS Declaration Blocks#"},{depth:3,slug:"css-declaration-blocks-are-paired-with-selectors-to-produce-css-rulesets-or-css-rules",text:"CSS declaration blocks are paired with selectors to produce CSS rulesets (or CSS rules)#"},{depth:3,slug:"shorthand-properties",text:"Shorthand properties#"}]}const Content=createComponent(((e,t,s)=>{const{layout:r,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),cssPropertiesAndValues=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,cssPropertiesAndValues,data,id,slug};