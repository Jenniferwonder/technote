import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="dataview">Dataview<a class="anchor" href="#dataview"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>功能\n<ul>\n<li>同 <a href="Typed-Array-%E5%AE%9A%E5%9E%8B%E6%95%B0%E7%BB%84">Typed Array</a></li>\n</ul>\n</li>\n<li>特点\n<ul>\n<li>for file I/O and network I/O</li>\n<li>allows for a high degree of control when manipulating buffer data, but it offers reduced performance-支持对缓冲数据高度控制，但性能相对差些</li>\n<li>does not assume anything about the buffer contents-对缓冲内容无预设</li>\n<li>is not iterable-不能迭代</li>\n</ul>\n</li>\n<li>Dataview 实例\n<ul>\n<li>特点\n<ul>\n<li>必须在对已有的 ArrayBuffer (缓冲) 读取或写入时才能创建</li>\n<li>可以使用全部或部分 ArrayBuffer</li>\n<li>维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置</li>\n</ul>\n</li>\n<li>属性\n<ul>\n<li><code>.buffer</code></li>\n<li><code>.byteOffset</code> 称为<strong>字节偏移量</strong>，即视图在缓冲中开始的位置</li>\n<li><code>byteOffset=0</code> 表示<strong>视图从缓冲第 1 个字节开始</strong></li>\n<li><strong><code>byteOffset=8</code></strong> 表示视图从缓冲的第 9 个字节开始</li>\n<li><code>.byteLength</code> 表示视图字节长度</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Dataview 实例创建方式 - new Dataview()参数 - 1st <strong>使用的 ArrayBuffer</strong> - 2nd <strong>byteOffset</strong> - 3rd <strong>byteLength</strong> - 新建一个 Dataview，让其使用整个 ArrayBuffer （默认）;;;<code>const fullDataView = new Dataview(buf);</code>\n\x3c!--SR:!2023-08-21,6,250!2023-08-22,7,250--\x3e\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span>- 新建一个Dataview，让其从缓冲起点开始，限制使用前8个字节缓冲;;; `new Dataview(buf, 0, 8)`</span></span>\n<span class="line"><span></span></span></code></pre>\n\x3c!--SR:!2023-08-23,8,250!2023-08-24,9,250--\x3e\n</li>\n<li>🟨 用 Dataview 读取缓冲，还需的几个组件\n<ul>\n<li><a href="ElementType">JS ElementType</a>\n<ul>\n<li>Dataview 针对每种 ElementType 均暴露了 <code>get</code>, <code>set</code> 方法</li>\n</ul>\n</li>\n<li><a href="Endianness-%E5%AD%97%E8%8A%82%E5%BA%8F">JS Endianness</a></li>\n<li>Corner Cases 边界情形</li>\n</ul>\n</li>\n</ul>',frontmatter={Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"dataview",type:"D",DateStarted:"2023-08-09T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",status:["Snooze"],Up:[["Typed Array-定型数组"]],aliases:["JS Dataview"],topic:["DS+"],category:"Programming",tags:["JavaScript"],draft:!0,minutes:2,words:300},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/ds-plus/dataview.md",url=void 0;function rawContent(){return"\n## Dataview\n\n- 功能\n  - 同 [Typed Array](Typed-Array-定型数组)\n- 特点\n  - for file I/O and network I/O\n  - allows for a high degree of control when manipulating buffer data, but it offers reduced performance-支持对缓冲数据高度控制，但性能相对差些\n  - does not assume anything about the buffer contents-对缓冲内容无预设\n  - is not iterable-不能迭代\n- Dataview 实例\n  - 特点\n    - 必须在对已有的 ArrayBuffer (缓冲) 读取或写入时才能创建\n    - 可以使用全部或部分 ArrayBuffer\n    - 维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置\n  - 属性\n    - `.buffer`\n    - `.byteOffset` 称为**字节偏移量**，即视图在缓冲中开始的位置\n    - `byteOffset=0` 表示**视图从缓冲第 1 个字节开始**\n    - **`byteOffset=8`** 表示视图从缓冲的第 9 个字节开始\n    - `.byteLength` 表示视图字节长度\n- Dataview 实例创建方式 - new Dataview()参数 - 1st **使用的 ArrayBuffer** - 2nd **byteOffset** - 3rd **byteLength** - 新建一个 Dataview，让其使用整个 ArrayBuffer （默认）;;;`const fullDataView = new Dataview(buf);`\n  \x3c!--SR:!2023-08-21,6,250!2023-08-22,7,250--\x3e\n      - 新建一个Dataview，让其从缓冲起点开始，限制使用前8个字节缓冲;;; `new Dataview(buf, 0, 8)`\n  \x3c!--SR:!2023-08-23,8,250!2023-08-24,9,250--\x3e\n- 🟨 用 Dataview 读取缓冲，还需的几个组件\n  - [JS ElementType](ElementType)\n    - Dataview 针对每种 ElementType 均暴露了 `get`, `set` 方法\n  - [JS Endianness](Endianness-字节序)\n  - Corner Cases 边界情形\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"dataview",text:"Dataview#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};