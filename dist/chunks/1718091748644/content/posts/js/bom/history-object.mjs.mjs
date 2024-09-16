import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="history-object">History Object<a class="anchor" href="#history-object"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<ul>\n<li>Navigation\n<ul>\n<li>go()方法</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691737777316.png" alt=""></li>\n<li>负值表示在历史记录中后退</li>\n<li>正值表示在历史记录中前进</li>\n<li>有两个简写方法</li>\n<li>back()</li>\n<li>forward()</li>\n</ul>\n</li>\n<li>History State Management\n<ul>\n<li>现代 Web 应用程序开发中最难的环节之一就是历史记录管理</li>\n<li>hashchange 事件\n<ul>\n<li>hashchange 会在页面 URL 的散列变化时被触发，开发者可以在此时执行某些操作</li>\n</ul>\n</li>\n<li>HTML5 也为 history 对象增加了方便的状态管理特性</li>\n<li>状态管理 API 则可以让开发者改变浏览器 URL 而不会加载新页面\n<ul>\n<li>history.pushState()</li>\n<li>3 个参数\n<ul>\n<li>一个 state 对象</li>\n<li>一个新状态的标题</li>\n<li>一个（可选的）相对 URL</li>\n</ul>\n</li>\n<li>pushState()方法执行后，状态信息就会被推到历史记录中，浏览器地址栏也会改变以反映新的相 对 URL</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691738032094.png" alt=""></li>\n</ul>\n</li>\n<li>popstate 事件</li>\n<li>单击“后退” 按钮，就会触发</li>\n<li>event.state</li>\n<li>初次加载时没有状态</li>\n<li>会为 null</li>\n<li>history.state</li>\n<li>获取当前的状态对象</li>\n<li>replaceState()</li>\n<li>更新状态</li>\n<li>更新状态不会创建新历史记录，只会覆盖当前状态</li>\n</ul>\n</li>\n<li>表示当前窗口首次使用以来用户的导航历史记录</li>\n<li>history 是 window 的属性</li>\n<li>每个 window 都有自己的 history 对象</li>\n<li>这个对象不会暴露用户访问过的 URL， 但可以通过它在不知道实际 URL 的情况下前进和后退</li>\n</ul>',frontmatter={title:"History Object",topic:["Objects","BOM"],type:"D",tags:["JavaScript"],reviewed:null,difficulty:null,comment:null,DateStarted:"2023-08-11T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",Datereviewed:null,status:["Snooze"],aliases:["History Object"],category:"Programming",draft:!0,"linter-yaml-title-alias":"History Object",minutes:2,words:338},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/bom/history-object.md",url=void 0;function rawContent(){return"\n# History Object\n\n- Navigation\n  - go()方法\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691737777316.png)\n  - 负值表示在历史记录中后退\n  - 正值表示在历史记录中前进\n  - 有两个简写方法\n  - back()\n  - forward()\n- History State Management\n  - 现代 Web 应用程序开发中最难的环节之一就是历史记录管理\n  - hashchange 事件\n    - hashchange 会在页面 URL 的散列变化时被触发，开发者可以在此时执行某些操作\n  - HTML5 也为 history 对象增加了方便的状态管理特性\n  - 状态管理 API 则可以让开发者改变浏览器 URL 而不会加载新页面\n    - history.pushState()\n    - 3 个参数\n      - 一个 state 对象\n      - 一个新状态的标题\n      - 一个（可选的）相对 URL\n    - pushState()方法执行后，状态信息就会被推到历史记录中，浏览器地址栏也会改变以反映新的相 对 URL\n    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691738032094.png)\n  - popstate 事件\n  - 单击“后退” 按钮，就会触发\n  - event.state\n  - 初次加载时没有状态\n  - 会为 null\n  - history.state\n  - 获取当前的状态对象\n  - replaceState()\n  - 更新状态\n  - 更新状态不会创建新历史记录，只会覆盖当前状态\n- 表示当前窗口首次使用以来用户的导航历史记录\n- history 是 window 的属性\n- 每个 window 都有自己的 history 对象\n- 这个对象不会暴露用户访问过的 URL， 但可以通过它在不知道实际 URL 的情况下前进和后退\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"history-object",text:"History Object#"}]}const Content=createComponent(((n,t,i)=>{const{layout:e,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};