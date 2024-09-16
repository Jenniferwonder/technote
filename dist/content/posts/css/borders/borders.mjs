import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="css/borders/borders.md",collection="posts",slug="css/borders/borders",body="\n# Borders\n\n## 📌[Border Radius (Rounded Corners)](<Border-Radius-(Rounded-Corners)>)\n\n## Shorthand Property & Values\n\n### `border: width, style, color;`\n\n### `border-width`\n\n### `border-style`\n\n- `solid`\n- `dashed`\n- `dotted`\n- `double`\n- `hidden`\n- `none`\n\n### `border-color`\n\n## Divide\n\n### 💡controlling the border width between elements\n\n- left, right, top, bottom...\n\n### Width\n\n- `border-left-width`\n- `border-right-width`\n- `border-top-width`\n- `border-bottom-width`\n\n### Color\n\n### Style\n\n## Outline\n\n### 💡used to improve accessibility by providing visual focus indicators\n\n### `outline-width`\n\n### `outline-color`\n\n### `outline-style`\n\n### `ourline-offset`\n\n## Ring\n\n### 💡to create a customizable ring around an element\n\n### Width\n\n- `ring-0`\n- `ring-1`\n- `ring-2`\n- `ring`\n- `ring-inset`\n\n### Color\n\n- [Setting the ring color](https://tailwindcss.com/docs/ring-color#setting-the-ring-color)\n\n### Offset-width\n\n### Offset-color\n\n### 🏷️[O-TailwindCSS](O-TailwindCSS)\n\n### 🏷️[Box Shadow](Box-Shadow)\n\n## 📌[Border-Box Explained](Border-Box-Explained)\n\n## 📌[Box Shadow](Box-Shadow)\n",data={title:"Borders",DateStarted:new Date(17047584e5),draft:!1,tags:["CSS"],category:"Web Design"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/borders/borders.md",rawData:void 0},html='<h1 id="borders">Borders<a class="anchor" href="#borders"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="border-radius-rounded-corners">📌<a href="Border-Radius-(Rounded-Corners)">Border Radius (Rounded Corners)</a><a class="anchor" href="#border-radius-rounded-corners"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="shorthand-property--values">Shorthand Property &#x26; Values<a class="anchor" href="#shorthand-property--values"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="border-width-style-color"><code>border: width, style, color;</code><a class="anchor" href="#border-width-style-color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="border-width"><code>border-width</code><a class="anchor" href="#border-width"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="border-style"><code>border-style</code><a class="anchor" href="#border-style"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>solid</code></li>\n<li><code>dashed</code></li>\n<li><code>dotted</code></li>\n<li><code>double</code></li>\n<li><code>hidden</code></li>\n<li><code>none</code></li>\n</ul>\n<h3 id="border-color"><code>border-color</code><a class="anchor" href="#border-color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="divide">Divide<a class="anchor" href="#divide"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="controlling-the-border-width-between-elements">💡controlling the border width between elements<a class="anchor" href="#controlling-the-border-width-between-elements"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>left, right, top, bottom…</li>\n</ul>\n<h3 id="width">Width<a class="anchor" href="#width"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>border-left-width</code></li>\n<li><code>border-right-width</code></li>\n<li><code>border-top-width</code></li>\n<li><code>border-bottom-width</code></li>\n</ul>\n<h3 id="color">Color<a class="anchor" href="#color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="style">Style<a class="anchor" href="#style"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="outline">Outline<a class="anchor" href="#outline"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="used-to-improve-accessibility-by-providing-visual-focus-indicators">💡used to improve accessibility by providing visual focus indicators<a class="anchor" href="#used-to-improve-accessibility-by-providing-visual-focus-indicators"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="outline-width"><code>outline-width</code><a class="anchor" href="#outline-width"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="outline-color"><code>outline-color</code><a class="anchor" href="#outline-color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="outline-style"><code>outline-style</code><a class="anchor" href="#outline-style"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="ourline-offset"><code>ourline-offset</code><a class="anchor" href="#ourline-offset"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="ring">Ring<a class="anchor" href="#ring"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="to-create-a-customizable-ring-around-an-element">💡to create a customizable ring around an element<a class="anchor" href="#to-create-a-customizable-ring-around-an-element"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="width-1">Width<a class="anchor" href="#width-1"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>ring-0</code></li>\n<li><code>ring-1</code></li>\n<li><code>ring-2</code></li>\n<li><code>ring</code></li>\n<li><code>ring-inset</code></li>\n</ul>\n<h3 id="color-1">Color<a class="anchor" href="#color-1"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://tailwindcss.com/docs/ring-color#setting-the-ring-color">Setting the ring color</a></li>\n</ul>\n<h3 id="offset-width">Offset-width<a class="anchor" href="#offset-width"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="offset-color">Offset-color<a class="anchor" href="#offset-color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="️o-tailwindcss">🏷️<a href="O-TailwindCSS">O-TailwindCSS</a><a class="anchor" href="#️o-tailwindcss"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="️box-shadow">🏷️<a href="Box-Shadow">Box Shadow</a><a class="anchor" href="#️box-shadow"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="border-box-explained">📌<a href="Border-Box-Explained">Border-Box Explained</a><a class="anchor" href="#border-box-explained"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="box-shadow">📌<a href="Box-Shadow">Box Shadow</a><a class="anchor" href="#box-shadow"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={category:"Web Design",comment:null,aliases:["Borders"],draft:!1,title:"Borders",type:"D",tags:["CSS"],DateStarted:"2024-01-09T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,topic:"Borders",reviewed:1,Datereviewed:"2024-01-18T16:00:00.000Z",difficulty:"Good","linter-yaml-title-alias":"Borders",minutes:1,words:39},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/borders/borders.md",url=void 0;function rawContent(){return"\n# Borders\n\n## 📌[Border Radius (Rounded Corners)](<Border-Radius-(Rounded-Corners)>)\n\n## Shorthand Property & Values\n\n### `border: width, style, color;`\n\n### `border-width`\n\n### `border-style`\n\n- `solid`\n- `dashed`\n- `dotted`\n- `double`\n- `hidden`\n- `none`\n\n### `border-color`\n\n## Divide\n\n### 💡controlling the border width between elements\n\n- left, right, top, bottom...\n\n### Width\n\n- `border-left-width`\n- `border-right-width`\n- `border-top-width`\n- `border-bottom-width`\n\n### Color\n\n### Style\n\n## Outline\n\n### 💡used to improve accessibility by providing visual focus indicators\n\n### `outline-width`\n\n### `outline-color`\n\n### `outline-style`\n\n### `ourline-offset`\n\n## Ring\n\n### 💡to create a customizable ring around an element\n\n### Width\n\n- `ring-0`\n- `ring-1`\n- `ring-2`\n- `ring`\n- `ring-inset`\n\n### Color\n\n- [Setting the ring color](https://tailwindcss.com/docs/ring-color#setting-the-ring-color)\n\n### Offset-width\n\n### Offset-color\n\n### 🏷️[O-TailwindCSS](O-TailwindCSS)\n\n### 🏷️[Box Shadow](Box-Shadow)\n\n## 📌[Border-Box Explained](Border-Box-Explained)\n\n## 📌[Box Shadow](Box-Shadow)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"borders",text:"Borders#"},{depth:2,slug:"border-radius-rounded-corners",text:"📌Border Radius (Rounded Corners)#"},{depth:2,slug:"shorthand-property--values",text:"Shorthand Property & Values#"},{depth:3,slug:"border-width-style-color",text:"border: width, style, color;#"},{depth:3,slug:"border-width",text:"border-width#"},{depth:3,slug:"border-style",text:"border-style#"},{depth:3,slug:"border-color",text:"border-color#"},{depth:2,slug:"divide",text:"Divide#"},{depth:3,slug:"controlling-the-border-width-between-elements",text:"💡controlling the border width between elements#"},{depth:3,slug:"width",text:"Width#"},{depth:3,slug:"color",text:"Color#"},{depth:3,slug:"style",text:"Style#"},{depth:2,slug:"outline",text:"Outline#"},{depth:3,slug:"used-to-improve-accessibility-by-providing-visual-focus-indicators",text:"💡used to improve accessibility by providing visual focus indicators#"},{depth:3,slug:"outline-width",text:"outline-width#"},{depth:3,slug:"outline-color",text:"outline-color#"},{depth:3,slug:"outline-style",text:"outline-style#"},{depth:3,slug:"ourline-offset",text:"ourline-offset#"},{depth:2,slug:"ring",text:"Ring#"},{depth:3,slug:"to-create-a-customizable-ring-around-an-element",text:"💡to create a customizable ring around an element#"},{depth:3,slug:"width-1",text:"Width#"},{depth:3,slug:"color-1",text:"Color#"},{depth:3,slug:"offset-width",text:"Offset-width#"},{depth:3,slug:"offset-color",text:"Offset-color#"},{depth:3,slug:"️o-tailwindcss",text:"🏷️O-TailwindCSS#"},{depth:3,slug:"️box-shadow",text:"🏷️Box Shadow#"},{depth:2,slug:"border-box-explained",text:"📌Border-Box Explained#"},{depth:2,slug:"box-shadow",text:"📌Box Shadow#"}]}const Content=createComponent(((e,n,o)=>{const{layout:r,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),borders=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,borders,collection,data,id,slug};