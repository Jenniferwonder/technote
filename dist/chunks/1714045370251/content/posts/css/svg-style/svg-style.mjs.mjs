import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="svg-style">SVG Style<a class="anchor" href="#svg-style"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="fill">Fill<a class="anchor" href="#fill"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="stroke">Stroke<a class="anchor" href="#stroke"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="stroke-width">Stroke Width<a class="anchor" href="#stroke-width"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={category:"Web Design",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["SVG Style"],draft:!0,title:"SVG Style",type:"D",topic:null,tags:["CSS"],DateStarted:"2024-01-22T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,"linter-yaml-title-alias":"SVG Style",minutes:1,words:3},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/svg-style/svg-style.md",url=void 0;function rawContent(){return"\n# SVG Style\n\n## Fill\n\n## Stroke\n\n## Stroke Width\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"svg-style",text:"SVG Style#"},{depth:2,slug:"fill",text:"Fill#"},{depth:2,slug:"stroke",text:"Stroke#"},{depth:2,slug:"stroke-width",text:"Stroke Width#"}]}const Content=createComponent(((e,t,n)=>{const{layout:a,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};