import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="endianness-字节序">Endianness 字节序<a class="anchor" href="#endianness-字节序"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>定义\n<ul>\n<li>计算系统维护的一种字节顺序的约定</li>\n</ul>\n</li>\n<li>Dataview 支持的字节序\n<ul>\n<li>Big-Endian (大端字节序) -默认\n<ul>\n<li>也称为“网络字节序”，意思 是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节</li>\n</ul>\n</li>\n<li>Small-Endian (小端字节序)\n<ul>\n<li>正好相反，即最低有效位保存在第一个字节，最高有效位保存在最后一个字节</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>',frontmatter={Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"endianness-字节序",type:"D",DateStarted:"2023-08-09T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:["Snooze"],aliases:["Endianness","字节序"],Up:[["Typed Array-定型数组"]],topic:["DS+"],category:"Programming",tags:["JavaScript"],draft:!0,minutes:1,words:118},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/ds-plus/endianness-字节序.md",url=void 0;function rawContent(){return"\n## Endianness 字节序\n\n- 定义\n  - 计算系统维护的一种字节顺序的约定\n- Dataview 支持的字节序\n  - Big-Endian (大端字节序) -默认\n    - 也称为“网络字节序”，意思 是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节\n  - Small-Endian (小端字节序)\n    - 正好相反，即最低有效位保存在第一个字节，最高有效位保存在最后一个字节\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"endianness-字节序",text:"Endianness 字节序#"}]}const Content=createComponent(((n,e,t)=>{const{layout:a,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};