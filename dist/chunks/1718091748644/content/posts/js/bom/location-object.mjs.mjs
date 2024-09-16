import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="the-location-object">THE LOCATION OBJECT<a class="anchor" href="#the-location-object"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Query String Arguments\n<ul>\n<li>URLSearchParams</li>\n<li>location.search\n<ul>\n<li>返回了从问号开始直到 URL 末尾的所有内容，但没有办法逐个访问每个查询参数</li>\n</ul>\n</li>\n<li>URLSearchParams\n<ul>\n<li>提供了一组标准 API 方法，通过它们可以检查和修改查询字符串</li>\n<li>给 URLSearchParams 构造函数传入一个查询字符串，就可以创建一个实例</li>\n<li>这个实例上暴露了 get()、 set()和 delete()等方法，可以对查询字符串执行相应操作</li>\n<li>大多数支持 URLSearchParams 的浏览器也支持将 URLSearchParams 的实例用作可迭代对象</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Manipulating the Location\n<ul>\n<li>assign()方法</li>\n<li>传入一 个 URL</li>\n<li>可以通过修改 location 对象修改浏览器的地址</li>\n<li>location.assign(<a href="http://www.wrox.com">http://www.wrox.com</a>);</li>\n<li>这行代码会立即启动导航到新 URL 的操作，同时在浏览器历史记录中增加一条记录</li>\n<li>如果给 location.href 或 window.location 设置一个 URL，也会以同一个 URL 值调用 assign()方法。</li>\n<li>3 种修改浏览器地址的方法中，设置 location.href 是最常见的。</li>\n<li>window.location = <a href="http://www.wrox.com">http://www.wrox.com</a>;</li>\n<li>location.href = <a href="http://www.wrox.com">http://www.wrox.com</a>;</li>\n<li>修改 location 对象的属性也会修改当前加载的页面。其中，hash、search、hostname、pathname 和 port 属性被设置为新值之后都会修改当前 URL</li>\n<li>reload()</li>\n<li>能重新加载当前显示的页面</li>\n<li>replace()方法</li>\n<li>这个方法接 收一个 URL 参数，但重新加载后不会增加历史记录</li>\n<li>调用 replace()之后，用户不能回到前一页</li>\n</ul>\n</li>\n<li>提供了当前窗口中加载文档的信息，以及通常的导航功能。</li>\n<li>它既是 window 的属性，也是 document 的属性</li>\n<li>window.location 和 document.location 指向同一个对象</li>\n<li>不仅保存着当前加载文 档的信息</li>\n<li>也保存着把 URL 解析为离散片段后能够通过属性访问的信息</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691737032733.png" alt=""></li>\n</ul>',frontmatter={title:"location-object",type:"D",tags:["JavaScript"],topic:["Objects","BOM"],Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,DateStarted:"2023-08-11T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",category:"Programming",draft:!0,minutes:2,words:436},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/bom/location-object.md",url=void 0;function rawContent(){return"\n## THE LOCATION OBJECT\n\n- Query String Arguments\n  - URLSearchParams\n  - location.search\n    - 返回了从问号开始直到 URL 末尾的所有内容，但没有办法逐个访问每个查询参数\n  - URLSearchParams\n    - 提供了一组标准 API 方法，通过它们可以检查和修改查询字符串\n    - 给 URLSearchParams 构造函数传入一个查询字符串，就可以创建一个实例\n    - 这个实例上暴露了 get()、 set()和 delete()等方法，可以对查询字符串执行相应操作\n    - 大多数支持 URLSearchParams 的浏览器也支持将 URLSearchParams 的实例用作可迭代对象\n- Manipulating the Location\n  - assign()方法\n  - 传入一 个 URL\n  - 可以通过修改 location 对象修改浏览器的地址\n  - location.assign(http://www.wrox.com);\n  - 这行代码会立即启动导航到新 URL 的操作，同时在浏览器历史记录中增加一条记录\n  - 如果给 location.href 或 window.location 设置一个 URL，也会以同一个 URL 值调用 assign()方法。\n  - 3 种修改浏览器地址的方法中，设置 location.href 是最常见的。\n  - window.location = http://www.wrox.com;\n  - location.href = http://www.wrox.com;\n  - 修改 location 对象的属性也会修改当前加载的页面。其中，hash、search、hostname、pathname 和 port 属性被设置为新值之后都会修改当前 URL\n  - reload()\n  - 能重新加载当前显示的页面\n  - replace()方法\n  - 这个方法接 收一个 URL 参数，但重新加载后不会增加历史记录\n  - 调用 replace()之后，用户不能回到前一页\n- 提供了当前窗口中加载文档的信息，以及通常的导航功能。\n- 它既是 window 的属性，也是 document 的属性\n- window.location 和 document.location 指向同一个对象\n- 不仅保存着当前加载文 档的信息\n- 也保存着把 URL 解析为离散片段后能够通过属性访问的信息\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691737032733.png)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"the-location-object",text:"THE LOCATION OBJECT#"}]}const Content=createComponent(((n,t,e)=>{const{layout:o,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};