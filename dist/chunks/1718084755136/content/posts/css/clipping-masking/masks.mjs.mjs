import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="masks">Masks<a class="anchor" href="#masks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="css-guide-masks"><a href="bookxnotepro://opennote/?nb=%7Bbc5ae4f5-ea02-4c6a-984f-69b610a3f2ed%7D&#x26;book=14e53fd3a1b92c9401bd2d3ebe0cd62b&#x26;page=1425&#x26;x=119&#x26;y=83&#x26;id=4&#x26;uuid=d9976d6245ffe7642d3d90f04f821705">CSS Guide-Masks</a><a class="anchor" href="#css-guide-masks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="define-a-mask">Define a Mask<a class="anchor" href="#define-a-mask"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="change-masks-mode">Change Mask’s Mode<a class="anchor" href="#change-masks-mode"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="sizing-masks">Sizing Masks<a class="anchor" href="#sizing-masks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="repeating-masks">Repeating Masks<a class="anchor" href="#repeating-masks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="positioning-masks">Positioning Masks<a class="anchor" href="#positioning-masks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="clipping--compositing-masks">Clipping &#x26; Compositing Masks<a class="anchor" href="#clipping--compositing-masks"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="masks-types">Masks Types<a class="anchor" href="#masks-types"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="border-image-masking">Border-image Masking<a class="anchor" href="#border-image-masking"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={category:"Web Design",Datereviewed:null,reviewed:null,comment:null,aliases:["Masks"],draft:!0,title:"Masks",type:"D",topic:"Clipping",tags:["CSS"],DateStarted:"2024-01-19T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,difficulty:"Hard","linter-yaml-title-alias":"Masks",minutes:1,words:14},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/clipping-masking/masks.md",url=void 0;function rawContent(){return"\n# Masks\n\n## Reference\n\n### [CSS Guide-Masks](bookxnotepro://opennote/?nb={bc5ae4f5-ea02-4c6a-984f-69b610a3f2ed}&book=14e53fd3a1b92c9401bd2d3ebe0cd62b&page=1425&x=119&y=83&id=4&uuid=d9976d6245ffe7642d3d90f04f821705)\n\n## Define a Mask\n\n## Change Mask's Mode\n\n## Sizing Masks\n\n## Repeating Masks\n\n## Positioning Masks\n\n## Clipping & Compositing Masks\n\n## Masks Types\n\n## Border-image Masking\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"masks",text:"Masks#"},{depth:2,slug:"reference",text:"Reference#"},{depth:3,slug:"css-guide-masks",text:"CSS Guide-Masks#"},{depth:2,slug:"define-a-mask",text:"Define a Mask#"},{depth:2,slug:"change-masks-mode",text:"Change Mask’s Mode#"},{depth:2,slug:"sizing-masks",text:"Sizing Masks#"},{depth:2,slug:"repeating-masks",text:"Repeating Masks#"},{depth:2,slug:"positioning-masks",text:"Positioning Masks#"},{depth:2,slug:"clipping--compositing-masks",text:"Clipping & Compositing Masks#"},{depth:2,slug:"masks-types",text:"Masks Types#"},{depth:2,slug:"border-image-masking",text:"Border-image Masking#"}]}const Content=createComponent(((a,s,e)=>{const{layout:n,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};