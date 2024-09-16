import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="css-images-videos-and-other-replaced-elements">CSS Images, videos and other replaced elements<a class="anchor" href="#css-images-videos-and-other-replaced-elements"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="replaced-elements">Replaced elements<a class="anchor" href="#replaced-elements"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="a-replaced-element-is-an-element-whose-representation-is-outside-the-scope-of-css">a replaced element is <strong>an element whose representation is outside the scope of CSS</strong><a class="anchor" href="#a-replaced-element-is-an-element-whose-representation-is-outside-the-scope-of-css"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="the-position-of-the-replaced-element-can-be-affected-using-css-but-not-the-contents">The <strong>position</strong> of the replaced element can be affected using CSS, but not the <strong>contents</strong><a class="anchor" href="#the-position-of-the-replaced-element-can-be-affected-using-css-but-not-the-contents"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="having-an-aspect-ratio-will-be-displayed-using-the-intrinsic-dimensions-of-the-file-by-defaul">having an aspect ratio will be displayed using the intrinsic dimensions of the file by defaul<a class="anchor" href="#having-an-aspect-ratio-will-be-displayed-using-the-intrinsic-dimensions-of-the-file-by-defaul"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="reference-httpsdevelopermozillaorgen-usdocswebcssreplaced_element">Reference: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element">https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element</a><a class="anchor" href="#reference-httpsdevelopermozillaorgen-usdocswebcssreplaced_element"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="replaced-elements-in-layout">Replaced elements in layout<a class="anchor" href="#replaced-elements-in-layout"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>replaced elements, when they become part of a grid or flex layout, have different default behaviors</li>\n</ul>\n<h2 id="sizing-images">Sizing images<a class="anchor" href="#sizing-images"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="responsive-image">Responsive image<a class="anchor" href="#responsive-image"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>max-width: 100%</code>\n<ul>\n<li>to prevent image overflow while retaining aspect ratio</li>\n</ul>\n</li>\n<li><code>height: auto</code></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images">Responsive Image Techniques</a></li>\n</ul>\n<h3 id="object-fit"><code>object-fit</code><a class="anchor" href="#object-fit"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>object-fit: cover</code>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695297488732image.png" alt=""></li>\n</ul>\n</li>\n<li><code>object-fit: contain</code>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695297501729image.png" alt=""></li>\n</ul>\n</li>\n<li><code>object-fit: fill</code>\n<ul>\n<li>fill the box without keeping aspect ratio</li>\n</ul>\n</li>\n</ul>',frontmatter={category:"Web Design",aliases:["CSS Images, videos and other replaced elements"],draft:!1,title:"CSS Images, videos and other replaced elements",type:"D",tags:["CSS"],status:null,DateStarted:"2023-09-21T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",difficulty:"Good",reviewed:2,Datereviewed:"2024-01-18T16:00:00.000Z",comment:"⭐⭐⭐",topic:["Sizing"],"linter-yaml-title-alias":"CSS Images, videos and other replaced elements",minutes:1,words:91},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/sizing-units-and-values/css-image-video-and-other-replaced-elements.md",url=void 0;function rawContent(){return"\n# CSS Images, videos and other replaced elements\n\n## Replaced elements\n\n### a replaced element is **an element whose representation is outside the scope of CSS**\n\n### The **position** of the replaced element can be affected using CSS, but not the **contents**\n\n### having an aspect ratio will be displayed using the intrinsic dimensions of the file by defaul\n\n### Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element\n\n### Replaced elements in layout\n\n- replaced elements, when they become part of a grid or flex layout, have different default behaviors\n\n## Sizing images\n\n### Responsive image\n\n- `max-width: 100%`\n  - to prevent image overflow while retaining aspect ratio\n- `height: auto`\n- [Responsive Image Techniques](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)\n\n### `object-fit`\n\n- `object-fit: cover`\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695297488732image.png)\n- `object-fit: contain`\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695297501729image.png)\n- `object-fit: fill`\n  - fill the box without keeping aspect ratio\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"css-images-videos-and-other-replaced-elements",text:"CSS Images, videos and other replaced elements#"},{depth:2,slug:"replaced-elements",text:"Replaced elements#"},{depth:3,slug:"a-replaced-element-is-an-element-whose-representation-is-outside-the-scope-of-css",text:"a replaced element is an element whose representation is outside the scope of CSS#"},{depth:3,slug:"the-position-of-the-replaced-element-can-be-affected-using-css-but-not-the-contents",text:"The position of the replaced element can be affected using CSS, but not the contents#"},{depth:3,slug:"having-an-aspect-ratio-will-be-displayed-using-the-intrinsic-dimensions-of-the-file-by-defaul",text:"having an aspect ratio will be displayed using the intrinsic dimensions of the file by defaul#"},{depth:3,slug:"reference-httpsdevelopermozillaorgen-usdocswebcssreplaced_element",text:"Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element#"},{depth:3,slug:"replaced-elements-in-layout",text:"Replaced elements in layout#"},{depth:2,slug:"sizing-images",text:"Sizing images#"},{depth:3,slug:"responsive-image",text:"Responsive image#"},{depth:3,slug:"object-fit",text:"object-fit#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};