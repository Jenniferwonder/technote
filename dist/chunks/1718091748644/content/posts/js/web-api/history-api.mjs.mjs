import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="history-api">History API<a class="anchor" href="#history-api"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>',frontmatter={title:"History API",topic:null,type:null,tags:["JavaScript"],category:"Programming",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["History API"],draft:!0,DateStarted:"2024-04-25T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z","linter-yaml-title-alias":"History API",minutes:1,words:2},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/web-api/history-api.md",url=void 0;function rawContent(){return"# History API"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"history-api",text:"History API#"}]}const Content=createComponent(((t,e,r)=>{const{layout:n,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};