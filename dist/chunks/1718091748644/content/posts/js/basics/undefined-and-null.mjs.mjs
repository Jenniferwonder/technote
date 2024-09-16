import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="undefined-and-null">Undefined and Null<a class="anchor" href="#undefined-and-null"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="the-null-type">The Null Type<a class="anchor" href="#the-null-type"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Logically, a null value is an empty object pointer, which is why typeof returns object</li>\n<li>Even though null and undefined are related, they have very different uses</li>\n<li>Any time an object is expected but is not available, null should be used in its place.</li>\n<li>This helps to keep the paradigm of null as an empty object pointer and further differentiates it from undefined.</li>\n<li>The null type is falsy</li>\n</ul>\n<h2 id="the-undefined-type">The Undefined Type<a class="anchor" href="#the-undefined-type"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>The Undefined type has only one value, which is the special value undefined</li>\n<li>explicitly initialized to be undefined. This is unnecessary</li>\n<li>to help formalize the difference between an empty object pointer (null) and an uninitialized variable</li>\n<li>The value undefined is falsy</li>\n</ul>',frontmatter={draft:!1,topic:["Basics"],type:"D",tags:["JavaScript"],Datereviewed:null,reviewed:2,difficulty:null,comment:null,aliases:["Undefined and Null"],title:"Undefined and Null",DateStarted:"2023-07-28T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:["Mature"],"linter-yaml-title-alias":"Undefined and Null",category:"Programming",minutes:1,words:107},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/basics/undefined-and-null.md",url=void 0;function rawContent(){return"\n# Undefined and Null\n\n## The Null Type\n\n- Logically, a null value is an empty object pointer, which is why typeof returns object\n- Even though null and undefined are related, they have very different uses\n- Any time an object is expected but is not available, null should be used in its place.\n- This helps to keep the paradigm of null as an empty object pointer and further differentiates it from undefined.\n- The null type is falsy\n\n## The Undefined Type\n\n- The Undefined type has only one value, which is the special value undefined\n- explicitly initialized to be undefined. This is unnecessary\n- to help formalize the difference between an empty object pointer (null) and an uninitialized variable\n- The value undefined is falsy\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"undefined-and-null",text:"Undefined and Null#"},{depth:2,slug:"the-null-type",text:"The Null Type#"},{depth:2,slug:"the-undefined-type",text:"The Undefined Type#"}]}const Content=createComponent(((e,n,t)=>{const{layout:i,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};