import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="border-radius-rounded-corners">Border Radius (Rounded Corners)<a class="anchor" href="#border-radius-rounded-corners"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="resources">Resources<a class="anchor" href="#resources"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="-fancy-border-radius-eight-values-specifying-border-radius-in-css--border-radius-generator--">| <a href="https://9elements.github.io/fancy-border-radius/full-control.html">Fancy Border Radius</a>| Eight values specifying border-radius in CSS ( border-radius generator ) |<a class="anchor" href="#-fancy-border-radius-eight-values-specifying-border-radius-in-css--border-radius-generator--"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="border-radius"><strong>border-radius</strong><a class="anchor" href="#border-radius"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="the-first-value-defining-the-horizontal-radius-and-the-second-the-vertical-radius">the first value defining the <strong>horizontal radius</strong>, and the second the <strong>vertical radius</strong><a class="anchor" href="#the-first-value-defining-the-horizontal-radius-and-the-second-the-vertical-radius"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="pass-in-one-value-which-will-be-used-for-both-horizontal-and-vertical-radius">pass in one value, which will be used for <strong>both horizontal and vertical radius</strong>.<a class="anchor" href="#pass-in-one-value-which-will-be-used-for-both-horizontal-and-vertical-radius"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={category:"Web Design",comment:null,aliases:["Border Radius (Rounded Corners)"],draft:!1,title:"Border Radius (Rounded Corners)",type:"D",tags:["CSS"],DateStarted:"2024-01-09T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,topic:"Borders",reviewed:1,Datereviewed:"2024-01-18T16:00:00.000Z",difficulty:"Good","linter-yaml-title-alias":"Border Radius (Rounded Corners)",minutes:1,words:43},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/borders/border-radius-(rounded-corners).md",url=void 0;function rawContent(){return"\n# Border Radius (Rounded Corners)\n\n## Resources\n\n### | [Fancy Border Radius](https://9elements.github.io/fancy-border-radius/full-control.html)| Eight values specifying border-radius in CSS ( border-radius generator ) |\n\n## **border-radius**\n\n### the first value defining the **horizontal radius**, and the second the **vertical radius**\n\n### pass in one value, which will be used for **both horizontal and vertical radius**.\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"border-radius-rounded-corners",text:"Border Radius (Rounded Corners)#"},{depth:2,slug:"resources",text:"Resources#"},{depth:3,slug:"-fancy-border-radius-eight-values-specifying-border-radius-in-css--border-radius-generator--",text:"| Fancy Border Radius| Eight values specifying border-radius in CSS ( border-radius generator ) |#"},{depth:2,slug:"border-radius",text:"border-radius#"},{depth:3,slug:"the-first-value-defining-the-horizontal-radius-and-the-second-the-vertical-radius",text:"the first value defining the horizontal radius, and the second the vertical radius#"},{depth:3,slug:"pass-in-one-value-which-will-be-used-for-both-horizontal-and-vertical-radius",text:"pass in one value, which will be used for both horizontal and vertical radius.#"}]}const Content=createComponent(((e,r,a)=>{const{layout:n,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};