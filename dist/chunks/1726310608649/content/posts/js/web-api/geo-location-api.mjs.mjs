import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="geolocation-api">Geolocation API<a class="anchor" href="#geolocation-api"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>',frontmatter={title:"Geolocation API",topic:null,type:null,tags:["JavaScript"],category:"Programming",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["Geolocation API"],draft:!1,DateStarted:"2024-04-25T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z","linter-yaml-title-alias":"Geolocation API",minutes:1,words:2},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/web-api/geo-location-api.md",url=void 0;function rawContent(){return"# Geolocation API"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"geolocation-api",text:"Geolocation API#"}]}const Content=createComponent(((e,t,o)=>{const{layout:n,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};