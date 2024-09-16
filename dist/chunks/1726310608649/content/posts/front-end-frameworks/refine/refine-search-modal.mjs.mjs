import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="refine-search-modal">Refine Search Modal<a class="anchor" href="#refine-search-modal"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h4 id="refinedevkbar">@refinedev/kbar<a class="anchor" href="#refinedevkbar"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";</code></p>\n<blockquote>\n<p>ctrl k 唤起命令面板</p>\n</blockquote>\n<ul>\n<li><a href="https://refine.dev/docs/packages/command-palette/#installation">Command Palette | Refine</a></li>\n</ul>',frontmatter={project:null,DateDone:null,DateReviewed:null,aliases:["Refine Search Modal"],title:"Refine Search Modal",topic:null,type:"D",tags:["Admin"],category:"Front-End Frameworks",Datereviewed:null,DateDue:null,reviewed:null,difficulty:null,status:null,comment:null,draft:!0,source:null,DateStarted:"2024-06-20T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z","linter-yaml-title-alias":"Refine Search Modal",minutes:1,words:20},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/refine/refine-search-modal.md",url=void 0;function rawContent(){return'# Refine Search Modal\n#### @refinedev/kbar \n`import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";`\n> ctrl k 唤起命令面板\n- [Command Palette | Refine](https://refine.dev/docs/packages/command-palette/#installation)'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"refine-search-modal",text:"Refine Search Modal#"},{depth:4,slug:"refinedevkbar",text:"@refinedev/kbar#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};