import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="https-security">HTTPS Security<a class="anchor" href="#https-security"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h5 id="网络传输安全">网络传输安全<a class="anchor" href="#网络传输安全"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h5>\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=wHjoW%2BzJeyWLdiYiZ%2BLJMw%3D%3D.xBL7F96im3%2FVStoN6m%2FolhOnOoYMLk34TJ3zRp13wj4Y96m4wPe%2FZaklofo3bN4h2%2F8d5FUTt23gTL%2BO6TsNGQ%3D%3D">HTTPS 中间人攻击实践（原理·实践）</a></li>\n</ul>',frontmatter={category:"Network",title:"HTTPS Security",topic:null,type:null,tags:["Security","Network"],DateStarted:"2024-04-11T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["HTTPS Security"],"linter-yaml-title-alias":"HTTPS Security",minutes:1,words:21},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/security/https-security.md",url=void 0;function rawContent(){return"\n# HTTPS Security\n\n##### 网络传输安全\n\n- [HTTPS 中间人攻击实践（原理·实践）](https://link.segmentfault.com/?enc=wHjoW%2BzJeyWLdiYiZ%2BLJMw%3D%3D.xBL7F96im3%2FVStoN6m%2FolhOnOoYMLk34TJ3zRp13wj4Y96m4wPe%2FZaklofo3bN4h2%2F8d5FUTt23gTL%2BO6TsNGQ%3D%3D)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"https-security",text:"HTTPS Security#"},{depth:5,slug:"网络传输安全",text:"网络传输安全#"}]}const Content=createComponent(((t,e,n)=>{const{layout:o,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};