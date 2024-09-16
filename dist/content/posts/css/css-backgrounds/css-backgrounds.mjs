import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="css/css-backgrounds/css-backgrounds.md",collection="posts",slug="css/css-backgrounds/css-backgrounds",body="\n# Backgrounds\n\n## Shorthand Property & Values\n\n### `background: url(bg-graphic.png) 10px 10px repeat-x fixed, red;`\n\n```css\n  background-color: red;\n  background-image: url(bg-graphic.png);\n  background-position: 10px 10px;\n  background-repeat: repeat-x;\n  background-attachment: fixed;\n```\n\n### A background-color may only be specified **after the final comma**\n\n### The value of `background-size` may only be included immediately after **`background-position`**, separated with the '/' character, like this: center/80%\n\n## `background-image`\n\n### Image URL (absolute/ relative)\n\n- `url('moon.jpg')`\n\n### ⭐Gradient backgrounds\n\n- `linear-gradient (to left, color 1, color 2)`\n- `radial-gradient(circle, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%)`\n- 📌[Gradient Generator](https://cssgradient.io/)\n\n### Multiple background images\n\n- Each value of the different properties will match up to the values in the same position in the other properties.\n\n### Image & Gradient Combination\n\n## `background-repeat`\n\n### `no-repeat`\n\n- stop the background from repeating altogether.\n\n### `repeat-x`\n\n- repeat horizontally\n\n### `repeat-y`\n\n- repeat vertically\n\n### `repeat`\n\n- the default; repeat in both directions\n\n## `background-position`\n\n### uses a coordinate system in which the **top-left-hand corner** of the box is (0,0)\n\n### 2 value\n\n- **horizontal, vertical**\n  - `background-position: top center;`\n  - `background-position: 20px 10%;`\n  - `background-position: 20px top;`\n\n### 4 value\n\n- indicate a distance from certain edges of the box\n- 📌positioning the background **20px from the top and 10px from the right**\n  - `background-position: top 20px right 10px;`\n\n## `background-size`\n\n### `cover`\n\n- make the image just large enough so that it completely covers the box area while still retaining its aspect ratio\n- 📌part of the image may end up outside the box\n\n### `contain`\n\n- make the image the right size to fit inside the box\n- 📌may end up with gaps on either side\n\n### length or percentage value\n\n- `background-size: 100px 10em;`\n\n## `background-attachment`\n\n### `scroll`\n\n- causes the element's background to **scroll when the page is scrolled**\n\n### `fixed`\n\n- causes an element's background to **be fixed to the viewport**\n\n### `local`\n\n- fixes the background to **the element it is set on**\n\n### 📌 [Demo](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)\n\n## `background-color`\n\n### Define background color\n\n## 📌Accessibility consideration\n\n### Any important content should be part of the HTML page and not contained in a background.\n",data={title:"CSS Backgrounds",DateStarted:new Date(1695168e6),draft:!1,tags:["CSS"],category:"Web Design"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/css-backgrounds/css-backgrounds.md",rawData:void 0},html='<h1 id="backgrounds">Backgrounds<a class="anchor" href="#backgrounds"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="shorthand-property--values">Shorthand Property &#x26; Values<a class="anchor" href="#shorthand-property--values"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="background-urlbg-graphicpng-10px-10px-repeat-x-fixed-red"><code>background: url(bg-graphic.png) 10px 10px repeat-x fixed, red;</code><a class="anchor" href="#background-urlbg-graphicpng-10px-10px-repeat-x-fixed-red"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#85E89D">  background-color</span><span style="color:#E1E4E8">: red;</span></span>\n<span class="line"><span style="color:#85E89D">  background-image</span><span style="color:#E1E4E8">: url(</span><span style="color:#85E89D">bg-graphic</span><span style="color:#B392F0">.png</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#85E89D">  background-position</span><span style="color:#E1E4E8">: 10px 10px;</span></span>\n<span class="line"><span style="color:#85E89D">  background-repeat</span><span style="color:#E1E4E8">: </span><span style="color:#85E89D">repeat-x</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#85E89D">  background-attachment</span><span style="color:#E1E4E8">: fixed;</span></span>\n<span class="line"></span></code></pre>\n<h3 id="a-background-color-may-only-be-specified-after-the-final-comma">A background-color may only be specified <strong>after the final comma</strong><a class="anchor" href="#a-background-color-may-only-be-specified-after-the-final-comma"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="the-value-of-background-size-may-only-be-included-immediately-after-background-position-separated-with-the--character-like-this-center80">The value of <code>background-size</code> may only be included immediately after <strong><code>background-position</code></strong>, separated with the ’/’ character, like this: center/80%<a class="anchor" href="#the-value-of-background-size-may-only-be-included-immediately-after-background-position-separated-with-the--character-like-this-center80"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="background-image"><code>background-image</code><a class="anchor" href="#background-image"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="image-url-absolute-relative">Image URL (absolute/ relative)<a class="anchor" href="#image-url-absolute-relative"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>url(\'moon.jpg\')</code></li>\n</ul>\n<h3 id="gradient-backgrounds">⭐Gradient backgrounds<a class="anchor" href="#gradient-backgrounds"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>linear-gradient (to left, color 1, color 2)</code></li>\n<li><code>radial-gradient(circle, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%)</code></li>\n<li>📌<a href="https://cssgradient.io/">Gradient Generator</a></li>\n</ul>\n<h3 id="multiple-background-images">Multiple background images<a class="anchor" href="#multiple-background-images"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Each value of the different properties will match up to the values in the same position in the other properties.</li>\n</ul>\n<h3 id="image--gradient-combination">Image &#x26; Gradient Combination<a class="anchor" href="#image--gradient-combination"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="background-repeat"><code>background-repeat</code><a class="anchor" href="#background-repeat"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="no-repeat"><code>no-repeat</code><a class="anchor" href="#no-repeat"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>stop the background from repeating altogether.</li>\n</ul>\n<h3 id="repeat-x"><code>repeat-x</code><a class="anchor" href="#repeat-x"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>repeat horizontally</li>\n</ul>\n<h3 id="repeat-y"><code>repeat-y</code><a class="anchor" href="#repeat-y"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>repeat vertically</li>\n</ul>\n<h3 id="repeat"><code>repeat</code><a class="anchor" href="#repeat"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>the default; repeat in both directions</li>\n</ul>\n<h2 id="background-position"><code>background-position</code><a class="anchor" href="#background-position"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="uses-a-coordinate-system-in-which-the-top-left-hand-corner-of-the-box-is-00">uses a coordinate system in which the <strong>top-left-hand corner</strong> of the box is (0,0)<a class="anchor" href="#uses-a-coordinate-system-in-which-the-top-left-hand-corner-of-the-box-is-00"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="2-value">2 value<a class="anchor" href="#2-value"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><strong>horizontal, vertical</strong>\n<ul>\n<li><code>background-position: top center;</code></li>\n<li><code>background-position: 20px 10%;</code></li>\n<li><code>background-position: 20px top;</code></li>\n</ul>\n</li>\n</ul>\n<h3 id="4-value">4 value<a class="anchor" href="#4-value"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>indicate a distance from certain edges of the box</li>\n<li>📌positioning the background <strong>20px from the top and 10px from the right</strong>\n<ul>\n<li><code>background-position: top 20px right 10px;</code></li>\n</ul>\n</li>\n</ul>\n<h2 id="background-size"><code>background-size</code><a class="anchor" href="#background-size"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="cover"><code>cover</code><a class="anchor" href="#cover"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>make the image just large enough so that it completely covers the box area while still retaining its aspect ratio</li>\n<li>📌part of the image may end up outside the box</li>\n</ul>\n<h3 id="contain"><code>contain</code><a class="anchor" href="#contain"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>make the image the right size to fit inside the box</li>\n<li>📌may end up with gaps on either side</li>\n</ul>\n<h3 id="length-or-percentage-value">length or percentage value<a class="anchor" href="#length-or-percentage-value"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>background-size: 100px 10em;</code></li>\n</ul>\n<h2 id="background-attachment"><code>background-attachment</code><a class="anchor" href="#background-attachment"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="scroll"><code>scroll</code><a class="anchor" href="#scroll"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>causes the element’s background to <strong>scroll when the page is scrolled</strong></li>\n</ul>\n<h3 id="fixed"><code>fixed</code><a class="anchor" href="#fixed"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>causes an element’s background to <strong>be fixed to the viewport</strong></li>\n</ul>\n<h3 id="local"><code>local</code><a class="anchor" href="#local"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>fixes the background to <strong>the element it is set on</strong></li>\n</ul>\n<h3 id="-demo">📌 <a href="https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html">Demo</a><a class="anchor" href="#-demo"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="background-color"><code>background-color</code><a class="anchor" href="#background-color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="define-background-color">Define background color<a class="anchor" href="#define-background-color"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="accessibility-consideration">📌Accessibility consideration<a class="anchor" href="#accessibility-consideration"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="any-important-content-should-be-part-of-the-html-page-and-not-contained-in-a-background">Any important content should be part of the HTML page and not contained in a background.<a class="anchor" href="#any-important-content-should-be-part-of-the-html-page-and-not-contained-in-a-background"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={category:"Web Design",aliases:["CSS Backgrounds"],draft:!1,title:"CSS Backgrounds",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-20T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",difficulty:"Hard",reviewed:1,Datereviewed:"2023-09-22T16:00:00.000Z",comment:"⭐",topic:["Background"],"linter-yaml-title-alias":"CSS Backgrounds",minutes:1,words:241},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/css-backgrounds/css-backgrounds.md",url=void 0;function rawContent(){return"\n# Backgrounds\n\n## Shorthand Property & Values\n\n### `background: url(bg-graphic.png) 10px 10px repeat-x fixed, red;`\n\n```css\n  background-color: red;\n  background-image: url(bg-graphic.png);\n  background-position: 10px 10px;\n  background-repeat: repeat-x;\n  background-attachment: fixed;\n```\n\n### A background-color may only be specified **after the final comma**\n\n### The value of `background-size` may only be included immediately after **`background-position`**, separated with the '/' character, like this: center/80%\n\n## `background-image`\n\n### Image URL (absolute/ relative)\n\n- `url('moon.jpg')`\n\n### ⭐Gradient backgrounds\n\n- `linear-gradient (to left, color 1, color 2)`\n- `radial-gradient(circle, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%)`\n- 📌[Gradient Generator](https://cssgradient.io/)\n\n### Multiple background images\n\n- Each value of the different properties will match up to the values in the same position in the other properties.\n\n### Image & Gradient Combination\n\n## `background-repeat`\n\n### `no-repeat`\n\n- stop the background from repeating altogether.\n\n### `repeat-x`\n\n- repeat horizontally\n\n### `repeat-y`\n\n- repeat vertically\n\n### `repeat`\n\n- the default; repeat in both directions\n\n## `background-position`\n\n### uses a coordinate system in which the **top-left-hand corner** of the box is (0,0)\n\n### 2 value\n\n- **horizontal, vertical**\n  - `background-position: top center;`\n  - `background-position: 20px 10%;`\n  - `background-position: 20px top;`\n\n### 4 value\n\n- indicate a distance from certain edges of the box\n- 📌positioning the background **20px from the top and 10px from the right**\n  - `background-position: top 20px right 10px;`\n\n## `background-size`\n\n### `cover`\n\n- make the image just large enough so that it completely covers the box area while still retaining its aspect ratio\n- 📌part of the image may end up outside the box\n\n### `contain`\n\n- make the image the right size to fit inside the box\n- 📌may end up with gaps on either side\n\n### length or percentage value\n\n- `background-size: 100px 10em;`\n\n## `background-attachment`\n\n### `scroll`\n\n- causes the element's background to **scroll when the page is scrolled**\n\n### `fixed`\n\n- causes an element's background to **be fixed to the viewport**\n\n### `local`\n\n- fixes the background to **the element it is set on**\n\n### 📌 [Demo](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)\n\n## `background-color`\n\n### Define background color\n\n## 📌Accessibility consideration\n\n### Any important content should be part of the HTML page and not contained in a background.\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"backgrounds",text:"Backgrounds#"},{depth:2,slug:"shorthand-property--values",text:"Shorthand Property & Values#"},{depth:3,slug:"background-urlbg-graphicpng-10px-10px-repeat-x-fixed-red",text:"background: url(bg-graphic.png) 10px 10px repeat-x fixed, red;#"},{depth:3,slug:"a-background-color-may-only-be-specified-after-the-final-comma",text:"A background-color may only be specified after the final comma#"},{depth:3,slug:"the-value-of-background-size-may-only-be-included-immediately-after-background-position-separated-with-the--character-like-this-center80",text:"The value of background-size may only be included immediately after background-position, separated with the ’/’ character, like this: center/80%#"},{depth:2,slug:"background-image",text:"background-image#"},{depth:3,slug:"image-url-absolute-relative",text:"Image URL (absolute/ relative)#"},{depth:3,slug:"gradient-backgrounds",text:"⭐Gradient backgrounds#"},{depth:3,slug:"multiple-background-images",text:"Multiple background images#"},{depth:3,slug:"image--gradient-combination",text:"Image & Gradient Combination#"},{depth:2,slug:"background-repeat",text:"background-repeat#"},{depth:3,slug:"no-repeat",text:"no-repeat#"},{depth:3,slug:"repeat-x",text:"repeat-x#"},{depth:3,slug:"repeat-y",text:"repeat-y#"},{depth:3,slug:"repeat",text:"repeat#"},{depth:2,slug:"background-position",text:"background-position#"},{depth:3,slug:"uses-a-coordinate-system-in-which-the-top-left-hand-corner-of-the-box-is-00",text:"uses a coordinate system in which the top-left-hand corner of the box is (0,0)#"},{depth:3,slug:"2-value",text:"2 value#"},{depth:3,slug:"4-value",text:"4 value#"},{depth:2,slug:"background-size",text:"background-size#"},{depth:3,slug:"cover",text:"cover#"},{depth:3,slug:"contain",text:"contain#"},{depth:3,slug:"length-or-percentage-value",text:"length or percentage value#"},{depth:2,slug:"background-attachment",text:"background-attachment#"},{depth:3,slug:"scroll",text:"scroll#"},{depth:3,slug:"fixed",text:"fixed#"},{depth:3,slug:"local",text:"local#"},{depth:3,slug:"-demo",text:"📌 Demo#"},{depth:2,slug:"background-color",text:"background-color#"},{depth:3,slug:"define-background-color",text:"Define background color#"},{depth:2,slug:"accessibility-consideration",text:"📌Accessibility consideration#"},{depth:3,slug:"any-important-content-should-be-part-of-the-html-page-and-not-contained-in-a-background",text:"Any important content should be part of the HTML page and not contained in a background.#"}]}const Content=createComponent(((n,e,a)=>{const{layout:o,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),cssBackgrounds=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,cssBackgrounds,data,id,slug};