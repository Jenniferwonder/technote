import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="weakset">WeakSet<a class="anchor" href="#weakset"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="基本-api">基本 API<a class="anchor" href="#基本-api"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>弱集合中的值只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置值会抛出 TypeError</li>\n<li>构造函数可以接收一个可迭代对象，其中需要包含有效的值</li>\n<li>const ws1 = new WeakSet([val1, val2, val3]);</li>\n<li>const ws2 = new WeakSet([val1, BADVAL, val3]); // TypeError: Invalid value used in WeakSet typeof ws2; // ReferenceError: ws2 is not defined</li>\n<li>// 原始值可以先包装成对象再用作值 const stringVal = new String(val1); const ws3 = new WeakSet([stringVal]); alert(ws3.has(stringVal)); // true</li>\n<li>add()</li>\n<li>has()</li>\n<li>delete()</li>\n</ul>\n<h2 id="弱值">弱值<a class="anchor" href="#弱值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>值不属于正式的引用， 不会阻止垃圾回收</li>\n</ul>\n<h2 id="不可迭代值">不可迭代值<a class="anchor" href="#不可迭代值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>因为 WeakSet 中的值任何时候都可能被销毁，所以没必要提供迭代其值的能力</li>\n<li>之所以限制只能用对象作为值，是为了保证只有通过值对象的引用才能取得值。</li>\n</ul>\n<h2 id="使用弱集合">使用弱集合<a class="anchor" href="#使用弱集合"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>弱集合在给对象打标签时还是有 价值的</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691561411853.png" alt="">\n<ul>\n<li>通过查询元素在不在 disabledElements 中，就可以知道它是不是被禁用了</li>\n</ul>\n</li>\n</ul>',frontmatter={Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["WeakSet"],title:"WeakSet",type:"D",DateStarted:"2023-08-06T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",status:"Snooze",pages:7,Pomo:1,Up:[["C06-Collection Reference Type-集合引用类型"]],topic:["DS+"],category:"Programming",tags:["JavaScript"],draft:!0,"linter-yaml-title-alias":"WeakSet",minutes:1,words:251},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/ds-plus/weakset.md",url=void 0;function rawContent(){return"\n# WeakSet\n\n## 基本 API\n\n- 弱集合中的值只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置值会抛出 TypeError\n- 构造函数可以接收一个可迭代对象，其中需要包含有效的值\n- const ws1 = new WeakSet([val1, val2, val3]);\n- const ws2 = new WeakSet([val1, BADVAL, val3]); // TypeError: Invalid value used in WeakSet typeof ws2; // ReferenceError: ws2 is not defined\n- // 原始值可以先包装成对象再用作值 const stringVal = new String(val1); const ws3 = new WeakSet([stringVal]); alert(ws3.has(stringVal)); // true\n- add()\n- has()\n- delete()\n\n## 弱值\n\n- 值不属于正式的引用， 不会阻止垃圾回收\n\n## 不可迭代值\n\n- 因为 WeakSet 中的值任何时候都可能被销毁，所以没必要提供迭代其值的能力\n- 之所以限制只能用对象作为值，是为了保证只有通过值对象的引用才能取得值。\n\n## 使用弱集合\n\n- 弱集合在给对象打标签时还是有 价值的\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691561411853.png)\n  - 通过查询元素在不在 disabledElements 中，就可以知道它是不是被禁用了\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"weakset",text:"WeakSet#"},{depth:2,slug:"基本-api",text:"基本 API#"},{depth:2,slug:"弱值",text:"弱值#"},{depth:2,slug:"不可迭代值",text:"不可迭代值#"},{depth:2,slug:"使用弱集合",text:"使用弱集合#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};